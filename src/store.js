import Vue from 'vue'
import Vuex from 'vuex'
import defaultTheme from './themes/demo1'

Vue.use(Vuex)


export default 
new Vuex.Store({
  state:{
    vularApp: JSON.parse(JSON.stringify(defaultTheme)),
    //activedMenuItem: '',
    errors: [],
    errorMsg:'',
    showError:false,
    loggedIn:false,
    //pages schema cache
    pagesCache:new Map,
    globals:{},
    customizedApp:{
      modulesDrawer:true,
      draggedElement:null,
    },
  },

  mutations:{
    changeTheme(state, theme){
      state.vularApp = JSON.parse(JSON.stringify(theme))
    },

    //activeMenuItem(state, id){
    //  state.activedMenuItem = id
    //},

    cachePage(state, data){
      state.pagesCache.set(data.pageId, data.page)
    },

    error(state, error){
      state.showError = true
      state.errorMsg = error.error
      state.errors.unshift(error)
    },

    clearErrors(state){
      state.errors = []
    },

    hideError(state){
      state.showError = false
    },

    login(state){
      state.loggedIn = true
    },

    logout(state){
      state.loggedIn = false
    },

    globals(state, globals){
      state.globals = globals
    },

    showCustuomizedModulesDrawer(state){
      state.customizedApp.modulesDrawer = true
    },

    dragElement(state, element){
      state.customizedApp.draggedElement = element
    },

    endDragElement(state){
      state.customizedApp.draggedElement = null
    },
  },
 
  actions: {
  },
})
