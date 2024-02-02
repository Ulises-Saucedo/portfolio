<script setup>
const emits = defineEmits(["toggle"]);
const props = defineProps({
  isDark: {
    type: Boolean,
  },
});

const toggleTheme = () => {
  emits("toggle");
};
</script>

<template>
  <section class="main-subsection" :class="{ 'dark-mode': props.isDark }">
    <div class="toggle-theme">
      <button @click="toggleTheme">
        <img
          :src="props.isDark ? '/icons/moon.svg' : '/icons/sun.svg'"
          :alt="props.isDark ? 'moon' : 'sun'"
        />
      </button>
    </div>
    <h3 class="main-subtitle">Hey 👋, soy Ulises</h3>
    <h1 class="main-title">Desarrollador trainee</h1>
    <p class="main-description">
      En 2023 me egresé de una escuela secundaria técnica, la cual en las
      prácticas profesionalizantes me dio la posibilidad de desarrollar tanto
      habilidades técnicas como blandas.
    </p>
  </section>
  <section class="subsection-buttons">
    <a href="https://github.com/Ulises-Saucedo/" target="_blank">
      Github
      <img src="/icons/github.svg" alt="github" />
    </a>
    <a href="https://www.linkedin.com/in/ulises-saucedo/" target="_blank"
      >LinkedIn
      <img src="/icons/linkedin.svg" alt="github" />
    </a>
    <a href="mailto:ulisesaucedo.se04@gmail.com" target="_blank"
      >ulisesaucedo.se04@gmail.com
      <img src="/icons/gmail.svg" alt="github" />
    </a>
  </section>
</template>

<style scoped>
.dark-mode .main-title,
.dark-mode .main-subtitle,
.dark-mode .main-description {
  color: #fff;
}
.toggle-theme {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.toggle-theme button {
  border: none;
  background: transparent;
  cursor: pointer;
}
.main-subsection {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.subsection-buttons {
  display: flex;
  gap: 24px;
}
.main-title {
  font-family: "Clash Display Semibold";
  font-size: var(--text-h1);
  color: var(--dark-100);
}
.main-subtitle {
  display: flex;
  font-family: "Clash Display Light";
  font-size: var(--text-h3);
  color: var(--dark-100);
}
.main-description {
  font-family: "Satoshi Regular";
  font-size: var(--text-base);
  color: var(--dark-100);
}
.subsection-buttons a {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px;
  background: var(--primary-gradient);
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Clash Display Semibold";
  font-size: var(--text-h6);
  text-decoration: none;
}
@media screen and (max-width: 1200px) {
  .main-subtitle {
    font-size: var(--text-h4);
  }
  .main-title {
    font-size: var(--text-h3);
  }
  .subsection-buttons {
    gap: 8px;
  }
  .subsection-buttons a {
    gap: 8px;
    padding: 8px;
    font-size: var(--text-base);
  }
}
@media screen and (max-width: 800px) {
  .main-subtitle {
    font-size: var(--text-h5);
  }
  .main-title {
    font-size: var(--text-h4);
  }
  .subsection-buttons {
    gap: 8px;
  }
  .subsection-buttons a {
    gap: 8px;
    padding: 8px;
    font-size: var(--text-base);
  }
  .subsection-buttons a img {
    width: 20px;
    height: 20px;
  }
}
@media screen and (max-width: 600px) {
  .subsection-buttons {
    flex-wrap: wrap;
  }
  .subsection-buttons a {
    font-size: var(--text-small);
  }
  .subsection-buttons a img {
    width: 15px;
    height: 15px;
  }
}
</style>
