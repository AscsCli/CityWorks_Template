# 绘制图形drawManager


  <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
<div>
  <el-button  @click="draw('POINT')" type="primary">绘制点</el-button>   
  <el-button  @click="draw('POLYLINE')" type="primary">绘制线</el-button>   
  <el-button  @click="draw('POLYGON')" type="primary">绘制面</el-button> 
  <el-button  @click="draw2('POLYGON')" type="primary">定制有样式的面</el-button>   
  <el-button  @click="draw3()" type="primary">代码绘制点</el-button>  
  <el-button  @click="draw4()" type="primary">代码绘制线</el-button>  
  <el-button  @click="draw5()" type="primary">代码绘制面</el-button>  
  
 </div>
   
::: demo

```html
<template>
<div>
       <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
        <el-button  @click="draw('POINT')" type="primary">绘制点</el-button>   
        <el-button  @click="draw('POLYLINE')" type="primary">绘制线</el-button>   
        <el-button  @click="draw('POLYGON')" type="primary">绘制面</el-button>    
        <el-button  @click="draw2('POLYGON')" type="primary">定制有样式的面</el-button>   
        <el-button  @click="draw3()" type="primary">代码绘制点</el-button>  
         <el-button  @click="draw4()" type="primary">代码绘制线</el-button>  
         <el-button  @click="draw5()" type="primary">代码绘制面</el-button>  
       
  </div>
</template>
<script>

  
   
    import {drawManagerCtrl}  from  "gismap3";
    import {symbolTool}  from  "gismap3";
    import {symbolCreator} from "gismap3";
    import {geometryCreator} from "gismap3";
    import {graphicCreator} from "gismap3";
    import {layerManager} from "gismap3";
    import {baseMapManagerCtrl} from "gismap3";
    
    
  export default {
      
      
       components:{
           
          },
        data() {
            return {
                
               mapId:'5555',  
               mapHeight:'500px',
               mapWidth:'1000px',
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
          draw(type){
              
              drawManagerCtrl.activeTool(this.mapId,type,"draw");          
          },
         draw2(type){
                                      
              drawManagerCtrl.activeTool(this.mapId,type,"draw",symbolTool.getSymbol("polygon")  );              
          },
          draw3(){
             
              let graphiclayer = layerManager.setGraphicLayer(this.mapId,"ddd");
              graphiclayer.clear();
             
             let point  = geometryCreator.create({
                          type:"Point",
                          spatialReference:baseMapManagerCtrl.mapHash[this.mapId].spatialReference,
                          coord:[89462.5480346659, 40050.78687115885]
             
                      })
            let symbol = symbolCreator.create(
               {
   
                  type: "esriSMS",
                  style: "esriSMSSquare",
                  size:10,
                  outline: {
                    color: [152,230,0,255],
                    width: 1
                  },
                  color:[152,230,0,255],
                }
   
            )
                         
            let graphic = graphicCreator.createGraphic(point,symbol);
            
            graphiclayer.add(graphic);
          },
          draw4(){
              
             let graphiclayer = layerManager.setGraphicLayer(this.mapId,"ddd");
             graphiclayer.clear();
             
             let point  = geometryCreator.create({
                       type:"Polyline",
                       spatialReference:baseMapManagerCtrl.mapHash[this.mapId].spatialReference,
                       coord:[[89462.5480346659, 40050.78687115885],[95442.14332718981,37246.197928647634]]
             
                     })
                     
           let symbol = symbolCreator.create(
             {
               "type": "esriSLS",
               "style": "esriSLSSolid",
               "color": [115,76,0,255],
               "width": 1
             }
   
           )
           
          
           let graphic = graphicCreator.createGraphic(point,symbol);
           graphiclayer.add(graphic); 
          },
          draw5(){
              
               let graphiclayer = layerManager.setGraphicLayer(this.mapId,"ddd");
               graphiclayer.clear();
              
              let point  = geometryCreator.create({
                        type:"Polygon",
                        spatialReference:baseMapManagerCtrl.mapHash[this.mapId].spatialReference,
                        coord:[[89462.5480346659, 40050.78687115885],[95442.14332718981,37246.197928647634],[89197.96417216484, 34864.94316613811]]
              
                      })
                      
            let symbol = symbolCreator.create(
              {
                "type": "esriSFS",
                "style": "esriSFSSolid",
                "color": [115,76,0,255],
                "outline": {
                  "type": "esriSLS",
                  "style": "esriSLSSolid",
                  "color": [110,110,110,255],
                  "width": 1
                }
              }
    
            )
            
            let graphic = graphicCreator.createGraphic(point,symbol);
            graphiclayer.add(graphic);
          },   
              
           
        },
        
        mounted(){
           
          
        }
    }
</script>
```
:::



**drawManagerCtrl** 方法

|名称  |参数  | 参数类型参数描述  |描述  |
|---|-----:|:----:|:----:|
|  activeTool     |    (mapId,type,layerName,symbol)    |  (string,string,string,Symbol)  地图id，图形类型，自定义图层名称，draw的symbol，默认不传      |  手动绘制图形    |




**geometryCreator** 方法

|名称  |参数  | 参数类型参数描述  |描述  |
|---|-----:|:----:|:----:|
|  create     |    (config)    |  (Object)  geometry描述文件（点，线，面）     |  创建一个geometry   |


**graphicCreator** 方法

|名称  |参数  | 参数类型参数描述  |描述  |
|---|-----:|:----:|:----:|
|  createGraphic     |    ()    |  ()       |  创建一个空的graphic   |
|  createConfigGraphic     |    (geometry,symbol)    |   (Geometry，Symbol) arcgis的geometry，arcgis的symbol  |  创建一个graphic   |
|  createNullGraphic     |    (geometry,symbol)    |  (Object，Object)  geometry描述文件，symbol描述文件   |  创建一个graphic   |









