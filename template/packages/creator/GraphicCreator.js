/**
 * Created by Administrator on 2018/6/11 0011.
 */

import * as esriLoader from 'esri-loader';
import {geometryCreator} from "./GeometryCreator";
import {symbolCreator} from "./SymbolCreator";

export const graphicCreator = {}


graphicCreator.createNullGraphic = function () {

  let graphic = null;
  esriLoader.dojoRequire(['esri/map',
      "esri/graphic",
      "esri/graphicsUtils"

    ],
    (Map,
     Graphic,
     graphicsUtils

    ) => {

        graphic = new Graphic();

    })
    return   graphic;
}

graphicCreator.createGraphic = function (geometry,symbol) {

  let graphic = null;
  esriLoader.dojoRequire(['esri/map',
      "esri/graphic",
      "esri/graphicsUtils"

    ],
    (Map,
     Graphic,
     graphicsUtils

    ) => {

      graphic = new Graphic(geometry,symbol);

    })
  return   graphic;
}

graphicCreator.createConfigGraphic = function (geometry,symbol) {

  let graphic = null;
  esriLoader.dojoRequire(['esri/map',
      "esri/graphic",
      "esri/graphicsUtils"

    ],
    (Map,
     Graphic,
     graphicsUtils

    ) => {

      let geometry  = geometryCreator.create(geometry);
      let symbol  = symbolCreator.create(symbol);
      graphic = new Graphic(geometry,symbol);

    })
    return   graphic;
}
