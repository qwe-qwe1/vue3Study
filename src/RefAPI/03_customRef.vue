<template>
  <div>
    <input v-model="message" />
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import { ref } from 'vue'
import debounceRef from './hook/useDebounceRef'
export default {
  setup() {
    const message = debounceRef('Hello World')

    return {
      message
    }
  }
}
</script>

<style scoped></style>
