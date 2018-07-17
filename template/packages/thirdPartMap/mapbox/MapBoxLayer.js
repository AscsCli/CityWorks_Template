/**
 * Created by Administrator on 2018/5/15 0015.
 */
import * as esriLoader from 'esri-loader'
import {mapBoxType} from "./MapBoxType"

export const mapBoxLayer = {};

mapBoxLayer.layerType = mapBoxType;

mapBoxLayer.addLayer = function (type,map) {

  esriLoader.dojoRequire([
      "esri/map",
      "esri/layers/WebTiledLayer"],
    function (Map,
              WebTiledLayer) {



      let url =  "https://${subDomain}.tiles.mapbox.com/v4/mapbox."+ type +"/${level}/${col}/${row}.png?access_token=pk.eyJ1IjoiYW5hbHl0aWNhbGdyYXBoaWNzIiwiYSI6ImNpd204Zm4wejAwNzYyeW5uNjYyZmFwdWEifQ.7i-VIZZWX8pd1bTfxIVj9g"
      let  webTileLayer = new WebTiledLayer(url, {
        "subDomains": ["a", "b", "c"]
      });
      map.addLayer(webTileLayer);

    })



}


