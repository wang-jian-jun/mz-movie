<template>
    <div>
      详情页
      <h1>当前页面的id {{ $route.params.id }}</h1>
    </div>
</template>
<script>
export default {
  props: {
    id: Number
  }
}
</script>
