import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import { BuildOptions } from "../types";

export default function serverConfig(options: BuildOptions): DevServerConfiguration {
    return {
        port: 3000,
        open: true,
        // если раздавать статику через nginx. То надо делать проксирование на Index.html
        historyApiFallback: true,
        // обновляет код без перезагрузки страницы
        hot: true,
    }
}