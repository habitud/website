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
    }
  };

export default nextConfig;
