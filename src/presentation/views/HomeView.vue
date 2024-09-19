<script setup lang="ts">
import HelloWorld from '../components/home/HelloWorld.vue'
</script>

<template>
  <main>
    <HelloWorld>
      <template #greeting>Hi there</template>
    </HelloWorld>
  </main>
</template>
