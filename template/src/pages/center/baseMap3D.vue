<template>
    <div :class="{'base-map-3d': !display}" style="width:100%;height:100%;">
        <object id="__g" type="application/x-cm-3d" style="width:100%;height:100%;"></object>
    </div>
</template>

<script>

  import {cw5} from "@cityworks/cw3d-cm/index";
  import {head3DIconListen} from "./head3DIconListen";
  import {mapActions,mapGetters} from 'vuex';
  export default {
    name: "map3d",
    mixins: [head3DIconListen],
    data() {
      return {}
    },
    props: {
      display: {
        type: [Boolean],
        default: false
      }
    },
    computed:{
      ...mapGetters({
        get3dLoadTag:'get3dLoadTag'
      })
    },
    mounted() {
      if(true){
        cw5.init();
        cw5.version = 7;
        cw5.loadMap();
      }
    }
  }
</script>

<style>
.base-map-3d{
    visibility: hidden;
}
</style>