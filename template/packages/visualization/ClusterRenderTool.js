
import {configManagerCtrl} from '../configmanager/ConfigManagerCtrl';
import * as esriLoader from 'esri-loader';
import {baseMapManagerCtrl} from '../map/BaseMapManagerCtrl';
import {clusterLayer} from "./ClusterLayer";


export const clusterRenderTool = {}

clusterRenderTool.clusterLayerHash = {};

clusterRenderTool.hideAllFeatureLayer = function () {
    for(let key of Object.keys(clusterRenderTool.clusterLayerHash))
    {
        let featureLayer = clusterRenderTool.clusterLayerHash[key];
        featureLayer.setVisibility(false);
    }
}


clusterRenderTool.setRender  = function (mapId,layerName,config) {

    esriLoader.dojoRequire(['esri/map',
            "esri/tasks/query",
            "esri/graphic",
            "esri/graphicsUtils",
            "esri/tasks/QueryTask",
            "esri/dijit/PopupTemplate",
            "esri/symbols/SimpleMarkerSymbol",
            "esri/symbols/SimpleFillSymbol",
            "esri/symbols/PictureMarkerSymbol",
            "esri/renderers/ClassBreaksRenderer",

            "esri/geometry/Point",
            "esri/geometry/Polyline",
            "esri/geometry/Polygon",

        ],
        (Map,
         Query,
         Graphic,
         graphicsUtils,
         QueryTask,
         PopupTemplate,
         SimpleMarkerSymbol,
         SimpleFillSymbol,
         PictureMarkerSymbol,
         ClassBreaksRenderer,

         Point,
         Polyline,
         Polygon
        ) => {
            if(clusterRenderTool.clusterLayerHash[layerName] == undefined)
            {
                clusterRenderTool.clusterLayerHash[layerName] = null;
            }
            let layerConfig = configManagerCtrl.getLayerConfigByName(layerName)
            let queryTask = "";
            let query = new esri.tasks.Query();
            query.returnGeometry = true;
            query.outFields = ["*"];
            query.where = "1=1";
            queryTask = new esri.tasks.QueryTask(layerConfig.SERVICES_ADDR);
            queryTask.execute(query, function (results) {

              clusterRenderTool.setRenderByGraphicLayer(mapId,layerName,config,results.features);

            });

        })

}






clusterRenderTool.setRenderByGraphicLayer = function(mapId,layerName,config,features){

    esriLoader.dojoRequire(['esri/map',
            "esri/tasks/query",
            "esri/graphic",
            "esri/graphicsUtils",
            "esri/tasks/QueryTask",
            "esri/dijit/PopupTemplate",
            "esri/symbols/SimpleMarkerSymbol",
            "esri/symbols/SimpleFillSymbol",
            "esri/symbols/PictureMarkerSymbol",
            "esri/renderers/ClassBreaksRenderer",
            "esri/geometry/Point",
            "esri/geometry/Polyline",
            "esri/geometry/Polygon",


        ],
        (Map,
         Query,
         Graphic,
         graphicsUtils,
         QueryTask,
         PopupTemplate,
         SimpleMarkerSymbol,
         SimpleFillSymbol,
         PictureMarkerSymbol,
         ClassBreaksRenderer,
         Point,
         Polyline,
         Polygon

        ) => {

            let map = baseMapManagerCtrl.mapHash[mapId];
            let data = [];//聚合数据源定义
            if (features.length > 0) {
                for (let i = 0; i < features.length; i++) {//遍历查询的图层结果集合,构造聚合效果的数据源
                    let info = {};
                    let latlng = features[i].geometry;
                    //          var webMercator = webMercatorUtils.geographicToWebMercator(latlng);//地理坐标系必须要转换摩卡托的投影坐标系,不然聚合没效果
                    info.x = latlng.x;
                    info.y = latlng.y;
                    info.attributes = features[i].attributes;//气泡窗口模型的属性
                    data.push(info);
                }
            }
            clusterLayer.create(map,"法人_建筑",data,config);

        })

}
