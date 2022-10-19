/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
