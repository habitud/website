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
                    destination: '/dashboard/:path*'
                }
            ]
        }
    },
    assetPrefix: () => {

      if (process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_DOMAIN === 'app.habitud.fr') {

            return 'https://habitud.fr';
        }
    }
};

export default nextConfig;
