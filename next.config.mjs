/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/devtest-mospital' : '';
const assetPrefix = isProd ? '/devtest-mospital/' : '';

const nextConfig = {
  basePath,
  assetPrefix,
  trailingSlash: true,
  output: 'export',
};

export default nextConfig;
