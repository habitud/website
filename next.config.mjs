/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/_next/static/:path*',
                destination: '/_next/static/:path*',
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
};

export default nextConfig;
