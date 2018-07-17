/**
 * Created by Administrator on 2017/5/2 0002.
 */
import * as esriLoader from 'esri-loader';
import {baseMapManagerCtrl} from '../map/BaseMapManagerCtrl';
import {configManagerCtrl} from '../configmanager/ConfigManagerCtrl';

export const renderLayerManager = {};


renderLayerManager.featureLayer = {};


renderLayerManager.hideAllFeatureLayer = function () {

    for(let key of Object.keys(renderLayerManager.featureLayer))
    {
        let featureLayer = renderLayerManager.featureLayer[key];
        featureLayer.setVisibility(false);
    }


}

renderLayerManager.hideFeatureLayer = function (layerName) {

    for(let key of Object.keys(renderLayerManager.featureLayer))
    {
        if(key != layerName)
        {
            let featureLayer = renderLayerManager.featureLayer[key];
            featureLayer.setVisibility(false);
        }

    }
}

renderLayerManager.showFeatureLayer = function (layerName) {

    let featureLayer =  renderLayerManager.featureLayer[layerName];
    featureLayer.setVisibility(true);
    featureLayer.refresh();

}


renderLayerManager.getFeatureLayer = function (mapId,layerName) {


    let layerConfig  = configManagerCtrl.getLayerConfigByName(layerName);
    let url = layerConfig.SERVICES_ADDR;
    return new Promise((resolve,reject)=>{

          let featureLayer = {}
          esriLoader.dojoRequire(
            [   'esri/map',
              "esri/layers/FeatureLayer",
            ],
            (
              Map,
              FeatureLayer
            ) => {

              let map = baseMapManagerCtrl.mapHash[mapId];
              let graphicsLayerIds = map.graphicsLayerIds;
              let bool  = false;
              for(let graphicId of graphicsLayerIds){
                let item = map.getLayer(graphicId);
                if(item.graID == url){
                   bool = true;
                   break;
                }
              }

              if(!bool)
              {
                featureLayer = new FeatureLayer(url, {
                  mode: FeatureLayer.MODE_SNAPSHOT,
                  outFields: ["*"],
                });
                featureLayer.graID = url;
                renderLayerManager.featureLayer[layerName] = featureLayer;
                map.addLayer(featureLayer);
                let updateEvent = featureLayer.on('update-end', function (event) {
                  updateEvent.remove();
                  resolve(featureLayer);

                })

              }
              else
              {
                featureLayer =  renderLayerManager.featureLayer[layerName];
                resolve(featureLayer);
              }

            })

  })
}

renderLayerManager.getNullFeatureLayer = function (mapId,layerName,type) {


  return new Promise((resolve,reject)=>{

    if(type == "point"){
      type = "esriGeometryPoint";
    }else if(type  == "polyline"){
      type = "esriGeometryPolyline";
    }else if(type == "polygon"){
      type = "esriGeometryPolygon";
    }

    let featureLayer = {}
    esriLoader.dojoRequire(
      [   'esri/map',
        "esri/layers/FeatureLayer",
      ],
      (
        Map,
        FeatureLayer
      ) => {

        let map = baseMapManagerCtrl.mapHash[mapId];
        let graphicsLayerIds = map.graphicsLayerIds;
        let bool  = false;
        for(let graphicId of graphicsLayerIds){
          let item = map.getLayer(graphicId);
          if(item.graID == "F-" + layerName){
            bool = true;
            break;
          }
        }
        console.log(bool,"bool");
        if(!bool)
        {
          let layerDefinition = {
            "geometryType": type,
            "fields": []
          }
          let featureCollection = {
            layerDefinition: layerDefinition,
            featureSet: null
          };
          featureLayer = new FeatureLayer(featureCollection, {
              showLabels: true
          });
          featureLayer.graID =  "F-" + layerName;
          renderLayerManager.featureLayer[layerName] = featureLayer;
          map.addLayer(featureLayer);
          resolve(featureLayer);

        }
        else
        {
          // featureLayer.clear();
          featureLayer =  renderLayerManager.featureLayer[layerName];
          featureLayer.clear();
          resolve(featureLayer);
        }

      })

  })

}
