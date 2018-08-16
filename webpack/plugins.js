const webpack = require("webpack");

const { MODE } = require("./constants");

module.exports = [
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(MODE)
  })
];
