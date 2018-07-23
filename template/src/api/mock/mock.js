import Mock from "mockjs";
import ruleList from "./mockData/ruleList";
import tableList from "./mockData/tableList";
import layerList from "./mockData/layerList";
import buildingList from "./mockData/buildingList";
import tableData from "./mockData/tableData";
import validateResult from "./mockData/validateResult";

const apis = PROXY.apiList;
const baseUrl = PROXY.baseUrl;

function url2pathParam(docUrl, reqUrl) {
  let docUrlArr = docUrl.split("/");
  let reqUrlArr = reqUrl.split("/");
  let pathParam = {};
  docUrlArr.forEach((item, index) => {
    let val = reqUrlArr[index];
    if (item !== val) {
      let key = item.replace(/[{,}]/g, "");
      pathParam[key] = val;
    }
  });
  return pathParam;
}

function generateUrlRe(url) {
  let re = url.replace(/{.+}/, ".+");
  return new RegExp(re)
}

function mockListen(api, callback) {
  if (!api.isMock) return;
  let url = baseUrl + api.path;
  let method = api.method;
  let urlRe = generateUrlRe(url);
  Mock.mock(urlRe, method, function (option) {
    return callback(option);
  });
}

Mock.setup({
  timeout: '200-600'
});
mockListen(apis.getBuildingList, function (option) {
  let data = buildingList.data;
  return {content: data, code: 200};
});


/*mockListen(apis.getRuleList, function (option) {
  let docUrl = baseUrl + apis.getRuleList.path;
  let reqUrl = option.url;
  let pathPram = url2pathParam(docUrl, reqUrl);
  let id = pathPram["tableId"];
  if (!id) return {content: "", code: 404};
  let data = ruleList[id].data;
  return {content: data, code: 200};
});

mockListen(apis.sqlExcute, function (option) {
  let sql = option.body;
  let tableDataRe = /^SELECT.\*.FROM/;
  let isTableDataRequest = tableDataRe.test(sql);
  let data = isTableDataRequest ? tableData.data : validateResult.data;
  return {content: data, code: 200};
});

mockListen(apisOrcl.sqlExcuteOrcl, function (option) {
  let res = [
    {
      COLUMN_NAME: "SOCIAL_ID", DATA_DEFAULT: null, DATA_LENGTH: 22, DATA_TYPE: "NUMBER",
      NUM_DISTINCT: 27149378, TABLE_NAME: "DWI_MDM_PPU_SOCIAL_INSU",
    }
  ];
  return res;
});*/
