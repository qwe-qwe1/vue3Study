<template>
  <div>
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="increment">action +1</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  /* methods: {
    ...mapActions(['incrementAction']),
    ...mapActions({
      increment: 'incrementAction'
    })
  }, */
  setup() {
    const actions = mapActions(['incrementAction'])
    const actions1 = mapActions({
      increment: 'incrementAction'
    })

    return {
      ...actions,
      ...actions1
    }
  }
}
</script>

<style scoped></style>
