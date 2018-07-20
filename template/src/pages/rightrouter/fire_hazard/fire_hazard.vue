<template>
	<div>
		<section-part :model="'消防设施'">
			<div  id="charts_one" v-bind:style="{ width:265+'px',height: 245+'px' }"></div>
		</section-part>
		<section-part :model="'人口统计'">
			<div  id="charts_two" v-bind:style="{ width:265+'px',height: 245+'px' }"></div>
		</section-part>
		<section-part :model="'温度统计'">
			<div  id="charts_thr" v-bind:style="{ width:265+'px',height: 245+'px' }"></div>
		</section-part>
	</div>
</template>
<script>
	import echarts from 'echarts';
	import { actions } from './fire_hazard_control.js'; 
	import sectionPart from '../../../../UIcomponents/section/section.vue';
	export default {
		components:{
			sectionPart
		},
		data(){
			return {
				close:'../../static/images/close.png',
				showOfControl:true,
				showOfPeople:true,
				showOfTemp:true
			}
		},
		mounted(){
			//echarts
			var myChart_one = echarts.init(document.getElementById('charts_one'));
			var myChart_two = echarts.init(document.getElementById('charts_two'));
			var myChart_thr = echarts.init(document.getElementById('charts_thr'));
			var that = this;
			window.echart_temperature = function (id){
				var date = new Date();
				var year,month,day,hour,miniut,sec;
				year = date.getFullYear();
				month = date.getMonth()+1;
				if(month<10){
					month = '0'+month;
				}
				day = date.getDate();
				hour = date.getHours()-1;
				miniut = date.getMinutes();
				sec = date.getSeconds();
				that.$http.post(actions.config.httpServerUrl+':'+actions.config.httpServerPort+'/v1/build/'+id+'/temperature',null,{
					params:{
						min_date:year+'-'+month+'-'+day+' '+hour+':'+miniut+':'+sec
					}
				}).then(function(res) {
					actions.echart_temperature_total(myChart_thr,res.body.data,echarts)
				}).catch(function(err) {
					console.log(err)
				})
			}

			this.$http.post(actions.config.httpServerUrl+':'+actions.config.httpServerPort+'/v1/statistics/builds/facilities',null).then(function(res) {
					actions.echart_fire_facilities(myChart_one, res.body.data)
				}).catch(function(err) {
					console.log(err)
				})
			this.$http.post(actions.config.httpServerUrl+':'+actions.config.httpServerPort+'/v1/statistics/population',null).then(function(res){
				//设置人口
				var dataSet = [];
				dataSet.push({value:0,name:'总数'});
				dataSet.push({value:res.body.data.register,name:'已注册'});
				dataSet.push({value:res.body.data.other,name:'其他'});
				actions.echart_people_total(myChart_two,dataSet);
			}).catch(function(err){
				console.log(err)	
			})
			//消防设施统计
			setInterval(() =>{
				this.$http.post(actions.config.httpServerUrl+':'+actions.config.httpServerPort+'/v1/statistics/builds/facilities',null).then(function(res) {
					actions.echart_fire_facilities(myChart_one, res.body.data)
				}).catch(function(err) {
					console.log(err)
				})
			},10000)
		},
		destroyed(){
			//先清除拉膜效果
			// clearImproveBuilding();
		}
	}
</script>