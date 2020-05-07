import Vue from 'vue'
import Router from 'vue-router'
import VularLogin from "./components/VularLogin.vue"
import Dashboard from "./components/pages/dashboard/Dashboard"
import VularModule from "./components/VularModule"
import VularPageLoader from "./components/VularPageLoader.vue"
//import VularEditPage from "./components/VularEditPage.vue"
import VularMediasPage from "./components/VularMediasPage.vue"

Vue.use(Router)

Vue.component('VularLogin', VularLogin)
Vue.component('Dashboard', Dashboard)
Vue.component('VularModule', VularModule)
Vue.component('VularPageLoader', VularPageLoader)
//Vue.component('VularEditPage', VularEditPage)
Vue.component('VularMediasPage', VularMediasPage)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name:'dashboard'}
    },
    {
      path: '/module/:moduleId',
      name: 'module',
      component: VularModule,
      redirect:'/module/:moduleId/page/:pageId/data/:data?',
      children: [
        {
          path: 'page/:pageId/data/:data?',
          name: 'page',
          component: VularPageLoader,
        },
        /*{
          path: 'edit/:pageId/:id',
          name: 'editPage',
          component: VularEditPage
        },*/
        /*{
          path: 'list/:index/detail/:detailIndex',
          name: 'detail',
          component: detail
        }*/
      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/medias',
      name: 'medias',
      component: VularMediasPage
    },
    {
      path: '/login',
      name: 'login',
      component: VularLogin
    }
  ]
})
