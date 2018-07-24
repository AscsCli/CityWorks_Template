var PROXY = {
  baseUrl:"",
  apiList:{
    getMapConfig:{
      isMock: false,
      description: "获取重点建筑列表",
      path: "./static/config/projectConfig.json",
      method: "get",
      properties: [],
    },
    getToolBar2d:{
      isMock: false,
      description: "获取head的2D icon列表",
      path: "./static/config/2d/toolBar2d.json",
      method: "get",
      properties: [],
    },
    getToolBar3d:{
      isMock: false,
      description: "获取head的3D icon列表",
      path: "./static/config/3d/toolBar3d.json",
      method: "get",
      properties: [],
    },
    getCenterTab:{
      isMock: false,
      description: "获取Center的Tab列表",
      path: "./static/config/centerTab.json",
      method: "get",
      properties: [],
    },
    buildingList:{
      isMock: false,
      description: "获取重点建筑列表",
      path: "/static/config/3d/map3dLayers.json",
      method: "get",
      properties: [],
    },
    getBuildingList:{
      isMock: true,
      description: "获取重点建筑列表",
      path: "/buildingList",
      method: "get",
      properties: [],
    }
  }
};