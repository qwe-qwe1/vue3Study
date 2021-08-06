<template>
  <div>
    <input type="text" />

    <button v-if="counter < 2" v-why.aaa.bbb="'coderwhy'" @click="increment">当前计数：{{ counter }}</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  directives: {
    why: {
      created(el, bindings, vnode, preVnode) {
        console.log('why created')
        console.log(bindings)
      },
      beforeMount() {
        console.log('why beforeMount')
      },
      mounted() {
        console.log('why mounted')
      },
      beforeUpdate() {
        console.log('why beforeUpdate')
      },
      updated() {
        console.log('why updated')
      },
      beforeUnmount() {
        console.log('why beforeUnmount')
      },
      unmounted() {
        console.log('why unmounted')
      }
    }
  },
  setup() {
    const counter = ref(0)

    const increment = () => counter.value++

    return {
      counter,
      increment
    }
  }
}
</script>

<style scoped></style>
