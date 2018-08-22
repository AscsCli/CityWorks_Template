import {center2dControl} from "@/listener/center2dControl";
import {head2dIconListen} from "@/listener/head2dIconListen";
import {leftListen2d} from "@/listener/leftListen2d";

export const listenerInit2d = {};


listenerInit2d.router = null;
listenerInit2d.init = function(vm,router){
  
  listenerInit2d.router = router;
  center2dControl.mounted(vm);
  
  head2dIconListen.mounted(vm);
  
  leftListen2d.mounted(vm);
};

listenerInit2d.remove = function () {
  center2dControl.remove();
  
  head2dIconListen.remove();
  
  leftListen2d.remove();

};




