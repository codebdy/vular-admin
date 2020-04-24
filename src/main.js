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
import VularLogin from "./components/VularLogin.vue"
import VularMediasPage from "./components/VularMediasPage.vue"
import VularAdmin from "./components/VularAdmin.vue"
import VularMediaWidget from "./components/media/VularMediaWidget.vue"
import VularMediaSelectCard from "./components/media/VularMediaSelectCard.vue"
import VularSingleImageInput from "./components/media/VularSingleImageInput.vue"
import VularPage from "./components/VularPage.vue"
import VularListPage from "./components/VularListPage.vue"
import VularEditPage from "./components/VularEditPage.vue"
import VularPageHeader from "./components/widgets/VularPageHeader"
import VularEditPageHeader from "./components/widgets/VularEditPageHeader"
import VularListHead from "./components/widgets/VularListHead"
import VularListBody from "./components/widgets/VularListBody"
import VularTreeEditor from "./components/widgets/VularTreeEditor.vue"
import VularFormCard from "./components/form/VularFormCard.vue"
import VularToManySelect from "./components/relations/VularToManySelect.vue"
import VularHasOneDialog from "./components/relations/VularHasOneDialog.vue"
import VularHasManyTableCard from "./components/relations/VularHasManyTableCard.vue"

import VularTinymce from "./components/tinymce"

import ThemeSettings from "./components/pages/theme/ThemeSettings"
import Dashboard from "./components/pages/dashboard/Dashboard"
import InquiryListPage from "./components/pages/inquiry/InquiryListPage"
import PostListPage from "./components/pages/post/PostListPage"
import PostCategory from "./components/pages/post/PostCategory"
import PostAttributes from "./components/pages/post/PostAttributes"
import PostEditPage from "./components/pages/post/PostEditPage"
import ProductEditPage from "./components/pages/product/ProductEditPage"
import ProductCategory from "./components/pages/product/ProductCategory"
import ProductModule from "./components/pages/product/ProductModule"

import FormTest from "./components/FormTest"

Vue.use(VueRouter)

Vue.component(VeLine.name, VeLine)
Vue.component(VeHistogram.name, VeHistogram)
Vue.component(VePie.name, VePie)
Vue.component('VularNode',VularNode);
Vue.component('VularLogin', VularLogin)
Vue.component('VularAdmin', VularAdmin)
Vue.component('VularMediasPage', VularMediasPage)
Vue.component('VularMediaWidget', VularMediaWidget)
Vue.component('VularMediaSelectCard', VularMediaSelectCard)
Vue.component('VularSingleImageInput', VularSingleImageInput)
Vue.component('VularTinymce', VularTinymce)
Vue.component('VularPage', VularPage)
Vue.component('VularListPage', VularListPage)
Vue.component('VularPageHeader', VularPageHeader)
Vue.component('VularEditPageHeader', VularEditPageHeader)
Vue.component('VularListHead', VularListHead)
Vue.component('VularEditPage', VularEditPage)
Vue.component('VularListBody', VularListBody)
Vue.component('VularFormCard', VularFormCard)
Vue.component('VularTreeEditor', VularTreeEditor)
Vue.component('VularToManySelect', VularToManySelect)
Vue.component('VularHasOneDialog', VularHasOneDialog)
Vue.component('VularHasManyTableCard', VularHasManyTableCard)
Vue.component('InquiryListPage', InquiryListPage)
Vue.component('ProductModule', ProductModule)
Vue.component('PostListPage', PostListPage)
Vue.component('PostEditPage', PostEditPage)
Vue.component('PostCategory', PostCategory)
Vue.component('PostAttributes', PostAttributes)
Vue.component('ProductCategory', ProductCategory)
Vue.component('ProductEditPage', ProductEditPage)

Vue.component('FormTest', FormTest)

const routes = [
  //{ path: '/form2', component: VularForm },
  { path: '/', redirect: {name:'login'} },
  { path: '/dashboard', name:'dashboard', component: Dashboard },
  { path: '/medias', name:'medias', component: VularMediasPage },
  { path: '/inquiry-list', name:'inquiry-list', component: InquiryListPage },
  { path: '/post-list', name:'post-list', component: PostListPage },
  { path: '/post-edit', name:'post-edit', component: PostEditPage },
  { path: '/post-category', name:'post-category', component: PostCategory },
  { path: '/post-attributes', name:'post-attributes', component: PostAttributes },
  { path: '/product-list', name:'product-list', component: ProductModule },
  { path: '/product-edit', name:'product-edit', component: ProductEditPage },
  { path: '/product-category', name:'product-category', component: ProductCategory },
  { path: '/theme-settings', name:'theme-settings', component: ThemeSettings },
  { path: '/login', name:'login', component: VularLogin },
  { path: '/test', name:'test', component: FormTest },
]

const router = new VueRouter({
  routes 
})

window.$bus= new Vue();

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
})
