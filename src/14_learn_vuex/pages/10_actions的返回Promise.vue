<template>
  <div>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="increment">action +1</button>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    
  }
}
</script>

<style scoped></style>
