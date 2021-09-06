<template>
  <div>
    <h2>Home:{{ sCounter }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    fullName() {
      return 'kobe Bryant'
    },
    // ...mapState(['counter'])
    ...mapState({
      sCounter: state => state.counter
    })
  }
}
</script>

<style scoped></style>
