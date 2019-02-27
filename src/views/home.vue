<template>
    <div>
      <div class="home">
        <transition
          mode="out-in"
          enter-active-class="animated slideInup"
          leave-active-class="animated slideInDown"
        >
          <router-view></router-view>
        </transition>
      </div>

      <foo></foo>
    </div>
</template>

<script>
// import  animated from 'animate-css'
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
