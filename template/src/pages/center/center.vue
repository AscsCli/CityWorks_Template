<template>
    <div class="center-con">
        <div class="center-wrap">
            <div style="width:100%;">
                <rk-tab :routers="getMapType === '2d' ? routers2d : routers3d" @changeTab="changeTab" v-model="activeLabel"></rk-tab>
            </div>

        </div>
        <div class="mapcont">
            <h2 v-if="!get3dLoadTag && !get2dLoadTag">目前没有地图可显示</h2>
            <baseMap v-if="get2dLoadTag" :mapId="mapId" :initExtent="extent" :layerType="layerType" :mapType="mapType"
                     :mapHeight="mapHeight" :mapWidth="mapWidth" :url="url" v-show="getMapType === '2d'"></baseMap>
            <map3d v-if="get3dLoadTag" :display="getMapType === '3d'"></map3d>
        </div>
    </div>
</template>

<script>
  import baseMap from "./baseMap2D.vue";
  import map3d from './baseMap3D.vue';
  import {mapGetters} from 'vuex';
  import {EventBus} from "../../eventBus/eventBus.js";
  export default {
    components: {
      baseMap,
      map3d
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
        defaultLink: 5,
        is3d: true,
        activeLabel: '测量工具',
        routers: [],
        routers2d: [],
        routers3d: [],
        isShow: false
      }
    },
    computed: {
      ...mapGetters({
        get2dLoadTag: 'get2dLoadTag',
        get3dLoadTag: 'get3dLoadTag',
        getMapType: 'getMapType'
      })
    },
    methods: {
      changeTab(item) {
        if(item.router){
          this.$router.push(item.router);
        }

        if(this.getMapType === "2d"){
          EventBus.bus.emit(EventBus.CENTER_TAB_2D, item);
        }else if(this.getMapType === "3d"){
          EventBus.bus.emit(EventBus.CENTER_TAB_3D, item);
        }
      }
    },
    watch: {
      getMapType: function (val) {
        if (val) {
          this.routers = this.routers3d;
        } else {
          this.routers = this.routers2d;
        }
      }
    },
    mounted() {
      window.$apis.getCenterTab().then(val => {
        this.routers2d = val.data.tab2d;
        this.routers3d = val.data.tab3d;
        if (this.is3d) {
          this.routers = this.routers3d;
        } else {
          this.routers = this.routers2d;
        }
      })
    }
  }
</script>

