export default {
  namespaced: true,

  state: {
    isEditable: false,
    isCreating: false,
  },

  getters: {
    isEditable: (state) => {
      return state.isEditable
    },
  },

  mutations: {
    setIsEditable(state, payload) {
      state.isEditable = payload
    },
  },
}
