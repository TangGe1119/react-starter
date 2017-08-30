const webpack = require('webpack')
const path  = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const port = 9000;

module.exports = {
    entry: {
        app: [
            'babel-polyfill', 
            'react-hot-loader/patch',
            './src/index.js'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: ['babel-loader']
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },{
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'images/[name].[ext]'
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.jsx', '.styl']
    },
    devtool: 'eval',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: port
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.tpl.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
        }),
    ]
}