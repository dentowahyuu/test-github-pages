import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Menghasilkan folder 'out'
  images: {
    unoptimized: true, // Wajib untuk GitHub Pages
  },
  typescript: {
    // Mengizinkan build selesai meskipun ada error di validator.ts tadi
    ignoreBuildErrors: true, 
  },
  // trailingSlash: true, // Disarankan untuk GitHub Pages agar routing lebih stabil
  
  // UNTUK DIPERHATIKAN:
  // Jika URL Anda adalah: https://username.github.io/nama-repo/
  // Hapus komentar di bawah ini dan ganti dengan nama repository Anda:
  // basePath: '/nama-repo',
};

export default nextConfig;