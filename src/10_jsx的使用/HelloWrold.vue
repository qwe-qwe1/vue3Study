<script>
export default {
  render() {
    return (
      <div>
        <h2>Hello World</h2>
        {this.$slots.default ? this.$slots.default() : <span>未传插槽</span>}
      </div>
    )
  }
}
</script>

<style scoped></style>
