<template>
    <div class="left-wrap">
        <div class="menu-cont">
            <ul class="menu-list">
                 <li v-for="(item,index) in menu" :class="{active:item.show}" :key="index" @click="setActive(index,item)">
                    <p class="menu-icon">
                        <i class="icon iconfont" :class="item.class"></i>
                    </p>
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
            <div   class="menu-detail" :class="{menudetailnone:!showDeatil}">
                <div class="shouqi" @click="toggle">
                    <i class="icon-zhankaishouqi icon iconfont"></i>
                </div>
                <rk-menu v-if="showDeatil" :datas="obj" :title="menuTitle" :showeyes='show' @eyeClick="eyeClick" @itemClick="itemClick"></rk-menu>
            </div>
    </div>
</template>
<script>
    import { mapGetters,mapActions } from 'vuex';
    import {EventBus} from '../../eventBus/eventBus.js'
    import axios from 'axios'
    export default {
        data(){
            return {
                menu:[],
                is3D:false,
                obj:[],
                menuTitle:'',
                show:true,
                default_index:0
            }
        },
        components:{
        },
        computed:{
           ...mapGetters([
                'showDeatil'
           ]) 
        },
        methods:{
            itemClick(item){
                if(this.show == false){
                    EventBus.bus.emit("LEFT_DETAIL",item)
                }
            },
            eyeClick(item){
                EventBus.bus.emit("LEFT_DETAIL",item)
            },
            setActive(index,item){
                //收起动画效果
                this.$store.dispatch('CloseMenu',true)
                //左侧点击切换效果
                this.menu[this.default_index].show = false;
                this.menu[index].show = true;
                this.default_index = index;
                //赋值操作
                this.obj = this.menu[index].data;
                this.menuTitle = this.menu[index].title;
                this.show = this.menu[index].showeyes

                //触发监听的LEFT_FIRSTC事件
                EventBus.bus.emit("LEFT_FIRSTC",item)
            },
            toggle(){
                this.$store.dispatch('CloseMenu',false)
            },
            getJson(){
                axios.get('../../../static/config/2d/menu_2d.json').then(res=>{
                    let data = res.data.menu.title;
                    this.menu = data;
                    this.menuTitle = this.menu[0].title;
                    this.obj = this.menu[0].data
                })
            }
        },
        mounted(){
            this.getJson();
           
        }
    }
</script>
