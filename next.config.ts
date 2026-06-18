import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@/components', '@/data'],
  },
}

export default nextConfig
