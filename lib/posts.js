import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

const contentPostsDirectory = path.join(process.cwd(), 'content', 'blog');

const CHAIN_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:inline;vertical-align:middle"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;

function transformFootnoteLinks(html) {
  return html.replace(
    /(<section[^>]*data-footnotes[^>]*>[\s\S]*?<\/section>)/,
    (section) =>
      section.replace(
        /<a href="(https?:\/\/[^"]+)">(https?:\/\/[^<]+)<\/a>/g,
        `<a href="$1" target="_blank" rel="noopener noreferrer" class="footnote-url-link" title="$1">${CHAIN_ICON}</a>`
      )
  );
}

function resolvePostPath(realSlug) {
  const contentPath = path.join(contentPostsDirectory, `${realSlug}.md`);
  if (fs.existsSync(contentPath)) return contentPath;
  throw new Error(`Post not found: ${realSlug}`);
}

export function getPostSlugs() {
  if (!fs.existsSync(contentPostsDirectory)) return [];
  return fs.readdirSync(contentPostsDirectory).filter((file) => file.endsWith('.md'));
}

function buildExcerpt(markdown) {
  const sections = markdown.trim().split(/\n\s*\n/);
  const firstSection = sections.find((section) => section.trim().length > 0) || '';
  const withoutLinks = firstSection.replace(/\[(.*?)\]\(.*?\)/g, '$1');
  const stripped = withoutLinks.replace(/[#>*_`]/g, '').trim();
  if (stripped.length <= 220) return stripped;
  return `${stripped.slice(0, 217)}...`;
}

export async function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = resolvePostPath(realSlug);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content);
  const contentHtml = transformFootnoteLinks(processedContent.toString());

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const heroPath = data.hero ? `${basePath}${data.hero}` : null;

  return {
    slug: realSlug,
    meta: {
      title: data.title || realSlug,
      date: data.date || null,
      hero: heroPath,
      tags: data.tags || [],
    },
    excerpt: buildExcerpt(content),
    content: contentHtml,
  };
}

export async function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return posts.sort((a, b) => {
    const dateA = new Date(a.meta.date || 0).getTime();
    const dateB = new Date(b.meta.date || 0).getTime();
    return dateB - dateA;
  });
}
