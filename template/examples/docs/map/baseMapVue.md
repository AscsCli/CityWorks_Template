# 用vue实现一个地图底图



gismap3可以和vue一起使用，如下是封装一个底图组件，调用了baseMap_bussiness_ctrl



```html

<template>
        <div :id="mapId"  v-bind:style="'width:'+mapWidth+';height:'+mapHeight">
            <div id="swipeDiv"></div>
        </div>
</template>
<script>

    import {baseMap_bussiness_ctrl} from "gismap3";
    import {loadScriptTool} from "gismap3";

    export default {
        name:'baseMap',
        props:{

            mapId:{
                type:String,
                default:'mapNode'
            },
            layerType:{
              type:String,
              default:''
            },
            mapWidth: {
                type: [Number,String]
            },
            mapHeight: {
                type: [Number,String]
            },
            url:{
                type: String,
                default:'',
            },
            mapType:{
                type:String,
                default:'tiled',
            },
            visibleLayer:{
                type:Array,
                default(){
                    return [];
                }
            },
            initExtent:{
               type:Object,
                default:function () {
                    return { xmin:0,
                              ymin:0,
                              xmax:0,
                              ymax:0

                    }
                }
            }

        },

        data(){
            return {}
        },
        methods: {


        },
        computed: {


        },
        mounted(){

          loadScriptTool.setDefault();

          let config = {

            mapId:  this.mapId,
            url: this.url,
            mapType:this.mapType,
            visibleLayer:this.visibleLayer,
            layerType:this.layerType,
            extent:{
              xmax:this.initExtent.xmax,
              ymax:this.initExtent.ymax,
              xmin:this.initExtent.xmin,
              ymin:this.initExtent.ymin,
            },
          }
          baseMap_bussiness_ctrl.init(config);
        }
    }
</script>
<style>

</style>


```



