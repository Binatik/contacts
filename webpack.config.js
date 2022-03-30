const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pathIcon = './src/images/call.ico';

let configWebPack = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./bundle"),
    filename: "index.js",
    publicPath: "",
  },

  devServer: {
    historyApiFallback: true,
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]-[sha1:hash:hex:3]",
              },
            },
          },
        ],
      },

      {
        test: /\.(png|svg|gif|jpg|ico)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },

      {
        test: /^((?!\.module).)*css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: "style.css" }),
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, pathIcon),
      filename: "index.html",
      template: "./public/index.html",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@cmp": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@src": path.resolve(__dirname, "src"),
    },
  },
};

module.exports = (env, options) => {
  let isProduction = options.mode === "production";
  configWebPack.devtool = isProduction ? false : "eval-cheap-module-source-map";

  return configWebPack;
};
