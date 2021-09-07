<template>
  <div>
    <h2>当前计数：{{ $store.state }}</h2>
    <h2>{{ homeCounter }}</h2>
    <button @click="increment">home+1</button>
    <h2>{{ $store.getters.doubleHomeCounter }}</h2>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('home')
export default {
  computed: {
    /* ...mapState({
      homeCounter: state => state.home.homeCounter
    }),
    ...mapGetters({
      doubleHomeCounter: 'home/doubleHomeCounter'
    }) */
    /* ...mapState('home', ['homeCounter']),
    ...mapGetters('home', ['doubleHomeCounter']) */
    ...mapState(['homeCounter']),
    ...mapGetters(['doubleHomeCounter'])
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['incrementAction'])
  }
}
</script>

<style scoped></style>
