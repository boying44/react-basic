// updated for webpack v2
const path = require('path');
const webpack = require('webpack');

const isProd = () => process.env.NODE_ENV === 'production';

const config = {
  entry: {
    // can have an array of properties for outputting multiple js files
    // can have an array of entry points for one js file
    entry: './src/entry.jsx',
  },

  output: {
    filename: '[name].js', // [name] is a placeholder
    path: path.resolve(__dirname, 'dist/build'),
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        options: {
          presets: [
            'react',
            ['es2015', { modules: false }],
          ],
        },
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

  resolve: {
    extensions: ['.js', '.jsx'], // https://webpack.js.org/configuration/resolve/#resolve-extensions
  },

  plugins: [
  ],
  watchOptions:
    {
      // one second grace period to add minor updates that will get aggregated into the same compile
      aggregateTimeout: 1000,
      ignored: /node_modules/
    },
};
module.exports = config;
