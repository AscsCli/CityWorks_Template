<template>
	<div class="container">
        <div class="head-wrap">
            <head-dom></head-dom>
        </div>
        <div class="main-wrap">
            <div class="menu-wrap">
                <left-menu></left-menu>
            </div>
            <div class="center">
                <center-dom></center-dom>
            </div>
            <div class="right-wrap">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
	import headDom from '../head/head';
	import leftMenu from '../leftmenu/leftmenu';
    import centerDom from '../center/center';
    import { mapGetters } from 'vuex';
	export default {
		components:{
			headDom,
			leftMenu,
            centerDom,
		},
        computed:{
        }
	}
</script>