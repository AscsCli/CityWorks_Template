<template>
    <div class="head" id="head">
        <a href="#" class="logo">
            <img src="../../../static/images/logo.png">
        </a>
        <span class="span-info">{{ title }}</span>
        <input type="text" class="search" placeholder="请输入关键词查询">
        <tool-bar class="tools" v-show="is3D" :icons="cwIcons" :callback="doThree"></tool-bar>
        <tool-bar class="tools" v-show="is2D" :icons="arcGisIcons" :callback="doTwo"></tool-bar>
        <div class="right-drop">
            <rk-dropDown @itemClick="itemClick" :dropDownItem="list" :title="nametitle"></rk-dropDown>
        </div>
    </div>
</template>
<script>
    import toolBar from "../components/toolBar/toolBar.vue"
    import { EventBus } from "../../eventBus/eventBus.js"
    export default {
        data() {
            return {
                is3D: true,
                is2D: false,
                data_show: true,
                nametitle:'CityWorks',
                title: mapConfig.title,
                cwIcons: [
                    {class: 'convert-2d', title: '转换成2D'},
                    // {class: 'print', title: '打印'},
                    {class: 'choose', title: '选中'},
                    {class: 'hand-shape', title: '手型'},
                    {class: 'poi', title: 'POI'},
                    {class: 'eagle-eye', title: '鹰眼'},
                    {class: 'visibility-analysis', title: '透视分析'},
                    {class: 'reset', title: '初始化'},
                    {class: 'ruler', title: '测量'},
                    {class: 'eraser', title: '清除'},
                    {class: 'dig-hole', title: '挖洞'},
                    {class: 'tense', title: '摄像头'},
                    {class: 'flight-path', title: '飞行轨迹'},
                    {class: 'full-screen', title: '全屏'},
                    {class: 'split-screen', title: '2D/3D分屏'}
                ],
                arcGisIcons: [
                    {class: 'convert-3d', title: '转换成3D'},
                    // {class: 'print', title: '打印'},
                    {class: 'shutter', title: '卷帘'},
                    {class: 'buffer-analysis', title: '缓冲分析'},
                    {class: 'poi', title: 'POI'},
                    {class: 'book-marks', title: '书签'},
                    {class: 'ruler', title: '测量'},
                    {class: 'split-screen', title: '分屏'},
                    {class: 'choose', title: '选中'},
                    {class: 'eagle-eye', title: '鹰眼'},
                    {class: 'eraser', title: '清除'},
                    {class: 'tense', title: '时态'},
                    {class: 'reset', title: '初始化'}
                ],
                twoScreen: true,
                twoSplit: true,
                overViewFlag: false,
                pagePath: '../../static/pages/data_index.html',
                list:[
                    {
                        name:'退出',
                        type:'loginOut'
                    },
                    {
                        name:'个人中心',
                        type:'pre'
                    }
                ]
            }
        },
        components: {
            toolBar
        },
        methods: {
            itemClick(){
                console.log(item);
            },
            doThree(item) {
                if(item.title == "转换成2D"){
                    this.is3D = false
                    this.is2D = true
                }
                EventBus.bus.emit(EventBus.HEAD_ICON_3D,item);
            },
            doTwo(item) {
                if(item.title == "转换成3D"){
                    this.is3D = true
                    this.is2D = false
                }
                EventBus.bus.emit(EventBus.HEAD_ICON_2D,item);
            }
        },
        mounted() {
           
        }
    }
   
</script>
