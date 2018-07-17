/**
 * Created by Administrator on 2018/5/30 0030.
 */


export const loadScriptTool = {}


loadScriptTool.arcgisUrl = "http://cityworks.cn/arcgis_js_v320_api/arcgis_js_api/library/3.20/3.20/init.js";
loadScriptTool.geometryServiceUrl = "http://121.201.65.133:2001/arcgis/rest/services/Utilities/Geometry/GeometryServer";
loadScriptTool.arcgisCssLink = "http://cityworks.cn/arcgis_js_v320_api/arcgis_js_api/library/3.20/3.20/esri/css/esri.css";
loadScriptTool.geometryPdfUrl = "http://10.10.120.2:6080/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task";


loadScriptTool.setDefault = function () {

  loadScriptTool.setArcgisCssLink(loadScriptTool.arcgisCssLink );

}

//arcgis css地址
loadScriptTool.setArcgisCssLink = function (url) {

  loadScriptTool.loadStyle(url);

}

//arcgis js 地址
loadScriptTool.setArcgisAPIUrl = function (url) {

  loadScriptTool.arcgisUrl = url;
}

//arcgis server geometry地址
loadScriptTool.setGeometeryServiceUrl = function (url) {

  loadScriptTool.geometryServiceUrl = url;

}

//arcgis server pdf地址
loadScriptTool.setGeometryPdfUrl = function (url) {

  loadScriptTool.geometryPdfUrl = url;
}



loadScriptTool.loadStyle = function(url){
  var link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = url;
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(link);
}


loadScriptTool.loadScript = function(url){

  document.write(`<script type='text/javascript' src=${url}></script>`);
}




