/**
 * Created by Administrator on 2017/4/21 0021.
 */

/*
* 文件名：3d_factory
* 功能：三维引擎与vue controller的中间层，
* 用于方便三维引擎的切换
* */
//初始化三维场景


import "babel-polyfill"
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


window.gismap3 = new Object();

window.gismap3.eventBus = eventBus;

window.gismap3.baseMapManagerCtrl = baseMapManagerCtrl;

window.gismap3.baseMap_bussiness_ctrl = baseMap_bussiness_ctrl;

window.gismap3.layerManager = layerManager;

window.gismap3.layerTypeEnum = layerTypeEnum;

window.gismap3.cityWorkLinkAge_Business_Ctrl = cityWorkLinkAge_Business_Ctrl;

window.gismap3.cityWorkLinkageCtrl = cityWorkLinkageCtrl;

window.gismap3.configLoadTool = configLoadTool;

window.gismap3.configManagerCtrl = configManagerCtrl;

window.gismap3.LayerConifg = LayerConifg;

window.gismap3.locateManagerCtrl = locateManagerCtrl;

window.gismap3.drawManagerCtrl = drawManagerCtrl;

window.gismap3.measureTool = measureTool;

window.gismap3.gpService = gpService;

window.gismap3.buffTool = buffTool;

window.gismap3.diagramTool = diagramTool;

window.gismap3.mouseMoveTool = mouseMoveTool;

window.gismap3.printTool = printTool;

window.gismap3.queryTool = queryTool;

window.gismap3.queryManagerCtrl = queryManagerCtrl;

window.gismap3.QueryResult = QueryResult;

window.gismap3.swipeTool = swipeTool;

window.gismap3.symbolTool = symbolTool;

window.gismap3.gaodeAnnoLayer = gaodeAnnoLayer;

window.gismap3.gaodeImageLayer = gaodeImageLayer;

window.gismap3.gaodeLayer = gaodeLayer;

window.gismap3.gaodeTool = gaodeTool;

window.gismap3.gaodeType = gaodeType;

window.gismap3.tdtLayer = tdtLayer;

window.gismap3.tdtImageLayer = tdtImageLayer;

window.gismap3.tdtImageAnnoLayer = tdtImageAnnoLayer;

window.gismap3.tdtType = tdtType;

window.gismap3.tdtTool = tdtTool;

window.gismap3.mapBoxLayer = mapBoxLayer;

window.gismap3.mapBoxType = mapBoxType;

window.gismap3.loadScriptTool = loadScriptTool;

window.gismap3.symbolCreator = symbolCreator;

window.gismap3.graphicCreator = graphicCreator;

window.gismap3.geometryCreator = geometryCreator;

window.gismap3.uniqueRenderTool = uniqueRenderTool;

window.gismap3.classRenderTool = classRenderTool;

window.gismap3.clusterLayer = clusterLayer;

window.gismap3.clusterRenderTool = clusterRenderTool;

window.gismap3.heatRenderTool = heatRenderTool;

window.gismap3.blendRenderTool = blendRenderTool;

window.gismap3.renderLayerManager = renderLayerManager;
