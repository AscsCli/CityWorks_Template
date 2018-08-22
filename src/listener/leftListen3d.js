import {EventBus} from "../eventBus/eventBus";
import {cw5} from '@cityworks/cw3d-cm/index';

export const leftListen3d = {
  handler:null,
  mounted(vm) {
    this.handler = left3dHandle.bind(vm);
    EventBus.bus.addListener("LEFT_DETAIL_3D", this.handler)
  },
  remove() {
    EventBus.bus.removeListener("LEFT_DETAIL_3D", this.handler);
  }
};

function left3dHandle(item) {
  if(item.lists){
    for(let layerName of item.lists){
      
      if(item.show === true){
        cw5.sceneLayerCtrl.showLayer(layerName);
      }else{
        cw5.sceneLayerCtrl.hideLayer(layerName);
      }
    }
  }else{
    if(item.show === true){
      cw5.sceneLayerCtrl.showTerrain();
    }else{
      cw5.sceneLayerCtrl.hideTerrain();
    }
  }
}
