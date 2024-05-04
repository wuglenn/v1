<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const emit = defineEmits(["scrollToSection"]);

const currentSection = ref(null);

const onClick = (section) => {
  emit("scrollToSection", section);
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
  <menu>
    <!-- <NavLink text="About" class="" :isClicked="currentSection === 'about'" @click="onClick('about')" /> -->
    <NavLink text="Experience" :isClicked="currentSection === 'experience'" @click="onClick('experience')" />
    <NavLink text="Education" :isClicked="currentSection === 'education'" @click="onClick('education')" />
    <NavLink text="Projects" :isClicked="currentSection === 'projects'" @click="onClick('projects')" />
  </menu>
</template>
