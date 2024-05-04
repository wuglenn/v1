<script setup>
import { ref, computed, onUnmounted } from "vue";

import { useSpotifyStore } from "@/stores/spotify";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

const spotifyStore = useSpotifyStore();
const isUprightValue = ref(false);
const showSVG = ref(true);

if (spotifyStore.currentSong == null) {
  spotifyStore.updateCurrentSong({
    name: "",
    artist: "",
    isPlaying: false,
    albumArt: false,
    progress: 0,
    duration: 1,
  });
}

const formatTime = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const isUpright = computed(() => isUprightValue.value);

const currentSong = computed(() => spotifyStore.currentSong);

spotifyStore.initializeSSE();

const updateSongTime = setInterval(() => {
  const updatedSong = spotifyStore.currentSong;
  if (
    updatedSong != null &&
    updatedSong.isPlaying &&
    updatedSong.progress < updatedSong.duration &&
    !document.hidden
  ) {
    updatedSong.progress += 200;
    spotifyStore.updateCurrentSong(updatedSong);
  } else if (updatedSong.progress > updatedSong.duration) {
    updatedSong.progress = updatedSong.duration;
    spotifyStore.updateCurrentSong(updatedSong);
  }
}, 200);

onUnmounted(() => {
  clearInterval(updateSongTime);
  spotifyStore.closeSSE();
});

const toggleUpright = () => {
  setTimeout(() => { }, 200);
  isUprightValue.value = !isUprightValue.value;
};

const hideSVG = () => {
  showSVG.value = false;
};

const showSVGAgain = () => {
  showSVG.value = true;
};
</script>

<template>
  <div class="flex items-center justify-center font-sofia text-center">
    <div v-if="currentSong"
      class="text-white bg-black/70 dark:bg-black/50 p-4 rounded-2xl ring-spotify ring-4 min-w-[calc(100vw-40px)] sm:min-w-[500px]">
      <div class="flex items-center justify-center gap-2 sm:gap-4 relative"
        :class="{ 'flex-col': isUpright, 'flex-row': isUpright }">
        <div
          class="text-sm xs:text-lg sm:text-xl top-0.5 sm:top-0 left-0.5 sm:left-0 text-white absolute cursor-pointer transition-transform"
          :class="{ 'rotate-90': isUpright }" @click="toggleUpright">
          <div
            class="w-6 min-w-6 h-6 min-h-6 xs:w-7 xs:min-w-7 xs:h-7 xs:min-h-7 sm:w-8 sm:min-w-8 sm:h-8 sm:min-h-8 rounded-full hover:bg-white/20 flex justify-center items-center transition-colors">
            <FontAwesomeIcon :icon="faChevronRight" />
          </div>
        </div>
        <div :class="isUpright ? 'order-first' : 'order-last'">
          <div :class="{ playing: currentSong.isPlaying && !isUpright }" class="relative">
            <img v-if="currentSong.albumArt.url" :src="currentSong.albumArt.url" :alt="currentSong.name"
              @mouseover="hideSVG" @mouseleave="showSVGAgain" :class="{
                'h-60 w-60 min-h-60 min-w-60 rounded-2xl': isUpright,
                'h-20 w-20 min-h-20 min-w-20 rounded-full': !isUpright,
              }" />
            <div v-else>
              <svg v-if="isUpright" height="240" width="240">
                <circle r="120" cx="120" cy="120" fill="#222" />
              </svg>
              <svg v-else height="80" width="80">
                <circle r="40" cx="40" cy="40" fill="#222" />
              </svg>
            </div>
          </div>
        </div>
        <div class="w-full">
          <h2 class="font-bold text-base xs:text-lg sm:text-xl">
            <div v-if="currentSong.isPlaying">
              <FontAwesomeIcon v-if="isUpright" :icon="faSpotify" class="text-spotify" /> Currently
              listening to:
            </div>
            <div v-else>
              <FontAwesomeIcon v-if="isUpright" :icon="faSpotify" class="text-spotify" /> Recently
              listened to:
            </div>
          </h2>
          <h2 class="text-base xs:text-lg sm:text-xl font-medium">{{ currentSong.name }}</h2>
          <h4 v-if="isUpright" class="text-base sm:text-lg -mt-1">{{ currentSong.artist }}</h4>
          <div>
            <div
              class="flex flex-row w-full items-center justify-center gap-2 text-sm text-neutral-400 sm:min-w-[250px]">
              <div>{{ formatTime(currentSong.progress) }}</div>
              <div class="flex-1 bg-neutral-700/60 h-1 relative rounded-full">
                <div class="bg-white h-full absolute rounded-full left-0 top-0 transition-all duration-200"
                  :style="{ width: (currentSong.progress / currentSong.duration) * 100 + '%' }"></div>
              </div>
              <div>{{ formatTime(currentSong.duration) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No song information available.</p>
    </div>
  </div>
</template>

<style scoped>
.playing {
  -webkit-animation: spin 12s linear infinite;
  -moz-animation: spin 12s linear infinite;
  animation: spin 12s linear infinite;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
