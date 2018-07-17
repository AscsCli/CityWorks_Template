/**
 * Created by Administrator on 2017/5/11 0011.
 */

import {layerManager} from '../layermanager/LayerManagerCtrl'
import * as esriLoader from 'esri-loader';
import {baseMapManagerCtrl} from '../map/BaseMapManagerCtrl';
import {eventBus} from '../event/EventBus';
import {layerTypeEnum} from '../layermanager/LayerType';

export const mouseMoveTool = {}

mouseMoveTool.featureLayer = {};

mouseMoveTool.mapId = "";

mouseMoveTool.layerChangeFun = function (ilayerConfigs,layerType,isShow) {


  if(layerType == layerTypeEnum.ArcGISDynamicMapServiceLayer)
  {
    for(let ilayerConfig of ilayerConfigs)
    {
      refreshFeatureLayer(ilayerConfig,isShow);
    }

  }
}
/**
 *启动鼠标移动查询
 */
mouseMoveTool.startQuery = function (mapId) {

  mouseMoveTool.mapId = mapId;
  let visibleLayerArr =   layerManager.getVisibleLayer(mapId);
  buildFeatureLayers(visibleLayerArr);


  eventBus.bus.addListener(eventBus.LAYER_VISIBLE_CHANGE,mouseMoveTool.layerChangeFun)
}
/**
 *关闭鼠标移动查询
 */
mouseMoveTool.stopQuery = function () {

  for(let key of Object.keys(mouseMoveTool.featureLayer))
  {
    let featureLayer = mouseMoveTool.featureLayer[key];
    featureLayer.setVisibility(false);
  }
  eventBus.bus.removeListener(eventBus.LAYER_VISIBLE_CHANGE, mouseMoveTool.layerChangeFun);
  let map = baseMapManagerCtrl.mapHash[mouseMoveTool.mapId];
  map.infoWindow.hide();

}


function buildFeatureLayers(visibleLayerArr) {

    for(let ilayerConfig of visibleLayerArr)
    {
      let queryFlag = ilayerConfig.getLayerQueryFlag();
      if(queryFlag != "0")
      {
        refreshFeatureLayer(ilayerConfig,true);
      }
    }
}

function refreshFeatureLayer(ilayerConfig,visible) {

  let  featureLayer = {};
  esriLoader.dojoRequire(
    [   'esri/map',
      "esri/InfoTemplate",
      "esri/layers/FeatureLayer"
    ],
    (
      Map,
      InfoTemplate,
      FeatureLayer

    ) => {

      let map = baseMapManagerCtrl.mapHash[mouseMoveTool.mapId];
      if(mouseMoveTool.featureLayer[ilayerConfig.SERVICES_ADDR] == null && visible == true)
      {
        let mouseMoveArr = ilayerConfig.MOUSEMOVE_FIELD
        let infoTemplate = new InfoTemplate();
        infoTemplate.setTitle(ilayerConfig.DISPLAYLAYERNAME);
        let content = "";
        // content +=  "<b>" + "建筑物编码"+ "</b>${建筑物编码}<br/>";
        for(let item of mouseMoveArr)
        {

          content +=  "<b>" + item.FIELD_CNAME+ " : </b>${"+ item.FIELD_ENAME  +"}<br/>";
        }
        infoTemplate.setContent(content);

        featureLayer = new FeatureLayer(ilayerConfig.SERVICES_ADDR, {
          mode: FeatureLayer.MODE_AUTO,
          outFields: ["*"],
          infoTemplate: infoTemplate
        });
        mouseMoveTool.featureLayer[ilayerConfig.SERVICES_ADDR] = featureLayer;

        map.addLayer(featureLayer);
      }
      else if(mouseMoveTool.featureLayer[ilayerConfig.SERVICES_ADDR] != null && visible == true)
      {
        featureLayer =  mouseMoveTool.featureLayer[ilayerConfig.SERVICES_ADDR];
        featureLayer.setVisibility(true);
      }
      else if(mouseMoveTool.featureLayer[ilayerConfig.SERVICES_ADDR] != null && visible == false)
      {
        featureLayer =  mouseMoveTool.featureLayer[ilayerConfig.SERVICES_ADDR];
        featureLayer.setVisibility(false);
      }

    })
}


