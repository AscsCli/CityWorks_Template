# cityLinkAge

#### cityWorkLinkAge_Business_Ctrl 类可以实现多个地图的联动


 <div>
   <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
   <baseMap :mapId="mapId1" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
 </div> 
   
::: demo

```html
<template>
 <div>
   <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
   <baseMap :mapId="mapId1" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>

 </div>  

</template>
<script>

  
    import {cityWorkLinkAge_Business_Ctrl} from  "gismap3";
    
    
  export default {
      
      
       components:{
           
          },
        data() {
            return {
                
               mapId:'5555',  
               mapId1:'1111',  
               mapIdArr:['5555','1111'],
               mapHeight:'500px',
               mapWidth:'600px',
               mapType:"tiled",
               layerType:"",
               url:"http://121.201.65.133:2001/arcgis/rest/services/szmap_10_170117/MapServer",
               extent:{                      
                          
                    xmax:106845.70780098543,
                    ymax:54047.27319746484,
                    xmin:87001.91811340605,
                    ymin:18751.785939823654
                                    
                 },
               
        
            }
        },
        methods:{
          
           
        },
        mounted(){
           cityWorkLinkAge_Business_Ctrl.init(this.mapIdArr);
        }
    }
</script>
```
:::
 
 
#### 其中cityWorkLinkageCtrl是核心类，实际操作可以和citymaker进行联动

