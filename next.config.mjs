/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',

  basePath: '/Portfolio-2.0',
  assetPrefix: '/Portfolio-2.0/',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
