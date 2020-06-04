const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: {
      app: './src/index.js',
   },

   module: {
      rules: [
         {
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
         },
         {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: {
               loader: 'babel-loader',
            },
         },
         {
            test: /\.html$/,
            use: [
               {
                  loader: 'html-loader',
               },
            ],
         },
         {
            test: /\.(sc|sa|c)ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },
         {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     outputPath: './assets',
                  },
               },
            ],
         },
      ],
   },

   plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
         title: 'Portfolio',
         template: './src/index.html',
      }),
   ],
};
