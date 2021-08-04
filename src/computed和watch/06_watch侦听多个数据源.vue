<template>
  <div>
    <h2 ref="title">{{ info.name }}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue'
export default {
  setup() {
    const info = reactive({ name: 'why', age: 18 })
    const name = ref('why')

    watch([() => ({...info}), name], ([newInfo, newName], [oldInfo, oldName]) => {
      console.log(newInfo, newName, oldInfo, oldName)
    })

    const changeData = () => {
      info.name = 'ccc'
    }

    return {
      info,
      changeData
    }
  }
}
</script>

<style scoped></style>
