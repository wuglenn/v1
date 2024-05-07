<script setup>

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
// import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

const isDarkMode = ref(false);
const isHovered = ref(false);

const colorMode = useColorMode()

onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) || document.documentElement.classList.contains("dark-mode")) {
    isDarkMode.value = true;
  } else {
    isDarkMode.value = false;
  }
});

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    localStorage.theme = 'dark';
    colorMode.preference = 'dark'
  } else {
    localStorage.theme = 'light';
    colorMode.preference = 'light'
  }
}
</script>

<template>
  <div
    class="relative h-5 w-10 rounded-full ring-2 ring-light-secondary dark:ring-dark-secondary hover:ring-light-primary dark:hover:ring-dark-primary transition duration-300 cursor-pointer"
    @click="toggleDarkMode" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <div class="m-0.5 relative">
      <div class="absolute h-4 aspect-square rounded-full transition"
        :class="isDarkMode ? 'translate-x-5':'translate-x-0'">
        <div class="relative top-0.5 left-0.5">
          <div class="absolute flex items-center justify-center">
            <FontAwesomeIcon :icon="faSun" class="text-xs transition"
              :class="!isDarkMode ? 'rotate-0 opacity-100':'rotate-180 opacity-0', isHovered ? 'text-light-primary dark:text-dark-primary':'text-light-secondary dark:text-dark-secondary' " />
          </div>
          <div class="absolute flex items-center justify-center">
            <FontAwesomeIcon :icon="faMoon" class="text-xs transition"
              :class="isDarkMode ? 'rotate-0 opacity-100':'-rotate-180 opacity-0', isHovered ? 'text-light-primary dark:text-dark-primary':'text-light-secondary dark:text-dark-secondary' " />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
