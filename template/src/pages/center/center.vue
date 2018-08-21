<template>
    <div class="center-con">
        <div class="center-wrap">
            <div style="width:100%;">
                <rk-tab :routers="getMapType === '2d' ? getCenterTab2d : getCenterTab3d" @changeTab="changeTab" v-model="activeLabel"></rk-tab>
            </div>

        </div>
        <div class="mapcont">
            <base-map></base-map>
        </div>
    </div>
</template>

<script>

  import {mapGetters} from 'vuex';
  import {EventBus} from "../../eventBus/eventBus.js";
  import baseMap  from "./mapContainer/baseMap";
  export default {
    components: {
      baseMap
    },
    data() {
      return {
        defaultLink: 5,
        activeLabel: '测量工具',
        routers: [],
        routers2d: [],
        routers3d: [],
      }
    },
    computed: {
      ...mapGetters({
        getMapType: 'getMapType',
        getCenterTab2d: 'getCenterTab2d',
        getCenterTab3d: 'getCenterTab3d'
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
    mounted() {}
  }
</script>

