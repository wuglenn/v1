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
    <div class="px-3 py-1 text-dark-primary bg-dark-bg rounded-2xl max-w-[250px] md:max-w-[350px]">{{ props.query }}
    </div>
  </div>
</template>
