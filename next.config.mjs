/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: 'https://app.habitud.fr',
  
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'app.habitud.fr',
            }
          ],
          destination: '/dashboard/:path*'
        }
      ]
    };
  },

  // Ajout des en-têtes CORS si nécessaire
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};

export default nextConfig;