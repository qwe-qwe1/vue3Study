<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="increment">改变</button>
  </div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted, ref } from 'vue'
export default {
  setup() {
    const counter = ref(0)

    const increment = () => counter.value++

    onMounted(() => {
      console.log('onMounted')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })

    return {
      counter,
      increment
    }
  }
}
</script>

<style scoped></style>
