/****
 * 该模块用于批量注册路由
 * */

import axios from "axios"

export const routeRegister = {}


/**
 * 初始化加载器
 * @param baseUrl
 * @returns {Promise<*>}
 */
routeRegister.init = async function (baseUrl) {
  let info = await loadJson(baseUrl);
  let routeArr = await getConfig(info.data);
  return await setRoute(routeArr)
};


/**
 * 加载json数据
 * @param url
 * @returns {Promise<any>}
 */
function loadJson(url) {
  return new Promise((resolve, reject) => {
    axios.get(url).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    })
  });
}

/**
 * 获取vue组件
 * @param newArr
 * @param childRoutes
 * @param url
 * @returns {*}
 */
function getComponent(newArr, childRoutes, url) {
  for (let i = 0; i < newArr.length; i++) {
    let defaultComponent = childRoutes[i].default;
    if (url === newArr[i])
      return defaultComponent;
  }
}

/**
 * 解析配置项
 * @param config
 * @returns {Promise<Array>}
 */
async function getConfig(config) {
  let routeArr = [];
  
  let map = new Map();
  let configArray = config.data;
  for (let item of configArray) {
    let jsonData = await loadJson(item.url);
    console.log("item",item);
    for (let item of  jsonData.data.data) {
      if (item.type === "route") {
        if (!map.has(item.url)) {
          routeArr.push(item);
          map.set(item.url, item);
        }
      }
    }
  }
  console.log("finished!",routeArr);
  return routeArr;
}

/**
 * 返回路由数组
 * @param routeArr
 * @returns {Promise<Array>}
 */
async function setRoute(routeArr) {
  //将所有的vue文件，一次性引入
  let comps = require.context('../../src', true, /\.vue$/);
  let childRoutes = comps.keys().map(key => comps(key));
  let newArr = comps.keys();
  let routePath = [];
  
  for (let item of routeArr) {
    if (item.url === undefined) {
      continue;
    }
    
    let arr = item.url.split("/");
    let file = arr.slice(-1);
    let fileName = file[0].replace(/\..+$/g, "");
    routePath.push({
      path: fileName,
      component: getComponent(newArr, childRoutes, item.url)
    })
  }
  console.log("routePath",routePath);
  return routePath;
  
}

