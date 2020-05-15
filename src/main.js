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
import VularMediaWidget from "./components/media/VularMediaWidget.vue"
import VularMediaSelectCard from "./components/media/VularMediaSelectCard.vue"
import VularSingleImageInput from "./components/media/VularSingleImageInput.vue"
import VularPage from "./components/VularPage.vue"
import VularPageHeader from "./components/widgets/VularPageHeader"
import VularPageHeaderTitle from "./components/widgets/VularPageHeaderTitle"
import VularEditPageHeader from "./components/widgets/VularEditPageHeader"
import VularListHead from "./components/widgets/VularListHead"
import VularListBody from "./components/widgets/VularListBody"
import VularTreeEditor from "./components/widgets/VularTreeEditor.vue"
import VularFormCard from "./components/form/VularFormCard.vue"
import VularInput from "./components/form/VularInput.vue"
import VularLabel from "./components/form/VularLabel.vue"
import VularToManySelect from "./components/relations/VularToManySelect.vue"
import VularHasOneDialog from "./components/relations/VularHasOneDialog.vue"
import VularHasManyTableCard from "./components/relations/VularHasManyTableCard.vue"
import VularHasManyPanel from "./components/relations/VularHasManyPanel.vue"

import VularListPage from "./components/VularListPage.vue"
import VularEditPage from "./components/VularEditPage.vue"
import VularSimplePage from "./components/VularSimplePage.vue"
import VularTreePage from "./components/VularTreePage.vue"
import VularBottomActionEditPage from "./components/VularBottomActionEditPage.vue"

import VularTinymce from "./components/tinymce"

import VularAppbarAccount from "./components/account/VularAppbarAccount"
import VularNotifications from "./components/notifications/VularNotifications"

//Vue.use(VueRouter)

//Vue.component(VeLine.name, VeLine)
//Vue.component(VeHistogram.name, VeHistogram)
//Vue.component(VePie.name, VePie)
Vue.component('VularNode', VularNode);
Vue.component('VularMediaWidget', VularMediaWidget)
Vue.component('VularMediaSelectCard', VularMediaSelectCard)
Vue.component('VularSingleImageInput', VularSingleImageInput)
Vue.component('VularTinymce', VularTinymce)
Vue.component('VularPage', VularPage)
Vue.component('VularPageHeader', VularPageHeader)
Vue.component('VularEditPageHeader', VularEditPageHeader)
Vue.component('VularPageHeaderTitle', VularPageHeaderTitle)
Vue.component('VularListHead', VularListHead)
Vue.component('VularListBody', VularListBody)
Vue.component('VularFormCard', VularFormCard)
Vue.component('VularInput', VularInput)
Vue.component('VularLabel', VularLabel)
Vue.component('VularTreeEditor', VularTreeEditor)
Vue.component('VularToManySelect', VularToManySelect)
Vue.component('VularHasOneDialog', VularHasOneDialog)
Vue.component('VularHasManyTableCard', VularHasManyTableCard)
Vue.component('VularHasManyPanel', VularHasManyPanel)

Vue.component('VularListPage', VularListPage)
Vue.component('VularEditPage', VularEditPage)
Vue.component('VularSimplePage', VularSimplePage)
Vue.component('VularTreePage', VularTreePage)
Vue.component('VularBottomActionEditPage', VularBottomActionEditPage)

Vue.component('VularAppbarAccount', VularAppbarAccount)
Vue.component('VularNotifications', VularNotifications)

window.$bus = new Vue();
window.$axios = axios

new Vue({
    el: '#app',
    i18n,
    router,
    store,
    vuetify,
    render: h => h(App)
})