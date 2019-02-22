// 仓库文件
import Vue from  'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 创建仓库
let store = new Vuex.Store({
  // 状态，存放频繁使用的数据
  state: {
    // 默认打开显示的城市
    curCityName: '北京',
    // 城市列表中的所有数据
    cityData: []
  },
  mutations: {
    // key: value
    // 会默认有一个state的参数，这个state的数据就是上面所定义的内容
    // 这里的那么相当于一个形参
    chgCityName (state, name) {
      state.curCityName = name
    },
    chgcityData (state,name) {
      state.cityData = name
    }
  }
})
export default store;

