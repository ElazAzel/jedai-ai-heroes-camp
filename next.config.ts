import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@/components', '@/data'],
  },
}

export default nextConfig
