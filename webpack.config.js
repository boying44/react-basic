// updated for webpack v2
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const { TsConfigPathsPlugin, CheckerPlugin } = require('awesome-typescript-loader');

const PATHS = {
  root: path.resolve(__dirname),
  nodeModules: path.resolve(__dirname, './node_modules'),
  src: path.resolve(__dirname, './src'),
  clientOutputDir: path.resolve(__dirname, './dist'),
};

const isProd = () => process.env.NODE_ENV === 'production';
const isDevBuild = !isProd();

const extractCSS = new ExtractTextPlugin('site.css'); //TODO: Produce seperate CSS files

const config = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'] // https://webpack.js.org/configuration/resolve/#resolve-extensions
},
  entry: {
    // can have an array of properties for outputting multiple js files
    // can have an array of entry points for one js file
    'main-client': './src/entry.tsx',
  },

  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js', // [name] is a placeholder
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader?silent=true'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader', options: { sourceMap: !isProd() } },
          {
            loader: 'css-loader',
            options: {
              minimize: isProd(),
              modules: true,
              sourceMap: !isProd() },
          },
        ],
      },
    ],
  },

  plugins: [
    extractCSS,
    new CheckerPlugin(),
    new TsConfigPathsPlugin({
        configFileName: "tsconfig.json",
        compiler: "typescript"
    }),
  ],
  watchOptions:
    {
      // one second grace period to add minor updates that will get aggregated into the same compile
      aggregateTimeout: 1000,
      ignored: /node_modules/
    },
};
module.exports = config;
