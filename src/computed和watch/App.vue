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
    const info = reactive({ name: 'why', age: 18, friend: { name: 'kobe' } })

    watch(
      () => ({ ...info }),
      (newInfo, oldInfo) => {
        console.log(newInfo, oldInfo)
      },
      {
        deep: true,
        immediate: true
      }
    )

    const changeData = () => {
      info.friend.name = 'ccc'
    }

    return {
      info,
      changeData
    }
  }
}
</script>

<style scoped></style>
