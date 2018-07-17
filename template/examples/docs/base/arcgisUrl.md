# arcgis Url基本说明 



```shell

  "arcgisCssLink": "http://cityworks.cn/arcgis_js_v320_api/arcgis_js_api/library/3.20/3.20/esri/css/esri.css",
  
  "arcgisAPIUrl" : "http://cityworks.cn/arcgis_js_v320_api/arcgis_js_api/library/3.20/3.20/init.js",
  
  "geometeryServiceUrl" : "http://121.201.65.133:2001/arcgis/rest/services/Utilities/Geometry/GeometryServer",
  
  "geometryPdfUrl": "http://10.10.120.2:6080/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"


```


#### 地址说明，这些地址都是在线的除了pdf，当然arcgis js 和 css可以自己 离线部署，而geometryServiceUrl和pdf只能装arcgis server 启动基础服务得到

- arcgisCssLink ：  arcgis api 的 css 类库 **注意这里是是3.2x版本 不能用4.x版本** 

- arcgisAPIUrl  ： arcgis api 的 js 类库 **注意这里是是3.2x版本 不能用4.x版本** 

- geometeryServiceUrl ：  arcgis server 提供 一些简单的分析服务 如缓冲 投影变换，测量面积 测量周长等

- geometryPdfUrl ：  arcgis server 提供的地图输出图片


#### 其中gismap3类库内部封装了这些地址，如果是互联网情况则不用自己设置，但是要在加载地图之前要调用setDefault方法

```javascript

   import {loadScriptTool} from "gismap3"
   

   loadScriptTool.setDefault();
   
 
```




#### 如果部署到离线网络 则要自己设置



```javascript

   import {loadScriptTool} from "gismap3"
   
     // 注意这些代码得在地图初始化之前设置
    loadScriptTool.setArcgisCssLink("http://cityworks.cn/arcgis_js_v320_api/arcgis_js_api/library/3.20/3.20/esri/css/esri.css");
    
    loadScriptTool.setArcgisAPIUrl("http://cityworks.cn/arcgis_js_v320_api/arcgis_js_api/library/3.20/3.20/init.js");  
    
    loadScriptTool.setGeometeryServiceUrl("http://121.201.65.133:2001/arcgis/rest/services/Utilities/Geometry/GeometryServer");
    
    loadScriptTool.setGeometryPdfUrl("http://10.10.120.2:6080/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task");


```




