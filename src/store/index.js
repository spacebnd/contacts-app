import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../main'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: {},
    activeContact: null,
  },

  getters: {
    contacts: (state) => {
      return state.contacts
    },
    activeContact: (state) => {
      return state.activeContact
    },
  },

  mutations: {
    setContacts(state, payload) {
      state.contacts = payload
    },

    setActiveContact(state, payload) {
      state.activeContact = payload
    },
  },

  actions: {
    async fetchContacts({ commit }) {
      const snapshot = await db.ref().child('contacts').get()
      if (snapshot.exists()) {
        const convertedData = []
        snapshot.forEach((childSnapshot) => {
          let item = childSnapshot.val()
          item.key = childSnapshot.key
          convertedData.push(item)
        })
        commit('setContacts', convertedData)
      } else {
        console.error('No data available')
      }
    },
  },
})
