var LAYERS_2D = {
  "LAYERS": {
    "LAYER": [{
      "SERVICES_ADDR": "http://61.144.226.44:6080/arcgis/rest/services/msmap/BOOKS/MapServer/0",
      "LAYERID": "0",
      "DISPLAYLAYERNAME": "行政区",
      "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/BOOKS/MapServer",
      "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
      "MOUSEMOVE_FIELD": {
        "FIELD": [{"FIELD_CNAME": "OBJECTID", "FIELD_ENAME": "OBJECTID"}, {
          "FIELD_CNAME": "NAME",
          "FIELD_ENAME": "NAME"
        }, {"FIELD_CNAME": "AREA", "FIELD_ENAME": "SDE.SZ_ADMIN_ZONE.AREA"}, {
          "FIELD_CNAME": "LEN",
          "FIELD_ENAME": "SDE.SZ_ADMIN_ZONE.LEN"
        }, {"FIELD_CNAME": "SHAPE.AREA", "FIELD_ENAME": "SHAPE.AREA"}, {
          "FIELD_CNAME": "SHAPE.LEN",
          "FIELD_ENAME": "SHAPE.LEN"
        }]
      },
      "SELDEFINE": {
        "PROPERTY": [{
          "PROPER_DESCRIPTION": "权限值",
          "PROPER_KEY": "priority",
          "PROPER_VALUE": "5"
        }, {
          "PROPER_DESCRIPTION": "点击查询",
          "PROPER_KEY": "clickFlag",
          "PROPER_VALUE": "1"
        }, {"PROPER_DESCRIPTION": "移动查询", "PROPER_KEY": "queryFlag", "PROPER_VALUE": "0"}, {
          "PROPER_DESCRIPTION": "透明度",
          "PROPER_KEY": "alpha",
          "PROPER_VALUE": "0.5"
        }]
      }
    }, {
      "SERVICES_ADDR": "http://61.144.226.44:6080/arcgis/rest/services/msmap/BOOKS/MapServer/1",
      "LAYERID": "1",
      "DISPLAYLAYERNAME": "深圳市规划选址意见书",
      "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/BOOKS/MapServer",
      "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
      "MOUSEMOVE_FIELD": {
        "FIELD": [{
          "FIELD_CNAME": "OBJECTID",
          "FIELD_ENAME": "OBJECTID"
        }, {"FIELD_CNAME": "LICENSE_NO", "FIELD_ENAME": "LICENSE_NO"}, {
          "FIELD_CNAME": "PROJ_NAME",
          "FIELD_ENAME": "PROJ_NAME"
        }, {"FIELD_CNAME": "SHAPE.AREA", "FIELD_ENAME": "SHAPE.AREA"}, {
          "FIELD_CNAME": "SHAPE.LEN",
          "FIELD_ENAME": "SHAPE.LEN"
        }]
      },
      "SELDEFINE": {
        "PROPERTY": [{
          "PROPER_DESCRIPTION": "权限值",
          "PROPER_KEY": "priority",
          "PROPER_VALUE": "5"
        }, {
          "PROPER_DESCRIPTION": "点击查询",
          "PROPER_KEY": "clickFlag",
          "PROPER_VALUE": "1"
        }, {"PROPER_DESCRIPTION": "移动查询", "PROPER_KEY": "queryFlag", "PROPER_VALUE": "0"}, {
          "PROPER_DESCRIPTION": "透明度",
          "PROPER_KEY": "alpha",
          "PROPER_VALUE": "0.5"
        }]
      }
    }, {
      "SERVICES_ADDR": "http://61.144.226.44:6080/arcgis/rest/services/msmap/BOOKS/MapServer/2",
      "LAYERID": "2",
      "DISPLAYLAYERNAME": "建设工程规划许可证",
      "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/BOOKS/MapServer",
      "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
      "MOUSEMOVE_FIELD": {
        "FIELD": [{
          "FIELD_CNAME": "OBJECTID",
          "FIELD_ENAME": "OBJECTID"
        }, {"FIELD_CNAME": "LICENSE_NO", "FIELD_ENAME": "LICENSE_NO"}, {
          "FIELD_CNAME": "PROJ_NAME",
          "FIELD_ENAME": "PROJ_NAME"
        }, {"FIELD_CNAME": "SHAPE.AREA", "FIELD_ENAME": "SHAPE.AREA"}, {
          "FIELD_CNAME": "SHAPE.LEN",
          "FIELD_ENAME": "SHAPE.LEN"
        }]
      },
      "SELDEFINE": {
        "PROPERTY": [{
          "PROPER_DESCRIPTION": "权限值",
          "PROPER_KEY": "priority",
          "PROPER_VALUE": "5"
        }, {
          "PROPER_DESCRIPTION": "点击查询",
          "PROPER_KEY": "clickFlag",
          "PROPER_VALUE": "1"
        }, {"PROPER_DESCRIPTION": "移动查询", "PROPER_KEY": "queryFlag", "PROPER_VALUE": "1"}, {
          "PROPER_DESCRIPTION": "透明度",
          "PROPER_KEY": "alpha",
          "PROPER_VALUE": "0.5"
        }]
      }
    }, {
      "SERVICES_ADDR": "http://61.144.226.44:6080/arcgis/rest/services/msmap/BOOKS/MapServer/3",
      "LAYERID": "3",
      "DISPLAYLAYERNAME": "建设用地规划许可证",
      "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/BOOKS/MapServer",
      "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
      "MOUSEMOVE_FIELD": {
        "FIELD": [{
          "FIELD_CNAME": "OBJECTID",
          "FIELD_ENAME": "OBJECTID"
        }, {"FIELD_CNAME": "LICENSE_NO", "FIELD_ENAME": "LICENSE_NO"}, {
          "FIELD_CNAME": "PROJ_NAME",
          "FIELD_ENAME": "PROJ_NAME"
        }, {"FIELD_CNAME": "SHAPE.AREA", "FIELD_ENAME": "SHAPE.AREA"}, {
          "FIELD_CNAME": "SHAPE.LEN",
          "FIELD_ENAME": "SHAPE.LEN"
        }]
      },
      "SELDEFINE": {
        "PROPERTY": [{
          "PROPER_DESCRIPTION": "权限值",
          "PROPER_KEY": "priority",
          "PROPER_VALUE": "5"
        }, {
          "PROPER_DESCRIPTION": "点击查询",
          "PROPER_KEY": "clickFlag",
          "PROPER_VALUE": "1"
        }, {"PROPER_DESCRIPTION": "移动查询", "PROPER_KEY": "queryFlag", "PROPER_VALUE": "0"}, {
          "PROPER_DESCRIPTION": "透明度",
          "PROPER_KEY": "alpha",
          "PROPER_VALUE": "0.5"
        }]
      }
    }, {
      "SERVICES_ADDR": "http://61.144.226.44:6080/arcgis/rest/services/msmap/BOOKS/MapServer/4",
      "LAYERID": "4",
      "DISPLAYLAYERNAME": "建设工程规划验收合格证",
      "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/BOOKS/MapServer",
      "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
      "MOUSEMOVE_FIELD": {
        "FIELD": [{
          "FIELD_CNAME": "OBJECTID",
          "FIELD_ENAME": "OBJECTID"
        }, {"FIELD_CNAME": "LICENSE_NO", "FIELD_ENAME": "LICENSE_NO"}, {
          "FIELD_CNAME": "PROJ_NAME",
          "FIELD_ENAME": "PROJ_NAME"
        }, {"FIELD_CNAME": "SHAPE.AREA", "FIELD_ENAME": "SHAPE.AREA"}, {
          "FIELD_CNAME": "SHAPE.LEN",
          "FIELD_ENAME": "SHAPE.LEN"
        }]
      },
      "SELDEFINE": {
        "PROPERTY": [{
          "PROPER_DESCRIPTION": "权限值",
          "PROPER_KEY": "priority",
          "PROPER_VALUE": "5"
        }, {
          "PROPER_DESCRIPTION": "点击查询",
          "PROPER_KEY": "clickFlag",
          "PROPER_VALUE": "1"
        }, {"PROPER_DESCRIPTION": "移动查询", "PROPER_KEY": "queryFlag", "PROPER_VALUE": "0"}, {
          "PROPER_DESCRIPTION": "透明度",
          "PROPER_KEY": "alpha",
          "PROPER_VALUE": "0.5"
        }]
      }
    },

      {
        "SERVICES_ADDR": "",
        "LAYERID": "",
        "DISPLAYLAYERNAME": "2015年遥感影像",
        "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/image/wpjc_image_201506_01/MapServer",
        "LAYER_TYPE": "ArcGISTiledMapServiceLayer",
        "MOUSEMOVE_FIELD": {"FIELD": []},
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "2"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "1"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      },
      {
        "SERVICES_ADDR": "",
        "LAYERID": "",
        "DISPLAYLAYERNAME": "2014年遥感影像",
        "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/image/WVQB_image_201406_01/MapServer",
        "LAYER_TYPE": "ArcGISTiledMapServiceLayer",
        "MOUSEMOVE_FIELD": {"FIELD": []},
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "2"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "1"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      },
      {
        "SERVICES_ADDR": "",
        "LAYERID": "",
        "DISPLAYLAYERNAME": "2011年遥感影像",
        "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/image/AVI_image_201111_01/MapServer",
        "LAYER_TYPE": "ArcGISTiledMapServiceLayer",
        "MOUSEMOVE_FIELD": {"FIELD": []},
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "2"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "1"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      },
      {
        "SERVICES_ADDR": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer/0",
        "LAYERID": "0",
        "DISPLAYLAYERNAME": "泵站",
        "MAPSERVICES": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "objectid", "FIELD_ENAME": "OBJECTID"}, {
            "FIELD_CNAME": "ID",
            "FIELD_ENAME": "id"
          }, {"FIELD_CNAME": "NAME", "FIELD_ENAME": "name"}, {
            "FIELD_CNAME": "street_id",
            "FIELD_ENAME": "street_id"
          }, {"FIELD_CNAME": "address", "FIELD_ENAME": "address"}, {
            "FIELD_CNAME": "built_time",
            "FIELD_ENAME": "built_time"
          }, {"FIELD_CNAME": "pump_count", "FIELD_ENAME": "pump_count"}, {
            "FIELD_CNAME": "location_x",
            "FIELD_ENAME": "location_x"
          }, {"FIELD_CNAME": "location_y", "FIELD_ENAME": "location_y"}, {
            "FIELD_CNAME": "management",
            "FIELD_ENAME": "management"
          }, {"FIELD_CNAME": "single_dis", "FIELD_ENAME": "single_dis"}, {
            "FIELD_CNAME": "station_ty",
            "FIELD_ENAME": "station_ty"
          }, {"FIELD_CNAME": "single_pow", "FIELD_ENAME": "single_pow"}, {
            "FIELD_CNAME": "power_supp",
            "FIELD_ENAME": "power_supp"
          }, {"FIELD_CNAME": "curing_hou", "FIELD_ENAME": "curing_hou"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "1"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer/1",
        "LAYERID": "1",
        "DISPLAYLAYERNAME": "排污口",
        "MAPSERVICES": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "FID", "FIELD_ENAME": "OBJECTID"}, {
            "FIELD_CNAME": "ID",
            "FIELD_ENAME": "id"
          }, {"FIELD_CNAME": "name", "FIELD_ENAME": "name"}, {
            "FIELD_CNAME": "street_id",
            "FIELD_ENAME": "street_id"
          }, {"FIELD_CNAME": "river_id", "FIELD_ENAME": "river_id"}, {
            "FIELD_CNAME": "type",
            "FIELD_ENAME": "type"
          }, {"FIELD_CNAME": "riverbank", "FIELD_ENAME": "riverbank"}, {
            "FIELD_CNAME": "location_x",
            "FIELD_ENAME": "location_x"
          }, {"FIELD_CNAME": "location_y", "FIELD_ENAME": "location_y"}, {
            "FIELD_CNAME": "closure",
            "FIELD_ENAME": "closure"
          }, {"FIELD_CNAME": "section_sh", "FIELD_ENAME": "section_sh"}, {
            "FIELD_CNAME": "section_pa",
            "FIELD_ENAME": "section_pa"
          }]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer/2",
        "LAYERID": "2",
        "DISPLAYLAYERNAME": "水闸",
        "MAPSERVICES": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "FID", "FIELD_ENAME": "OBJECTID"}, {
            "FIELD_CNAME": "id",
            "FIELD_ENAME": "id"
          }, {"FIELD_CNAME": "name", "FIELD_ENAME": "name"}, {
            "FIELD_CNAME": "street_id",
            "FIELD_ENAME": "street_id"
          }, {"FIELD_CNAME": "address", "FIELD_ENAME": "address"}, {
            "FIELD_CNAME": "built_time",
            "FIELD_ENAME": "built_time"
          }, {"FIELD_CNAME": "hole_count", "FIELD_ENAME": "hole_count"}, {
            "FIELD_CNAME": "hole_width",
            "FIELD_ENAME": "hole_width"
          }, {"FIELD_CNAME": "location_x", "FIELD_ENAME": "location_x"}, {
            "FIELD_CNAME": "location_y",
            "FIELD_ENAME": "location_y"
          }, {"FIELD_CNAME": "management", "FIELD_ENAME": "management"}, {
            "FIELD_CNAME": "design_flo",
            "FIELD_ENAME": "design_flo"
          }, {"FIELD_CNAME": "hoist_devi", "FIELD_ENAME": "hoist_devi"}, {
            "FIELD_CNAME": "power_supp",
            "FIELD_ENAME": "power_supp"
          }, {"FIELD_CNAME": "curing_hou", "FIELD_ENAME": "curing_hou"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer/3",
        "LAYERID": "3",
        "DISPLAYLAYERNAME": "监测站点",
        "MAPSERVICES": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "OBJECTID", "FIELD_ENAME": "OBJECTID"}, {
            "FIELD_CNAME": "河流",
            "FIELD_ENAME": "river"
          }, {"FIELD_CNAME": "站点名称", "FIELD_ENAME": "name"}, {"FIELD_CNAME": "id", "FIELD_ENAME": "id"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer/4",
        "LAYERID": "4",
        "DISPLAYLAYERNAME": "河流",
        "MAPSERVICES": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "objectid", "FIELD_ENAME": "OBJECTID"}, {
            "FIELD_CNAME": "id",
            "FIELD_ENAME": "id"
          }, {"FIELD_CNAME": "NAME", "FIELD_ENAME": "name"}, {
            "FIELD_CNAME": "shape_Length",
            "FIELD_ENAME": "Shape_Length"
          }, {"FIELD_CNAME": "shape_Area", "FIELD_ENAME": "Shape_Area"}, {
            "FIELD_CNAME": "shape_Leng",
            "FIELD_ENAME": "shape_Leng"
          }]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer/5",
        "LAYERID": "5",
        "DISPLAYLAYERNAME": "涉水企业",
        "MAPSERVICES": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{
            "FIELD_CNAME": "OBJECTID_12",
            "FIELD_ENAME": "OBJECTID_12"
          }, {"FIELD_CNAME": "OBJECTID_1", "FIELD_ENAME": "OBJECTID_1"}, {
            "FIELD_CNAME": "OBJECTID",
            "FIELD_ENAME": "OBJECTID"
          }, {"FIELD_CNAME": "序号", "FIELD_ENAME": "序号"}, {
            "FIELD_CNAME": "污染源名称",
            "FIELD_ENAME": "污染源名称"
          }, {"FIELD_CNAME": "街道", "FIELD_ENAME": "街道"}, {
            "FIELD_CNAME": "所属社区",
            "FIELD_ENAME": "所属社区"
          }, {"FIELD_CNAME": "污染源地址", "FIELD_ENAME": "污染源地址"}, {
            "FIELD_CNAME": "统一社会信",
            "FIELD_ENAME": "统一社会信"
          }, {"FIELD_CNAME": "污染源编号", "FIELD_ENAME": "污染源编号"}, {
            "FIELD_CNAME": "监管部门",
            "FIELD_ENAME": "监管部门"
          }, {"FIELD_CNAME": "开业时间", "FIELD_ENAME": "开业时间"}, {
            "FIELD_CNAME": "诚信分级初",
            "FIELD_ENAME": "诚信分级初"
          }, {"FIELD_CNAME": "审批水量", "FIELD_ENAME": "审批水量"}, {
            "FIELD_CNAME": "行业类别",
            "FIELD_ENAME": "行业类别"
          }, {"FIELD_CNAME": "排污种类", "FIELD_ENAME": "排污种类"}, {
            "FIELD_CNAME": "F10条11段",
            "FIELD_ENAME": "F10条11段"
          }, {"FIELD_CNAME": "污染物种类", "FIELD_ENAME": "污染物种类"}, {
            "FIELD_CNAME": "环保负责人",
            "FIELD_ENAME": "环保负责人"
          }, {"FIELD_CNAME": "联系电话", "FIELD_ENAME": "联系电话"}, {
            "FIELD_CNAME": "环保负责_1",
            "FIELD_ENAME": "环保负责_1"
          }, {"FIELD_CNAME": "联系电话1", "FIELD_ENAME": "联系电话1"}, {
            "FIELD_CNAME": "经度",
            "FIELD_ENAME": "经度"
          }, {"FIELD_CNAME": "纬度", "FIELD_ENAME": "纬度"}, {
            "FIELD_CNAME": "经度新",
            "FIELD_ENAME": "经度新"
          }, {"FIELD_CNAME": "纬度新", "FIELD_ENAME": "纬度新"}, {
            "FIELD_CNAME": "腾讯地图上",
            "FIELD_ENAME": "腾讯地图上"
          }, {"FIELD_CNAME": "F10条11段黑", "FIELD_ENAME": "F10条11段黑"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer/6",
        "LAYERID": "6",
        "DISPLAYLAYERNAME": "水库湖泊",
        "MAPSERVICES": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{
            "FIELD_CNAME": "objectid_1",
            "FIELD_ENAME": "OBJECTID_1"
          }, {"FIELD_CNAME": "objectid", "FIELD_ENAME": "objectid"}, {
            "FIELD_CNAME": "name",
            "FIELD_ENAME": "name"
          }, {"FIELD_CNAME": "class", "FIELD_ENAME": "class"}, {
            "FIELD_CNAME": "length",
            "FIELD_ENAME": "length"
          }, {"FIELD_CNAME": "update_", "FIELD_ENAME": "update_"}, {
            "FIELD_CNAME": "memo_",
            "FIELD_ENAME": "memo_"
          }, {"FIELD_CNAME": "shape_leng", "FIELD_ENAME": "shape_leng"}, {
            "FIELD_CNAME": "备注",
            "FIELD_ENAME": "备注"
          }, {"FIELD_CNAME": "更新人", "FIELD_ENAME": "更新人"}, {
            "FIELD_CNAME": "shape_le_1",
            "FIELD_ENAME": "shape_le_1"
          }, {"FIELD_CNAME": "shape_Length", "FIELD_ENAME": "Shape_Length"}, {
            "FIELD_CNAME": "shape_Area",
            "FIELD_ENAME": "Shape_Area"
          }, {"FIELD_CNAME": "数据来", "FIELD_ENAME": "数据来"}, {
            "FIELD_CNAME": "唯一标",
            "FIELD_ENAME": "唯一标"
          }, {"FIELD_CNAME": "shape_Le_2", "FIELD_ENAME": "shape_Le_2"}, {
            "FIELD_CNAME": "Shape_Le_3",
            "FIELD_ENAME": "Shape_Le_3"
          }, {"FIELD_CNAME": "FID_担水河_1", "FIELD_ENAME": "FID_担水河_1"}, {"FIELD_CNAME": "Id", "FIELD_ENAME": "Id"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer/7",
        "LAYERID": "7",
        "DISPLAYLAYERNAME": "项目分布图",
        "MAPSERVICES": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "objectid", "FIELD_ENAME": "OBJECTID"}, {
            "FIELD_CNAME": "工程名称",
            "FIELD_ENAME": "工程"
          }, {"FIELD_CNAME": "标段", "FIELD_ENAME": "标段"}, {
            "FIELD_CNAME": "位置",
            "FIELD_ENAME": "位置"
          }, {"FIELD_CNAME": "id", "FIELD_ENAME": "id"}, {
            "FIELD_CNAME": "工作任务",
            "FIELD_ENAME": "任务"
          }, {"FIELD_CNAME": "shape_Length", "FIELD_ENAME": "Shape_Length"}, {
            "FIELD_CNAME": "shape_Area",
            "FIELD_ENAME": "Shape_Area"
          }, {"FIELD_CNAME": "shape_Leng", "FIELD_ENAME": "shape_Leng"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer/8",
        "LAYERID": "8",
        "DISPLAYLAYERNAME": "社区",
        "MAPSERVICES": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "FID", "FIELD_ENAME": "OBJECTID"}, {
            "FIELD_CNAME": "sqname",
            "FIELD_ENAME": "sqname"
          }, {"FIELD_CNAME": "sqcode", "FIELD_ENAME": "sqcode"}, {
            "FIELD_CNAME": "jdname",
            "FIELD_ENAME": "jdname"
          }, {"FIELD_CNAME": "jdcode", "FIELD_ENAME": "jdcode"}, {
            "FIELD_CNAME": "shape_leng",
            "FIELD_ENAME": "shape_leng"
          }, {"FIELD_CNAME": "id", "FIELD_ENAME": "id"}, {
            "FIELD_CNAME": "shape_Length",
            "FIELD_ENAME": "Shape_Length"
          }, {"FIELD_CNAME": "shape_Area", "FIELD_ENAME": "Shape_Area"}, {
            "FIELD_CNAME": "样式标",
            "FIELD_ENAME": "样式标"
          }, {"FIELD_CNAME": "shape_Le_1", "FIELD_ENAME": "shape_Le_1"}, {
            "FIELD_CNAME": "code",
            "FIELD_ENAME": "code"
          }, {"FIELD_CNAME": "name", "FIELD_ENAME": "name"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer/9",
        "LAYERID": "9",
        "DISPLAYLAYERNAME": "街道",
        "MAPSERVICES": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "FID", "FIELD_ENAME": "OBJECTID"}, {
            "FIELD_CNAME": "name",
            "FIELD_ENAME": "name"
          }, {"FIELD_CNAME": "id", "FIELD_ENAME": "id"}, {
            "FIELD_CNAME": "code",
            "FIELD_ENAME": "code"
          }, {"FIELD_CNAME": "shape_Length", "FIELD_ENAME": "Shape_Length"}, {
            "FIELD_CNAME": "shape_Area",
            "FIELD_ENAME": "Shape_Area"
          }, {"FIELD_CNAME": "样式标", "FIELD_ENAME": "样式标"}, {"FIELD_CNAME": "shape_Leng", "FIELD_ENAME": "shape_Leng"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer/10",
        "LAYERID": "10",
        "DISPLAYLAYERNAME": "行政区划",
        "MAPSERVICES": "http://121.201.65.133:2001/arcgis/rest/services/baoan_data5/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "FID", "FIELD_ENAME": "OBJECTID_1"}, {
            "FIELD_CNAME": "objectid",
            "FIELD_ENAME": "objectid"
          }, {"FIELD_CNAME": "symbol", "FIELD_ENAME": "symbol"}, {
            "FIELD_CNAME": "name",
            "FIELD_ENAME": "name"
          }, {"FIELD_CNAME": "更新人", "FIELD_ENAME": "更新人"}, {
            "FIELD_CNAME": "shape_Length",
            "FIELD_ENAME": "Shape_Length"
          }, {"FIELD_CNAME": "shape_Area", "FIELD_ENAME": "Shape_Area"}, {
            "FIELD_CNAME": "water_wate",
            "FIELD_ENAME": "water_wate"
          }, {"FIELD_CNAME": "water_wa_1", "FIELD_ENAME": "water_wa_1"}, {
            "FIELD_CNAME": "唯一标",
            "FIELD_ENAME": "唯一标"
          }, {"FIELD_CNAME": "shape_Leng", "FIELD_ENAME": "shape_Leng"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      },
      {
        "SERVICES_ADDR": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer/0",
        "LAYERID": "0",
        "DISPLAYLAYERNAME": "综合医院",
        "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "FID", "FIELD_ENAME": "FID"}, {
            "FIELD_CNAME": "要素编号",
            "FIELD_ENAME": "要素编号"
          }, {"FIELD_CNAME": "标准名称", "FIELD_ENAME": "标准名称"}, {
            "FIELD_CNAME": "简称",
            "FIELD_ENAME": "简称"
          }, {"FIELD_CNAME": "汉语拼音", "FIELD_ENAME": "汉语拼音"}, {
            "FIELD_CNAME": "地址",
            "FIELD_ENAME": "地址"
          }, {"FIELD_CNAME": "邮政编码", "FIELD_ENAME": "邮政编码"}, {
            "FIELD_CNAME": "主类代码",
            "FIELD_ENAME": "主类代码"
          }, {"FIELD_CNAME": "唯一ID", "FIELD_ENAME": "唯一ID"}, {
            "FIELD_CNAME": "敏感信息",
            "FIELD_ENAME": "敏感信息"
          }, {"FIELD_CNAME": "次类代码", "FIELD_ENAME": "次类代码"}, {
            "FIELD_CNAME": "行业标识码",
            "FIELD_ENAME": "行业标识码"
          }, {"FIELD_CNAME": "拼音首字母", "FIELD_ENAME": "拼音首字母"}, {
            "FIELD_CNAME": "外文名称",
            "FIELD_ENAME": "外文名称"
          }, {"FIELD_CNAME": "多媒体信息", "FIELD_ENAME": "多媒体信息"}, {
            "FIELD_CNAME": "现状时间",
            "FIELD_ENAME": "现状时间"
          }, {"FIELD_CNAME": "所在行政区", "FIELD_ENAME": "所在行政区"}, {
            "FIELD_CNAME": "类型",
            "FIELD_ENAME": "类型"
          }, {"FIELD_CNAME": "等级", "FIELD_ENAME": "等级"}, {
            "FIELD_CNAME": "成立时间",
            "FIELD_ENAME": "成立时间"
          }, {"FIELD_CNAME": "开设科室", "FIELD_ENAME": "开设科室"}, {
            "FIELD_CNAME": "特色专科",
            "FIELD_ENAME": "特色专科"
          }, {"FIELD_CNAME": "门诊专家", "FIELD_ENAME": "门诊专家"}, {
            "FIELD_CNAME": "医疗设备",
            "FIELD_ENAME": "医疗设备"
          }, {"FIELD_CNAME": "医生数", "FIELD_ENAME": "医生数"}, {
            "FIELD_CNAME": "护理人员数",
            "FIELD_ENAME": "护理人员数"
          }, {"FIELD_CNAME": "床位数", "FIELD_ENAME": "床位数"}, {
            "FIELD_CNAME": "法人代表",
            "FIELD_ENAME": "法人代表"
          }, {"FIELD_CNAME": "咨询电话", "FIELD_ENAME": "咨询电话"}, {
            "FIELD_CNAME": "网址",
            "FIELD_ENAME": "网址"
          }, {"FIELD_CNAME": "备注", "FIELD_ENAME": "备注"}, {
            "FIELD_CNAME": "级别",
            "FIELD_ENAME": "级别"
          }, {"FIELD_CNAME": "标注级别", "FIELD_ENAME": "标注级别"}, {
            "FIELD_CNAME": "Flag",
            "FIELD_ENAME": "Flag"
          }, {"FIELD_CNAME": "POINT_X", "FIELD_ENAME": "POINT_X"}, {
            "FIELD_CNAME": "POINT_Y",
            "FIELD_ENAME": "POINT_Y"
          }, {"FIELD_CNAME": "数据来源", "FIELD_ENAME": "数据来源"}, {"FIELD_CNAME": "唯一标识码", "FIELD_ENAME": "唯一标识码"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer/1",
        "LAYERID": "1",
        "DISPLAYLAYERNAME": "专科医院",
        "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "FID", "FIELD_ENAME": "FID"}, {
            "FIELD_CNAME": "要素编号",
            "FIELD_ENAME": "要素编号"
          }, {"FIELD_CNAME": "标准名称", "FIELD_ENAME": "标准名称"}, {
            "FIELD_CNAME": "简称",
            "FIELD_ENAME": "简称"
          }, {"FIELD_CNAME": "汉语拼音", "FIELD_ENAME": "汉语拼音"}, {
            "FIELD_CNAME": "地址",
            "FIELD_ENAME": "地址"
          }, {"FIELD_CNAME": "邮政编码", "FIELD_ENAME": "邮政编码"}, {
            "FIELD_CNAME": "主类代码",
            "FIELD_ENAME": "主类代码"
          }, {"FIELD_CNAME": "唯一ID", "FIELD_ENAME": "唯一ID"}, {
            "FIELD_CNAME": "敏感信息",
            "FIELD_ENAME": "敏感信息"
          }, {"FIELD_CNAME": "次类代码", "FIELD_ENAME": "次类代码"}, {
            "FIELD_CNAME": "行业标识码",
            "FIELD_ENAME": "行业标识码"
          }, {"FIELD_CNAME": "拼音首字母", "FIELD_ENAME": "拼音首字母"}, {
            "FIELD_CNAME": "外文名称",
            "FIELD_ENAME": "外文名称"
          }, {"FIELD_CNAME": "多媒体信息", "FIELD_ENAME": "多媒体信息"}, {
            "FIELD_CNAME": "现状时间",
            "FIELD_ENAME": "现状时间"
          }, {"FIELD_CNAME": "所在行政区", "FIELD_ENAME": "所在行政区"}, {
            "FIELD_CNAME": "类型",
            "FIELD_ENAME": "类型"
          }, {"FIELD_CNAME": "等级", "FIELD_ENAME": "等级"}, {
            "FIELD_CNAME": "成立时间",
            "FIELD_ENAME": "成立时间"
          }, {"FIELD_CNAME": "开设科室", "FIELD_ENAME": "开设科室"}, {
            "FIELD_CNAME": "特色专科",
            "FIELD_ENAME": "特色专科"
          }, {"FIELD_CNAME": "门诊专家", "FIELD_ENAME": "门诊专家"}, {
            "FIELD_CNAME": "医疗设备",
            "FIELD_ENAME": "医疗设备"
          }, {"FIELD_CNAME": "医生数", "FIELD_ENAME": "医生数"}, {
            "FIELD_CNAME": "护理人员数",
            "FIELD_ENAME": "护理人员数"
          }, {"FIELD_CNAME": "床位数", "FIELD_ENAME": "床位数"}, {
            "FIELD_CNAME": "法人代表",
            "FIELD_ENAME": "法人代表"
          }, {"FIELD_CNAME": "咨询电话", "FIELD_ENAME": "咨询电话"}, {
            "FIELD_CNAME": "网址",
            "FIELD_ENAME": "网址"
          }, {"FIELD_CNAME": "备注", "FIELD_ENAME": "备注"}, {
            "FIELD_CNAME": "标注级别",
            "FIELD_ENAME": "标注级别"
          }, {"FIELD_CNAME": "Flag", "FIELD_ENAME": "Flag"}, {
            "FIELD_CNAME": "POINT_X",
            "FIELD_ENAME": "POINT_X"
          }, {"FIELD_CNAME": "POINT_Y", "FIELD_ENAME": "POINT_Y"}, {
            "FIELD_CNAME": "数据来源",
            "FIELD_ENAME": "数据来源"
          }, {"FIELD_CNAME": "唯一标识码", "FIELD_ENAME": "唯一标识码"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer/2",
        "LAYERID": "2",
        "DISPLAYLAYERNAME": "中医院",
        "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "FID", "FIELD_ENAME": "FID"}, {
            "FIELD_CNAME": "要素编号",
            "FIELD_ENAME": "要素编号"
          }, {"FIELD_CNAME": "标准名称", "FIELD_ENAME": "标准名称"}, {
            "FIELD_CNAME": "简称",
            "FIELD_ENAME": "简称"
          }, {"FIELD_CNAME": "汉语拼音", "FIELD_ENAME": "汉语拼音"}, {
            "FIELD_CNAME": "地址",
            "FIELD_ENAME": "地址"
          }, {"FIELD_CNAME": "邮政编码", "FIELD_ENAME": "邮政编码"}, {
            "FIELD_CNAME": "主类代码",
            "FIELD_ENAME": "主类代码"
          }, {"FIELD_CNAME": "唯一ID", "FIELD_ENAME": "唯一ID"}, {
            "FIELD_CNAME": "敏感信息",
            "FIELD_ENAME": "敏感信息"
          }, {"FIELD_CNAME": "次类代码", "FIELD_ENAME": "次类代码"}, {
            "FIELD_CNAME": "行业标识码",
            "FIELD_ENAME": "行业标识码"
          }, {"FIELD_CNAME": "拼音首字母", "FIELD_ENAME": "拼音首字母"}, {
            "FIELD_CNAME": "外文名称",
            "FIELD_ENAME": "外文名称"
          }, {"FIELD_CNAME": "多媒体信息", "FIELD_ENAME": "多媒体信息"}, {
            "FIELD_CNAME": "现状时间",
            "FIELD_ENAME": "现状时间"
          }, {"FIELD_CNAME": "所在行政区", "FIELD_ENAME": "所在行政区"}, {
            "FIELD_CNAME": "类型",
            "FIELD_ENAME": "类型"
          }, {"FIELD_CNAME": "等级", "FIELD_ENAME": "等级"}, {
            "FIELD_CNAME": "成立时间",
            "FIELD_ENAME": "成立时间"
          }, {"FIELD_CNAME": "开设科室", "FIELD_ENAME": "开设科室"}, {
            "FIELD_CNAME": "特色专科",
            "FIELD_ENAME": "特色专科"
          }, {"FIELD_CNAME": "门诊专家", "FIELD_ENAME": "门诊专家"}, {
            "FIELD_CNAME": "医疗设备",
            "FIELD_ENAME": "医疗设备"
          }, {"FIELD_CNAME": "医生数", "FIELD_ENAME": "医生数"}, {
            "FIELD_CNAME": "护理人员数",
            "FIELD_ENAME": "护理人员数"
          }, {"FIELD_CNAME": "床位数", "FIELD_ENAME": "床位数"}, {
            "FIELD_CNAME": "法人代表",
            "FIELD_ENAME": "法人代表"
          }, {"FIELD_CNAME": "咨询电话", "FIELD_ENAME": "咨询电话"}, {
            "FIELD_CNAME": "网址",
            "FIELD_ENAME": "网址"
          }, {"FIELD_CNAME": "备注", "FIELD_ENAME": "备注"}, {
            "FIELD_CNAME": "标注级别",
            "FIELD_ENAME": "标注级别"
          }, {"FIELD_CNAME": "Flag", "FIELD_ENAME": "Flag"}, {
            "FIELD_CNAME": "POINT_X",
            "FIELD_ENAME": "POINT_X"
          }, {"FIELD_CNAME": "POINT_Y", "FIELD_ENAME": "POINT_Y"}, {
            "FIELD_CNAME": "数据来源",
            "FIELD_ENAME": "数据来源"
          }, {"FIELD_CNAME": "唯一标识码", "FIELD_ENAME": "唯一标识码"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer/3",
        "LAYERID": "3",
        "DISPLAYLAYERNAME": "社区卫生中心",
        "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "FID", "FIELD_ENAME": "FID"}, {
            "FIELD_CNAME": "要素编号",
            "FIELD_ENAME": "要素编号"
          }, {"FIELD_CNAME": "标准名称", "FIELD_ENAME": "标准名称"}, {
            "FIELD_CNAME": "简称",
            "FIELD_ENAME": "简称"
          }, {"FIELD_CNAME": "汉语拼音", "FIELD_ENAME": "汉语拼音"}, {
            "FIELD_CNAME": "地址",
            "FIELD_ENAME": "地址"
          }, {"FIELD_CNAME": "电话", "FIELD_ENAME": "电话"}, {
            "FIELD_CNAME": "邮政编码",
            "FIELD_ENAME": "邮政编码"
          }, {"FIELD_CNAME": "主类代码", "FIELD_ENAME": "主类代码"}, {
            "FIELD_CNAME": "唯一ID",
            "FIELD_ENAME": "唯一ID"
          }, {"FIELD_CNAME": "敏感信息", "FIELD_ENAME": "敏感信息"}, {
            "FIELD_CNAME": "次类代码",
            "FIELD_ENAME": "次类代码"
          }, {"FIELD_CNAME": "行业标识码", "FIELD_ENAME": "行业标识码"}, {
            "FIELD_CNAME": "拼音首字母",
            "FIELD_ENAME": "拼音首字母"
          }, {"FIELD_CNAME": "外文名称", "FIELD_ENAME": "外文名称"}, {
            "FIELD_CNAME": "多媒体信息",
            "FIELD_ENAME": "多媒体信息"
          }, {"FIELD_CNAME": "现状时间", "FIELD_ENAME": "现状时间"}, {
            "FIELD_CNAME": "所在行政区",
            "FIELD_ENAME": "所在行政区"
          }, {"FIELD_CNAME": "所辖居委会", "FIELD_ENAME": "所辖居委会"}, {
            "FIELD_CNAME": "成立时间",
            "FIELD_ENAME": "成立时间"
          }, {"FIELD_CNAME": "法人代表", "FIELD_ENAME": "法人代表"}, {
            "FIELD_CNAME": "网址",
            "FIELD_ENAME": "网址"
          }, {"FIELD_CNAME": "备注", "FIELD_ENAME": "备注"}, {
            "FIELD_CNAME": "标注级别",
            "FIELD_ENAME": "标注级别"
          }, {"FIELD_CNAME": "Flag", "FIELD_ENAME": "Flag"}, {
            "FIELD_CNAME": "POINT_X",
            "FIELD_ENAME": "POINT_X"
          }, {"FIELD_CNAME": "POINT_Y", "FIELD_ENAME": "POINT_Y"}, {
            "FIELD_CNAME": "数据来源",
            "FIELD_ENAME": "数据来源"
          }, {"FIELD_CNAME": "唯一标识码", "FIELD_ENAME": "唯一标识码"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer/4",
        "LAYERID": "4",
        "DISPLAYLAYERNAME": "独立门诊",
        "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "FID", "FIELD_ENAME": "FID"}, {
            "FIELD_CNAME": "要素编号",
            "FIELD_ENAME": "要素编号"
          }, {"FIELD_CNAME": "标准名称", "FIELD_ENAME": "标准名称"}, {
            "FIELD_CNAME": "简称",
            "FIELD_ENAME": "简称"
          }, {"FIELD_CNAME": "汉语拼音", "FIELD_ENAME": "汉语拼音"}, {
            "FIELD_CNAME": "地址",
            "FIELD_ENAME": "地址"
          }, {"FIELD_CNAME": "电话", "FIELD_ENAME": "电话"}, {
            "FIELD_CNAME": "邮政编码",
            "FIELD_ENAME": "邮政编码"
          }, {"FIELD_CNAME": "主类代码", "FIELD_ENAME": "主类代码"}, {
            "FIELD_CNAME": "唯一ID",
            "FIELD_ENAME": "唯一ID"
          }, {"FIELD_CNAME": "敏感信息", "FIELD_ENAME": "敏感信息"}, {
            "FIELD_CNAME": "次类代码",
            "FIELD_ENAME": "次类代码"
          }, {"FIELD_CNAME": "行业标识码", "FIELD_ENAME": "行业标识码"}, {
            "FIELD_CNAME": "拼音首字母",
            "FIELD_ENAME": "拼音首字母"
          }, {"FIELD_CNAME": "外文名称", "FIELD_ENAME": "外文名称"}, {
            "FIELD_CNAME": "多媒体信息",
            "FIELD_ENAME": "多媒体信息"
          }, {"FIELD_CNAME": "现状时间", "FIELD_ENAME": "现状时间"}, {
            "FIELD_CNAME": "所在行政区",
            "FIELD_ENAME": "所在行政区"
          }, {"FIELD_CNAME": "所辖居委会", "FIELD_ENAME": "所辖居委会"}, {
            "FIELD_CNAME": "成立时间",
            "FIELD_ENAME": "成立时间"
          }, {"FIELD_CNAME": "法人代表", "FIELD_ENAME": "法人代表"}, {
            "FIELD_CNAME": "网址",
            "FIELD_ENAME": "网址"
          }, {"FIELD_CNAME": "备注", "FIELD_ENAME": "备注"}, {
            "FIELD_CNAME": "标注级别",
            "FIELD_ENAME": "标注级别"
          }, {"FIELD_CNAME": "Flag", "FIELD_ENAME": "Flag"}, {
            "FIELD_CNAME": "POINT_X",
            "FIELD_ENAME": "POINT_X"
          }, {"FIELD_CNAME": "POINT_Y", "FIELD_ENAME": "POINT_Y"}, {
            "FIELD_CNAME": "数据来源",
            "FIELD_ENAME": "数据来源"
          }, {"FIELD_CNAME": "唯一标识码", "FIELD_ENAME": "唯一标识码"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer/5",
        "LAYERID": "5",
        "DISPLAYLAYERNAME": "美容保健",
        "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "FID", "FIELD_ENAME": "FID"}, {
            "FIELD_CNAME": "要素编号",
            "FIELD_ENAME": "要素编号"
          }, {"FIELD_CNAME": "标准名称", "FIELD_ENAME": "标准名称"}, {
            "FIELD_CNAME": "简称",
            "FIELD_ENAME": "简称"
          }, {"FIELD_CNAME": "汉语拼音", "FIELD_ENAME": "汉语拼音"}, {
            "FIELD_CNAME": "地址",
            "FIELD_ENAME": "地址"
          }, {"FIELD_CNAME": "电话", "FIELD_ENAME": "电话"}, {
            "FIELD_CNAME": "邮政编码",
            "FIELD_ENAME": "邮政编码"
          }, {"FIELD_CNAME": "主类代码", "FIELD_ENAME": "主类代码"}, {
            "FIELD_CNAME": "唯一ID",
            "FIELD_ENAME": "唯一ID"
          }, {"FIELD_CNAME": "敏感信息", "FIELD_ENAME": "敏感信息"}, {
            "FIELD_CNAME": "次类代码",
            "FIELD_ENAME": "次类代码"
          }, {"FIELD_CNAME": "行业标识码", "FIELD_ENAME": "行业标识码"}, {
            "FIELD_CNAME": "拼音首字母",
            "FIELD_ENAME": "拼音首字母"
          }, {"FIELD_CNAME": "外文名称", "FIELD_ENAME": "外文名称"}, {
            "FIELD_CNAME": "多媒体信息",
            "FIELD_ENAME": "多媒体信息"
          }, {"FIELD_CNAME": "现状时间", "FIELD_ENAME": "现状时间"}, {
            "FIELD_CNAME": "所在行政区",
            "FIELD_ENAME": "所在行政区"
          }, {"FIELD_CNAME": "等级", "FIELD_ENAME": "等级"}, {
            "FIELD_CNAME": "成立时间",
            "FIELD_ENAME": "成立时间"
          }, {"FIELD_CNAME": "美容保健", "FIELD_ENAME": "美容保健"}, {
            "FIELD_CNAME": "经营模式",
            "FIELD_ENAME": "经营模式"
          }, {"FIELD_CNAME": "营业时间", "FIELD_ENAME": "营业时间"}, {
            "FIELD_CNAME": "医生数",
            "FIELD_ENAME": "医生数"
          }, {"FIELD_CNAME": "护理人员数", "FIELD_ENAME": "护理人员数"}, {
            "FIELD_CNAME": "法人代表",
            "FIELD_ENAME": "法人代表"
          }, {"FIELD_CNAME": "网址", "FIELD_ENAME": "网址"}, {
            "FIELD_CNAME": "备注",
            "FIELD_ENAME": "备注"
          }, {"FIELD_CNAME": "标注级别", "FIELD_ENAME": "标注级别"}, {
            "FIELD_CNAME": "Flag",
            "FIELD_ENAME": "Flag"
          }, {"FIELD_CNAME": "POINT_X", "FIELD_ENAME": "POINT_X"}, {
            "FIELD_CNAME": "POINT_Y",
            "FIELD_ENAME": "POINT_Y"
          }, {"FIELD_CNAME": "数据来源", "FIELD_ENAME": "数据来源"}, {"FIELD_CNAME": "唯一标识码", "FIELD_ENAME": "唯一标识码"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer/6",
        "LAYERID": "6",
        "DISPLAYLAYERNAME": "大型药店",
        "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "FID", "FIELD_ENAME": "FID"}, {
            "FIELD_CNAME": "要素编号",
            "FIELD_ENAME": "要素编号"
          }, {"FIELD_CNAME": "标准名称", "FIELD_ENAME": "标准名称"}, {
            "FIELD_CNAME": "简称",
            "FIELD_ENAME": "简称"
          }, {"FIELD_CNAME": "汉语拼音", "FIELD_ENAME": "汉语拼音"}, {
            "FIELD_CNAME": "地址",
            "FIELD_ENAME": "地址"
          }, {"FIELD_CNAME": "电话", "FIELD_ENAME": "电话"}, {
            "FIELD_CNAME": "邮政编码",
            "FIELD_ENAME": "邮政编码"
          }, {"FIELD_CNAME": "主类代码", "FIELD_ENAME": "主类代码"}, {
            "FIELD_CNAME": "唯一ID",
            "FIELD_ENAME": "唯一ID"
          }, {"FIELD_CNAME": "敏感信息", "FIELD_ENAME": "敏感信息"}, {
            "FIELD_CNAME": "次类代码",
            "FIELD_ENAME": "次类代码"
          }, {"FIELD_CNAME": "行业标识码", "FIELD_ENAME": "行业标识码"}, {
            "FIELD_CNAME": "拼音首字母",
            "FIELD_ENAME": "拼音首字母"
          }, {"FIELD_CNAME": "外文名称", "FIELD_ENAME": "外文名称"}, {
            "FIELD_CNAME": "多媒体信息",
            "FIELD_ENAME": "多媒体信息"
          }, {"FIELD_CNAME": "现状时间", "FIELD_ENAME": "现状时间"}, {
            "FIELD_CNAME": "所在行政区",
            "FIELD_ENAME": "所在行政区"
          }, {"FIELD_CNAME": "营业时间", "FIELD_ENAME": "营业时间"}, {
            "FIELD_CNAME": "停车位",
            "FIELD_ENAME": "停车位"
          }, {"FIELD_CNAME": "注册资本", "FIELD_ENAME": "注册资本"}, {
            "FIELD_CNAME": "成立日期",
            "FIELD_ENAME": "成立日期"
          }, {"FIELD_CNAME": "主营产品", "FIELD_ENAME": "主营产品"}, {
            "FIELD_CNAME": "药店规模",
            "FIELD_ENAME": "药店规模"
          }, {"FIELD_CNAME": "法人代表", "FIELD_ENAME": "法人代表"}, {
            "FIELD_CNAME": "经营范围",
            "FIELD_ENAME": "经营范围"
          }, {"FIELD_CNAME": "网址", "FIELD_ENAME": "网址"}, {
            "FIELD_CNAME": "备注",
            "FIELD_ENAME": "备注"
          }, {"FIELD_CNAME": "标注级别", "FIELD_ENAME": "标注级别"}, {
            "FIELD_CNAME": "Flag",
            "FIELD_ENAME": "Flag"
          }, {"FIELD_CNAME": "POINT_X", "FIELD_ENAME": "POINT_X"}, {
            "FIELD_CNAME": "POINT_Y",
            "FIELD_ENAME": "POINT_Y"
          }, {"FIELD_CNAME": "数据来源", "FIELD_ENAME": "数据来源"}, {"FIELD_CNAME": "唯一标识码", "FIELD_ENAME": "唯一标识码"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer/7",
        "LAYERID": "7",
        "DISPLAYLAYERNAME": "动物医院",
        "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "FID", "FIELD_ENAME": "FID"}, {
            "FIELD_CNAME": "要素编号",
            "FIELD_ENAME": "要素编号"
          }, {"FIELD_CNAME": "标准名称", "FIELD_ENAME": "标准名称"}, {
            "FIELD_CNAME": "简称",
            "FIELD_ENAME": "简称"
          }, {"FIELD_CNAME": "汉语拼音", "FIELD_ENAME": "汉语拼音"}, {
            "FIELD_CNAME": "地址",
            "FIELD_ENAME": "地址"
          }, {"FIELD_CNAME": "电话", "FIELD_ENAME": "电话"}, {
            "FIELD_CNAME": "邮政编码",
            "FIELD_ENAME": "邮政编码"
          }, {"FIELD_CNAME": "主类代码", "FIELD_ENAME": "主类代码"}, {
            "FIELD_CNAME": "唯一ID",
            "FIELD_ENAME": "唯一ID"
          }, {"FIELD_CNAME": "敏感信息", "FIELD_ENAME": "敏感信息"}, {
            "FIELD_CNAME": "次类代码",
            "FIELD_ENAME": "次类代码"
          }, {"FIELD_CNAME": "行业标识码", "FIELD_ENAME": "行业标识码"}, {
            "FIELD_CNAME": "拼音首字母",
            "FIELD_ENAME": "拼音首字母"
          }, {"FIELD_CNAME": "外文名称", "FIELD_ENAME": "外文名称"}, {
            "FIELD_CNAME": "多媒体信息",
            "FIELD_ENAME": "多媒体信息"
          }, {"FIELD_CNAME": "现状时间", "FIELD_ENAME": "现状时间"}, {
            "FIELD_CNAME": "所在行政区",
            "FIELD_ENAME": "所在行政区"
          }, {"FIELD_CNAME": "开设科室", "FIELD_ENAME": "开设科室"}, {
            "FIELD_CNAME": "主治医师",
            "FIELD_ENAME": "主治医师"
          }, {"FIELD_CNAME": "成立时间", "FIELD_ENAME": "成立时间"}, {
            "FIELD_CNAME": "门诊时间",
            "FIELD_ENAME": "门诊时间"
          }, {"FIELD_CNAME": "法人代表", "FIELD_ENAME": "法人代表"}, {
            "FIELD_CNAME": "医生数",
            "FIELD_ENAME": "医生数"
          }, {"FIELD_CNAME": "护理人员数", "FIELD_ENAME": "护理人员数"}, {
            "FIELD_CNAME": "网址",
            "FIELD_ENAME": "网址"
          }, {"FIELD_CNAME": "备注", "FIELD_ENAME": "备注"}, {
            "FIELD_CNAME": "标注级别",
            "FIELD_ENAME": "标注级别"
          }, {"FIELD_CNAME": "Flag", "FIELD_ENAME": "Flag"}, {
            "FIELD_CNAME": "POINT_X",
            "FIELD_ENAME": "POINT_X"
          }, {"FIELD_CNAME": "POINT_Y", "FIELD_ENAME": "POINT_Y"}, {"FIELD_CNAME": "唯一标识码", "FIELD_ENAME": "唯一标识码"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer/8",
        "LAYERID": "8",
        "DISPLAYLAYERNAME": "疾病防疫",
        "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "FID", "FIELD_ENAME": "FID"}, {
            "FIELD_CNAME": "要素编号",
            "FIELD_ENAME": "要素编号"
          }, {"FIELD_CNAME": "标准名称", "FIELD_ENAME": "标准名称"}, {
            "FIELD_CNAME": "简称",
            "FIELD_ENAME": "简称"
          }, {"FIELD_CNAME": "汉语拼音", "FIELD_ENAME": "汉语拼音"}, {
            "FIELD_CNAME": "地址",
            "FIELD_ENAME": "地址"
          }, {"FIELD_CNAME": "电话", "FIELD_ENAME": "电话"}, {
            "FIELD_CNAME": "邮政编码",
            "FIELD_ENAME": "邮政编码"
          }, {"FIELD_CNAME": "主类代码", "FIELD_ENAME": "主类代码"}, {
            "FIELD_CNAME": "唯一ID",
            "FIELD_ENAME": "唯一ID"
          }, {"FIELD_CNAME": "敏感信息", "FIELD_ENAME": "敏感信息"}, {
            "FIELD_CNAME": "次类代码",
            "FIELD_ENAME": "次类代码"
          }, {"FIELD_CNAME": "行业标识码", "FIELD_ENAME": "行业标识码"}, {
            "FIELD_CNAME": "拼音首字母",
            "FIELD_ENAME": "拼音首字母"
          }, {"FIELD_CNAME": "外文名称", "FIELD_ENAME": "外文名称"}, {
            "FIELD_CNAME": "多媒体信息",
            "FIELD_ENAME": "多媒体信息"
          }, {"FIELD_CNAME": "现状时间", "FIELD_ENAME": "现状时间"}, {
            "FIELD_CNAME": "所在行政区",
            "FIELD_ENAME": "所在行政区"
          }, {"FIELD_CNAME": "职能", "FIELD_ENAME": "职能"}, {
            "FIELD_CNAME": "开设科室",
            "FIELD_ENAME": "开设科室"
          }, {"FIELD_CNAME": "专家医师", "FIELD_ENAME": "专家医师"}, {
            "FIELD_CNAME": "成立时间",
            "FIELD_ENAME": "成立时间"
          }, {"FIELD_CNAME": "法人代表", "FIELD_ENAME": "法人代表"}, {
            "FIELD_CNAME": "职工人数",
            "FIELD_ENAME": "职工人数"
          }, {"FIELD_CNAME": "网址", "FIELD_ENAME": "网址"}, {
            "FIELD_CNAME": "备注",
            "FIELD_ENAME": "备注"
          }, {"FIELD_CNAME": "标注级别", "FIELD_ENAME": "标注级别"}, {
            "FIELD_CNAME": "Flag",
            "FIELD_ENAME": "Flag"
          }, {"FIELD_CNAME": "POINT_X", "FIELD_ENAME": "POINT_X"}, {
            "FIELD_CNAME": "POINT_Y",
            "FIELD_ENAME": "POINT_Y"
          }, {"FIELD_CNAME": "数据来源", "FIELD_ENAME": "数据来源"}, {"FIELD_CNAME": "唯一标识码", "FIELD_ENAME": "唯一标识码"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer/9",
        "LAYERID": "9",
        "DISPLAYLAYERNAME": "医疗康复",
        "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "FID", "FIELD_ENAME": "FID"}, {
            "FIELD_CNAME": "要素编号",
            "FIELD_ENAME": "要素编号"
          }, {"FIELD_CNAME": "标准名称", "FIELD_ENAME": "标准名称"}, {
            "FIELD_CNAME": "简称",
            "FIELD_ENAME": "简称"
          }, {"FIELD_CNAME": "汉语拼音", "FIELD_ENAME": "汉语拼音"}, {
            "FIELD_CNAME": "地址",
            "FIELD_ENAME": "地址"
          }, {"FIELD_CNAME": "电话", "FIELD_ENAME": "电话"}, {
            "FIELD_CNAME": "邮政编码",
            "FIELD_ENAME": "邮政编码"
          }, {"FIELD_CNAME": "主类代码", "FIELD_ENAME": "主类代码"}, {
            "FIELD_CNAME": "唯一ID",
            "FIELD_ENAME": "唯一ID"
          }, {"FIELD_CNAME": "敏感信息", "FIELD_ENAME": "敏感信息"}, {
            "FIELD_CNAME": "次类代码",
            "FIELD_ENAME": "次类代码"
          }, {"FIELD_CNAME": "行业标识码", "FIELD_ENAME": "行业标识码"}, {
            "FIELD_CNAME": "拼音首字母",
            "FIELD_ENAME": "拼音首字母"
          }, {"FIELD_CNAME": "外文名称", "FIELD_ENAME": "外文名称"}, {
            "FIELD_CNAME": "多媒体信息",
            "FIELD_ENAME": "多媒体信息"
          }, {"FIELD_CNAME": "现状时间", "FIELD_ENAME": "现状时间"}, {
            "FIELD_CNAME": "所在行政区",
            "FIELD_ENAME": "所在行政区"
          }, {"FIELD_CNAME": "职能", "FIELD_ENAME": "职能"}, {
            "FIELD_CNAME": "开设科室",
            "FIELD_ENAME": "开设科室"
          }, {"FIELD_CNAME": "专家医师", "FIELD_ENAME": "专家医师"}, {
            "FIELD_CNAME": "类型",
            "FIELD_ENAME": "类型"
          }, {"FIELD_CNAME": "等级", "FIELD_ENAME": "等级"}, {
            "FIELD_CNAME": "成立时间",
            "FIELD_ENAME": "成立时间"
          }, {"FIELD_CNAME": "法人代表", "FIELD_ENAME": "法人代表"}, {
            "FIELD_CNAME": "职工人数",
            "FIELD_ENAME": "职工人数"
          }, {"FIELD_CNAME": "网址", "FIELD_ENAME": "网址"}, {
            "FIELD_CNAME": "备注",
            "FIELD_ENAME": "备注"
          }, {"FIELD_CNAME": "标注级别", "FIELD_ENAME": "标注级别"}, {
            "FIELD_CNAME": "Flag",
            "FIELD_ENAME": "Flag"
          }, {"FIELD_CNAME": "POINT_X", "FIELD_ENAME": "POINT_X"}, {
            "FIELD_CNAME": "POINT_Y",
            "FIELD_ENAME": "POINT_Y"
          }, {"FIELD_CNAME": "数据来源", "FIELD_ENAME": "数据来源"}, {"FIELD_CNAME": "唯一标识码", "FIELD_ENAME": "唯一标识码"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }, {
        "SERVICES_ADDR": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer/10",
        "LAYERID": "10",
        "DISPLAYLAYERNAME": "急救中心",
        "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/health/MapServer",
        "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
        "MOUSEMOVE_FIELD": {
          "FIELD": [{"FIELD_CNAME": "FID", "FIELD_ENAME": "FID"}, {
            "FIELD_CNAME": "要素编号",
            "FIELD_ENAME": "要素编号"
          }, {"FIELD_CNAME": "标准名称", "FIELD_ENAME": "标准名称"}, {
            "FIELD_CNAME": "简称",
            "FIELD_ENAME": "简称"
          }, {"FIELD_CNAME": "汉语拼音", "FIELD_ENAME": "汉语拼音"}, {
            "FIELD_CNAME": "地址",
            "FIELD_ENAME": "地址"
          }, {"FIELD_CNAME": "电话", "FIELD_ENAME": "电话"}, {
            "FIELD_CNAME": "邮政编码",
            "FIELD_ENAME": "邮政编码"
          }, {"FIELD_CNAME": "主类代码", "FIELD_ENAME": "主类代码"}, {
            "FIELD_CNAME": "唯一ID",
            "FIELD_ENAME": "唯一ID"
          }, {"FIELD_CNAME": "敏感信息", "FIELD_ENAME": "敏感信息"}, {
            "FIELD_CNAME": "次类代码",
            "FIELD_ENAME": "次类代码"
          }, {"FIELD_CNAME": "行业标识码", "FIELD_ENAME": "行业标识码"}, {
            "FIELD_CNAME": "拼音首字母",
            "FIELD_ENAME": "拼音首字母"
          }, {"FIELD_CNAME": "外文名称", "FIELD_ENAME": "外文名称"}, {
            "FIELD_CNAME": "多媒体信息",
            "FIELD_ENAME": "多媒体信息"
          }, {"FIELD_CNAME": "现状时间", "FIELD_ENAME": "现状时间"}, {
            "FIELD_CNAME": "所在行政区",
            "FIELD_ENAME": "所在行政区"
          }, {"FIELD_CNAME": "职能", "FIELD_ENAME": "职能"}, {
            "FIELD_CNAME": "开设科室",
            "FIELD_ENAME": "开设科室"
          }, {"FIELD_CNAME": "专家医师", "FIELD_ENAME": "专家医师"}, {
            "FIELD_CNAME": "成立时间",
            "FIELD_ENAME": "成立时间"
          }, {"FIELD_CNAME": "法人代表", "FIELD_ENAME": "法人代表"}, {
            "FIELD_CNAME": "职工人数",
            "FIELD_ENAME": "职工人数"
          }, {"FIELD_CNAME": "网址", "FIELD_ENAME": "网址"}, {
            "FIELD_CNAME": "备注",
            "FIELD_ENAME": "备注"
          }, {"FIELD_CNAME": "标注级别", "FIELD_ENAME": "标注级别"}, {
            "FIELD_CNAME": "Flag",
            "FIELD_ENAME": "Flag"
          }, {"FIELD_CNAME": "POINT_X", "FIELD_ENAME": "POINT_X"}, {
            "FIELD_CNAME": "POINT_Y",
            "FIELD_ENAME": "POINT_Y"
          }, {"FIELD_CNAME": "数据来源", "FIELD_ENAME": "数据来源"}, {"FIELD_CNAME": "唯一标识码", "FIELD_ENAME": "唯一标识码"}]
        },
        "SELDEFINE": {
          "PROPERTY": [{
            "PROPER_DESCRIPTION": "权限值",
            "PROPER_KEY": "priority",
            "PROPER_VALUE": "5"
          }, {
            "PROPER_DESCRIPTION": "点击查询",
            "PROPER_KEY": "clickFlag",
            "PROPER_VALUE": "1"
          }, {
            "PROPER_DESCRIPTION": "移动查询",
            "PROPER_KEY": "queryFlag",
            "PROPER_VALUE": "0"
          }, {"PROPER_DESCRIPTION": "透明度", "PROPER_KEY": "alpha", "PROPER_VALUE": "0.5"}]
        }
      }


    ]
  }
}
