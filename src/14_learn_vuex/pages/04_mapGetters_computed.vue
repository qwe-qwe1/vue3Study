<template>
  <div>
    <h2>总价值：{{ $store.getters.totalPrice }}</h2>
    <h2>总价值：{{ $store.getters.totalPriceCountGreaterN(3) }}</h2>
    <h3>{{ sNameInfo }}</h3>
    <!-- <h3>{{ ageInfo }}</h3>
    <h3>{{ heightInfo }}</h3> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['nameInfo', 'ageInfo', 'heightInfo']),
    ...mapGetters({
      sNameInfo: 'nameInfo'
    })
  },
  setup() {
    return {}
  }
}
</script>

<style scoped></style>
