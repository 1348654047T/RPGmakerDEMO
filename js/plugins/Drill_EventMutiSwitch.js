//=============================================================================
// Drill_EventMutiSwitch.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        物体 - 计数开关
 * @author Drill_up
 *
 * 
 * @help  
 * =============================================================================
 * +++ Drill_EventMutiSwitch +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 你可以设置多个钥匙/开关，来开启特定的锁/门。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.所有相关的开关、锁必须在同一张地图中。
 * 2.钥匙的设置不跨事件页。锁的设置是跨事件页的，锁设置后，永久有效。
 * 3.最好不要把钥匙和锁的注释写在同一个事件里面，你的先后逻辑会混乱。
 * 4.游戏设计中，你还需要考虑设计一个缓冲动画，即大门打开，大门关闭的过程。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 钥匙
 * 你需要设置指定开关为某个钥匙，使用下面的注释：
 * （注意，冒号左右有一个空格）
 * 
 * 事件注释：=>计数开关 : 钥匙 : 红机关
 *
 * 1.其中"红机关"是完全可以自定义的条件关键字。
 * 2.钥匙的设置不跨事件页，事件页有钥匙的注释，即钥匙+1。
 * 如果没有注释，则退回钥匙。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 锁
 * 你需要设置指定门给它上某种锁，使用下面的注释：
 * （注意，冒号左右有一个空格）
 *
 * 事件注释：=>计数开关 : 锁 : 红机关 : 4 : 触发独立开关 : A
 * 事件注释：=>计数开关 : 锁 : 红机关 : 不满足条件自动OFF
 *
 * 1.红机关后面的数字为满足条件，达到满足的钥匙数量后开启独立开关。
 * 2.你可以设置多个钥匙对应一把锁，或者一个钥匙对应多把锁，多对多也可以。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		临时全局变量	DrillUp.xxx
//		临时局部变量	this.drill_xxx
//		存储数据变量	$gameMap.drill_mutiSwitch_needReflash （不完全算存储，离开地图就被清除重做）
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		每次改变事件页的时候，检查一遍钥匙，根据钥匙开启锁。
//	
//		优化算法：	1.如果地图里面一个计数开关都没有，则不作多余计算。
//					2.统计全部条件放在update里面，侦测到setupPage才执行一次，因为setupPage有可能会在一帧里面刷很多次。
//

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_EventMutiSwitch = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_EventMutiSwitch');


//=============================================================================
// ** 事件注释初始化
//=============================================================================
var _drill_mutiSwitch_event_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
	_drill_mutiSwitch_event_setupPage.call(this);
    this.drill_setupMutiSwitch();
};
Game_Event.prototype.drill_setupMutiSwitch = function() {		
	if( this._drill_mutiSwitch == undefined){	//初始化
		this._drill_mutiSwitch = {};
		this._drill_mutiSwitch.keys = {};
		this._drill_mutiSwitch.autoOff = {};
		this._drill_mutiSwitch.locks = {};
	}
	this._drill_mutiSwitch.keys = {};	//每次刷事件页时，更新keys
	
	if (!this._erased && this.page()) {this.list().forEach(function(l) {
		if (l.code === 108) {
			var args = l.parameters[0].split(' ');
			var command = args.shift();
			if (command == "=>计数开关"){
				if(args.length == 4){	//=>计数开关 : 钥匙 : 四开关的机关
					var temp1 = String(args[1]);
					var temp2 = String(args[3]);
					if( temp1 == "钥匙" ){
						this._drill_mutiSwitch.keys[temp2] = true;
					}
				}
				if(args.length >= 6){	//=>计数开关 : 锁 : 四开关的机关 : 4 : 触发独立开关 : A
					var temp1 = String(args[1]);
					var temp2 = String(args[3]);
					var temp3 = String(args[5]);
					var temp4 = String(args[7]);
					var temp5 = String(args[9]);
					if( temp1 == "锁" ){
						if( temp3 == "不满足条件自动OFF" ){
							this._drill_mutiSwitch.autoOff[temp2] = true;
						}else{
							if( temp4 == "触发独立开关" ){
								this._drill_mutiSwitch.locks[temp2] = Number(temp3);
								this._drill_mutiSwitch.self_switch = temp5;
							}
						}
					}
				}
				$gameMap._drill_has_any_mutiSwitch = true;
			};
		};
	}, this);};
	
	$gameMap.drill_mutiSwitch_needReflash = true;	//默认都刷新（有注释，少了注释，都有影响）
};

//==============================
// * 读取地图
//==============================
var _drill_mutiSwitch_onMapLoaded = Scene_Map.prototype.onMapLoaded;
Scene_Map.prototype.onMapLoaded = function() {
	this._drill_has_any_mutiSwitch = false;		//如果地图里面一个计数开关都没有，则不作多余计算
	_drill_mutiSwitch_onMapLoaded.call(this);
};
//=============================================================================
// ** 地图帧刷新
//=============================================================================
var _drill_mutiSwitch_map_update = Game_Map.prototype.update;
Game_Map.prototype.update = function(sceneActive) {
	_drill_mutiSwitch_map_update.call(this,sceneActive);
	
	//在刷新启动时，刷新全部
	if( this._drill_has_any_mutiSwitch == true && this.drill_mutiSwitch_needReflash == true ){
		this.drill_mutiSwitch_needReflash = false;
		this.drill_reflashMutiSwitch();
	}
};

//=============================================================================
// ** 统计全部条件，并触发开关
//=============================================================================
Game_Map.prototype.drill_reflashMutiSwitch = function() {	//该函数每次改变时只进入一次，而不是不停刷新
	var events = this.events();
	var need_reflash = false;	
	
	//钥匙统计
	var all_keys = {};
	for (var i = 0; i < events.length; i++) {  
		var temp_event = events[i];
		var temp_keys = temp_event._drill_mutiSwitch.keys;
		for(var key in temp_keys ){
			if( temp_keys[key] == true ){
				//添加钥匙
				if( all_keys[key] == undefined ){
					all_keys[key] = 1;
				}else{
					all_keys[key] += 1;
				}
			}
		}
	}
	//alert(JSON.stringify(all_keys));
	
	//条件开锁
	for (var i = 0; i < events.length; i++) {  
		var temp_event = events[i];
		var temp_locks = temp_event._drill_mutiSwitch.locks;
		var temp_autoOff = temp_event._drill_mutiSwitch.autoOff;
		for(var lock in temp_locks ){
			if( all_keys[lock] == undefined ){
				all_keys[lock] = 0;
			}
			if( all_keys[lock] >= temp_locks[lock] ){	//满足足够多的锁条件，开锁
				var s_key = [this._mapId, temp_event._eventId, temp_event._drill_mutiSwitch.self_switch ];
				if( $gameSelfSwitches.value(s_key) !== true){
					$gameSelfSwitches.drill_setValueWithOutChange(s_key,true);
					need_reflash = true;
				}
			}else if( temp_autoOff[lock] == true ){	//不满足时，上锁
				var s_key = [this._mapId, temp_event._eventId, temp_event._drill_mutiSwitch.self_switch ];
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


