
<template>
  <div id="app">
    <div>
      <baseMap :mapId="mapId" :initExtent="extent" :layerType="layerType"  :mapType="mapType1"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
      <baseMap :mapId="mapId1"    :mapType="mapType1"  :mapHeight="mapHeight"  :mapWidth="mapWidth" url="http://61.144.226.44:6080/arcgis/rest/services/basemap/szmap_basemap_201608_01/MapServer"></baseMap>
      <canvas id="myCanvas" width="800px" height="600px"></canvas>
    </div>

    <!--<cityWorkLinkage :mapIdArr="mapIdArr"></cityWorkLinkage>-->

    <!--<configView :loadDataType="loadDataType"></configView>-->
    <!--<object id="TEX"  style="width:100%;height:100%;" classid="clsid:3a4f9196-65a8-11d5-85c1-0001023952c1"></object>-->
    <!--<Test></Test>-->
    <div>
      <el-button @click="test()" type="primary">打开图层</el-button>
      <el-button @click="test2()" type="primary">关闭图层</el-button>
      <el-button @click="test3()" type="primary">定位</el-button>
      <el-button @click="test4()" type="primary">鹰眼图</el-button>
      <el-button @click="test5()" type="primary">绘制面</el-button>
      <el-button @click="test6()" type="primary">遥感图层打开</el-button>
      <el-button @click="test7()" type="primary">遥感图层关闭</el-button>
      <el-button @click="test8()" type="primary">框选查询</el-button>
      <el-button @click="test9()" type="primary">开启点选查询</el-button>
      <el-button @click="test10()" type="primary">关闭点选查询</el-button>
      <el-button @click="test11()" type="primary">测量长度</el-button>
      <el-button @click="test12()" type="primary">测量面积</el-button>
      <el-button @click="test13()" type="primary">开启坐标查询</el-button>
      <el-button @click="test14()" type="primary">关闭坐标查询</el-button>
      <el-button @click="test15()" type="primary">缓冲区</el-button>
      <el-button @click="test16()" type="primary">卷帘2015</el-button>
      <el-button @click="test17()" type="primary">关闭卷帘2015</el-button>
      <el-button @click="test18()" type="primary">打印</el-button>
      <el-button @click="test19()" type="primary">初始位置</el-button>
      <el-button @click="test20()" type="primary">管线切剥</el-button>
      <el-button @click="test22()" type="primary">画点咯</el-button>
      <el-button @click="test25()" type="primary">class图</el-button>
      <el-button @click="test26()" type="primary">unique图</el-button>
      <el-button @click="test27()" type="primary">blend图</el-button>
      <el-button @click="test28()" type="primary">热点图1</el-button>
      <el-button @click="test29()" type="primary">热点图2</el-button>
      <el-button @click="test30()" type="primary">聚合图</el-button>
      <el-button @click="test31()" type="primary">close聚合图</el-button>
      <el-button @click="test32()" type="primary">json的热点图</el-button>
      <el-button @click="test33()" type="primary">json的blend图</el-button>
      <el-button @click="test34()" type="primary">json的class图</el-button>
      <el-button @click="test35()" type="primary">json的unquie图</el-button>
    </div>

  </div>
</template>

