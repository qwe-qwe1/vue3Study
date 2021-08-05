<template>
  <div>
    <input type="text" v-focus />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  directives: {
    /* focus: {
      mounted(el, binding, vnode, preVnode) {
        console.log('focus mounted')
        el.focus()
      }
    } */
  },
  setup() {}
}
</script>

<style scoped></style>
