<template>
  <div>
    {{ $store.state.doit }}
    <button @click="thinks()">回复</button>
  </div>
</template>

<script>
export default {
  methods:{
    thinks(){
      const think="谢谢";
      this.$store.dispatch('thinks',think);
    }
  }
};
</script>

<style></style>
