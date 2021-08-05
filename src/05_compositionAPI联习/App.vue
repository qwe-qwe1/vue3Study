<template>
  <div>
    {{ counter }} *2 = {{ doubleCounter }}
    <p><button @click="increment">+1</button><button @click="decrement">-1</button></p>
    <div>{{ data }}</div>
    <button @click="changeData">修改数据</button>
  </div>
  <div class="content"></div>
  <div class="scroll">
    <div class="scroll-x">scrollX:{{ scrollX }}</div>
    <div class="scroll-y">scrollY:{{ scrollY }}</div>
  </div>
  <div class="mouse">
    <div class="mouse-x">mouseX:{{ mouseX }}</div>
    <div class="mouse-y">mouseY:{{ mouseY }}</div>
  </div>
</template>

<script>
import { useCounter, useTitle, usescrollPosition, useMousePosition, useLocalStorage } from './hooks'
export default {
  setup() {
    const { counter, doubleCounter, increment, decrement } = useCounter()
    const titleRef = useTitle('ccc')

    setTimeout(() => {
      titleRef.value = 'kobe'
    }, 1000)

    const { scrollX, scrollY } = usescrollPosition()

    const { mouseX, mouseY } = useMousePosition()

    const data = useLocalStorage('info', { name: 'why', age: 19 })
    const changeData = () => (data.value = 'hhh')

    return {
      counter,
      doubleCounter,
      increment,
      decrement,

      scrollX,
      scrollY,

      mouseX,
      mouseY,

      data,
      changeData
    }
  }
}
</script>

<style scoped>
.content {
  width: 3000px;
  height: 3000px;
}

.scroll {
  position: fixed;
  bottom: 30px;
  right: 30px;
}

.mouse {
  position: fixed;
  right: 30px;
  bottom: 80px;
}
</style>
