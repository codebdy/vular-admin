import Vue from 'vue'
import Vuex from 'vuex'
import defaultTheme from './themes/default'

Vue.use(Vuex)


export default 
new Vuex.Store({
  state:{
      vularApp: defaultTheme,
  },

 
  mutations:{
    changeTheme(state, theme){
      state.vularApp = theme
    },
  },
 
  actions: {
  },
})
