<template>
  <div>
    <h2>Home:{{ sCounter }}</h2>
  </div>
</template>

<script>
import { mapState, useStore } from 'vuex'
import { computed } from 'vue'
export default {
  setup() {
    const store = useStore()
    const sCounter = computed(() => store.state.counter)

    const storeStateFns = mapState(['counter'])
    const storeState = {}

    Object.keys(storeStateFns).forEach(fnKey => {
      const fn = storeStateFns[fnKey].bind({ $store: store })
      storeState[fnKey] = computed(fn)
    })

    return {
      sCounter,
      ...storeState
    }
  }
}
</script>

<style scoped></style>
