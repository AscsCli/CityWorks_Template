<template>
  <div class="center-con">
    <div class="center-wrap">
      <div style="width:100%;">
        <rk-tab :routers="routers" @changeTab="changeTab" v-model="activeLabel1"></rk-tab>
      </div>
  
    </div>
    <div class="mapcont">
      <baseMap :mapId="mapId" :initExtent="extent"  :layerType="layerType"  :mapType="mapType"  :mapHeight="mapHeight"  :mapWidth="mapWidth" :url="url"></baseMap>
    </div>
  </div>
</template>

<script>
  import baseMap from "./baseMap2D.vue"
  export default {
    components:{
      baseMap
    },
    data() {
      return {
        mapType:"tiled",
        url:"http://121.201.65.133:2001/arcgis/rest/services/szmap_10_170117/MapServer",
        mapId:'5555',  
        extent:{                      
          xmax:106845.70780098543,
          ymax:54047.27319746484,
          xmin:87001.91811340605,
          ymin:18751.785939823654
        },
        mapHeight:'100%',
        mapWidth:'100%',
        layerType:"",
        
        defaultLink: 5,
        arcStyle: {
          width: '100%',
          height: '100%'
        },
        engStyle: {
          width: '100%',
          height: '100%'
        },
        arcSplit: {
          width: '100%',
          height: '100%'
        },
        activeLabel1: '地理变化',
        routers: [{
            name: '地理变化',
            router: '/home/layerTimerView',
            powercode: 'DILI'
          },
          {
            name: '影像对比',
            router: '/home/swipView',
            powercode: 'YINGXIANG'
          },
          {
            name: '测量工具',
            router: '/home/measure_2D_3D',
            powercode: 'CELIANG'
          },
        ]
  
      }
    },
    computed: {
  
    },
    methods: {
      changeTab() {
  
      }
    },
    mounted() {
  
    }
  }
</script>

