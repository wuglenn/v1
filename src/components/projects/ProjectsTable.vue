<script setup>
import { projects } from "./projects"

import MultiTags from "@/components/ui/MultiTags.vue";
</script>

<template>
  <table class="w-full table-fixed mt-10">
    <tr class="text-theme-700 dark:text-violet-50 text-sm h-[30px] align-top">
      <th class="lg:w-[70px] text-start">Year</th>
      <th class="lg:w-[250px] text-start">Project</th>
      <th class="lg:w-[190px] text-start">Made at</th>
      <th class="text-start">Built with</th>
      <th class="lg:w-[250px] text-start">Link</th>
    </tr>
    <tr v-for="(project, index) in projects" :key="index" class="border-t-2 border-theme-950/50 dark:border-theme-700">
      <td class="text-start align-top">
        <p class="mt-2 mb-4">{{ project.startDate.split(" ")[1] }}
        </p>
      </td>
      <td class="text-start align-top font-semibold dark:text-violet-50">
        <p class="mt-2 mb-4">{{ project.titleAlt }}
        </p>
      </td>
      <td class="text-start align-top">
        <p class="mt-2 mb-4">{{ project.madeAt }}
        </p>
      </td>
      <td class="text-start align-top">
        <MultiTags class="mt-2 mb-4" :tags="project.tags" />
      </td>
      <td class="text-start align-top">
        <a :href="project.website" target="_blank">
          <p class="mt-2 mb-4">
            {{ project.websiteAlt }}
          </p>
        </a>
      </td>
    </tr>
  </table>
</template>