import i18n from './assets/locales'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // path to vuetify export
//import VeLine from 'v-charts/lib/line.common'
//import VeHistogram from 'v-charts/lib/histogram.common'
//import VePie from 'v-charts/lib/pie.common'

import store from './store'    
import axios from 'axios'
import router from './router'

import "./mock"

import VularNode from './VularNode'
import VularAdmin from "./components/VularAdmin.vue"
import VularMediaWidget from "./components/media/VularMediaWidget.vue"
import VularMediaSelectCard from "./components/media/VularMediaSelectCard.vue"
import VularSingleImageInput from "./components/media/VularSingleImageInput.vue"
import VularPage from "./components/VularPage.vue"
import VularPageHeader from "./components/widgets/VularPageHeader"
import VularEditPageHeader from "./components/widgets/VularEditPageHeader"
import VularListHead from "./components/widgets/VularListHead"
import VularListBody from "./components/widgets/VularListBody"
import VularTreeEditor from "./components/widgets/VularTreeEditor.vue"
import VularFormCard from "./components/form/VularFormCard.vue"
import VularInput from "./components/form/VularInput.vue"
import VularDateField from "./components/form/VularDateField.vue"
import VularLabel from "./components/form/VularLabel.vue"
import VularToManySelect from "./components/relations/VularToManySelect.vue"
import VularHasOneDialog from "./components/relations/VularHasOneDialog.vue"
import VularHasManyTableCard from "./components/relations/VularHasManyTableCard.vue"

import VularListPage from "./components/VularListPage.vue"
import VularEditPage from "./components/VularEditPage.vue"
import VularTablePage from "./components/VularTablePage.vue"

import VularTinymce from "./components/tinymce"

import ThemeSettings from "./components/pages/theme/ThemeSettings"
import InquiryListPage from "./components/pages/inquiry/InquiryListPage"
import PostListPage from "./components/pages/post/PostListPage"
import PostCategory from "./components/pages/post/PostCategory"
import PostAttributes from "./components/pages/post/PostAttributes"
import PostEditPage from "./components/pages/post/PostEditPage"
import ProductEditPage from "./components/pages/product/ProductEditPage"
import ProductCategory from "./components/pages/product/ProductCategory"
import ProductModule from "./components/pages/product/ProductModule"

import VularAppbarAccount from "./components/account/VularAppbarAccount"
import VularNotifications from "./components/notifications/VularNotifications"

//Vue.use(VueRouter)

//Vue.component(VeLine.name, VeLine)
//Vue.component(VeHistogram.name, VeHistogram)
//Vue.component(VePie.name, VePie)
Vue.component('VularNode',VularNode);
Vue.component('VularAdmin', VularAdmin)
Vue.component('VularMediaWidget', VularMediaWidget)
Vue.component('VularMediaSelectCard', VularMediaSelectCard)
Vue.component('VularSingleImageInput', VularSingleImageInput)
Vue.component('VularTinymce', VularTinymce)
Vue.component('VularPage', VularPage)
Vue.component('VularPageHeader', VularPageHeader)
Vue.component('VularEditPageHeader', VularEditPageHeader)
Vue.component('VularListHead', VularListHead)
Vue.component('VularListBody', VularListBody)
Vue.component('VularFormCard', VularFormCard)
Vue.component('VularInput', VularInput)
Vue.component('VularDateField', VularDateField)
Vue.component('VularLabel', VularLabel)
Vue.component('VularTreeEditor', VularTreeEditor)
Vue.component('VularToManySelect', VularToManySelect)
Vue.component('VularHasOneDialog', VularHasOneDialog)
Vue.component('VularHasManyTableCard', VularHasManyTableCard)

Vue.component('VularListPage', VularListPage)
Vue.component('VularEditPage', VularEditPage)
Vue.component('VularTablePage', VularTablePage)

Vue.component('InquiryListPage', InquiryListPage)
Vue.component('ProductModule', ProductModule)
Vue.component('PostListPage', PostListPage)
Vue.component('PostEditPage', PostEditPage)
Vue.component('PostCategory', PostCategory)
Vue.component('PostAttributes', PostAttributes)
Vue.component('ProductCategory', ProductCategory)
Vue.component('ProductEditPage', ProductEditPage)

Vue.component('VularAppbarAccount', VularAppbarAccount)
Vue.component('VularNotifications', VularNotifications)

window.$bus= new Vue();
window.$axios = axios

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
})
