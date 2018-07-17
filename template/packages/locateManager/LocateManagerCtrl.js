/**
 *
 * Created by Administrator on 2017/3/28 0028.
 */

import  {baseMapManagerCtrl}  from '../map/BaseMapManagerCtrl';
import {configManagerCtrl} from '../configmanager/ConfigManagerCtrl';
import {layerManager} from '../layermanager/LayerManagerCtrl';
import * as esriLoader from 'esri-loader';
import { symbolTool } from '../symbolTool/SymbolTool'

export const locateManagerCtrl = {};


locateManagerCtrl.poiXmlLoadData = [];
locateManagerCtrl.scale = 0;
locateManagerCtrl.level = 11;

/**
 * 只对某个图层做空间查询 并且定位
 *
 * @param mapId
 * @param layerName
 * @param expresstion
 */
locateManagerCtrl.zoomByExpresstion = function (mapId,layerName,expresstion,symbol = '') {

  return new Promise((resolve, reject) => {

    esriLoader.dojoRequire(['esri/map',
            "esri/tasks/query",
            "esri/graphic",
            "esri/graphicsUtils",
            "esri/tasks/QueryTask",
            "esri/geometry/Point",
            "esri/geometry/Polyline",
            "esri/geometry/Polygon",

        ],
        (Map,
         Query,
         Graphic,
         graphicsUtils,
         QueryTask,
         Point,
         Polyline,
         Polygon
        ) => {
                 let graphicLayer = layerManager.setGraphicLayer(mapId,layerName);
                 graphicLayer.clear();

                 let map = baseMapManagerCtrl.mapHash[mapId];
                 let layerConfig = configManagerCtrl.getLayerConfigByName(layerName);
                 let queryTask = new esri.tasks.QueryTask(layerConfig.SERVICES_ADDR);
                 let query  = new esri.tasks.Query();
                 query.where  = expresstion;
                 query.returnGeometry = true;
                 query.outSpatialReference = map.spatialReference;
                 queryTask.execute(query,(idResults) => {


                     idResults.features.forEach(function (value) {

                         let geometry  = value.geometry;
                         let gra = null;
                         let geometryType = geometry.type;
                         gra = new esri.Graphic(geometry);
                         if(symbol != null){
                           if(!symbol)
                           {
                             gra.setSymbol(symbolTool.getSymbol(geometryType));
                           }
                           else
                           {
                             gra.setSymbol(geometry,symbol);
                           }
                         }


                         graphicLayer.add(gra);

                     })
                     if(graphicLayer.graphics.length > 1){

                       locateManagerCtrl.zoomPolygon(mapId,graphicLayer.graphics);

                     }else if(graphicLayer.graphics.length == 1){
                        if(graphicLayer.graphics[0].geometry.type == "point"){
                            locateManagerCtrl.zoomPoint(mapId,graphicLayer.graphics[0]);
                        }
                        else{
                          locateManagerCtrl.zoomPolygon(mapId,graphicLayer.graphics);
                        }
                     }
                     resolve(idResults);

                 })
        });
  })
}





locateManagerCtrl.zoomPoint = function (mapId,graphic) {

  let map = baseMapManagerCtrl.mapHash[mapId];
  if(map.getLevel() ==  -1)
  {
    if(locateManagerCtrl.scale != 0)
    {
      map.centerAt(graphic.geometry);
    }

  }
  else
  {
    map.centerAndZoom(graphic.geometry,locateManagerCtrl.level);
  }
}


locateManagerCtrl.zoomPolygon = function (mapId,graphics) {

  esriLoader.dojoRequire([

      "esri/graphicsUtils",
    ],
    (
     graphicsUtils

    ) => {

      let map = baseMapManagerCtrl.mapHash[mapId];
      let extent  = graphicsUtils.graphicsExtent(graphics);
      extent.spatialReference = map.spatialReference;
      map.setExtent(extent);

    })


}




/**
 * 根据graphic定位
 * @param layerName
 * @param graphic
 * @param symbol
 */
locateManagerCtrl.zoomByGraphic = function (mapId,layerName,graphic,symbol = '') {
    esriLoader.dojoRequire(['esri/map',
            "esri/tasks/query",
            "esri/graphic",
            "esri/graphicsUtils",
            "esri/tasks/QueryTask",
            "esri/geometry/Point",
            "esri/geometry/Polyline",
            "esri/geometry/Polygon",

        ],
        (Map,
         Query,
         Graphic,
         graphicsUtils,
         QueryTask,
         Point,
         Polyline,
         Polygon
        ) => {
            // debugger;
            let graphicLayer = layerManager.setGraphicLayer(mapId,layerName);
            let geometryType = graphic.geometry.type;
            graphicLayer.clear();
            let map = baseMapManagerCtrl.mapHash[mapId];
            graphic.spatialReference = map.spatialReference;
            if(symbol == '')
            {
                graphic.setSymbol(symbolTool.getSymbol(geometryType));
            }
            else
            {
                graphic.setSymbol(symbol);
            }
            graphicLayer.add(graphic);
            if(geometryType == 'point')
            {
                locateManagerCtrl.zoomPoint(mapId,graphic);

            }else{

               locateManagerCtrl.zoomPolygon(mapId,graphicLayer.graphics);
            }
        });
}

