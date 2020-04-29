import Vue from 'vue'
import Vuex from 'vuex'
import defaultTheme from './themes/demo1'

Vue.use(Vuex)


export default 
new Vuex.Store({
  state:{
    vularApp: JSON.parse(JSON.stringify(defaultTheme)),
    activedMenuItem: '',
  },

  mutations:{
    changeTheme(state, theme){
      state.vularApp = JSON.parse(JSON.stringify(theme))
    },

    activeMenuItem(state, id){
      state.activedMenuItem = id
    }
  },
 
  actions: {
  },
})
