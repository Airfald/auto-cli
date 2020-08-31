module.exports = {
  build: function () {
      console.log('build')
  },
  publish: function () {
      console.log('publish')
  },
  devServer: function () {
      console.log('devServer')
  },
  testExtend: function () {
      // 扩展命令，可以通过全局cli执行这个扩展脚本
      console.log('extend')
  },
  config: {
      envOptions: ['test', 'pre', 'prd'],
  }
}
