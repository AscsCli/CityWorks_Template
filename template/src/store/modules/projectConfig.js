const projectConfig = {
  state: {
    title:"",
    mapType: "2d",
    loadMap2d: false,
    loadMap3d: false,
  },
  getters: {
    getTitle: state => {
      return state.title;
    },
    get2dLoadTag: state => {
      return state.loadMap2d;
    },
    get3dLoadTag: state => {
      return state.loadMap3d;
    },
    getMapType: state => {
      return state.mapType;
    }
  },
  mutations: {
    SET_APP_TITLE: (state,val) => {
      state.title = val;
    },
    SET_MAP_TYPE: (state, val) => {
      state.mapType = val;
    },
    SET_2DMAP_STATUS: (state, val) => {
      state.loadMap2d = val;
    },
    SET_3DMAP_STATUS: (state, val) => {
      state.loadMap3d = val;
    },
  },
  actions: {
    setAppTitle({commit}, val) {
      commit('SET_APP_TITLE', val)
    },
    setMapType({commit}, val) {
      commit('SET_MAP_TYPE', val)
    },
    set2DMapStatus({commit},val){
      commit('SET_2DMAP_STATUS' , val);
    },
    set3DMapStatus({commit},val){
      commit('SET_3DMAP_STATUS' , val);
    }
  }
};

export default projectConfig