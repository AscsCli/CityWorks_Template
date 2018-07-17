# 渲染图层管理



renderLayerManager主要管理渲染可视化的featurelayer，暂时不管理聚合图


**renderLayerManager** 方法

|名称  |参数  | 参数类型参数描述  |描述  |
|---|-----:|:----:|:----:|
|  hideAllFeatureLayer     |    ()    |  ()   |  隐藏所有的可视化图层   |
|  hideFeatureLayer     |     (layerName)     |  (string)  图层名称 |    根据名称隐藏图层 |
|  showFeatureLayer     |    (layerName)    |  (string)  图层名称  |  根据图层名称显示图层  |
|  getFeatureLayer     |     (mapId,layerName)     |  (string,string)  地图id，（gismap3数据结果的DISPLAYLAYERNAME）  |    根据图层名称 创建带服务的featurelayer |
|  getNullFeatureLayer     |     (mapId,layerName,type)     |  (string,string,string)  地图id，图层名称（自定义）， 图形类型  |   根据图层名称，图形类型， 创建不带服务的featurelayer  |

