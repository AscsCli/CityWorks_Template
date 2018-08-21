var API = {
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
    getMenu2d:{
      isMock: false,
      description: "获取head的2D menu列表",
      path: "./static/config/2d/menu_2d.json",
      method: "get",
      properties: [],
    },
    getMenu3d:{
      isMock: false,
      description: "获取head的3D menu列表",
      path: "./static/config/3d/menu_3d.json",
      method: "get",
      properties: [],
    },
    getCenterTab2d:{
      isMock: false,
      description: "获取Center的Tab2d列表",
      path: "./static/config/2d/centerTab2d.json",
      method: "get",
      properties: [],
    },
    getCenterTab3d:{
      isMock: false,
      description: "获取Center的Tab3d列表",
      path: "./static/config/3d/centerTab3d.json",
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