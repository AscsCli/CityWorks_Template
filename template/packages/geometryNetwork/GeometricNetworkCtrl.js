/**
 * 管线几何网络分析 溯源，流向分析
 *  on 2018/3/13
 *
 */
import {EchartLayerController} from './EchartLayerController';
import {baseMapManagerCtrl} from "../map/BaseMapManagerCtrl";
import {netWorkService} from "./NetWorkService";


export const GeometricNetworkCtrl = {};

GeometricNetworkCtrl.mapId = "";

/**
 * 几何网络分析GP服务地址
 * sy溯源分析， lx流向分析
 */
GeometricNetworkCtrl.GPserverUrl = {
     SY: "http://11.23.2.101/arcgis/rest/services/waterUpStream/GPServer/%E7%A6%8F%E5%B7%9E%E6%BA%AF%E6%BA%90%E8%BF%BD%E8%B8%AA",
     LX:"http://11.23.2.101/arcgis/rest/services/waterDownStream/GPServer/%E7%A6%8F%E5%B7%9E%E6%B5%81%E5%90%91%E8%BF%BD%E8%B8%AA"
}


/**
 * 绑定地图点击事件
 * @param map
 *  @param type sy溯源分析 lx流向分析  close关闭分析
 */

GeometricNetworkCtrl.mode = "";
GeometricNetworkCtrl.syMode = "s";
GeometricNetworkCtrl.lxMode = "lx";

GeometricNetworkCtrl.mapClick = null;


GeometricNetworkCtrl.start = function (map) {

    GeometricNetworkCtrl.mode = "";
    GeometricNetworkCtrl.mapClickHandle = map.on("click", executeIdentifyTaskSY);
}


GeometricNetworkCtrl.startSYAnalysis = function () {

    GeometricNetworkCtrl.mode = GeometricNetworkCtrl.syMode;
}

GeometricNetworkCtrl.startLXAnalysis = function () {

    GeometricNetworkCtrl.mode = GeometricNetworkCtrl.lxMode;
}

GeometricNetworkCtrl.end = function () {

    if(GeometricNetworkCtrl.mapClickHandle != null)
    {
        GeometricNetworkCtrl.mapClickHandle.remove();
    }
    GeometricNetworkCtrl.mode = "";
    EchartLayerController.do("close","sy");
}

function executeIdentifyTaskSY(event) {

    let x = event.mapPoint.x;
    let y = event.mapPoint.y;

    if(GeometricNetworkCtrl.mode != ""){
        let map = baseMapManagerCtrl.mapHash[GeometricNetworkCtrl.mapId];
        let url = "";
        if(GeometricNetworkCtrl.mode == GeometricNetworkCtrl.syMode){
            url = GeometricNetworkCtrl.GPserverUrl.SY;
        }
        else if(GeometricNetworkCtrl.mode == GeometricNetworkCtrl.lxMode){
            url = GeometricNetworkCtrl.GPserverUrl.LX;
        }
        let promise = netWorkService.streamService(x,y,url);
        promise.then((resBody)=>{

            EchartLayerController.do("update","sy",resBody,map);
        })

    }

}
