<script setup>
const props = defineProps({
  isDark: {
    type: Boolean,
  },
});
</script>

<template>
  <section class="about-container" :class="{ 'dark-mode': props.isDark }">
    <h2 class="about-title">Sobre mí</h2>
    <p>
      Mi nombre completo es Ulises Saucedo. Empecé en la programación a los 15
      años cuando decidí sumergirme en la tecnicatura que ha marcado mi
      formación. A lo largo del trayecto he enfrentado diversos retos que han
      contribuido a la forja de mis habilidades y conocimientos.
    </p>
    <p>
      Mi graduación en 2023 a los 19 años fue el resultado del compromiso con mi
      desarrollo profesional, especialmente durante el último año de la
      tecnicatura, donde las prácticas profesionalizantes se convirtieron en el
      terreno de prueba para mis capacidades. Durante este periodo, no solo
      consolidé mis conocimientos, sino que también tuve la oportunidad de
      aplicarlos en situaciones del mundo real.
    </p>
    <p>
      En mi caja de herramientas, destacan HTML, CSS, JS, VUE y bases de datos
      tanto SQL como no SQL. Aunque me siento cómodo con estas tecnologías, no
      estoy vinculado a un único framework o tecnología.
    </p>
  </section>
</template>

<style scoped>
.dark-mode h2,
.dark-mode p {
  color: #fff;
}
.about-container {
  margin-top: 128px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.about-title {
  font-family: "Clash Display Semibold";
  font-size: var(--text-h2);
  color: var(--dark-100);
}
p {
  font-family: "Satoshi Regular";
  font-size: var(--text-base);
  color: var(--dark-100);
}
@media screen and (max-width: 1200px) {
  .about-title {
    text-align: center;
  }
}
</style>
