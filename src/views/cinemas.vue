<template>
    <div class="cinemas">
        <ul class="head">
            <li>{{ curCityName }}</li>
            <li>影院</li>
            <li>搜索</li>
        </ul>
        <ul class="tab">
            <li>全城</li>
            <li>最近去过</li>
        </ul>
        <ul class="foot">
            <li v-for="item in moveLocation" :key="item.logoUrl">
                <div>
                    <p>{{ item.name }}</p>
                    <p>{{ item.address }}</p>
                </div>
                <div>
                    <p>￥40起</p>
                    <p>{{ item.districtName }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      // moveLocation:[]
    }
  },
  // methods: {
  // getmoveLocation () {
  //     axios.get('./json/moveLocation.json')
  //     .then(res => {
  //         if(res.status === 200){
  //             var data = res.data.data.cinemas;
  //             this.moveLocation = data;
  //         }

  //     })
  // }
  // },
  // computed: {
  //     moveLocation () {
  //         return this.$store.state.moveLocation
  //     }
  // },
  // computed:Vuex.mapState([
  //     'moveLocation'
  // ]),
  computed: {
    ...mapState([
      'moveLocation',
      'curCityName'
    ])

  },
  methods: {
    ...mapActions([
      'getmoveLocation'
    ])
  },
  created () {
    // this.getmoveLocation()
    // this.$store.dispatch('getmoveLocation')
    this.getmoveLocation()
  }
}
</script>
<style lang="less" scoped>
@import url('./cinemas/cinemas.less');
</style>
