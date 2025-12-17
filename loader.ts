'use client'

export default function myImageLoader({ src }: { src: string }) {
  const repoName = 'test-github-pages'
  
  // Jika src diawali dengan http, biarkan apa adanya
  if (src.startsWith('http')) return src
  
  // Pastikan tidak ada double slash (//)
  // Menghilangkan slash di awal src jika ada, lalu menggabungkannya
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src
  
  return `/${repoName}/${cleanSrc}`
}