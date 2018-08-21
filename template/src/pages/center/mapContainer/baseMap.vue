<template>
    <div class="mapcont">
        <h2 v-if="!get3dLoadTag && !get2dLoadTag">目前没有地图可显示</h2>
        <base-map2-d
                v-if="get2dLoadTag"
                :mapId="mapId"
                :initExtent="extent"
                :layerType="layerType"
                :mapType="mapType"
                :mapHeight="mapHeight"
                :mapWidth="mapWidth"
                :url="url"
                v-show="getMapType === '2d'"></base-map2-d>
        <base-map3-d v-if="get3dLoadTag" :display="getMapType === '3d'"></base-map3-d>
    </div>

</template>

<script>
  import baseMap2D from "./baseMap2D.vue";
  import baseMap3D from './baseMap3D.vue';
  import {mapGetters} from 'vuex';
  export default {
    components: {
      baseMap2D: baseMap2D,
      baseMap3D: baseMap3D
    },
    data() {
      return {
        mapType: "tiled",
        url: "http://121.201.65.133:2001/arcgis/rest/services/szmap_10_170117/MapServer",
        mapId: '5555',
        extent: {
          xmax: 106845.70780098543,
          ymax: 54047.27319746484,
          xmin: 87001.91811340605,
          ymin: 18751.785939823654
        },
        mapHeight: '100%',
        mapWidth: '100%',
        layerType: "",
      }
    },
    computed: {
      ...mapGetters({
        get2dLoadTag: 'get2dLoadTag',
        get3dLoadTag: 'get3dLoadTag',
        getMapType: 'getMapType'
      })
    },
    methods: {},
    watch: {
      getMapType: function (val) {
        if (val) {
          this.routers = this.routers3d;
        } else {
          this.routers = this.routers2d;
        }
      }
    },
    mounted() {}
  }
</script>
