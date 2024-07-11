/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
      return [
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
      ];
    },
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