<template>
	<div>
		<section-part :model="'网格详情'">
			<div style="width:12.25rem;margin:10px auto;">
				<table v-for = "items in grid"  class="grid-manager">
					<tbody>
						<tr>
							<td>网格名称</td><td>{{ items.name }}</td>
						</tr>
						<tr>
							<td>巡查员</td><td>{{ items.owner1 }}</td>
						</tr>
						<tr>
							<td>巡查员</td><td>{{ items.owner2 }}</td>
						</tr>
						<tr v-show = "items.owner3 != undefined">
							<td>巡查员</td><td>{{ items.owner3 }}</td>
						</tr>
						<tr v-show = "items.owner4 != undefined">
							<td>巡查员</td><td>{{ items.owner4 }}</td>
						</tr>
						<tr>
							<td>指导员</td><td>{{ items.guider }}</td>
						</tr>
					</tbody>
				</table>
			</div>
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
				showOfChartOne:true,
				showOfChartTwo:true,
				showOfMap:true,
				grid: [
					{
						name:"网格一",
						owner1:"杨辉球: 13480629083",
						owner2:"李东伟: 15099907910",
						guider:"江吉聪：13926536389"
					},
					{
						name:"网格二",
						owner1:"甘胜: 13776574075",
						owner2:"江捷君: 13760331700",
						guider:"江吉聪：13926536389"
					},{
						name:"网格三",
						owner1:"朱伟祥: 13662245735",
						owner2:"陈道隆: 13510933632",
						owner3:"江思忠: 18806660520",
						owner4:"杨成耀: 15886688363",
						guider:"江吉聪：13926536389"
					}
				]
			}
		},
		mounted(){
			
		}
	}
</script>