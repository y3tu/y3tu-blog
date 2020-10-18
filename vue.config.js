'use strict';
const settings = require('./src/settings.js');
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
const name = settings.title; // page title
const port = 80; // dev port

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    // 打包时不生成.map文件 避免看到源码
    productionSourceMap: false,
    devServer: {
        port: port,
        open: false,
        overlay: {
            warnings: false,
            errors: true
        }

    },

};

