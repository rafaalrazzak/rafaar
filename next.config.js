/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"],
  },
  experimental: {
    appDir: true,
  },
}
module.exports = nextConfig
