<script setup>
import { computed, ref } from "vue";

const isHovered = ref(false);

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  isClicked: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["mouseover", "mouseleave", "click"]);

const lineWidth = computed(() => {
  return props.isClicked || isHovered.value ? "80px" : "30px";
});

const lineCol = computed(() => {
  return {
    "bg-theme-500": !isHovered.value && !props.isClicked,
    "bg-violet-50": isHovered.value || props.isClicked,
  };
});

const textCol = computed(() => {
  return {
    "text-theme-500": !isHovered.value && !props.isClicked,
    "text-violet-50": isHovered.value || props.isClicked,
  };
});

const onMouseover = () => {
  isHovered.value = true;
};

const onMouseleave = () => {
  isHovered.value = false;
};

function onClick() {
  emit("click");
}
</script>

<template>
  <div>
    <div @mouseover="onMouseover" @mouseleave="onMouseleave" @click="onClick"
      class="flex flex-row justify-start py-1 gap-3 cursor-pointer font-semibold">
      <div class="relative transition-all duration-200" :style="{ width: lineWidth }">
        <div class="absolute top-1/2 h-[1px] w-full" :class="lineCol"></div>
      </div>
      <div :class="textCol">
        {{ text }}
      </div>
    </div>
  </div>
</template>
