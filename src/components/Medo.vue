<template>
  <div>
    <button @click="medo()">点我</button>
  </div>
</template>

<script>
   export default {
    methods:{
      medo(){
        const mdo="我来了";
        this.$store.dispatch('medo',mdo);
      }
    }
  }
</script>

<style>
 

</style>