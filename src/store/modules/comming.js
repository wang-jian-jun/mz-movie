export default {
  state:{
    commingList: []
  },
  mutations:{
    chgcommingList (state,play) {
      state.commingList = play;
    }
  },
  actions:{
    getcomming ({commit,state}) {
      // axios.get ('../public/json/future.json')
      axios.get('./json/future.json')
      .then(res => {
        if (res.status === 200)
        console.log(res.data.data.films)
        // this.commingList = res.data.data.films
        commit('chgcommingList',res.data.data.films);
        console.log(this.commingList)
      })
    }
  },
  getters:{},
}

// import  vue from 'vue'
// import vuex from 'vuex'
// vue.use(vuex)

// const vuex = new vuex({
//   state:{
//     msg:'我是即将上映的数据'
//   },
//   mutations:{},
//   getters:{},
//   actions:{}
// })
// export default vuex
