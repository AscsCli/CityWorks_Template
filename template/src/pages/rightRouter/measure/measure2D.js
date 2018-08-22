import {measureTool} from "@cityworks/gismap3";
export const measure2DFunc ={
  init:function (type) {
    if (type === "distance") {
      measureTool.measureLength(mapConfig.mapId);
    } else if (type === "area") {
      measureTool.measureArea(mapConfig.mapId);
    } else if (type === "coord") {
      measureTool.coordClick(mapConfig.mapId, this.isCoordFlag);
    }
  }
};