/**
 * Created by Administrator on 2018/1/25 0025.
 */
export const setREM = {};

setREM.init = function () {
    /*
    * @author ysh
    * import之后计算rem的函数已经执行了，
    * init函数调用，只是为了让你感觉他被使用了，不要看到他没有引用就把他删了
    * */
};

//根据屏幕宽度，计算font-size
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth < 1920){
                clientWidth = 1920
            }
            var heightWidth = document.documentElement.clientHeight/document.documentElement.clientWidth
            if(heightWidth > 0.4){
              docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
            } else if(heightWidth <= 0.4){
              docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
            }


        };
    if (!doc.addEventListener) return;
    recalc();
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
