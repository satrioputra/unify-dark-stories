const path = require('path');

module.exports = {
  stories: [
    './stories/**/*.stories.@(js|mdx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    '@storybook/addon-viewport'
  ],
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@packageInfo': path.resolve(__dirname, '../package.json'),
    };

    config.resolve.extensions.push('.js', '.jsx', '.mdx', '.json');

    /**
     * Old Config (don't remove it yet)
     */
    // config.module.rules.push(
    //   {
    //     test: /\.stories\.js?$/,
    //     loaders: [require.resolve('@storybook/source-loader')],
    //     enforce: 'pre',
    //   }
    // );

    // config.resolve.plugins = config.resolve.plugins || [];

    return config;
  },
};
