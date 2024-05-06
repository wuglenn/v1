<script setup>
const props = defineProps({
  query: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="float-right">
    <div class="px-3 py-1 text-violet-50 bg-theme-950 rounded-2xl max-w-[250px]">{{ props.query }}</div>
  </div>
</template>
