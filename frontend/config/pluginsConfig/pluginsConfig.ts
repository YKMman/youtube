import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "../types";

export default function pluginsConfig({ mode, paths, analyzer }: BuildOptions): Configuration["plugins"] {
  const isDev = mode === "development";
  const isProd = mode === "production";

  const plugins: Configuration["plugins"] = [
    // html file
    new HtmlWebpackPlugin({
      title: "My app",
      template: paths.html,
      // minify: true,
      // hash: true,
      showErrors: true,
      // favicon: './public/я.jpg'
    }),
  ];

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "styles/[name].[contenthash].css",
        chunkFilename: "[id].css",
      })
    );
  }

  return plugins;
}
