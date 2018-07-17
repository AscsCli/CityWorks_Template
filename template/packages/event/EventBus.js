/**
 * Created by Administrator on 2017/4/11 0011.
 */
import EventEmitter from 'wolfy87-eventemitter'
export const eventBus = {}

eventBus.bus= new EventEmitter();

/**
 * 测量长度
 * @type {string}
 */
eventBus.LENGTH = 'LENGTH';
/**
 *测量面积
 * @type {string}
 */
eventBus.AREA = 'AREA';
/**
 *测量坐标
 * @type {string}
 */
eventBus.COORD = 'COORD';
/**
 *点选查询
 * @type {string}
 */
eventBus.MOUSE_CLICK_QUERY = 'MOUSE_CLICK_QUERY';
/**
 * 地图联动时候发出的extent
 * @type {string}
 */
eventBus.MAP_EXTENT_CHANGE = 'MAP_EXTENT_CHANGE';
/**
 * 图层config加载完毕
 * @type {string}
 */
eventBus.CONFIG_LOAD = 'CONFIG_LOAD';
/**
 * 打印完毕
 * @type {string}
 */
eventBus.PRINT_RESULT = 'PRINT_RESULT';
/**
 *
 * @type {string}
 */
eventBus.TWO_TRANSFORM = 'TWO_TRANSFORM';
/**
 * 分屏
 * @type {string}
 */
eventBus.SPLIT_SCREEN = 'SPLIT_SCREEN';
/**
 * 图层开启事件
 * @type {string}
 */
eventBus.LAYER_VISIBLE_CHANGE = 'LAYER_VISIBLE_CHANGE';
/**
 * 时态图层添加事件
 * @type {string}
 */
eventBus.LAYER_TIMER_ADD = 'LAYER_TIMER_ADD';
/**
 * 地图加载完毕事件
 * @type {string}
 */
eventBus.MAP_IS_LOAD = 'MAP_IS_LOAD';
