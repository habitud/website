/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites() {
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
            destination: '/dashboard/:path*',
            missing: [
              { type: 'header', key: 'next-router-prefetch' },
              { type: 'header', key: 'purpose', value: 'prefetch' },
            ]
          },
          // Add this new rule to handle static assets
          {
            source: '/_next/:path*',
            has: [
              {
                type: 'host',
                value: 'app.habitud.fr',
              }
            ],
            destination: '/_next/:path*',
          }
        ]
      }
    }
  };
  
  export default nextConfig;