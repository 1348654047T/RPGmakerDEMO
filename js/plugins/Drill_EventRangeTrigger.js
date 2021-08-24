//=============================================================================
// Drill_EventRangeTrigger.js
//=============================================================================

/*:
 * @plugindesc [v1.4]        物体触发 - 固定区域 & 条件
 * @author Drill_up
 * 
 *
 * @param 是否修正区域判定
 * @type boolean
 * @on 修正
 * @off 不修正
 * @desc 修正后，没有完全离开触发区域的事件也会被捕获到，并触发。
 * @default true
 *
 * @param 自定义区域-1
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-2
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-3
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-4
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-5
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-6
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-7
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-8
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-9
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-10
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 * 
 *
 * @param 自定义区域-11
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-12
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-13
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-14
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-15
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-16
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-17
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-18
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-19
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-20
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-21
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-22
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-23
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-24
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-25
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-26
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-27
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-28
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-29
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-30
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-31
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-32
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-33
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-34
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-35
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-36
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-37
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-38
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-39
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-40
 * @parent ---自定义区域---
 * @type struct<RTriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 * 
 * @help  
 * =============================================================================
 * +++ Drill_EventRangeTrigger +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 使得事件能够触发 固定范围 + 条件标签 的事件的独立开关。
 * 物体触发为一系列特殊条件的触发，去看看"关于物体触发.docx"。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.当前触发分为两种：主动触发的事件 与 被触发的事件。
 * 2.被触发是一个点，主动触发是一个范围，范围内所有符合条件的点会被触发。
 *   固定区域必然穿透所有事件。
 * 3.通过插件指令主动触发，只触发一次，不是连续触发。
 * 4.你可以自定义条件关键字，用于连接不同的主动触发与被触发的事件。
 *  （你可以在同一个事件里设置多个被触发条件，主动触发也可以）
 * 5.触发独立开关后都是设置为ON。硬性规定。
 *  （程序上可以设置范围OFF独立开关，但是OFF情况更复杂，会使得事件页变混乱。）
 * 6.玩家自己没有独立开关的说法，不过你可以设置一个事件，时刻与玩家的位置一致，
 *   跟随控制玩家的状态、HP、死亡效果。
 * 7.播放动画分为"堵路"、"不堵路"、"全都"三种显示方式。
 *   设置"全都"，才是触发的实际全部区域。
 *  （动画与实际触发可以不完全一致，你需要留意该设置）
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 被触发
 * 如果你需要设置事件的被触发条件，使用下面事件注释：
 * （注意，冒号左右有空格）
 * 
 * 事件注释：=>被触发 : 击碎岩石 : 触发独立开关 : A
 * 事件注释：=>被触发 : 挥砍攻击 : 触发独立开关 : A
 *
 * 其中"击碎岩石"与"挥砍攻击"是完全可以自定义的条件关键字。
 * 设置后，如果主动触发的关键字与被动的对应上，将会触发开启独立开关。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 被触发
 * 你也可以通过插件指令设置被触发：
 * （注意，冒号左右有空格）
 * 
 * 插件指令：>被触发 : 设置 : 本事件 : 击碎岩石 : 触发独立开关 : A
 * 插件指令：>被触发 : 设置 : 指定事件 : 10 : 击碎岩石 : 触发独立开关 : A
 * 插件指令：>被触发 : 关闭 : 本事件 : 击碎岩石
 * 插件指令：>被触发 : 关闭 : 指定事件 : 10 : 击碎岩石
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 主动触发
 * 你可以通过插件指令设置触发的条件。
 * （注意，冒号左右有空格）
 *
 * 插件指令：>主动触发 : 本事件 : 菱形区域 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 方形区域 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 圆形区域 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 指定事件 : 10 : 菱形区域 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 指定事件 : 10 : 方形区域 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 指定事件 : 10 : 圆形区域 : 2 : 击碎岩石
 *
 * 1.区域后面的数字表示范围。
 * 2."击碎岩石"表示触发标志。在范围内的含有"击碎岩石"标志的被触发事件，
 * 会被开启相应的独立开关。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 主动触发
 * 你可以通过插件指令设置主动触发的自定义区域：
 * （注意，冒号左右有空格）
 *
 * 插件指令：>主动触发 : 本事件 : 自定义区域 : 2 : 挥砍攻击
 * 插件指令：>主动触发 : 指定事件 : 10 : 自定义区域 : 2 : 挥砍攻击
 *
 * 区域后面的数字表示自定义区域的id。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 更新了注释。以及 被触发 插件指令设置。
 * 添加了圆形区域设置。
 * [v1.2]
 * 修复了多个被触发注释对应错误开关的bug。
 * [v1.3]
 * 添加了十字区域设置。
 * [v1.4]
 * 修改了内部结构，并添加了触发修正。
 */
