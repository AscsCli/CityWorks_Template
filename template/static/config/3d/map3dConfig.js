var map3dConfig = {
  multiTouch:false, //是否支持多点触控
  mapBaseConfig: {    //通用地图配置
    maxVisibleDistance: 3000,
    minVisibleDistance: 15,
    minVisiblePixels: 20,
    type: "citymaker",
  },
  skyboxnode: {    //天空盒配置
    path: "/static/images/setSkyNode/",
    backImage: "04_BK.jpg",
    bottomImage: "04_DN.jpg",
    frontImage: "04_FR.jpg",
    leftImage: "04_LF.jpg",
    rightImage: "04_RT.jpg",
    topImage: "04_UP.jpg",
    darkImage: "04_DN_01.jpg",
  },
  license: {
    protocal: "",
    host: "",
    port: ":80",
    licenseHost: "",
    path: "F:\\key\\2954817621329660231538164916642_131623743702686993.lic",
  },
  initPosition:{   //初始位置
    layerHandle:"buildingA05JZ019"   //根据图层名称设置
  },
  fullScreenButton:{  //全屏退出按钮配置
    isVisible: true,
    id: "退出全屏",
    rect: [0, 10, 0, 10, 0, 42, 0, 42],
    name: '退出全屏',
    normalImage: "E:\\3d_pack_3\\example\\static\\images\\quitFullScreen.png",
    hoverImage: "E:\\3d_pack_3\\example\\static\\images\\quitFullScreen.png",
    pushedImage:"E:\\3d_pack_3\\example\\static\\images\\quitFullScreen.png",
    toolTipText: '退出全屏'
    
  }
};

