const isProduction = process.env.NODE_ENV === 'production'
const isBuildLib =
  (process.env.npm_lifecycle_script || '').indexOf('--target lib') > 0

module.exports = {
  publicPath: isProduction ? '/vue-ganttastic/' : '',

  outputDir: isBuildLib ? 'dist' : 'demo',

  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass')
      }
    },
    extract: true
  },

  productionSourceMap: false,

  chainWebpack: config => {
    if (isBuildLib) {
      config.externals({
        ...config.get('externals'),
        moment: 'moment'
      })
    }
  }
}