/*~struct~RTriArea:
 * 
 * @param 标签
 * @desc 只用于方便区分查看的标签，不作用在插件中。
 * @default ==新的自定义区域==
 * 
 * @param 区域图块
 * @type text[]
 * @desc 格式为"x,y",指定图块触发的区域。
 * @default ["0,0"]
 *
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		ERT （Event_Range_Trigger）
//		临时全局变量	DrillUp.g_ERT_xxx
//		临时局部变量	this._drill_ERT_xxxx
//		存储数据变量	【无】
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		触发可以是从一个点展开一个区域，但是，没有方向。
//		如果已事件为基准的话，事件有方向，就可以规划了。（变量还是不要开太多，开太多会增加复杂度）
//		（计算图块的坐标就非常绕，要注意）
//
//		该插件与【Drill_EventAutoTrigger】插件功能相互有交叉，但并不干扰对方，是独立的。
//
//		判定区域有一点不同，根据贴图的realX来判定是否在图块范围内。

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_EventRangeTrigger = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_EventRangeTrigger');

	DrillUp.g_ERT_fix = String(DrillUp.parameters['是否修正区域判定'] || "true") === "true";	
	
	DrillUp.g_ERT_area_max = 40;
	DrillUp.g_ERT_area = [];
	
	for (var i = 0; i < DrillUp.g_ERT_area_max; i++) {
		if( DrillUp.parameters['自定义区域-' + String(i+1) ] != "" ){
			DrillUp.g_ERT_area[i] = JSON.parse(DrillUp.parameters['自定义区域-' + String(i+1) ]);
			var area = JSON.parse( DrillUp.g_ERT_area[i]['区域图块'] );
			DrillUp.g_ERT_area[i]['tiles'] = [];
			for (var j = 0; j < area.length ; j++) {
				var x = Number(area[j].split(',')[0]);
				var y = Number(area[j].split(',')[1]);
				DrillUp.g_ERT_area[i]['tiles'].push({ 'x':x,'y':y });
			}
			//alert(JSON.stringify(DrillUp.g_ERT_area[i]));
		}else{
			DrillUp.g_ERT_area[i] = [];
		}
	}
	
//=============================================================================
// * 插件指令
//=============================================================================
var _drill_ERT_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_ERT_pluginCommand.call(this, command, args);
	if (command === '>主动触发') {
		if(args.length == 8){
			var temp1 = String(args[1]);
			var type = String(args[3]);
			var temp3 = String(args[5]);
			var temp4 = String(args[7]);
			
			if( temp1 == "本事件" ){	//主动触发 : 本事件 : 菱形区域 : 2 : 击碎岩石
				if( type == "自定义区域"){
					var e_id = this._eventId;
					var self_id = Number(temp3)-1;
					var tag = temp4;
					$gameMap.drill_ERT_triggerSelfArea( e_id, self_id, tag);
				}else{
					var e_id = this._eventId;
					var range = Number(temp3);
					var tag = temp4;
					$gameMap.drill_ERT_triggerTypeArea(e_id,type,range,tag);
				}
			}
			
		}
		if(args.length == 10){
			var temp1 = String(args[1]);
			var temp2 = Number(args[3]);
			var type = String(args[5]);
			var temp4 = String(args[7]);
			var temp5 = String(args[9]);
			
			if( temp1 == "指定事件" ){	//>主动触发 : 指定事件 : 10 : 菱形区域 : 2 : 击碎岩石
				if( type == "自定义区域"){	
					var e_id = temp2;
					var self_id = Number(temp4)-1;
					var tag = temp5;
					$gameMap.drill_ERT_triggerSelfArea( e_id, self_id, tag);
				}else{
					var e_id = temp2;
					var range = Number(temp4);
					var tag = temp5;
					$gameMap.drill_ERT_triggerTypeArea(e_id,type,range,tag);
				}
			}
		}
	}
	if (command === '>被触发') {
		if(args.length >= 6){
			var type = String(args[1]);
			var temp1 = String(args[3]);
			var temp2 = String(args[5]);
			if(args[7]){var temp3 = String(args[7]);}
			if(args[9]){var temp4 = String(args[9]);}
			
			if( type == "设置" ){
				if( temp1 == "本事件" ){
					if( temp3 == "触发独立开关"){
						var e_id = this._eventId;
						var e = $gameMap.event( e_id );
						e._drill_ERT.tags[temp2] = true;
						e._drill_ERT.self_switchs[temp2] = temp4;
					}
				}
			}
			if( type == "关闭" ){
				if( temp1 == "本事件" ){
					var e_id = this._eventId;
					var e = $gameMap.event( e_id );
					e._drill_ERT.tags[temp2] = false;
				}
			}
			
		}
		if(args.length >= 8){
			var type = String(args[1]);
			var temp1 = String(args[3]);
			var e_id = Number(args[5]);
			var temp2 = String(args[7]);
			if(args[9]){var temp3 = String(args[9]);}
			if(args[11]){var temp4 = String(args[11]);}
			
			if( type == "设置" ){
				if( temp1 == "指定事件" ){
					if( temp3 == "触发独立开关"){
						var e = $gameMap.event( e_id );
						e._drill_ERT.tags[temp2] = true;
						e._drill_ERT.self_switchs[temp2] = temp4;
					}
				}
			}
			if( type == "关闭" ){
				if( temp1 == "指定事件" ){
					var e = $gameMap.event( e_id );
					e._drill_ERT.tags[temp2] = false;
				}
			}
		}
	}
};

//=============================================================================
// * 事件触发
//=============================================================================
//==============================
// * 事件触发 - 固定区域（事件id、区域类型、区域范围、条件）
//==============================
Game_Map.prototype.drill_ERT_triggerTypeArea = function( e_id, type, range, tag ) {
	var e = this.event( e_id );
	var cal_area = this.drill_getStaticFormArea(e._x, e._y, type, range, null);
	
	$gameSystem.drill_ERT_setLastPoint({'x':e._x,'y':e._y});
	$gameSystem.drill_ERT_setLastArea(cal_area);
	this.drill_ERT_triggerArea( cal_area, tag );
}
//==============================
// * 事件触发 - 自定义区域（事件id，中心区域，条件）
//==============================
Game_Map.prototype.drill_ERT_triggerSelfArea = function( e_id, self_id, tag ) {
	var e = this.event( e_id );
	var self_area = DrillUp.g_ERT_area[self_id]['tiles'];
	var cal_area = this.drill_getStaticArea(e._x, e._y, e._direction, self_area, null);
	
	$gameSystem.drill_ERT_setLastPoint({'x':e._x,'y':e._y});
	$gameSystem.drill_ERT_setLastArea(cal_area);
	this.drill_ERT_triggerArea( cal_area, tag );
}
//==============================
// * 事件触发 - 触发区域（实际区域[{x:21,y:31,block:true},{x:22,y:32,block:true}]，条件）
//==============================
Game_Map.prototype.drill_ERT_triggerArea = function( area, tag ) {
	
	var events = this.events();
	var need_reflash = false;
	for (var i = 0; i < events.length; i++) {  
		var temp_event = events[i];
		for (var j = 0; j < area.length ; j++) {    	//事件朝向与范围有关系
			var temp_point = area[j];
		
			if( DrillUp.g_ERT_fix ){	//修正
				if( temp_event.drill_isInPosEntirely(  temp_point['x'], temp_point['y'] ) &&
					temp_event._drill_ERT.tags[tag] == true ){	
					
					var key = [this._mapId, temp_event._eventId, temp_event._drill_ERT.self_switchs[tag] ];
					$gameSelfSwitches.drill_setValueWithOutChange(key,true);
					need_reflash = true;
					break;
				}
			}else{	//不修正
				if( temp_event.pos(  temp_point['x'], temp_point['y'] ) &&
					temp_event._drill_ERT.tags[tag] == true ){	
					
					var key = [this._mapId, temp_event._eventId, temp_event._drill_ERT.self_switchs[tag] ];
					$gameSelfSwitches.drill_setValueWithOutChange(key,true);
					need_reflash = true;
					break;
				}
			}
		}
	}
	if(need_reflash){
		this.requestRefresh();
	}
}
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
// * 判定区域修正
//==============================
Game_CharacterBase.prototype.drill_isInPosEntirely = function(x,y) {
	if ( Math.abs( x - this._realX) < 0.5 && 
		Math.abs( y - this._realY) < 0.5) {
		return true;
	}
	return false;
};

//=============================================================================
// * 	固定区域核心
//		
//		功能：		通过调用主函数，返回设置后的区域集合。
//		可选项：	options暂无设置（固定穿透所有事件） 
//		主函数：	var area = this.drill_getStaticFormArea( c_x, c_y, type, range, options );
//					var area = this.drill_getStaticArea(c_x, c_y, direction, c_area, options );
//=============================================================================
if( typeof(Game_Map.prototype.drill_getStaticArea) == "undefined" ){	//防止重复定义
	
	//==============================
	// * 区域 - 固定形状区域（中心点x，中心点y，区域类型，区域范围，特殊选项）
	//==============================
	Game_Map.prototype.drill_getStaticFormArea = function(c_x, c_y, type, range, options ) {
		var c_area = [];
		
		for (var i = -range; i <= range; i++) {
			for (var j = -range; j <= range; j++) {
				if( type == "方形区域" ){		//deltaX()函数考虑了循环地图的情况（公式：dx <= r，dy <= r）
					if( Math.abs(i) <= range && Math.abs(j) <= range){	
						c_area.push({'x':i,'y':j});
					}
				}
				if( type == "菱形区域" ){		//（公式：dx + dy <= r）
					if( Math.abs(i) + Math.abs(j) <= range ){
						c_area.push({'x':i,'y':j});
					}
				}
				if( type == "圆形区域" ){		//（公式：dx^2 + dy^2 <= r^2）
					if( Math.pow( i ,2) + Math.pow( j ,2) <= Math.pow(range,2) ){	
						c_area.push({'x':i,'y':j});
					}
				}
				if( type == "十字区域" ){		//（公式：dx + dy <= r 且 (dx==0 或 dy==0) ）
					if( Math.abs(i) <= range && Math.abs(j) <= range &&
						( i == 0 || j == 0 ) ){	
						c_area.push({'x':i,'y':j});
					}
				}
			}
		}
		return this.drill_getStaticArea(c_x, c_y, 2, c_area, options );
	}
	
	//==============================
	// * 区域 - 固定方向中心区域（中心点x，中心点y，朝向(默认2/4/6/8)，固定中心区域[{x:0,y:-1},…]，特殊选项）
	//==============================
	Game_Map.prototype.drill_getStaticArea = function(c_x, c_y, direction, c_area, options ) {
		var cal_area = [];	//根据方向变化后的区域
		for (var i = 0; i < c_area.length ; i++) {
			var temp_point = c_area[i];
			if( direction == 2 ){
				var x = this.roundX(c_x + temp_point['x']);	//下
				var y = this.roundY(c_y + temp_point['y']);
			}else if( direction == 4 ){
				var x = this.roundX(c_x - temp_point['y']);	//左
				var y = this.roundY(c_y - temp_point['x']);
			}else if( direction == 6 ){
				var x = this.roundX(c_x + temp_point['y']);	//右
				var y = this.roundY(c_y + temp_point['x']);
			}else{
				var x = this.roundX(c_x - temp_point['x']);	//上
				var y = this.roundY(c_y - temp_point['y']);
			}
			cal_area.push({'x':x,'y':y,'block': !$gameMap.drill_isAnyPassable(x,y) });
		}
		return cal_area;
	}
	//==============================
	// * 通用 - 判断图块可通行情况
	//==============================
	Game_Map.prototype.drill_isAnyPassable = function( x, y ) {
		return this.isPassable(x, y, 2)||this.isPassable(x, y, 4)||this.isPassable(x, y, 6)||this.isPassable(x, y, 8);
	}
}


//=============================================================================
// * 触发区域缓存容器
//=============================================================================
var _drill_ERT_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_drill_ERT_System_initialize.call(this);
	this._drill_ERT_last_area = [];				//触发中心区域
	this._drill_ERT_last_point = {'x':0,'y':0};	//触发中心
}
// * 设置 - 上一个触发的中心区域 [{'x':21,'y':31,'block':true}……]
Game_System.prototype.drill_ERT_setLastArea = function(area) {
	this._drill_ERT_last_area = area;
}
// * 设置 - 上一个触发的中心点 {'x':1,'y':1}
Game_System.prototype.drill_ERT_setLastPoint = function(p) {
	this._drill_ERT_last_point = p;
}
// * 获取 - 上一个触发的中心区域
Game_System.prototype.drill_ERT_getLastArea = function() {
	return this._drill_ERT_last_area;
}
// * 获取 - 上一个触发的中心点
Game_System.prototype.drill_ERT_getLastPoint = function() {
	return this._drill_ERT_last_point;
}

//=============================================================================
// ** 地图事件初始化
//=============================================================================	
var _drill_ERT_char_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function() {
	_drill_ERT_char_initMembers.call(this);
	this._drill_ERT = {};				
	this._drill_ERT.tags = {};				//条件关键字（json串）
	this._drill_ERT.self_switchs = {};		//开启独立开关
};

//=============================================================================
// ** 事件注释初始化
//=============================================================================
var _drill_ERT_event_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
	_drill_ERT_event_setupPage.call(this);
    this.drill_ERT_setupPage();
};
Game_Event.prototype.drill_ERT_setupPage = function() {
	if (!this._erased && this.page()) {this.list().forEach(function(l) {
		if (l.code === 108) {
			var args = l.parameters[0].split(' ');
			var command = args.shift();
			if (command == "=>被触发"){	//=>被触发 : 击碎岩石 : 触发独立开关 : A
				if(args.length == 6){
					if(args[1]){ var temp1 = String(args[1]); }
					if(args[3]){ var temp2 = String(args[3]); }
					if(args[5]){ var temp3 = String(args[5]); }
					if( temp2 == "触发独立开关" ){
						this._drill_ERT.tags[temp1] = true;
						this._drill_ERT.self_switchs[temp1] = temp3;
					}
				}
			};
		};
	}, this);};
};


