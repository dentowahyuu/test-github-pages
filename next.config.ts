import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/test-github-pages',
  // assetPrefix memastikan CSS dan Gambar tidak hilang
  assetPrefix: isProd ? '/test-github-pages/' : '', 
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, 
  },
};

export default nextConfig;