<template>
  <div>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="increment">action +1</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.dispatch('incrementAction', { count: 100 })
    }
  }
}
</script>

<style scoped></style>
