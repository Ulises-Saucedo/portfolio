<script setup>
import { inject } from "vue";

const isDark = inject("isDark");
</script>

<template>
  <section class="flex flex-col gap-8 max-w-[1000px] p-8 mx-auto">
    <h2
      class="font-clashDisplayMedium text-h3 text-[#2F3037] text-center mt-32"
      :class="{ 'text-[#fff]': isDark }"
    >
      Sobre mí
    </h2>
    <p
      class="font-authorRegular text-[18px] text-balance text-pretty text-[#2F3037]"
      :class="{ 'text-[#fff]': isDark }"
    >
      Mi nombre completo es Ulises Saucedo. Empecé en la programación a los 15
      años cuando decidí sumergirme en la tecnicatura que ha marcado mi
      formación. A lo largo del trayecto he enfrentado diversos retos que han
      contribuido a la forja de mis habilidades y conocimientos.
    </p>
    <p
      class="font-authorRegular text-[18px] text-balance text-pretty text-[#2F3037]"
      :class="{ 'text-[#fff]': isDark }"
    >
      Mi graduación en 2023 a los 19 años fue el resultado del compromiso con mi
      desarrollo profesional, especialmente durante el último año de la
      tecnicatura, donde las prácticas profesionalizantes se convirtieron en el
      terreno de prueba para mis capacidades. Durante este periodo, no solo
      consolidé mis conocimientos, sino que también tuve la oportunidad de
      aplicarlos en situaciones del mundo real.
    </p>
    <p
      class="font-authorRegular text-[18px] text-balance text-pretty text-[#2F3037]"
      :class="{ 'text-[#fff]': isDark }"
    >
      En mi caja de herramientas, destacan HTML, CSS, JS, VUE y bases de datos
      tanto SQL como no SQL. Aunque me siento cómodo con estas tecnologías, no
      estoy vinculado a un único framework o tecnología.
    </p>
  </section>
</template>
