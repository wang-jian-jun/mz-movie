<template>
  <h1>zhengxiag</h1>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    axios.get('/api/gateway?type=2&cityId=210300&k=7350342', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154557068643757126814560"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    })
      .then(res => {
        console.log(res)
        console.log(111)
      }).catch('失败')
  }
}
</script>

<style>

</style>
