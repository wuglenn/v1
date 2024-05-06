<script setup>
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

</script>

<template>
  <div class="font-sofia bg-violet-50 dark:bg-theme-950 text-theme-950 dark:text-theme-500 min-h-screen">
    <NuxtPage />
    <UiMouseCircle />
    <ChatBot />
  </div>
</template>
