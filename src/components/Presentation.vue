<script setup>
import { inject } from "vue";
import SocialMedia from "./SocialMedia.vue";

const socialMedia = [
  {
    name: "Github",
    src: "/icons/github.svg",
    href: "https://github.com/Ulises-Saucedo/",
  },
  {
    name: "LinkedIn",
    src: "/icons/linkedin.svg",
    href: "https://www.linkedin.com/in/ulises-saucedo/",
  },
  {
    name: "Gmail",
    src: "/icons/gmail.svg",
    href: "mailto:ulisesaucedo.se04@gmail.com",
  },
];

const isDark = inject("isDark");
const emits = defineEmits(["toggleTheme"]);

const toggleTheme = () => {
  emits("toggleTheme");
};
</script>

<template>
  <section class="mx-auto my-24 max-w-[800px] p-4">
    <div class="py-1 flex w-full justify-end">
      <button @click="toggleTheme">
        <img
          :src="isDark ? './moon.svg' : './sun.svg'"
          :alt="isDark ? './moon.svg' : './sun.svg'"
        />
      </button>
    </div>
    <h3
      class="font-clashDisplayLight text-h3 text-[#2F3037]"
      :class="{ 'text-[#fff]': isDark }"
    >
      Hey 👋, soy
    </h3>
    <h1
      class="font-clashDisplaySemibold text-[48px] text-[#2F3037]"
      :class="{ 'text-[#fff]': isDark }"
    >
      Ulises Saucedo
    </h1>
    <p
      class="font-authorRegular text-[18px] text-[#2F3037]"
      :class="{ 'text-[#fff]': isDark }"
    >
      Comencé mi viaje en la programación a los 15 años, inmerso en una
      tecnicatura que ha sido fundamental en mi formación. Enfrenté diversos
      desafíos que contribuyeron al desarrollo de mis habilidades y
      conocimientos.
    </p>
    <section class="flex flex-wrap justify-start gap-4 my-4 font-authorRegular">
      <SocialMedia v-for="media in socialMedia" :socialMedia="media" />
    </section>
  </section>
</template>
