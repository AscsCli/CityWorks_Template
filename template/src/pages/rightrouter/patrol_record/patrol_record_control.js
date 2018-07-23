import { cw } from '../../../../assets/js/cw3.js';

export const actions = {};

actions.config = {
	httpServerUrl:'http://192.168.2.6',
    httpServerPort:'3000'
}

/**
* Echart：巡查记录统计
*/
actions.echart_patrol_record = function (array){
	let _date = [];
	let _count = [];
	for(let i=0;i<array.length;i++){
		let day = array[i].check_date.split('-');
		_date.push(day[1]+'-'+day[2]);
		_count.push(array[i].total);
	}
	_date.reverse();
	_count.reverse();

	let echartsData = {}

	echartsData.option = {
		tooltip: { 
	        trigger: 'auto', 
	        padding: 10, 
	    },
	    grid: {
	        left:10,
            right:10,
            bottom:50,
            top:10,
	       containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : _date,
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
	            name:'次数',
	            type:'line',
	            data:_count,
	            color:['#ffb025'],
	            symbol:'none'
	        }
	    ]
	}

	return echartsData;
};

/**
*重点部位详情
*/
actions.main_part_detail = function(){
	let echartsData = {};
	echartsData.option = {
		tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'horizontal',
	        left: 'center',
	        bottom:'5%',
	        data: ['正常','异常'],
	        textStyle:{
	        	color:'#72b3dc'
	        },
	    },
	    grid: {
	        left:10,
            right:10,
            bottom:50,
            top:10,
	       containLabel: true
	    },
	    series : [
	        {
	            name: '访问来源',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '40%'],
	            data:[
	                {value:90, name:'异常'},
	                {value:998, name:'正常'}
	               
	            ],
	            color:['#E58641','#00AEFA'],
	            label:{
	                normal:{
	                    show:true,
            			position:'inside'
	                }
	            }
	        }
	    ]
	};
	return echartsData;
};

/**
*消防巡查详情
*/
actions.fire_patrol_detail = function(){
	let echartsData = {};

	echartsData.option = {
		tooltip : {
	        trigger: 'item',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid: {
	        left:10,
            right:10,
            bottom:50,
            top:10,
	       	containLabel: true
	    },
	    legend: {
	        orient: 'horizontal',
	        left:'center',
	        bottom:'0%',
	        data:['异常','正常','未检查'],
	        textStyle:{
	        	color:'#72b3dc'
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['企业自查','网格员调查','民警抽查'],
	            axisLine: {
	                show:true,
	                lineStyle:{
	                    color:"#72b3dc"
	                }
	            },
	            axisLabel: {
	                textStyle: {
	                    color: '#72b3dc'
	                }
	            }
	        }
	    ],
	    yAxis : [
	        {   
	            type:'value',
	            axisLine: {
	                show:false  
	            },
	            axisLabel: {
	                textStyle: {
	                    color: '#72b3dc'
	                }
	            },
	            axisTick: {
	                show:false
	            },
	            splitLine:{
	                lineStyle:{
	                    color:'#72b3dc'
	                }
	            }
	        }
	    ],
	    series : [
	       
	        {
	            name:'正常',
	            type:'bar',
	            data:[362,345,75],
	            barGap:'30%',
	            color:['#00AEFA'],
	            barWidth:15,
	            
	        },
	      
	        {
	            name:'异常',
	            type:'bar',
	            data:[28,42,12],
	            color:['#E58641'],
	            barWidth:15,
	           
	        },
	        {
	            name:'未检查',
	            type:'bar',
	            data:[10,13,304],
	            color:['#969797'],
	            barWidth:15,
	        }
	    ]
	}
	return echartsData;
}


/**
* 拉膜
*/
actions.improveBuilding = function(list){
	cw.improveBuilding(list);
}
