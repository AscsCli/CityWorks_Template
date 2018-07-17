/**
 * Created by Administrator on 2018/6/4 0004.
 */

import {drawManagerCtrl} from "../drawManager/DrawManagerCtrl"
import * as esriLoader from 'esri-loader';
import {eventBus} from  '../event/EventBus';
import {DissectionController} from "./Dissection";
import {symbolTool} from "../symbolTool/SymbolTool";
import {configManagerCtrl} from "../configmanager/ConfigManagerCtrl";
import {layerManager}  from "../layermanager/LayerManagerCtrl";
import {dissectionShow} from "./DissectionShow";
import {baseMapManagerCtrl} from "../map/BaseMapManagerCtrl"


export const pipeDissectionCtrl = {}


/**
 *
 * @param mapId  地图ID
 * @param canvasId  canvas ID
 * @param layerNames  做管线横断面的图层组
 */
pipeDissectionCtrl.dissection = function (mapId,canvasId,layerNames) {

  //清除相交点
  let graphicLayer = layerManager.setGraphicLayer(mapId ,"dissectionCtrl");
  graphicLayer.clear();

  DissectionController.mapId = mapId;

  //绘制线咯
  let layerName = 'dissection';
  drawManagerCtrl.activeTool(mapId,"POLYLINE",layerName,symbolTool.getSymbol('polyline'));

  let listeners = eventBus.bus.getListeners('draw-' + layerName);
  if(listeners.length == 0)
  {

    eventBus.bus.addOnceListener('draw-' + layerName , function(a) {
      if(drawManagerCtrl.drawName == layerName && drawManagerCtrl.drawMapId == mapId)
      {
        esriLoader.dojoRequire([
            'esri/map',
            "esri/graphic",
            "esri/SpatialReference",
            'esri/tasks/GeometryService',
            'esri/tasks/BufferParameters',
            'esri/tasks/ProjectParameters',
            'esri/geometry/webMercatorUtils',
          ],
          (Map,
           Graphic,
           SpatialReference,
           GeometryService,
           BufferParameters,
           ProjectParameters,
           webMercatorUtils
          ) => {

            let graphicLayer = layerManager.setGraphicLayer(DissectionController.mapId ,"dissectionCtrl");
            graphicLayer.clear();
            let geometryA = drawManagerCtrl.drawGraphic;
            let promiseArr = [];


            for(let layerName of layerNames){
              let ilayeConfig = configManagerCtrl.getLayerConfigByName(layerName);
              var layer  = layerManager.getAgsLayerFromMapWithUrl(baseMapManagerCtrl.mapHash[mapId],ilayeConfig.MAPSERVICES);
              //找到相交点
              let promise  = DissectionController.pipe(new Graphic(geometryA),ilayeConfig.SERVICES_ADDR);

              promiseArr.push(promise);
            }


            let p = Promise.all(promiseArr)
            p.then((res) => {

              pipeDissectionCtrl.handleData(canvasId,res);
            })

          })
      }
    });
  }
}


/**
 * 清空数据
 * @param mapId
 */
pipeDissectionCtrl.clear = function (mapId) {

  let graphicLayer = layerManager.setGraphicLayer(mapId ,"dissectionCtrl");
  graphicLayer.clear();

  let drawgraphicLayer = layerManager.setGraphicLayer(mapId ,"draw-dissection");
  drawgraphicLayer.clear();

}

/**
 * 交点数据转 dissectionShow数据
 * @param res
 */
pipeDissectionCtrl.handleData = function (canvasId,res) {

  let line = {}
  let newArr = []
  for(let item of res)
  {
     line = item.line;
     newArr = newArr.concat(item.pipes);
  }

  newArr.sort(sortBy("start"));

  let color = ["#ff544b","#3791ff","#e517ff"];
  let nameMap = new Map();

  let i = 0;
  for(let item of newArr){

     if(!nameMap.has(item.name)){

       if(i > color.length){
         item.color = color[i];
         nameMap.set(item.name,color[i]);
       }else{
         item.color = color[i];
         i = i + 1;
         nameMap.set(item.name,color[i]);
       }
     }else{
       item.color =  nameMap.get(item.name);
     }
  }

  let data = {
    line:line,
    pipes:newArr
  }
  console.log(data);
  dissectionShow.drawPipe(canvasId,data)

}

function sortBy(field) {
  return function(a,b) {
    return a[field] - b[field];
  }
}
