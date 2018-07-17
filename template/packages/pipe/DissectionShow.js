/**
 * Created by Administrator on 2018/6/4 0004.
 */
export const dissectionShow  = {}


dissectionShow.data ={};


//保存canvas 常量
dissectionShow.canvasId = "";
dissectionShow.font = "bold 10px 微软雅黑";
dissectionShow.font1= "bold 8px 微软雅黑";


//canvas 相对偏移 像素
dissectionShow.offsetX = 20;
dissectionShow.offsetY = 50;

//纵轴的最大深度 米
dissectionShow.maxHeight = 7;

//管径缩放比例
dissectionShow.gjmax = 0.05;

dissectionShow.drawPipe = function (canvasId,data) {
  dissectionShow.canvasId = canvasId;
  let myCanvas =  document.getElementById(dissectionShow.canvasId);
  let cxt =  myCanvas.getContext("2d");


  var ratio = dissectionShow.getPixelRatio(cxt);

  myCanvas.style.width = myCanvas.width + 'px';
  myCanvas.style.height = myCanvas.height + 'px';
  myCanvas.width = myCanvas.width * ratio;
  myCanvas.height = myCanvas.height * ratio;
  // 放大倍数
  cxt.scale(ratio, ratio);


  cxt.clearRect(0,0,myCanvas.width,myCanvas.height);

  dissectionShow.addTitle(cxt,myCanvas);

  dissectionShow.addEndLine(cxt,myCanvas,data.line);

  dissectionShow.addGroundLine(cxt,myCanvas,data.line);
  dissectionShow.addGroundLineText(cxt,myCanvas,data.line,data.pipes);

  for(let item of data.pipes){
    dissectionShow.addPipeLine(cxt,myCanvas,data.line,item);
    dissectionShow.addPipeGj(cxt,myCanvas,data.line,item);
  }

  dissectionShow.addDiagram(cxt,myCanvas,data.pipes);

}

//顶部文字说明
dissectionShow.addTitle = function(cxt,myCanvas) {

  let text = "管线横断面分析";
  cxt.font = dissectionShow.font
  cxt.fillStyle = "black";
  cxt.fillText(text,myCanvas.width/2 - cxt.measureText(text).width, dissectionShow.offsetY/2 );

  let text2 = "单位：米";
  cxt.font = dissectionShow.font1
  cxt.fillStyle = "black";
  cxt.fillText(text2,myCanvas.width - cxt.measureText(text2).width, dissectionShow.offsetY/2 + 10 );
}


dissectionShow.getPixelRatio = function (cxt) {
  var backingStore = cxt.backingStorePixelRatio ||
    cxt.webkitBackingStorePixelRatio ||
    cxt.mozBackingStorePixelRatio ||
    cxt.msBackingStorePixelRatio ||
    cxt.oBackingStorePixelRatio ||
    cxt.backingStorePixelRatio || 1;
  return (window.devicePixelRatio || 1) / backingStore;
};


//图例说明
dissectionShow.addDiagram = function(cxt,myCanvas,arr){

  let dobj = new Object();
  for(let item of arr){
    if(!dobj[item.name]){
      dobj[item.name] =  item.color;
    }
  }

  let textHeight = myCanvas.height - myCanvas.height/8;
  for(let item in dobj){
    let text2 = item + ":";
    cxt.font = dissectionShow.font1;
    cxt.fillStyle = "black";
    cxt.fillText(text2,myCanvas.width - myCanvas.width/6 ,textHeight  );

    cxt.beginPath();
    cxt.moveTo(myCanvas.width - myCanvas.width/6 + cxt.measureText(text2).width + 10, textHeight - 3.5);
    cxt.lineTo(myCanvas.width - myCanvas.width/6 + cxt.measureText(text2).width + 80,textHeight - 3.5);
    cxt.strokeStyle = dobj[item];
    cxt.lineWidth = "2";
    cxt.stroke();

    textHeight = textHeight - 20;

  }
}

//绘制平面的线
dissectionShow.addGroundLine = function(cxt,myCanvas,node) {

  cxt.beginPath();

  cxt.moveTo(node.start  ,dissectionShow.offsetY );
  cxt.lineTo(myCanvas.width ,dissectionShow.offsetY);
  cxt.strokeStyle="#040920";
  cxt.lineWidth="5";
  cxt.stroke();
}

