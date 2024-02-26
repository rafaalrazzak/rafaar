/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "og-image.vercel.app",
            },
            {
                protocol: "https",
                hostname: "i.scdn.co",
            },
            {
                protocol: "https",
                hostname: "cdn.kita.blue",
            },
        ]
    }
};
module.exports = nextConfig;
