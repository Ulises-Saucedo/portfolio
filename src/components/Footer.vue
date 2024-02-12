<script setup>
import { inject } from "vue";

const isDark = inject("isDark");
</script>

<template>
  <section>
    <footer class="w-full h-[75px]">
      <h6
        class="font-clashDisplayMedium text-h3 text-[#2F3037] text-center mt-32 flex items-center justify-center w-full h-full"
        :class="{ 'text-[#fff]': isDark }"
      >
        Ulises Saucedo
      </h6>
    </footer>
  </section>
</template>