//底部的线
dissectionShow.addEndLine = function(cxt,myCanvas,node){

  cxt.beginPath();
  cxt.moveTo(node.start ,myCanvas.height -10);
  cxt.lineTo(myCanvas.width ,myCanvas.height -10);
  cxt.strokeStyle="#ff1a21";
  cxt.lineWidth="1";
  cxt.stroke();
}



//绘制底部管与管的标识
dissectionShow.addGroundLineText = function(cxt,myCanvas,line,arr){
  for(let i = 0; i < arr.length; i++){
    if(i + 1 < arr.length){

      let arrowStart = (arr[i].start  / line.end) * myCanvas.width;
      let arrowEnd =     (arr[i + 1].start  / line.end) * myCanvas.width;
      dissectionShow.drawArrow(cxt,arrowStart,myCanvas.height -10,arrowEnd,myCanvas.height -10,30,15,1,"#f36");

      //添加管线间距离文本

      let text = (arr[i+1].start - arr[i].start).toFixed(2);
      let textStart  = (arrowEnd - arrowStart)/2 + arrowStart;

      cxt.font = dissectionShow.font1
      cxt.fillStyle = "black";
      cxt.fillText(text,textStart,myCanvas.height -20);
    }
  }
}





//绘制地下管线
dissectionShow.addPipeLine = function(cxt,myCanvas,line,node) {
  cxt.beginPath();
  let newStart = (node.start  / line.end) * myCanvas.width;

  cxt.moveTo(newStart ,dissectionShow.offsetY);


  let newns =  (node.ms  / dissectionShow.maxHeight) * (myCanvas.height - dissectionShow.offsetY);
  cxt.lineTo(newStart ,dissectionShow.offsetY + newns);
  cxt.strokeStyle=node.color;
  cxt.lineWidth="2";
  cxt.stroke();

  let text = "埋深："+ node.ms.toFixed(2);
  cxt.font = dissectionShow.font;
  cxt.fillStyle = "black";
  cxt.fillText(text,newStart + 10,(newns)/2 + dissectionShow.offsetY);

}



//绘制管径
dissectionShow.addPipeGj = function(cxt,myCanvas,line,node){

  cxt.beginPath();
  let newStart = (node.start  / line.end) * myCanvas.width;
  let newns =  (node.ms  / dissectionShow.maxHeight) *(myCanvas.height - dissectionShow.offsetY);
  let newgj = node.gj * dissectionShow.gjmax;

  cxt.arc(newStart,newns + newgj + dissectionShow.offsetY,newgj,0,360 * Math.PI/180,true);
  cxt.strokeStyle = node.color;
  cxt.closePath();
  cxt.stroke();

  let text = node.gj + "MM";
  cxt.font = dissectionShow.font;
  cxt.fillStyle = "black";
  cxt.fillText(text,newStart,newns + newgj * 2 + dissectionShow.offsetY + 20);

}


//画箭头 抄的
dissectionShow.drawArrow = function(ctx, fromX, fromY, toX, toY, theta, headlen, width, color) {
  theta = typeof(theta) != 'undefined' ? theta : 30;
  headlen = typeof(theta) != 'undefined' ? headlen : 10;
  width = typeof(width) != 'undefined' ? width : 1;
  color = typeof(color) != 'color' ? color : '#000';
  let angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI, angle1 = (angle + theta) * Math.PI / 180, angle2 = (angle - theta) * Math.PI / 180, topX = headlen * Math.cos(angle1), topY = headlen * Math.sin(angle1), botX = headlen * Math.cos(angle2), botY = headlen * Math.sin(angle2);
  ctx.save();
  ctx.beginPath();
  var arrowX = fromX - topX, arrowY = fromY - topY;
  ctx.moveTo(arrowX, arrowY);
  ctx.lineTo(fromX, fromY);
  arrowX = fromX - botX;
  arrowY = fromY - botY;
  ctx.lineTo(arrowX, arrowY);
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);

  arrowX = toX + topX;
  arrowY = toY + topY;
  ctx.moveTo(arrowX, arrowY);
  ctx.lineTo(toX, toY);
  arrowX = toX + botX;
  arrowY = toY + botY;
  ctx.lineTo(arrowX, arrowY);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
  ctx.restore();
}
