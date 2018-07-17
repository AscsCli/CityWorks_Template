/**
 * Created by wangdezhao on 5/31/2017.
 */

import {baseMapManagerCtrl} from '../map/BaseMapManagerCtrl'
import * as esriLoader from 'esri-loader';
import {eventBus} from '../event/EventBus';
import {layerTypeEnum} from '../layermanager/LayerType';
import {layerManager} from '../layermanager/LayerManagerCtrl';

export const diagramTool = {};
diagramTool.legend = null;
diagramTool.legendLayer = {};
diagramTool.mapId = ""


diagramTool.init = function (mapId) {
  diagramTool.mapId = mapId;
	let map = baseMapManagerCtrl.mapHash[diagramTool.mapId];
	let layers = layerManager.getLayerByLegend(map,'ArcGISDynamicMapServiceLayer');
	layers.map(function (item) {
		diagramTool.legendLayer[item.url] = {layer : item,title : '部件信息'};
	})
	diagramTool.addLegend();
	eventBus.bus.addListener(eventBus.LAYER_VISIBLE_CHANGE,addLayerLegendByVisible)
}


function addLayerLegendByVisible(arr,type,show)
{
	let map = baseMapManagerCtrl.mapHash[diagramTool.mapId]
	if(type == layerTypeEnum.ArcGISDynamicMapServiceLayer)
	{
		for(let layerconfig of arr)
		{
			let layer = layerManager.getAgsLayerFromMapWithUrl(map,layerconfig.MAPSERVICES);
			if(diagramTool.legendLayer[layerconfig.MAPSERVICES] == undefined)
			{
				diagramTool.legendLayer[layerconfig.MAPSERVICES] = {layer:layer,title:'部件信息'};
			}
		}
		// diagramTool.refreshlegendByLayerVisible();
		diagramTool.refreshlegend();
	}
}


diagramTool.destroy = function () {
	eventBus.bus.removeListener(eventBus.LAYER_VISIBLE_CHANGE,addLayerLegendByVisible);
	diagramTool.legend.destroy();
	diagramTool.legend = null;
}


diagramTool.addLegend = function () {
	esriLoader.dojoRequire(['esri/map',
			'esri/dijit/Legend',],
		(Map, Legend) => {
				if(diagramTool.legend == null)
				{
					let map = baseMapManagerCtrl.mapHash[diagramTool.mapId];
					diagramTool.legend = new Legend({
						map: map,
						layerInfos: [],
					}, "legendDiv");
					diagramTool.legend.startup();
				}
			    diagramTool.refreshlegend();
		})
}


diagramTool.refreshlegend = function () {
	let arr = Object.values(diagramTool.legendLayer);
	if (arr.length > 0)
	{
		diagramTool.legend.refresh(arr);
		for(let layerObject of arr)
		{
			layerObject.layer.refresh();
		}
	}
}

// diagramTool.refreshlegendByLayerVisible = function () {
// 	let arr = Object.values(diagramTool.legendLayer);
// 	diagramTool.legend.refresh();
// 	for(let layerObject of arr)
// 	{
// 		layerObject.layer.refresh();
// 	}
// }

