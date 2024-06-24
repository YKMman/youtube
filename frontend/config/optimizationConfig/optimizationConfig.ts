import { Configuration } from "webpack";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

import { BuildOptions } from "../types";

export function optimizationConfig(options: BuildOptions): Configuration["optimization"] {
  const isDev = options.mode === "development";
  const isProd = options.mode === "production";

  return {};
}
