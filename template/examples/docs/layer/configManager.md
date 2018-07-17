# 图层数据结构管理 ConfigManagerCtrl

当图层加载后 由configManagerCtrl来管理
gismap3 图层数据结构序列化LayerConfig 对象

**LayerConfig** 属性

|名称  |类型  |默认值  |描述  |
|---|-----:|:----:|:----:|
|  SERVICES_ADDR     |    string  |          |  rest服务单节点带id地址      |
|  DISPLAYLAYERNAME    |   string  |        |   图层名字     |
|  LAYERID     |       string |       | id值  |
|  MAPSERVICES    |    string  |     |rest服务mxd整个发布地址    |
|  LAYER_TYPE    |     string    |      | 图层类型     |
|  SELDEFINE   |     Array    |     | 自定义属性集合   |
|  MOUSEMOVE_FIELD   |     Array    |      | 字段值集合   |


**LayerConfig** 方法

|名称  |参数  | 参数类型参数描述  |描述  |
|---|-----:|:----:|:----:|
|  getLayerPriority     |    ()    |  ()       |  获取该图层权限值    |
|  getLayerQueryFlag    |     ()     | ()       |   获取该图层是否允许弹出框查询     |


可以看出他的结构和json没有太大区别，只是把他序列号一个类好管理 类似于后端database 表序列化 VO的一样


**configManagerCtrl** 方法

|名称  |参数  | 参数类型参数描述  |描述  |
|---|-----:|:----:|:----:|
|  getLayerConfigByUrlAndId     |    (url,id)    |  (string,string)       |  根据 MAPSERVICES 和 LAYERID 得到 LayerConfig 用于ArcGISDynamicMapServiceLayer |
|  getLayerConfigByName    |     (name)     | (string)       |    根据  DISPLAYLAYERNAME 得到 LayerConfig   通用  |
|  getLayerConfigByMapServiceUrl    |     (url)     | (string)       |    根据 MAPSERVICES 得到 LayerConfig  通用   |
|  getLayerConfigByServiceUrl    |     (url)     | (string)       |    根据 SERVICES_ADDR 得到 LayerConfig   用于ArcGISDynamicMapServiceLayer  |




以 **http://61.144.226.44:6080/arcgis/rest/services/msmap/BOOKS/MapServer** 为例子
前提是用configLoadTool加载了该json
```javascript

import {configManagerCtrl}  from 'gismap3'

 let layerConfig = configManagerCtrl.getLayerConfigByName("深圳市规划选址意见书");

 let layerConfig  = configManagerCtrl.getLayerConfigByMapServiceUrl("http://61.144.226.44:6080/arcgis/rest/services/msmap/BOOKS/MapServer");
 
 let layerConfig  = configManagerCtrl.getLayerConfigByServiceUrl("http://61.144.226.44:6080/arcgis/rest/services/msmap/BOOKS/MapServer/1");
 
 let layerConfig  = configManagerCtrl.getLayerConfigByUrlAndId("http://61.144.226.44:6080/arcgis/rest/services/msmap/BOOKS/MapServer","1");
  

```












