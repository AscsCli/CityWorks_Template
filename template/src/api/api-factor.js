import axios from "axios";

//占位符解析赋值函数
function format(target, data = {}) {
  if (!data || !typeof data === "object" || data instanceof Array) return target;
  let paramKeys = Object.keys(data);
  paramKeys.forEach(key => {
    if (!target.includes(key)) return;
    target = target.replace(new RegExp("{" + key + "}", "g"), data[key]);
  });
  return target;
};

export const ApiFactor = function (baseUrl, apiConfs) {
  let axiosInstance = axios.create({
    baseURL: baseUrl
  });
  let keys = Object.keys(apiConfs);
  let apis = {};
  keys.forEach(key => {
    let apiConf = apiConfs[key];
    apis[key] = function (param, data, conf = {}) {
      let isGetMethod = apiConf.method === "get";
      //request信息
      let requestConf = {
        method: apiConf.method,
        url: format(apiConf.path, param),
        params: isGetMethod ? data : null,
        data: !isGetMethod ? data : null,
        ...conf,
      };
      //补充api配置项request信息
      let apiConfRequset = apiConf.request;
      if (apiConfRequset) {
        requestConf.headers = requestConf.headers
          ? {...requestConf.headers, ...apiConfRequset.headers}
          : apiConfRequset.headers;
      }
      //执行request
      return axiosInstance(requestConf);
    }
  });
  return apis;
};

