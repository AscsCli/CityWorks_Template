<template>
    <div class="head" id="head">
        <a href="#" class="logo">
            <img src="../../../static/images/logo.png">
        </a>
        <span class="span-info">{{ getTitle }}</span>
        <input type="text" class="search" placeholder="请输入关键词查询">
        <tool-bar class="tools" v-show="getMapType === '3d'" :icons="cwIcons" :callback="doThree"></tool-bar>
        <tool-bar class="tools" v-show="getMapType === '2d'" :icons="arcGisIcons" :callback="doTwo"></tool-bar>
        <div class="right-drop">
            <rk-dropDown @itemClick="itemClick" :dropDownItem="list" :title="nameTitle"></rk-dropDown>
        </div>
    </div>
</template>
<script>
  import toolBar from "../components/toolBar/toolBar.vue";
  import {EventBus} from "../../eventBus/eventBus.js";
  import {mapGetters, mapActions} from 'vuex';

  export default {
    data() {
      return {
        is3D: true,
        is2D: false,
        data_show: true,
        nameTitle: 'CityWorks',
        cwIcons: [],
        arcGisIcons: [],
        twoScreen: true,
        twoSplit: true,
        overViewFlag: false,
        list: [
          {
            name: '退出',
            type: 'loginOut'
          },
          {
            name: '个人中心',
            type: 'pre'
          }
        ]
      }
    },
    components: {
      toolBar
    },
    computed: {
      ...mapGetters({
        getTitle:'getTitle',
        getMapType : 'getMapType',
        get2dLoadTag : 'get2dLoadTag',
        get3dLoadTag : 'get3dLoadTag',
      })
    },
    methods: {
      itemClick() {
        console.log(item);
      },
      doThree(item) {
        if (item.title === "转换成2D" && this.get2dLoadTag) {
          this.setMapType('2d');
        }
        EventBus.bus.emit(EventBus.HEAD_ICON_3D, item);
      },
      doTwo(item) {
        if (item.title === "转换成3D" && this.get3dLoadTag) {
          this.setMapType('3d');
        }
        EventBus.bus.emit(EventBus.HEAD_ICON_2D, item);
      },
      ...mapActions({
        setMapType: 'setMapType'
      }),
    },
    beforeCreate() {
      window.$apis.getToolBar2d().then(val => {
        this.arcGisIcons = val.data.toolBar2d;
        if(this.getMapType === '2d' && !this.get3dLoadTag){
          this.arcGisIcons.shift();
        }
      });
      window.$apis.getToolBar3d().then(val => {
        this.cwIcons = val.data.toolBars3d;
        if(this.getMapType === '3d' && !this.get2dLoadTag){
          this.cwIcons.shift();
        }
      });
    },
  }

</script>
