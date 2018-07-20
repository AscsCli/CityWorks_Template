<template>
	<div>
		<section-part :model="'重点部位详情'">	
				<echarts :model="echarts_one" :height="'265px'"></echarts>
		</section-part>
		<section-part :model="'消防巡查详情'">
				<echarts :model="echarts_two" :height="'265px'"></echarts>
		</section-part>
		<section-part :model="'巡查记录详情'">
				<echarts :model="echarts_thr" :height="'265px'"></echarts>
		</section-part>
	</div>
</template>

<script>
	import sectionPart from '../../../../UIcomponents/section/section.vue';
	import echarts from '../../../../UIcomponents/echarts/echarts.vue';
	import { actions } from './patrol_record_control.js'; 
	export default {
		data(){
			return {
				close:'../../static/images/close.png',
				echarts_one:null,
				echarts_two:null,
				echarts_thr:null
			}
		},
		components:{
			sectionPart,
			echarts
		},
		mounted(){

			//获取日期
			var date = new Date();
			var year,month,day,hour,miniut,sec;
			year = date.getFullYear();
			month = date.getMonth()+1;
			if(month<10){
				month = '0'+month;
			}
			day = date.getDate();
			hour = date.getHours();
			miniut = date.getMinutes();
			sec = date.getSeconds();

			//房屋巡查统计
			this.$http.post(actions.config.httpServerUrl+':'+actions.config.httpServerPort+'/v1/statistics/builds/check',null,{
				params:{
					min_date:year+'-'+month+'-'+day,
					max_date:year+'-'+month+'-'+day
				}
			}).then(function(res) {
				var list = res.body.data;
				if(list.length !=0 ){
					list[0].abnormal_list.push('4403070090151100001')
					actions.improveBuilding(list[0].abnormal_list);
				}
			}).catch(function(e){
				console.log(e)
			})

			//巡查记录统计
			this.$http.post(actions.config.httpServerUrl+':'+actions.config.httpServerPort+'/v1/statistics/builds/check',null,{
				params:{
					min_date:year+'-'+(month)+'-00 00:00:00'
				}
			}).then(function(res) {
				actions.echart_patrol_record(myChart_thr,res.body.data)
				
			}).catch(function(e){
				console.log(e)
			})

			this.echarts_one = actions.main_part_detail();

			this.echarts_two = actions.fire_patrol_detail()

		}
	}
</script>