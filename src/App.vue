<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="flex justify-between px-3 py-5">
      <p class="text-xl">Vuejs template</p>
    </div>
    <div class="h-[1px] bg-gray-400" />
  </header>

  <div class="px-3">
    <RouterView />
  </div>
</template>

<style scoped></style>
