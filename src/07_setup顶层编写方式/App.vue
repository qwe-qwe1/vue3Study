<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
    <hello-world />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HelloWrold from './HelloWorld.vue'

const counter = ref(0)
const increment = () => counter.value++
</script>

<style scoped></style>
