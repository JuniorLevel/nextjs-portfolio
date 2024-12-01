import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
    // ignoreDuringBuilds: true,
  },
};

export default nextConfig;
