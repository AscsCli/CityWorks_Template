/**
 *
 * Created by Administrator on 2017/3/28 0028.
 */

import * as esriLoader from 'esri-loader';


export const symbolTool = {};


/**
 * 设置默认的symbol
 * @param type
 */
symbolTool.getSymbol = function (type) {

    let symbol = null;
    esriLoader.dojoRequire(['esri/map',
            "esri/symbols/SimpleFillSymbol",
            "esri/symbols/SimpleLineSymbol",
            "esri/symbols/SimpleMarkerSymbol",
            "esri/symbols/PictureMarkerSymbol",
            "esri/symbols/CartographicLineSymbol",
            "esri/Color",
        ],
        (Map,
         SimpleFillSymbol,
         SimpleLineSymbol,
         SimpleMarkerSymbol,
         PictureMarkerSymbol,
         CartographicLineSymbol,
         Color
        ) => {

           if(type == "polygon")
           {
               symbol = new esri.symbol.SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
                   new esri.symbol.SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
                       new esri.Color([255,0,0]), 2),new Color([255,255,0,0.8])
               );

           }
            else if(type == "gridPolygon")
            {
                symbol =
                    new esri.symbol.SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                        new esri.Color([209,132,164]),5);


            }
           else if(type == "polyline")
           {
               symbol = new esri.symbol.SimpleLineSymbol(
                   SimpleLineSymbol.STYLE_DASH,
                   new esri.Color([255,0,0]),
                   3
               );
           }
           else if(type == "point")
           {
               symbol  =  new esri.symbol.SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_SQUARE, 10,
                   new esri.symbol.SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                       new esri.Color([255,0,0]), 1),
                   new esri.Color([0,255,0,0.25]));
           }
        })
    return symbol;
}

symbolTool.getDrawSymbol = function (type) {

    let symbol = null;
    esriLoader.dojoRequire(['esri/map',
            "esri/symbols/SimpleFillSymbol",
            "esri/symbols/SimpleLineSymbol",
            "esri/symbols/SimpleMarkerSymbol",
            "esri/symbols/PictureMarkerSymbol",
            "esri/symbols/CartographicLineSymbol",
            "esri/Color",
        ],
        (Map,
         SimpleFillSymbol,
         SimpleLineSymbol,
         SimpleMarkerSymbol,
         PictureMarkerSymbol,
         CartographicLineSymbol,
         Color
        ) => {


            if(type == "polyline")
            {
                symbol = new esri.symbol.SimpleLineSymbol();
            }
            else if(type == "point")
            {
                symbol  =  new esri.symbol.SimpleMarkerSymbol();
            }
            else
            {
                symbol = new esri.symbol.SimpleFillSymbol();

            }
        })
    return symbol;
}


symbolTool.getBuffSymbol = function () {

    let symbol = null;
    esriLoader.dojoRequire(['esri/map',
            "esri/symbols/SimpleFillSymbol",
            "esri/symbols/SimpleLineSymbol",
            "esri/symbols/SimpleMarkerSymbol",
            "esri/symbols/PictureMarkerSymbol",
            "esri/symbols/CartographicLineSymbol",
            "esri/Color",
        ],
        (Map,
         SimpleFillSymbol,
         SimpleLineSymbol,
         SimpleMarkerSymbol,
         PictureMarkerSymbol,
         CartographicLineSymbol,
         Color
        ) => {


             symbol = new esri.symbol.SimpleFillSymbol(
                SimpleFillSymbol.STYLE_SOLID,
                new esri.symbol.SimpleLineSymbol(
                    SimpleLineSymbol.STYLE_SOLID,
                    new esri.Color([255,0,0,0.65]), 2
                ),
                new esri.Color([255,0,0,0.35])
            );

        })
    return symbol;

}

