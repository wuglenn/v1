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
    <div class="px-3 py-1 bg-light-bg text-light-primary rounded-2xl max-w-[250px] md:max-w-[350px]">
      <a v-if="props.response.includes('message') && props.response.includes('me')" href="mailto:glennwuwu@gmail.com"
        class="underline">
        {{ props.response }}
      </a>
      <span v-else>
        {{ props.response }}
      </span>
    </div>
  </div>
</template>
