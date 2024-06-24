import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "../types";

export default function loaderConfig(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";
  const isProd = options.mode === "production";

  const cssLoader = {
    test: /\.css$/i,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        // options: {
        //     importLoaders: 1,
        // }
      },
      {
        loader: "postcss-loader", // postcss loader needed for tailwindcss
      },
    ],
    exclude: /node_modules/,
  };

  const tsLoader = {
    // ts-loader из коробки умеет работать с jsx. и можно не работать с babel
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "ts-loader",
        options: {
          // ускоряет компиляцию
          transpileOnly: true,
        },
      },
    ],
  };

  const fontsLoader = {
    // fonts
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
  };

  const imagesLoader = {
    // images
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  // const svgrLoader = {
  //     test: /\.svg$/i,
  //     use: [
  //         {
  //             loader: '@svgr/webpack',
  //             options: {
  //                 icon: true,
  //                 svgoConfig: {
  //                     plugins: [
  //                         {
  //                             name: 'convertColors',
  //                             params: {
  //                                 currentColor: true,
  //                             }
  //                         }
  //                     ]
  //                 }
  //             }
  //         }
  //     ],
  // }

  return [
    cssLoader,
    imagesLoader,
    fontsLoader,
    tsLoader,
    // svgrLoader
  ];
}
