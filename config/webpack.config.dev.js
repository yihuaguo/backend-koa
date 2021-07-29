// 开发配置
const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')

const webpackconfig = merge(webpackBaseConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    // webpack输出的日志消息不输出
    stats: { children: false }
})

module.exports = webpackconfig