<script setup>
const props = defineProps({
  option: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="float-right">
    <div
      class="px-3 py-1 text-dark-primary bg-dark-bg/70 hover:ring-2 hover:ring-violet-50 rounded-2xl transition duration-100 cursor-pointer">
      {{ props.option }}</div>
  </div>
</template>
