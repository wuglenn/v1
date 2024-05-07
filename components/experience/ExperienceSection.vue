<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
</script>

<script>

const jobCards = [
  {
    startDate: "Apr 2024",
    endDate: "Jan 2025",
    title1: "Back-end Development Intern",
    title2: "Oracle",
    website: "https://www.oracle.com/",
    description:
      "Address bottlenecks within products and working processes of the Sales Transformation line of business. Work closely with the Sales Engineering and Cloud Engineering teams to identify areas of improvements and fine-tune product featuresets to align with needs of stakeholders.",
    tags: ["OCI", "APEX", "Python"],
  },
  {
    startDate: "Mar 2023",
    endDate: "Apr 2023",
    title1: "Intern",
    title2: "Microtube Technologies",
    website: "https://microtube.tech/",
    description: "",
    tags: ["CAD", "Fusion 360", "Unity", "C#"],
  },
  {
    startDate: "Dec 2021",
    endDate: "Mar 2022",
    title1: "Teaching Assistant",
    title2: "School of Robotics",
    website: "https://www.sor.com.sg/",
    description: "",
    tags: ["Robotics", "EV3"],
  },
];
</script>

<template>
  <div class="block lg:hidden px-2 sm:px-4 text-light-primary dark:text-dark-primary font-semibold text-xl mb-2">
    Experience
  </div>
  <BaseCardSection :cards="jobCards" />
  <ul
    class="px-2 sm:px-4 mt-6 font-semibold text-lg lg:text-xl flex flex-col sm:flex-row gap-4 items-start sm:items-center ms-0">
    <a href="https://linkedin.com/in/glennwuwu" target="_blank">
      <div
        class="text-light-primary dark:text-dark-primary dark:hover:text-dark-primary/80 transition flex justify-center items-center gap-2 py-2">
        <span class="underline underline-offset-4 lg:no-underline">Let's connect!</span>
        <FontAwesomeIcon :icon="faLinkedin" class="" />
      </div>
    </a>
    <!-- TODO: Upload resume file -->
    <a href="" target="_blank">
      <div
        class="text-dark-primary bg-dark-bg hover:bg-dark-bg/90 dark:text-light-primary transition px-4 py-2 dark:bg-light-bg dark:hover:bg-violet-50/80 rounded-full flex justify-center items-center gap-2">
        <span>View Full Resume</span>
        <FontAwesomeIcon :icon="faArrowUpRightFromSquare" class="text-lg lg:text-xl" />
      </div>
    </a>
  </ul>
</template>
