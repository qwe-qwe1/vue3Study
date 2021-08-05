<script>
import { h } from 'vue'
export default {
  render() {
    return h('div', null, [
      h('h2', null, 'hello Wrold'),
      this.$slots.default ? this.$slots.default({name: 'coderwhy'}) : h('span', null, 'helloworld插槽默认值')
    ])
  }
}
</script>

<style scoped></style>
