//=============================================================================
// Drill_EventSelfSwitch.js
//=============================================================================

/*:
 * @plugindesc [v1.1]        物体 - 独立开关
 * @author Drill_up
 * 
 * 
 * @help  
 * =============================================================================
 * +++ Drill_EventSelfSwitch +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 你可以通过设置事件拥有更多的独立开关，并操作独立开关。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 设置
 * 要设置更多的独立开关，直接在指定页添加下面的注释即可：
 * 
 * 事件注释：=>独立开关为ON条件 : E
 * 事件注释：=>独立开关为ON条件 : F
 * 事件注释：=>独立开关为ON条件 : G
 *
 * 可以一直填到Z，或者AA、AB、AC……无穷无尽。
 * 如果注释与独立开关设置同时存在，注释会覆盖设置。
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件 - 使用
 * 要设置开启指定的独立开关，直接使用插件指令即可：
 * 
 * 插件指令：>独立开关 : E : 开启
 * 插件指令：>独立开关 : F : 开启
 * 插件指令：>独立开关 : G : 关闭
 *
 * 该插件指令只作用于本事件，并且对独立开关A、B、C、D也有效果。
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你还可以通过插件指令控制其他独立开关：
 * 
 * 插件指令：>指定事件的独立开关 : 1 : E : 开启
 * 插件指令：>指定事件的独立开关 : 1 : F : 关闭
 * 插件指令：>指定事件的独立开关 : 1,2,3,4,5 : A : 开启
 *
 * 1.数字对应了当前地图的事件的id。
 * 2.你可以用逗号隔开，表示多个事件的id，批量控制。
 * 3.该插件指令不建议放在并行事件中频繁使用，因为频繁去干扰其它事件的独立开关，
 * 容易造成游戏卡顿。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 添加了批量操作事件独立开关的插件指令。
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		临时全局变量	DrillUp.xxx
//		临时局部变量	无
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		原理精确定位了，就比较好写。直接在地图读取的时候对所有注释遍历。
//

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_EventSelfSwitch = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_EventSelfSwitch');

	
//=============================================================================
// * 插件指令
//=============================================================================
var _drill_SelfSwitch_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_SelfSwitch_pluginCommand.call(this, command, args);
	if (command === '>独立开关') {
		if(args.length == 4){
			var temp1 = String(args[1]);
			var temp2 = String(args[3]);
			
			if( temp2 == "开启" ){
				var key = [this._mapId, this._eventId, temp1 ];
				$gameSelfSwitches.setValue(key,true);
			}else{
				var key = [this._mapId, this._eventId, temp1 ];
				$gameSelfSwitches.setValue(key,false);
			}
			
		}
	}
	if (command === '>指定事件的独立开关') {
		if(args.length == 6){
			var temp1 = String(args[1]);
			var temp2 = String(args[3]);
			var temp3 = String(args[5]);
			if( !temp1.contains(",") && !temp1.contains("，") ){
				if( temp3 == "开启" ){
					var key = [this._mapId, Number(temp1), temp2 ];
					$gameSelfSwitches.setValue(key,true);
				}else{
					var key = [this._mapId, Number(temp1), temp2 ];
					$gameSelfSwitches.setValue(key,false);
				}
			}else{
				var need_reflash = false;
				var ids = temp1.split(/[,，]/);
				for(var i = 0; i<ids.length; i++){
					if( temp3 == "开启" ){
						var s_key = [this._mapId, Number(ids[i]), temp2 ];
						if( $gameSelfSwitches.value(s_key) !== true){
							$gameSelfSwitches.drill_setValueWithOutChange(s_key,true);
							need_reflash = true;
						}
					}else{
						var s_key = [this._mapId, Number(ids[i]), temp2 ];
						if( $gameSelfSwitches.value(s_key) !== false){
							$gameSelfSwitches.drill_setValueWithOutChange(s_key,false);
							need_reflash = true;
						}
					}
				}
				if(need_reflash){
					$gameMap.requestRefresh();	//变化后手动刷新
				}
			}
		}
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

//==============================
// * 独立开关
//==============================
var _drill_SelfSwitch_onMapLoaded = Scene_Map.prototype.onMapLoaded;
Scene_Map.prototype.onMapLoaded = function() {
	//该位置$dataMap数据正好载入完全，在这里重刷独立开关
	for( var i in $dataMap.events ){
		var e = $dataMap.events[i];
		if ( e ) { for( var j in e.pages ){
			var page = e.pages[j];
			if ( page ) { for( var k in page.list ){
				var l = page.list[k];
				if (l.code === 108) {
					var args = l.parameters[0].split(' ');
					var command = args.shift();
					if (command == "=>独立开关为ON条件"){	//=>独立开关为ON条件 : A
						if(args.length == 2){
							var temp1 = String(args[1]);
							page.conditions.selfSwitchValid = true;
							page.conditions.selfSwitchCh = temp1;
							break;
						}
					};
				};
			}};
		}}
	}
	_drill_SelfSwitch_onMapLoaded.call(this);
};

