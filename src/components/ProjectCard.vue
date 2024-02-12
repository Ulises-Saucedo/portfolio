<script setup>
import { inject } from "vue";
const props = defineProps({
  project: {
    type: Object,
  },
});

const { title, description, technologies, links, image } = props.project;
const isDark = inject("isDark");
</script>

<template>
  <div class="overflow-hidden">
    <img :src="image" :alt="title" class="rounded-xl" />
    <div>
      <div>
        <h3
          class="py-1 font-clashDisplayMedium text-h3 text-[#2F3037]"
          :class="{ 'text-[#fff]': isDark }"
        >
          {{ title }}
        </h3>
        <p
          class="py-1 font-author text-[18px] text-[#2F3037]"
          :class="{ 'text-[#fff]': isDark }"
        >
          {{ description }}
        </p>
        <div class="py-1 flex flex-wrap gap-2">
          <img
            :src="image.src"
            :alt="image.alt"
            v-for="image in technologies"
            class="py-2 px-4 rounded-md"
            :class="{
              'bg-[#E7FDF9]': !isDark,
              'bg-[#065042]': isDark,
            }"
          />
        </div>
      </div>
      <div class="my-3 flex gap-2">
        <a
          :href="link.href"
          v-for="link in links"
          :style="{ width: `${100 / links.length}%` }"
          class="flex justify-center ease-in-out duration-300 border-[1px] border-solid border-primary-hover text-[18px] text-primary-hover py-1 rounded-2xl"
          :class="{
            'hover:bg-[#E7FDF9]': !isDark,
            'hover:bg-[#065042]': isDark,
          }"
        >
          {{ link.title }}
        </a>
      </div>
    </div>
  </div>
</template>
