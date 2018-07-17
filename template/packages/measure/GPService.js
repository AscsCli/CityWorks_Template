/**
 * Created by Administrator on 2017/4/12 0012.
 */

import * as esriLoader from 'esri-loader';
import {loadScriptTool} from "../tool/LoadScriptTool"

export const  gpService = {}

gpService.geometryService = null;


gpService.getGeometryService = function () {

    let geometryService = null;
    esriLoader.dojoRequire(['esri/map',

            'esri/tasks/GeometryService',
        ],
        (Map,
         GeometryService
        ) => {

            if(gpService.geometryService == null)
            {
                gpService.geometryService =    new esri.tasks.GeometryService(loadScriptTool.geometryServiceUrl );

            }

            geometryService =  gpService.geometryService;
        })
    return geometryService;
}
