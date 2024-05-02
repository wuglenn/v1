<script setup>
import PersonalSection from "@/components/PersonalSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import JobSection from "@/components/experience/JobSection.vue";
import EducationSection from "@/components/education/EducationSection.vue";
import ProjectsSection from "@/components/projects/ProjectsSection.vue";

import SpotifyStatus from "@/components/spotify/SpotifyStatus.vue";
import MouseCircle from "@/components/ui/MouseCircle.vue";

import SocialLinks from "@/components/SocialLinks.vue";
import NavLink from "@/components/ui/NavLink.vue";
import { onMounted, onUnmounted, ref } from "vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const currentSection = ref(null);

const onClick = (section) => {
  scrollToSection(section);
};

const scrollToSection = (section) => {
  const sectionElement = document.querySelector(`#${section}`);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: "smooth" });
  }
};

const updateCurrentSection = () => {
  const sections = ["about", "experience", "education", "projects"];
  const scrollPosition = window.scrollY;

  for (const section of sections) {
    const sectionElement = document.querySelector(`#${section}`);
    if (sectionElement) {
      const sectionTop = sectionElement.offsetTop;
      const sectionHeight = sectionElement.offsetHeight;

      if (scrollPosition >= sectionTop - 400 && scrollPosition < sectionTop + sectionHeight) {
        currentSection.value = section;
        break;
      }
    }
  }
};

onMounted(() => {
  updateCurrentSection();
  document.addEventListener("scroll", updateCurrentSection);
});

onUnmounted(() => {
  document.removeEventListener("scroll", updateCurrentSection);
});
</script>

<template>
  <main class="relative overflow-y-visible overflow-x-clip font-sofia">
    <div class="text-theme-950 dark:text-theme-500" id="content">
      <div class="relative flex items-center justify-center">
        <div
          class="lg:w-[800px] xl:w-[1150px] flex flex-col lg:flex-row lg:items-start items-center justify-center min-h-screen"
        >
          <div class="w-full lg:w-1/2 lg:sticky top-0 lg:h-screen lg:min-w-[400px]">
            <div
              class="mt-10 lg:mt-[100px] relative dark:text-purple-50 lg:px-0 max-w-[600px] lg:max-w-full px-6 sm:px-8"
            >
              <PersonalSection />
              <menu class="hidden lg:block text-base tracking-wide mt-10">
                <!-- <NavLink text="About" class="" :isClicked="currentSection === 'about'" @click="onClick('about')" /> -->
                <NavLink
                  text="Experience"
                  :isClicked="currentSection === 'experience'"
                  @click="onClick('experience')"
                />
                <NavLink
                  text="Education"
                  :isClicked="currentSection === 'education'"
                  @click="onClick('education')"
                />
                <NavLink
                  text="Projects"
                  :isClicked="currentSection === 'projects'"
                  @click="onClick('projects')"
                />
              </menu>
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
            id="scrollPage"
          >
            <div id="about" class="text-base sm:text-lg">
              <AboutSection class="px-2 sm:px-4" />
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
                <span
                  class="text-theme-700 hover:text-theme-500 dark:text-violet-50 dark:hover:text-violet-300"
                >
                  <a href="https://vuejs.org/" target="_blank">Vue.js</a>
                </span>
                and
                <span
                  class="text-theme-700 hover:text-theme-500 dark:text-violet-50 dark:hover:text-violet-300"
                >
                  <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a> </span
                >, deployed with
                <span
                  class="text-theme-700 hover:text-theme-500 dark:text-violet-50 dark:hover:text-violet-300"
                >
                  <a href="https://vercel.com/" target="_blank">Vercel</a> </span
                >.
              </div>
              <div class="flex gap-1 items-center mt-2 lg:hidden">
                <FontAwesomeIcon :icon="faCopyright" />Glenn Wu 2024. All rights reserved.
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
    <MouseCircle />
  </main>
</template>
