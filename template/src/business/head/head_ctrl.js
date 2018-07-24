import { EventBus } from "../../eventBus/eventBus.js"

EventBus.bus.addListener(EventBus.HEAD_ICON_2D,function (value) {
    console.log(value);
});