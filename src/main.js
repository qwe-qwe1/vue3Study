import { createApp } from 'vue'
import App from './13_learn_vue_router/App.vue'
import registerDirectives from './directives'
import pluginObject from './plugins/plugins_object'
import pluginFunction from './plugins/plugins_function'
import router from './13_learn_vue_router/router'

const app = createApp(App)

registerDirectives(app)

app.use(pluginObject)
app.use(pluginFunction)

/* app.directive('focus', {
  mounted(el, binding, vnode, preVnode) {
    el.focus()
  }
}) */
app.use(router)
app.mount('#app')
