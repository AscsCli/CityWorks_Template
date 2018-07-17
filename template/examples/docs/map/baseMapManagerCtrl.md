# baseMapManagerCtrl

## 地图基础类


baseMapManagerCtrl 主要是地图加载完毕后存取arcgis 的map对象，以后统一从这里取map对象


<baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
    <el-button @click="setExtent" type="primary">恢复初始位置</el-button>
    <el-button @click="showOverView" type="primary">鹰眼图</el-button>
     <el-button @click="closeOverView" type="primary">关闭鹰眼图</el-button>
::: demo
```html
<template>
<div>
    <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
    <el-button @click="setExtent" type="primary">恢复初始位置</el-button>
    <el-button @click="showOverView" type="primary">鹰眼图</el-button>
    <el-button @click="closeOverView" type="primary">关闭鹰眼图</el-button>
</div>   

</template>
<script>

   import {baseMapManagerCtrl} from "gismap3";
  
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
           setExtent(){
               
               baseMapManagerCtrl.setMapInitExtent(this.mapId);
           },
           showOverView(){
               
               baseMapManagerCtrl.showOverView(this.mapId,true);
           },
           closeOverView(){
               
               baseMapManagerCtrl.showOverView(this.mapId,false);
           }
           
        },
        mounted(){
          
        }
    }
</script>
```
:::



#### 比如要取得地图id 的map 经常使用
```javascript

     import  { baseMapManagerCtrl } from "gismap3";
     
     let map = baseMapManagerCtrl.mapHash[mapId]
     

```


**baseMapManagerCtrl** 属性

|名称  |类型  |默认值  |描述  |
|---|-----:|:----:|:----:|
|  isLoad     |    Object  |    {}      |  地图id 是否加载完毕{ xxx:true}     |
|  mapHash    |   Object  |     {}     |   arcgis map 对象  {xxx:map}     |
|  config     |       Object |   {}      |  底图配置文件 { xxx:config}    |
|  initExtent    |    Object  |   {}   | 初始位置  { xxx:extent }     |
|  overViewHash    |     Object    |   {}   | 地图id的鹰眼图 { xxx:overView}    |


**baseMapManagerCtrl** 方法

|名称  |参数  | 参数类型参数描述  |描述  |
|---|-----:|:----:|:----:|
|  setMapInitExtent     |    (mapId)    |  (string)  地图id      |  设置地图初始位置    |
|  setExtent    |     (mapId,extent)     | (string,Object)    地图id，初始范围    |   设置自定义范围     |
|  showOverView     |      (mapId,bool)  |  (string,Boolean) 地图id,是否开启     |  是否显示鹰眼图    |


