import  *  as types from '../mutations-type'
const projectConfig = {
  state: {
    title:"",
    mapType: "",
    loadMap2d: true,
    loadMap3d: true,
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
    [types.SET_APP_TITLE]: (state,val) => {
      state.title = val;
    },
    [types.SET_MAP_TYPE]: (state, val) => {
      state.mapType = val;
    },
    [types.SET_2DMAP_STATUS]: (state, val) => {
      state.loadMap2d = val;
    },
    [types.SET_3DMAP_STATUS]: (state, val) => {
      state.loadMap3d = val;
    },
  },
  actions: {
    setAppTitle({commit}, val) {
      commit(types.SET_APP_TITLE, val)
    },
    setMapType({commit}, val) {
      commit(types.SET_MAP_TYPE, val)
    },
    set2DMapStatus({commit},val){
      commit(types.SET_2DMAP_STATUS , val);
    },
    set3DMapStatus({commit},val){
      commit(types.SET_3DMAP_STATUS , val);
    },
  }
};

export default projectConfig