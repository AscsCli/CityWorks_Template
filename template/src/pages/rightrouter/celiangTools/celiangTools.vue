<template>
    <div class="measure-box">
        <measure2D></measure2D>
    </div>
</template>
<script>
    import measure2D from './measure2D.vue';
    export default{
        components: {
            measure2D
        },
        data(){
            return {}
        },
        computed: {
            
        },
    }
</script>
<style>
    .measure-box{
        height: 100%;
    }
</style>
