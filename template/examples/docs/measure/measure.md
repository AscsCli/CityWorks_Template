#  测量



   <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
   <el-button  @click="measure1" type="primary">测量周长</el-button>
   <el-button  @click="measure2" type="primary">测量面积</el-button>
   <label>{{resultLabel}}</label>

::: demo

```html
<template>
<div>
     <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
     <el-button  @click="measure1" type="primary">测量周长</el-button>
     <el-button  @click="measure2" type="primary">测量面积</el-button>  
     <label>{{resultLabel}}</label>
     </div>
</template>
<script>

  
    import {eventBus} from  "gismap3";
    import {measureTool}  from  "gismap3";
    
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
               resultLabel:""
        
            }
        },
        methods:{
          measure1(){
              measureTool.measure(this.mapId,'POLYLINE');
          },
          measure2(){
              measureTool.measure(this.mapId,'POLYGON');  
          }
           
        },
        mounted(){
           
           
           let that = this;
            eventBus.bus.addListener(eventBus.AREA,function(result){
                          that.resultLabel = `${result.areas[0].toFixed(2)}m²`;
          //              console.log(result);
                      })
       
            eventBus.bus.addListener(eventBus.LENGTH,function(result){
                that.resultLabel = `${result.lengths[0].toFixed(2)}m`;
//              console.log(result);

            })
        }
    }
</script>
```
:::

**measureTool** 方法

|名称  |参数  | 参数类型参数描述  |描述  |
|---|-----:|:----:|:----:|
|  measure     |    (mapId,type)    |  (string,string)  地图id，图形类型，线测距离 面测面积      |  测绘面积和周长    |

