const leftMenu = {
  state: {
    showDetail: true
  },
  getters: {
    showDetail: state => state.showDetail,
  },
  mutations: {
    SET_SHOW_DETAIL: (state, val) => {
      state.showDetail = val
    }
  },
  actions: {
    closeMenu({ commit }, val) {
      commit('SET_SHOW_DETAIL', val)
    }
  }
}

export default leftMenu
