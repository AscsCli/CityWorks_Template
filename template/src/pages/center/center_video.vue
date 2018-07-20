<template>
		<div v-bind:class="showDetail? 'video-wrap' :'video-wrap video-wrap-h'" >				
			<div v-for="(item,index) in videoTitle" v-bind:class="item.class">
				<div class="video-tit">
					<span>{{item.tit}}</span>
					<a href="javascript:;" @click="item.show = !item.show"><img src="../../../static/images/close.png"></a>
				</div>
				<div class="video-pic">
					<object v-if="index==0" classid="clsid:F50BEDD7-C293-47B3-89AE-2D2EC2FA4A88" width="100%" height="100%" id= "NewPlayer" ></object>
					<object v-else classid="clsid:F50BEDD7-C293-47B3-89AE-2D2EC2FA4A88" width="100%" height="100%" v-bind:id= "'NewPlayer'+index" ></object>
				</div>
			</div>				
		</div>
</template>
<script>
	import { mapGetters } from 'vuex';
	import { actions } from './center_control.js';
	export default {
		data(){
			return {
				playing:false,
				isFirst:true
			}
		},
		computed:{
			...mapGetters({
				showDetail:'getShowDetail',
				showVideo:'getShowVideo',
				videoTitle:'getVideoMess'
			}),
			getVideoArea(){
				var winWidth = window.innerWidth;
				var that = this;
				if(that.showDetail){
					if(that.showVideo){
						that.$store.state.videoMessages.map(function(item){
							item.show = true;
						});
						return {width:parseInt(winWidth-583) + 'px',height:295 + 'px'}
					}else{
						return {width:parseInt(winWidth-583) + 'px',height:0 + 'px'}
					}
				}else{
					if(that.showVideo){
						that.$store.state.videoMessages.map(function(item){
							item.show = true;
						});
						return {width:parseInt(winWidth-345) + 'px',height:295 + 'px'}
					}else{
						return {width:parseInt(winWidth-345) + 'px',height:0 + 'px'}
					}
				}
			}
		},
		mounted(){
			// actions.ocxLoginListener();
			// actions.ocxGetListListener();
			// actions.ocxGetStatusListener();
			// actions.ocxStopPlayListener();
			// window.onunload = function(){
			// 	NewPlayer.OCX_Logout();
			// 	NewPlayer1.OCX_Logout();
			// 	NewPlayer2.OCX_Logout();
			// 	NewPlayer3.OCX_Logout();
			// }
		}
	}
</script>