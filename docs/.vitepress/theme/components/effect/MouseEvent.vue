<template>

</template>

<script setup lang="ts">
import * as CursorEffects from "cursor-effects";

// 判断运行环境和设备类型
if (typeof navigator !== 'undefined') {
  if (!navigator.userAgent.match(/AppleWebKit.*Mobile.*/)){
    new CursorEffects.rainbowCursor({
      length: 8,
      colors: [  "#FE0000",
        "#FD8C00",
        "#FFE500",
        "#119F0B",
        "#0644B3",
        "#C22EDC",],
      size: 3,
    })
  }
} else {
  console.error('The navigator object is not available.');
}
</script>

<style scoped>

</style>