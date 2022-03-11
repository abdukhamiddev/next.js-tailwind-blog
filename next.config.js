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

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
});
module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  }
};
