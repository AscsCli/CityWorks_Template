<template>
	<div>
		<i v-for="item in icons" :title="item.title" :class="'icon-font icon-'+ item.class" @click="tap(item)"></i>
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
	@import './style.css';

	.icon-font{
		font-size: .24rem;
		color: #8ac0e8;
		cursor: pointer;
		margin-right: .2rem;
	}
	.icon-font:hover{
		color: #00a0e9;
	}
</style>