import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify' // path to vuetify export

import VularDrawer from "./components/VularDrawer.vue"

Vue.component('VularDrawer', VularDrawer)

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})
