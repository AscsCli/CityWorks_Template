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
                    {class: 'd1', title: '转换成2D'},
                    // {class: 'print', title: '打印'},
                    {class: 'dianxuan', title: '选中'},
                    {class: 'zhuashou', title: '手型'},
                    {class: 'poi', title: 'POI'},
                    {class: 'yingyan', title: '鹰眼'},
                    {class: 'huanchongfenxi', title: '透视分析'},
                    {class: 'fuyuan', title: '初始化'},
                    {class: 'celiang', title: '测量'},
                    {class: 'xiangpica', title: '清除'},
                    {class: 'wadong', title: '挖洞'},
                    {class: 'shexiangtou', title: '摄像头'},
                    {class: 'guijifeihang', title: '飞行轨迹'},
                    {class: 'quanping', title: '全屏'},
                    {class: 'erfenping', title: '2D/3D分屏'}
                ],
                arcGisIcons: [
                    {class: 'd', title: '转换成3D'},
                    // {class: 'print', title: '打印'},
                    {class: 'Group', title: '卷帘'},
                    {class: 'huanchongfenxi', title: '缓冲分析'},
                    {class: 'poi', title: 'POI'},
                    {class: 'shuqian', title: '书签'},
                    {class: 'celiang', title: '测量'},
                    {class: 'erfenping', title: '分屏'},
                    {class: 'dianxuan', title: '选中'},
                    {class: 'yingyan', title: '鹰眼'},
                    {class: 'xiangpica', title: '清除'},
                    {class: 'shitai', title: '时态'},
                    {class: 'fuyuan', title: '初始化'}
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
