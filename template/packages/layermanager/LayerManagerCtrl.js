/**
 * 图层管理
 * Created by Administrator on 2017/3/20 0020.
 *
 */
"use strict";


import {configManagerCtrl} from '../configmanager/ConfigManagerCtrl';
import {baseMapManagerCtrl} from '../map/BaseMapManagerCtrl';
import * as esriLoader from 'esri-loader';
import {layerTypeEnum}  from './LayerType';
import {eventBus}  from '../event/EventBus';


export const layerManager = {};

/**
 * 申请graphicslayer 集合
 * @type {{}}
 */
layerManager.graphicLayers = {};




/**
 * 具体使用方法：这里layerName主要是自己取得数据结构config
 *
 * @param mapId  地图id
 * @param layerName 图层名数组，这里可以是不同的ArcGISDynamicMapServiceLayer组合，但是type必须保证是一致，不允许dynamic和tiled在一个数组
 * @param isShow 是否显示
 * @param layerType 图层类型
 */
layerManager.showLayerByName  = function (mapId,layerName,isShow,layerType='') {
    //组织 数据结构 筛选url
    let layerNameMap = new Map();
    layerName.forEach(function (value) {
        let layerConfig = configManagerCtrl.getLayerConfigByName(value);
        if(layerNameMap.has(layerConfig.MAPSERVICES))
        {
            let layerConfigs =  layerNameMap.get(layerConfig.MAPSERVICES)
            layerConfigs.push(layerConfig);
        }
        else
        {
            let layerConfigs = new Array();
            layerConfigs.push(layerConfig);
            layerNameMap.set(layerConfig.MAPSERVICES,layerConfigs);
        }
    })

    let map = baseMapManagerCtrl.mapHash[mapId];

    esriLoader.dojoRequire(['esri/map',
            'esri/layers/ArcGISDynamicMapServiceLayer',
            'esri/layers/ArcGISTiledMapServiceLayer',
            'esri/layers/FeatureLayer'
        ],
        (Map,
         ArcGISDynamicMapServiceLayer,
         ArcGISTiledMapServiceLayer,
         FeatureLayer
        ) => {
            for(let url of layerNameMap.keys())
            {

                let layerConfigs = layerNameMap.get(url);
                let layerIds = [];

                layerConfigs.forEach(function (value) {
                    if(value.LAYERID != undefined)
                    {
                        layerIds.push(value.LAYERID);
                    }

                })

                let priority = 5;
                if(layerConfigs.length > 0)
                {
                    priority = layerConfigs[0].getLayerPriority();
                }

                if(layerType == '')
                {
                    layerType = layerConfigs[0].LAYER_TYPE;
                }

                let layer = layerManager.getAgsLayerFromMapWithUrl(map,url,layerType);

                if(layerType == layerTypeEnum.ArcGISDynamicMapServiceLayer)
                {
                    if(isShow)
                    {
                        showDynamicLayerFun(map,layer,layerIds,url,priority);

                    }
                    else
                    {
                        hideDynamicLayerFun(layer,layerIds);

                    }

                }
                else if(layerType == layerTypeEnum.ArcGISTiledMapServiceLayer)
                {
                    if(isShow)
                    {
                        // console.log('showtiledlayer')
                        showTiledLayerFun(map,layer,url,priority)
                    }
                    else
                    {

                        hideTiledLayerFun(layer);
                    }
                }
                else if(layerType == layerTypeEnum.ArcGISImageServiceLayer)
                {
                  if(isShow)
                  {
                    // console.log('showimageLayer')
                    showImageLayerFun(map,layer,url,priority)
                  }
                  else
                  {
                    hideImageLayerFun(layer);
                  }
                }
               eventBus.bus.emit(eventBus.LAYER_VISIBLE_CHANGE,layerConfigs,layerType,isShow);
            }

    });

}

//处理图层加载顺序
function addLayerByPriority(map,layer,priority)
{
    let arrIds = map.layerIds;
    for(let i =  arrIds.length - 1; i >=0 ; i--){


        let item = map.getLayer(arrIds[i]);
        let changepriority = 0;
        if( item['priority'] != undefined)
        {
            changepriority = item['priority']
        }

        if(getLayerType(item) == 'GraphicsLayer')
        {
            continue ;
        }
        else if(getLayerType(item) == 'FeatureLayer')
        {
            continue ;
        }

        if(Number(priority) >= changepriority)
        {
            layer['priority'] = priority;
            map.addLayer(layer,i + 1);
            return;
        }
    }
    layer['priority'] = priority;
    map.addLayer(layer,arrIds.length);

}

function showImageLayerFun(map,layer,url,priority){

  if(layer == null)
  {
    let imageLayer = new esri.layers.ArcGISImageServiceLayer(url);
    addLayerByPriority(map,imageLayer,priority);
  }
  else
  {
    layer.setVisibility(true);
  }

}


function hideImageLayerFun(layer){

  if(layer != null)
  {
    layer.setVisibility(false);
  }
}




