<script setup>
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

</script>

<template>
  <div class="font-sofia bg-light-bg dark:bg-dark-bg text-light-secondary dark:text-dark-secondary min-h-screen">
    <NuxtPage />
    <UiMouseCircle />
    <ChatBot />
  </div>
</template>
