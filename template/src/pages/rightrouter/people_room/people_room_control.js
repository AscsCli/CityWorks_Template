import { cw } from '../../../../assets/js/cw3.js';

export const actions = {};

actions.config = {
	httpServerUrl:'http://cwdata.ascs.tech',
    httpServerPort:'3000'
}
/**
* 功能：以房查人
*/
actions.build_search_people = function() {
	cw.selectedModel(function(res){
		if(window.build_search_room !== undefined){
			window.build_search_room(res)
		}
	});
}
/**
*功能：人房互查调转
*/
actions.roomFly = function(id){
	var rule = {
		name:'建筑物编码',
		id:id
	}
	cw.tools.flyToObject(rule);
}

