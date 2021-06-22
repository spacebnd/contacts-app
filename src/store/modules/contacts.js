import { db } from '../../main.js'

export default {
  namespaced: true,

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
    setContactsData(state, payload) {
      state.contacts = payload
    },

    setActiveContact(state, payload) {
      state.activeContact = payload
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

    async saveContactData({ commit }, payload) {
      const updates = {}
      updates['/contacts/' + payload.id] = payload
      await db.ref().update(updates, (error) => {
        if (error) {
          console.error(error)
        } else {
          console.log('success')
        }
      })
    },
  },
}
