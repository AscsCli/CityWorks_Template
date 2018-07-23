<template>
	<div>
		<transition name="right-tran">
			<div v-if="showOfSearch" class="section">
				<div class="right-tit">
					<a href="javascript:;" @click="showOfSearch = !showOfSearch"><img src="../../../../assets/images/close.png"></a>
					<ul class="form_ul">
						<li v-bind:class="(active=='以人查房')?'active':''" @click="show">以人查房</li>
						<li v-bind:class="(active=='以房查人')?'active':''" @click="show">以房查人</li>
						<li v-bind:class="(active=='法人查房')?'active':''" @click="show">法人查房</li>
						<li v-bind:class="(active=='房查法人')?'active':''" @click="show">房查法人</li>
					</ul>
				</div>
				<div class="forms">
					<div v-if="active=='以人查房'">
						<input type="text" class="search_id" ref="search" placeholder="输入姓名或者身份证" maxlength="18" @keyup.enter="search">
						<table v-if="bool">
							<tr>
							<th>姓名</th><th>身份证</th>
							</tr>
							<tr v-for="(item,index) in list" @click="showItem(index)">
								<td>{{item.name}}</td><td>{{item.id_number}}</td>
							</tr>
						</table>
						<table v-else>
							<tr>
							<th>属性</th><th>值</th>
							</tr>
							<tr v-for="item in message">
								<td>{{item.key}}</td><td  @click="flyToBuild(item.key,item.val)">{{item.val}}</td>
							</tr>
						</table>
						<a v-if="!bool" class="back_list" href="javascript:;" @click="bool=!bool">返回</a>
					</div>
					<div v-else>
						<p class="search_tit">建筑--人员列表</p>
						<table>
							<tr>
							<th>姓名</th><th>身份证</th>
							</tr>
							<tr v-for="item in people">
								<td>{{item.name}}</td><td>{{item.id_number}}</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
	import { actions } from './people_room_control.js';
	export default {
		data(){
			return {
				showOfSearch:true,
				showOfMap:true,
				active:'以人查房',
				list:[],
				message:[{key:'身份证',val:'362725199410190817'},{key:'姓名',val:'威优益'},{key:'性别',val:'男'},{key:'出生年月',val:'1994/10/19'},{key:'居住地址',val:'南山区'},{key:'建筑编码',val:''}],
				people:[],
				bool:true
			}
		},
		methods:{
			show(event){
				this.active = event.target.innerHTML;
				if(this.active=='以房查人'){
					actions.build_search_people();
				}
			},
			search(){
				var that = this;
				var val = this.$refs.search.value;
				this.$http.post(actions.config.httpServerUrl+":"+actions.config.httpServerPort+"/v1/population/info?keyword="+val,null).then(function(res){
					that.list = res.body.data;
					that.bool = true;
				}).catch(function(e){
					console.log(e);
				})
			},
			showItem(index){
				this.bool = false;
				var obj = this.list[index];
				var year = obj.id_number.substr(6,4);
				var month = obj.id_number.substr(10,2);
				var day = obj.id_number.substr(12,2);
				this.message[0].val = obj.id_number;
				this.message[1].val = obj.name;
				this.message[2].val = obj.gender;
				this.message[3].val = year+'/'+month+'/'+day;
				this.message[4].val = obj.address;
				this.message[5].val = obj.build_code;
			},
			flyToBuild(key,id){
				if(key=='建筑编码'){
					actions.roomFly(id)
				}
			}
		},
		mounted(){
			var that = this;
			window.build_search_room = function(id){
				that.$http.post(actions.config.httpServerUrl+":"+actions.config.httpServerPort+"/v1/build/"+id+"/population",null).then(function(res){
					that.people = res.body.data;
//					console.log(that.people)
				}).catch(function(e){
					console.log(e)
				})
			}
		}
	}
</script>