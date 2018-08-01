### 是什么？

CityWorks® Template旨在快速构建CityWorks Pro应用。

这个版本的Template充分的借助了Npm包，实现了高度模块化的设计。



### 怎么用？

#### 1、查看package.json

我们可以看到整个Template依赖于公司自有的`rocket-ui`,`cw3d-cm`,`gismap3`这三个包。

```
  "dependencies": {
    "@cityworks/rocket-ui": "^1.1.16",
    "@cityworks/gismap3": "^1.0.26",
    "@cityworks/cw3d-cm": "^2.0.0",
    ......
  },
```
`rocket-ui` ：具有强烈的CityWorks设计风格的前端组件。同时也可以使用其他的
`cw3d-cm`   ：针对三维地图操作的npm包，这里集成了CityWorks常见的三维操作。
`gismap3`   ：针对二维地图操作的npm包，这是一个对ArcGis封装的工具包，可以大幅度降低，开发人员使用ArcGis的复杂度。

如何安装：

```
npm install @cityworks/rocket-ui

npm install @cityworks/cw3d-cm

npm install @cityworks/gismap3
```

具体使用方法，请见每个npm包的开发文档。


#### 2、先看目录结构

##### 2.1、一级目录结构
`docs`  ： Template工程的使用说明
`src`   ： 工程源码
`static`:  Template工程的静态资源
`tools` :  平台常用小工具
##### 2.2、二级目录结构

**2.2.1、针对src的说明**

文件件名称 | 功能
---|---
api | 请求中心
row 2 col 1 | row 2 col 2

---
`api`:

功能：请求中心。

描述：所有的请求需要配置，配置好之后都由`api`下的`api-factor.js`分发。

在这里可以访问真实数据，也可以在`mock`目录下注册**mock服务**，接入模拟数据。

---

`eventBus`

功能：全局事件总线

描述： Template框架向业务层抛出消息的总线，业务模块监听事件总线中的事件，在事件触发时取得相应的数据。

---

`business`：

功能：业务中心。

描述：将所有业务功能，都放在这个目录中。换句话说，就是二次开发人员，建议在这个目录下开发，其他目录建议不要动。

---

`pages`:

功能：Template基础框架。

按照页面布局，将页面基础结构放在这个目录下。

    `center`：存放地图、tab标签、底部图表模块。
    `frame` : 页面基础骨架
    `head`  : 页面头部，包含页面按钮等
    `leftMenu` ： 左侧图层列表


**2.2.2、针对static的说明**


#### 3、我该如何上手开发---初始化环境

##### 3.1 首先初始化Template工程化模板：
```
vue init AscsCli/Vue-citywork-template my-project
```

##### 3.2 使用vpn接入公司内网（已在内网可以忽略这一步）

##### 3.3 使用公司私有Npm服务器

使用`npm`安装 `nrm` 工具:

```html
npm install nrm -g
```

然后添加公司私有npm服务器作为仓库源：

```html
$ nrm ls

  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
```

添加npm服务器：
```html
nrm add webteam  http://192.168.2.25:4875/
```

使用私有服务器
```html
nrm use webteam
```

##### 3.4 安装node_modules

使用如下的命令，工程根据package.json安装所有的依赖。

```
npm install
```

#### 4、我该如何上手开发---着手开发

##### 4.1 配置路由

在centerTabConfig.json中，配置Tab标签，以及路由。

在`business\center`文件夹中，处理全局的业务逻辑。
在`business\leftMenu`文件夹中，处理左侧餐单栏的逻辑。

自定义的业务逻辑，放置在`business`目录下。

建议使用的目录结构：

```
advanced_analysis
    advanced_analsis_services.js  //处理服务数据
    advanced_analsis_url.js       //URL路径
    advanced_analysis.less        //样式文件
    advanced_analysis.vue         //vue文件
    advanced_analysis_ctrl.js     //处理业务逻辑
    advanced_analysis_ctrl_3d.js  //处理三维请求
    advanced_analysis_eventBus.js //业务独立事件总线
```

相比于原来的方式：

1、不需要import所有的UI组件

2、三维组件、二维组件只包含基础功能，不包含业务功能


