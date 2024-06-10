import { Configuration } from "webpack";
import { BuildOptions } from "../types";

export default function resolveConfig(options: BuildOptions): Configuration['resolve'] {

    return {
        extensions: [".tsx", ".ts", ".js"],
    }
}