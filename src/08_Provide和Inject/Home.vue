<template>
  <div>{{ name }} - {{ counter }}</div>
  <button @click="increment">home +1</button>
</template>

<script>
import { inject } from 'vue'
export default {
  setup() {
    const name = inject('name')
    const counter = inject('counter')

    const increment = () => counter.value++

    return {
      name,
      counter,
      increment
    }
  }
}
</script>

<style scoped></style>
