/**
 * Created by Administrator on 2017/4/28 0028.
 */
import {configManagerCtrl} from '../configmanager/ConfigManagerCtrl';
import * as esriLoader from 'esri-loader';
import {baseMapManagerCtrl} from '../map/BaseMapManagerCtrl';

export const proportionalPointTool = {}



proportionalPointTool.setRender = function (mapId,layerName,field) {


    let layerConfig =   configManagerCtrl.getLayerConfigByName(layerName);
    esriLoader.dojoRequire(
        [   'esri/map',
            "esri/layers/FeatureLayer",
            "esri/symbols/SimpleFillSymbol",
            "esri/symbols/SimpleLineSymbol",
            "esri/renderers/ClassBreaksRenderer",
            "esri/renderers/UniqueValueRenderer",
            "esri/Color"

        ],
        (
            Map,
            FeatureLayer,
            SimpleFillSymbol,
            SimpleLineSymbol,
            ClassBreaksRenderer,
            UniqueValueRenderer,
            Color

        ) => {
            let map = baseMapManagerCtrl.mapHash[mapId];


            let  layer = new FeatureLayer(layerConfig.SERVICES_ADDR, {
                orderByFields: [ field ],
                mode: FeatureLayer.MODE_SNAPSHOT,
                outFields: ["*"],
            });

            var sizeInfo = {
                field:field,
                valueUnit:"Number",
                // valueRepresentation:"area"
            };

            layer.on("load", function() {
                layer.renderer.setSizeInfo(sizeInfo);
            });

            map.addLayer(layer);
        });

}