<script setup>
const props = defineProps({
  response: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="float-left">
    <div class="px-3 py-1 bg-violet-50 text-theme-950 rounded-2xl font-medium max-w-[250px]">{{ props.response }}</div>
  </div>
</template>
