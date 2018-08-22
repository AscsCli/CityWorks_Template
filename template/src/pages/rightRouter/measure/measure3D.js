import {cw5} from "@cityworks/cw3d-cm/index";
export const measure3DFunc ={
    init:function (type) {
      let measureArray = ["line","area","vertical","horizontal"];
      if(measureArray.includes(type)){
        cw5.measure.measureMent(type)
      }
    }
};