/**
 * Created by Administrator on 2017/4/28 0028.
 */


import * as esriLoader from 'esri-loader';
import {renderLayerManager} from './RenderLayerManager';

export const heatRenderTool = {};


heatRenderTool.setRender = function (mapId,layerName,config) {

  esriLoader.dojoRequire(
    [   'esri/map',
      "esri/layers/FeatureLayer",
      "esri/symbols/SimpleFillSymbol",
      "esri/symbols/SimpleLineSymbol",
      "esri/renderers/ClassBreaksRenderer",
      "esri/renderers/HeatmapRenderer",
      "esri/Color"

    ],
    (
      Map,
      FeatureLayer,
      SimpleFillSymbol,
      SimpleLineSymbol,
      ClassBreaksRenderer,
      HeatmapRenderer,
      Color

    ) => {


      let  heatmapRenderer = new HeatmapRenderer(config);
    
      renderLayerManager.getFeatureLayer(mapId,layerName).then( (featureLayer)=> {

        featureLayer.setRenderer(heatmapRenderer);
        renderLayerManager.showFeatureLayer(layerName);

      });

    });


}



heatRenderTool.setRenderByGraphicLayer = function (mapId,layerName,config,features) {


  esriLoader.dojoRequire(
    [   'esri/map',
      "esri/layers/FeatureLayer",
      "esri/symbols/SimpleFillSymbol",
      "esri/symbols/SimpleLineSymbol",
      "esri/renderers/ClassBreaksRenderer",
      "esri/renderers/HeatmapRenderer",
      "esri/Color"

    ],
    (
      Map,
      FeatureLayer,
      SimpleFillSymbol,
      SimpleLineSymbol,
      ClassBreaksRenderer,
      HeatmapRenderer,
      Color

    ) => {


      let  heatmapRenderer = new HeatmapRenderer(config);
      let geometryType = features[0].geometry.type;

      renderLayerManager.getNullFeatureLayer(mapId,layerName,geometryType).then( (featureLayer)=> {

        featureLayer.setVisibility(false);
        for(let gra of features){

          featureLayer.add(gra);
        }
        featureLayer.setRenderer(heatmapRenderer);
        featureLayer.redraw();
        featureLayer.setVisibility(true);
      });

    });


}
