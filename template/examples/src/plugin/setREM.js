// 根据屏幕大小及dpi调整缩放和大小
(function (doc, win) {
    var docEl = doc.documentElement
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    var recalc = function () {
        var clientWidth = window.outerWidth
        if (!clientWidth) {
            return
        }
        if (clientWidth < 1440) {
            clientWidth = 1440
        }
        docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px'
    }

    if (!doc.addEventListener) {
        return
    }
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
