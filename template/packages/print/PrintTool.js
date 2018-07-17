/**
 * Created by Administrator on 2017/4/13 0013.
 */

import * as esriLoader from 'esri-loader';
import {baseMapManagerCtrl} from '../map/BaseMapManagerCtrl'
import {eventBus} from '../event/EventBus';
import {loadScriptTool} from "../tool/LoadScriptTool"

export const printTool = {}

/**
 * 打印地图
 * @param mapId
 * @param width
 * @param height
 * @param imageType
 */
printTool.print = function (mapId,width,height,imageType,dpi) {

    esriLoader.dojoRequire(['esri/map',
            "esri/config",
            "esri/request",
            "esri/tasks/PrintTask",
            "esri/urlUtils",
            "esri/tasks/PrintParameters",
            "esri/tasks/PrintTemplate",
        ],
        (Map,
         esriConfig,
         esriRequest,
         PrintTask,
         urlUtils,
         PrintParameters,
         PrintTemplate
        ) => {

            // esriConfig.defaults.io.proxyUrl = "http://localhost:8007/Java/proxy.jsp";//其中proxyUrl是你部署到IIS下的路径即可。
            esriConfig.defaults.io.alwaysUseProxy = false;
            // esriConfig.defaults.io.proxyUrl = "/proxy/";
            let printUrl = loadScriptTool.geometryPdfUrl;

            let printTask = new esri.tasks.PrintTask(printUrl);
            let params = new esri.tasks.PrintParameters();
            let template = new esri.tasks.PrintTemplate();


            let map = baseMapManagerCtrl.mapHash[mapId];
            params.map = map;

            template.exportOptions = {
                width: width,
                height: height,
                dpi: dpi
            };
            template.layout = "MAP_ONLY";
            template.format = imageType;
            params.template = template;

            printTask.execute(params, printResult, printError);
        });
}



function printResult (result)
{
    eventBus.bus.emit(eventBus.PRINT_RESULT,result);

}

function printError (result)
{
    // console.log(result);
}




