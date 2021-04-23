<template>
  <div>
    <button @click="hedo()">点他</button>
  </div>
</template>

<script>
   export default {
    methods:{
      hedo(){
        const hdo="他来了";
        this.$store.dispatch('hedo',hdo);
      }
    }
  }
</script>

<style>
 

</style>