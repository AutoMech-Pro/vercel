import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    qualities: [75, 90],
  },
  experimental: {
    optimizePackageImports: ['react', 'react-dom']
  }
};

export default nextConfig;
