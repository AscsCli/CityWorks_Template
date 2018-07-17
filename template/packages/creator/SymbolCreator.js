/**
 * Created by Administrator on 2018/6/11 0011.
 */


import * as esriLoader from 'esri-loader';


export const symbolCreator = {}



symbolCreator.create = function (config) {

  let symbol = null;
  esriLoader.dojoRequire([

      "esri/symbols/SimpleFillSymbol",
      "esri/symbols/SimpleLineSymbol",
      "esri/symbols/SimpleMarkerSymbol",
      "esri/symbols/PictureMarkerSymbol",
      "esri/symbols/PictureFillSymbol",
      "esri/symbols/TextSymbol",
      "esri/Color",
    ],
    (
      SimpleFillSymbol,
      SimpleLineSymbol,
      SimpleMarkerSymbol,
      PictureMarkerSymbol,
      PictureFillSymbol,
      TextSymbol,
      Color
    ) => {

      if(config.type == "esriSMS"){
          symbol  =  new esri.symbol.SimpleMarkerSymbol(config);
      }
      else if(config.type == "esriPMS"){

        symbol  = new esri.symbol.PictureMarkerSymbol(config);
      }
      else if(config.type == "esriSLS"){
        symbol = new esri.symbol.SimpleLineSymbol(config);
      }
      else if(config.type == "esriSFS"){

          symbol = new esri.symbol.SimpleFillSymbol(config);
      }else if(config.type == "esriPFS"){

        symbol = new esri.symbol.PictureFillSymbol(config);
      }else if(config.type == "esriTS"){
        symbol = new esri.symbol.TextSymbol(config);
      }
    })
    return symbol;

}


