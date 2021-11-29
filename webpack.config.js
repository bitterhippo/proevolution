const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  mode: "development",
  module: {
    rules: [{
      test: /\.js|jsx$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      },
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    //Below this line is the attempt at making SVGs work
    {
      test: /\.svg$/,
      use: [
        {
          loader: 'svg-url-loader',
          options: {
            limit: 10000,
          }
        },
      ],
    },
    ],
  },
  plugins: [htmlPlugin]
};