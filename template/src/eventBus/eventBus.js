import EventEmitter from 'wolfy87-eventemitter'
export const EventBus = {};
/**
 * 创建一个事件总线实例
 * */
EventBus.bus = new EventEmitter;
/**
 * head中对应icon 3D事件
 */
EventBus.HEAD_ICON_3D = "HEAD_ICON_3D";
/**
 * head中对应icon 2D事件
 */
EventBus.HEAD_ICON_2D = "HEAD_ICON_2D";
/**
 * 左侧第一列 行政区域等事件
 */
EventBus.LEFT_FIRSTC = "LEFT_FIRSTC";

/**
 * 左侧第二列,2D详细列表事件
 */
EventBus.LEFT_DETAIL_2D = "LEFT_DETAIL_2D";
/**
 * 左侧第二列,3D详细列表事件
 */
EventBus.LEFT_DETAIL_3D = "LEFT_DETAIL_3D";

/**
 * 中间tab栏点击2D功能模块
 */
EventBus.CENTER_TAB_2D = "CENTER_TAB_2D";
/**
 * 中间tab栏点击3D功能模块
 * @type {string}
 */
EventBus.CENTER_TAB_3D = "CENTER_TAB_3D";