const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { TEMPLATE, HTML_TITLE, FAVICON, IS_DEVELOP } = require("./constants");

module.exports = [
  new HtmlWebpackPlugin({
    title: HTML_TITLE,
    template: TEMPLATE,
    favicon: FAVICON
  }),
  new MiniCssExtractPlugin({
    filename: IS_DEVELOP ? "[name].css" : "[name].[hash].css",
    chunkFilename: IS_DEVELOP ? "[id].css" : "[id].[hash].css"
  })
];
