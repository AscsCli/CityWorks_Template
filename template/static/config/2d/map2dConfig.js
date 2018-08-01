/**
 * Created by Administrator on 2017/3/27 0027.
 */
/*
    * 针对地图全局配置
    * */

var arcgisCssLink =  "http://cityworks.cn/arcgis_js_v320_api/arcgis_js_api/library/3.20/3.20/esri/css/esri.css";


function loadStyle(url){
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
}

function loadScript(){

    // document.write("<script type='text/javascript' src='http://api.map.baidu.com/api?v=2.0&ak=3GhQnaMZC1PF4U86IuKs7wIO4AnhwyqP'></script>");
}


var mapConfig = {
    title: '福州时空信息公共服务平台',
    logoUrl: './static/images/logo.png',
    //针对arcgis
    mapId: '5555',
    // url: 'http://11.23.3.101:6080/arcgis/rest/services/maplocal/MapServer',
    url: ENV_ARCGIS_SERVER + '/arcgis/rest/services/Vector2014_FzLocal/MapServer',
    mapType: "tiled",
    scale: '715.48155171871',
    level: '11',
    extent: {
        xmax: 427932.42319021956,
        ymax: 2883670.2274468746,
        xmin: 423882.8133576496,
        ymin: 2881041.161377562,
    },
    leftMenuUrl3d:  "/static/config/fuzhou/menu/menu_3d.json",
    leftMenuUrl2d:  "/static/config/fuzhou/menu/menu.json",
    isShowStreet:true,
    Load3dMap: true,
    Load2dMap: true,
};

if(mapConfig.Load2dMap){
    // loadStyle(arcgisCssLink);
}

if(mapConfig.isShowStreet){
    loadScript();
}



var  map2dConfig =  {
    geometeryServiceUrl : ENV_ARCGIS_SERVER + '/arcgis/rest/services/Utilities/Geometry/GeometryServer',
    arcgisAPIUrl : ENV_ARCGIS_SERVER + '/arcgis_js_api/library/3.20/3.20/init.js',
    geometryPdfUrl:ENV_ARCGIS_SERVER + '/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task',
}

