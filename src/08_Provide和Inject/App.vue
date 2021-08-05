<template>
  <div>
    {{ counter }}
    <button @click="appIncrement">App +1</button>
    <home />
  </div>
</template>

<script>
import { provide, ref, readonly } from 'vue'
import Home from './Home.vue'
export default {
  components: {
    Home
  },
  setup() {
    const name = 'coderwhy'
    let counter = ref(100)

    const appIncrement = () => counter.value++

    provide('name', name)
    provide('counter', readonly(counter))

    return {
      counter,
      appIncrement
    }
  }
}
</script>

<style scoped></style>
