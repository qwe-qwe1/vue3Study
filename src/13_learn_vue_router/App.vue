<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/aaa/id/123">用户</router-link>
    <button @click="jumpToAbout">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const jumpToAbout = () => {
      router.push({
        path: '/about',
        query: {
          name: 'why',
          age: 18
        }
      })
    }
    return {
      jumpToAbout
    }
  }
}
</script>

<style scoped></style>