locateManagerCtrl.zoomByXY = function (mapId,layerName,x,y,symbol = '') {
    esriLoader.dojoRequire(['esri/map',
            "esri/tasks/query",
            "esri/graphic",
            "esri/graphicsUtils",
            "esri/tasks/QueryTask",
            "esri/geometry/Point",
            "esri/geometry/Polyline",
            "esri/geometry/Polygon",

        ],
        (Map,
         Query,
         Graphic,
         graphicsUtils,
         QueryTask,
         Point,
         Polyline,
         Polygon
        ) => {
            let map = baseMapManagerCtrl.mapHash[mapId];
            let graphicLayer = layerManager.setGraphicLayer(mapId,layerName);
            let point  = new Point(x,y,map.spatialReference);
            let graphic = new Graphic(point);
            graphicLayer.clear();

            if(symbol == '')
            {
                graphic.setSymbol(symbolTool.getSymbol('point'));
            }
            else
            {
                graphic.setSymbol(symbol);
            }
            graphicLayer.add(graphic);
            locateManagerCtrl.zoomPoint(mapId,graphic);


        });


}


/**
 * 查询graphic
 * @param mapId
 * @param layerName
 * @param expresstion
 * @param geometry
 * @returns {Promise}
 */
locateManagerCtrl.queryGraphics = function (mapId,layerName,expresstion = "",geometry = null) {

  return new Promise((resolve, reject) => {
    esriLoader.dojoRequire(['esri/map',
        "esri/tasks/query",
        "esri/graphic",
        "esri/graphicsUtils",
        "esri/tasks/QueryTask",
        "esri/geometry/Point",
        "esri/geometry/Polyline",
        "esri/geometry/Polygon",

      ],
      (Map,
       Query,
       Graphic,
       graphicsUtils,
       QueryTask,
       Point,
       Polyline,
       Polygon) => {

        let map = baseMapManagerCtrl.mapHash[mapId];
        let layerConfig = configManagerCtrl.getLayerConfigByName(layerName);
        let queryTask = new esri.tasks.QueryTask(layerConfig.SERVICES_ADDR);
        let query = new esri.tasks.Query();
        if(expresstion != ""){
          query.where = expresstion;
        }
        if(geometry != null) {
          query.geometry = geometry;
        }
        query.returnGeometry = true;
        query.outSpatialReference = map.spatialReference;
        query.outFields = ['*'];
        queryTask.execute(query, (idResults) => {

            resolve(idResults);

        })
      });
  })
}

/**
 * 使用findTask查询
 * @param url  图层集合的地址   例如：http://11.23.2.101/arcgis/rest/services/POI/MapServer
 * @param layerIds  查询的图层id    例如：[0,1,2,3,4,5]
 * @param searchFields 查询的字段名称  例如:['名称']
 * @param searchText  查询的内容   例如：'福州市自来水总公司仓山营业管线所'
 *
 * http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer/
 */
locateManagerCtrl.findTask = function (url, layerIds, searchFields, searchText) {
    return new Promise((resolve, reject) => {
        esriLoader.dojoRequire([
            "esri/tasks/FindTask", "esri/tasks/FindParameters"
        ], function (FindTask, FindParameters) {
            var find = new FindTask(url);
            var params = new FindParameters();
            params.layerIds = layerIds;
            params.searchFields = searchFields;
            params.searchText = searchText;//查找的“属性值”
            params.returnGeometry = true;
            //LayerDefinition的设置语句和Query中的Where语句一样
            find.execute(params, showResults => {
                resolve(showResults)
            }, error => {
                reject(error);
            });
        });
    })
}
/**
 * 使用identifyTask查询
 * @param mapId
 * @param url  图层集合的地址   例如：http://11.23.2.101/arcgis/rest/services/POI/MapServer
 * @param layerIds   查询的图层id    例如：[0,1,2,3,4,5]
 * @param geometry
 * @returns {Promise}
 */
locateManagerCtrl.identifyTask = function (mapId, url, layerIds, geometry) {
    return new Promise((resolve, reject) => {
        esriLoader.dojoRequire([
            "esri/tasks/IdentifyTask",
            "esri/tasks/IdentifyParameters"
        ], function (IdentifyTask, IdentifyParameters) {
            let map = baseMapManagerCtrl.mapHash[mapId];
            var identify = new IdentifyTask(url);
            let identifyParams = new IdentifyParameters();
            identifyParams.layerIds = layerIds;
            identifyParams.geometry = geometry;
            identifyParams.mapExtent = map.extent;
            identifyParams.tolerance = 3;//
            identifyParams.returnGeometry = true;
            identifyParams.layerOption = IdentifyParameters.LAYER_OPTION_ALL;
            // identify.where = "BZMC = '龙岗区坂田街道纪律检查工作委员会'"
            identify.execute(identifyParams, response => {
                resolve(response)
            }, error => {
                reject(error)
            });
        });
    })

}
