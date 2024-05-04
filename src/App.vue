<script setup>
import { RouterView } from "vue-router";
import { SpeedInsights } from "@vercel/speed-insights/vue";
import MouseCircle from "@/components/ui/MouseCircle.vue";
// import ConstructionBanner from "@/components/general/ConstructionBanner.vue"
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

// import "./css/main.css";
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>
  <!-- <ConstructionBanner /> -->
  <SpeedInsights />

  <RouterView />
  <MouseCircle />
</template>

<style scoped></style>
