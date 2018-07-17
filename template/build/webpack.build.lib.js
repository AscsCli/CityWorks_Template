'use strict'
const webpack = require('webpack')
const config = require('./webpack.base.conf')

//修改入口文件
config.entry = {
  rocketUi:'./src/index.js'
}
//修改输出目录
config.output = {
  filename: './lib/[name].js',
  library: 'rocketUi',
  libraryTarget: 'umd'
}
// 配置plugins选项
config.plugins = [
  new webpack.DefinePlugin({
    'process.env': require('../config/prod.env')
  })
]

module.exports = config;