<template>
  <div>
    <h2>当前计数：{{ store.state }}</h2>
    <button @click="homeIncrement">home+1</button>
    <h2>{{ $store.getters.doubleHomeCounter }}</h2>
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
  },
  methods: {
    homeIncrement() {
      this.$store.commit('home/increment')
    },
    homeIncrementAction() {
      this.$store.dispatch('home/incrementAction')
    }
  }
}
</script>

<style scoped></style>