<script setup>
import { ref, computed } from "vue";
import { RouterLink, onBeforeRouteLeave } from "vue-router";

import BaseCardSection from "@/components/ui/BaseCardSection.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const projectsCards = ref([
  {
    startDate: "May 2024",
    // endDate: "Jan 2025",
    title1: "me.glennwu.com (you're here!)",
    // title2: "Oracle",
    website: "https://me.glennwu.com/",
    description: "The latest version of my portfolio site. Made from scratch with Vue 3 and Vite.",
    tags: ["Vue", "TailwindCSS", "HTML", "CSS", "JavaScript"],
  },
  {
    startDate: "Feb 2024",
    // endDate: "Jan 2025",
    title1: "Image Classification Web App",
    // title2: "Oracle",
    website: "https://devops-ca2.glennwu.com/",
    description:
      "A simple machine learning app made to classify images of vegetables. Built in Flask with a hosted TensorFlow Serving model. Created for a school assignment.",
    tags: ["Python", "Flask", "TensorFlow", "TailwindCSS"],
  },
  {
    startDate: "Feb 2024",
    // endDate: "Jan 2025",
    title1: "Exploring Deep Q-Networks",
    // title2: "Oracle",
    website: "https://devops-ca2.glennwu.com/",
    description:
      "An exploration of reinforcement learning techniques using the Pendulum environment on OpenAI's Gym. Created for a school assignment.",
    tags: ["Python", "PyTorch"],
  },
]);

const isHovered = ref(false);

const arrowClass = computed(() => ({
  "translate-x-2": isHovered.value,
}));

onBeforeRouteLeave((to, from, next) => {
  const scrollPosition = {
    left: window.scrollX,
    top: window.scrollY,
  };

  to.meta.scrollPosition = scrollPosition;

  next();
});
</script>

<template>
  <BaseCardSection :cards="projectsCards" />
  <ul
    class="px-2 sm:px-4 mt-6 font-semibold text-lg lg:text-xl flex flex-col sm:flex-row gap-4 items-start sm:items-center ms-0">
    <RouterLink to="/archive" @mouseover="isHovered = true" @mouseleave="isHovered = false">
      <div
        class="transition text-theme-950 hover:text-theme-950/60 dark:text-violet-50 dark:hover:text-violet-50/80 rounded-full flex justify-center items-center gap-2">
        <span>View Full Project Archive</span>
        <FontAwesomeIcon :icon="faArrowRightLong" class="text-lg lg:text-xl transition" :class="arrowClass" />
      </div>
    </RouterLink>
  </ul>
</template>
