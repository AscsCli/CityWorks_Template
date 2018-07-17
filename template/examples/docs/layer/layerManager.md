# 图层管理layerManager



   <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
   <el-button @click="open(['深圳市规划选址意见书'],true)"  type="primary">打开深圳市规划选址意见书</el-button>
   <el-button @click="open(['深圳市规划选址意见书'],false)" type="primary">关闭深圳市规划选址意见书</el-button>
   <el-button @click="open(['2015年遥感影像'],true)" type="primary">打开2015年遥感影像</el-button>
   <el-button @click="open(['2015年遥感影像'],false)" type="primary">关闭2015年遥感影像</el-button>
   <el-button @click="open(['深圳市规划选址意见书','建设用地规划许可证'],true)" type="primary">打开深圳市规划选址意见书，建设用地规划许可证</el-button>
   <el-button @click="open(['深圳市规划选址意见书','建设用地规划许可证'],false)" type="primary">关闭深圳市规划选址意见书，建设用地规划许可证</el-button>
::: demo

```html
<template>
<div>
     <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
     <el-button @click="open(['深圳市规划选址意见书'],true)"  type="primary">打开深圳市规划选址意见书</el-button>
     <el-button @click="open(['深圳市规划选址意见书'],false)" type="primary">关闭深圳市规划选址意见书</el-button>
     <el-button @click="open(['2015年遥感影像'],true)" type="primary">打开2015年遥感影像</el-button>
     <el-button @click="open(['2015年遥感影像'],false)" type="primary">关闭2015年遥感影像</el-button>
     <el-button @click="open(['深圳市规划选址意见书','建设用地规划许可证'],true)" type="primary">打开深圳市规划选址意见书，建设用地规划许可证</el-button>
    <el-button @click="open(['深圳市规划选址意见书','建设用地规划许可证'],false)" type="primary">关闭深圳市规划选址意见书，建设用地规划许可证</el-button>
  </div>
</template>
<script>

  
    import {configLoadTool} from  "gismap3";
    import {layerManager} from  "gismap3";
    
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
          open(layerNames,flag){
              
              layerManager.showLayerByName(this.mapId,layerNames,flag);
          }
           
        },
        mounted(){
           
            configLoadTool.load("json");
        }
    }
</script>
```
:::


可以看出这个是有顺序叠加的 **业务图层>遥感>底图** 在我们生成gismap3数据结构时候有个 **priority** 
值就是设置图层的叠加顺序底图默认是0，越高表示叠加顺序等级越高 layerManager.showLayerByName不建议不同类型的图层打开
~~layerManager.showLayerByName(mapId,["深圳市规划选址意见书","2015年遥感影像"],true)~~


**layerManager** 方法

layerName 指的是gismap3的数据结构的DISPLAYLAYERNAME

|名称  |参数  | 参数类型参数描述  |描述  |
|---|-----:|:----:|:----:|
|  showLayerByName     |   (mapId,layerName,isShow,layerType='')    |  (string,string,Boolean,string) (地图id，数据结构的DISPLAYLAYERNAME，是否打开，图层类型默认不传)      | 根据图层名称组 打开或关闭图层  |
|  getAgsLayerFromMapWithUrl    |    (map,url,mapServiceType = '')   | (string,string,string) (arcgis map对象，数据结构的MAPSERVICES，图层类型默认不传)      |    获取arcgis 的 layer 对象  |
|  getAgsLayerIndexFromMapWithUrl    |    (map,url,mapServiceType = '')   | (string,string,string)     (arcgis map对象，数据结构的MAPSERVICES，图层类型默认不传)   |     获取arcgis 的 layer 对象   |
|  setGraphicLayer    |    (mapId,layerName)   | (string,string)   (地图id，自定义名称)    |   申请一个新的GraphicLayer 若已经有了则会返回原来的  |
|  getQueryLayerByType    |   (mapId,type,layerNames)  | (string,string,Arrary)       |    根据top，special，visible获取图层的layerConfig  |
|  setLayerOpacity    |   (mapId,layerName,alpha) | (string,string,Number)    (地图id，数据结构的DISPLAYLAYERNAME，alpha透明度)  |    根据图层名称设置整个图层的透明度 |



GraphicLayer 是自己绘制的layer 他用来装载点线面
在以往开发中会经常new 这里layerManager统一管理
下面以一个行车轨迹来管理
```javascript

  import {layerManager} from 'gismap3'

  //用来存放轨迹layer
  let aLayer = layerManager.setGraphicLayer("555","line");
 //用来起点 终点
  let bLayer = layerManager.setGraphicLayer("555","point");
   //用来存放 标注比如车的车牌号时间之类
  let cLayer = layerManager.setGraphicLayer("555","text");
  

```


