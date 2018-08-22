import {layerManager} from "@cityworks/gismap3";
import { EventBus } from "../eventBus/eventBus"

export const leftListen2d = {
  handler:null,
  mounted(vm) {
    this.handler = left2dHandle.bind(vm);
    EventBus.bus.addListener("LEFT_DETAIL_2D", this.handler);
  },
  remove(){
    EventBus.bus.removeListener("LEFT_DETAIL_2D", this.handler);
  }
};

function left2dHandle(item) {
  let newItem = [];
  if(item.lists){
    for(let i in item.lists){
      newItem.push(item.lists[i].name)
    }
  }else{
    newItem.push(item.name)
  }
  layerManager.showLayerByName(this.mapId,newItem,!item.show);
};
