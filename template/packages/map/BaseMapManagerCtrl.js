/**
 * 地图管理函数 用来处理初始化extent 全屏 鹰眼图
 * Created by Administrator on 2017/3/31 0031.
 *
 */


import * as esriLoader from 'esri-loader'

export const baseMapManagerCtrl = {};


/**
 * 地图是否加载完毕
 * @type {{}}
 */
baseMapManagerCtrl.isLoad = {};

/**
 * 地图列表
 * @type {{}}
 */
baseMapManagerCtrl.mapHash = {};

baseMapManagerCtrl.config = {};

/**
 * 地图初始extent
 * @type {{}}
 */
baseMapManagerCtrl.initExtent = {};

/**
 * 鹰眼图列表
 * @type {{}}
 */
baseMapManagerCtrl.overViewHash = {};



/**
 * 设置初始化地图
 * @param mapId
 */
baseMapManagerCtrl.setMapInitExtent = function (mapId) {

    let map = baseMapManagerCtrl.mapHash[mapId];
    let extent  = baseMapManagerCtrl.initExtent[mapId];
    esriLoader.dojoRequire(['esri/map',
      "esri/SpatialReference",
      'esri/geometry/Extent'], (Map,SpatialReference,Extent) => {

      if(extent.xmax !=0 && extent.xmax != ""){

        let config  = baseMapManagerCtrl.config[mapId];
        let mapSpatialReference = map.spatialReference;

        if(config.mapType == "gaode" || config.mapType == "mapbox"){
           if(!(extent.xmax > 200)){
             mapSpatialReference = new SpatialReference({wkid:4326});
           }
        }
        let mapExtent = new esri.geometry.Extent(extent.xmin,extent.ymin,extent.xmax,extent.ymax,mapSpatialReference);

        map.setExtent(mapExtent);
      }

    });
}

baseMapManagerCtrl.setMapSpatialReference = function () {

}

baseMapManagerCtrl.setExtent = function (mapId,extent) {

    let map = baseMapManagerCtrl.mapHash[mapId];
    esriLoader.dojoRequire(['esri/map','esri/geometry/Extent'], (Map,Extent) => {

        if(extent.xmax !=0 && extent.xmax != ""){
          let mapExtent = new esri.geometry.Extent(extent.xmin,extent.ymin,extent.xmax,extent.ymax,map.spatialReference);
          map.setExtent(mapExtent);
        }


    });
}

/**
 * 是否显示鹰眼图
 * @param mapId
 * @param bool
 */
baseMapManagerCtrl.showOverView = function (mapId,bool) {

    let overView =baseMapManagerCtrl.overViewHash[mapId];
    if(bool)
    {
        let overC = document.getElementsByClassName("esriOverviewMap ovwBR");
        overC[0].style.position = "relative";
        overView.show();
    }
    else
    {
        overView.hide();
    }

}
/**
 * 监听地图对象已生成
 * @param fun
 */
baseMapManagerCtrl.setFunCall = function(mapId,fun)
{
    setTimeout(function(){
        if(baseMapManagerCtrl.isLoad[mapId])
        {
            fun()
        }
        else{
            baseMapManagerCtrl.setFunCall(mapId,fun);
        }
    },500)
}
