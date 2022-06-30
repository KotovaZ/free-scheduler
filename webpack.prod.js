const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
// const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    // new MinifyPlugin(minifyOpts, pluginOpts),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
      /de|en|ru/
    )
  ],
});