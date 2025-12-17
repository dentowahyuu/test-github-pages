import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/test-github-pages',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, 
  },
};

export default nextConfig;