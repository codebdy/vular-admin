import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify' // path to vuetify export

import VularAdmin from "./components/VularAdmin.vue"

Vue.component('VularAdmin', VularAdmin)

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})
