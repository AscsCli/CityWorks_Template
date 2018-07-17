# 地图底图说明

### 地图底图描述文件

在gismap3 中 会有个底图的概念描述承载其他业务图层的地图，以下为描述格式

```javascript


          let config = {

            mapId:  "5555",
            
            url: "http://61.144.226.44:6080/arcgis/rest/services/basemap/szmap_basemap_201608_01/MapServer",
            mapType:"tiled",
            layerType:"",   
            visibleLayer:[],
            
            extent:{
              xmax:106845.70780098543,
              ymax:54047.27319746484,
              xmin:87001.91811340605,
              ymin:18751.785939823654,
            },
            
          }

```


#### 属性说明

| 名称        | 类型       |  描述  |
| --------   | -----:     | :----: |
| mapId        | string             |   地图id 通常 绑定在div的id   |
| url        | string               |    地图初始地址 （mapType 为tiled，image，dynamic用）   |
| mapType        | string           |    地图类型(默认自定义的有tiled，image，dynamic，有网上集成的天地图(tiandi)，高德地图(gaode)，mapbox)    |
| visibleLayer        | Array       |      初始化mapType 为dynamic用    |
| layerType        | string       |      初始化mapType 为tiandi,gaode,mapbox用    |
| extent        | Object            |    初始地图范围的extent用  |


#### mapType

| 名称        | layerType       |  描述  |
| --------     | -----:     | :----: |
| tiandi       |   tdtLayer(天地图电子地图),tdtImageLayer(天地图遥感)           |   天地图加载   |
| mapbox       |   mapbox类型参考mapbox layerType           |   mapbox 加载  |
| gaode        | gaodeLayer(高德电子地图),gaodeImageLayer(高德遥感)            |   高德地图加载    |
| tiled        |       不可用      |          |
| image        |       不可用      |          |
| dynamic      |       不可用      |          |


### mapbox 的layerType

| layerType        | 
| --------     |
| streets       |    
| light       |  
| dark        |    
| satellite        |       
| wheatpaste        |     
| streets-basic        |     
| comic        |     
| outdoors        |     
| run-bike-hike       |    
| pencil      |     
| pirates       |     
| emerald      |     
| high-contrast      |     



