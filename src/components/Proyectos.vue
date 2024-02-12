<script setup>
import { inject } from "vue";
import { projects } from "../utils/projects";
import ProjectCard from "./ProjectCard.vue";

const isDark = inject("isDark");
</script>

<template>
  <section>
    <h2
      class="text-center mt-60 mb-8 font-clashDisplayMedium text-h2 text-[#2F3037]"
      :class="{ 'text-[#fff]': isDark }"
    >
      Proyectos
    </h2>
    <div
      class="grid grid-cols-1 lg:grid-cols-3 max-w-[600px] mx-auto lg:max-w-full gap-8 p-8"
    >
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </section>
</template>
