<template>
    <div class="center-con">
        <div class="center-wrap">
            <div style="width:100%;">
                <rk-tab :routers="routers" @changeTab="changeTab" v-model="activeLabel"></rk-tab>
            </div>

        </div>
        <div class="mapcont">
            <baseMap :mapId="mapId" :initExtent="extent" :layerType="layerType" :mapType="mapType"
                     :mapHeight="mapHeight" :mapWidth="mapWidth" :url="url" v-show="isShow"></baseMap>
            <map3d v-show="!isShow"></map3d>
        </div>
    </div>
</template>

<script>
	import baseMap from "./baseMap2D.vue"
	import map3d from './baseMap3D.vue'

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
				activeLabel: '地理变化',
				routers: [],
				routers2d: [],
				routers3d: [],
                isShow: false,
			}
		},
		computed: {},
		methods: {
			changeTab(item) {
				console.log(item);
				this.$router.push(item.router)
			}
		},
		watch: {
			is3d: function (val) {
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

