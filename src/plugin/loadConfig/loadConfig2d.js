import store from '../store/index';
import projectConfigState from "../store/modules/projectConfig";
import map2dConfig from "../store/modules/map2dConfig";

import *  as types from '../store/mutations-type'
import axios from "axios";

//用于将配置项加入到vuex中

export const loadConfig = {};


function getRouteJson(url) {
  
  return new Promise((resolve, reject) => {
    axios.get(url).then((res) => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}

async function setConfig() {

  /********************************/
  //加载2d配置项
  if(store.projectConfig.loadMap2d){
    let map2DConfigJson = await getRouteJson("./static/config/2d/map2dConfig.json");
    let map2dLayers = await getRouteJson("./static/config/2d/map2dLayers.json");
    
    let centerTab2d = await getRouteJson("./static/config/2d/centerTab2d.json");
    
    try {
      projectConfigState.actions.set2DMapConfig(store.commit(types.SET_2DMAP_CONFIG, map2DConfigJson.data));
    }
    catch (e) {
    
    }
    
    try{
      map2dConfig.actions.set2dMapConfig(store.commit(types.SET_2DMAP_LAYERS, map2dLayers.data.LAYERS));
    }catch (e) {
    
    }
    
    try{
      map2dConfig.actions.setCenterTab2d(store.commit(types.SET_2DMAP_TABS, centerTab2d.data.data));
    }catch (e) {
    
    }
  }
  
}


loadConfig.init = setConfig;