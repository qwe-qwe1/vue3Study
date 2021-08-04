<template>
  <div>
    <home-content />
  </div>
</template>

<script>
import HomeContent from './HomeContent.vue'
  export default {
    data() {
      return {}
    },
    components: {
      HomeContent
    },
    provide: {
      name: 'why',
      age: 18
    }
  }
</script>

<style scoped>

</style>