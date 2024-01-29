<script setup>
import { ref, onMounted } from "vue";
import ProjectCard from "./ProjectCard.vue";

const props = defineProps({
  isDark: {
    type: Boolean,
  },
});
const projects = ref([]);

onMounted(async () => {
  const response = await fetch("./projects.json");
  const json = await response.json();
  projects.value = json;
});
</script>

<template>
  <section class="projects-section" :class="{ 'dark-mode': props.isDark }">
    <h2 class="projects-title">Proyectos</h2>
    <ProjectCard
      v-for="project in projects"
      :image="project.image"
      :title="project.title"
      :description="project.description"
      :images="project.images"
      :links="project.links"
      :isDark="props.isDark"
    />
  </section>
</template>

<style scoped>
.dark-mode .projects-title {
  color: #fff;
}
.projects-section {
  margin-top: 256px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.projects-title {
  font-family: "Clash Display Semibold";
  font-size: var(--text-h2);
  color: var(--dark-100);
}
@media screen and (max-width: 1200px) {
  .projects-section {
    margin-top: 128px;
    gap: 32px;
  }
  .projects-title {
    font-size: var(--text-h4);
    text-align: center;
  }
}
@media screen and (max-width: 800px) {
  .projects-section {
    margin-top: 96px;
    gap: 24px;
  }
}
</style>
