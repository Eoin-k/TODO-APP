const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
  

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // assetModuleFilename: './images/[hash][ext][query]',
  },
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Eoins TODO App',
        filename: 'index.html',
        template: './src/index.html'
    })
  ],
  // devtool: 'inline-source-map',
};

  
