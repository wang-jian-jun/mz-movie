<template>
    <div>
      <router-view></router-view>
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
