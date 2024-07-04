import path from "path";
import { Configuration } from "webpack";

import { BuildOptions } from "../types";

export default function resolveConfig(options: BuildOptions): Configuration["resolve"] {
  const { paths } = options
  return {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
    alias: {
      app: path.resolve(paths.src, "app/"),
      entities: path.resolve(paths.src, "entities/"),
      features: path.resolve(paths.src, "features/"),
      pages: path.resolve(paths.src, "pages/"),
      shared: path.resolve(paths.src, "shared/"),
      store: path.resolve(paths.src, "store/"),
      widgets: path.resolve(paths.src, "widgets/"),
      public: path.resolve(paths.src, "public/"),
    } 
  };
}
