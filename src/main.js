import i18n from './assets/locales'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify' // path to vuetify export
import VeLine from 'v-charts/lib/line.common'
import VeHistogram from 'v-charts/lib/histogram.common'
import VePie from 'v-charts/lib/pie.common'

import store from './store'    

import VularNode from './VularNode'
import VularAdmin from "./components/VularAdmin.vue"
import VularMediaSelect from "./components/media/VularMediaSelect.vue"
import VularPage from "./components/VularPage.vue"
import VularListPage from "./components/VularListPage.vue"
import ThemeSettings from "./components/pages/theme/ThemeSettings"
import Dashboard from "./components/pages/dashboard/Dashboard"
import VularPageHeader from "./components/widgets/VularPageHeader"
import VularEditPageHeader from "./components/widgets/VularEditPageHeader"
import VularListHead from "./components/widgets/VularListHead"
import VularListBody from "./components/widgets/VularListBody"
import InquiryListPage from "./components/pages/inquiry/InquiryListPage"
import PostListPage from "./components/pages/post/PostListPage"
import PostEditPage from "./components/pages/post/PostEditPage"
import ProductModule from "./components/pages/product/ProductModule"

Vue.use(VueRouter)

Vue.component(VeLine.name, VeLine)
Vue.component(VeHistogram.name, VeHistogram)
Vue.component(VePie.name, VePie)
Vue.component('VularNode',VularNode);
Vue.component('VularAdmin', VularAdmin)
Vue.component('VularMediaSelect', VularMediaSelect)
Vue.component('VularPage', VularPage)
Vue.component('VularListPage', VularListPage)
Vue.component('VularPageHeader', VularPageHeader)
Vue.component('VularEditPageHeader', VularEditPageHeader)
Vue.component('VularListHead', VularListHead)
Vue.component('VularListBody', VularListBody)
Vue.component('InquiryListPage', InquiryListPage)
Vue.component('ProductModule', ProductModule)
Vue.component('PostListPage', PostListPage)
Vue.component('PostEditPage', PostEditPage)

const routes = [
  //{ path: '/form2', component: VularForm },
  { path: '/', redirect: {name:'theme-settings'} },
  { path: '/dashboard', name:'dashboard', component: Dashboard },
  { path: '/inquiry-list', name:'inquiry-list', component: InquiryListPage },
  { path: '/post-list', name:'post-list', component: PostListPage },
  { path: '/post-edit', name:'post-edit', component: PostEditPage },
  { path: '/product-list', name:'product-list', component: ProductModule },
  { path: '/theme-settings', name:'theme-settings', component: ThemeSettings },
]

const router = new VueRouter({
  routes 
})

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
})
