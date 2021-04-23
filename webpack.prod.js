const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
      /de|en/
    )
  ],
});