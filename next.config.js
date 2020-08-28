const withPlugins = require('next-compose-plugins');


module.exports = withPlugins([
], {
  distDir: 'build',
  experimental: {
    optimizeImages: true,
  },
});
