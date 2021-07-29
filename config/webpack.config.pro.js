// 生产配置
const { merge } = require('webpack-merge')
const webpackProConfig = require('./webpack.config.base')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const webpackconfig = merge(webpackProConfig, {
    mode: 'production',
    stats: { children: false, warnings: false },
    // 生产环境配置
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: {
                    warnings: false,
                    compress: {
                        warnings: false,
                        drop_console: false,
                        drop_debugger: false,
                        dead_code: false
                    },
                    output: {
                        comments: false,
                        beautify: false
                    },
                    mangle: false,
                },
                parallel: true
            })
        ],
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2,
                    enforce: true
                }
            }
        }
    }
})

module.exports = webpackconfig