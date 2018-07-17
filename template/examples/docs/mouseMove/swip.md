# 卷帘

卷帘工具其实就是封装了LayerSwipe

  
  
  <el-button @click="swip" type="primary">启动卷帘</el-button>
  <el-button @click="stop" type="primary">关闭卷帘</el-button>
  
<baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
  
   
::: demo
```html
<template>
<div>
    <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
    <el-button @click="swip" type="primary">启动卷帘</el-button>
    <el-button @click="stop" type="primary">关闭卷帘</el-button>
</div>   

</template>
<script>

     import {configLoadTool} from  "gismap3";
     import {swipeTool} from  "gismap3";
  
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
               
        
            }
        },
        methods:{
           swip(){
               
             swipeTool.start(this.mapId,'vertical',['2015年遥感影像','2014年遥感影像'])
           },
           stop(){
               
               swipeTool.stop(this.mapId);
           }
           
           
        },
        mounted(){
          configLoadTool.load("json");
        }
    }
</script>
```
:::


**swipeTool** 方法

|名称  |参数  | 参数类型参数描述  |描述  |
|---|-----:|:----:|:----:|
|  start     |    (mapId,type,layerNames)    |  (string,string,Array)  地图id，卷帘方式，图层组（2个）     |  启动卷帘   |
|  stop     |    (mapId)    |  (string)  地图id  |  停止卷帘    |

