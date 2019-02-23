<template>
    <div class="city">
        <div class="c-header">
            <span>×</span>
            <span>当前城市--{{ curCityName }}</span>
            <span></span>
        </div>
        <div class="content">
            <div class="GPS">
                <p>GPS定位你所在城市----{{ maName }}</p>
                <p>c模块 --- {{ mcName }}</p>
                <span style="display:block">定位失败--{{ mbName }}</span>
                <!-- <button @click="$store.commit('ma/chgName',{ name: '张三' })">修改a中的name</button> -->
                <button @click="chgName({name:'张三'})">修改a中的name</button>
                <button @click="$store.commit('updateName')">修改c中的name</button>
            </div>
        </div>
        <div class="neirong">
            <div class="adress">
                <template v-for="item in fiterData">
                    <span>{{ item.py }}</span>
                    <ul>
                        <li v-for="city in item.list" @click="cityChange(city.name)">{{ city.name }}</li>
                    </ul>
                </template>
            </div>
            <div class="zimu">
                <ul>
                    <li
                     @click="heightBtn(item.py)"
                     v-for="item in fiterData"
                     :id="item.py"
                     :ref="item.py"
                    >{{ item.py }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
// mapState mapGetters 用在computed中
// mapMutations mapActions 用在methods
import {mapState,mapGetters, mapMutations,mapActions} from 'vuex'
export default {
  data() {
    return {
    // 存储城市数据列表
    // cityData: [],
    // curCityName:'深圳'
    };
  },
  methods: {
    // 模块的引入
    ...mapMutations('ma',[
      'chgName'
    ]),
    ...mapMutations([
      'chgCityName',
      'chgcityData'
    ]),
    ...mapActions([
      'getcity'
    ]),
    cityChange(item){
        // this.$store.commit('chgCityName',item) //这个item相当于一个实参
        this.chgCityName(item)
    },
      //点击字母获取高度
    heightBtn(item){
        console.log(this.$refs[item])
        console.log(item);
        //得到拼音字母
        var dom = document.getElementById(item)
        //得到拼音字母的高度
        var height = dom.offsetTop;
        console.log(height);
        //操作滚动条
        var city = document.querySelector('.neirong')
        city.dom.scrpllTop = height
        
    },
    // getcity() {
      // axios.get("./json/city.json").then(res => {
      //   if (res.data.status == 0) {
      //     console.log("接收到数据");
      //     // 接收城市数组列表
      //     // this.cityData = res.data.data.cities;
      //     //   this.$store.commit('chgcityData',res.data.data.cities)
      //     this.chgcityData(res.data.data.cities)
      //   } else {
      //     console.log("查询失败");
      //   }
      //   // console.log(res)
      // });
    // }
  },
  // vuex 辅助函数返回的是一个对象，如果要从两个辅助函数里面获取内容，则需要使用对象结构
  computed: {
    ...mapState([
      'curCityName',
      'cityData'
    ]),
    ...mapGetters([
      'fiterData'
    ]),
    // 模块的引入方式
    ...mapState('ma',{
      'maName': (state) => state.name
    }),
    ...mapState('mb',{
      'mbName': (state) => state.name
    }),
    mcName () {
      return this.$store.state.mc.name;
    }
    // maname () {
    //   return this.$store.state.ma.name;
    // }
  },
  //对数据进行二次处理，这里体现出了computed与methods的区别
  //使用this.$store.state.xxx获取仓库里面的数据
//   computed: {
//     // 在从库中拿数据使用 ,具体城市名的数据
//     curCityName () {
//       return this.$store.state.curCityName;
//     },
//     fiterData () {
//         return this.$store.getters.fiterData
//     },
//     // 对城市数组的二次改变，可以放到vuex里面的gertes里面
//     // fiterData() {
//     //   let hash = {};
//     //   let i = 0;
//     //   let res = [];
//     //   this.$store.state.cityData.forEach(item => {
//     //     //获得当前城市的 首字母
//     //     let firstLetter = item.pinyin.substr(0, 1).toUpperCase();
//     //     //  console.log(fist)
//     //     //判断当前字母是否第一次出现
//     //     if (hash[firstLetter]) {    //只用来判断字母的存在，并存储数据
//     //       //存在字母
//     //       let index = hash[firstLetter] -1;  //将下标变为0
//     //       res[index].list.push(item)
//     //     } else {
//     //       //不存在
//     //       hash[firstLetter] = ++i;
//     //       let obj = {};
//     //       obj.py = firstLetter;  //存放拼音
//     //       obj.list = [item];  //存放城市
//     //       res.push(obj)
//     //     }
//     //   });
//     //   let temp = res.sort((a,b)=>{
//     //       return a.py.charCodeAt() - b.py.charCodeAt();
//     //   })
//     //   return temp;
//     // }
//   },
  created() {
    // this.getcity();
    // this.$store.dispatch('getcity')
    this.getcity()
  }
};
</script>

<style lang="less">
@import url("./city/index.less");
</style>
