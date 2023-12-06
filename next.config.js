/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
  images: {
    domains: [
      "gravatar.com",
      "media.licdn.com",
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
    ],
  },
};

module.exports = nextConfig;
