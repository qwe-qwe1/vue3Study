<template>
  <div>
    <h2>Hello World</h2>
    <h2>{{ message }}</h2>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: 'hhh'
  }
})
</script>

<style scoped></style>
