'use client'

export default function myImageLoader({ src, width, quality }: { src: string, width: number, quality?: number }) {
  // Ganti 'test-github-pages' dengan nama repo Anda
  const repoName = 'test-github-pages'
  
  // Jika src sudah mengandung http (gambar eksternal), jangan tambahkan prefix
  if (src.startsWith('http')) return src
  
  // Tambahkan nama repo di depan jalur gambar
  return `/${repoName}${src}?w=${width}&q=${quality || 75}`
}