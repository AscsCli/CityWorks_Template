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
            <rk-dropDown @itemClick="itemClick" :dropDownItem="list" :title="nameTitle"></rk-dropDown>
        </div>
    </div>
</template>
<script>
    import toolBar from "../components/toolBar/toolBar.vue"
    import { EventBus } from "../../eventBus/eventBus.js"
    export default {
      beforeCreate(){
        window.$apis.getToolBar2d().then(val => {
          this.arcGisIcons = val.data.toolBar2d;
        });
        window.$apis.getToolBar3d().then(val => {
          this.cwIcons = val.data.toolBars3d;
        });
      },
        data() {
            return {
                is3D: true,
                is2D: false,
                data_show: true,
                nameTitle:'CityWorks',
                title: "",
                cwIcons: [],
                arcGisIcons: [],
                twoScreen: true,
                twoSplit: true,
                overViewFlag: false,
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
                if(item.title === "转换成2D"){
                    this.is3D = false;
                    this.is2D = true;
                }
                EventBus.bus.emit(EventBus.HEAD_ICON_3D,item);
            },
            doTwo(item) {
                if(item.title === "转换成3D"){
                    this.is3D = true;
                    this.is2D = false;
                }
                EventBus.bus.emit(EventBus.HEAD_ICON_2D,item);
            }
        },
        mounted() {
           window.$apis.getMapConfig().then(val => {
                let projectConfig = val.data;
                this.title = projectConfig.title;
           });

        }
    }
   
</script>
