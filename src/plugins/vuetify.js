// src/plugins/vuetify.js
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'md' ||'fa',
  },
  theme: {
    dark:false,
    themes: {
      light: {
        primary: "#5d78ff",
      },
      dark: {
        primary: "#5d78ff",
      },
    },
  },
}

export default new Vuetify(opts)