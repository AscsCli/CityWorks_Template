/**
 * Created by Administrator on 2017/4/10 0010.
 */


export const configManagerCtrl = {};



configManagerCtrl.configArr = new Array();

configManagerCtrl.getLayerConfigByUrlAndId = function (url,id) {

    let layerConfig = null;
    for(let iLayer of configManagerCtrl.configArr)
    {
        if(iLayer.MAPSERVICES == url && iLayer.LAYERID == id)
        {
            layerConfig =  iLayer;
            break;
        }
    }
    return layerConfig;
}


configManagerCtrl.getLayerConfigByName  = function (name) {
    let layerConfig = null;
    for(let iLayer of configManagerCtrl.configArr)
    {
        if(iLayer.DISPLAYLAYERNAME == name)
        {
            layerConfig =  iLayer;
            break;
        }
    }
    return layerConfig;

}

configManagerCtrl.getLayerConfigByMapServiceUrl  = function (url) {

    let layerConfig = null;
    for(let iLayer of configManagerCtrl.configArr)
    {
        if(iLayer.MAPSERVICES == url)
        {
            layerConfig =  iLayer;
            break;
        }
    }
    return layerConfig;

}

configManagerCtrl.getLayerConfigByServiceUrl  = function (url) {

    let layerConfig = null;
    for(let iLayer of configManagerCtrl.configArr)
    {
        if(iLayer.SERVICES_ADDR == url)
        {
            layerConfig =  iLayer;
            break;
        }
    }
    return layerConfig;

}
/**
 * 获得同一个服务的分类
 * @param url 网址
 * @returns {Array}
 */
configManagerCtrl.getLayerConfigByMapServeces = function (url) {

    let layerArr = [];
    for (let iLayer of configManagerCtrl.configArr) {
        if(iLayer.MAPSERVICES == url)
        {
            layerArr.push(iLayer);
        }
    }
    return layerArr;

}

