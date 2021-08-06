import { createApp } from 'vue'
import App from './12_teleport内置组件.vue/App.vue'
import registerDirectives from './directives'
import pluginObject from './plugins/plugins_object'
import pluginFunction from './plugins/plugins_function'

const app = createApp(App)

registerDirectives(app)

app.use(pluginObject)
app.use(pluginFunction)

/* app.directive('focus', {
  mounted(el, binding, vnode, preVnode) {
    el.focus()
  }
}) */

app.mount('#app')
