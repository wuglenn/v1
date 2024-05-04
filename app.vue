<script setup>
import { SpeedInsights } from "@vercel/speed-insights/vue"
</script>

<template>
  <div class="font-sofia bg-violet-50 dark:bg-theme-950 text-theme-950 dark:text-theme-500 min-h-screen scrollbar-hide">
    <NuxtPage />
    <UiMouseCircle />
    <SpeedInsights />
  </div>
</template>
