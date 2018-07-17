/**
 * Created by Administrator on 2017/4/25 0025.
 *
 *
 */


import * as esriLoader from 'esri-loader';
import {renderLayerManager} from './RenderLayerManager';
import {symbolCreator} from "../creator/SymbolCreator";


export const blendRenderTool = {};

blendRenderTool.setRender = function (mapId,layerName,newConfig) {


  esriLoader.dojoRequire(['esri/map',
      "esri/tasks/query",
      "esri/Color",
      "esri/graphic",
      "esri/graphicsUtils",
      "esri/tasks/QueryTask",
      "esri/dijit/PopupTemplate",
      "esri/symbols/SimpleMarkerSymbol",
      "esri/symbols/SimpleLineSymbol",
      "esri/symbols/SimpleFillSymbol",
      "esri/symbols/PictureMarkerSymbol",
      "esri/renderers/BlendRenderer",
      "esri/renderers/ClassBreaksRenderer",
      "esri/geometry/Point",
      "esri/geometry/Polyline",
      "esri/geometry/Polygon",

    ],
    (Map,
     Query,
     Color,
     Graphic,
     graphicsUtils,
     QueryTask,
     PopupTemplate,
     SimpleMarkerSymbol,
     SimpleLineSymbol,
     SimpleFillSymbol,
     PictureMarkerSymbol,
     BlendRenderer,
     ClassBreaksRenderer,
     Point,
     Polyline,
     Polygon
    ) => {


      let config = JSON.parse(JSON.stringify(newConfig));

      config.symbol = symbolCreator.create(config.symbol);
      for(let item of config.fields){
        item.color  = new Color(item.color);
      }
      let renderer = new BlendRenderer(config);

      renderer.backgroundFillSymbol = new SimpleFillSymbol().setColor(null).setOutline(new SimpleLineSymbol().setWidth(1).setColor(new Color([
        200, 200, 200
      ])));
      renderer.setVisualVariables(config.sizeFields);
      // let template = new PopupTemplate(popupFields);

      // let renderer = blendRenderTool.createRender(config);

      renderLayerManager.getFeatureLayer(mapId,layerName).then( (featureLayer)=> {

        featureLayer.setRenderer(renderer);
        renderLayerManager.showFeatureLayer(layerName);

      });
    })

}








blendRenderTool.setRenderByGraphicLayer = function (mapId,layerName,newConfig,features) {


  esriLoader.dojoRequire(['esri/map',
      "esri/tasks/query",
      "esri/Color",
      "esri/graphic",
      "esri/graphicsUtils",
      "esri/tasks/QueryTask",
      "esri/dijit/PopupTemplate",
      "esri/symbols/SimpleMarkerSymbol",
      "esri/symbols/SimpleLineSymbol",
      "esri/symbols/SimpleFillSymbol",
      "esri/symbols/PictureMarkerSymbol",
      "esri/renderers/BlendRenderer",
      "esri/renderers/ClassBreaksRenderer",
      "esri/geometry/Point",
      "esri/geometry/Polyline",
      "esri/geometry/Polygon",

    ],
    (Map,
     Query,
     Color,
     Graphic,
     graphicsUtils,
     QueryTask,
     PopupTemplate,
     SimpleMarkerSymbol,
     SimpleLineSymbol,
     SimpleFillSymbol,
     PictureMarkerSymbol,
     BlendRenderer,
     ClassBreaksRenderer,
     Point,
     Polyline,
     Polygon
    ) => {

      let config = JSON.parse(JSON.stringify(newConfig));

      config.symbol = symbolCreator.create(config.symbol);
      for(let item of config.fields){
        item.color  = new Color(item.color);
      }
      let renderer = new BlendRenderer(config);

      renderer.backgroundFillSymbol = new SimpleFillSymbol().setColor(null).setOutline(new SimpleLineSymbol().setWidth(1).setColor(new Color([
        200, 200, 200
      ])));
      renderer.setVisualVariables(config.sizeFields);
      // let template = new PopupTemplate(popupFields);

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





