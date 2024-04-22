<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <a href="https://vitejs.dev" class="inline-block" target="_blank">
      <img
        src="/vite.svg"
        class="logo hover:drop-shadow-[0_0_32px_#646cffaa]"
        alt="Vite logo"
      />
    </a>
    <a href="https://vuejs.org/" class="inline-block" target="_blank">
      <img
        src="/vue.svg"
        class="logo hover:drop-shadow-[0_0_32px_#42b883aa]"
        alt="Vue logo"
      />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  @apply h-24 p-6 box-content will-change-[filter] transition-[filter] duration-300;
}
</style>
