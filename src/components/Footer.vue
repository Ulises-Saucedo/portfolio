<script setup>
const props = defineProps({
  isDark: {
    type: Boolean,
  },
});
</script>

<template>
  <section :class="{ 'dark-mode': props.isDark }">
    <footer class="foot">
      <h6 class="info">Ulises Saucedo</h6>
    </footer>
  </section>
</template>

<style scoped>
.dark-mode .info {
  color: #fff;
}
.foot {
  margin-top: 128px;
  width: 100%;
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark-10);
}
.info {
  font-family: "Clash Display Semibold";
  font-size: var(--text-h6);
  color: var(--dark-100);
}
</style>
