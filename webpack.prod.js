const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
   mode: 'production',
   plugins: [new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' })],
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: './',
   },

   module: {
      rules: [
         {
            test: /\.(sc|sa|c)ss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
         },
      ],
   },
});
