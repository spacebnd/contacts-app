import Vue from 'vue'
import _cloneDeep from 'lodash/cloneDeep'
import { db } from '../../main.js'

export default {
  namespaced: true,

  state: {
    contacts: {},
    contactIds: [],
    activeContactId: null,
  },

  getters: {
    contacts: (state) => {
      return state.contactIds.map((id) => {
        state.contacts[id].id = id
        return state.contacts[id]
      })
    },

    activeContactId: (state) => {
      return state.activeContactId
    },

    activeContact: (state, getters) => {
      return state.contacts[getters.activeContactId]
    },
  },

  mutations: {
    setContactsData(state, payload) {
      state.contacts = payload
      state.contactIds = Object.keys(payload)
    },

    setContact(state, contact) {
      Vue.set(state.contacts, contact.id, contact)
    },

    setActiveContactId(state, id) {
      state.activeContactId = id
    },
  },

  actions: {
    async fetchContactsData({ commit }) {
      const snapshot = await db.ref().child('contacts').get()
      if (snapshot.exists()) {
        commit('setContactsData', snapshot.val())
      } else {
        console.error('No data available')
      }
    },

    async createContact({ commit }, payload) {
      console.log(commit, payload)
    },

    async updateContact({ commit }, contact) {
      const updates = {}
      updates['/contacts/' + contact.id] = contact
      await db.ref().update(updates, (error) => {
        if (error) {
          console.error(error)
        } else {
          commit('setContact', _cloneDeep(contact))
        }
      })
    },
  },
}
