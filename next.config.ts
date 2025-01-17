import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    },
    images: {
        deviceSizes: [640, 768, 1024, 1280, 1920],
    },
};

export default nextConfig;