<script setup>
import { inject } from "vue";

const props = defineProps({
  socialMedia: {
    type: Object,
  },
});

const { name, href, src } = props.socialMedia;
const isDark = inject("isDark");
</script>

<template>
  <a
    :href="href"
    target="_blank"
    class="flex gap-2 py-1 px-6 border-[1px] border-solid border-primary-hover text-[18px] text-primary-hover rounded-2xl items-center ease-in-out duration-300"
    :class="{
      'hover:bg-[#E7FDF9]': !isDark,
      'hover:bg-[#065042]': isDark,
    }"
  >
    {{ name }}
    <img :src="src" :alt="name" />
  </a>
</template>
