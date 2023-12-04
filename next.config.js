/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["res.cloudinary.com", "images.unsplash.com", "og-image.vercel.app", "i.scdn.co"],
    },
};
module.exports = nextConfig;
