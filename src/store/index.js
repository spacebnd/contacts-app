import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contactsData: {},
  },
  mutations: {
    setContactsData(state, payload) {
      state.contactsData = payload
    },
  },
  actions: {
    async fetchContactsData({ commit }) {
      const snapshot = await db.ref().child('contacts').get()
      if (snapshot.exists()) {
        const payload = snapshot.val()
        commit('setContactsData', payload)
      } else {
        console.error('No data available')
      }
    },
  },
  modules: {},
})
