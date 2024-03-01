/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['jb-assets-alpha.sg-sin1.upcloudobjects.com'],
  },
};

module.exports = nextConfig;
