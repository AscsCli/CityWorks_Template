/**
 * Created by Administrator on 2018/6/11 0011.
 */
import * as esriLoader from 'esri-loader';


export const geometryCreator = {}



// {
//
//   type:"Point",
//   spatialReference:"",
//   coord:
//
// }



geometryCreator.create = function (config) {

  let geometry = null
  esriLoader.dojoRequire([
      "esri/geometry/Point",
      "esri/geometry/Polyline",
      "esri/geometry/Polygon",

    ],
    (
     Point,
     Polyline,
     Polygon) => {



           if(config.type == "Point"){

             geometry = new Point(config.coord,config.spatialReference);

           }else if(config.type == "Polyline"){

             geometry = new Polyline(config.coord,config.spatialReference);

          }else if(config.type == "Polygon") {

             geometry = new Polygon(config.coord, config.spatialReference);
           }

    })

    return geometry;

}
