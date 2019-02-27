// 正向代理配置地方
module.exports = {
  // 案例 ,会把localhost转换成我们所配置的
  // http://localhos:8080/img   =>https://m.maizuo.com/img
  // http://localhost:3000/banner/search   => https://m/maizuo.com/banner/search
  // 字符串模式
  // proxy:'http://m.maizuo.com'
  // 对象模式
  // 如果是这种方式，那么只对 key 开头的进行代理
  /**
   * http: //localhost:8000/img   => https://m.maizuo.com  不能拿到数据
   * http: //localhost:8000/api/img  => http://m.maizuo.com/api/img  可以拿到数据
   * http: //localhost:3000/api/img  => http://m.maizuo.com/api/img   拿不到数据
   * 做代理的服务器一定要和本地访问的服务器要同源
   * */

  /**
    * A localhost:8080 浏览器
    * B localhost:8080 服务器（中间代理服务）
    * c m.maizuo.com   目标服务器
    *
    *
    * A -> C 跨域
    * A -> B 不跨域
    * B -> C 不跨域
    *
    * A -> B -> C
    */
  devServer: {
    proxy: {
      // localhost:8080/api/xxx -> m.maizuo.com/xxx
      '/api': {
        target: 'https://m.maizuo.com',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }

}
