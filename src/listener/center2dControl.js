import {EventBus} from '../eventBus/eventBus';


export const center2dControl = {
  handler:null,
  mounted(vm) {
    this.handler = controlHandle.bind(vm);
    EventBus.bus.addListener("CENTER_TAB_2D", this.handler)
  },
  remove() {
    EventBus.bus.removeListener("CENTER_TAB_2D", this.handler)
  }
};


function controlHandle(item) {

}