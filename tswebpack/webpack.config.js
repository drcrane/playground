const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dst'),
  },

  plugins: [
    new HtmlWebpackPlugin({
        title: 'our project', 
        template: 'src/custom.html' }) 
   ],

  devServer: {
    static: path.join(__dirname, "dst"),
    compress: false,
    port: 4000,
  },
  devtool: 'source-map',
};
