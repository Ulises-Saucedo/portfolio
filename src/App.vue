<script setup>
import { provide } from "vue";
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

provide("isDark", isDark);
</script>

<template>
  <Presentation @toggleTheme="toggleDark" />
  <Proyectos />
  <AboutMe />
  <Footer />
</template>

<style>
[color-scheme="dark"] {
  background: #242424;
}
[color-scheme="light"] {
  background: #fff;
}
</style>
