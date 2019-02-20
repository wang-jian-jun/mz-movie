<template>
      <!-- <films></films> -->
      <router-view></router-view>
      <!-- <router-view></router-view> -->
      <!-- <Footer></Footer> -->
</template>
<script>
import films from './views/films.vue';
import Footer from './components/MZfooter/index.vue'
export default {
  /* eslint-disable */
  components: {
    films,
    Footer
  }
}
</script>
<style>
</style>
