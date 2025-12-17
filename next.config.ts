import type { NextConfig } from "next";

const nextConfig: NextConfig = {
output: 'export', // Penting: Menghasilkan folder 'out'
  images: {
    unoptimized: true, // GitHub Pages tidak mendukung optimasi gambar bawaan Next.js
  },
  // Jika URL Anda adalah username.github.io/nama-repo/, 
  // maka tambahkan basePath: '/nama-repo'
};

export default nextConfig;
