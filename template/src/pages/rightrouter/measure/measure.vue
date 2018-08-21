<template>
    <div class="measure-box">
        <cw-template>
            <measure2-d slot="2d" @measureType="measure2D"></measure2-d>
            <measure3-d slot="3d" @measureType="measure3D"></measure3-d>
        </cw-template>
    </div>
</template>
<script>
    import measure2D from './measure2D.vue';
    import measure3D from './measure3D.vue';
    import cwTemplate from '../../components/template.vue';
    import {measure3DFunc} from "@/pages/rightRouter/measure/measure3D";
    import {measure2DFunc} from "@/pages/rightRouter/measure/measure2D";

    export default{
        components: {
            measure2D,
            measure3D,
            cwTemplate
        },
        data(){
            return {}
        },
        methods:{
            measure3D(type){
              measure3DFunc.init(type);
            },
            measure2D(type){
              measure2DFunc.init(type);
            }
        }
    }
</script>
<style>
    .measure-box{
        height: 100%;
    }
</style>
