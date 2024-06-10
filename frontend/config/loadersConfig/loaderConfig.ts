import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


import { BuildOptions } from "../types";



export default function loaderConfig (options: BuildOptions): ModuleOptions['rules'] {

    const isDev = options.mode === 'development'
    const isProd = options.mode === 'production'


    const cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: true,
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
        }
    }

    const sassLoader = {
        loader: 'sass-loader',
        options: {
        sourceMap: true,
        sassOptions: {
            outputStyle: "compressed",
        },
        },
    }

    const styleLoader = {
    // в дев режиме лучше использовать style-loader, а для продакшена miniCss
        loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 
    }

    const tsLoader = {
    // ts-loader из коробки умеет работать с jsx. и можно не работать с babel
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
                {
                    loader: 'ts-loader',
                    options: {
                        // ускоряет компиляцию 
                        transpileOnly: true,
                    }
                }
        ]
    }

    const fontsLoader = {
    // fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    }

    const imagesLoader = {
    // images
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    
    return [
        {
            test: /\.s[ac]ss$/i,
            use: [ styleLoader, cssLoader, sassLoader ],
        },
        imagesLoader,
        fontsLoader,
        tsLoader
    ]
}