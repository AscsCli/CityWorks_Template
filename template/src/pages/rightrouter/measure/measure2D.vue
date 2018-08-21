<template>
    <rk-section :model="'测量工具2D'" :closeFlag='closeflag'>
        <div class="measure_tool">
            <div v-for="item in buttons" @click="querySelect(item.type)" href="javascript:;" class="mes_gl">
                <i :class="[item.class,' icon iconfont']"></i>
                <span class="mes_name">{{item.name}}</span>
            </div>
            <div class="button_wrap">
                <p style="color: #73a1c5">{{resultLabel}}</p>
            </div>
        </div>
    </rk-section>
</template>
<script>
  import {eventBus} from "@cityworks/gismap3";

  export default {
    name: 'measure2D',
    components: {},
    data() {
      return {
        closeflag: true,
        selectedIndex: 0,
        resultLabel: "",
        isCoordFlag: true,
        buttons: [
          {
            name: "测距离",
            class: "icon-shangxiashuipingtuodong",
            type: "distance"
          },
          {
            name: "测面积",
            class: "icon-cemianji",
            type: "area"
          },
          {
            name: "测坐标",
            class: "icon-cezuobiao",
            type: "coord"
          }
        ],
        options: [{name: "米"}, {name: "厘米"}, {name: "毫米"}]
      };
    },
    methods: {
      querySelect: function (type) {
        this.$emit("measureType",type);
      }
    },
    computed: {},
    mounted() {
      eventBus.bus.addListener(eventBus.COORD, (result) => {
        this.resultLabel = `X:${result.x.toFixed(2)}\nY:${result.y.toFixed(2)}`;
      })

    },
    destroyed() {
      measureTool.coordClick(mapConfig.mapId, false);
    }
  };
</script>
<style lang="scss">
    @import "measure";
</style>


