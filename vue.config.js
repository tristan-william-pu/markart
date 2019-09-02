
module.exports = {
    // 基本路径
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
   
    // 第三方插件配置
    pluginOptions: {
      i18n: {
        locale: 'cn',
        fallbackLocale: 'cn',
        localeDir: 'locales',
        enableInSFC: false
      }
    }
   }
 
