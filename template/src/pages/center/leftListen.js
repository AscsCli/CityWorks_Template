import {layerManager} from "@cityworks/gismap3";
import { EventBus } from "../../eventBus/eventBus"
export const leftListen = {
  mounted() {
    EventBus.bus.addListener("LEFT_DETAIL", (item) => {
        let newItem = []
        if(item.lists){
          for(let i in item.lists){
            newItem.push(item.lists[i].name)
          }
        }else{
          newItem.push(item.name)
        }
        layerManager.showLayerByName(this.mapId,newItem,!item.show)
      })
  },
}
