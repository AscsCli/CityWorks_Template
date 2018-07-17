/**
 * Created by Administrator on 2018/6/4 0004.
 */
import * as esriLoader from 'esri-loader';
import {layerManager} from "../layermanager/LayerManagerCtrl"


//剖切控制器
export const DissectionController = {};

DissectionController.mapId = "";


//管线 起点埋深字段
DissectionController.QDMS = "QDMS";
//管线 终点埋深字段
DissectionController.ZDMS = "ZDMS";
//管线 管径大小
DissectionController.GJ = "GJ";
//管线 名称字段
DissectionController.GXXZ = "GXXZ";



/**
 * @param 管线剖切参数获取方法 v1.1
 * @param 输入剖切线 line Graphic
 * @param 被剖切数据服务，要素图层url
 */
DissectionController.pipe = function(graphic,url) {

  let p = new Promise(function(resolve, reject){
    let geometry = graphic.geometry;

    esriLoader.dojoRequire(["esri/SpatialReference", "esri/tasks/query", "esri/tasks/QueryTask", "esri/geometry/mathUtils", "esri/geometry/Point", "esri/symbols/SimpleMarkerSymbol", "esri/Color","esri/graphic"],
      function(SpatialReference, Query, QueryTask, mathUtils, Point, SimpleMarkerSymbol, Color,Graphic) {

        let queryTask = new QueryTask(url);

        let query = new Query();
        query.returnGeometry = true;
        query.outFields = ["*"];
        query.outSpatialReference = {"wkid": 2437};
        // query.where = where;
        query.geometry = geometry;

        queryTask.execute(query);

        //查询输入线经过的管线
        queryTask.on("complete", function (event) {


          //计算输入剖线长度
          let pS = new Point(geometry.paths[0][0], new SpatialReference({wkid: 2437}));
          let pE = new Point(geometry.paths[0][1], new SpatialReference({wkid: 2437}));
          let Linedistance = mathUtils.getLength(pS, pE);

          let inputParameters = {
            line: {
              start:0,
              end:Linedistance
            },
            pipes: []
          }

          //轮询查询管线参数
          let features = event.featureSet.features;
          let featureCount = features.length;
          for (let i = 0; i < featureCount; i++) {
            let geometryInput = features[i].geometry;
            let res= getIntersection(geometryInput);
            let Intersection =res[0]; //交点
            let distance =res[1];   //距离左侧距离

            let Name = features[i].attributes[DissectionController.GXXZ]
            let MS;
            let QDMS = features[i].attributes[DissectionController.QDMS]
            let ZDMS = features[i].attributes[DissectionController.ZDMS]
            if (QDMS != null && QDMS != 9999 && ZDMS != 9999 && ZDMS != 9999) {
               MS = (QDMS + ZDMS) / 2
            }
            let GJ = features[i].attributes[DissectionController.GJ];
            if(MS == undefined){
              MS = 0;
            }

            let pipeParameter = {
              start: distance,
              ms: MS,
              gj: GJ,
              name: Name
            }
            inputParameters.pipes.push(pipeParameter)
          }
          resolve(inputParameters);
        });

        //获取输入管线与剖切线的交点,  获取交点距离剖切线的距离
        function getIntersection(inputGraphic) {
          let p1Start = new Point(geometry.paths[0][0], new SpatialReference({wkid: 2437}));
          let p1End = new Point(geometry.paths[0][1], new SpatialReference({wkid: 2437}));
          let p2Start = new Point(inputGraphic.paths[0][0], new SpatialReference({wkid: 2437}));
          let p2End = new Point(inputGraphic.paths[0][1], new SpatialReference({wkid: 2437}));
          let IntersectionRes = mathUtils.getLineIntersection(p1Start, p1End, p2Start, p2End)
          IntersectionRes.spatialReference = new SpatialReference({wkid: 2437})


          //判断左侧端点
          let leftP = p1Start.x < p1End.x ? p1Start : p1End
          let distance = mathUtils.getLength(IntersectionRes, leftP)


          let sms = new SimpleMarkerSymbol().setStyle(
            SimpleMarkerSymbol.STYLE_SQUARE).setColor(
            new Color([255, 0, 0, 0.5]));
          let Pgraphic = new Graphic(IntersectionRes, sms);

          // map.graphics.add(Pgraphic);
          let graphicLayer = layerManager.setGraphicLayer(DissectionController.mapId,"dissectionCtrl");
          graphicLayer.add(Pgraphic);

          return [IntersectionRes, distance];
        }



      });
  });
  return p


}






