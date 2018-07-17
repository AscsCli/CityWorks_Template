
import * as esriLoader from 'esri-loader';
import {baseMapManagerCtrl} from "../map/BaseMapManagerCtrl";


export const netWorkService = {}

netWorkService.mapId = "";


netWorkService.streamService  = function (x,y,url) {


    let promise = new Promise((resolve,reject)=> {
    esriLoader.dojoRequire([
            "esri/tasks/Geoprocessor",
            "esri/graphic",
            "esri/tasks/FeatureSet",
            "esri/geometry/Point",
            "esri/SpatialReference",
            "dojo/domReady!"
        ],
        function (Geoprocessor,
                  Graphic,
                  FeatureSet,
                  Point,
                  SpatialReference) {



                let gp = new Geoprocessor(url);
                let graphic = new Graphic();
                graphic.setAttributes({"FID": 1, "id": 1});
                let map = baseMapManagerCtrl.mapHash[netWorkService.mapId]
                let p = new Point(x, y, map.spatialReference);
                graphic.setGeometry(p);
                let features = [];
                features.push(graphic);
                let featureSet = new FeatureSet();
                featureSet.features = features;
                let params = {
                    input: featureSet
                };

                gp.submitJob(params, gpJobComplete);


                function gpJobComplete(result) {
                    let jobId = result.jobId;
                    let status = result.jobStatus;
                    if (status == "esriJobSucceeded") {
                        gp.getResultData(jobId, "out", addResults);
                    }


                }

                function addResults(results) {

                    let features = results.value.features;
                    let featureCount = features.length;
                    let lineArrs = new Array();

                    for (let i = 0; i < featureCount; i++) {
                        let graphic = features[i];
                        for (let j = 0; j < graphic.geometry.paths.length; j++) {
                            lineArrs.push(graphic.geometry.paths[j]);
                        }
                    }

                    let data = new Array();
                    for (let i = 0; i < lineArrs.length; i++) {
                        let lineArr = lineArrs[i];
                        let cache = [{name: 's', GeoX: lineArr[0][0], GeoY: lineArr[0][1]}, {
                            GeoX: lineArr[1][0],
                            GeoY: lineArr[1][1]
                        }]
                        data.push(cache)
                    }
                    // data=[[{GeoX:114,GeoY:22.5},{GeoX:114.2,GeoY:22.7}]]    //测试数据 正式环境删除
                    resolve(data);
                }
           }
       )
    })
    return promise;
}

