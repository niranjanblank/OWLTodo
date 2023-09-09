const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { HOST: host = 'localhost' } = process.env;

module.exports = (env, argv) => {
  const { mode = 'development' } = argv;
  const isDevMode = mode === 'development';

  return {
    mode,
    entry: './src/main.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'public'),
      },
      compress: true,
      hot: true,
      host,
      port: 3000,
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, 'public/index.html'),
      }),
      !isDevMode && new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
      }),
    ].filter(Boolean),
  };
};
