const webpack = require("webpack");

module.exports = {
  lintOnSave: false,
  assetsDir: "static",
  filenameHashing: false,
  runtimeCompiler: true, // See: https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  pwa: {
    name: "Vue",
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== "production",
  },
  chainWebpack: config => {
    config.module
      .rule('sass')
      .test(/\.sass$/)
      .use('sass-loader')
        .loader('sass-loader')
        .loader('css-loader')
        .loader('style-loader')
      .end()
  }
};
