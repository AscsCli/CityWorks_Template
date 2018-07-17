/**
 * Created by Administrator on 2017/4/11 0011.
 */

import {queryTool} from './QueryTool';
import {drawManagerCtrl} from '../drawManager/DrawManagerCtrl';
import {baseMapManagerCtrl} from '../map/BaseMapManagerCtrl';
import {layerManager} from '../layermanager/LayerManagerCtrl';
import {eventBus} from '../event/EventBus';

export const queryManagerCtrl = {};

queryManagerCtrl.mouseClickFlag = {};

queryManagerCtrl.xmlLoadData = [];

/**
 * 点击查询
 * @param mapId
 * @param bool
 */
queryManagerCtrl.mouseClick = function (mapId,bool) {

    let map = baseMapManagerCtrl.mapHash[mapId];

    if(bool == true)
    {
        queryManagerCtrl.mouseClickFlag[mapId] = bool;
        queryManagerCtrl.mapClickHandle = map.on('click',downHandle);
    }
    else
    {
        queryManagerCtrl.mouseClickFlag[mapId] = bool;
        if(queryManagerCtrl.mapClickHandle != null)
        {
            queryManagerCtrl.mapClickHandle.remove();
        }
    }


};




function downHandle(evt)
{
    for(let key of Object.keys(queryManagerCtrl.mouseClickFlag))
    {
        if(queryManagerCtrl.mouseClickFlag[key] == true)
        {
            queryTool.mapId = key;
            queryTool.doSpatialQuery(evt.mapPoint,downCall);
        }
    }

}

function downCall(arr)
{
    eventBus.bus.emit(eventBus.MOUSE_CLICK_QUERY,arr);
}


queryManagerCtrl.clearGraphics = function (mapId) {

    let graphicsLayer = layerManager.setGraphicLayer(mapId,'select');
    graphicsLayer.clear();
}

/**
 * 根据要素查询
 * @param mapId
 * @param type
 * @param layerName
 */
queryManagerCtrl.polygonQuery = function (mapId,type,queryType = 'visible',specialLayerName = [],callBackFun = null) {

    let layerName = 'select';
    drawManagerCtrl.activeTool(mapId,type,layerName);
    var listeners = eventBus.bus.getListeners('draw-' + layerName);
    if(listeners.length == 0)
    {
        eventBus.bus.addOnceListener('draw-' + layerName, function(a) {
            if(drawManagerCtrl.drawName == layerName && drawManagerCtrl.drawMapId == mapId)
            {
                queryTool.mapId = mapId;
                queryTool.queryType = queryType;
                queryTool.layerNames = specialLayerName;
                queryTool.doSpatialQuery(drawManagerCtrl.drawGraphic,callBackFun)
            }
        });
    }
}





