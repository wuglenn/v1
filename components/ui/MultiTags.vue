<script setup>
const props = defineProps({
  tags: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ul v-if="props.tags.length > 0" class="flex flex-row flex-wrap gap-2 text-sm">
    <li v-for="tag in props.tags" :key="tag"
      class="bg-violet-300 dark:bg-violet-900/50 px-3 py-1 rounded-full text-light-primary dark:text-violet-200">
      {{ tag }}
    </li>
  </ul>
</template>