function showTiledLayerFun(map,layer,url,priority){

    if(layer == null)
    {
        let tiledLayer = new esri.layers.ArcGISTiledMapServiceLayer(url);
        addLayerByPriority(map,tiledLayer,priority);
    }
    else
    {
        layer.setVisibility(true);
    }


}


function hideTiledLayerFun(layer){

    if(layer != null)
    {
        layer.setVisibility(false);
    }
}


function hideDynamicLayerFun(layer,layerIds){

    if(layer != null)
    {
        let visibleLayers = layer.visibleLayers.slice();
        layerIds.forEach(function (value) {

            visibleLayers.forEach(function (value1,index) {
                if(value1 == value)
                {
                    visibleLayers.splice(index,1);
                }
            })

        })

        if(visibleLayers.length == 0)
        {
            visibleLayers.push(-1);
        }

        layer.setVisibleLayers(visibleLayers);
    }
}


function showDynamicLayerFun(map,layer,layerIds,url,priority){
    let visibleLayers  = [];
    if(layer == null)
    {
        let dynamicLayer  = new esri.layers.ArcGISDynamicMapServiceLayer(url);
        visibleLayers = layerIds;
        dynamicLayer.setVisibleLayers(visibleLayers);
        addLayerByPriority(map,dynamicLayer,priority);
    }
    else
    {
        visibleLayers = layer.visibleLayers;
        layerIds.forEach(function (value) {
            if(!visibleLayers.includes(value))
            {
                visibleLayers.push(value);

            }
        })
        layer.setVisibleLayers(visibleLayers);
        layer.setVisibility(true);
    }

}




layerManager.getAgsLayerFromMapWithUrl = function(map,url,mapServiceType = '')
{
    let agsLyr = null;
    let arrIds = map.layerIds;
    for(let layerId of arrIds)
    {
        let item = map.getLayer(layerId);
        if(mapServiceType == '')
        {
            if(item.url == url )
            {
                agsLyr = item;
            }
        }
        else
        {
            if(getLayerType(item) == mapServiceType)
            {
                if(item.url == url )
                {
                    agsLyr = item;
                }
            }
        }
    }
    return agsLyr;
}

layerManager.getLayerByLegend = function (map,mapServiceType = '') {

	let agsLyrs = [];
	let arrIds = map.layerIds;
	for(let layerId of arrIds)
	{
		let item = map.getLayer(layerId);
		if(getLayerType(item) == mapServiceType &&  item['priority'] != undefined)
		{
				if( Number(item['priority']) >= 5 )
				{
					agsLyrs.push(item);
				}
		}
	}
	return agsLyrs;

}

layerManager.getAgsLayerIndexFromMapWithUrl = function(map,url,mapServiceType = '')
{
    let agsLyr = null;
    let index = null;
    let arrIds  = map.layerIds;
    for(let i = 0; i< arrIds.length; i++)
    {
        let item  = map.getLayer(arrIds[i]);
        if(mapServiceType == '')
        {
            if(item.url == url )
            {
                agsLyr = item;
                index = i;
            }
        }
        else
        {
            if(getLayerType(item) == mapServiceType)
            {
                if(item.url == url )
                {
                    agsLyr = item;
                    index = i;
                }
            }
        }
    }
    return {
        agsLyr:agsLyr,
        index:index
    };
}

function getLayerType(item)
{
    if(Object.getPrototypeOf(item) == esri.layers.ArcGISTiledMapServiceLayer.prototype)
    {
        return layerTypeEnum.ArcGISTiledMapServiceLayer;
    }
    else if(Object.getPrototypeOf(item) == esri.layers.ArcGISDynamicMapServiceLayer.prototype)
    {
        return layerTypeEnum.ArcGISDynamicMapServiceLayer;
    }
    else if(Object.getPrototypeOf(item) == esri.layers.ArcGISImageServiceLayer.prototype)
    {
      return layerTypeEnum.ArcGISImageServiceLayer;
    }
    else if(Object.getPrototypeOf(item) == esri.layers.FeatureLayer.prototype)
    {
        return layerTypeEnum.FeatureLayer;
    }
    else if(Object.getPrototypeOf(item) == esri.layers.GraphicsLayer.prototype)
    {
        return layerTypeEnum.GraphicsLayer;
    }

}


/**
 * 申请Graphiclayer
 * @param layerName
 */
layerManager.setGraphicLayer = function(mapId,layerName){

    //首先不管是否已有的图层，先去发起消息
    let map = baseMapManagerCtrl.mapHash[mapId]
    let graphiclayer = null;
    esriLoader.dojoRequire(['esri/map',
            "esri/layers/GraphicsLayer",
        ],
        (Map,
         GraphicsLayer
        ) => {

            let map = baseMapManagerCtrl.mapHash[mapId];
            if(map != null){
                if( layerManager.graphicLayers[layerName] == null)
                {
                    graphiclayer = new esri.layers.GraphicsLayer();
                    baseMapManagerCtrl.mapHash[mapId].addLayer(graphiclayer);
                    graphiclayer.graID  = layerName;
                    layerManager.graphicLayers[layerName] = graphiclayer;

                }
                else
                {
                    let graphicsLayerIds  = map.graphicsLayerIds;
                    let bool = false;
                    for(let graphicId of graphicsLayerIds)
                    {
                        let item = map.getLayer(graphicId);
                        if(item.graID == layerName)
                        {
                            bool = true;
                            break;
                        }

                    }
                    if(bool == false)
                    {
                        graphiclayer = new esri.layers.GraphicsLayer();
                        baseMapManagerCtrl.mapHash[mapId].addLayer(graphiclayer);
                        graphiclayer.graID  = layerName;
                        layerManager.graphicLayers[layerName] = graphiclayer;
                    }

                    graphiclayer =  layerManager.graphicLayers[layerName]
                }
            }


        })
    return graphiclayer;
}

