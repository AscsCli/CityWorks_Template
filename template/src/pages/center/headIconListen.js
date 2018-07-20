import {
  EventBus
} from '../../eventBus/eventBus';
import {
  eventBus
} from "@cityworks/gismap3";
import {measureTool} from "@cityworks/gismap3";
import {layerManager} from "@cityworks/gismap3";
export const headIconListen = {

  mounted() {
    EventBus.bus.addListener("HEAD_ICON_2D", (item) => {
      switch (item.title) {
        case '测量':
          measureTool.measure(this.mapId, 'POLYLINE');
          break;
        case '清除':
          layerManager.clearAllGraphicLayer();
        default:
          break;
      }
    })

    eventBus.bus.addListener(eventBus.LENGTH, function (result) {
      alert(`${result.lengths[0].toFixed(2)}m`)
    })

  },
}
