// 仓库文件
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import a from './modules/a.js'
import b from './modules/b.js'
import c from './modules/c.js'
import comming from './modules/comming.js'
Vue.use(Vuex)

// 创建仓库
let store = new Vuex.Store({
  // 状态，存放频繁使用的数据
  state: {
    // 默认打开显示的城市
    curCityName: '北京',
    // 城市列表中的所有数据
    cityData: [],
    // 正在上映中所保存的电影数据
    movelist: [],
    // 城市位置数据
    moveLocation: [],
  },
  getters: {
    // fiterData是对state里面的数据进行二次处理,整理出拼音等内容
    fiterData (state) {
      let hash = {};
      let i = 0;
      let res = [];
      state.cityData.forEach(item => {
        // 获得当前城市的 首字母
        let firstLetter = item.pinyin.substr(0, 1).toUpperCase();
        //  console.log(fist)
        // 判断当前字母是否第一次出现
        if (hash[firstLetter]) { // 只用来判断字母的存在，并存储数据
          // 存在字母
          let index = hash[firstLetter] - 1; // 将下标变为0
          res[index].list.push(item)
        } else {
          // 不存在
          hash[firstLetter] = ++i;
          let obj = {};
          obj.py = firstLetter; // 存放拼音
          obj.list = [item]; // 存放城市
          res.push(obj)
        }
      });
      let temp = res.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt();
      })
      return temp;
    }
  },
  mutations: {
    // key: value
    // 会默认有一个state的参数，这个state的数据就是上面所定义的内容
    // 这里的那么相当于一个形参
    chgCityName (state, name) {
      state.curCityName = name
    },
    chgcityData (state, name) {
      state.cityData = name
    },
    chgmovelist (state,pyload) {
      state.movelist = pyload
    },
    chgmoveLocation (state,pyload) {
      state.moveLocation = pyload
    }
  },
  // 处理异步的操作
  actions: {
    getcity ({ commit, state, getters }) {
      axios.get('./json/city.json').then(res => {
        if (res.data.status == 0) {
          console.log('接收到数据');
          // 接收城市数组列表
          // this.cityData = res.data.data.cities;
          //   this.$store.commit('chgcityData',res.data.data.cities)
          // this.chgcityData(res.data.data.cities)
          commit('chgcityData', res.data.data.cities)
        } else {
          console.log('查询失败');
        }
        // console.log(res)
      });
    },
    getData ({commit,state,getters}) {
        axios.get('./json/move.json')
          .then(res => {
            let data = res.data;
            if (data.status === 0) {
              // this.movelist = res.data.data.films;
              // this.$store.commit('chgmovelist',res.data.data.films)
              commit('chgmovelist',res.data.data.films)
            } else {
              console.log('数据接收失败')
            }
          })
    },
    getmoveLocation ({commit,state,getters}) {
      axios.get('./json/moveLocation.json')
      .then(res => {
          if(res.status === 200){
              // var data = res.data.data.cinemas;
              commit('chgmoveLocation',res.data.data.cinemas);
              // console.log(res.data.data.cinemas)
          }
          
      })
  }
  },
  modules: {
    ma: a,
    mb: b,
    mc: c,
    comming
  },
  // 如果使用了moduels，都使用上命名空间
  namespaced: true
})
export default store;