/**
 * 清除所有的graphicLayer
 */
layerManager.clearAllGraphicLayer = function () {

    for(let key of Object.keys(layerManager.graphicLayers))
    {
        if(layerManager.graphicLayers[key]){
            let graphiclayer = layerManager.graphicLayers[key]
            graphiclayer.clear();
        }


    }


}

/**
 * 设置地图透明度
 * @param mapId
 * @param layerName
 * @param alpha
 * @param mapServiceType
 */
layerManager.setLayerOpacity = function(mapId,layerName,alpha){

    let map = baseMapManagerCtrl.mapHash[mapId];
    let layerConfig = configManagerCtrl.getLayerConfigByName(layerName);
    let layer =  layerManager.getAgsLayerFromMapWithUrl(map,layerConfig.MAPSERVICES);
    layer.setOpacity(alpha);
}



layerManager.getQueryLayerByType = function (mapId,type,layerNames = []) {

      let result = new Array();
      //查找可见图层
      if(type == 'visible')
      {
          result =  layerManager.getVisibleLayer(mapId);
      }
      //查找最上一层
      else if(type == 'top')
      {
          result =  getTopMostLayer(mapId);
      }
      //查找指定图层
      else if(type == 'special')
      {
          result =  getSpecialLayer(mapId,layerNames);
      }
      return result;

}


function getSpecialLayer(mapId,layerNames) {

    let result = new Array();
    for(let layerName of layerNames)
    {
       let ilayerConfig = configManagerCtrl.getLayerConfigByName(layerName);
        result.push(ilayerConfig)
    }
     return result;
}

layerManager.getVisibleLayer =  function(mapId) {

    let result = new Array();
    let map = baseMapManagerCtrl.mapHash[mapId];
    let arrIds = map.layerIds;
    for(let layerId of  arrIds) {

        let item = map.getLayer(layerId);
        if(getLayerType(item) == layerTypeEnum.ArcGISDynamicMapServiceLayer)
        {
            if(item.visible == true)
            {
                let arr = getIlayerByAgsLayer(item);
                result = result.concat(arr);
            }
        }
    }
    return result;
}

function getTopMostLayer(mapId) {

    let result = new Array();
    let map = baseMapManagerCtrl.mapHash[mapId];
    let arrIds = map.layerIds;
    for(let layerId of  arrIds) {

        let item = map.getLayer(layerId);
        if(getLayerType(item) == layerTypeEnum.ArcGISDynamicMapServiceLayer)
        {
            if(item.visible == true)
            {
                let arr = getIlayerByAgsLayer(item);
                result = result.concat(arr);
                break;
            }
        }

    }
    return result;
}

function getIlayerByAgsLayer(ilayer)
{
    let arr = new Array();
    let visibleLayers = ilayer.visibleLayers;
    for(let id of visibleLayers)
    {
      if(id != -1)
      {
        let  ilayerConfig =  configManagerCtrl.getLayerConfigByUrlAndId(ilayer.url,id);
        arr.push(ilayerConfig)
      }

    }
    return arr;
}

function getSpecialIlayerByAgsLayer(ilayer,layerNames)
{
    let arr = new Array();
    let visibleLayers = ilayer.visibleLayers;
    for(let id of visibleLayers)
    {
        let  ilayerConfig =  configManagerCtrl.getLayerConfigByUrlAndId(ilayer.url,id);
        if(layerNames.includes(ilayerConfig.DISPLAYLAYERNAME))
        {
            arr.push(ilayerConfig)
        }

    }
    return arr;
}

layerManager.hideAllLayer = function (mapId) {

  let map = baseMapManagerCtrl.mapHash[mapId];
  let arrIds  = map.layerIds;
  for(let i = 0; i< arrIds.length; i++) {

    let item = map.getLayer(arrIds[i]);
    if(item['priority'] != undefined)
    {
      if(item['priority'] > 0)
      {
        if(getLayerType(item) == layerTypeEnum.ArcGISDynamicMapServiceLayer)
        {
            let visibleLayers = item.visibleLayers.slice();
            visibleLayers = [-1];
            item.setVisibleLayers(visibleLayers);
        }
        else if(getLayerType(item) == layerTypeEnum.ArcGISTiledMapServiceLayer)
        {
           item.setVisibility(false);
        }
        else if(getLayerType(item) == layerTypeEnum.ArcGISImageServiceLayer)
        {
          item.setVisibility(false);
        }
      }
    }
  }
}


