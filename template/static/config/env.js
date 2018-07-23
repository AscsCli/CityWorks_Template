'use strict';
//三维地图服务
var ENV_CM_SERVER = 'fuzhou.cityworks.ascs.tech';//在公司用的端口
var ENV_CM_SERVER_PORT = 8040;
//二维地图服务
var ENV_ARCGIS_SERVER = 'http://arcgis.cityworks.cn';
var ENV_ARCGIS_SERVER_PORT = 6080;
var ENV_API_SERVER = 'arcgis.ascs.tech';
var ENV_API_SERVER_PORT = 8080;
//数据服务
var ENV_DATA_SERVER = '192.168.1.123';
var ENV_DATA_SERVER_PORT = '8080';

//视频服务
//1.视频监控
var ENV_VIDEO_SERVER = '11.23.3.99';
var ENV_VIDEO_SERVER_PORT = 5060;
var ENV_VIDEO_SERVER_USER = 'admin';
var ENV_VIDEO_SERVER_PASSWORD = 'admin';
//2.行车动态视频
var ENV_CAR_VIDEO_SERVER = '11.40.35.24';
var ENV_CAR_VIDEO_SERVER_PORT = 2290;
var ENV_CAR_VIDEO_SERVER_USER = 'admin';
var ENV_CAR_VIDEO_SERVER_PASSWORD = 'admin';

var ENV_ARCGIS_MAP_SERVER = '10.10.120.2:6080';
var MODEL_URL = ''; //默认URL的前缀

// 汽车仿真开动
var ENV_CAR_SERVER = '192.168.31.133';
var ENV_CAR_SERVER_PORT = 8080;

var fileUrl = "http://localhost:8082";

//线上url
var LINE_URL = '';

var located = "online";

//区别线上环境和线下环境
if(window.location.href.indexOf('localhost') >= 0){
    // console.warn("正式部署时可以删除本段代码！");
    located = 'fuzhou';
}else{
    console.warn("正式部署时可以删除本段代码！");
}



switch (located){
    case "fuzhou":
        // ENV_CM_SERVER = '10.10.120.3';//在公司用的端口
        ENV_CM_SERVER = 'arcgis.cityworks.cn';//改成现有ip
        ENV_ARCGIS_SERVER = 'http://arcgis.cityworks.cn';
        ENV_CAR_SERVER = '11.23.3.6';
        ENV_CAR_SERVER_PORT = '';
        LINE_URL = "http://localhost:8082";
        MODEL_URL = '/gateway';
        break;
    case "company":
        ENV_CM_SERVER = '10.10.120.3';//在公司用的端口
        ENV_ARCGIS_SERVER = 'cityworks.cn';
        ENV_ARCGIS_MAP_SERVER = '10.10.120.2:6080';
        break;
    case "online":
        ENV_CM_SERVER = 'arcgis.cityworks.cn';//改成现有ip
        ENV_ARCGIS_SERVER = 'http://arcgis.cityworks.cn';
        ENV_CAR_SERVER = '11.23.3.6';
        ENV_CAR_SERVER_PORT = '';
        MODEL_URL = '/gateway';
        LINE_URL = 'http://fz.cityworks.cn/cityworks';
        fileUrl = 'http://fz.cityworks.cn/cityworks';
        break;
}

//行政区划
// var QU_ON_SERVER_HTTP_URL = 'http://11.23.3.6/administrative-area/v1/fuzhou';
var QU_ON_SERVER_HTTP_URL    = '/fuzhou';


//线上hub页
var LINE_HUB_URL = 'http://fz.cityworks.cn/portal/#/hub';
var LINE_LOGIN_URL = 'http://fz.cityworks.cn/portal/#/';

