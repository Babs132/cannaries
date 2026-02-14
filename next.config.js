/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  // On force la variable d'environnement ici
  env: {
    PEXELS_API_KEY: 'COLLE_ICI_TA_VRAIE_CLE_PEXELS',
  },
};

export default nextConfig;