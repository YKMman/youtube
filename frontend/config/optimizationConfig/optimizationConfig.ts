import { Configuration } from "webpack";
import { BuildOptions } from "../types";

import  CssMinimizerPlugin from 'css-minimizer-webpack-plugin';




export function optimizationConfig(options: BuildOptions): Configuration['optimization'] {
    return {
        runtimeChunk: true,
            removeAvailableModules: false,
            removeEmptyChunks: false,
            splitChunks: false,
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