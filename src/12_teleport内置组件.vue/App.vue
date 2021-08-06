<template>
  <div class="app">
    <teleport to="#why">
      <h2>当前计数</h2>
      <button>+1</button>
      <hello-world />
    </teleport>
    <teleport to="#why">
      <span>哈哈哈哈</span>
    </teleport>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import { getCurrentInstance } from 'vue'
export default {
  components: {
    HelloWorld
  },
  setup() {
    const instance = getCurrentInstance()
    console.log(instance.appContext.config.globalProperties.$name)
  },
  mounted() {
    console.log(this.$name)
  }
}
</script>

<style scoped></style>
