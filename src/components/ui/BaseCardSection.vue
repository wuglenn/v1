<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import BaseCard from "@/components/ui/BaseCard.vue";

const hoveredCard = ref([]);
const isHovered = ref(false);

const props = defineProps({
  cards: {
    type: Array,
    default: () => [],
    required: true,
  },
});

const onCardHover = (index) => {
  hoveredCard.value.length = 0;
  if ((window.innerWidth > 600 && isHovered.value) || window.innerWidth <= 600) {
    console.log("here");
    hoveredCard.value.push(-1);
  }
  hoveredCard.value.push(index);
};

const onCardUnhover = (index) => {
  // console.log("before")
  // console.log(hoveredCard.value)
  hoveredCard.value = hoveredCard.value.filter((e) => e != index);
  // console.log(index)
  // console.log(hoveredCard.value.filter(e => e != index))
};

const screenResize = () => {
  if (window.innerWidth < 600) {
    hoveredCard.value.push(-1);
  } else {
    hoveredCard.value.length = 0;
  }
};

onMounted(() => {
  screenResize();
  window.addEventListener("resize", screenResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", screenResize);
});

const hovered = () => {
  isHovered.value = true;
  hoveredCard.value.push(-1);
};

const unHovered = () => {
  isHovered.value = false;
  hoveredCard.value = hoveredCard.value.filter((e) => {
    e !== -1;
  });
};
</script>

<template>
  <div
    class="flex flex-col gap-4 lg:gap-8 items-start justify-start"
    @mouseover="hovered"
    @mouseleave="unHovered"
  >
    <BaseCard
      v-for="(card, index) in props.cards"
      :key="index"
      :class="{ blurred: !hoveredCard.includes(index) && hoveredCard.length >= 1 }"
      @card-hover="onCardHover(index)"
      @card-unhover="onCardUnhover(index)"
      :start-date="card.startDate"
      :end-date="card.endDate"
      :title1="card.title1"
      :title2="card.title2"
      :website="card.website"
      :description="card.description"
      :tags="card.tags"
    />
  </div>
</template>

<style scoped>
.blurred {
  filter: blur(1px) brightness(50%);
  /* opacity: 0.5; */
  transition:
    filter 0.3s ease,
    opacity 0.3s ease-out;
}
</style>
