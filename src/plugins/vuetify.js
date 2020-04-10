// src/plugins/vuetify.js
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'md',
  },
  theme: {
    themes: {
      light: {
        primary: '#BBDEFB',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  }
}

export default new Vuetify(opts)