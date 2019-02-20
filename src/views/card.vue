<template>
  <div>
     <h1>卡片</h1>
     <button>点击</button>
  </div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    console.log('enter')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('Update')
  },
  beforeRouteLeave (to, from, next) {
    console.log('leave')
    next()
  }
}
</script>
