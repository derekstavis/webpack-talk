const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const buildConfig = require('./build/config')

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[hash].[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: 'image-webpack-loader',
            options: buildConfig.imageLoader,
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ]
}
