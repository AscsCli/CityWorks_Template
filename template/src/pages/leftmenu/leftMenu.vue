<template>
    <div class="left-wrap">
        <div class="menu-cont">
            <ul class="menu-list">
                <li v-for="(item,index) in menu" :class="{active:item.show}" :key="index"
                    @click="setActive(index,item)">
                    <p class="menu-icon">
                        <i class="icon iconfont" :class="item.class"></i>
                    </p>
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
        <div class="menu-detail" :class="{'menu-detail-none':!showDetail}">
            <div class="shouqi" @click="toggle">
                <i class="icon-zhankaishouqi icon iconfont"></i>
            </div>
            <rk-menu v-if="showDetail" :datas="obj" :title="menuTitle" :showeyes='show' @eyeClick="eyeClick"
                     @itemClick="itemClick"></rk-menu>
        </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import {EventBus} from '../../eventBus/eventBus.js';

  export default {
    data() {
      return {
        menu2D: [],
        menu3D: [],
        menu: [],
        obj: [],
        menuTitle: '',
        show: true,
        default_index: 0
      }
    },
    computed: {
      ...mapGetters({
        showDetail: 'showDetail',
        getMapType: 'getMapType',
        get2dLoadTag: 'get2dLoadTag',
        get3dLoadTag: 'get3dLoadTag',
      })
    },
    watch:{
      'getMapType':function (val) {
        if(val === '2d'){
          this.setMenuData(this.menu2D);
        }else if(val === '3d'){
          this.setMenuData(this.menu3D);
        }
      }
    },
    methods: {
      itemClick(item) {
        if (this.show === false) {
          EventBus.bus.emit("LEFT_DETAIL", item)
        }
      },
      eyeClick(item) {
        EventBus.bus.emit("LEFT_DETAIL", item)
      },
      setActive(index, item) {
        //收起动画效果
        this.$store.dispatch('closeMenu', true);
        //左侧点击切换效果
        this.menu[this.default_index].show = false;
        this.menu[index].show = true;
        this.default_index = index;
        //赋值操作
        this.obj = this.menu[index].data;
        this.menuTitle = this.menu[index].title;
        this.show = this.menu[index].showeyes;

        //触发监听的LEFT_FIRSTC事件
        EventBus.bus.emit("LEFT_FIRSTC", item)
      },
      toggle() {
        this.$store.dispatch('closeMenu', false)
      },
      setMenuData(menuData){
        if(menuData.length != 0 ){
          this.menu = menuData;
          this.menuTitle = menuData[0].title;
          this.obj = menuData[0].data
        }
      },
      getJson() {
        if(this.get2dLoadTag === true){
          window.$apis.getMenu2d().then(res => {
            let data = res.data.menu;
            this.menu2D = data;
            if(this.getMapType === '2d'){
              this.setMenuData(this.menu2D);
            }
          });
        }
        if(this.get3dLoadTag  === true){
          window.$apis.getMenu3d().then(res => {
            let data = res.data.menu;
            this.menu3D = data;
            if(this.getMapType === '3d'){
              this.setMenuData(this.menu3D);
            }
          });
        }
      }
    },
    mounted() {
      window.onload = () => {
        this.getJson();
      };

    }
  }
</script>
