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
  },

  mutations:{
    changeTheme(state, theme){
      state.vularApp = JSON.parse(JSON.stringify(theme))
    },

    activeMenuItem(state, id){
      state.activedMenuItem = id
    },

    error(state, error){
      state.errors.push(error)
    },

    clearErrors(state){
      state.errors = []
    },
  },
 
  actions: {
  },
})
