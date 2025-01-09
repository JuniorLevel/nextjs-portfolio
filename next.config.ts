import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      '@emailjs/browser',
      'swiper',
      'react-responsive',
      'react-toastify',
      'yup',
      'formik',
      '@emotion/styled',
      'emotion/react',
    ],
  },
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
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
