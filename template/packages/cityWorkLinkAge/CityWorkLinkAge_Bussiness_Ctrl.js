/**
 * Created by Administrator on 2018/5/9 0009.
 */

import * as esriLoader from 'esri-loader';
import {cityWorkLinkageCtrl} from './CityWorkLinkageCtrl';
import {baseMapManagerCtrl} from '../map/BaseMapManagerCtrl'
import {eventBus} from '../event/EventBus'



export const cityWorkLinkAge_Business_Ctrl = {}

cityWorkLinkAge_Business_Ctrl.mapIdArr = [];



cityWorkLinkAge_Business_Ctrl.init = function (mapIdArr) {

  cityWorkLinkAge_Business_Ctrl.mapIdArr = mapIdArr;
  mapIdArr.forEach(function (value, index, array) {


    cityWorkLinkAge_Business_Ctrl.setFunCall(() => {

      cityWorkLinkAge_Business_Ctrl.addMapListener(value);

    }, value)
  })
}



cityWorkLinkAge_Business_Ctrl.setFunCall= function (fun, mapId) {

  setTimeout(function () {
    if (baseMapManagerCtrl.isLoad[mapId]) {
      fun()
    }
    else {
      cityWorkLinkAge_Business_Ctrl.setFunCall(fun, mapId);
    }
  }, 3000)

}


cityWorkLinkAge_Business_Ctrl.addMapListener = function (value) {


  let map = baseMapManagerCtrl.mapHash[value];

  map.on('mouse-up', (evt) => {

    cityWorkLinkageCtrl.changeMapId = value;
    if (cityWorkLinkageCtrl.is23DMove) {
      cityWorkLinkageCtrl.switch23Flag = false;
    }

  });

  map.on('mouse-wheel', (evt) => {

    cityWorkLinkageCtrl.changeMapId = value;
    if (cityWorkLinkageCtrl.is23DMove) {
      cityWorkLinkageCtrl.switch23Flag = false;
    }

  });
  map.on('extent-change', (evt) => {

    cityWorkLinkageCtrl.addTwoCoordinate(value, map.extent, baseMapManagerCtrl.mapHash, cityWorkLinkAge_Business_Ctrl.mapIdArr);

//                console.log(map.getLevel(),'level');
//              console.log(map.getScale(),'scale');
//                console.log(map.extent,'level---extent');
    //23维同时联动

    let extent = map.extent;
    eventBus.bus.emit(eventBus.MAP_EXTENT_CHANGE, extent);

  });
}
