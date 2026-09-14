import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

const SITE_URL = 'https://riverthink.com';
const AUTHOR = 'Peter Wood';
const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');
const OUTPUT_DIR = path.join(process.cwd(), 'migration', 'substack');
const PUBLIC_OUTPUT_DIR = path.join(process.cwd(), 'public', 'substack-import');

// These articles already exist in the Riverthink Substack feed as of 14 September 2026.
const EXISTING_SUBSTACK_SLUGS = new Set([
  'ai-randomised-trial',
  'agent-memory',
  'agent-identity-for-executives',
  'software-defined-care',
]);

function cdata(value = '') {
  return String(value).replaceAll(']]>', ']]]]><![CDATA[>');
}

function xml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function absoluteUrls(html) {
  return html
    .replace(/(src|href)=(['"])\/(?!\/)/g, `$1=$2${SITE_URL}/`)
    .replace(/url\((['"]?)\/(?!\/)/g, `url($1${SITE_URL}/`);
}

function stripLeadingH1(markdown) {
  return markdown.replace(/^\s*#\s+.+?\n+/, '');
}

function wordpressDate(date) {
  const parsed = new Date(`${date}T09:00:00Z`);
  if (Number.isNaN(parsed.getTime())) throw new Error(`Invalid post date: ${date}`);
  return {
    rfc822: parsed.toUTCString(),
    mysql: parsed.toISOString().slice(0, 19).replace('T', ' '),
  };
}

async function renderPost(file, id) {
  const slug = path.basename(file, '.md');
  const source = await fs.readFile(path.join(CONTENT_DIR, file), 'utf8');
  const { data, content } = matter(source);
  const markdown = stripLeadingH1(content);
  const rendered = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(markdown);

  let html = absoluteUrls(rendered.toString());
  const hero = data.hero ? new URL(data.hero, SITE_URL).href : '';
  if (hero) {
    html = `<figure><img src="${xml(hero)}" alt="${xml(data.heroAlt || data.title || '')}"></figure>\n${html}`;
  }

  const date = wordpressDate(data.date);
  const tags = Array.isArray(data.tags) ? data.tags : [];
  const reviewReasons = [];
  if (/<details\b/i.test(html)) reviewReasons.push('expandable details blocks');
  if (/class="(?:pullquote|quote|grey-box)/i.test(html)) reviewReasons.push('custom styled callouts');
  if (/<table\b/i.test(html)) reviewReasons.push('table layout');
  if (/data-footnotes|footnote/i.test(html)) reviewReasons.push('footnotes');

  return {
    id,
    slug,
    title: data.title || slug,
    description: data.description || '',
    sourceUrl: `${SITE_URL}/blog/${slug}/`,
    date,
    tags,
    hero,
    html,
    reviewReasons,
    excluded: EXISTING_SUBSTACK_SLUGS.has(slug),
  };
}

function postXml(post, status) {
  const categories = post.tags.map((tag) =>
    `      <category domain="post_tag" nicename="${xml(slugify(tag))}"><![CDATA[${cdata(tag)}]]></category>`
  ).join('\n');

  return `    <item>
      <title><![CDATA[${cdata(post.title)}]]></title>
      <link>${xml(post.sourceUrl)}</link>
      <pubDate>${post.date.rfc822}</pubDate>
      <dc:creator><![CDATA[${AUTHOR}]]></dc:creator>
      <guid isPermaLink="false">${xml(`riverthink-import-${post.slug}`)}</guid>
      <description></description>
      <content:encoded><![CDATA[${cdata(post.html)}]]></content:encoded>
      <excerpt:encoded><![CDATA[${cdata(post.description)}]]></excerpt:encoded>
      <wp:post_id>${post.id}</wp:post_id>
      <wp:post_date>${post.date.mysql}</wp:post_date>
      <wp:post_date_gmt>${post.date.mysql}</wp:post_date_gmt>
      <wp:comment_status>closed</wp:comment_status>
      <wp:ping_status>closed</wp:ping_status>
      <wp:post_name><![CDATA[${cdata(post.slug)}]]></wp:post_name>
      <wp:status>${status}</wp:status>
      <wp:post_parent>0</wp:post_parent>
      <wp:menu_order>0</wp:menu_order>
      <wp:post_type>post</wp:post_type>
      <wp:post_password></wp:post_password>
      <wp:is_sticky>0</wp:is_sticky>
${categories}
    </item>`;
}

function wxr(posts, status) {
  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
  xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:wfw="http://wellformedweb.org/CommentAPI/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:wp="http://wordpress.org/export/1.2/">
  <channel>
    <title>Riverthink legacy blog</title>
    <link>${SITE_URL}</link>
    <description>Riverthink articles prepared for migration to Substack</description>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <language>en-GB</language>
    <wp:wxr_version>1.2</wp:wxr_version>
    <wp:base_site_url>${SITE_URL}</wp:base_site_url>
    <wp:base_blog_url>${SITE_URL}</wp:base_blog_url>
${posts.map((post) => postXml(post, status)).join('\n')}
  </channel>
</rss>
`;
}

function rss(posts) {
  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Riverthink legacy blog archive</title>
    <link>${SITE_URL}/blog/</link>
    <description>Riverthink articles prepared for migration to Substack</description>
    <language>en-GB</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/substack-import/feed.xml" rel="self" type="application/rss+xml" />
${posts.map((post) => `    <item>
      <title><![CDATA[${cdata(post.title)}]]></title>
      <description><![CDATA[${cdata(post.description)}]]></description>
      <link>${xml(post.sourceUrl)}</link>
      <guid isPermaLink="true">${xml(post.sourceUrl)}</guid>
      <dc:creator><![CDATA[${AUTHOR}]]></dc:creator>
      <pubDate>${post.date.rfc822}</pubDate>
      ${post.hero ? `<enclosure url="${xml(post.hero)}" length="0" type="image/${post.hero.toLowerCase().endsWith('.png') ? 'png' : 'jpeg'}" />` : ''}
      <content:encoded><![CDATA[${cdata(post.html)}]]></content:encoded>
    </item>`).join('\n')}
  </channel>
</rss>
`;
}

function report(allPosts, included, excluded) {
  const lines = [
    '# Riverthink to Substack migration report',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    `- Source Markdown posts: ${allPosts.length}`,
    `- Included for import: ${included.length}`,
    `- Excluded as already present on Substack: ${excluded.length}`,
    '',
    '## Included posts',
    '',
    '| Date | Title | Slug | Tags | Hero | Manual review |',
    '|---|---|---|---|---|---|',
    ...included.map((post) =>
      `| ${post.date.mysql.slice(0, 10)} | ${post.title.replaceAll('|', '\\|')} | ${post.slug} | ${post.tags.join(', ')} | ${post.hero ? 'Yes' : 'No'} | ${post.reviewReasons.join('; ') || 'None identified'} |`
    ),
    '',
    '## Excluded posts already on Substack',
    '',
    ...excluded.map((post) => `- ${post.title} (${post.slug})`),
    '',
    '## Import notes',
    '',
    '- Import into a test or draft context first if Substack offers that option.',
    '- Confirm that original publication dates are retained.',
    '- Check hero images, tables, footnotes, expandable details, and custom callout blocks.',
    '- Substack may remove Riverthink-specific CSS classes while retaining their text.',
    '- Check imported links and then decide whether to redirect the original Riverthink article URLs.',
    '- Use `riverthink-substack-import-draft.xml` for a safer first import and formatting review.',
    '- Use `riverthink-substack-import.xml` when the imported archive should retain published status.',
    '',
  ];
  return lines.join('\n');
}

await fs.mkdir(OUTPUT_DIR, { recursive: true });
await fs.mkdir(PUBLIC_OUTPUT_DIR, { recursive: true });
const files = (await fs.readdir(CONTENT_DIR)).filter((file) => file.endsWith('.md')).sort();
const allPosts = await Promise.all(files.map((file, index) => renderPost(file, 1000 + index)));
const included = allPosts.filter((post) => !post.excluded).sort((a, b) => a.date.mysql.localeCompare(b.date.mysql));
const excluded = allPosts.filter((post) => post.excluded).sort((a, b) => a.date.mysql.localeCompare(b.date.mysql));

const publishedXml = wxr(included, 'publish');
const draftXml = wxr(included, 'draft');
const rssXml = rss(included);
await Promise.all([
  fs.writeFile(path.join(OUTPUT_DIR, 'riverthink-substack-import.xml'), publishedXml),
  fs.writeFile(path.join(OUTPUT_DIR, 'riverthink-substack-import-draft.xml'), draftXml),
  fs.writeFile(path.join(PUBLIC_OUTPUT_DIR, 'riverthink-substack-import.xml'), publishedXml),
  fs.writeFile(path.join(PUBLIC_OUTPUT_DIR, 'riverthink-substack-import-draft.xml'), draftXml),
  fs.writeFile(path.join(PUBLIC_OUTPUT_DIR, 'feed.xml'), rssXml),
]);
await fs.writeFile(path.join(OUTPUT_DIR, 'migration-report.md'), report(allPosts, included, excluded));

console.log(`Created Substack import with ${included.length} posts; excluded ${excluded.length} existing posts.`);
