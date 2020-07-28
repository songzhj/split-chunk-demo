module.exports = {
  optimization: {
    // 以约 2.5% 的 main.js 体积增加为代价，
    // 减少 ~40% production 的构建耗时。
    concatenateModules: false,

    splitChunks: {
      // chunks: 'all',
      // maxSize: 1024 * 1024 * 2,

      // or

      cacheGroups: {
        angular: {
          test: /\/node_modules\/@angular/,
          name: 'angular',
          chunks: 'all',
          enforce: true,
        },
        common: {
          test: /\/node_modules\/(toastr|intl-tel-input|highcharts|tiny-pinyin)/,
          name: 'common',
          chunks: 'all',
          enforce: true,
        },
        utils: {
          test: /\/node_modules\/(moment|rxjs|lodash|big\.js|crypto-js)/,
          name: 'utils',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
};
