import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify' // path to vuetify export

import VularAppDrawer from "./components/VularAppDrawer.vue"
import VularAppToolbar from "./components/VularAppToolbar.vue"

Vue.component('VularAppDrawer', VularAppDrawer)
Vue.component('VularAppToolbar', VularAppToolbar)

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})
