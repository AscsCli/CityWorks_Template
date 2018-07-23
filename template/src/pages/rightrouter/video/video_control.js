import {cw} from '../../../../assets/js/cw3.js';

export const actions = {};

/**
 * 登录视频
 */
actions.ocxLogin = function (ocxDom) {
    return new Promise(function (resolve, reject) {
        window.login_event_cb = function (res) {
            resolve(res);
            window.login_event_cb = window.NULL_FUNCTION;
        };
        ocxDom.OCX_Login("192.168.2.92", 0, "admin", "admin", 1);
    })
};

/**
 * 给body添加OCX的获取列表事件
 */
actions.ocxGetListListener = function () {
    let list = document.createElement("script");
    list.setAttribute("for", "NewPlayer");
    list.setAttribute("event", "OCX_GetNodeXML_Event(res)");
    list.innerHTML = "window.ocx_list_handle(res)";
    document.body.appendChild(list);
};

/**
 *停止播放事件
 */
actions.ocxStopPlayListener = function () {
    let list = document.createElement("script");
    list.setAttribute("for", "NewPlayer");
    list.setAttribute("event", "OCX_WindowSelChange_Event(res)");
    list.innerHTML = "window.ocx_stop_handle(res)";
    document.body.appendChild(list);
}

/**
 * 播放3维引擎视频
 */
actions.playEngineVideo = function (name, id) {
    cw.switchVideo(name, id);
}

/**
 *摄像头统计数据
 **/
actions.videoData_one = function (obj) {
    let igood = obj.inner.good;
    let ibad = obj.inner.bad;
    let ogood = obj.outer.good;
    let obad = obj.outer.bad;
    let lend = [];
    let serData = [
        {name: '故障', data: [ibad, obad], color: ['#ff9632']},
        {name: '正常', data: [igood, ogood], color: ['#665de5']},
        {name: '总量', data: [igood + ibad, ogood + obad], color: ['#0b78e3']}
    ]
    if ((ibad + obad) == 0) {
        lend = ['正常', '总量'];
    } else {
        lend = ['故障', '正常', '总量'];
    }
    let seriesData = [];
    for (let i = 0; i < serData.length; i++) {
        seriesData.push({
            name: serData[i].name,
            type: 'bar',
            data: serData[i].data,
            barGap: '30%',
            color: serData[i].color,
            barWidth: 12,
            itemStyle: {
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius: [10, 10, 0, 0]
                }
                
            }
        })
    }
    let echartsData = {};
    echartsData.option = {
        tooltip: {
            trigger: 'item',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: 10,
            right: 10,
            bottom: 50,
            top: 10,
            containLabel: true
        },
        legend: {
            orient: 'horizontal',
            left: 'center',
            bottom: '0',
            data: lend,
            textStyle: {
                color: '#72b3dc'
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ['室内摄像头', '室外摄像头'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#72b3dc"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#72b3dc'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#72b3dc'
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: '#72b3dc'
                    }
                }
            }
        ],
        series: seriesData
    }
    return echartsData;
}

