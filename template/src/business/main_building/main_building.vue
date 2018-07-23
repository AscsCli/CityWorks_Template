<template>
	<div>	
		<section-part :model="'重点建筑'">
				<recursion :model="lists" :fly="flyToObject"></recursion>
		</section-part>
	</div>
</template>
<script>
	import { actions } from './main_building_control.js';
	import sectionPart from '../../../../UIcomponents/section/section.vue';
	import recursion from '../../../../UIcomponents/recursion/recursion.vue';
	export default {
		components:{
			recursion,
			sectionPart
		},
		data(){
			return {
				close:'../../static/images/close.png',
				lists:[],
				showOfList:true
			}
		},
		methods:{
			flyToObject(item){
				// actions.flyToBuilding(item.tit)
			}
		}
	}
</script>