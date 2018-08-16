const path = require("path");

const ROOT = path.resolve(__dirname, "../");

module.exports = {
  MODE: "development",
  SRC: path.resolve(ROOT, "src"),
  DIST: path.resolve(ROOT, "dist"),
  NODE_MODULES: path.resolve(ROOT, "node_modules"),
  ENTRY: path.resolve(SRC, "index.js"),
  ASSETS: path.resolve(SRC, "assets"),
  // dev server
  DEV_PORT: 8080,
  DEV_HOST: "0.0.0.0"
};
