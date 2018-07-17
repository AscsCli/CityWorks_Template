# 缓冲分析


缓冲分析就是对现有画的点线面周边扩充，相当于一个缓冲范围，
常用语环水（河流污染影响），安监（危险物品爆炸，泄露范围），警用（电子围栏）等区域。



<baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
 <el-button @click="query" type="primary">只是缓冲</el-button>
    <el-button @click="open" type="primary">打开深圳市规划选址意见书</el-button>
    <el-button @click="query1" type="primary">缓冲并且分析</el-button>
::: demo

```html
<template>
<div>
    <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
    
    <el-button @click="query" type="primary">只是缓冲</el-button>
    <el-button @click="open" type="primary">打开深圳市规划选址意见书</el-button>
    <el-button @click="query1" type="primary">缓冲并且分析</el-button>
   
</div>   

</template>
<script>

   import {baseMapManagerCtrl} from "gismap3";
   import {configLoadTool} from  "gismap3";
   import {layerManager} from  "gismap3";
   import {buffTool}  from  "gismap3";
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
               
             buffTool.buffer(this.mapId,"POLYGON",100, (res)=>{
                 console.log(res);
             })
           },
            query1(){
                          
              buffTool.buffer(this.mapId,"POLYGON",100, (graphic)=>{
                  
                  
                 queryTool.doSpatialQuery(this.mapId,queryTool.VISIBLE,graphic.geometry,function(result){
                        console.log("我是缓冲结果集",result);
                    })
                            
                          })
            },
           
        },
        mounted(){
           configLoadTool.load("json");
          
    
        }
    }
</script>
```
:::


**buffTool** 方法

|名称  |参数  | 参数类型参数描述  |描述  |
|---|-----:|:----:|:----:|
|  buffer     |    (mapId,type,distance,callBack)    |  (string,string,Number,Function)  地图id，缓冲图形类型，缓冲距离，缓冲后回调      |  对现有的图形进行缓冲    |

