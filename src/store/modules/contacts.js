import Vue from 'vue'
import { db } from '../../main.js'

export default {
  namespaced: true,

  state: {
    contacts: [],
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

    setContact(state, payload) {
      const index = state.contacts.findIndex((contact) => contact.id === payload.id)
      Vue.set(state.contacts, index, payload)
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
          item.id = childSnapshot.key
          convertedData.push(item)
        })
        commit('setContactsData', convertedData)
      } else {
        console.error('No data available')
      }
    },

    async createContact({ commit }, payload) {
      console.log(commit, payload)
    },

    async updateContact({ commit }, payload) {
      const updates = {}
      updates['/contacts/' + payload.id] = payload
      await db.ref().update(updates, (error) => {
        if (error) {
          console.error(error)
        } else {
          commit('setContact', payload)
        }
      })
    },
  },
}
