<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { projects } from "./projects"

</script>

<template>
  <table class="w-full table-fixed">
    <tr class="text-theme-700 dark:text-violet-50 text-sm h-[30px] align-top">
      <th class="w-[60px] text-start">Year</th>
      <th class="lg:w-[190px] xl:w-[250px] text-start">Project</th>
      <th class="hidden lg:table-cell lg:w-[150px] xl:w-[190px] text-start">Made at</th>
      <th class="hidden lg:table-cell text-start">Built with</th>
      <th class="hidden md:table-cell md:w-[250px] lg:w-[200px] xl:w-[250px] text-start">Link</th>
    </tr>
    <tr v-for="(project, index) in projects" :key="index" class="border-t-2 border-theme-950/50 dark:border-theme-700">
      <td class="text-start align-top">
        <p class="mt-2 mb-4 me-2">{{ project.startDate.split(" ")[1] }}
        </p>
      </td>
      <td class="text-start align-top font-semibold dark:text-violet-50">
        <p class="hidden md:block mt-2 mb-4 me-2">{{ project.titleAlt }} </p>
        <a :href="project.website" target="_blank"
          class="block md:hidden mt-2 mb-4 me-2 hover:text-violet-800 dark:hover:text-violet-300 transition duration-100">
          <p>
            {{ project.titleAlt }}
            <span>
              <FontAwesomeIcon v-if="project.websiteAlt == 'Github'" :icon="faGithub" />
              <FontAwesomeIcon v-else :icon="faLink" />
            </span>
          </p>
        </a>
      </td>
      <td class="hidden lg:table-cell text-start align-top">
        <p class="mt-2 mb-4 me-2">{{ project.madeAt }}
        </p>
      </td>
      <td class="hidden lg:table-cell text-start align-top">
        <UiMultiTags class="mt-2 mb-4 me-2" :tags="project.tags" />
      </td>
      <td class="hidden md:table-cell text-start align-top">
        <a :href="project.website" target="_blank">
          <p class="mt-2 mb-4 me-2 hover:text-violet-800 dark:hover:text-violet-50 transition duration-100">
            {{ project.websiteAlt }}
            <span>
              <FontAwesomeIcon v-if="project.websiteAlt == 'Github'" :icon="faGithub" />
              <FontAwesomeIcon v-else :icon="faLink" />
            </span>
          </p>
        </a>
      </td>
    </tr>
  </table>
</template>