<script setup>
import { ref, computed } from "vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const isHovered = ref(false);

const arrowClass = computed(() => ({
  "translate-x-2": isHovered.value,
}));

</script>

<script>
import { projects } from "./projects";

const projectsCards = projects.filter(e => {
  return e.main
});
</script>

<template>
  <BaseCardSection :cards="projectsCards" />
  <ul
    class="px-2 sm:px-4 mt-6 font-semibold text-lg lg:text-xl flex flex-col sm:flex-row gap-4 items-start sm:items-center ms-0">
    <NuxtLink to="/archive" @mouseover="isHovered = true" @mouseleave="isHovered = false">
      <div class="transition text-theme-950  dark:text-violet-50 rounded-full flex justify-center items-center gap-2">
        <span>View Full Project Archive</span>
        <FontAwesomeIcon :icon="faArrowRightLong" class="text-lg lg:text-xl transition" :class="arrowClass" />
      </div>
    </NuxtLink>
  </ul>
</template>
