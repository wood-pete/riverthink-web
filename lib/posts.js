import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md'));
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
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html, { sanitize: false }).process(content);
  const contentHtml = processedContent.toString();

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const heroPath = data.hero ? `${basePath}${data.hero}` : null;

  return {
    slug: realSlug,
    meta: {
      title: data.title || realSlug,
      date: data.date || null,
      hero: heroPath,
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
