import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'

import globals from './globals'
import Popper from 'popper.js'

import axios from 'axios'

// Required to enable animations on dropdowns/tooltips/popovers
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false

Vue.config.productionTip = false

// Global axios
axios.defaults.withCredentials = true
axios.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  let regex = /.*csrftoken=([^;.]*).*$/
  config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1]
  return config
})

Vue.prototype.$ajax = axios

// Global hosts
Vue.prototype.$host = 'http://106.14.4.121:8000'
// Vue.prototype.$host = 'http://127.0.0.1:8000'

Vue.use(BootstrapVue)

// Global RTL flag
Vue.mixin({
  data: globals
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
