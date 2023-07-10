/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: [
            'fakestoreapi.com',
            'api.slingacademy.com',
            'https://api.slingacademy.com'
        ]
    }
}

module.exports = nextConfig
