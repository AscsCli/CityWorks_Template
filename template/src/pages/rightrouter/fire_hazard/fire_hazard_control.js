export const actions = {};

actions.config = {
	httpServerUrl:'http://192.168.2.6',
    httpServerPort:'3000'
}

/**
* Echart：人口统计
*/
actions.echart_people_total = function (dom, dataSet) {
	dom.setOption({
		tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    grid:{
	    	top:'5%'
	    },
	    legend: {
	        orient: 'horizontal',
	        x: 'center',
	        y:'250',
	        textStyle:{
	        	color:'#72b3dc'
	        },
	        data:['总数','已注册','其他']
	    },
	    series: [
	        {
	            name:'',
	            type:'pie',
	            radius: ['50%', '70%'],
	            center:['center','110'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '30',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:dataSet
	        }
	    ]
	});
}

/**
*Echart：消防设施统计
*/
actions.echart_fire_facilities = function (dom, dataSet) {
	var data = [];
	var series = [];
	for(var i=0;i<dataSet.length;i++){
		var dat = new Array();
		dat[0] = Math.round(Math.random()*50+10);
		dat[1] = Math.round(Math.random()*50+10);
		dat[2] = dataSet[i].sum;
		data.push([dat]);

		var obj = {
			name: dataSet[i].type,
	        data: data[i],
	        type: 'scatter',
	        symbolSize: function (data) {
	            return Math.sqrt(data[2]) * 8;
	        },
	        label: {
	            normal:{
	                show:true,
	                position:'inside',
	            }
	        },
	        itemStyle:{
	            normal:{
	                color:['#'+Math.floor(Math.random()*16777215).toString(16)]
	            }
        	}
		}

		series.push(obj);
	}

	dom.setOption({
		tooltip : {
	        trigger: 'item',
	        formatter: "{a}数量"
	    },
	    // legend: {
	    //     left:'center',
	    //     top:10,
	    //     data: ['健康', '防范','预警','危险'],
	    //     textStyle:{
	    //     	color:'#72b3dc'
	    //     }
	    // },
	    grid: {
	        left: 0,
	        top: 50,
	        bottom:0,
	        containLabel: true
	    },
	    xAxis: {
	        offset:2000,
	        axisLine: {
	            show:false  
	        },
	        axisTick: {
	            show:false
	        },
	        splitLine: {
	            lineStyle: {
	                type: 'dashed'
	            }
	        }
	    },
	    yAxis: {
	        offset:200,
	        axisLine: {
	            show:false  
	        },
	        axisTick: {
	            show:false
	        },
	        splitLine: {
	            lineStyle: {
	                type: 'dashed'
	            }
	        },
	        scale: true
	    },
	    series: series
	});
};

/**
*Echart：温度统计
*/
actions.echart_temperature_total = function (dom, array,echarts){
	var _data = [];
	var _value = [];
	for(var i=0;i<array.length;i++){
		var time = array[i].created.split(' ')[1].split(':')
		_data.push(time[0]+':'+time[1]);
		_value.push(array[i].value);
	}
	if(array.length==0){
		_value = [10,10,10,10];
		_data = ['暂无数据','暂无数据','暂无数据','暂无数据'];
	}
	dom.setOption({
		tooltip: { 
	        trigger: 'auto', 
	        padding: 10, 
	    },
	    grid: {
	       x:'15%'
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : _data,
	            axisLabel: { 
	                textStyle: {
		                color: '#72b3dc'
		            }
	            },
	            axisLine: {
				    show:true,
				    lineStyle:{
		                color:'#72b3dc'
		            }
		        },
	            axisTick: {
				    show:true,
				    lineStyle:{
		                color:'#72b3dc'
		            }
		        },
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	          	axisLabel: { 
	                formatter: '{value} °C' ,
	                textStyle: {
		                color: '#72b3dc'
		            }
	            } ,
	            axisLine: {
				    show:false  
		        },
		        axisTick: {
		            show:false
		        },
		        splitLine:{
		            lineStyle:{
		                color:'#72b3dc'
		            }
		        },
				       
	        }
	    ],
	    series : [
	        {
	            name:'温度',
	            type:'line',
	            itemStyle: {
	                normal: {
	                    areaStyle: {
	                        type: 'default',
	                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                          offset: 0, color: '#ffb025' // 0% 处的颜色
	                        }, {
	                          offset: .9, color: '#fff' // 100% 处的颜色
	                        }], false)
	                    }
	                    
	                }
	                
	            },
	            data:_value,
	            color:['#ffb025']
	        }
	    ]
	})
}