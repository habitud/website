/** @type {import('next').NextConfig} */
const nextConfig = {
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
        },
        // Ajout d'une règle spécifique pour les assets
        {
          source: '/_next/:path*',
          destination: '/_next/:path*'
        },
        {
          source: '/public/:path*',
          destination: '/public/:path*'
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