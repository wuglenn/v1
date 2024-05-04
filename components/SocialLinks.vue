<script setup>
import { computed } from "vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const props = defineProps({
  justify: {
    type: String,
    default: "center",
    validator: (value) => ["start", "center"].includes(value),
  },
});

const justifyClass = computed(() => {
  return {
    "justify-start": props.justify === "start",
    "justify-center": props.justify === "center",
  };
});
</script>
<template>
  <div class="flex flex-row gap-4 items-center" :class="justifyClass">
    <a
      href="https://github.com/glennwuwu"
      target="blank_"
      class="hover:text-violet-50 transition duration-100"
    >
      <FontAwesomeIcon :icon="faGithub" class="" />
    </a>
    <a
      href="https://linkedin.com/in/glennwuwu"
      target="blank_"
      class="hover:text-violet-50 transition duration-100"
    >
      <FontAwesomeIcon :icon="faLinkedin" class="" />
    </a>
    <a
      href="https://instagram.com/glwuu"
      target="blank_"
      class="hover:text-violet-50 transition duration-100"
    >
      <FontAwesomeIcon :icon="faInstagram" class="" />
    </a>
  </div>
</template>
