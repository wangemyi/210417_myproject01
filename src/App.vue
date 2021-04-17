<template>
  <div id="app">
    <router-view />
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "@/components/FooterGuide.vue";
export default {
  name: "App",
  components: {
    FooterGuide
  }
};
</script>

<style></style>
