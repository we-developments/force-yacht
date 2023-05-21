/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains:['firebasestorage.googleapis.com', 'tailwindui.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tailwindui.com',
            port: '',
            pathname: '/account123/**',
          },
        ],
      },
}

module.exports = nextConfig