<script>

  import baseMap from '../src/components/map/baseMap.vue';
  import {eventBus} from "Packages/event/EventBus"
  import {layerManager} from "Packages/layermanager/LayerManagerCtrl";
  import {configLoadTool} from "Packages/configmanager/ConfigLoadTool";
  import {baseMapManagerCtrl} from "Packages/map/BaseMapManagerCtrl";
  import  {drawManagerCtrl} from "Packages/drawManager/DrawManagerCtrl";
  import {cityWorkLinkAge_Business_Ctrl} from "Packages/cityWorkLinkAge/CityWorkLinkAge_Bussiness_Ctrl";
  import {locateManagerCtrl} from "Packages/locateManager/LocateManagerCtrl";
  import {queryManagerCtrl} from 'Packages/query/QueryManagerCtrl';
  import {mouseMoveTool} from 'Packages/mouseMove/MouseMoveTool';
  import {measureTool} from 'Packages/measure/MeasureTool';
  import {buffTool} from 'Packages/buff/BuffTool';
  import {queryTool} from 'Packages/query/QueryTool';
  import {swipeTool} from 'Packages/swipe/SwipeTool';
  import {printTool} from 'Packages/print/PrintTool';
  import {symbolTool} from 'Packages/symbolTool/SymbolTool';
  import {gaodeLayer} from 'Packages/thirdPartMap/gaode/GaodeLayer';
  import {pipeDissectionCtrl} from "Packages/pipe/PipeDissectionCtrl";
  // import MyLogger from 'vuelogger';
  import {loadScriptTool} from "Packages/tool/LoadScriptTool";
  import {symbolCreator} from "Packages/creator/SymbolCreator";
  import {geometryCreator} from "Packages/creator/GeometryCreator";
  import {graphicCreator} from "Packages/creator/GraphicCreator";
  import {classRenderTool} from "Packages/visualization/ClassRenderTool";
  import {uniqueRenderTool} from "Packages/visualization/UniqueRenderTool";
  import {blendRenderTool} from "Packages/visualization/BlendRenderTool";
  import {heatRenderTool} from "Packages/visualization/HeatRenderTool";
  import {clusterRenderTool} from "Packages/visualization/ClusterRenderTool";
  import {renderLayerManager} from "Packages/visualization/RenderLayerManager";

  import * as esriLoader from 'esri-loader';



  export default {
    components:{
      baseMap,
    },
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        mapId:'5555',
        mapId1:'6666',
        mapHeight:'500px',
        mapWidth:'1000px',
        mapType1:'tiled',
        layerType:"",
        mapIdArr:['5555','6666'],
        loadDataType:'local',
//        url:"http://121.201.65.133:2001/arcgis/rest/services/szmap_10_170117/MapServer",
        url:"http://172.25.10.61:6080/arcgis/rest/services/Vector2014_FzLocal/MapServer",
        extent:{
//
//              xmax:106845.70780098543,
//              ymax:54047.27319746484,
//              xmin:87001.91811340605,
//              ymin:18751.785939823654

          xmin: 423423.9097258734,
          ymin: 2881476.5658263583,
          xmax: 428195.87594482175,
          ymax: 2883862.5489358325

//          xmax:113.90645352905051,
//          ymax:22.796252280092517,
//          xmin:113.76912442748801,
//          ymin:22.571375876283923,
        }
//        url:"http://172.25.10.61:6080/arcgis/rest/services/sub2014fz_dom/ImageServer"


      }

    },
    methods:{
      test:function(){

//        layerManager.showLayerByName('5555',['建设工程规划许可证'],true);
//        layerManager.showLayerByName('5555',['泵站'],true);
          layerManager.showLayerByName('5555',['给水_L',"污水_L"],true);

      },
      test2:function () {
        layerManager.showLayerByName('5555',['建设工程规划许可证'],false);
//        layerManager.showLayerByName('5555',['泵站'],false);
      },
      test3:function () {

        let expresstion  ="LICENSE_NO = 'LG20050679' ";
//        locateManagerCtrl.zoomByExpresstion('5555','建设工程规划许可证',expresstion);

        locateManagerCtrl.zoomByExpresstion("5555","污水_L","OBJECTID =  1")
//
      },
      test4:function () {
        baseMapManagerCtrl.showOverView(this.mapId,true);
      },
      test5:function () {

        drawManagerCtrl.setSymbol = symbolTool.getSymbol("POLYGON")
        drawManagerCtrl.activeTool(this.mapId,'POLYGON',"draw",symbolTool.getSymbol("polygon"));
      },
      test6:function () {
        layerManager.showLayerByName(this.mapId,['2015年遥感影像'],true);
      },
      test7:function () {
        layerManager.showLayerByName(this.mapId,['2015年遥感影像'],false);
      },
      test8:function () {
        queryManagerCtrl.polygonQuery(this.mapId,'EXTENT','visible',[],function(arr)
        {
          console.log(arr);
        })
      },
      test9:function () {
        mouseMoveTool.startQuery(this.mapId);
      },
      test10:function () {
        mouseMoveTool.stopQuery(this.mapId);
      },
      test11:function () {
        measureTool.measure(this.mapId,'POLYLINE');
      },
      test12:function () {
        measureTool.measure(this.mapId,'POLYGON');
      },
      test13:function () {
        measureTool.coordClick(this.mapId,true)
      },
      test14:function () {
        measureTool.coordClick(this.mapId,false)
      },
      test15(){
        buffTool.buffer(this.mapId,'POLYGON',25,function(graphic){


          queryTool.doSpatialQuery(graphic.geometry,function(result){
            console.log(result)
          })
        })
      },
      test16(){
        swipeTool.start(this.mapId,'vertical',['2015年遥感影像','2014年遥感影像'])
//        swipeTool.start(this.mapId,'vertical',['建设用地规划许可证','综合医院'])
      },
      test17(){
        swipeTool.stop(this.mapId);
      },
      test18:function () {
        printTool.print(this.mapId,1000,800,'PNG32');
      },
      test19:function () {
         baseMapManagerCtrl.setMapInitExtent(this.mapId)
      },
      test20:function () {


        pipeDissectionCtrl.dissection(this.mapId,"myCanvas",["给水_L","污水_L"]);
      },
      test21:function () {
         let point  = geometryCreator.create({
             type:"Point",
             spatialReference:baseMapManagerCtrl.mapHash[this.mapId].spatialReference,
             coord:[425926.80600771174,2882127.939215245]

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
         let graphiclayer = layerManager.setGraphicLayer(this.mapId,"ddd");
         let graphic = graphicCreator.createGraphic(point,symbol);
         graphiclayer.add(graphic);

      },
      test22:function () {
        let point  = geometryCreator.create({
          type:"Polyline",
          spatialReference:baseMapManagerCtrl.mapHash[this.mapId].spatialReference,
          coord:[[425926.80600771174,2882127.939215245],[429190.8309014724,2881517.12753922]]

        })
        let symbol = symbolCreator.create(
          {
            "type": "esriSLS",
            "style": "esriSLSSolid",
            "color": [115,76,0,255],
            "width": 1
          }

        )
        let graphiclayer = layerManager.setGraphicLayer(this.mapId,"ddd");
        let graphic = graphicCreator.createGraphic(point,symbol);
        graphiclayer.add(graphic);

      },
      test23:function () {
        let point  = geometryCreator.create({
          type:"Polygon",
          spatialReference:baseMapManagerCtrl.mapHash[this.mapId].spatialReference,
          coord:[[425926.80600771174,2882127.939215245],[429190.8309014724,2881517.12753922],[427806.9606979774,2879350.6548758172]]

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
        let graphiclayer = layerManager.setGraphicLayer(this.mapId,"ddd");
        let graphic = graphicCreator.createGraphic(point,symbol);
        graphiclayer.add(graphic);

      },
      test25:function () {

        let config = {

          "type" : "classBreaks",
          "field" : "shape_Length",
          "minValue" : 1000,
          "classBreakInfos" :[
            {
              "classMaxValue" : 50000,
              "symbol" :
                {
                  "type" : "esriSFS",
                  "style" : "esriSFSSolid",
                  "color" : [236,252,204,255],

                }
            },
            {
              "classMaxValue" : 100000,
              "symbol" :
                {
                  "type" : "esriSFS",
                  "style" : "esriSFSSolid",
                  "color" : [218,240,158,255],


                }
            },
            {
              "classMaxValue" : 150000,
              "symbol" :
                {
                  "type" : "esriSFS",
                  "style" : "esriSFSSolid",
                  "color" : [255,255,0,255],

                }
            },
            {
              "classMaxValue" : 200000,
              "symbol" :
                {
                  "type" : "esriSFS",
                  "style" : "esriSFSSolid",
                  "color" : [110,110,110,255],

                }
            },
          ]

        }
        classRenderTool.setRender(this.mapId1,"行政区划",config);

      },
      test26(){

          let config = {
            "type" : "uniqueValue",
            "field1" : "NAME",

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

        uniqueRenderTool.setRender(this.mapId1,"行政区划",config)
      },
      test27(){

            let config = {
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
            blendRenderTool.setRender(this.mapId,"医院",config);

      },
      test28(){
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
      test29(){
        let config = {

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
        heatRenderTool.setRender(this.mapId,"医院",config)

      },
      test30(){
          let config  = {

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

        clusterRenderTool.setRender(this.mapId,"法人_建筑",config);
      },
      test31(){
        clusterRenderTool.hideAllFeatureLayer();
        renderLayerManager.hideAllFeatureLayer();
      },
      test32(){
        let graphiclayer = layerManager.setGraphicLayer(this.mapId,"aaa");
        locateManagerCtrl.queryGraphics(this.mapId,"法人_建筑","1 = 1").then((r) =>{

          let config = {

            blurRadius:15,
            colorStops:[
              "rgba(255, 255, 0, 0)",
              "rgba(73, 111, 235, 0.5)",
              "rgba(248, 235, 41, 0.6)",
              "rgba(234, 60, 40, 0.9)"
            ]



          }
          heatRenderTool.setRenderByGraphicLayer(this.mapId,"aaa",config,r.features)

        })



      },
      test33(){

        locateManagerCtrl.queryGraphics(this.mapId,"医院","1 = 1").then((r) =>{


          let config = {
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
          blendRenderTool.setRenderByGraphicLayer(this.mapId,"ddd1",config,r.features)
        })

      },
      test34(){

        locateManagerCtrl.queryGraphics(this.mapId1,"行政区","1 = 1").then((r) =>{


          let config = {

            "type" : "classBreaks",
            "field" : "SHAPE.LEN",
            "minValue" : 1000,
            "classBreakInfos" :[
              {
                "classMaxValue" : 50000,
                "symbol" :
                  {
                    "type" : "esriSFS",
                    "style" : "esriSFSSolid",
                    "color" : [236,252,204,255],

                  }
              },
              {
                "classMaxValue" : 100000,
                "symbol" :
                  {
                    "type" : "esriSFS",
                    "style" : "esriSFSSolid",
                    "color" : [218,240,158,255],


                  }
              },
              {
                "classMaxValue" : 150000,
                "symbol" :
                  {
                    "type" : "esriSFS",
                    "style" : "esriSFSSolid",
                    "color" : [255,255,0,255],

                  }
              },
              {
                "classMaxValue" : 200000,
                "symbol" :
                  {
                    "type" : "esriSFS",
                    "style" : "esriSFSSolid",
                    "color" : [110,110,110,255],

                  }
              },
            ]

          }
          console.log(r.features);
          classRenderTool.setRenderByGraphicLayer(this.mapId1,"ddd",config,r.features);

        })

      },
      test35(){
        locateManagerCtrl.queryGraphics(this.mapId1,"行政区","1 = 1").then((r) =>{

            let config = {
            "type" : "uniqueValue",
            "field1" : "NAME",

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

          uniqueRenderTool.setRenderByGraphicLayer(this.mapId1,"行政区划",config,r.features)

        })
      }

    },
    mounted(){

        // console.log(MyLogger)
//
//      let mylogger  = new MyLogger;
//      mylogger.debug("444");


      //加载layer
      configLoadTool.load();
      //启动联动
//      cityWorkLinkAge_Business_Ctrl.init(this.mapIdArr)

      eventBus.bus.addListener(eventBus.MOUSE_CLICK_QUERY,function(result){
        console.log(result);
      })

      eventBus.bus.addListener(eventBus.AREA,function(result){
        console.log(result);
      })

      eventBus.bus.addListener(eventBus.COORD,function(result){
        console.log(result);
      })

      eventBus.bus.addListener(eventBus.PRINT_RESULT,function(result){
        console.log(result);
      })

      eventBus.bus.addListener(eventBus.LENGTH,function(result){
        console.log(result);
      })
    }
  }
</script>

<style>

</style>
