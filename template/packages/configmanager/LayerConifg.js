/**
 * Created by Administrator on 2017/3/27 0027.
 */

export  default  class LayerConifg{

    constructor(obj){

        this.SERVICES_ADDR =  obj.SERVICES_ADDR;
        this.DISPLAYLAYERNAME = obj.DISPLAYLAYERNAME;
        this.LAYERID = obj.LAYERID;
        this.MAPSERVICES = obj.MAPSERVICES;
        this.LAYER_TYPE = obj.LAYER_TYPE;


        this.SELDEFINE = obj['SELDEFINE']['PROPERTY'];
        this.MOUSEMOVE_FIELD = obj['MOUSEMOVE_FIELD']['FIELD'];

    }

    getLayerPriority(){

        let priority = 5;
        if( this.SELDEFINE != undefined)
        {
            for(let value of this.SELDEFINE){

                if(value['PROPER_KEY'] == 'priority')
                {
                    return value['PROPER_VALUE'];
                }
            }
        }

    }

  getLayerQueryFlag(){

    let priority = 5;
    if( this.SELDEFINE != undefined)
    {
      for(let value of this.SELDEFINE){

        if(value['PROPER_KEY'] == 'queryFlag')
        {
          return value['PROPER_VALUE'];
        }
      }
    }

  }


}
