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
  <MouseEvent/>
</template>
<script lang="ts" setup>

import DefaultTheme from "vitepress/theme";

const {Layout} = DefaultTheme;
import HomeHero from "./HomeHero.vue";
import CopyWright from "./CopyWright.vue";
import Comments from "./Comments.vue";
import Page from "./Page.vue";
import Category from "./Category.vue";
import Title from "./Title.vue";
import MouseEvent from "./MouseEvent.vue";

</script>
<style scoped></style>
