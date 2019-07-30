const HappyPack = require("happypack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "./server/dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      { test: /\.vue$/, use: ["vue-loader"] },
      {
        test: /\.css$/,
        use: ["happypack/loader?id=css"]
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        use: ["happypack/loader?id=js"],
        exclude: [path.resolve(__dirname, "node_modules")]
      },
      {
        test: /\.ts$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ["happypack/loader?id=img"]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      inject: "body",
      exclude: path.resolve(__dirname, "./node_modules")
    }),
    new VueLoaderPlugin(),
    new HappyPack({
      id: "css",
      loaders: ["style-loader", "css-loader"]
    }),
    new HappyPack({
      id: "js",
      loaders: ["babel-loader"]
    }),
    new HappyPack({
      id: "img",
      loaders: ["url-loader?limit=10000", "img-loader"]
    })
  ],
  resolve: {
    mainFields: ["main"],
    extensions: [".ts", ".js"],
    alias: { vue$: "vue/dist/vue.esm.js" }
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 1000,
    poll: 1
  }
};
