# 聚合图clusterRenderTool

聚合图描述的是对数据的一个聚合显示
 
  
  <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
  <el-button @click="open" type="primary">基于服务开启</el-button>
  <el-button @click="open1" type="primary">基于数据开启</el-button>
  <el-button @click="hide" type="primary">关闭聚合</el-button>
   
::: demo
```html
<template>
<div>
    <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
    <el-button @click="open" type="primary">基于服务开启</el-button>
     <el-button @click="open1" type="primary">基于数据开启</el-button>
    <el-button @click="hide" type="primary">关闭聚合</el-button>
</div>   

</template>
<script>

     import {configLoadTool} from  "gismap3";
     import {clusterRenderTool} from  "gismap3";
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
               url:"http://172.25.10.61:6080/arcgis/rest/services/Vector2014_FzLocal/MapServer",
               extent:{                      
                          
                    xmin: 423423.9097258734,
                    ymin: 2881476.5658263583,
                    xmax: 428195.87594482175,
                    ymax: 2883862.5489358325
                    
                    
                 },
                  config  : {
                 
                               labelColor:"#fff",
                               labelOffset:10,
                               distance:100,
                               singleColor:  "#888",
                               min:0,
                               clusterInfos:[
                                 {
                                     clusterMaxValue:5,
                                     symbol:{
                                        "type" : "esriPMS",
                                        "url":"https://static.arcgis.com/images/Symbols/Shapes/BluePin1LargeB.png",
                                        "width" : 72,
                                        "height" : 72,
                                        "xoffset" : 0,
                                        "yoffset" : 15
                                     }
                                 },
                                 {
                                   clusterMaxValue:50,
                                   symbol:{
                                     "type" : "esriPMS",
                                     "url":"https://static.arcgis.com/images/Symbols/Shapes/GreenPin1LargeB.png",
                                     "width" : 82,
                                     "height" : 82,
                                     "xoffset" : 0,
                                     "yoffset" : 15
                                   }
                                 },
                                 {
                                   clusterMaxValue:10000,
                                   symbol:{
                                     "type" : "esriPMS",
                                     "url":"https://static.arcgis.com/images/Symbols/Shapes/RedPin1LargeB.png",
                                     "width" : 92,
                                     "height" : 92,
                                     "xoffset" : 0,
                                     "yoffset" : 15
                                   }
                                 }
                 
                 
                               ],
                              popupTemplate:{//气泡窗口模型定义
                                "title": "",
                                "fieldInfos": [{
                                  "fieldName": "企业名称",//字段值
                                  visible: true//设置是否可见
                                }]
                              }
                           }
               
        
            }
        },
        methods:{
           open(){
                        
               
              clusterRenderTool.setRender(this.mapId,"法人_建筑",this.config);
             
           },
           open1(){
                                   
              locateManagerCtrl.queryGraphics(this.mapId,"法人_建筑","1 = 1").then((r) =>{    
                    
                 clusterRenderTool.setRenderByGraphicLayer(this.mapId,"法人_建筑",this.config,r.features);
                    
               })
             
            },
           hide(){
                 clusterRenderTool.hideAllFeatureLayer();
            
           }
           
           
        },
        mounted(){
          configLoadTool.load("json");
        }
    }
</script>
```
:::


**clusterRenderTool** 方法

|名称  |参数  | 参数类型参数描述  |描述  |
|---|-----:|:----:|:----:|
|  setRender     |    (mapId,layerName,config)    |  (string,string,Object)  地图id，图层名称（gismap3数据结果的DISPLAYLAYERNAME），render描述格式     |  根据图层名称渲染可视化   |
|  setRenderByGraphicLayer     |     (mapId,layerName,config,features)     |  (string,string,Object,Array)  地图id，图层名称（自定义），render描述格式 ，自己创建的graphic集合  |    根据自己创建的graphics渲染可视化 |


