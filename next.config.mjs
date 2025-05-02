/** @type {import('next').NextConfig} */
const basePath = '/devtest-mospital';
const assetPrefix = `${basePath}/`;

const nextConfig = {
  basePath,
  assetPrefix,
  trailingSlash: true,
  output: 'export',
};

export default nextConfig;
