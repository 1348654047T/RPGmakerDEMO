//=============================================================================
// Drill_EventDuplicator.js
//=============================================================================

/*:
 * @plugindesc [v1.1]        物体 - 事件复制器
 * @author Drill_up
 * 
 * @help  
 * =============================================================================
 * +++ Drill_EventDuplicator +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 你可以通过插件指令复制一个事件。
 * 复制的事件是临时的，离开地图后消失。
 * 
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 该插件可以单独使用。有部分插件依赖该插件。
 * 扩展于：
 *   - Drill_BombCore 炸弹人-游戏核心
 *     目标插件基于该插件才能进行对炸弹的基本操作。
 * 
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.复制器不建议复制自身，因为会出现死循环。
 * 2.复制出来的事件独立开关是全部关闭的，不会随 复制源 变化。
 * 3.注意，该指令在进入地图后立即使用可能没有效果，因为这时正在初
 *   始化外部地图数据。
 * 4.你可以设置初始事件透明，配合 事件显现动作 插件，使得事件像是
 *   跳出来或者召唤出来一样。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 复制本图事件
 * 你可以通过插件指令手动修改生成的一些基本设置。
 *
 * 插件指令：>事件复制器 : 复制本图事件 : 1 : 事件位置 : 4
 * 插件指令：>事件复制器 : 复制本图事件 : 1 : 指定位置 : 4 : 4
 *
 * 1.第一条参数为：被复制的事件id，复制到位置的事件id
 * 2.第二条参数为：被复制的事件id，复制到位置x，复制到位置y
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件 - 复制其他图事件
 * 你可以通过插件指令手动修改生成的一些基本设置。
 *
 * 插件指令：>事件复制器 : 复制其他图事件 : 1 : 3 : 事件位置 : 4
 * 插件指令：>事件复制器 : 复制其他图事件 : 1 : 3 : 指定位置 : 4 : 4
 * 
 * 1.第一条参数为：地图id，被复制的事件id，复制到位置的事件id
 * 2.第二条参数为：地图id，被复制的事件id，复制到位置x，复制到位置y
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 初始透明
 * 你也可以设置初始的事件的透明情况。
 *
 * 插件指令：>事件复制器 : 事件透明开启
 * 插件指令：>事件复制器 : 事件透明关闭
 * 
 * 1.透明开启后，接下来复制的全部事件，都是透明的。并且永久有效。
 *   你需要根据情况手动关闭。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 获取新事件id
 * 你可以通过插件指令获取到复制的新事件的id：
 * 
 * 插件指令：>事件复制器 : 获取上一个复制事件的id : 25
 * 
 * 1.数字是 变量 的编号，新事件的id会被复制到这个变量的值中。
 * 
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 添加了初始透明、获取新事件的id功能。
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		EDu （Event_Duplicator）
//		临时全局变量	无
//		临时局部变量	无
//		存储数据变量	$gameSystem._drill_EDu_xxxx
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		先有事件数据，再通过事件数据new事件。
//
//		上一个复制事件的id，只在插件指令中记录。（其它插件调用复制核时，并不会把id告诉这个插件。）
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_EventDuplicator = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_EventDuplicator');
	
	
//=============================================================================
// * 插件指令
//=============================================================================
var _drill_EDu_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_EDu_pluginCommand.call(this, command, args);
	if (command === '>事件复制器') {
		if(args.length >= 8){
			var type = String(args[1]);
			var temp1 = Number(args[3]);
			var pos = String(args[5]);
			var temp2 = Number(args[7]);
			if(args[9]){ var temp3 = Number(args[9]) };
			
			if( type == "复制本图事件" ){
				if( pos == "指定位置" ){
					var data = JSON.parse(JSON.stringify($gameMap.event(temp1).event()));
					data['x'] = temp2;
					data['y'] = temp3;
					if( !data['meta'] ){ data['meta'] = {}; }		//镜像错误兼容
					var e = $gameMap.drill_newEvent_createEvent( data );
					$gameSystem._drill_EDu_last_id = e._eventId;
					if($gameSystem._drill_EDu_is_opacity){ e._opacity = 0; }
				}
				if( pos == "事件位置" ){
					var data = JSON.parse(JSON.stringify($gameMap.event(temp1).event()));
					data['x'] = $gameMap.event(temp2)._x;
					data['y'] = $gameMap.event(temp2)._y;
					if( !data['meta'] ){ data['meta'] = {}; }		//镜像错误兼容
					var e = $gameMap.drill_newEvent_createEvent( data );
					$gameSystem._drill_EDu_last_id = e._eventId;
					if($gameSystem._drill_EDu_is_opacity){ e._opacity = 0; }
				}
			}
		}
		if(args.length >= 10){
			var type = String(args[1]);
			var temp1 = Number(args[3]);
			var temp2 = Number(args[5]);
			var pos = String(args[7]);
			var temp3 = Number(args[9]);
			if(args[11]){ var temp4 = Number(args[11]) };
			
			if( type == "复制其他图事件" ){
				if( pos == "指定位置" ){
					var map_data = DataManager.drill_getMapData(temp1);
					if( map_data ){
						var data = JSON.parse(JSON.stringify( map_data.events[temp2] ));
						data['x'] = temp3;
						data['y'] = temp4;
						if( !data['meta'] ){ data['meta'] = {}; }		//镜像错误兼容
						var e = $gameMap.drill_newEvent_createEvent( data );
						$gameSystem._drill_EDu_last_id = e._eventId;
						if($gameSystem._drill_EDu_is_opacity){ e._opacity = 0; }
					}
				}
				if( pos == "事件位置" ){
					var map_data = DataManager.drill_getMapData(temp1);
					if( map_data ){
						var data = JSON.parse(JSON.stringify( map_data.events[temp2] ));
						data['x'] = $gameMap.event(temp3)._x;
						data['y'] = $gameMap.event(temp3)._y;
						if( !data['meta'] ){ data['meta'] = {}; }		//镜像错误兼容
						var e = $gameMap.drill_newEvent_createEvent( data );
						$gameSystem._drill_EDu_last_id = e._eventId;
						if($gameSystem._drill_EDu_is_opacity){ e._opacity = 0; }
					}
				}
			}
		}
		if(args.length == 2){
			var type = String(args[1]);
			if( type == "事件透明开启" ){
				$gameSystem._drill_EDu_is_opacity = true;
			}
			if( type == "事件透明关闭" ){
				$gameSystem._drill_EDu_is_opacity = false;
			}
		}
		if(args.length == 4){
			var type = String(args[1]);
			var temp1 = Number(args[3]);
			if( type == "获取上一个复制事件的id" ){
				$gameVariables.setValue(temp1, $gameSystem._drill_EDu_last_id);
			}
		}
	}
};

//=============================================================================
// ** 存储变量初始化
//=============================================================================
var _drill_EDu_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    _drill_EDu_sys_initialize.call(this);
	this._drill_EDu_last_id = 0;
	this._drill_EDu_is_opacity = false;
}
//=============================================================================
// * 插件指令解析（预加载地图数据）
//=============================================================================
var _drill_EDu_onMapLoaded = Scene_Map.prototype.onMapLoaded;
Scene_Map.prototype.onMapLoaded = function() {
	var temp_map = {};
	var dataString = JSON.stringify( $dataMap.events );
	var matches = dataString.match(/>事件复制器 : 复制其他图事件 : (\d+) :/g) ;
	if(matches){
		for( var i=0; i< matches.length; i++ ){
			var str = matches[i].match(/>事件复制器 : 复制其他图事件 : (\d+) :/);
			temp_map[Number(str[1])] = true;
		}
		for (var key in temp_map) {
			DataManager.drill_loadMapData( key );
		}
	}
    _drill_EDu_onMapLoaded.call(this);
};
	
//=============================================================================
// * 	地图读取器
//		
//		功能：		通过调用主函数，返回一个地图json类。
//					注意，由于含有请求关系，如果未提前加载，则不能立即返回数据。
//		可选项：	无
//		主函数：	var map_data = DataManager.drill_loadMapFile( map_id );
//=============================================================================
if( typeof(DataManager.drill_loadMapData) == "undefined" ){	//防止重复定义
	
	//==============================
	// * 获取资源
	//==============================
	DataManager.drill_getMapData = function(map_id) {
		var map_data = window[ "_drill_mapData_"+map_id ];
		if( map_data == undefined ){
			DataManager.drill_loadMapData(map_id);
			return null;
		}else{
			return map_data;
		}
	}
	//==============================
	// * 读取资源
	//==============================
	DataManager.drill_loadMapData = function(map_id) {
		if (map_id > 0 && window[ "_drill_mapData_"+map_id ] == undefined ) {
			var filename = 'Map%1.json'.format(map_id.padZero(3));
			var param_name = "_drill_mapData_" + map_id;
			
			ResourceHandler.createLoader('data/' + filename, this.loadDataFile.bind(this, param_name, filename));		//（this._mapLoader是一个完全没用的变量）
			this.loadDataFile(param_name, filename);
		}
	};

}

//=============================================================================
// * 	事件容器
//
//		功能：		通过调用主函数，快速新建一个事件。（rmmv的事件移除后，页面信息全部清null，不影响内存）
//		可选项：	无
//		主函数：	var event = $gameMap.drill_newEvent_createEvent( data );
//		坑：		事件的独立开关是独立于事件的，需要额外刷新。
//=============================================================================
if( typeof(_drill_newEvent_event) == "undefined" ){	//防止重复定义

	//==============================
	// ** 地图 - 初始化
	//==============================
	var _drill_newEvent_initialize = Game_Map.prototype.initialize;
	Game_Map.prototype.initialize = function() {
		_drill_newEvent_initialize.call(this);
		this._drill_newEvents_data = [];
	}
	//==============================
	// ** 地图 - 初始化（刷地图时）
	//==============================
	var _drill_newEvent_setup = Game_Map.prototype.setup;
	Game_Map.prototype.setup = function(mapId) {
		_drill_newEvent_setup.call(this,mapId);
		this._drill_newEvents_data = [];
	}
	//==============================
	// ** 地图 - 创建事件
	//==============================
	Game_Map.prototype.drill_newEvent_createEvent = function( data ) {
		var new_id = $dataMap.events.length + this._drill_newEvents_data.length;	//注意，$dataMap 和 $gameMap._events 存在数量不一致的情况
		data['id'] = new_id;
		this._drill_newEvents_data.push(data);
		
		$gameSelfSwitches.drill_newEvent_clearKeys(this._mapId, new_id );
		
		var new_event = new Game_Event(this._mapId, new_id);
		this._events[new_id] = new_event;
		
		SceneManager._scene._spriteset.drill_newEvent_createSprite(new_event);
		return new_event;
	}
	//==============================
	// ** 事件 - 获取数据
	//==============================
	var _drill_newEvent_event = Game_Event.prototype.event;
	Game_Event.prototype.event = function() {
		if( Number(this._eventId) >= $dataMap.events.length ){	//新建的事件id >= map.json本体的事件数量
			for(var i = 0; i< $gameMap._drill_newEvents_data.length; i++){
				if($gameMap._drill_newEvents_data[i]['id'] == this._eventId ){
					return $gameMap._drill_newEvents_data[i];
				}
			}
		}
		return _drill_newEvent_event.call(this);	//地图本体设置的事件
	};
	//==============================
	// * 独立开关 - 清除新事件的全部独立开关（不刷新地图）
	//==============================
	Game_SelfSwitches.prototype.drill_newEvent_clearKeys = function( map_id, e_id ) {
		var _keys = Object.keys(this._data);
		var d_keys = [];
		for(var i=0; i<_keys.length; i++){
			var key = _keys[i].split(",");
			if( Number(key[0]) == Number(map_id) && Number(key[1]) == Number(e_id) ){
				d_keys.push(_keys[i]);
			}
		}
		//if( d_keys.length > 0 ){	//检测id初始化前，就有的相关开启的独立开关
		//	alert(JSON.stringify(d_keys));
		//}
		for(var i=0; i<d_keys.length; i++){
			delete this._data[ d_keys[i] ];
		}
	};
	//==============================
	// ** 事件贴图 - 添加
	//==============================
	Spriteset_Map.prototype.drill_newEvent_createSprite = function(target) {
		this._characterSprites = this._characterSprites || [];
		var len = this._characterSprites.length;
		this._characterSprites[len] = new Sprite_Character(target);
		this._characterSprites[len].update();
		this._tilemap.addChild(this._characterSprites[len]);
	};

}


