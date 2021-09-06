<template>
  <div>
    <h2>Home:{{ sCounter }}</h2>
  </div>
</template>

<script>
import { useState } from '../hooks/useState'
export default {
  setup() {
    const storeState = useState({
      sCounter: state => state.counter
    })

    return {
      ...storeState
    }
  }
}
</script>

<style scoped></style>
