function hasSameLayer(mapGroup) {
    let copyArr = []
    for(let i =0;i<mapGroup.length;i++){
        for(let j = i+1; j < mapGroup.length; j++){
            let same = false;
            let serviceSame = true;
            if(mapGroup[i].service){
                serviceSame = (mapGroup[i].service === mapGroup[j].service)
            }
            same = mapGroup[i].name === mapGroup[j].name
                && mapGroup[i].aliceName === mapGroup[j].aliceName
                && mapGroup[i].dataSet === mapGroup[j].dataSet
                && mapGroup[i].featureClassName === mapGroup[j].featureClassName
                && serviceSame;
            if(same){
                //console.log('重复的图层为' + JSON.stringify(mapGroup[j]));
                copyArr.push(j);
            }
        }
    }
    return copyArr
}

var fs = require('fs');
var path = require('path')

var mapConfigPath = path.resolve(__dirname, '../static/config/mapConfig.js');

fs.readFile(mapConfigPath,'utf-8', function (err,body) {
    if (err) {
        console.error(err);
    } else {
        let reg = /mapGroup/g;
        let i = body.search(reg);
        let mapGroupStr = body.slice(i);
        let j = mapGroupStr.search(/};/);
        mapGroupStr = mapGroupStr.slice(0,j);
        mapGroupStr.replace(/:/,'=');
        mapGroupStr = eval(mapGroupStr);
        mapGroupStr.map(value=>{
            if(!value.hasOwnProperty('service')){
                value.service = 'FUZHOU_201709161347_FDB'
            }
            return value
        })
        let copyArr = hasSameLayer(mapGroupStr);
        if(copyArr.length === 0){
            console.log('没有重复添加的图层');
        } else {
            mapGroupStr = mapGroupStr.filter((item,index)=>{
                return copyArr.indexOf(index) < 0
            })
            let cwConfig = body
            let reg = /mapGroup:[\s\S]+/g;
            cwConfig = cwConfig.replace(reg, 'mapGroup:' +JSON.stringify(mapGroupStr) + '}');

            fs.writeFile(path.resolve(__dirname, '../static/config/mapConfig.js'),cwConfig);
        }

    }
})