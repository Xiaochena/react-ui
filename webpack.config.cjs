const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // entry: "./src/index.ts",
  // output: {
  //   filename: "index.js",
  //   path: path.resolve(__dirname, "dist"),
  //   libraryTarget: "module",
  //   clean: true,
  // },
  entry: {
    Foo: "./src/Foo/index.tsx",
    index: "./src/index.ts",
  },
  output: {
    filename: (pathData) => {
      return pathData.chunk.name === "index" ? "[name].js" : "[name]/index.js";
    },
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "module",
    clean: true,
    libraryExport: "default",
  },
  mode: "production",
  experiments: {
    outputModule: true,
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  externals: {
    "styled-components": "styled-components",
    antd: "antd",
    react: "react",
  },
  performance: {
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith(".js");
    },
  },
};
