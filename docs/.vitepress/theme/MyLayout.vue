<template>
  <Layout>
    <!--  文章标题 小结  -->
    <template #doc-before>
      <!--  文章标题    -->
      <Title/>
      <!--   段落小结   -->
      <Category/>
    </template>

    <!--  github评论   -->
        <template #doc-after>
          <Comments />
        </template>

    <!--  首页动态gif  -->
    <template #home-hero-before>
      <HomeHero/>
    </template>

    <!--  文章列表  -->
    <template #home-features-after>
      <Page/>
    </template>
  </Layout>

  <CopyWright/>


  <div v-if="!mouseDisplay">
    <MouseEvent/>
  </div>
</template>
<script lang="ts" setup>

import DefaultTheme from "vitepress/theme";


import HomeHero from "./components/layout/HomeHero.vue";
import CopyWright from "./components/layout/CopyWright.vue";
import Comments from "./components/plugin/Comments.vue";
import Page from "./components/layout/Page.vue";
import Category from "./components/Category.vue";
import Title from "./components/layout/Title.vue";
import MouseEvent from "./components/effect/MouseEvent.vue";

// 在电脑上才显示
const mouseDisplay = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)

const {Layout} = DefaultTheme;
</script>
<style scoped></style>
