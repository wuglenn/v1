<script setup>
import { onBeforeRouteLeave } from "vue-router";
import { useScrollPositionStore } from "@/stores/scrollPosition";

const scrollPositionStore = useScrollPositionStore();

onBeforeRouteLeave((to, from, next) => {
  const scrollPosition = {
    left: window.scrollX,
    top: window.scrollY,
  };

  scrollPositionStore.savePosition(from, scrollPosition);

  next();
});
</script>

<template>
  <div></div>
</template>
