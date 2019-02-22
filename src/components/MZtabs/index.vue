<template>
    <div class="tab">
        <ul class="tabs">
        <router-link to="/films/zhengzai" tag="li"><span>正在上映</span></router-link>
        <router-link to="/films/jijiang" tag="li"><span>即将上映</span></router-link>
        </ul>

    </div>
</template>

<script>
export default {
/* eslint-disable */
}
</script>

<style lang="less">
  .tab{
      .tabs{
          display: flex;
          li{
              flex: 1;
              text-align: center;
              line-height: 49px;
              &.router-link-active{
              color:red
                 }
          }
          
      }
  }
</style>
