<template>
  <div>
    <h2>{{ $store.state.counter }}</h2>
    <Home />
    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
export default {
  name: 'App',
  components: {
    Home
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style></style>
