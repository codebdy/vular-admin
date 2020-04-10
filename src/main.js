import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify' // path to vuetify export

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})
