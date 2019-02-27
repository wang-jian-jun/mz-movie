<template>
  <div class="zhengzai">
    <!-- 动态路由设置 -->
    <!-- to="/detail/:item.filmid" -->
    <!-- <router-link :to="shuju" @click="btn(item.filmId)" tag="ul" class="mint-item" -->
    <router-link :to="'/detail/'+ item.filmId" tag="ul" class="mint-item"
      v-for="item in movelist" :key="item.filmId"
    >
        <li><img :src="item.poster" alt=""></li>
        <li>
          <ul>
            <li>{{ item.name }}</li>
            <li>观众评分&emsp;<span>{{ item.grade }}</span></li>
            <li>主演：<span>{{ item.director }}</span></li>
            <li><span>{{ item.nation }}</span></li>
          </ul>
        </li>
        <li><span>购票</span></li>
    </router-link>

  </div>
</template>

<script >
import axios from 'axios'
export default {
  data () {
    return {
      // movelist: []
      shuju: ''
    }
  },
  computed: {
    movelist () {
      return this.$store.state.movelist;
    }
  },
  methods: {
    btn (data) {
      console.log(data)
      var a = data;
      this.shuju = '/detail/:' + a
    }
    // getDate () {
    //   axios.get('./json/move.json')
    //     .then(res => {
    //       let data = res.data;
    //       if (data.status === 0) {
    //         // this.movelist = res.data.data.films;
    //         this.$store.commit('chgmovelist',res.data.data.films)
    //         console.log(res.data.data.films)
    //       } else {
    //         console.log('数据接收失败')
    //       }
    //     })
    // }
  },
  created () {
    // this.getDate()
    this.$store.dispatch('getData')
  }
}
</script>

<style lang="less" sclopd>
@import url('./move/move.less');
</style>
