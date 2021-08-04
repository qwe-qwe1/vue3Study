<template>
  <div>
    <h2>{{ info }}</h2>
    <button @click="changeInfo">修改age</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const info = ref({ name: 'why', age: 18 })

    const changeInfo = () => {
      info.value.name = 'james'
    }

    return {
      info,
      changeInfo
    }
  }
}
</script>

<style scoped></style>
