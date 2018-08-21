import {EventBus} from '../eventBus/eventBus';

export const center3dControl = {
  handler:null,
  mounted(vm) {
    this.handler = control3dHandle.bind(vm);
    EventBus.bus.addListener("CENTER_TAB_3D", this.handler);
  },
  remove() {
    EventBus.bus.removeListener("CENTER_TAB_3D", this.handler)
  }
};


function control3dHandle(item) {

}
