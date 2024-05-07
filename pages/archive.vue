<script setup>
import { ref, computed } from "vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const isHovered = ref(false);

const arrowClass = computed(() => ({
  "-translate-x-2": isHovered.value,
}));
</script>

<template>
  <main class="relative">
    <div class="flex items-center justify-center">
      <div class="mx-5 md:mx-10 lg:w-[900px] xl:w-[1150px] flex flex-col items-center justify-start mt-[80px]">
        <div class="flex flex-col w-full justify-start">
          <div class="flex">
            <NuxtLink to="/"
              class="p-2 text-lg font-semibold flex items-center justify-start gap-1 text-light-highlight dark:text-dark-highlight grow-0"
              @mouseover="isHovered = true" @mouseleave="isHovered = false">
              <FontAwesomeIcon :icon="faArrowLeft" class="transition" :class="arrowClass" />Glenn Wu
            </NuxtLink>
          </div>
          <h1 class="font-bold text-5xl text-light-primary dark:text-dark-primary">All Projects</h1>
        </div>
        <ProjectsTable class="font-medium mt-10 lg:mt-20" />
      </div>
    </div>
    <Title>All Projects | Glenn Wu</Title>
    <Meta name="description" content="Glenn Wu's personal site and portfolio" />
    <StateScroll />
  </main>
</template>
