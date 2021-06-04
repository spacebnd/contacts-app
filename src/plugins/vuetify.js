import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import { THEMES } from '../common/constants.js'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: THEMES,
  },
})
