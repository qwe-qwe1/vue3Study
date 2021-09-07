<template>
  <div>
    <h2>当前计数：{{ store.state }}</h2>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    return {
      store
    }
  }
}
</script>

<style scoped></style>
