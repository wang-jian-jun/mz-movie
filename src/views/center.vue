<template>
  <div class="center">
    <div class="c-Header">
      <img src="../assets/login.jpg" alt="">
      <router-link to="/login" tag="div">登陆</router-link>
    </div>
    <div class="c-dingdan">
        <router-link to="" tag="p"><i class="iconfont icon-wode"></i><p>电影订单</p></router-link>
        <router-link to="" tag="p"><i class="iconfont icon-wode"></i><p>拼团订单</p></router-link>
    </div>
    <ul>
        <router-link to="/card" tag="li"><i class="iconfont icon-ktv"></i>卖座卡</router-link>
        <router-link to="/money" tag="li"><i class="iconfont icon-wode"></i>余额</router-link>
        <router-link to="/system" tag="li"><i class="iconfont icon-wode"></i>设置</router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
html,
body,
.center {
  height: 100%;
  width: 100%;
}
.center {
  background: antiquewhite;
  .c-Header {
    height: 160px;
    background: #fe7525;
    img {
      float: left;
      margin-left: 27px;
      margin-top: 20px;
    }
    div {
      float: right;
      margin-right: 149px;
      margin-top: 60px;
      letter-spacing: 10px;
    }
  }
  .c-dingdan {
    display: flex;
    justify-content: space-around;
    p {
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: center;
      background: white;
      line-height: 25px;
    }
  }
}
//   ul{
//       display: flex;
//       flex-direction: column;
//       li{
//           line-height: 50px;
//           padding-left:20px;
//       }
//   }
</style>
