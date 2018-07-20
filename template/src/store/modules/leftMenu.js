const leftMenu = {
  state: {
    showDeatil: true
  },

  mutations: {
    SET_SHOWDEATIL: (state, showDeatil) => {
      state.showDeatil = showDeatil
    }
  },
  actions: {
    CloseMenu({ commit }, showDeatil) {
      commit('SET_SHOWDEATIL', showDeatil)
    }
  }
}

export default leftMenu
