/*
 * @Description: 
 * @Author: yuyi
 * @Date: 2022-07-22 23:38:51
 * @LastEditors: yuyi
 * @LastEditTime: 2022-07-23 00:42:47
 */
var MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
      {
        languages: ['json', 'javascript', 'html', 'xml', 'sql']
      }
    ])
  }
}
