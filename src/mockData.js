// 1、引入mockjs
import  Mock  from 'mockjs'
// 2、使用Mock.mock
Mock.mock('http://localhost:3000/banner/search',{
  data:[
    {
      _id:100,
      imgUrl:'https://static.maizuo.com/v5/upload/10f61eac0c1930fe30e1b5dbeaa56f71.jpg?x-oss-process=image/quality,Q_70'
    }
  ]
})
