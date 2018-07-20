import EventEmitter from 'wolfy87-eventemitter'
export const hotKey = {};

hotKey.init = function (helpKeyType = "shift") {
    hotKey.bus = new EventEmitter;
    hotKey.watchKeyUp();
};

hotKey.emulateKeyCode = function (helpKeyType) {

};

hotKey.watchKeyUp = function () {
    document.addEventListener("keyup",function (event) {
        event.stopPropagation();
        let keyCode = event.keyCode;
        if(event && keyCode && event.shiftKey){
            switch (keyCode){
                case 49:
                    hotKey.bus.emit("upNum1");
                    break;
                case 50:
                    hotKey.bus.emit("upNum2");
                    break;
                case 52:
                    hotKey.bus.emit("upNum3");
                    break;
                case 53:
                    hotKey.bus.emit("upNum4");
                    break;
                case 54:
                    hotKey.bus.emit("upNum5");
                    break;
                case 55:
                    hotKey.bus.emit("upNum6");
                    break;
            }
        }
    })
};

hotKey.init();


