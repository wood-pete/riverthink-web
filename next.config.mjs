const repoBase = process.env.NEXT_PUBLIC_BASE_PATH || '';
const basePath =
  repoBase === '' ? '' : repoBase.startsWith('/') ? repoBase : `/${repoBase}`;

const config = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || '',
};

export default config;
