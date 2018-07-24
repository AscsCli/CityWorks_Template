<template>
    <div class="center-con">
        <div class="center-wrap">
            <div style="width:100%;">
                <rk-tab :routers="routers" @changeTab="changeTab" v-model="activeLabel"></rk-tab>
            </div>
        </div>
        <div class="mapcont">
        </div>
    </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        is3d: true,
        activeLabel: '地理变化',
        routers: [],
        routers2d: [],
        routers3d: [],
      }
    },
    computed: {},
    methods: {
      changeTab(item) {
        this.$router.push(item.router)
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
    },
    watch: {
      is3d: function (val) {
        if (val) {
          this.routers = this.routers3d;
        } else {
          this.routers = this.routers2d;
        }
      }
    }
  }
</script>

