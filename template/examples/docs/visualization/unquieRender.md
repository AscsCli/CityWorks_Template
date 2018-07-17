
# 分类图uniqueRenderTool

分类图封装了arcgis的UniqueValueRenderer，它可以针对图层的字段的不同渲染

 
  
  <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
  <el-button @click="open" type="primary">基于服务开启</el-button>
  <el-button @click="open1" type="primary">基于数据开启</el-button>
  <el-button @click="hide" type="primary">关闭</el-button>
 
::: demo
```html
<template>
<div>
    <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
    <el-button @click="open" type="primary">基于服务开启</el-button>
    <el-button @click="open1" type="primary">基于数据开启</el-button>
    <el-button @click="hide" type="primary">关闭</el-button>
       
</div>   

</template>
<script>

     import {configLoadTool} from  "gismap3";
     import {uniqueRenderTool} from  "gismap3";
     import {renderLayerManager} from  "gismap3";
      import {locateManagerCtrl} from  "gismap3";
 
   
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
                 config:{
                   
                     "type" : "uniqueValue",
                                             "field1" : "name",
                                 
                                             "uniqueValueInfos" : [
                                 
                                               {
                                                 "value" : "南山区",
                                                 "symbol" :
                                                   {
                                                     "type" : "esriSFS",
                                                     "style" : "esriSFSSolid",
                                                     "color" : [236,252,204,255],
                                 
                                                   }
                                               },
                                               {
                                                 "value" : "福田区",
                                                 "symbol" :
                                                   {
                                                     "type" : "esriSFS",
                                                     "style" : "esriSFSSolid",
                                                     "color" : [218,240,158,255],
                                 
                                                   }
                                               },
                                               {
                                                 "value" : "罗湖区",
                                                 "symbol" :
                                                   {
                                                     "type" : "esriSFS",
                                                     "style" : "esriSFSSolid",
                                                     "color" : [255,255,0,255],
                                 
                                                   }
                                               },
                                 
                                             ],
                                             "rotationType": "geographic",
                   
                 }
               
        
            }
        },
        methods:{
           open(){
            
                uniqueRenderTool.setRender(this.mapId,"行政区划",this.config);
             
           },
            open1(){
                
               locateManagerCtrl.queryGraphics(this.mapId,"行政区划","1 = 1").then((r) =>{  
                      
                  uniqueRenderTool.setRenderByGraphicLayer(this.mapId,"行政区划data",this.config,r.features)
                })
             
                        
           },
                  
           hide(){
                 
              renderLayerManager.hideAllFeatureLayer();
           }
           
           
        },
        mounted(){
          configLoadTool.load("json");
        }
    }
</script>
```
:::


**uniqueRenderTool** 方法

|名称  |参数  | 参数类型参数描述  |描述  |
|---|-----:|:----:|:----:|
|  setRender     |    (mapId,layerName,config)    |  (string,string,Object)  地图id，图层名称（gismap3数据结果的DISPLAYLAYERNAME），render描述格式     |  根据图层名称渲染可视化   |
|  setRenderByGraphicLayer     |     (mapId,layerName,config,features)     |  (string,string,Object,Array)  地图id，图层名称（自定义），render描述格式 ，自己创建的graphic集合  |    根据自己创建的graphics渲染可视化 |

