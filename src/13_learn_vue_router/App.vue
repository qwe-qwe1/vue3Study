<template>
  <div>
    <router-link to="/home" tag=""> <nav-bar title="首页"/></router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/aaa/id/123">用户</router-link>
    <button @click="jumpToAbout">关于</button>

    <transition>
      <component :is="组件"></component>
    </transition>

    <router-view v-slot="props">
      <transition name="why">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import NavBar from './components/NavBar.vue'
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
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
.why-active {
  color: red;
}
.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
}
</style>
