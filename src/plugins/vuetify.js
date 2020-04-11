// src/plugins/vuetify.js
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
import "../sass/variables.scss"

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'md',
  },
  theme: {
    themes: {
    },
  }
}

export default new Vuetify(opts)