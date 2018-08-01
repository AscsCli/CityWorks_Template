import {EventBus} from '../../eventBus/eventBus';
import {eventBus} from "@cityworks/gismap3";
import {cw5} from '@cityworks/cw3d-cm/index';

export const head3DIconListen = {
  
  mounted() {
    let start = false;
    
    EventBus.bus.addListener("HEAD_ICON_3D", (item) => {
      
      switch (item.title) {
        case '选中':
          let params = {
            maskType: "gviSelectFeatureLayer",
            handle: "buildingbuilding"
          }
          cw5.clickModelManagerCtrl.click(params);
          break;
        case '手型':
          cw5.clickModelManagerCtrl.mouseHand();
          break;
        case '初始化':
          cw5.init();
          cw5.loadMap(map3dLayers);
          break;
        case '测量':
          cw5.measure.measureMent('line');
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
          console.log(this.$parent.isShow)
          this.$parent.isShow = true;
          break;
      }
    })
    
    
    eventBus.bus.addListener(eventBus.LENGTH, function (result) {
      alert(`${result.lengths[0].toFixed(2)}m`)
    })
    
  },
}
