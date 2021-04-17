<template>
  <div>
    {{msg}}
    <router-link to="/page_one01">跳转到page_one01</router-link>
  </div>
</template>

<script>
export default {
  name: 'PageOne',
  data () {
    return {
      msg: 'page one'
    }
  }
}
</script>


<style scoped>

</style>
