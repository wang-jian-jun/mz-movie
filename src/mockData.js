// 1、引入mockjs
import Mock from 'mockjs'
Mock.Random.image();
// 2、使用Mock.mock
Mock.mock('http://localhost:3000/banner/search', {
  'data|2': [
    {
      '_id|2': 100,
      imgUrl: Mock.Random.image('375x210')
      // imgUrl:'https://static.maizuo.com/v5/upload/10f61eac0c1930fe30e1b5dbeaa56f71.jpg?x-oss-process=image/quality,Q_70'
    }
  ]
})
