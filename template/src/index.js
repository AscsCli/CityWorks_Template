/**
 * Created by Administrator on 2017/4/21 0021.
 */

/*
* 文件名：3d_factory
* 功能：三维引擎与vue controller的中间层，
* 用于方便三维引擎的切换
* */
//初始化三维场景



import {eventBus} from "../packages/event/EventBus";

import {buffTool} from "../packages/buff/BuffTool";

import {cityWorkLinkAge_Business_Ctrl} from "../packages/cityWorkLinkAge/CityWorkLinkAge_Bussiness_Ctrl";
import {cityWorkLinkageCtrl} from "../packages/cityWorkLinkAge/CityWorkLinkageCtrl";

import {configLoadTool} from "../packages/configmanager/ConfigLoadTool";
import {configManagerCtrl} from "../packages/configmanager/ConfigManagerCtrl";
import {LayerConifg} from "../packages/configmanager/LayerConifg";

import {diagramTool} from "../packages/diagram/DiagramTool";

import {drawManagerCtrl} from "../packages/drawManager/DrawManagerCtrl";

import {layerManager} from "../packages/layermanager/LayerManagerCtrl";
import {layerTypeEnum} from "../packages/layermanager/LayerType";

import {locateManagerCtrl} from "../packages/locateManager/LocateManagerCtrl";

import {baseMapManagerCtrl} from "../packages/map/BaseMapManagerCtrl";
import {baseMap_bussiness_ctrl} from "../packages/map/BaseMap_Business_Ctrl";

import {measureTool} from "../packages/measure/MeasureTool";
import {gpService} from "../packages/measure/GPService";

import {mouseMoveTool} from "../packages/mouseMove/MouseMoveTool";

import {printTool} from "../packages/print/PrintTool";


import {queryTool} from "../packages/query/QueryTool";
import {QueryResult} from "../packages/query/QueryResult";
import {queryManagerCtrl} from "../packages/query/QueryManagerCtrl";


import {swipeTool} from "../packages/swipe/SwipeTool";

import {symbolTool} from "../packages/symbolTool/SymbolTool";


import {gaodeAnnoLayer} from "../packages/thirdPartMap/gaode/GaodeAnnoLayer";
import {gaodeImageLayer} from "../packages/thirdPartMap/gaode/GaodeImageLayer";
import {gaodeLayer} from "../packages/thirdPartMap/gaode/GaodeLayer";
import {gaodeTool} from "../packages/thirdPartMap/gaode/GaodeTool";
import {gaodeType} from "../packages/thirdPartMap/gaode/GaodeType";

import {tdtLayer} from "../packages/thirdPartMap/tiandi/TDTLayer";
import {tdtImageLayer} from "../packages/thirdPartMap/tiandi/TDTImageLayer";
import {tdtImageAnnoLayer} from "../packages/thirdPartMap/tiandi/TDTImageAnnoLayer";
import {tdtType} from "../packages/thirdPartMap/tiandi/TDTType";
import {tdtTool} from "../packages/thirdPartMap/tiandi/TDTTool";

import {mapBoxLayer} from "../packages/thirdPartMap/mapbox/MapBoxLayer";
import {mapBoxType} from "../packages/thirdPartMap/mapbox/MapBoxType";

import {loadScriptTool} from "../packages/tool/LoadScriptTool";

import {geometryCreator} from "../packages/creator/GeometryCreator";
import {symbolCreator} from "../packages/creator/SymbolCreator";
import {graphicCreator} from "../packages/creator/GraphicCreator";

import {uniqueRenderTool} from "../packages/visualization/UniqueRenderTool";
import {classRenderTool} from "../packages/visualization/ClassRenderTool";
import {clusterLayer} from "../packages/visualization/ClusterLayer";
import {clusterRenderTool} from "../packages/visualization/ClusterRenderTool";
import {heatRenderTool} from "../packages/visualization/HeatRenderTool";
import {blendRenderTool} from "../packages/visualization/BlendRenderTool";
import {renderLayerManager} from "../packages/visualization/RenderLayerManager";

export {

  eventBus,

  baseMapManagerCtrl,
  baseMap_bussiness_ctrl,

  layerManager,
  layerTypeEnum,

  cityWorkLinkAge_Business_Ctrl,
  cityWorkLinkageCtrl,

  configLoadTool,
  configManagerCtrl,
  LayerConifg,

  locateManagerCtrl,

  drawManagerCtrl,

  measureTool,
  gpService,

  buffTool,

  diagramTool,

  mouseMoveTool,

  printTool,

  queryTool,
  QueryResult,
  queryManagerCtrl,

  swipeTool,
  symbolTool,

  loadScriptTool,

  gaodeAnnoLayer,
  gaodeImageLayer,
  gaodeLayer,
  gaodeTool,
  gaodeType,


  tdtLayer,
  tdtImageLayer,
  tdtImageAnnoLayer,
  tdtType,
  tdtTool,

  mapBoxLayer,
  mapBoxType,

  geometryCreator,
  symbolCreator,
  graphicCreator,

  uniqueRenderTool,
  classRenderTool,
  clusterLayer,
  clusterRenderTool,
  heatRenderTool,
  blendRenderTool,
  renderLayerManager

};
