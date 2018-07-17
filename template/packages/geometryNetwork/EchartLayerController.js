import * as esriLoader from 'esri-loader'
import  {elOption} from './EchartLayerConfig'

export const EchartLayerController = {};

 EchartLayerController.container={};


/**
 * mapEchart控制器
 * @param instance 实例名称 string
 *
 * @param doWhat 操作内容
 * @param data 数据二维数组
 * @param mapInstance 地图map实例
 */
 EchartLayerController.do=function(doWhat,instance,data,mapInstance) {





     esriLoader.dojoRequire([
         "dojo/_base/declare",
         "dojo/_base/lang", "esri/geometry/Point", "esri/geometry/ScreenPoint"
     ], function(declare, lang, Point, ScreenPoint) {


         //declart EchartsLayer类
         declare("EchartsLayer", null, {
             name: "EchartsLayer",
             _map: null,
             _ec: null,
             _option: null,
             _mapOffset: [0, 0],
             _div:null,
             constructor: function(map) {
                 this._map = map;
                 var div = this._echartsContainer = document.createElement('div');
                 div.style.position = 'absolute';
                 div.style.height = map.height + 'px';
                 div.style.width = map.width + 'px';
                 div.style.top = 0;
                 div.style.left = 0;
                 map.__container.appendChild(div);
                 this._div=div;
                 this._init(map);
             },
             _init: function(map) {
                 var self = this;
                 self._map = map;
                 //初始化mapoverlay
                 /**
                  * 获取echarts容器
                  *
                  * @return {HTMLElement}
                  * @public
                  */
                 self.getEchartsContainer = function() {
                     return self._echartsContainer;
                 };

                 /**
                  * 获取map实例
                  *
                  * @return {map.Map}
                  * @public
                  */
                 self.getMap = function() {
                     return self._map;
                 };
                 /**
                  * 地理坐标转换为屏幕像素
                  *
                  * @param {Array.<number>} geoCoord
                  * @return {Array.<number>}
                  * @public
                  */
                 self.geoCoord2Pixel = function(geoCoord) {
                     var point = new Point(geoCoord[0], geoCoord[1]);
                     var pos = self._map.toScreen(point);
                     return [pos.x, pos.y];
                 };

                 /**
                  * 屏幕像素转换为地理坐标
                  *
                  * @param {Array.<number>} pixel  像素坐标
                  * @return {Array.<number>}
                  * @public
                  */
                 self.pixel2GeoCoord = function(pixel) {
                     var point = self._map.toMap(new ScreenPoint(pixel[0], pixel[1]));
                     return [point.lng, point.lat];
                 };

                 /**
                  * 初始化echarts实例
                  *
                  * @return {ECharts}
                  * @public
                  */
                 self.initECharts = function() {
                     var ec=echarts;                //获取二次改动后的echarts 由EchartsSource引入后创建
                     self._ec = ec.init.apply(self, arguments);
                     self._bindEvent();
                     return self._ec;
                 };



                 /**
                  * 获取ECharts实例
                  *
                  * @return {ECharts}
                  * @public
                  */
                 self.getECharts = function() {
                     return self._ec;
                 };

                 /**
                  * 获取地图的偏移量
                  *
                  * @return {Array.<number>}
                  * @public
                  */
                 self.getMapOffset = function() {
                     return self._mapOffset;
                 };

                 /**
                  * 对echarts的setOption加一次处理
                  * 用来为markPoint、markLine中添加x、y坐标
                  *
                  * @public
                  * @param option
                  * @param notMerge
                  */
                 self.setOption = function(option) {

                     self._option = option;
                     var series = option.series || {};



                     // 添加x、y
                     for (var i = 0, item; item = series[i++];) {
                         var markPoint = item.markPoint || {};
                         var markLine = item.markLine || {};

                         var data = markPoint.data;
                         if (data && data.length) {
                             for (var k = 0, len = data.length; k < len; k++) {

                                 self._AddPos(data[k]);
                             }
                         }

                         data = markLine.data;
                         if (data && data.length) {
                             for (var k = 0, len = data.length; k < len; k++) {

                                 self._AddPos(data[k][0]);
                                 self._AddPos(data[k][1]);
                             }
                         }
                     }
                     self._ec.clear();
                     self._ec.setOption(option);
                 };

                 /**
                  * 增加x、y坐标
                  *
                  * @param {Object} obj  markPoint、markLine data中的项，必须有name
                  * @param {Object} geoCoord
                  */
                 self._AddPos = function(obj) {


                     var pos = self.geoCoord2Pixel([obj.GeoX,obj.GeoY]);
                     obj.x = pos[0]; //- self._mapOffset[0];
                     obj.y = pos[1]; //- self._mapOffset[1];
                 };

                 /**
                  * 绑定地图事件的处理方法
                  *
                  * @private
                  */
                 self._bindEvent = function() {
                     self._zoomend=self._map.on('zoom-end', function(e) {
                         self.setOption(self._option);
                     });
                     self._zoomstart= self._map.on('zoom-start', function(e) {
                         self._ec.clear();
                     });
                     self._pan=self._map.on('pan', function(e) {
                         self._ec.clear();
                     });
                     self._panend=self._map.on('pan-end', function(e) {
                         self.setOption(self._option);

                     });

                     self._dragstart=self._ec.getZrender().on('dragstart', function(e) {
                         self._map.disablePan();
                         //self._ec.clear();
                     });
                     self._dragend=self._ec.getZrender().on('dragend', function(e) {
                         self._map.enablePan();
                         //self.setOption(self._option);
                     });
                     self._mousewheel=self._ec.getZrender().on('mousewheel', function(e) {
                         self._ec.clear();
                         self._map.emit('mouse-wheel', e.event)
                     });
                 };


                 /**
                  * echarts效果关闭
                  *
                  * @public
                  */
                 self.stopDisplay = function() {
                     self._map.__container.removeChild(self._div);
                         self._ec.dispose;
                         self._zoomend.remove();
                         self._zoomstart.remove();
                         self._pan.remove();
                         self._panend.remove();
                 };
                 self.initECharts(self._echartsContainer);
             }

         });


         switch(doWhat)
         {
             case "new":
                 if(EchartLayerController.container[instance]==null)
                 {
                     EchartLayerController.container[instance]=start(mapInstance);
                 }
                 else{
                    EchartLayerController.container[instance].stopDisplay;
                     EchartLayerController.container[instance]=start(mapInstance);
                 }
                 break;

             case "close":
                 if(EchartLayerController.container[instance]!=null)
                 {
                    EchartLayerController.container[instance].stopDisplay();

                     EchartLayerController.container[instance]=null;
                 }
                 else{
                     // alert("未找到该实例");
                     return;
                 }  break;

             case "closeAll":
                 for (var prop in EchartLayerController.container) {
                     if(EchartLayerController.container[prop]!=null)
                     {
                         EchartLayerController.container[prop].stopDisplay;
                         EchartLayerController.container[prop]=null;
                     }

                 }


                 break;

             case "update":
                 if(EchartLayerController.container[instance]==null)
                 {
                     if(mapInstance!=null)
                     {
                         EchartLayerController.container[instance]=start(mapInstance);

                     }
                     else{
                         // alert("该实例不存在，请传入map以创建实例")
                         return;
                     }
                 }

                 var option ={

                     series : [
                         {
                             name: '测试',
                             type: 'map',
                             roam: true,
                             hoverable: false,
                             mapType: 'none',
                             // itemStyle:{
                             //     normal:{
                             //         borderColor:'rgba(100,149,237,1)',
                             //         borderWidth:5,
                             //         areaStyle:{
                             //             color: '#1b1b1b'
                             //         }
                             //     }
                             // },
                             data:[],
                             markLine : {

                                 silent:true,
                                 effect :elOption.effect,
                                 itemStyle :elOption.itemStyle,
                                 data :data

                             },
                             // markPoint : {
                             //     symbol:'circle',
                             //     // symbolSize : function (v){
                             //     //     return 10 + v/10
                             //     // },
                             //     effect : {
                             //         show: true,
                             //         //  shadowBlur : 0
                             //     },
                             //     // itemStyle:{
                             //     //     normal:{
                             //     //         label:{show:false}
                             //     //     },
                             //     //     emphasis: {
                             //     //         label:{position:'top'}
                             //     //     }
                             //     // },
                             //     data : [
                             //         {name:'s',GeoX:423865,GeoY:2882658}
                             //     ]
                             // }


                         }

                     ]
                 };

                 EchartLayerController.container[instance].setOption(option);
                 break;

             default:alert("请输入正确操作指令，new、close、update、closeAll")  ;
             return;
         }

         function start(map) {            //初始化EchartLayer 实例
              var overlay = new EchartsLayer(map);
             return overlay;
         }



     });



}






