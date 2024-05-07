<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const showChatBox = ref(false);
const chatStarted = ref(false);
</script>

<template>
  <div class="fixed bottom-0 right-0">
    <div v-if="!showChatBox"
      class="absolute bottom-[25px] md:bottom-[40px] right-[25px] md:right-[40px] md:max-h-16 md:h-16 md:max-w-16 md:w-16 max-h-12 h-12 max-w-12 w-12 aspect-square"
      @click="showChatBox = true; chatStarted = true">
      <div class="rounded-full overflow-hidden mt-1 border-2 border-violet-50 ring-2 ring-dark-bg/50">
        <NuxtImg format="webp" src="/portrait.png" height="64" width="64" />
      </div>
    </div>
    <div class="absolute bottom-[25px] md:bottom-[40px] right-[25px] md:right-[40px] transition-transform duration-500"
      :class="{ 'ease-out translate-x-0': showChatBox, 'ease-in translate-y-[150%]': !showChatBox }">
      <div
        class="relative h-[500px] md:h-[700px] aspect-3/5 rounded-2xl bg-violet-50/80 dark:bg-violet-50/20 overflow-hidden transition duration-300"
        :class="{ 'blur-0 opacity-100': showChatBox, 'blur-sm opacity-0': !showChatBox }">
        <div class="absolute w-full bg-violet-300 dark:bg-theme-700 p-4 text-light-primary dark:text-dark-primary">
          <div class="flex flex-row items-center justify-start gap-2">
            <div
              class="rounded-full overflow-hidden md:max-w-16 md:max-h-16 max-w-12 max-h-12 aspect-square mt-1 border-2 border-violet-50 ring-2 ring-dark-bg/50">
              <NuxtImg format="webp" src="/portrait.png" height="64" width="64" />
            </div>
            <div>
              <div class="text-xl font-semibold">Glenn Bot</div>
              <div class="font-normal">Ask me a question</div>
            </div>
          </div>
          <div class="absolute top-0 right-5 h-full flex flex-col items-center justify-center">
            <div
              class="max-w-12 max-h-12 aspect-square hover:bg-white/50 p-2 rounded-full flex items-center justify-center transition duration-100"
              @click="showChatBox = false">
              <FontAwesomeIcon :icon="faXmark" class="text-lg" />
            </div>
          </div>
        </div>
        <ChatWindow v-if="chatStarted" />
      </div>
    </div>
  </div>
</template>
