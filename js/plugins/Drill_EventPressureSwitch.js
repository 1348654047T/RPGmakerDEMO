//=============================================================================
// Drill_EventPressureSwitch.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        物体 - 重力开关
 * @author Drill_up
 *
 * 
 * @help  
 * =============================================================================
 * +++ Drill_EventPressureSwitch +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 任何事件踩到开关时，立即按下，离开开关时，立即弹出。
 * 要了解更详细的使用方法，去看看"关于开关设计与原理.docx"。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.重力开关可以做有按下与弹起的缓冲过程，需要你新写事件页来控制。
 * 2.重力开关的注释，最好在事件页ON与OFF处都写。
 * 3.重力开关二次迭代可以制作成脉冲开关，详细原理见docx文档。
 * 4.队伍跟随的成员不会对重力开关有任何影响，只有领队与npc可以。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 你需要设置指定开关为重力，使用下面的注释：
 * （注意，冒号左右有一个空格）
 * 
 * 事件注释：=>重力开关 : 作用于独立开关 : A
 *
 * 注意，这个注释需要在事件页A ON与事件页A OFF时都写。
 * 设置后，如果有事件或者玩家在重力开关位置，则
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 如果你要设置一个对重力开关不起作用的事件，可以添加下面注释：
 * （注意，冒号左右有一个空格）
 *
 * 事件注释：=>重力开关 : 关闭重力作用
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		临时全局变量	DrillUp.xxx
//		临时局部变量	this.drill_xxx
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		每次检查坐标情况，来确定开关是否被压住。
//	
//		优化算法：	1.如果地图里面一个重力开关都没有，则不作多余计算。
//

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_EventPressureSwitch = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_EventPressureSwitch');


//=============================================================================
// ** 事件注释初始化
//=============================================================================
var _drill_pressSwitch_event_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
	_drill_pressSwitch_event_setupPage.call(this);
    this.drill_setupPressSwitch();
};
Game_Event.prototype.drill_setupPressSwitch = function() {		
	if( this._drill_pressSwitch == undefined ){ 
		this._drill_pressSwitch = {};
	};
	if (!this._erased && this.page()) {this.list().forEach(function(l) {
		if (l.code === 108) {
			var args = l.parameters[0].split(' ');
			var command = args.shift();
			if (command == "=>重力开关"){
				if(args.length == 4){	//=>重力开关 : 作用于独立开关 : A
					var temp1 = String(args[1]);
					var temp2 = String(args[3]);
					if( temp1 == "作用于独立开关" ){
						this._drill_pressSwitch._switch = temp2;
					}
				}
				if(args.length == 2){	//=>重力开关 : 关闭重力作用
					var temp1 = String(args[1]);
					if( temp1 == "关闭重力作用" ){
						this._drill_pressSwitch._no_press = true;
					}
				}
				$gameMap._drill_has_any_pressSwitch = true;
			};
		};
	}, this);};
};

//==============================
// * 读取地图
//==============================
var _drill_pressSwitch_onMapLoaded = Scene_Map.prototype.onMapLoaded;
Scene_Map.prototype.onMapLoaded = function() {
	this._drill_has_any_pressSwitch = false;		//如果地图里面一个计数开关都没有，则不作多余计算
	_drill_pressSwitch_onMapLoaded.call(this);
};
//=============================================================================
// ** 地图帧刷新
//=============================================================================
var _drill_pressSwitch_map_update = Game_Map.prototype.update;
Game_Map.prototype.update = function(sceneActive) {
	_drill_pressSwitch_map_update.call(this,sceneActive);
	
	if( this._drill_has_any_pressSwitch == true ){
		this.drill_reflashPressSwitch();
	}
};

//=============================================================================
// ** 统计全部条件，并触发开关
//=============================================================================
Game_Map.prototype.drill_reflashPressSwitch = function() {
	var events = this.events();
	var need_reflash = false;	
	
	for (var i = 0; i < events.length; i++) {  
		var temp_event = events[i];
		if( temp_event._drill_pressSwitch._switch != undefined){
			//重力开关监听
			var isTriggered = false;
			if (temp_event._x == $gamePlayer._x && temp_event._y == $gamePlayer._y){
				isTriggered = true;
			}else{
				isTriggered = false;
			}
			for (var j = 0; j < events.length; j++) {
				var check_event = events[j];
				if( i == j || check_event._drill_pressSwitch._no_press == true ){  //排除 自己 + 无作用事件 
					continue;
				}
				if ( check_event.pos(temp_event._x,temp_event._y) ){
					isTriggered = true;
					break;
				}
			}
			if(isTriggered){
				var s_key = [this._mapId, temp_event._eventId, temp_event._drill_pressSwitch._switch ];
				if( $gameSelfSwitches.value(s_key) !== true){
					$gameSelfSwitches.drill_setValueWithOutChange(s_key,true);
					need_reflash = true;
				}
			}else{
				var s_key = [this._mapId, temp_event._eventId, temp_event._drill_pressSwitch._switch ];
				if( $gameSelfSwitches.value(s_key) !== false){
					$gameSelfSwitches.drill_setValueWithOutChange(s_key,false);
					need_reflash = true;
				}
			}
		}
	}
	
	if(need_reflash){
		$gameMap.requestRefresh();	//变化后手动刷新
	}
};

//==============================
// * 优化 - 独立开关赋值时不刷新地图
//==============================
Game_SelfSwitches.prototype.drill_setValueWithOutChange = function(key, value) {
    if (value) {
        this._data[key] = true;
    } else {
        delete this._data[key];
    }
};


