// ES Module syntax for Next.js configuration
const nextConfig = {
  // Your Next.js configuration options here
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['firebasestorage.googleapis.com'], // Add any domains you're loading images from
  },
  // Add any other configuration options you need
};

export default nextConfig; 