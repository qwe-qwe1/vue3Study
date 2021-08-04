<template>
  <div>
    <h2>{{ fullName }}</h2>
    <button @click="changeName">修改Name</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup() {
    const firstName = ref('Kobe')
    const lastName = ref('Bryant')

    // 用法1：传入一个getter函数
    // const fullName = computed(() => firstName.value + ' ' + lastName.value)

    // 用法2：传入一个对象，包含getter/setter
    const fullName = computed({
      get: () => firstName.value + ' ' + lastName.value,
      set(newValue) {
        const names = newValue.split(' ')
        firstName.value = names[0]
        lastName.value = names[1]
      }
    })

    const changeName = () => {
      // firstName.value = 'James'
      fullName.value = 'coder why'
    }

    return {
      fullName,
      changeName
    }
  }
}
</script>

<style scoped></style>
