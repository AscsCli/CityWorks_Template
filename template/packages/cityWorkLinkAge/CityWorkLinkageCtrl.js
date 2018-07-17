/**
 * 二三维联动工具控制类
 * Created by Administrator on 2017/3/16 0016.
 */

import {baseMapManagerCtrl} from '../map/BaseMapManagerCtrl';
import * as esriLoader from 'esri-loader';

export const cityWorkLinkageCtrl = {};

/**
 *是否3维联动
 * @type {boolean}
 */
cityWorkLinkageCtrl.is3DMove = true;
/**
 *是否2维动
 * @type {boolean}
 */
cityWorkLinkageCtrl.is2DMove = true;
/**
 *是否23维联动
 * @type {boolean}
 */
cityWorkLinkageCtrl.is23DMove = false;
/**
 *联动最初引起变化的2维地图
 * @type {string}
 */
cityWorkLinkageCtrl.changeMapId = '';
/**
 *2维地图存放的extent
 * @type {{}}
 */
cityWorkLinkageCtrl.two_coordinate = {};
/**
 * 3维地图存放的extent
 * @type {{}}
 */
cityWorkLinkageCtrl.three_coordinate = {};


cityWorkLinkageCtrl.switch23Flag = false;



function isExtentEqual(extent1, extent2){


    if ((Math.abs(extent1.xmin - extent2.xmin) < 0.1)
        && (Math.abs(extent1.xmax - extent2.xmax) < 0.1)
        && (Math.abs(extent1.ymin - extent2.ymin) < 0.1)
        && (Math.abs(extent1.ymax - extent2.ymax) < 0.1))
    {

        return true;
    }


    return false;
}

function setMapExtent(map,extent,mapId) {



    esriLoader.dojoRequire(['esri/map','esri/geometry/Extent'], (Map,Extent) => {
        // create map with the given options at a DOM node w/ id 'mapNode'
        if(!isExtentEqual(extent,map.extent)){
            if(!isNaN(extent.xmin))
            {
              let mapExtent = new esri.geometry.Extent(extent.xmin,extent.ymin,extent.xmax,extent.ymax,map.spatialReference);
              map.setExtent(mapExtent);
              // console.log(mapId,'setExtent');
              // console.log(mapExtent);
              cityWorkLinkageCtrl.two_coordinate[mapId] = mapExtent;
            }
            if(cityWorkLinkageCtrl.is23DMove)
            {


            }

        }

    });

}

function set3DMapLinkAge(mapHash,mapId,extent) {

    let map = mapHash[mapId];
    setMapExtent(map,extent,mapId)

}


function setMapLinkAge(mapHash,mapId,mapIdArr) {

    if(mapIdArr.length == 0)
        return

    let extentArr = [];
    let mapArr = [];
    if(cityWorkLinkageCtrl.is2DMove)
    {
        for(let key of Object.keys(cityWorkLinkageCtrl.two_coordinate))
        {
            let extent  = cityWorkLinkageCtrl.two_coordinate[key];
            let map = mapHash[key];
            if(mapIdArr.includes(key))
            {
                extentArr.push(extent);
                mapArr.push(map);
            }
        }

        let changeExtent = cityWorkLinkageCtrl.two_coordinate[mapId]



        setTimeout(() => {

            // console.log(cityWorkLinkageCtrl.changeMapId,'changeMapId');

            for(let i = 0; i < extentArr.length; i++)
            {
                let value  = extentArr[i];
                if(mapId == cityWorkLinkageCtrl.changeMapId)
                {
                  if(!isExtentEqual(changeExtent,value))
                  {
                      if(mapArr[i] == undefined)
                      {
                        return;
                      }
                      setMapExtent(mapArr[i],changeExtent,mapArr[i].id);


                  }
                }
            }
            // extentArr.forEach(function (value,index,array) {
            //
            //     if(mapId == cityWorkLinkageCtrl.changeMapId)
            //     {
            //         if(!isExtentEqual(changeExtent,value))
            //         {
            //               if(mapArr[index] == undefined)
            //               {
            //                 return;
            //               }
            //               setMapExtent(mapArr[index],changeExtent,mapIdArr[index]);
            //
            //
            //         }
            //     }
            //
            // })

        },1000)


    }
}


/**
 * 返回 指定的mapId的extent
 * @param mapId
 */
cityWorkLinkageCtrl.getTwoExtent = function (mapId) {

    let map = baseMapManagerCtrl.mapHash[mapId];
    return map.extent;

}

/**
 * 设置23 维移动状态
 * @param is23DMove
 */
cityWorkLinkageCtrl.set23DMove = function (is23DMove) {

    cityWorkLinkageCtrl.is23DMove = is23DMove;

}


/**
 * 设置三维的extent
 * @param mapId
 * @param extent
 */
cityWorkLinkageCtrl.addThreeExtent = function (extent,mapId = '') {


    //如果mapId 是''则随机指定一个mapId
    if(mapId == '')
    {
        let mapArr = Object.keys(baseMapManagerCtrl.mapHash)
        if(mapArr.length > 0)
        {
            mapId = mapArr[0]
        }

    }

    cityWorkLinkageCtrl.changeMapId = mapId;

    let mapHash = baseMapManagerCtrl.mapHash;

    if(cityWorkLinkageCtrl.is3DMove)
    {
        cityWorkLinkageCtrl.three_coordinate[mapId] = extent;
        set3DMapLinkAge(mapHash,mapId,extent)
    }

}

/**
 * 设置 三维是否允许二维联动
 * @param is3DMove
 */
cityWorkLinkageCtrl.setIs3DMove = function (is3DMove) {

    cityWorkLinkageCtrl.is3DMove = true;


}


cityWorkLinkageCtrl.addTwoCoordinate = function (mapId,coordinate,mapHash,mapIdArr) {

    if(cityWorkLinkageCtrl.is2DMove == true)
    {
      cityWorkLinkageCtrl.two_coordinate[mapId] = coordinate

      setMapLinkAge(mapHash,mapId,mapIdArr)
    }



}


