/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/devtest-mospital',
  assetPrefix: '/devtest-mospital/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
