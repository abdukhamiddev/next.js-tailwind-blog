/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  webpack(config, options) {
    const { isServer } = options;

    if (!isServer) {
      require('./scripts/generate-sitemap');
      config.resolve.fallback = {
        fs: false
      };
    }
    return config;
  }
};
