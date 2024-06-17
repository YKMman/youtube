import webpack from 'webpack';


import pluginsConfig from '../pluginsConfig/pluginsConfig';
import serverConfig from '../serverConfig/serverConfig';
import resolveConfig from '../resolveConfig/resolveConfig';
import loaderConfig from '../loadersConfig/loaderConfig';
import { BuildOptions } from '../types';
import { optimizationConfig } from '../optimizationConfig/optimizationConfig';




export function buildWebpack (options:BuildOptions) :webpack.Configuration {
    const { mode, paths } = options

    const isDev = mode === 'development'
    const isProd = mode === 'production'

    return {
        mode: mode ?? 'development',
        devtool: 'inline-source-map',
        entry: paths.entry,
        output: {
            path: paths.output,
            clean: true,
        },
        module: {
            rules: loaderConfig(options),
        },
        resolve: resolveConfig(options),
        devServer: serverConfig(options),
        plugins: pluginsConfig(options),
        optimization: optimizationConfig(options),
    }
}