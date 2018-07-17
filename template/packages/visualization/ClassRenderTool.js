/**
 * Created by Administrator on 2017/4/27 0027.
 */


import * as esriLoader from 'esri-loader';
import {renderLayerManager} from './RenderLayerManager';
export const classRenderTool = {};





classRenderTool.setRender = function (mapId,layerName,config) {

  esriLoader.dojoRequire(
    [   'esri/map',
      "esri/layers/FeatureLayer",
      "esri/symbols/SimpleFillSymbol",
      "esri/renderers/ClassBreaksRenderer",
      "esri/Color"

    ],
    (
      Map,
      FeatureLayer,
      SimpleFillSymbol,
      ClassBreaksRenderer,
      Color

    ) => {


      let renderer = new ClassBreaksRenderer(config);


      renderLayerManager.getFeatureLayer(mapId,layerName).then( (featureLayer)=> {

        featureLayer.setRenderer(renderer);
        renderLayerManager.showFeatureLayer(layerName);


      });

    })


}



classRenderTool.setRenderByGraphicLayer = function (mapId,layerName,config,features) {

  esriLoader.dojoRequire(
    [   'esri/map',
      "esri/layers/FeatureLayer",
      "esri/symbols/SimpleFillSymbol",
      "esri/renderers/ClassBreaksRenderer",
      "esri/Color"

    ],
    (
      Map,
      FeatureLayer,
      SimpleFillSymbol,
      ClassBreaksRenderer,
      Color

    ) => {



      let  renderer = new ClassBreaksRenderer(config);

      let geometryType = features[0].geometry.type;


      renderLayerManager.getNullFeatureLayer(mapId,layerName,geometryType).then( (featureLayer)=> {

        featureLayer.setVisibility(false);
        for(let gra of features){
          featureLayer.add(gra);
        }
        featureLayer.setRenderer(renderer);
        featureLayer.redraw();

        featureLayer.setVisibility(true);
      });

    })



}



