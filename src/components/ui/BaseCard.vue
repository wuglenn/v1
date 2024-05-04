<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

import MultiTags from "./MultiTags.vue"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const props = defineProps({
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    default: "",
  },
  title1: {
    type: String,
    required: true,
  },
  title2: {
    type: String,
    default: "",
  },
  website: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    required: "",
  },
  tags: {
    type: Array,
    default: () => [],
  },
});

const currentDate = ref(new Date());
const isHovered = ref(false);
const linkClass = ref("rotate-0 opacity-0");
const cardRef = ref(null);

const formattedEndDate = computed(() => {
  if (props.endDate.length > 0) {
    const endDate = new Date(props.endDate);
    return endDate > currentDate.value ? "Present" : props.endDate;
  }
  return "";
});

const cardClasses = computed(() => ({
  "shadow-md": isHovered.value,
}));

const titleClasses = computed(() => ({
  "text-violet-600 dark:text-violet-300": isHovered.value,
  "text-theme-950 dark:text-violet-50": !isHovered.value,
}));

const openLink = () => {
  if (props.website) {
    window.open(props.website, "_blank");
  }
};

const emit = defineEmits(["cardHover", "cardUnhover"]);

const onMouseOver = () => {
  isHovered.value = true;
  linkClass.value = "rotate-180 opacity-100";
  emit("cardHover");
};

const onMouseLeave = () => {
  isHovered.value = false;
  linkClass.value = "rotate-0 opacity-0";
  emit("cardUnhover");
};

const observeCard = () => {
  if (cardRef.value) {
    const thresholdWindow = 20;
    const windowMargin = (thresholdWindow / window.innerHeight) * 50 - 50;
    const options = {
      root: null,
      rootMargin: `${windowMargin}% 0px`,
      threshold: 0, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(window.innerWidth)
        if (entry.isIntersecting && window.innerWidth < 600) {
          onMouseOver();
        } else {
          onMouseLeave();
        }
      });
    }, options);

    observer.observe(cardRef.value);

    // Clean up the observer when the component is unmounted
    onUnmounted(() => {
      observer.disconnect();
    });
  }
};

onMounted(() => {
  observeCard();
});
</script>

<template>
  <div ref="cardRef"
    class="w-full flex flex-col lg:flex-row items-start justify-start gap-1 lg:gap-4 hover:bg-theme-500/60 dark:hover:bg-theme-700/60 dark:hover:ring-2 dark:hover:ring-theme-700 p-2 sm:p-4 rounded relative transition duration-75"
    :class="cardClasses" @mouseover="onMouseOver" @mouseleave="onMouseLeave" @click="openLink">
    <div class="top-0 left-0 absolute w-full h-full cursor-pointer"></div>
    <div class="uppercase sm:min-w-[150px] sm:max-w-[150px] text-xs sm:text-sm mt-1">
      {{ startDate }} <span v-if="formattedEndDate">—</span> {{ formattedEndDate }}
    </div>
    <div class="flex flex-col items-start justify-start">
      <div :class="titleClasses">
        {{ title1 }} <span v-if="title2">· {{ title2 }}</span>
        <FontAwesomeIcon v-if="website" :icon="faLink" class="text-base ms-1 transition duration-150"
          :class="linkClass" />
      </div>
      <p class="text-sm sm:text-base">{{ description }}</p>
      <MultiTags class="mt-3" :tags="tags" />
    </div>
  </div>
</template>

<!-- <style scoped>

.link-active {
  animation-duration: 0.5s;
  animation-name: rotate-180;
}

@keyframes rotate-180 {
  0% {
    transform: rotate(0)
  }
  
  100% {
    transform: rotate(180)
  }
}

</style> -->
