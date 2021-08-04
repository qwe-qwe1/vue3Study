<template>
  <div>
    <h2>{{ name }} - {{ age1 }}</h2>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue'
export default {
  setup() {
    const info = reactive({ name: 'why', age: 18 })
    // toRefs：将reactive对象中的所有属性转成ref，建立链接
    let { name, age } = toRefs(info)

    // toRef：对其中一个属性进行转换ref，建立链接
    let age1 = toRef(info, 'age')

    const changeAge = () => {
      age1.value++
    }

    return {
      age1,
      name,
      age,
      info,
      changeAge
    }
  }
}
</script>

<style scoped></style>
