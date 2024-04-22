<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1 class="text-5xl font-bold my-8">{{ msg }}</h1>

  <div class="p-8">
    <button
      class="rounded-lg border border-solid border-transparent py-2.5 px-5 text-sm font-500 cursor-pointer transition-colors duration-300 hover:border-[#646cff] bg-slate-50 font-mono"
      @click="count++"
    >
      count is {{ count }}
    </button>
    <p class="my-4">
      Edit <code class="text-sm">components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p class="my-4">
    Check out
    <a
      class="text-[#646cff] hover:text-[#535bf2] font-500 decoration-inherit"
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank"
    >
      create-vue
    </a>
    , the official Vue + Vite starter
  </p>
  <p class="my-4">
    Install
    <a
      class="text-[#646cff] hover:text-[#535bf2] font-500 decoration-inherit"
      href="https://github.com/vuejs/language-tools"
      target="_blank"
    >
      Volar
    </a>
    in your IDE for a better DX
  </p>
  <p class="text-gray-500 my-4">
    Click on the Vite and Vue logos to learn more
  </p>
</template>
