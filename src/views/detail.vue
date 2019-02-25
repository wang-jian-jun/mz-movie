<template>
    <div>
      详情页
      <h1>当前页面的id {{ this.$route.params.id }}</h1>
      <!-- <button>{{ id }}</button> -->
    </div>
</template>
<script>
export default {
  props: {
    // id: Number
  }
}
</script>
