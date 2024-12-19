import type { NextConfig } from 'next';
import { appRoutes } from './src/config/routes.config';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: appRoutes.DASHBOARD,
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.coinstats.app',
      },
    ],
  },
};

export default nextConfig;
