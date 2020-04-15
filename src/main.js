import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify' // path to vuetify export
import VeLine from 'v-charts/lib/line.common'
import VeHistogram from 'v-charts/lib/histogram.common'
import VePie from 'v-charts/lib/pie.common'

import store from './store'    

import VularAdmin from "./components/VularAdmin.vue"
import ThemeSettings from "./components/pages/theme/ThemeSettings"
import Dashboard from "./components/pages/dashboard/Dashboard"
import InquiryListPage from "./components/pages/inquiry/InquiryListPage"
import VularListPageHeader from "./components/widgets/VularListPageHeader"

Vue.use(VueRouter)

Vue.component(VeLine.name, VeLine)
Vue.component(VeHistogram.name, VeHistogram)
Vue.component(VePie.name, VePie)
Vue.component('VularAdmin', VularAdmin)
Vue.component('InquiryListPage', InquiryListPage)
Vue.component('VularListPageHeader', VularListPageHeader)

const routes = [
  //{ path: '/form2', component: VularForm },
  { path: '/', redirect: {name:'theme-settings'} },
  { path: '/dashboard', name:'dashboard', component: Dashboard },
  { path: '/inquiry-list', name:'inquiry-list', component: InquiryListPage },
  { path: '/theme-settings', name:'theme-settings', component: ThemeSettings },
]

const router = new VueRouter({
  routes 
})

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
})
