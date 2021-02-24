module.exports = {
  devServer: {
    port: 8002,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: 'vue-app',
      libraryTarget: 'umd'
    }
  }
}