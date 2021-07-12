import Vue from 'vue'
import Vuex from 'vuex'
import ui from './modules/ui.js'
import contacts from './modules/contacts.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ui,
    contacts,
  },
})
