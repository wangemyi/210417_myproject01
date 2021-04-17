<template>
  <div>
    FooterGuide
    <a href="javascript:;" :class="{on:'/home'===$route.path}" @click="goto('/home')">首页</a>
    <a href="javascript:;" :class="{on:'/page_one'===$route.path}" @click="goto('/page_one')">页面1</a>
    <a href="javascript:;" :class="{on:'/page_two'===$route.path}" @click="goto('/page_two')">页面2</a>
  </div>
</template>

<script>
export default {
  methods:{
    goto(path){
      this.$router.replace(path);
    }
  }
};
</script>

<style>
.on{
    color: rgb(115, 221, 221);
  }
</style>
