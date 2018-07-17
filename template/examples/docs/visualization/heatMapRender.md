# 热点图heatRenderTool

热点图封装了arcgis的HeatmapRenderer 针对点数据的渲染

 
  
  <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
  <el-button @click="open" type="primary">数量的热点图</el-button>
  <el-button @click="open1" type="primary">根据字段渲染的热点图</el-button>
   <el-button @click="open2" type="primary">基于数据开启</el-button>
  <el-button @click="hide" type="primary">关闭热点图</el-button>
  
::: demo
```html
<template>
<div>
    <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
      <el-button @click="open" type="primary">数量的热点图</el-button>
      <el-button @click="open1" type="primary">根据字段渲染的热点图</el-button>
       <el-button @click="open2" type="primary">基于数据开启</el-button>
      <el-button @click="hide" type="primary">关闭热点图</el-button>
</div>   

</template>
<script>

     import {configLoadTool} from  "gismap3";
     import {heatRenderTool} from  "gismap3";
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
               url:"http://172.25.10.61:6080/arcgis/rest/services/Vector2014_FzLocal/MapServer",
               extent:{                      
                          
                    xmin: 423423.9097258734,
                    ymin: 2881476.5658263583,
                    xmax: 428195.87594482175,
                    ymax: 2883862.5489358325
                    
                    
                 },
                 config : {
                              
                                        blurRadius:15,
                                        field:"consumptio",
                                        minPixelIntensity:25,
                                        maxPixelIntensity:1364,
                                        colorStops:[
                                          "rgba(255, 255, 0, 0)",
                                          "rgba(73, 111, 235, 0.5)",
                                          "rgba(248, 235, 41, 0.6)",
                                          "rgba(234, 60, 40, 0.9)"
                                        ]
                              
                             }
        
            }
        },
        methods:{
           open(){
                   let config = {
                  
                              blurRadius:15,
                              colorStops:[
                                "rgba(255, 255, 0, 0)",
                                "rgba(73, 111, 235, 0.5)",
                                "rgba(248, 235, 41, 0.6)",
                                "rgba(234, 60, 40, 0.9)"
                              ]
                  
                  
                  
                            }
                 heatRenderTool.setRender(this.mapId,"法人_建筑",config)     
             
           },
           open1(){
                //consumptio代表平均消费 Number类型                   
                
             heatRenderTool.setRender(this.mapId,"医院",this.config);          

                      
           },
           open2(){
                locateManagerCtrl.queryGraphics(this.mapId,"医院","1 = 1").then((r) =>{    
                                 
                        heatRenderTool.setRenderByGraphicLayer(this.mapId,"医院",this.config,r.features);          
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


**heatRenderTool** 方法

|名称  |参数  | 参数类型参数描述  |描述  |
|---|-----:|:----:|:----:|
|  setRender     |    (mapId,layerName,config)    |  (string,string,Object)  地图id，图层名称（gismap3数据结果的DISPLAYLAYERNAME），render描述格式     |  根据图层名称渲染可视化   |
|  setRenderByGraphicLayer     |     (mapId,layerName,config,features)     |  (string,string,Object,Array)  地图id，图层名称（自定义），render描述格式 ，自己创建的graphic集合  |    根据自己创建的graphics渲染可视化 |


