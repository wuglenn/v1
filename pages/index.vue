<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const scrollToSection = (section) => {
  const sectionElement = document.querySelector(`#${section}`);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <main class="relative overflow-y-visible overflow-x-clip">
    <div id="content">
      <div class="relative flex items-center justify-center">
        <div
          class="lg:w-[800px] xl:w-[1150px] flex flex-col lg:flex-row lg:items-start items-center justify-center min-h-screen">
          <div class="w-full lg:w-1/2 lg:sticky top-0 lg:h-screen lg:min-w-[400px]">
            <div
              class="mt-10 lg:mt-[100px] relative text-light-primary dark:text-dark-primary lg:px-0 max-w-[600px] lg:max-w-full px-6 sm:px-8">
              <PersonalSection />
              <NavBar class="hidden lg:block text-base tracking-wide mt-10" @scroll-to-section="scrollToSection" />
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
              <ExperienceSection />
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
              <div class="block lg:hidden text-2xl mb-2">
                <SocialLinks justify="start" />
              </div>
              <div>
                Built from scratch with
                <span
                  class="text-light-primary hover:text-light-secondary dark:text-dark-primary dark:hover:text-dark-highlight">
                  <a href="https://nuxt.com/" target="_blank">Nuxt.js</a>
                </span>
                and
                <span
                  class="text-light-primary hover:text-light-secondary dark:text-dark-primary dark:hover:text-dark-highlight">
                  <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a> </span>, deployed with
                <span
                  class="text-light-primary hover:text-light-secondary dark:text-dark-primary dark:hover:text-dark-highlight">
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
    <Title>Glenn Wu</Title>
    <Meta name="description" content="Glenn Wu's personal site and portfolio" />
    <StateScroll />
  </main>
</template>