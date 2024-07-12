/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return {
            afterFiles: [
                {
                    source: '/_next/static/:path*',
                    destination: '/_next/static/:path*',
                },
                {
                    source: '/logo.svg',
                    destination: '/logo.svg',
                },
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
