const projectConfig = {
  state: {
    isMap2d: true,
    loadMap2d: true,
    loadMap3d: true
  },
  mutations: {
    SET_SHOWDEATIL: (state, showDeatil) => {
      state.showDeatil = showDeatil;
    },
    GET_2DMAP_STATUS: (state, val) => {
      state.loadMap2d = val;
    },
    GET_3DMAP_STATUS: (state, val) => {
      state.loadMap3d = val;
    }
  },
  actions: {
    CloseMenu({commit}, showDeatil) {
      commit('SET_SHOWDEATIL', showDeatil)
    }
  }
}

export default leftMenu