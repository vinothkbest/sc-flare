const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
       symlinks: false
    },
   // plugins: [new BundleAnalyzerPlugin()] //To run this, kindly install package 
  },
  publicPath:'',
  devServer: {
    //disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      'X-XSS-Protection' : '1; mode=block'
    },
  }
}
