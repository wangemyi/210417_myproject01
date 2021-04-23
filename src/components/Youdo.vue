<template>
  <div>
   <button @click="youdo()">点你</button>
  </div>
</template>

<script>
  export default {
    methods:{
      youdo(){
        const ydo="你来了";
        this.$store.dispatch('youdo',ydo);
      }
    }
  }
</script>

<style>
 

</style>