import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/test-github-pages',
  images: {
    loader: 'custom',
    loaderFile: './loader.ts', // Arahkan ke file yang baru dibuat
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, 
  },
};

export default nextConfig;