# gismap3的图层数据结构


- ArcGISDynamicMapServiceLayer

ArcGISDynamicMapServiceLayer 图层的某个节点在gismap3的数据结构如
```json

 {
    "SERVICES_ADDR": "http://61.144.226.44:6080/arcgis/rest/services/msmap/BOOKS/MapServer/1",
    "LAYERID": "1",
    "DISPLAYLAYERNAME": "深圳市规划选址意见书",
    "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/BOOKS/MapServer",
    "LAYER_TYPE": "ArcGISDynamicMapServiceLayer",
    "MOUSEMOVE_FIELD": {
      "FIELD": [
        {
          "FIELD_CNAME": "OBJECTID",
          "FIELD_ENAME": "OBJECTID"
        },
        {
          "FIELD_CNAME": "LICENSE_NO",
          "FIELD_ENAME": "LICENSE_NO"
        },
        {
          "FIELD_CNAME": "PROJ_NAME",
          "FIELD_ENAME": "PROJ_NAME"
        },
        {
          "FIELD_CNAME": "SHAPE.AREA",
          "FIELD_ENAME": "SHAPE.AREA"
        },
        {
          "FIELD_CNAME": "SHAPE.LEN",
          "FIELD_ENAME": "SHAPE.LEN"
        }
      ]
    },
    "SELDEFINE": {
      "PROPERTY": [
        {
          "PROPER_DESCRIPTION": "权限值",
          "PROPER_KEY": "priority",
          "PROPER_VALUE": "5"
        },
        {
          "PROPER_DESCRIPTION": "点击查询",
          "PROPER_KEY": "clickFlag",
          "PROPER_VALUE": "1"
        },
        {
          "PROPER_DESCRIPTION": "移动查询",
          "PROPER_KEY": "queryFlag",
          "PROPER_VALUE": "1"
        },
        {
          "PROPER_DESCRIPTION": "透明度",
          "PROPER_KEY": "alpha",
          "PROPER_VALUE": "0.5"
        }
      ]
    }
  }

```


- ArcGISTiledMapServiceLayer


```json

  {
    "SERVICES_ADDR": "",
    "LAYERID": "",
    "DISPLAYLAYERNAME": "电子地图",
    "MAPSERVICES": "http://61.144.226.44:6080/arcgis/rest/services/msmap/BOOKS/MapServer",
    "LAYER_TYPE": "ArcGISTiledMapServiceLayer",
    "MOUSEMOVE_FIELD": {
      "FIELD": []
    },
    "SELDEFINE": {
      "PROPERTY": [
        {
          "PROPER_DESCRIPTION": "权限值",
          "PROPER_KEY": "priority",
          "PROPER_VALUE": "2"
        },
        {
          "PROPER_DESCRIPTION": "点击查询",
          "PROPER_KEY": "clickFlag",
          "PROPER_VALUE": "1"
        },
        {
          "PROPER_DESCRIPTION": "移动查询",
          "PROPER_KEY": "queryFlag",
          "PROPER_VALUE": "1"
        },
        {
          "PROPER_DESCRIPTION": "透明度",
          "PROPER_KEY": "alpha",
          "PROPER_VALUE": "0.5"
        }
      ]
    }
  }


```


- ArcGISImageServiceLayer


```json

  {
    "SERVICES_ADDR": "",
    "LAYERID": "",
    "DISPLAYLAYERNAME": "遥感影像",
    "MAPSERVICES": "http://121.201.65.133:2001/arcgis/rest/services/image/ImageServer ",
    "LAYER_TYPE": "ArcGISImageServiceLayer",
    "MOUSEMOVE_FIELD": {
      "FIELD": []
    },
    "SELDEFINE": {
      "PROPERTY": [
        {
          "PROPER_DESCRIPTION": "权限值",
          "PROPER_KEY": "priority",
          "PROPER_VALUE": "2"
        },
        {
          "PROPER_DESCRIPTION": "点击查询",
          "PROPER_KEY": "clickFlag",
          "PROPER_VALUE": "1"
        },
        {
          "PROPER_DESCRIPTION": "移动查询",
          "PROPER_KEY": "queryFlag",
          "PROPER_VALUE": "1"
        },
        {
          "PROPER_DESCRIPTION": "透明度",
          "PROPER_KEY": "alpha",
          "PROPER_VALUE": "0.5"
        }
      ]
    }
  }


```




- 节点描述

  | 名称             |      ArcGISDynamicMapServiceLayer  |ArcGISImageServiceLayer|ArcGISTiledMapServiceLayer             | 描述  |
  | --------   | ----: | ----: |  ----: |----: |----: |
  |      SERVICES_ADDR | 需要     | 不需要  |           不需要         |   rest服务单节点带id地址     |
  |      LAYERID       |      需要     | 不需要  |           不需要                     |   id值     |
  |      DISPLAYLAYERNAME |     需要     | 需要  |           需要                    |   图层名字     |
  |      MAPSERVICES  |       需要     | 需要  |            需要                       |   rest服务mxd整个发布地址     |
  |     LAYER_TYPE    |      需要     | 需要  |             需要                        |   图层类型     |
  |     SELDEFINE    |     需要     |  需要    |           需要                           |   做自定义属性节点     |
  |     priority     |      需要     | 需要   |             需要                       |   做图层加载顺序加载     |
  |     clickFlag    |      需要     | 不需要   |           不需要                        |   点击查询设置（未实现）     |
  |     queryFlag     |      需要     | 不需要  |           不需要                       |   点选查询设置 1设置可以点选 0 设置不能点选     |
  |     alpha         |      需要     | 需要  |             需要                    |   图层透明度（未实现）     |
  |      FIELD_CNAME  |      需要     | 不需要  |           不需要                         |   做图层点选字段的中文转义     |
  |      FIELD_ENAME   |     需要     | 不需要  |           不需要                     |   做图层点选字段值    |
