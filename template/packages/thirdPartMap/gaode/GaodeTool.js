/**
 * Created by Administrator on 2018/5/15 0015.
 */

import {gaodeImageLayer} from "./GaodeImageLayer";

import {gaodeLayer} from "./GaodeLayer";

import {gaodeAnnoLayer} from "./GaodeAnnoLayer";

import {gaodeType} from "./GaodeType";

export const gaodeTool = {}

gaodeTool.layerType = gaodeType;

gaodeTool.addLayer = function (type,map) {

   if(type == gaodeType.gaodeLayer){
      gaodeLayer.create(map);
   }else if(type == gaodeType.gaodeImageLayer){
     gaodeImageLayer.create(map);

   }else if(type == gaodeType.gaodeAnnoLayer){
     gaodeAnnoLayer.create(map);
   }
}
