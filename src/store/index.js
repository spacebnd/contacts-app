import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contactsData: {},
  },

  getters: {
    contactsData: (state) => {
      return state.contactsData
    },
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
        const convertedData = []
        snapshot.forEach((childSnapshot) => {
          let item = childSnapshot.val()
          item.key = childSnapshot.key
          convertedData.push(item)
        })
        commit('setContactsData', convertedData)
      } else {
        console.error('No data available')
      }
    },
  },
})
