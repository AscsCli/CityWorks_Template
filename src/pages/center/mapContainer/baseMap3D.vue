<template>
    <div :class="[{'base-map-3d-width': !display },'base-map-3d']">
        <object id="__g" type="application/x-cm-3d" style="width:100%;height:100%;"></object>
    </div>
</template>

<script>

  import {cw5} from "@cityworks/cw3d-cm/index";
  import {listenerInit3d} from "../../../listener/listenerInit3d";
  import {mapGetters} from 'vuex';

  export default {
    name: "map3d",
    data() {
      return {}
    },
    props: {
      display: {
        type: [Boolean],
        default: false
      }
    },
    computed: {
      ...mapGetters({
        get3dLoadTag: 'get3dLoadTag',
        get3dMapLayers: 'get3dMapLayers'
      })
    },
    mounted() {
      listenerInit3d.init(this);
      cw5.init();
      cw5.version = 7;
      cw5.loadMap(this.get3dMapLayers);
    },
    destroyed() {
      listenerInit3d.remove();
    }
  }
</script>
<style>
    .base-map-3d{
        width: 100%;
        height: 100%;
    }
    .base-map-3d-width {
        width: 0;
    }
</style>