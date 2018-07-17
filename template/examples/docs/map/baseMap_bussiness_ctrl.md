# baseMap_bussiness_ctrl

### 地图加载业务类


地图业务加载类就加载之前说的地图底图描述文件

```javascript

 import {baseMap_bussiness_ctrl} from "gismap3";
 
  let config = {
 
             mapId:  "5555",
             
             url: "http://61.144.226.44:6080/arcgis/rest/services/basemap/szmap_basemap_201608_01/MapServer",
             
             mapType:"tiled",
             
             visibleLayer:[],
             
             layerType:"",
             
             extent:{
               xmax:106845.70780098543,
               ymax:54047.27319746484,
               xmin:87001.91811340605,
               ymin:18751.785939823654,
             },
             
           }
           
   
  baseMap_bussiness_ctrl.init(config);

```




