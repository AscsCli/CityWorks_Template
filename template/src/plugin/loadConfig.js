import store from '../store/index';
import projectConfigState from "../store/modules/projectConfig";
import map2dConfig from "../store/modules/map2dConfig";
import map3dConfig from "../store/modules/map3dConfig";

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
  
  let projectJson = await getRouteJson("./static/config/projectConfig.json");
  let projectConfig = projectJson.data;
  
  try {
    projectConfigState.actions.setAppTitle(store.commit(types.SET_APP_TITLE, projectConfig.title));
  }
  catch (e) {
  
  }
  
  try{
    projectConfigState.actions.setMapType(store.commit(types.SET_MAP_TYPE, projectConfig.firstLoad));
   
  }catch (e) {
    
  }
  
  try{
    projectConfigState.actions.set2DMapStatus(store.commit(types.SET_2DMAP_STATUS, projectConfig.loadMap2d));
    
  }catch (e) {
    
  }
  
  try{
    projectConfigState.actions.set3DMapStatus(store.commit(types.SET_3DMAP_STATUS, projectConfig.loadMap3d));
  }catch (e) {
    
  }
  /********************************/
  //加载2d配置项
  if(projectConfig.loadMap2d){
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
  
  /********************************/
  //加载3d配置项
  if(projectConfig.loadMap3d){
    let map3dConfigJson = await getRouteJson("./static/config/3d/map3dConfig.json");
    let map3dLayers = await getRouteJson("./static/config/3d/map3dLayers.json");
    let centerTab3d = await getRouteJson("./static/config/3d/centerTab3d.json");
    
    try {
        window.map3dConfig = map3dConfigJson.data.map3dConfig;
        map3dConfig.actions.set3dMapConfig(store.commit(types.SET_3DMAP_CONFIG, map3dConfigJson.data.map3dConfig));
    }
    catch (e) {

    }
    try{
      map3dConfig.actions.set3dMapConfig(store.commit(types.SET_3DMAP_LAYERS, JSON.parse(JSON.stringify(map3dLayers.data.layerList))));
    }catch (e) {
    
    }
    try{
      map3dConfig.actions.set3dMapConfig(store.commit(types.SET_3DMAP_TABS, JSON.parse(JSON.stringify(centerTab3d.data.data))));
    }catch (e) {
    
    }
  }
}


loadConfig.init = setConfig;