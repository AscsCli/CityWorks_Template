/**
 * Created by Administrator on 2018/5/9 0009.
 */

import {configManagerCtrl}  from "./ConfigManagerCtrl";
import LayerConifg from "./LayerConifg"
import axios from 'axios';




export const configLoadTool = {}

configLoadTool.layer2DPath = './static/xml/configmanager/config2D.json';


configLoadTool.load = function (loadDataType = 'json') {



      let configArr = [];
      if (loadDataType == 'local') {

        let layerArr = LAYERS_2D['LAYERS']['LAYER'];
        layerArr.forEach(function (value, index, array) {

          let layerConfig = new LayerConifg(value);

          configArr.push(layerConfig);
        })
        configManagerCtrl.configArr = configArr;

      }else if(loadDataType == 'json'){

        axios.get(configLoadTool.layer2DPath).then((res) => {


          let layerArr = res.data.LAYERS.LAYER;
          layerArr.forEach(function (value, index, array) {

            let layerConfig = new LayerConifg(value);

            configArr.push(layerConfig);
          })
          configManagerCtrl.configArr = configArr;

        })
      }
}




