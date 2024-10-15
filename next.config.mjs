/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/, // Va chercher les fichiers SVG
        use: ['@svgr/webpack'], // Utilise SVGR pour transformer les SVG en composants React
      });
  
      return config;
    },
};
  
export default nextConfig;
