<template>
    <div :id="mapId" v-bind:style="'width:'+mapWidth+';height:'+mapHeight">
        <div id="swipeDiv"></div>
    </div>
</template>

<script>
  import {baseMap_bussiness_ctrl} from "@cityworks/gismap3";
  import {loadScriptTool} from "@cityworks/gismap3";
  import {listenerInit2d} from "../../../listener/listenerInit2d";
  import {configLoadTool} from "@cityworks/gismap3";

  export default {
    name: 'baseMap',
    props: {
      mapId: {
        type: String,
        default: 'mapNode'
      },
      layerType: {
        type: String,
        default: ''
      },
      mapWidth: {
        type: [Number, String]
      },
      mapHeight: {
        type: [Number, String]
      },
      url: {
        type: String,
        default: '',
      },
      mapType: {
        type: String,
        default: 'tiled',
      },
      visibleLayer: {
        type: Array,
        default() {
          return [];
        }
      },
      initExtent: {
        type: Object,
        default: function () {
          return {
            xmin: 0,
            ymin: 0,
            xmax: 0,
            ymax: 0
          }
        }
      }

    },
    data() {
      return {}
    },
    methods: {},
    computed: {},
    mounted() {
      loadScriptTool.setDefault();
      // 这里设置自定义的路径json路径
      configLoadTool.layer2DPath = "../../../static/config/2d/map2dLayers.json";
      configLoadTool.load();
      let config = {
        mapId: this.mapId,
        url: this.url,
        mapType: this.mapType,
        visibleLayer: this.visibleLayer,
        layerType: this.layerType,
        extent: {
          xmax: this.initExtent.xmax,
          ymax: this.initExtent.ymax,
          xmin: this.initExtent.xmin,
          ymin: this.initExtent.ymin,
        },
      };
      baseMap_bussiness_ctrl.init(config);
      listenerInit2d.init(this);
    },
    destroyed() {
      listenerInit2d.remove();
    }
  }
</script>

