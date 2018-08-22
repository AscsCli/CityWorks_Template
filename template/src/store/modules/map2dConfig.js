import  *  as types from '../mutations-type'
const projectConfig = {
  state: {
    mapId:"",
    map2dConfig:{},
    map2dLayers:{},
    centerTab2d:[]
  },
  getters: {
    get2dMapConfig: state => {
      return state.map2dConfig;
    },
    get2dMapLayers: state => {
      return state.map2dLayers;
    },
    getCenterTab2d: state => {
      return state.centerTab2d;
    }
  },
  mutations: {
    [types.SET_2DMAP_CONFIG]: (state, val) => {
      state.map2dConfig = val;
    },
    [types.SET_2DMAP_LAYERS]: (state, val) => {
      state.map2dLayers = val;
    },
    [types.SET_2DMAP_TABS]: (state, val) => {
      state.centerTab2d = val;
    },
  },
  actions: {
    set2dMapConfig({commit},val){
      commit(types.SET_2DMAP_CONFIG , val);
    },
    set2dMapLayers({commit},val){
      commit(types.SET_2DMAP_LAYERS , val);
    },
    setCenterTab2d({commit},val){
      commit(types.SET_2DMAP_TABS , val);
    }
  }
};

export default projectConfig