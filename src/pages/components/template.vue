<template>
    <div class="cw-template">
        <div  v-show ="getMapType === '2d'">
            <slot name="2d">

            </slot>
        </div>
        <div  v-show ="getMapType === '3d'">
            <slot name="3d">

            </slot>
        </div>

    </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  export default {
    name:'cwTemplate',
    computed: {
      ...mapGetters({
        getMapType: 'getMapType'
      })
    },
  }
</script>
<style lang="scss">
    .cw-template{
        width: 100%;
        height: 100%;
    }
</style>