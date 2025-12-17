import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Ini akan memastikan link CSS/JS dan Gambar menggunakan subfolder repo
  basePath: '/test-github-pages',
  // Tambahkan ini agar folder /out/ di GitHub lebih terstruktur
  trailingSlash: true, 
  images: {
    // Kita matikan loader custom agar kembali ke standar tapi dengan basePath
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true, 
  },
};

export default nextConfig;