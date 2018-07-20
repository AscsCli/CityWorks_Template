let fs = require("fs");
let projectConfig = require("../static/config/projectConfig.js");
let version = '3.5.3';

let fileArray = [
    "../static/config/projectConfig.js",
    '../package.json'
];
function appendVersion(filePath) {
    fs.appendFile(filePath, `\r\nprojectConfig.version =\' ${version}\'\;`, function (err) {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });
}

function changePackageJson(filePath) {
    fs.readFile(filePath, function (err, data) {
        if (err) {
            reject(err);
            return console.error(err);
        }
        let tempData = JSON.parse(data);
        tempData.version = version;
        tempData = JSON.stringify(tempData, null, 4);
        
        fs.writeFile(filePath,tempData,function(err){
            if(err){
                console.log("package.json文件写入失败")
            }else{
                console.log("package.json文件写入成功");
            }
        });
    });
}

(function changeFile() {
    for(let filePath of fileArray){
        if(filePath.includes('json')){
            changePackageJson(filePath);
        }else{
            appendVersion(filePath);
        }
    }
})();


