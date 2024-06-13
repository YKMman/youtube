import { Configuration } from "webpack";
import { BuildOptions } from "../types";

import  CssMinimizerPlugin from 'css-minimizer-webpack-plugin';




export function optimizationConfig(options: BuildOptions): Configuration['optimization'] {
    return {
        splitChunks: {
            chunks: 'async',
            minSize: 10000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 100000,
            cacheGroups: {
              defaultVendors: {
                test: /[\\/]node_modules|react|react-dom[\\/]/,
                priority: -10,
                reuseExistingChunk: true,
              },
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true,
              },
            },
          },
        runtimeChunk: true,
            minimize: true,
            minimizer: [
                new CssMinimizerPlugin({
                    // параллельная загрузка
                    parallel: true,
                    // удалить все комментарии из кода
                    minimizerOptions: {
                        preset: [
                            "default",
                            {
                                discardComments: { removeAll: true },
                            },
                        ]
                    }
                })
            ]
    }
}