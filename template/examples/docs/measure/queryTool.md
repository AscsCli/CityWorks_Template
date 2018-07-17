# queryTool

在地理信息经常要做拓扑查询就是图形之间去叠加查询



<baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
<el-button @click="open" type="primary">深圳市规划选址意见书</el-button>
<el-button @click="query" type="primary">叠加查询</el-button>
    <el-button @click="query1" type="primary">叠加查询special</el-button>
::: demo

```html
<template>
<div>
    <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
    <el-button @click="open" type="primary">打开深圳市规划选址意见书</el-button>
    <el-button @click="query" type="primary">叠加查询visible</el-button>
    <el-button @click="query1" type="primary">叠加查询special</el-button>
   
</div>   

</template>
<script>

   import {baseMapManagerCtrl} from "gismap3";
   import {configLoadTool} from  "gismap3";
   import {layerManager} from  "gismap3";
   import {drawManagerCtrl}  from  "gismap3";
   import {eventBus} from  "gismap3";
   import {queryTool} from  "gismap3";
   
  
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
           open(){
               layerManager.showLayerByName(this.mapId,["深圳市规划选址意见书"],true);
           },
           query(){
               
              drawManagerCtrl.activeTool(this.mapId,"POLYGON","queryMap");
           },
            query1(){
                          
              drawManagerCtrl.activeTool(this.mapId,"POLYGON","queryMap1");
            },
           
        },
        mounted(){
           configLoadTool.load("json");
           let that = this;
           eventBus.bus.addListener("draw-queryMap",function(result){
     
                 queryTool.doSpatialQuery(that.mapId,queryTool.VISIBLE,drawManagerCtrl.drawGraphic,function(result){
                            console.log("我是结果集 ",result)
                        })
            
            })
            
            
           eventBus.bus.addListener("draw-queryMap1",function(result){
                 
                
                 queryTool.layerNames = ["深圳市规划选址意见书"];          
                 queryTool.doSpatialQuery(that.mapId,queryTool.SPECIAL,drawManagerCtrl.drawGraphic,function(result){
                            console.log("我是结果集 ",result)
                        })
            
            })
        }
    }
</script>
```
:::


**queryTool** 属性

|名称  |类型  |默认值  |描述  |
|---|-----:|:----:|:----:|
|  layerNames     |       Array |   []      |  当叠加特定图层时候   |


**queryTool** 方法

|名称  |参数  | 参数类型参数描述  |描述  |
|---|-----:|:----:|:----:|
|  doSpatialQuery     |    (mapId,type,geometry,callBack)    |  (string,string,Geometry,Function)  地图id,查询类型，arcgis的geometry，回调函数      |  根据图形叠加图层   |

