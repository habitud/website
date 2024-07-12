/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/_next/:path*',
                destination: '/_next/:path*',
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
            },
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'habitud.fr',
                    }
                ],
                destination: '/:path*'
            }
        ];
    }
};

export default nextConfig;
