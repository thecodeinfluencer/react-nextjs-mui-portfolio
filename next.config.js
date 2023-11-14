/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  images: {
    domains: ["gravatar.com", "media.licdn.com"],
  },
};

module.exports = nextConfig;
