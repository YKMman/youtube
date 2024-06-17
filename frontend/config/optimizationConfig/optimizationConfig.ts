import { Configuration } from "webpack";
import { BuildOptions } from "../types";

import  CssMinimizerPlugin from 'css-minimizer-webpack-plugin';




export function optimizationConfig(options: BuildOptions): Configuration['optimization'] {
    return {
    }
}