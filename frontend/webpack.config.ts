import path from 'path';
import webpack from 'webpack'

import { BuildPaths, EnvVariables } from './config/types';
import { buildWebpack } from './config/webpackConfig/webpackConfig'

export default (env: EnvVariables) => {

  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'main.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer
  })

  return config
}