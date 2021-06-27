export default {
  namespaced: true,

  state: {
    isDrawerOpen: false,
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

    isCreating: (state) => {
      return state.isCreating
    },
  },

  mutations: {
    setIsDrawerOpen(state, payload) {
      state.isDrawerOpen = payload
    },

    setIsEditable(state, payload) {
      state.isEditable = payload
    },

    setIsCreating(state, payload) {
      state.isCreating = payload
    },
  },
}
