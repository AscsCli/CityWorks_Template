<template>
        <div :id="mapId" class="mapI" v-bind:style="'width:'+mapWidth+';height:'+mapHeight">
            <div id="swipeDiv"></div>
        </div>
</template>
<script>

    import {baseMap_bussiness_ctrl} from "Packages/map/BaseMap_Business_Ctrl";

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
                    return {
                              xmin:0,
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
          this.mapId,this.url,this.mapType,this.visibleLayer

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
          console.log("11111")
          baseMap_bussiness_ctrl.init(config);
        }
    }
</script>
<style>
.mapI{
    width: 100% !important;
}
</style>
