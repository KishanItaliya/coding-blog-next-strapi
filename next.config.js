/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "https://whispering-shelf-76171.herokuapp.com"],
  },
};

module.exports = nextConfig;
