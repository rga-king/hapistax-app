/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/images/**'
      },
      {
        protocol: 'https',
        hostname: 'https://main.d2g99tioeorntt.amplifyapp.com',
        port: '',
        pathname: '/images/**'
      },
      {
        protocol: 'https',
        hostname: 'https://www.hapistax.com',
        port: '',
        pathname: '/images/**'
      }
    ]
  }
}
export default nextConfig;
