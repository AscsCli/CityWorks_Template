/**
 * Created by Administrator on 2018/5/15 0015.
 */

import {tdtAnnoLayer} from "./TDTAnnoLayer";

import {tdtLayer} from "./TDTLayer";

import {tdtType} from "./TDTType";

import {tdtImageLayer} from "./TDTImageLayer";

import  {tdtImageAnnoLayer} from "./TDTImageAnnoLayer"



export const tdtTool = {}

tdtTool.layerType = tdtType;


tdtTool.addLayer = function (type,map) {

  if(type == tdtType.tdtLayer){
    tdtLayer.create(map);
    tdtAnnoLayer.create(map);
  }else if(type == tdtType.tdtImageLayer){
    tdtImageLayer.create(map);
    tdtImageAnnoLayer.create(map);
  }

}
