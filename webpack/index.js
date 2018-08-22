const path = require("path");

const devServer = require("./devServer");
const plugins = require("./plugins");
const rules = require("./rules");
const { SRC, DIST, NODE_MODULES, MODE, IS_DEVELOP } = require("./constants");

module.exports = {
  mode: MODE,
  devtool: "eval",
  entry: {
    app: ["babel-polyfill", path.resolve(SRC, "index.js")]
  },
  output: {
    path: DIST,
    filename: IS_DEVELOP ? "[name].js" : "[name].[hash].js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
    modules: [NODE_MODULES]
  },
  devServer,
  plugins,
  module: {
    rules
  }
};
