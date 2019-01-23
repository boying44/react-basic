// updated for webpack v2...updating for v4
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
