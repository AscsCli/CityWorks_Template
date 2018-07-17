# 热点图blendRenderTool

热点图封装了arcgis的BlendRenderer 可以针对一个图层 多字段，多个维度进行渲染

 
  
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
     import {blendRenderTool} from  "gismap3";
     import {renderLayerManager} from  "gismap3";
     import {locateManagerCtrl} from "gismap3";
     
  
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
                config:{
                   blendMode:"color",
                  symbol:  {
    
                    type: "esriSMS",
                    style: "esriSLSDash",
                    size:0,
    
                  },
                  fields : [
                    {
                      field: "averagemon", //.65 to .26
                      color: [0,0,230] //blue
                    },
                  ],
                  opacityStops: [
                    {
                      value: 70,
                      opacity: 0.2
                    },
                    {
                      value: 140,
                      opacity: 0.4
                    },
                    {
                      value: 500,
                      opacity: 0.7
                    },
                    {
                      value: 2100,
                      opacity: 1
                    }
                  ],
                  sizeFields:[
                    {
                      type: "sizeInfo",
                      field: "consumptio",
                      minSize: 5,
                      maxSize: 100,
                      minDataValue: 25,
                      maxDataValue: 1364
                    }
                  ]
                   
                   
                } 
                 
        
            }
        },
        methods:{
           open(){
                         
               blendRenderTool.setRender(this.mapId,"医院",this.config);
           },
           open1(){
               
              locateManagerCtrl.queryGraphics(this.mapId,"医院","1 = 1").then((r) =>{    
                  
                  
                    blendRenderTool.setRenderByGraphicLayer(this.mapId,"医院data",this.config,r.features);
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

**blendRenderTool** 方法

|名称  |参数  | 参数类型参数描述  |描述  |
|---|-----:|:----:|:----:|
|  setRender     |    (mapId,layerName,config)    |  (string,string,Object)  地图id，图层名称（gismap3数据结果的DISPLAYLAYERNAME），render描述格式     |  根据图层名称渲染可视化   |
|  setRenderByGraphicLayer     |     (mapId,layerName,config,features)     |  (string,string,Object,Array)  地图id，图层名称（自定义），render描述格式 ，自己创建的graphic集合  |    根据自己创建的graphics渲染可视化 |



