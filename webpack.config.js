const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    app: './js/app.jsx',
    // styles: './css/main.css',
    // font: './font-awesome-4.6.3/css/font-awesome.min.css'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: [/\.js?$/, /\.jsx?$/],
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
    // rules: [{
    //   test: /\.css$/,
    //   // use: ["style-loader", "css-loader"],
    //   use: ExtractTextPlugin.extract({
    //     fallback: "style-loader",
    //     use: "css-loader"
    //   })
    // },
    // {
    //   test: /\.(ttf|eot|svg|woff|woff2|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    //   loader: "file-loader",
    //   options: {
    //     name: '[path][name].[ext]?[hash]'
    //   }
    // }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    // new ExtractTextPlugin({
    //   filename: '[name].css',
    //   allChunks: true
    // })
  ]
};