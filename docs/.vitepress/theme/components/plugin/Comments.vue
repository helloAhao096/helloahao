<template>
  <div id="gitalk-container"></div>
</template>
<script lang="ts" setup>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { onMounted } from "vue";

// import { useData } from "vitepress";
// const relativePath = useData().page.value.relativePath;

const gitalk = new Gitalk({
  clientID: "53f859bc548f68175265",
  clientSecret: "73f528b5f57c8ca681785d711ee9904f197671ec",
  repo: "blog-comments",
  owner: "helloAhao096", //github仓库用户名
  admin: ["helloAhao096"], // 可以初始化插件的用户
  id: location.pathname.substring(0, 50), // Ensure uniqueness and length less than 50
  language: "zh-CN",
  distractionFreeMode: true, // Facebook-like distraction free mode
});


onMounted(() => {
  gitalk.render("gitalk-container");
});
</script>
<style scoped>
</style>

