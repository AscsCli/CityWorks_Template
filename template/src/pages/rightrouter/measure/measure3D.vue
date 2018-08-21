<template>
    <rk-section :model="'测量工具3D'" :closeFlag='closeflag'>
        <div class="measure_tool">
            <div v-for="item in buttons"   @click="querySelect(item.type)" href="javascript:;" class="mes_gl">
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
    export default {
    name:'measure3D',
    components: {},
    data() {
      return {
        closeflag:true,
        selectedIndex: 0,
        resultLabel: "",
        isCoordFlag:true,
        buttons: [
          {
            name: "直线测量",
            class: "icon-shangxiashuipingtuodong",
            type: "line"
          },
          {
            name: "面积测量",
            class: "icon-cemianji",
            type: "area"
          },
          {
            name: "垂直测量",
            class: "icon-cezuobiao",
            type: "vertical"
          },{
            name: "水平测量",
            class: "icon-cezuobiao",
            type: "horizontal"
          }
        ]
      };
    },
    methods: {
      querySelect: function(type) {
        this.$emit("measureType",type);
      }
    },
  };
</script>
<style lang="scss">
@import "measure";
</style>


