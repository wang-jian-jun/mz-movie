<template>
    <div>
      <div class="home">
        <router-view></router-view>
      </div>

      <foo></foo>
    </div>
</template>

<script>
import foo from '../components/MZfooter/index.vue';
export default {
  components: {
    foo
  }
}
</script>
<style lang="less" scoped>
  .home{
    overflow: auto;
    width: 100%;
    height: 93%;
    // height: 100%;
    position: fixed;
    bottom: 49px;
  }
</style>
