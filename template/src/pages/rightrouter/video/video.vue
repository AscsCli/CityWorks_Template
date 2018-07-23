<template>
	<div>
		<section-part :model="'摄像头统计'">
			<echarts :model="echart_one" height="250px"></echarts>
		</section-part>
		<section-part :model="'摄像头列表'">
			<videores :model="tempLists" :play="playVideo" :login="getLogin"></videores>
		</section-part>
		<section-part :model="'二维地图'">
			<div  id="map" style="width:100%;height:250px"></div>
		</section-part>
	</div>
</template>
<script>
	import { actions } from './video_control.js';
	import { mapActions, mapGetters } from 'vuex';
    import videores from './video_res.vue';
    import sectionPart from '../../../../UIcomponents/section/section.vue';
    import echarts from '../../../../UIcomponents/echarts/echarts.vue';
	export default {

		data(){
			return {
				showOfChart:true,
				showOfVideo:true,
				showOfMap:true,
				echart_one:null,
				lists:[
					{tit:'室内摄像头',icons:'../../static/images/main9.png',show:false},
					{tit:'室外摄像头',icons:'./images/main9.png',show:false}
				],
				tempLists:[
					{tit:'竹坑社区',icons:'/static/images/main9.png',show:false,list:[
						{tit:'室外摄像头',icons:'../../static/images/main9.png',show:false,list:[
							{tit:'商场正大门左',id:"01-1-10",list:[]},
							{tit:'商场正大门右',id:"01-1-11",list:[]},
							{tit:'正门水果店前面街道',id:"01-1-20",list:[]},
							{tit:'药店正门前面街道',id:"01-1-21",list:[]},
							{tit:'好家园1G',id:"01-1-22",list:[]},
							{tit:'好家园1W',id:"01-1-23",list:[]},
							{tit:'东南角',id:"01-1-57",list:[]},
							{tit:'门卫室上方',id:"01-1-58",list:[]},
							{tit:'大门口',id:"01-1-64",list:[]}
						]},
						{tit:'室内摄像头',icons:'../../static/images/main9.png',show:false,list:[
							{tit:'竹坑综合市场',icons:'../../static/images/main9.png',show:false,list:[
								{tit:'陈富鸡档安全出口',id:"01-3-28",list:[]},
								{tit:'咸菜档前面通道',id:"01-3-34",list:[]},
								{tit:'王穿面店安全出口',id:"01-3-35",list:[]},
								{tit:'正门火车票店通道',id:"01-3-38",list:[]},
								{tit:'正门水果档通道',id:"01-3-41",list:[]}
							]},
							{tit:'高先电子',icons:'../../static/images/main9.png',show:false,list:[
								{tit:'鞋柜门口对面',id:"01-4-59",list:[]},
								{tit:'码头值班岗位',id:"01-4-60",list:[]},
							]},
							{tit:'福万佳商场',icons:'../../static/images/main9.png',show:false,list:[
								{tit:'服务台',id:"01-5-44",list:[]},
								{tit:'黄金珠宝',id:"01-5-45",list:[]},
								{tit:'一楼电梯口',id:"01-5-46",list:[]},
								{tit:'仓库防火门',id:"01-5-50",list:[]},
								{tit:'员工通道',id:"01-5-52",list:[]}
							]},
							{tit:'好家园酒店',icons:'../../static/images/main9.png',show:false,list:[
								{tit:'好家园前台',id:"01-6-24",list:[]}
							]},
							{tit:'沃特玛',icons:'../../static/images/main9.png',show:false,list:[
								{tit:'二楼顶部1',id:"01-7-61",list:[]},
								{tit:'二楼顶部2',id:"01-7-62",list:[]},
								{tit:'研发大楼顶部',id:"01-7-63",list:[]}
							]},
							{tit:'连展科技',icons:'../../static/images/main9.png',show:false,list:[{}]},
							{tit:'酷威网咖',icons:'../../static/images/main9.png',show:false,list:[
								{tit:'前台',id:"01-9-65",list:[]},
								{tit:'内部1',id:"01-9-66",list:[]},
								{tit:'内部2',id:"01-9-67",list:[]},
								{tit:'内部3',id:"01-9-68",list:[]},
								{tit:'高端区',id:"01-9-69",list:[]}
							]}
						]}
					]}
				],
				isFirst:true
			}
		},
		components:{
			videores,
			sectionPart,
			echarts
		},
		computed:{
			...mapGetters({
				getVideosInner:'getVideosInner',
				getVideosOuter:'getVideosOuter'
			})
		},
		methods:{
			...mapActions({
				addlist:'addVideo',
				setlist:'setVideoStatus'
			}),
			getLogin(){
				var that = this;
				if(this.isFirst){
					that.isFirst = false;
					window.ocx_list_cb = function(res){
						that.addlist(res)
					}
					window.ocx_status_cb = function(id, status){
						that.setlist({id:id,status:status})
					}
					NewPlayer.OCX_Login("192.168.2.92", 0, "admin", "admin", 1);
					NewPlayer1.OCX_Login("192.168.2.92", 0, "admin", "admin", 1);
					NewPlayer2.OCX_Login("192.168.2.92", 0, "admin", "admin", 1);
					NewPlayer3.OCX_Login("192.168.2.92", 0, "admin", "admin", 1);
				}
			},
			playVideo(id,name){
//				console.log(id,name)
				var that = this;
				if(name=='商场正大门左'||name=='商场正大门右'){
					actions.playEngineVideo(name,id);
				}else{
					if(that.$store.state.videoActive==0){
						NewPlayer.OCX_Live(id, -1);
						that.$store.state.videoActive+=1
						that.$store.state.videoMessages[0].tit = name
					}else if(that.$store.state.videoActive==1){
						NewPlayer1.OCX_Live(id, -1);
						that.$store.state.videoActive+=1
						that.$store.state.videoMessages[1].tit = name
					}else if(that.$store.state.videoActive==2){
						NewPlayer2.OCX_Live(id, -1);
						that.$store.state.videoActive+=1
						that.$store.state.videoMessages[2].tit = name
					}else{
						NewPlayer3.OCX_Live(id, -1);
						that.$store.state.videoActive = 0
						that.$store.state.videoMessages[3].tit = name
					}
				}
			},

			
		},
		mounted(){
			let video = {
				inner:{
					good:21,
					bad:0
				},
				outer:{
					good:9,
					bad:0
				}
			};
			this.echart_one = actions.videoData_one(video);

			this.$store.state.showVideo = true;
			//加载地图
			var map = new BMap.Map('map');
			map.enableScrollWheelZoom();//设置滚轮缩放
  			map.centerAndZoom(new BMap.Point(114.402385,22.718498), 15);
			
		},
		destroyed(){
			this.$store.state.showVideo = false;
		}
	}
</script>