# 点选查询


  
  
  
<baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
  
  <el-button @click="open" type="primary">打开深圳市规划选址意见书</el-button>
  <el-button @click="mouseOpen" type="primary">启动鼠标移动查询</el-button>
  <el-button @click="mouseOff" type="primary">关闭鼠标移动查询</el-button>
   
::: demo
```html
<template>
<div>
    <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
    <el-button @click="open" type="primary">打开深圳市规划选址意见书</el-button>
     <el-button @click="mouseOpen" type="primary">启动鼠标移动查询</el-button>
     <el-button @click="mouseOff" type="primary">关闭鼠标移动查询</el-button>
</div>   

</template>
<script>

     import {configLoadTool} from  "gismap3";
     import {mouseMoveTool} from  "gismap3";
     import {layerManager} from  "gismap3";
  
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
           mouseOpen(){
                   mouseMoveTool.startQuery(this.mapId);
           },
           mouseOff(){
               
                   mouseMoveTool.stopQuery();
              
           }
           
           
        },
        mounted(){
          configLoadTool.load("json");
        }
    }
</script>
```
:::
