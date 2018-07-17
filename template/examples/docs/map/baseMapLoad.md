
# baseMap.vue使用




#### 加载自定义图层的时候
<baseMap :mapId="mapId" :initExtent="extent" :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>

#### 加载天地图的时候
<baseMap :mapId="mapId1" :initExtent="extent1" :layerType="layerType"  :mapType="mapType1"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>

#### 加载高德地图的时候
<baseMap :mapId="mapId2" :initExtent="extent1" :layerType="layerType"  :mapType="mapType2"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>

#### 加载mapbox的时候
<baseMap :mapId="mapId3" :initExtent="extent1" :layerType="layerType"  :mapType="mapType3"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>



::: demo
```html
<template>
<div>
    <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
    <baseMap :mapId="mapId1" :initExtent="extent1" :layerType="layerType"  :mapType="mapType1"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
    <baseMap :mapId="mapId2" :initExtent="extent1" :layerType="layerType"  :mapType="mapType2"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
    <baseMap :mapId="mapId3" :initExtent="extent1" :layerType="layerType"  :mapType="mapType3"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
</div>

</template>
<script>

 
  
  
  export default {
      
      
       components:{
           
          },
        data() {
            return {
                
               mapId:'5555',  
               mapId1:"1111",  
               mapId2:"2222",  
               mapId3:"3333",
               mapHeight:'500px',
               mapWidth:'800px',
               mapType:"tiled",
               mapType1:"tiandi",
               mapType2:"gaode",
               mapType3:"mapbox",
               layerType:"",
               url:"http://121.201.65.133:2001/arcgis/rest/services/szmap_10_170117/MapServer",
               extent:{                      
                          
                    xmax:106845.70780098543,
                    ymax:54047.27319746484,
                    xmin:87001.91811340605,
                    ymin:18751.785939823654
                    
                    
                 },
                  extent1:{                      
                                           
                                     xmax:113.90645352905051,
                                     ymax:22.796252280092517,
                                     xmin:113.76912442748801,
                                     ymin:22.571375876283923,
                                  }
        
            }
        },
        mounted(){
        
        }
    }
</script>
```
:::




