/**
 * Created by Administrator on 2017/4/10 0010.
 */
import {drawManagerCtrl} from '../drawManager/DrawManagerCtrl'
import {baseMapManagerCtrl} from '../map/BaseMapManagerCtrl'
import {layerManager} from '../layermanager/LayerManagerCtrl'
import {eventBus} from '../event/EventBus'
import {gpService} from './GPService'
import * as esriLoader from 'esri-loader';

export const measureTool = {



}



measureTool.EPSG_GEOGRAPHIC = 102113;

measureTool.coordClickFlag = {};

/**
 * 测量坐标
 * @param mapId
 * @param bool
 */
measureTool.coordClick = function (mapId,bool) {

    let map = baseMapManagerCtrl.mapHash[mapId];

    if(bool == true)
    {
        measureTool.coordClickFlag[mapId] = bool;
        measureTool.mapClickHandle = map.on('mouse-move',measureDownHandle);
    }
    else
    {
        measureTool.coordClickFlag[mapId] = bool;
        if(measureTool.mapClickHandle != null)
        {
            measureTool.mapClickHandle.remove();
        }
    }
    
}


function measureDownHandle(evt)
{
    for(let key of Object.keys(measureTool.coordClickFlag))
    {
        if(measureTool.coordClickFlag[key] == true)
        {
            eventBus.bus.emit(eventBus.COORD,evt.mapPoint);

        }
    }
}

measureTool.clearGraphics = function (mapId) {

    let graphicsLayer = layerManager.setGraphicLayer(mapId,'measure');
    graphicsLayer.clear();
}


/**
 * 测量面积和长度
 * @param mapId
 * @param type
 */
measureTool.measure = function (mapId,type) {

    let layerName = 'measure';
    drawManagerCtrl.activeTool(mapId,type,layerName);
    var listeners = eventBus.bus.getListeners('draw-' + layerName);
    if(listeners.length == 0)
    {
        eventBus.bus.addOnceListener('draw-' + layerName, function(a) {
            if(drawManagerCtrl.drawName == layerName && drawManagerCtrl.drawMapId == mapId)
            {

                    esriLoader.dojoRequire(['esri/map',
                            "esri/config",
                            "esri/SpatialReference",
                            'esri/tasks/LengthsParameters',
                            'esri/tasks/AreasAndLengthsParameters',
                            'esri/tasks/ProjectParameters',
                            'esri/tasks/GeometryService',
                            'esri/geometry/webMercatorUtils',
                      ],
                        (   Map,
                            esriConfig,
                            SpatialReference,
                            LengthsParameters,
                            AreasAndLengthsParameters,
                            ProjectParameters,
                            GeometryService,
                            webMercatorUtils
                        ) => {

                        let geometryService = gpService.getGeometryService();
                        if(type == 'POLYLINE')
                        {
                            // esriConfig.defaults.io.corsDetection = false;
                            let lengthParams = new esri.tasks.LengthsParameters();
                            drawManagerCtrl.drawGraphic.spatialReference = new esri.SpatialReference(measureTool.EPSG_GEOGRAPHIC);
                            lengthParams.polylines = [drawManagerCtrl.drawGraphic];
                            lengthParams.lengthUnit = esri.tasks.GeometryService.UNIT_METER;
                            lengthParams.geodesic = true;
                            geometryService.lengths(lengthParams,outputDistance);
                        }
                        else if(type == 'POLYGON')
                        {
                            let geometryA = drawManagerCtrl.drawGraphic;
                            geometryA = webMercatorUtils.webMercatorToGeographic(geometryA)
                            let outSR = new esri.SpatialReference({ wkid: measureTool.EPSG_GEOGRAPHIC})
                            var params = new ProjectParameters();
                            params.geometries = [geometryA];
                            params.outSR = outSR;
                            geometryService.project(params,function(result){
                                    geometryService.simplify(result, function(simplifiedGeometries) {
                                    var areasAndLengthParams = new esri.tasks.AreasAndLengthsParameters();
                                    areasAndLengthParams.lengthUnit = esri.tasks.GeometryService.UNIT_METER;
                                    areasAndLengthParams.areaUnit = esri.tasks.GeometryService.UNIT_SQUARE_METERS;
                                    areasAndLengthParams.polygons = simplifiedGeometries;
                                    gpService.geometryService.areasAndLengths(areasAndLengthParams,outputAreaAndLength);
                                });
                            })
                        }
                 })
            }
        });
    }

}


function outputDistance(result)
{
    eventBus.bus.emit(eventBus.LENGTH,result);
}

function outputAreaAndLength(result)
{
    eventBus.bus.emit(eventBus.AREA,result);

}



