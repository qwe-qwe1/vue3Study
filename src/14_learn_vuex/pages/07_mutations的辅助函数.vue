<template>
  <div>
    <h2>总价值：{{ $store.getters.totalPrice }}</h2>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="$store.commit('incrementN', 10)">+10</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['increment', 'decrement'])
  }
}
</script>

<style scoped></style>
