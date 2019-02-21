<template>
    <div class="films">
        <banner></banner>
        <tabs></tabs>
        <button @click='gocity' class="city">城市</button>
        <ul>
          <li>aa</li>
          <router-link tag="li" to="/detail/df">流浪地球</router-link>
          <router-link tag="li" to="/detail/wjj">哈哈</router-link>
        </ul>
        <!-- <Footer></Footer> -->
    </div>
</template>

<script>
import banner from '../components/MZbanner/index.vue';
import tabs from '../components/MZtabs/index.vue';
import Footer from '../components/MZfooter/index.vue';
export default {
  /* eslint-disable */
  components: {
    banner,
    tabs,
    Footer
  },
  methods: {
    gocity () {
      //字符串跳转
      // this.$router.push('/city')
      //对象传递方式
      this.$router.push({
        path: '/city',
        params: {
          id: 10
        },
        // query: {
        //   id:20
        // }
      })
    }
  }
}
</script>

<style lang="less" sclopd>
.films{
  position: relative;
  .city{
    position: absolute;
    top: 22px;
    left: 10px;
    z-index: 2;
    opacity: 0.8;
    border-radius: 10px;
  }
}
</style>
