<script setup>
const educationCards = [
  {
    startDate: "Apr 2022",
    endDate: "Apr 2025",
    title1: "Applied AI & Analytics",
    title2: "Singapore Polytechnic",
    description: "cGPA: 3.86",
    tags: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "Flask",
      "GitLab",
      "CI/CD",
      "SQL",
      "Tableau",
      "JavaScript",
      "Node.js",
      "HTML",
      "CSS",
    ],
  },
  {
    startDate: "Jan 2018",
    endDate: "Dec 2021",
    title1: "'O' Levels",
    title2: "Fuhua Secondary School",
    // description: "L1R5: 7 (net)",
    // skills: ["CAD", "Fusion 360", "Unity", "C#"]
  },
];
</script>

<template>
  <div class="block lg:hidden px-2 sm:px-4 text-light-primary dark:text-dark-primary font-semibold text-xl mb-2">
    Education</div>
  <BaseCardSection :cards="educationCards" />
</template>
