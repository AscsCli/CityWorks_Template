/**
 * Created by Administrator on 2018/5/9 0009.
 */

import * as esriLoader from 'esri-loader';
import {eventBus} from '../event/EventBus';
import {drawManagerCtrl} from '../drawManager/DrawManagerCtrl';
import {baseMapManagerCtrl} from './BaseMapManagerCtrl';
import {cityWorkLinkageCtrl} from '../cityWorkLinkAge/CityWorkLinkageCtrl';

import {gaodeTool} from '../thirdPartMap/gaode/GaodeTool';
import {tdtTool} from '../thirdPartMap/tiandi/TDTTool';
import {mapBoxLayer} from '../thirdPartMap/mapbox/MapBoxLayer';
import {loadScriptTool} from "../tool/LoadScriptTool"





export const baseMap_bussiness_ctrl = {};



//mapConfig



baseMap_bussiness_ctrl.init = function (config) {

  try{
      if (!esriLoader.isLoaded()) {
        // no, lazy load it the ArcGIS API before using its classes
        esriLoader.bootstrap((err) => {
          if (err) {
  //                            console.error(err);
          }
          // once it's loaded, create the map
          baseMap_bussiness_ctrl.createMap(config);
        }, {
          // use a specific version instead of latest 4.x
          url: loadScriptTool.arcgisUrl

        });
      } else {
        // ArcGIS API is already loaded, just create the map
        baseMap_bussiness_ctrl.createMap(config);
      }
    }
    catch (e){

    }
}


baseMap_bussiness_ctrl.createMap = function(config){


  // first, we use Dojo's loader to require the map class
  esriLoader.dojoRequire(['esri/map',
      'esri/layers/ArcGISTiledMapServiceLayer',
      'esri/layers/ArcGISDynamicMapServiceLayer',
      'esri/layers/ArcGISImageServiceLayer',
      "esri/dijit/OverviewMap"
    ],
    (Map,
     ArcGISTiledMapServiceLayer,
     ArcGISDynamicMapServiceLayer,
     ArcGISImageServiceLayer,
     OverviewMap) => {
      // create map with the given options at a DOM node w/ id 'mapNode'
      let map = new esri.Map(config.mapId, {

        logo : false
      });
      baseMapManagerCtrl.initExtent[config.mapId] = config.extent;
      baseMapManagerCtrl.config[config.mapId] = config;

      if(config.mapType == 'tiled')
      {
        let titleLayer = new esri.layers.ArcGISTiledMapServiceLayer(config.url);
        //设置地图为0
        titleLayer['priority'] = 0;
        map.addLayer(titleLayer);
        map.on("load", initFunctionality);
      }
      else if(config.mapType == 'dynamic')
      {

        let dynamicLayer = new esri.layers.ArcGISDynamicMapServiceLayer(config.url)
        map.addLayer(dynamicLayer)
        if(config.visibleLayer.length > 0)
        {
          dynamicLayer.setVisibleLayers(config.visibleLayer)
        }
        map.on("load", initFunctionality);
      }
      else if(config.mapType == 'image')
      {

        let imageLayer = new esri.layers.ArcGISImageServiceLayer(config.url)
        imageLayer['priority'] = 0;
        map.addLayer(imageLayer);
        map.on("load", initFunctionality);
      }
      else if(config.mapType == 'gaode')
      {
        map.on("load", initFunctionality);
        if(!config.layerType || config.layerType == ""){

          gaodeTool.addLayer(gaodeTool.layerType.gaodeLayer,map);

        }else{

          gaodeTool.addLayer(config.layerType,map);
        }


      }
      else if(config.mapType == 'tiandi')
      {
        map.on("load", initFunctionality);
        if(!config.layerType || config.layerType == ""){

          tdtTool.addLayer(tdtTool.layerType.tdtLayer,map);

        }else{

          tdtTool.addLayer(config.layerType,map);
        }
      }
      else if(config.mapType == 'mapbox')
      {
        map.on("load", initFunctionality);
        if(!config.layerType || config.layerType == ""){

          mapBoxLayer.addLayer(mapBoxLayer.layerType.outdoors,map);

        }else{

          mapBoxLayer.addLayer(config.layerType,map);
        }

      }

      if(config.mapType == 'tiled' || config.mapType == 'image'){
        let overviewMapDijit = new esri.dijit.OverviewMap({
          map: map,
          visible: false,
          attachTo: "bottom-right",
        });
        "_controllerDiv" in overviewMapDijit ? overviewMapDijit["_controllerDiv"].style.display = "none" : null; //隐藏小箭头
        overviewMapDijit.startup();

        baseMapManagerCtrl.overViewHash[config.mapId] = overviewMapDijit;
      }
      //配置鹰眼图



//                    document.getElementById(this.mapId).style.width = "100%";
//                    document.getElementById(this.mapId).style.height = "100%";

      map.on('extent-change',(evt) => {
         // console.log(evt);
      });

      map.on('click',(evt) => {
         console.log(evt.mapPoint);
      });

      function initFunctionality ()
      {

        baseMapManagerCtrl.mapHash[config.mapId] = map;
        baseMapManagerCtrl.isLoad[config.mapId] = true;
        drawManagerCtrl.init(config.mapId);
        eventBus.bus.emit(eventBus.MAP_IS_LOAD,config.mapId);
        baseMapManagerCtrl.setMapInitExtent(config.mapId);
        cityWorkLinkageCtrl.addTwoCoordinate(config.mapId,map.extent,baseMapManagerCtrl.mapHash,[]);

      }


    });
}



