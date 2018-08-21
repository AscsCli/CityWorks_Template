import  *  as types from '../mutations-type'
const map3dConfig = {
  state: {
    map3dConfig:{},
    map3dLayers:{},
    centerTab3d:[]
  },
  getters: {
    get3dMapConfig: state => {
      return state.map3dConfig;
    },
    get3dMapLayers: state => {
      return state.map3dLayers;
    },
    getCenterTab3d: state => {
      return state.centerTab3d;
    }
  },
  mutations: {
    [types.SET_3DMAP_CONFIG]: (state, val) => {
      state.map3dConfig = val;
    },
    [types.SET_3DMAP_LAYERS]: (state, val) => {
      state.map3dLayers = val;
    },
    [types.SET_3DMAP_TABS]: (state, val) => {
      state.centerTab3d = val;
    },
  },
  actions: {
    set3dMapConfig({commit},val){
      commit(types.SET_3DMAP_CONFIG , val);
    },
    set3dMapLayers({commit},val){
      commit(types.SET_3DMAP_LAYERS , val);
    },
    setCenterTab3d({commit},val){
      commit(types.SET_3DMAP_TABS , val);
    },
  }
};

export default map3dConfig