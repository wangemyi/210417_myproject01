<template>
  <div>
    {{msg}}
    <a href="javascript:;" @click="$router.back()">返回</a>
  </div>
</template>

<script>
export default {
  name: 'PageOne01',
  data () {
    return {
      msg: 'page one01'
    }
  }
}
</script>


<style scoped>

</style>
