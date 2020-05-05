import Vue from 'vue'
import Vuex from 'vuex'
import defaultTheme from './themes/demo1'

Vue.use(Vuex)


export default 
new Vuex.Store({
  state:{
    vularApp: JSON.parse(JSON.stringify(defaultTheme)),
    activedMenuItem: '',
    errors: [],
    errorMsg:'',
    showError:false,
    loggedIn:false,
    //pages schema cache
    pagesCache:[],
  },

  mutations:{
    changeTheme(state, theme){
      state.vularApp = JSON.parse(JSON.stringify(theme))
    },

    activeMenuItem(state, id){
      state.activedMenuItem = id
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
  },
 
  actions: {
  },
})
