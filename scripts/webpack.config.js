const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].[contenthash:8].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react woqu 复刻',
      template: 'public/index.html'
    })
  ]
}