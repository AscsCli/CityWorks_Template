const leftMenu = {
  state: {
    showDetail: true
  },
  getters: {
    showDetail: state => state.showDetail,
  },
  mutations: {
    SET_SHOW_DETAIL: (state, showDeatil) => {
      state.showDeatil = showDeatil
    }
  },
  actions: {
    closeMenu({ commit }, showDeatil) {
      commit('SET_SHOW_DETAIL', showDeatil)
    }
  }
}

export default leftMenu
