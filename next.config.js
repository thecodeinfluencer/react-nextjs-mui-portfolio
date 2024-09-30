/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "gravatar.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com/" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "miro.medium.com" },
    ],
  },
};

module.exports = nextConfig;
