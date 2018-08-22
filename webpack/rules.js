const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { NODE_MODULES, ASSETS, IS_DEVELOP, SRC } = require("./constants");

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: NODE_MODULES,
    loader: "babel-loader"
  },
  {
    test: /\.css$/,
    include: NODE_MODULES,
    use: [
      IS_DEVELOP ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader"
    ]
  },
  {
    test: /\.(sa|sc|c)ss$/,
    include: SRC,
    use: [
      IS_DEVELOP ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: true,
          importLoader: 2
        }
      },
      "postcss-loader",
      "sass-loader"
    ]
  },
  {
    test: /\.(png|gif|jpg|svg|otf|eot|ttf|woff|woff2)$/,
    include: [ASSETS],
    use: {
      loader: "url-loader",
      options: {
        limit: 20480,
        name: IS_DEVELOP ? "assets/[name].[ext]" : "assets/[name].[hash].[ext]"
      }
    }
  }
];
