<template>
 <div>
      <Medo/>
      <Youdo/>
      <Hedo/>
      <Show/>
  </div>
</template>

<script>
  import Youdo from './components/Youdo.vue'
  import Medo from './components/Medo.vue'
  import Hedo from './components/Hedo.vue'
  import Show from './components/Show.vue'

  export default {
    components: {
      Medo,
      Youdo,
      Hedo,
      Show
    }
  }
</script>

<style>
</style>