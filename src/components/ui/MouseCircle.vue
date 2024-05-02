<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const circlePosition = ref({ x: 0, y: 0 });
const circleElement = ref(null);

const circleDiameter = 1000;

const updateCirclePosition = (event) => {
  circlePosition.value = {
    x: event.clientX - circleDiameter / 2,
    y: event.clientY - circleDiameter / 2,
  };
};

onMounted(() => {
  // updateCirclePosition()
  document.addEventListener("mousemove", updateCirclePosition);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", updateCirclePosition);
});
</script>

<template>
  <div
    ref="circleElement"
    class="circle"
    :style="{ transform: `translate(${circlePosition.x}px, ${circlePosition.y}px)` }"
  ></div>
</template>

<style scoped>
.circle {
  position: fixed;
  top: 0;
  left: 0;
  width: 1000px;
  height: 1000px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(55, 0, 128, 0.233) 0%,
    rgba(108, 18, 136, 0) 70%
  );
  pointer-events: none;
  z-index: 0;
  transform: translate(-50%, -50%);
  transition: transform 0.2s ease-out;
}
</style>
