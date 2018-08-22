import {center3dControl} from "@/listener/center3dControl";
import {head3dIconListen} from "@/listener/head3dIconListen";
import {leftListen3d} from "@/listener/leftListen3d";

export const listenerInit3d = {};


listenerInit3d.router = null;
listenerInit3d.init = function(vm,router){
  
  listenerInit3d.router = router;
  center3dControl.mounted(vm);
  
  head3dIconListen.mounted(vm);
  
  leftListen3d.mounted(vm);
  
};

listenerInit3d.remove = function () {
  
  center3dControl.remove();
  
  head3dIconListen.remove();
  
  leftListen3d.remove();
};




