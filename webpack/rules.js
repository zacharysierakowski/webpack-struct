const { SRC, ASSETS } = require("./constants");

module.exports = [
  {
    test: /\.(js|jsx)$/,
    include: SRC,
    loader: "babel-loader"
  },
  {
    test: /\.(png|gif|jpg|svg|otf|eot|ttf|woff|woff2)$/,
    include: [ASSETS],
    use: "url-loader?limit=20480&name=assets/[name]-[hash].[ext]"
  }
];
