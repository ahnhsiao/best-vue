<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1 class="my-8 text-5xl font-bold">{{ msg }}</h1>

  <div class="p-8">
    <button
      class="font-500 cursor-pointer rounded-lg border border-solid border-transparent bg-slate-50 px-5 py-2.5 font-mono text-sm transition-colors duration-300 hover:border-[#646cff]"
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
      class="font-500 text-[#646cff] decoration-inherit hover:text-[#535bf2]"
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
      class="font-500 text-[#646cff] decoration-inherit hover:text-[#535bf2]"
      href="https://github.com/vuejs/language-tools"
      target="_blank"
    >
      Volar
    </a>
    in your IDE for a better DX
  </p>
  <p class="my-4 text-gray-500">
    Click on the Vite and Vue logos to learn more
  </p>
</template>
