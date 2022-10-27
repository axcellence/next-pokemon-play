/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  experimental: {
    appDir: true,
    enableUndici: true,
  },
};

module.exports = nextConfig;
