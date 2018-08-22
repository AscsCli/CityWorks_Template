/**
 * Created by ycc on 2018/1/3.
 */
import Vue from 'vue';
import {powerCodeData} from './PowerCodeData';

Vue.directive('powerCode', {
    isFn: true,
    acceptStatement: true,
    
    inserted: function (el, binding) {
        let bindval = binding.value;
        let code = bindval.code;
        if (!powerCodeData.code.includes(code)) {

            el.parentNode.removeChild(el)
        }
    },
    update: function (el, binding) {
    
    },
    unbind: function () {
    }
})








