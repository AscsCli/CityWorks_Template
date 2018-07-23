<template>
	<div>
		<section-part :model="'消防员、消防车分布'">
			<div style="height: 15rem;text-align:center;">
				<img v-bind:src="car" alt="人车位置">
				<ul class="build_ul">
					<li v-for="(item,index) in building" :key="index">{{index+1}}:{{item}}</li>
				</ul>
			</div>
		</section-part>	
		<section-part :model="'Log日志'">
			<div class="log-mess">
				<p v-for="item in logs" :key="item">{{item.ip+': '+item.txt}}</p>
			</div>
		</section-part>
		<section-part :model="'二维地图'">
			<div id="map" style="height: 300px"></div>
		</section-part>
	</div>
</template>
<script>
	import sectionPart from '../../../../UIcomponents/section/section.vue';
	export default {
		components:{
			sectionPart
		},
		data(){
			return {
				close:'../../static/images/close.png',
				car:'../../static/images/people_car.png',
				showOfCar:true,
				showOfLog:true,
				showOfMap:true,
				logs:[{ip:'192.168.2.214',txt:'登录事件'},{ip:'192.168.2.214',txt:'打开地图查看地图'},{ip:'192.168.2.214',txt:'查看消防车位置'},{ip:'192.168.2.214',txt:'查询房屋信息'},{ip:'192.168.2.214',txt:'查新当前最新信息'},{ip:'192.168.2.214',txt:'退出登录'}],
				building:['公共绿地','公共绿地','公共绿地','公共绿地','公共绿地','公共绿地','公共绿地','公共绿地','公共绿地','公共绿地']
			}
		},
		mounted(){
			//加载地图
			var map = new BMap.Map('map');  
			map.enableScrollWheelZoom();//设置滚轮缩放
  			map.centerAndZoom(new BMap.Point(121.491, 31.233), 15);  
		}
	}
</script>