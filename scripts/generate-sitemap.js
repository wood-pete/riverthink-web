const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const pagesDirectory = path.join(projectRoot, 'pages');
const blogDirectory = path.join(projectRoot, 'content', 'blog');
const publicDirectory = path.join(projectRoot, 'public');
const outputPath = path.join(publicDirectory, 'sitemap.xml');

const PAGE_EXTENSIONS = new Set(['.js', '.jsx', '.ts', '.tsx']);

function readFirstExistingFile(paths) {
  for (const filePath of paths) {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf8').trim();
    }
  }

  return '';
}

function normaliseBasePath(basePath) {
  if (!basePath) return '';
  return basePath.startsWith('/') ? basePath : `/${basePath}`;
}

function getSiteUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.URL;

  const cname = readFirstExistingFile([
    path.join(publicDirectory, 'CNAME'),
    path.join(projectRoot, 'CNAME'),
  ]);

  const rawUrl = envUrl || (cname ? `https://${cname}` : 'https://riverthink.com');
  return rawUrl.replace(/\/+$/, '');
}

function toPosixPath(filePath) {
  return filePath.split(path.sep).join('/');
}

function collectStaticPageRoutes(directory, currentPrefix = '') {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const routes = [];

  for (const entry of entries) {
    if (entry.name.startsWith('_')) continue;
    if (entry.name === 'api') continue;

    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      routes.push(...collectStaticPageRoutes(fullPath, `${currentPrefix}/${entry.name}`));
      continue;
    }

    const extension = path.extname(entry.name);
    if (!PAGE_EXTENSIONS.has(extension)) continue;

    const baseName = path.basename(entry.name, extension);
    if (baseName.startsWith('[')) continue;
    if (baseName === '404' || baseName === '500') continue;

    const route =
      baseName === 'index' ? currentPrefix || '/' : `${currentPrefix}/${baseName}`;

    routes.push(route);
  }

  return routes;
}

function collectBlogRoutes() {
  if (!fs.existsSync(blogDirectory)) return [];

  return fs
    .readdirSync(blogDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .map((entry) => `/blog/${entry.name.replace(/\.md$/, '')}`);
}

function getLastModified(route) {
  if (route === '/') {
    for (const ext of PAGE_EXTENSIONS) {
      const pagePath = path.join(pagesDirectory, `index${ext}`);
      if (fs.existsSync(pagePath)) return fs.statSync(pagePath).mtime.toISOString();
    }
  }

  if (route.startsWith('/blog/') && route !== '/blog/') {
    const slug = route.replace(/^\/blog\//, '').replace(/\/$/, '');
    const blogPath = path.join(blogDirectory, `${slug}.md`);
    if (fs.existsSync(blogPath)) return fs.statSync(blogPath).mtime.toISOString();
  }

  const pageRoute = route.replace(/^\/+/, '');

  for (const ext of PAGE_EXTENSIONS) {
    const directPath = path.join(pagesDirectory, `${pageRoute}${ext}`);
    if (fs.existsSync(directPath)) return fs.statSync(directPath).mtime.toISOString();

    const nestedIndexPath = path.join(pagesDirectory, pageRoute, `index${ext}`);
    if (fs.existsSync(nestedIndexPath)) return fs.statSync(nestedIndexPath).mtime.toISOString();
  }

  return new Date().toISOString();
}

function buildUrl(siteUrl, basePath, route) {
  const routePath = route === '/' ? '/' : `${route}/`;
  return `${siteUrl}${basePath}${routePath}`.replace(/([^:]\/)\/+/g, '$1');
}

function generateSitemapXml(routes) {
  const siteUrl = getSiteUrl();
  const basePath = normaliseBasePath(process.env.NEXT_PUBLIC_BASE_PATH || '');

  const urls = routes
    .sort((a, b) => a.localeCompare(b))
    .map((route) => {
      const loc = buildUrl(siteUrl, basePath, route);
      const lastmod = getLastModified(route);

      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n');
}

function main() {
  const routes = Array.from(
    new Set([
      ...collectStaticPageRoutes(pagesDirectory),
      ...collectBlogRoutes(),
    ])
  );

  fs.mkdirSync(publicDirectory, { recursive: true });
  fs.writeFileSync(outputPath, generateSitemapXml(routes), 'utf8');

  console.log(
    `Generated sitemap with ${routes.length} URLs at ${toPosixPath(path.relative(projectRoot, outputPath))}`
  );
}

main();
