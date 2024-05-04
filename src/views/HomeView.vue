<script setup>
import PersonalSection from "@/components/PersonalSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import JobSection from "@/components/experience/JobSection.vue";
import EducationSection from "@/components/education/EducationSection.vue";
import ProjectsSection from "@/components/projects/ProjectsSection.vue";

import SpotifyStatus from "@/components/spotify/SpotifyStatus.vue";

import SocialLinks from "@/components/SocialLinks.vue";
import NavBar from "@/components/nav/NavBar.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

import ScrollState from "@/components/state/ScrollState.vue"

const scrollToSection = (section) => {
  const sectionElement = document.querySelector(`#${section}`);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: "smooth" });
  }
};

</script>

<template>
  <main class="relative overflow-y-visible overflow-x-clip font-sofia">
    <div class="text-theme-950 dark:text-theme-500" id="content">
      <div class="relative flex items-center justify-center">
        <div
          class="lg:w-[800px] xl:w-[1150px] flex flex-col lg:flex-row lg:items-start items-center justify-center min-h-screen">
          <div class="w-full lg:w-1/2 lg:sticky top-0 lg:h-screen lg:min-w-[400px]">
            <div
              class="mt-10 lg:mt-[100px] relative dark:text-purple-50 lg:px-0 max-w-[600px] lg:max-w-full px-6 sm:px-8">
              <PersonalSection />
              <NavBar class="hidden lg:block text-base tracking-wide mt-10" @scroll-to-section="scrollToSection" />
              <div class="block lg:hidden text-4xl mt-6">
                <SocialLinks justify="start" />
              </div>
            </div>

            <div class="bottom-[80px] hidden lg:block absolute text-2xl w-1/2">
              <SocialLinks justify="start" />
            </div>

            <div class="bottom-[50px] hidden lg:block absolute">
              <div class="flex gap-1 items-center">
                <FontAwesomeIcon :icon="faCopyright" />Glenn Wu 2024. All rights reserved.
              </div>
            </div>
          </div>

          <div
            class="w-full mt-10 lg:mt-[100px] lg:w-1/2 px-4 lg:px-0 max-w-[600px] min-w-[400px] lg:min-w-[500px] lg:max-w-full"
            id="scrollPage">
            <div id="about" class="text-base sm:text-lg">
              <AboutSection @scroll-to-section="scrollToSection" class="px-2 sm:px-4" />
            </div>
            <div id="experience" class="mt-6 sm:mt-16 lg:mt-32 text-lg">
              <JobSection />
            </div>
            <div id="education" class="mt-10 sm:mt-20 lg:mt-28 text-lg">
              <EducationSection />
            </div>
            <div id="projects" class="mt-10 sm:mt-20 lg:mt-28 text-lg">
              <ProjectsSection />
            </div>
            <div class="px-2">
              <div class="relative h-[400px] w-full mt-10 sm:mt-20 lg:mt-28">
                <div class="absolute w-full">
                  <SpotifyStatus />
                </div>
              </div>
            </div>

            <footer class="mt-10 lg:mt-28 mb-[50px] px-4">
              <div>
                Built from scratch with
                <span class="text-theme-700 hover:text-theme-500 dark:text-violet-50 dark:hover:text-violet-300">
                  <a href="https://vuejs.org/" target="_blank">Vue.js</a>
                </span>
                and
                <span class="text-theme-700 hover:text-theme-500 dark:text-violet-50 dark:hover:text-violet-300">
                  <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a> </span>, deployed with
                <span class="text-theme-700 hover:text-theme-500 dark:text-violet-50 dark:hover:text-violet-300">
                  <a href="https://vercel.com/" target="_blank">Vercel</a> </span>.
              </div>
              <div class="flex gap-1 items-center mt-2 lg:hidden">
                <FontAwesomeIcon :icon="faCopyright" />Glenn Wu 2024. All rights reserved.
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
    <ScrollState />
  </main>
</template>
