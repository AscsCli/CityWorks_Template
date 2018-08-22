import {EventBus} from '../eventBus/eventBus';
import {eventBus} from "@cityworks/gismap3";
import {cw5} from '@cityworks/cw3d-cm/index';
import {bHeadCtrl3d} from "../business/head/bHeadCtrl3d";

export const head3dIconListen = {
  handler:null,
  mounted(vm) {
    let start = false;
    this.handler = head3dHandle.bind(vm);
    EventBus.bus.addListener("HEAD_ICON_3D", this.handler);
    eventBus.bus.addListener(eventBus.LENGTH, function (result) {
      alert(`${result.lengths[0].toFixed(2)}m`)
    })
  },
  remove(){
    EventBus.bus.removeListener("HEAD_ICON_3D", this.handler);
  }
};


function head3dHandle(item) {
  bHeadCtrl3d.init.apply(this,arguments);
  switch (item.title) {
    case '选中':
      let params = {
        maskType: "gviSelectFeatureLayer",
        handle: "buildingbuilding"
      };
      cw5.clickModelManagerCtrl.click(params);
      break;
    case '手型':
      cw5.clickModelManagerCtrl.mouseHand();
      break;
    case '初始化':
      cw5.init();
      // cw5.loadMap(map3dLayers);
      break;
    case '测量':
      this.$router.push('/home/measure');
      break;
    case '清除':
      cw5.innerUtils.clearAll();
      break;
    case '摄像头':
      let p1 = cw5.geometryCreator.createPoint(150089, 37917, 68);
      let videoPath = "C:\\Program Files (x86)\\CityMaker 7\\CityMaker SDK\\Samples\\Media\\video\\ambulance.AVI";
      // let videoPath = "C:\\Users\\Administrator\\Desktop\\ambulance.AVI";
      start = !start;
      if (start) {
        cw5.videoUtils.createVideo(videoPath, p1);
      } else {
        cw5.videoUtils.stopVideo();
      }
      break;
    case '飞行轨迹':
      cw5.cameraTourUtils.flyByLine();
      break;
    case '全屏':
      cw5.innerUtils.switchFullScreen();
      break;
    case '转换成2D':

      break;
  }
  
}