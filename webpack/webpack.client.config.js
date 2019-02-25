const isDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CONFIG_VARIABLES = require('./config');
const OUTPUT_DIR = path.resolve(__dirname, '../dist');

module.exports = {
  mode: "development",
  entry: './src/client/index.js',
  output: {
    filename: '[name].js',
    chunkFilename: "[id].js",
    path: OUTPUT_DIR,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      },
      {
				test: /\.(jpg|svg|png|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]',
						},
					},
				],
			}
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../src/client/index.ejs'),
      filename: "./index.html"
    }),
    new webpack.DefinePlugin(CONFIG_VARIABLES)
  ],
  devServer: {
    headers:          { 'Access-Control-Allow-Origin': '*' },
    https:            false,
    disableHostCheck: true
  }
};
