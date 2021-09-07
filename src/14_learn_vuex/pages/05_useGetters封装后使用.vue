<template>
  <div>
    <h2>总价值：{{ $store.getters.totalPrice }}</h2>
    <h2>总价值：{{ $store.getters.totalPriceCountGreaterN(3) }}</h2>
    <!-- <h3>{{ storeGettersFns }}</h3> -->
    <h3>{{ ageInfo }}</h3>
    <h3>{{ heightInfo }}</h3>
  </div>
</template>

<script>
import { useGetters } from '../hooks/useGetters'
export default {
  setup() {
    // const store = useStore()
    // const sNameInfo = computed(() => store.getters.nameInfo)
    const storeGettersFns = useGetters(['nameInfo', 'ageInfo', 'heightInfo'])

    return {
      ...storeGettersFns
    }
  }
}
</script>

<style scoped></style>
