/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "whispering-shelf-76171.herokuapp.com",
      "strapi-blog-app-s3-bucket.s3.ap-south-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
