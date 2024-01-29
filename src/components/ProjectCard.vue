<script setup>
const props = defineProps({
  image: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  images: {
    type: Array,
  },
  links: {
    type: Array,
  },
  isDark: {
    type: Boolean,
  },
});
</script>

<template>
  <div class="card-container" :class="{ 'dark-mode': props.isDark }">
    <img :src="props.image" :alt="props.title" class="preview" />
    <div class="card-content">
      <div class="card-header">
        <h3 class="card-title">{{ props.title }}</h3>
        <p class="card-description">{{ props.description }}</p>
        <div class="tecnologies-container">
          <img
            :src="image.src"
            :alt="image.alt"
            v-for="image in props.images"
            class="card-technologies"
          />
        </div>
      </div>
      <div class="card-footer">
        <a
          :href="link.href"
          v-for="link in props.links"
          :style="{ width: `${100 / props.links.length}%` }"
        >
          {{ link.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dark-mode .card-title,
.dark-mode .card-description {
  color: #fff;
}
.dark-mode .card-technologies {
  background: var(--dark-50);
}
.card-container {
  display: flex;
  gap: 32px;
}
.preview {
  max-width: 500px;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
}
.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-header {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.card-title {
  color: var(--dark-100);
  font-size: var(--text-h4);
  font-family: "Clash Display Semibold";
}
.card-description {
  color: var(--dark-100);
  font-size: var(--text-base);
  font-family: "Satoshi Regular";
}
.card-footer {
  display: flex;
  width: 100%;
  gap: 10px;
}
.tecnologies-container {
  display: flex;
  gap: 8px;
}
.card-technologies {
  padding: 8px;
  border-radius: 4px;
  background: var(--dark-10);
  width: 40px;
  height: 40px;
}
.card-footer a {
  color: #fff;
  font-size: var(--text-h6);
  font-family: "Clash Display Semibold";
  text-decoration: none;
  padding: 8px 16px;
  background: var(--primary-gradient);
  width: min-content;
  text-align: center;
  border-radius: 10px;
}
@media screen and (max-width: 1400px) {
  .preview {
    max-width: 400px;
    border-radius: 8px;
  }
  .card-container {
    gap: 16px;
  }
  .card-header {
    gap: 8px;
  }
  .card-title {
    font-size: var(--text-h5);
  }
  .card-footer a {
    font-size: var(--text-base);
  }
}
@media screen and (max-width: 800px) {
  .card-container {
    display: grid;
    max-width: 500px;
    grid-template-columns: minmax(150px, 1fr);
    margin: 0 auto;
  }
  .preview {
    max-width: 100%;
    object-fit: cover;
    display: block;
  }
  .card-content {
    gap: 16px;
  }
  .card-footer a {
    font-size: var(--text-small);
  }
  .card-technologies {
    width: 35px;
    height: 35px;
  }
}
</style>
