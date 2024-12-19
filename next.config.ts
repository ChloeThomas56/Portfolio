import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    },
    experimental: {
        scrollRestoration: false
    }
};

export default nextConfig;