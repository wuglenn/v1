<script setup>
const emit = defineEmits(["scrollToSection"]);
</script>

<template>
  <div class="text-base sm:text-lg">
    <p>
      When I was a little kid I was really curious how technology worked. I would spend hours
      <span class="text-theme-700 dark:text-violet-50">tinkering</span>
      with toys and other household gadgets trying to understand their inner workings. This drive
      has never faltered and I've gained a passion for software development and
      <span
        class="text-theme-700 hover:text-theme-500 dark:text-violet-50 dark:hover:text-violet-300 transition cursor-pointer"
        @click="emit('scrollToSection', 'projects')"
        >deep learning</span
      >, they're my new cooler toys.
    </p>
    <p class="mt-3">
      Currently, I'm in my final year of
      <span
        class="text-theme-700 hover:text-theme-500 dark:text-violet-50 dark:hover:text-violet-300 transition cursor-pointer"
        @click="emit('scrollToSection', 'education')"
        >Polytechnic</span
      >
      studies doing an internship with
      <span
        class="text-theme-700 hover:text-theme-500 dark:text-violet-50 dark:hover:text-violet-300 transition cursor-pointer"
        @click="emit('scrollToSection', 'experience')"
        >Oracle</span
      >, creating internal tools and processes to address the pain-points within the local team.
      Outside of work and studies, I'm a proud member of the
      <span
        class="text-theme-700 hover:text-theme-500 dark:text-violet-50 dark:hover:text-violet-300 transition cursor-pointer"
      >
        <a href="https://instagram.com/sp.riteclub" target="_blank"> robotics club </a></span
      >
      where we work to create robots that compete at the international level.
    </p>
  </div>
</template>
