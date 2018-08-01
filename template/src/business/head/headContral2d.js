import { EventBus } from "../../eventBus/eventBus.js"

export const bHeadCtrl2d ={};

bHeadCtrl2d.init = function(){
  EventBus.bus.addListener(EventBus.HEAD_ICON_2D, (value)=> {
    if(value.type === "route"){
      this.$router.push(value.path)
    }
  });
};
