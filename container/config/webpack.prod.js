const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const domain = process.env.DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    publicPath: '/container/latest',
    filename: '[name].[contenthash].js',
  },
  // plugins: [
  //   new ModuleFederationPlugin({
  //     name: 'container',
  //     remotes: {
  //       './MarketingApp': `marketing@${domain}/marketing/remoteEntry.js`,
  //     },
  //     shared: packageJson.dependencies,
  //   }),
  // ],
};

module.exports = merge(commonConfig, prodConfig);
