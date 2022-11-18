/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
      'spotlight.tailwindui.com',
      'images.unsplash.com',
      'og-image.vercel.app',
    ],
  },
  // experimental: {
  //   appDir: true,
  // },
}
module.exports = nextConfig
