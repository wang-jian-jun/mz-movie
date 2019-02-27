<template>
  <div class="jijiang">
    <ul class="content" v-for="item in commingList" :key="item.filmId">
      <li><img :src="item.poster" alt=""></li>
      <li>
        <ul>
          <li><span>{{ item.name }}</span><span>{{ item.filmType.name }}</span></li>
          <li><span>主演</span><span>暂无主演</span></li>
          <li><span>上映时间</span><span>2019年3yue</span></li>
        </ul>
      </li>
      <li><span>预购</span></li>
    </ul>
  </div>

</template>

<script>
import axios from 'axios'
import { state, actions } from 'vuex'
import { mapActions, mapState } from 'vuex';
export default {
  data () {
    return {
      // commingList: []
    }
  },
  computed: {
    ...mapState('comming', [
      'commingList'
    ])
  },
  methods: {
    // getcomming () {
    //   // axios.get ('../public/json/future.json')
    //   axios.get('./json/future.json')
    //   .then(res => {
    //     if (res.status === 200)
    //     console.log(res.data.data.films)
    //     this.commingList = res.data.data.films
    //     console.log(this.commingList)
    //   })
    // }
    ...mapActions('comming', [
      'getcomming'
    ])
  },
  created () {
    this.getcomming()
  }
}
// export default {
//   data() {
//     return {
//       commingList: []
//     }
//   },
//   methods:{
//     getcomming () {
//       // axios.get ('../public/json/future.json')
//       axios.get('./json/future.json')
//       .then(res => {
//         if (res.status === 200)
//         console.log(res.data.data.films)
//         this.commingList = res.data.data.films
//         console.log(this.commingList)
//       })
//     }
//   },
//   created () {
//     this.getcomming()
//   }
// }
</script>

<style lang='less' sclopd>
@import url('./comming/comming.less');
</style>
