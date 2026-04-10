import Head from 'next/head';

const SITE_NAME = 'Riverthink';
const SITE_URL = 'https://riverthink.com';
const DEFAULT_OG_IMAGE = '/og-default.jpg';

function toAbsoluteUrl(path = '/') {
  if (!path) return SITE_URL;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

function inferImageType(url = '') {
  const lower = url.toLowerCase();
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.gif')) return 'image/gif';
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.svg')) return 'image/svg+xml';
  return 'image/jpeg';
}

function buildStructuredDataJson(structuredData) {
  if (!structuredData) return null;
  if (Array.isArray(structuredData)) {
    return JSON.stringify({ '@context': 'https://schema.org', '@graph': structuredData });
  }
  return JSON.stringify(structuredData);
}

export default function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  imageWidth,
  imageHeight,
  type = 'website',
  publishedTime,
  modifiedTime,
  tags = [],
  structuredData,
}) {
  const canonicalUrl = toAbsoluteUrl(path);
  const imageUrl = toAbsoluteUrl(image);
  const imageType = inferImageType(imageUrl);
  const resolvedTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return (
    <Head>
      <title key="title">{resolvedTitle}</title>
      <meta key="description" name="description" content={description} />
      <link key="canonical" rel="canonical" href={canonicalUrl} />
      <meta key="og:locale" property="og:locale" content="en_GB" />
      <meta key="og:type" property="og:type" content={type} />
      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og:title" property="og:title" content={resolvedTitle} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:url" property="og:url" content={canonicalUrl} />
      <meta key="og:image" property="og:image" content={imageUrl} />
      <meta key="og:image:alt" property="og:image:alt" content={imageAlt || title || SITE_NAME} />
      <meta key="og:image:type" property="og:image:type" content={imageType} />
      {imageWidth ? <meta key="og:image:width" property="og:image:width" content={String(imageWidth)} /> : null}
      {imageHeight ? <meta key="og:image:height" property="og:image:height" content={String(imageHeight)} /> : null}
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:title" name="twitter:title" content={resolvedTitle} />
      <meta key="twitter:description" name="twitter:description" content={description} />
      <meta key="twitter:image" name="twitter:image" content={imageUrl} />
      {type === 'article' ? <meta key="author" name="author" content="Peter Wood" /> : null}
      {publishedTime ? (
        <meta key="article:published_time" property="article:published_time" content={publishedTime} />
      ) : null}
      {modifiedTime ? (
        <meta key="article:modified_time" property="article:modified_time" content={modifiedTime} />
      ) : null}
      {tags.map((tag) => (
        <meta key={`article:tag:${tag}`} property="article:tag" content={tag} />
      ))}
      {structuredData ? (
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: buildStructuredDataJson(structuredData) }}
        />
      ) : null}
    </Head>
  );
}
