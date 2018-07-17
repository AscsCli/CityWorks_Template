# 地图出图

<div>
<baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
<img :src="imageUrl">
</div>

<el-button @click="open" type="primary">深圳市规划选址意见书</el-button>
<el-button @click="print" type="primary">地图出图</el-button>
    
    
    
::: demo

```html
<template>
<div>
  <div>
  <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
  <img :src="imageUrl">
  </div>
  
  <el-button @click="open" type="primary">深圳市规划选址意见书</el-button>
  <el-button @click="print" type="primary">地图出图</el-button>
   
</div>   

</template>
<script>

   import {printTool} from "gismap3";
   import {configLoadTool} from  "gismap3";
   import {layerManager} from  "gismap3";
   import {eventBus} from  "gismap3";

   
  
  export default {
      
      
       components:{
           
          },
        data() {
            return {
                
               mapId:'5555',  
              
               mapHeight:'500px',
               mapWidth:'800px',
               mapType:"tiled",
               layerType:"",
               url:"http://121.201.65.133:2001/arcgis/rest/services/szmap_10_170117/MapServer",
               extent:{                      
                          
                    xmax:106845.70780098543,
                    ymax:54047.27319746484,
                    xmin:87001.91811340605,
                    ymin:18751.785939823654
                    
                    
                 },
                imageUrl:"",
        
            }
        },
        methods:{
           open(){
               layerManager.showLayerByName(this.mapId,["深圳市规划选址意见书"],true);
           },
           print(){
               
             printTool.print(this.mapId,500,500,"PNG32",96);
           },
           
           
        },
        mounted(){
           configLoadTool.load("json");
           let that = this;
           eventBus.bus.addListener(eventBus.PRINT_RESULT,function(result){
     
                console.log(result);
                that.imageUrl = result.url;
            
            })
            
            
         
        }
    }
</script>
```
:::

**printTool** 方法

|名称  |参数  | 参数类型参数描述  |描述  |
|---|-----:|:----:|:----:|
|  print     |    (mapId,width,height,imageType,dpi)    |  (string,Number,Number,string,Number)  地图id，出图的宽，出图的高度，出图类型，dpi     |  地图制图输出    |

