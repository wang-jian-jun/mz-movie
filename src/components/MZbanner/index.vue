<template>
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <!-- <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div> -->
        <div class="swiper-slide" v-for="item in imglist" :key="item._id">
            <a><img :src="item.imgUrl" alt=""></a>
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
import axios from 'axios'
// 后面发出去的请求的前面都默认会加上这个
// axios.defaults.baseURL = 'http://localhost:3000'
export default {
  /* eslint-disable */
  data () {
      return {
          //轮播图数据
          imglist:[],
          mySwiper:null,
      }
  },
  created () {
      var _this = this;
      axios.get('http://localhost:3000/banner/search')
      .then((res)=>{
          var name = res.data.data;
          _this.imglist = name;
          console.log(name)
        //   console.log(_this.imglist)
        //   console.log(res.data.data)
        //数据更新后，对轮播图进行更新
        // this.$nextTick(()=>{
        //     this.mySwiper.update();
        // })

        this.$nextTick(()=>{
            new Swiper('.swiper-container',{
                loop: true, 
                autoplay:true,
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        })
        
      })

      
      //这里存在的问题是，axios所获取的数据与swiper出来的对象不再一致，axios是一个异步
      //这个设置settimeout的方式不行，因为不知道数据请求的具体时间
    //   setTimeout(()=>{
    //       new Swiper('.swiper-container',{
    //             loop: true, 
    //             autoplay:true,
    //             pagination: {
    //                 el: '.swiper-pagination',
    //             },
    //         },0)
    //   })
      
  },
  mounted () {
    
    // this.mySwiper=new Swiper('.swiper-container',{
    //     loop: true, 
    //     autoplay:true,
    //     pagination: {
    //         el: '.swiper-pagination',
    //     },
    // })
  }
}
</script>

<style lang="less">
.swiper-container {
  width: 100%;
  height: 210px;
  img{
      height: 100%;
  }
}
</style>
