/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [{ hostname: 'www.imagemhost.com.br' }]
  },
}

module.exports = nextConfig
