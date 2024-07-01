<template>
  <div class="shareCard">
    <h1 class="title">
      <span class="underline">你好，我是千帆 👋</span>
    </h1>
    <p class="description">
      这是我的个人博客
    </p>
    <p class="email">
      helloahao@icloud.com
    </p>

<!--    <Modal button-text="AHAO"></Modal>-->
<!--    <Binary/>-->
<!--    <iframe class="binary" src="./binary/binary.html"  frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>-->
  </div>
</template>

<script setup lang="ts">
// import Binary from "../component/Binary.vue";
// import Modal from "../component/Modal.vue";

</script>
<style scoped>
.shareCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  text-align: center;
}
.title {
  display: flex;
  align-items: center;
  font-size: 2.2em;
  font-weight: bold;
}
.description {
  margin: 1em 0;
}
</style>
