import { createApp } from 'vue'
import App from './11_自定义指令/App.vue'

const app = createApp(App)

app.directive('focus', {
  mounted(el, binding, vnode, preVnode) {
    el.focus()
  }
})

app.mount('#app')
