<template>
    <div style="width:100%;height:100%;">
        <object id="__g" type="application/x-cm-3d" style="width:100%;height:100%;"></object>
    </div>
</template>

<script>

	import { cw5 } from "@cityworks/cw3d-cm/index";
	import {head3DIconListen} from "./head3DIconListen";

	export default {
		name: "map3d",
		mixins: [head3DIconListen],
		data() {
			return {
			}
		},
		mounted() {
			cw5.init();
			cw5.loadMap(map3dLayers);
		}
	}
</script>

<style>

</style>