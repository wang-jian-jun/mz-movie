<template>
    <div>
      <div class="login">
        <div class="box1">
          用户名：<input type="text" placeholder="用户名" msg="username">
        </div>
        <div class="box2">
          密&emsp;码：<input type="text" placeholder="密码" msg="password">
        </div>
        <br>
        <button class="loginBtn" @click="loginBtn">登陆</button>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginBtn () {
      axios.post('http://localhost:3000/user/login', {
        userName: this.username,
        password: this.password
      })
        .then(res => {
          console.log(res.data)
          if (res.data.code === 0) {
            // sessionStorage.setItem('nickname', res.data.data.nickName)
            sessionStorage.setItem('nickname', res.data.data.nickName);
            console.log(res.data.data.nickName)
            console.log(1)
            this.$router.replace({
              path: this.$route.query.id
            })
          }
        })
    }
  }
}
</script>

<style lang="less">
  .login{
    height: 150px;
    width: 250px;
    border: 1px solid black;
    margin: 50px auto;
    .box1,.box2{
      margin-top: 20px;
    }
    .btn{
      margin-left: 5px;
    }
  }
</style>
