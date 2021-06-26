export default {
  namespaced: true,

  state: {
    isEditable: false,
    isCreating: false,
  },

  getters: {
    isDrawerOpen: (state) => {
      return state.isDrawerOpen
    },

    isEditable: (state) => {
      return state.isEditable
    },
  },

  mutations: {
    setIsDrawerOpen(state, payload) {
      state.isDrawerOpen = payload
    },

    setIsEditable(state, payload) {
      state.isEditable = payload
    },
  },
}
