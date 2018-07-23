import { EventBus } from '../../eventBus/eventBus';
import { eventBus } from "@cityworks/gismap3";
import {measureTool} from "@cityworks/gismap3";
import {layerManager} from "@cityworks/gismap3";
import {baseMapManagerCtrl} from "@cityworks/gismap3";
import {buffTool}  from  "@cityworks/gismap3";
import {queryTool} from  "@cityworks/gismap3";
import {configLoadTool} from  "@cityworks/gismap3";
let isShowEye = true;
export const headIconListen = {
  mounted() {
    configLoadTool.load("json");
    EventBus.bus.addListener("HEAD_ICON_2D", (item) => {
      switch (item.title) {
        case '测量':
          measureTool.measure(this.mapId, 'POLYLINE');
          break;
        case '清除':
          layerManager.clearAllGraphicLayer();
          break;

        case '初始化':
          baseMapManagerCtrl.setMapInitExtent(this.mapId);
          break;

        case '鹰眼':
          if(isShowEye){
            isShowEye = false
            baseMapManagerCtrl.showOverView(this.mapId,true);
          }else{
            isShowEye = true
            baseMapManagerCtrl.showOverView(this.mapId,false);
          }
          break;
        case '缓冲分析':
          buffTool.buffer(this.mapId,"POLYGON",100).then( (graphic)=>{
            queryTool.doSpatialQuery(this.mapId,queryTool.VISIBLE,graphic.geometry,function(result){
                 alert("我是缓冲结果集",result);
            })
          })
          break;

        default:
          break;
      }
    })

  

  },
}
