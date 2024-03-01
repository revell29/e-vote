/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,
  images: {
    domains: ['jb-assets-alpha.sg-sin1.upcloudobjects.com'],
  },
};

module.exports = nextConfig;
