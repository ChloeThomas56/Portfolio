import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 768, 1024, 1280, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
};

export default nextConfig;