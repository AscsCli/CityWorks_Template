<template>
	<ul class="item_ul">
		<li v-for="item in model" @click="login">
			<div v-if="item.list.length != 0">
				<div class="item_tit" @click="item.show = !item.show">
					<a href="javascript:;" v-bind:class="item.show?'item_open':'item_close'"></a>
					<img v-bind:src="item.icons">
					<span v-bind:class="[item.show?'item_span':'','item_text']">{{item.tit}}</span>
				</div>
				<transition  name="m-slide" >
					<div v-if="item.show" v-bind:class="'item_cont slide'+item.length">
						<infin :model="item.list" :play="play" :login="login"></infin>
					</div>
				</transition>
			</div>
			<span v-else @click="play(item.id,item.tit)">{{item.tit}}</span>
		</li>
	</ul>
</template>

<script>
	export default {
		name:'infin',
		props:['model','play','login'],
	}
</script>