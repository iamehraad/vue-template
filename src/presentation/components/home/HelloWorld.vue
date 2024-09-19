<template>
  <div>
    <slot name="greeting" />
    <p>{{ count }}</p>
    <button
      class="p-3 rounded-md border border-blue-500 bg-blue-500 hover:bg-blue-600 text-white"
      @click="increment"
    >
      Increment
    </button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/domain/stores/counter'

defineProps<{
  message?: string
}>()

// Pinia
const store = useCounterStore()
const { count } = storeToRefs(store)
const { increment } = store
</script>

<style scoped></style>
