<template>
	<div>
		<i v-for="item in icons" :title="item.title" :class="'icon iconfont  icon-'+ item.class" @click="tap(item)"></i>
	</div>
</template>
<script>
	export default {
		props:{
			icons:Array,
			callback:Function
		},
		methods:{
			tap(item){
				this.$props.callback(item);
			}
		}
	}
</script>
<style scoped>
	.iconfont{
		font-size: .24rem;
		color: #8ac0e8;
		cursor: pointer;
		margin-right: .2rem;
	}
	.iconfont:hover{
		color: #00a0e9;
	}
</style>