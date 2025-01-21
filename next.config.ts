import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    },
    images: {
        deviceSizes: [640, 768, 1024, 1280, 1920],
    },
    i18n: {
        locales: ['fr', 'en'],
        defaultLocale: 'fr',
    }
};

export default nextConfig;