const plugins = require("./plugins");
const rules = require("./rules");
const devServer = require("./devServer");
const { MODE, ENTRY, DIST, NODE_MODULES } = require("./constants");

module.exports = {
  mode: MODE,
  devtool: "eval",
  entry: {
    app: ENTRY
  },
  output: {
    path: DIST,
    filename: "[name].js"
  },
  resolve: {
    modules: [NODE_MODULES]
  },
  plugins,
  module: {
    rules
  },
  devServer
};
