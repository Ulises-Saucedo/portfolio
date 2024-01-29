<script setup>
import { useDark, useToggle } from "@vueuse/core";
import Presentation from "./components/Presentation.vue";
import Proyectos from "./components/Proyectos.vue";
import AboutMe from "./components/AboutMe.vue";
import Footer from "./components/Footer.vue";

const isDark = useDark({
  selector: "body",
  attribute: "color-scheme",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <section class="main-section">
    <Presentation @toggle="toggleDark" :isDark="isDark" />
    <Proyectos :isDark="isDark" />
    <AboutMe :isDark="isDark" />
  </section>
  <Footer :isDark="isDark" />
</template>

<style>
[color-scheme="dark"] {
  background: #242424;
}
[color-scheme="light"] {
  background: #ccd5ae;
}
.main-section {
  margin: 256px auto;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 32px;
  max-width: 900px;
}
@media screen and (max-width: 1400px) {
  .main-section {
    margin: 96px auto;
    max-width: 800px;
  }
}
</style>
