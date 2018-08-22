const path = require("path");

const ROOT = path.resolve(__dirname, "../");
const IS_DEVELOP = process.env.npm_lifecycle_event === "start";

module.exports = {
  SRC: path.resolve(ROOT, "src"),
  ASSETS: path.resolve(ROOT, "src", "assets"),
  DIST: path.resolve(ROOT, "dist"),
  NODE_MODULES: path.resolve(ROOT, "node_modules"),
  TEMPLATE: path.resolve(ROOT, "src", "index.html"),
  FAVICON: path.resolve(ROOT, "src", "assets", "favicon.ico"),
  HTML_TITLE: "Wepack Project",
  IS_DEVELOP: IS_DEVELOP,
  MODE: IS_DEVELOP ? "development" : "production",
  DEV_PORT: 8080,
  DEV_HOST: "0.0.0.0"
};
