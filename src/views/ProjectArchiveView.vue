<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";

import ProjectsTable from "@/components/projects/ProjectsTable.vue"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import ScrollState from "@/components/state/ScrollState.vue";

const isHovered = ref(false);

const arrowClass = computed(() => ({
  "-translate-x-2": isHovered.value,
}));
</script>

<template>
  <main class="relative">
    <div class="text-theme-950 dark:text-theme-500 relative flex items-center justify-center">
      <div class="lg:w-[800px] xl:w-[1150px] flex flex-col items-center justify-start mt-[80px]">
        <div class="flex flex-col w-full justify-start">
          <RouterLink to="/"
            class="p-2 text-lg font-semibold flex items-center justify-start gap-1 text-theme-500 dark:text-violet-300"
            @mouseover="isHovered = true" @mouseleave="isHovered = false">
            <FontAwesomeIcon :icon="faArrowLeft" class="transition" :class="arrowClass" />Glenn Wu
          </RouterLink>
          <h1 class="font-bold text-5xl text-theme-700 dark:text-violet-50">All Projects</h1>
        </div>
        <ProjectsTable class="font-medium" />
      </div>
    </div>
    <ScrollState />
  </main>
</template>
