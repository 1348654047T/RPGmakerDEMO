//=============================================================================
// Drill_EventAutoTrigger.js
//=============================================================================

/*:
 * @plugindesc [v1.2]        物体触发 - 玩家接近 & 条件 & 固定区域
 * @author Drill_up
 *
 * @param 是否修正区域判定
 * @type boolean
 * @on 修正
 * @off 不修正
 * @desc 修正后，没有完全离开触发区域的事件也会被捕获到，并触发。
 * @default true
 *
 * @param 玩家触发-1
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义玩家自动触发的设置。
 * @default {"标签":"==与玩家距离1==","初始是否开启":"true","触发关键字":"与玩家距离1","触发区域模式":"菱形区域","区域范围":"1","自定义区域图块":"[\"0,0\"]"}
 *
 * @param 玩家触发-2
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default {"标签":"==与玩家距离2==","初始是否开启":"true","触发关键字":"与玩家距离2","触发区域模式":"菱形区域","区域范围":"2","自定义区域图块":"[\"0,0\"]"}
 *
 * @param 玩家触发-3
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default {"标签":"==与玩家距离3==","初始是否开启":"true","触发关键字":"与玩家距离3","触发区域模式":"菱形区域","区域范围":"3","自定义区域图块":"[\"0,0\"]"}
 *
 * @param 玩家触发-4
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default {"标签":"==与玩家距离4==","初始是否开启":"true","触发关键字":"与玩家距离4","触发区域模式":"菱形区域","区域范围":"4","自定义区域图块":"[\"0,0\"]"}
 *
 * @param 玩家触发-5
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default {"标签":"==与玩家距离5==","初始是否开启":"true","触发关键字":"与玩家距离5","触发区域模式":"菱形区域","区域范围":"5","自定义区域图块":"[\"0,0\"]"}
 *
 * @param 玩家触发-6
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default {"标签":"==与玩家距离6==","初始是否开启":"true","触发关键字":"与玩家距离6","触发区域模式":"菱形区域","区域范围":"6","自定义区域图块":"[\"0,0\"]"}
 *
 * @param 玩家触发-7
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default {"标签":"==与玩家距离7==","初始是否开启":"true","触发关键字":"与玩家距离7","触发区域模式":"菱形区域","区域范围":"7","自定义区域图块":"[\"0,0\"]"}
 *
 * @param 玩家触发-8
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default {"标签":"==与玩家距离8==","初始是否开启":"true","触发关键字":"与玩家距离8","触发区域模式":"菱形区域","区域范围":"8","自定义区域图块":"[\"0,0\"]"}
 *
 * @param 玩家触发-9
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-10
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-11
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-12
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-13
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-14
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-15
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-16
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-17
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-18
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-19
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-20
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-21
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-22
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-23
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-24
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-25
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-26
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-27
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-28
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-29
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-30
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-31
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-32
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-33
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-34
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-35
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-36
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-37
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-38
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-39
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 玩家触发-40
 * @parent ---玩家触发---
 * @type struct<ATriArea>
 * @desc 自定义触发事件的区域范围。
 * @default 
 * 
 * @help  
 * =============================================================================
 * +++ Drill_EventAutoTrigger +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 使得地图玩家能够自动触发 范围内+特定条件下 的事件的独立开关。
 * 更多详细介绍，去看看"关于条件触发范围内事件.docx"。
 * 【支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.当前触发分为两种：玩家 与 被触发的事件。
 * 2.被触发是一个点，主动触发是一个范围，范围内符合条件的点会被触发。
 * 3.玩家触发比较特殊，触发是连续不间断的。
 * 4.你可以自定义条件关键字，用于连接玩家与不同的被触发的事件。
 * 5.触发独立开关后都是设置为ON。硬性规定。
 * （程序上可以设置范围OFF独立开关，但是OFF情况更复杂，会使得事件页变混乱。）
 * 6.该插件主要用于自动触发接近玩家区域的事件。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 被触发
 * 如果你需要设置事件的被触发条件，使用下面事件注释：
 * （注意，冒号左右有一个空格）
 * 
 * 事件注释：=>被触发 : 与玩家距离1 : 触发独立开关 : A
 * 事件注释：=>被触发 : 与玩家距离2 : 触发独立开关 : A
 *
 * 1.其中"与玩家距离1"是完全可以自定义的条件关键字。
 * 2.设置后，如果玩家注释的关键字与被动的对应上，将会触发开启独立开关。
 * 3.该插件注释与 条件触发插件 的注释结构一样，你要注意关键字的唯一性。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 离开范围情况
 * 如果你需要设置事件的离开范围状态，使用下面事件注释：
 * （注意，冒号左右有一个空格）
 *
 * 事件注释：=>被触发 : 与玩家距离1 : 离开范围时自动OFF
 * 事件注释：=>被触发 : 与玩家距离2 : 离开范围时自动OFF
 *
 * 注意，因为该插件为连续触发，所以对范围进入与离开有监听。
 * 条件触发插件 为只触发一次情况，所以不具备该功能。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 被触发
 * 你也可以通过插件指令设置被触发：
 * （注意，冒号左右有一个空格）
 * 
 * 插件指令：>被触发 : 设置 : 本事件 : 与玩家距离1 : 触发独立开关 : A
 * 插件指令：>被触发 : 设置 : 指定事件 : 10 : 与玩家距离1 : 触发独立开关 : A
 * 插件指令：>被触发 : 关闭 : 本事件 : 与玩家距离1
 * 插件指令：>被触发 : 关闭 : 指定事件 : 10 : 与玩家距离1
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 玩家触发设置
 * 玩家是主动并且自动触发的，你可以对玩家的自动触发进行控制：
 * （注意，冒号左右有一个空格）
 *
 * 插件指令：>玩家触发 : 关闭触发 : 1
 * 插件指令：>玩家触发 : 开启触发 : 1
 *
 * 数字对应你在玩家范围中配置的触发，你也可以初始关闭某些触发，后期通过插件
 * 指令开启。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 修复了多个被触发注释对应错误开关的bug。
 * [v1.2]
 * 添加了十字区域设置。
 */
/*~struct~ATriArea:
 * 
 * @param 标签
 * @desc 只用于方便区分查看的标签，不作用在插件中。
 * @default ==新的玩家触发设置==
 *
 * @param 初始是否开启
 * @type boolean
 * @on 开启
 * @off 关闭
 * @desc true - 开启，false - 关闭
 * @default true
 * 
 * @param 触发关键字
 * @desc 触发的条件关键字。范围内+条件关键字 同时满足即可触发事件。
 * @default 关键字
 * 
 * @param 触发区域模式
 * @type select
 * @option 方形区域
 * @value 方形区域
 * @option 菱形区域
 * @value 菱形区域
 * @option 圆形区域
 * @value 圆形区域
 * @option 十字区域
 * @value 十字区域
 * @option 自定义区域
 * @value 自定义区域
 * @desc 选择不同的区域将对应下面不同的配置。
 * @default 方形区域
 *
 * @param 区域范围
 * @parent 触发区域模式
 * @type number
 * @min 0
 * @desc 方形或菱形区域的范围。
 * @default 1
 * 
 * @param 自定义区域图块
 * @parent 触发区域模式
 * @type text[]
 * @desc 格式为"x,y",指定图块触发的区域。设置自定义区域模式才有效。
 * @default ["0,0"]
 *
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		EAT（Event_Auto_Trigger）
//		临时全局变量	DrillUp.g_EAT_xxx
//		临时局部变量	无
//		存储数据变量	$gameSystem._drill_EAT_xxx
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		这里只对玩家的触发进行不断遍历。可能会稍微影响内存速度。
//
//		该插件与【Drill_EventRangeTrigger】插件功能相互有交叉，但并不干扰对方，是独立的。
//
//		要使用独立开关判定，每次独立开关赋值都会刷新地图。
//		离开范围需要off
//		这里设置的所有被触发，都是直接跨 事件页 的，指定页被激活后，相关注释即可设定。
//	
//		由于这里是持续触发，不需要存储上一次区域，所以内部结构不需要大幅度修改。
//		这里要注意两个关系，一个是玩家位置的判定修正，另一个是触发敌人的判定修正。

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_EventAutoTrigger = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_EventAutoTrigger');

	DrillUp.g_EAT_fix = String(DrillUp.parameters['是否修正区域判定'] || "true") === "true";	
	
	DrillUp.g_EAT_area_max = 40;
	DrillUp.g_EAT_area = [];
	DrillUp.g_EAT_area_max_range = 1;	//最大触发区域距离（优化用）
	
	for (var i = 0; i < DrillUp.g_EAT_area_max; i++) {
		if( DrillUp.parameters['玩家触发-' + String(i+1) ] != "" ){
			DrillUp.g_EAT_area[i] = JSON.parse(DrillUp.parameters['玩家触发-' + String(i+1) ]);
			DrillUp.g_EAT_area[i]['enable'] = String(DrillUp.g_EAT_area[i]["初始是否开启"] || "true") == "true";
			DrillUp.g_EAT_area[i]['keyword'] = String(DrillUp.g_EAT_area[i]["触发关键字"]);
			DrillUp.g_EAT_area[i]['areaMode'] = String(DrillUp.g_EAT_area[i]["触发区域模式"]);
			DrillUp.g_EAT_area[i]['areaRange'] = Number(DrillUp.g_EAT_area[i]["区域范围"]);
			DrillUp.g_EAT_area[i]['tiles'] = [];
			var area = JSON.parse( DrillUp.g_EAT_area[i]['自定义区域图块'] );
			for (var j = 0; j < area.length ; j++) {
				var x = Number(area[j].split(',')[0]);
				var y = Number(area[j].split(',')[1]);
				DrillUp.g_EAT_area[i]['tiles'].push({ 'x':x,'y':y });
				DrillUp.g_EAT_area_max_range = Math.max(x,DrillUp.g_EAT_area_max_range);
				DrillUp.g_EAT_area_max_range = Math.max(y,DrillUp.g_EAT_area_max_range);
			}
			//alert(JSON.stringify(DrillUp.g_EAT_area[i]));
		}else{
			DrillUp.g_EAT_area[i] = "";
		}
	}
	
//=============================================================================
// * 插件指令
//=============================================================================
var _drill_EAT_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_EAT_pluginCommand.call(this, command, args);
	if (command === '>玩家触发') {
		if(args.length >= 4){
			var type = String(args[1]);
			var temp1 = Number(args[3]) -1;
			if( type == "开启触发" ){
				$gameSystem._drill_EAT_enables[temp1] = true;
			}
			if( type == "关闭触发" ){
				$gameSystem._drill_EAT_enables[temp1] = false;
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
						e._drill_EAT.tags[temp2] = true;
						e._drill_EAT.self_switchs[temp2] = temp4;
					}
				}
			}
			if( type == "关闭" ){
				if( temp1 == "本事件" ){
					var e_id = this._eventId;
					var e = $gameMap.event( e_id );
					e._drill_EAT.tags[temp2] = false;
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
						e._drill_EAT.tags[temp2] = true;
						e._drill_EAT.self_switchs[temp2] = temp4;
					}
				}
			}
			if( type == "关闭" ){
				if( temp1 == "指定事件" ){
					var e = $gameMap.event( e_id );
					alert(JSON.stringify(e._drill_EAT.tags));
					e._drill_EAT.tags[temp2] = false;
				}
			}
		}
	}
};
//=============================================================================
// * 存储变量初始化
//=============================================================================
var _drill_EAT_system_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    _drill_EAT_system_initialize.call(this);
	this._drill_EAT_enables = [];
	for(var i=0; i<DrillUp.g_EAT_area.length ;i++ ){
		var a = DrillUp.g_EAT_area[i];
		this._drill_EAT_enables.push( a['enable'] );
	}
};	

//=============================================================================
// * 玩家位置 帧刷新
//=============================================================================
var _drill_EAT_update = Game_Map.prototype.update;
Game_Map.prototype.update = function(sceneActive) {
	_drill_EAT_update.call(this,sceneActive);
    this.drill_EAT_updatePlayerTrigger();
};

Game_Map.prototype.drill_EAT_updatePlayerTrigger = function() {
	if($gamePlayer){
		for(var i=0; i<DrillUp.g_EAT_area.length ;i++ ){
			var a = DrillUp.g_EAT_area[i];
			if($gameSystem._drill_EAT_enables[i] != true){
				continue;
			}
			if( a != "" && a != undefined ){
				if( a['areaMode'] == "自定义区域"){
					this.drill_playerTriggerSelfArea( i+1, a['keyword'] );
				}else{
					this.drill_playerTriggerRangeArea( a['areaMode'],a['areaRange'] , a['keyword'] );
				}
			}
		}
	}
}

//==============================
// * 玩家触发 - 普通区域（区域类型、区域范围、条件）
//==============================
Game_Map.prototype.drill_playerTriggerRangeArea = function( type, range, tag ) {
	var p_x = $gamePlayer._x;
	var p_y = $gamePlayer._y;
	if(DrillUp.g_EAT_fix){
		p_x = Math.floor($gamePlayer._realX + 0.5);
		p_y = Math.floor($gamePlayer._realY + 0.5);
	}
	
	var events = this.events();
	var need_reflash = false;
	for (var i = 0; i < events.length; i++) {  	//事件朝向与范围没有关系
		var temp_event = events[i];
		var e_x = temp_event._x;
		var e_y = temp_event._y;
		if(DrillUp.g_EAT_fix){
			e_x = Math.floor(temp_event._realX + 0.5);
			e_y = Math.floor(temp_event._realY + 0.5);
		}
		
		if( temp_event._drill_EAT.tags[tag] == true ){	//大前提：设置了条件
		
			if( type == "方形区域" ){		//deltaX()函数考虑了循环地图的情况（公式：dx <= r，dy <= r）
				if( Math.abs(this.deltaX(e_x, p_x)) <= range &&
					Math.abs(this.deltaY(e_y, p_y)) <= range ){
					var key = [this._mapId, temp_event._eventId, temp_event._drill_EAT.self_switchs[tag] ];
					if( $gameSelfSwitches.value(key) !== true){
						$gameSelfSwitches.drill_setValueWithOutChange(key,true);
						need_reflash = true;
					}
				}else{
					if( temp_event._drill_EAT.autoOff[tag] == true ){	//自动off
						var key = [this._mapId, temp_event._eventId, temp_event._drill_EAT.self_switchs[tag] ];
						if( $gameSelfSwitches.value(key) !== false){
							$gameSelfSwitches.drill_setValueWithOutChange(key,false);
							need_reflash = true;
						}
					}
				}
			}
			if( type == "菱形区域" ){		//（公式：dx + dy <= r）
				if( this.distance(p_x, p_y, e_x, e_y) <= range ){
					var key = [this._mapId, temp_event._eventId, temp_event._drill_EAT.self_switchs[tag] ];
					if( $gameSelfSwitches.value(key) !== true){
						$gameSelfSwitches.drill_setValueWithOutChange(key,true);
						need_reflash = true;
					}
				}else{
					if( temp_event._drill_EAT.autoOff[tag] == true ){	//自动off
						var key = [this._mapId, temp_event._eventId, temp_event._drill_EAT.self_switchs[tag] ];
						if( $gameSelfSwitches.value(key) !== false){
							$gameSelfSwitches.drill_setValueWithOutChange(key,false);
							need_reflash = true;
						}
					}
				}
			}
			if( type == "圆形区域" ){		//（公式：dx^2 + dy^2 <= r^2）
				if( Math.pow( this.deltaX(e_x, p_x) ,2) + Math.pow( this.deltaX(e_y, p_y) ,2) <= Math.pow(range,2) ){	
					var key = [this._mapId, temp_event._eventId, temp_event._drill_EAT.self_switchs[tag] ];
					if( $gameSelfSwitches.value(key) !== true){
						$gameSelfSwitches.drill_setValueWithOutChange(key,true);
						need_reflash = true;
					}
				}else{
					if( temp_event._drill_EAT.autoOff[tag] == true ){	//自动off
						var key = [this._mapId, temp_event._eventId, temp_event._drill_EAT.self_switchs[tag] ];
						if( $gameSelfSwitches.value(key) !== false){
							$gameSelfSwitches.drill_setValueWithOutChange(key,false);
							need_reflash = true;
						}
					}
				}
			}
			if( type == "十字区域" ){		//（公式：dx + dy <= r 且 (dx==0 或 dy==0) ）
				if( Math.abs(this.deltaX(e_x, p_x)) <= range &&
					Math.abs(this.deltaY(e_y, p_y)) <= range &&
					( e_x == p_x || e_y == p_y ) ){
					var key = [this._mapId, temp_event._eventId, temp_event._drill_EAT.self_switchs[tag] ];
					if( $gameSelfSwitches.value(key) !== true){
						$gameSelfSwitches.drill_setValueWithOutChange(key,true);
						need_reflash = true;
					}
				}else{
					if( temp_event._drill_EAT.autoOff[tag] == true ){	//自动off
						var key = [this._mapId, temp_event._eventId, temp_event._drill_EAT.self_switchs[tag] ];
						if( $gameSelfSwitches.value(key) !== false){
							$gameSelfSwitches.drill_setValueWithOutChange(key,false);
							need_reflash = true;
						}
					}
				}
			}
		}
	}
	if(need_reflash){
		$gameMap.requestRefresh();	//变化后手动刷新
	}
}
//==============================
// * 玩家触发 - 自定义区域（id、条件）
//==============================
Game_Map.prototype.drill_playerTriggerSelfArea = function( self_id, tag ) {
	var p_x = $gamePlayer._x;
	var p_y = $gamePlayer._y;
	if(DrillUp.g_EAT_fix){
		p_x = Math.floor($gamePlayer._realX + 0.5);
		p_y = Math.floor($gamePlayer._realY + 0.5);
	}
	
	var events = this.events();
	var need_reflash = false;
	for (var i = 0; i < events.length; i++) {  
		var temp_event = events[i];
		var e_x = temp_event._x;
		var e_y = temp_event._y;
		if(DrillUp.g_EAT_fix){
			e_x = Math.floor(temp_event._realX + 0.5);
			e_y = Math.floor(temp_event._realY + 0.5);
		}
		
		var area = DrillUp.g_EAT_area[self_id-1]['tiles'];
		if( temp_event._drill_EAT.tags[tag] == true &&							//大前提：设置了条件
			Math.abs(e_x - p_x) <= DrillUp.g_EAT_area_max_range+1  &&
			Math.abs(e_y - p_y) <= DrillUp.g_EAT_area_max_range+1 ){	//在自定义区域最大范围内，开始循环
			
			for (var j = 0; j < area.length ; j++) {    	//事件朝向与范围有关系
				var triggered = false;
				if( e._direction == 2 ){	//下
					if( p_x + area[j]['x'] == e_x &&
						p_y + area[j]['y'] == e_y ){	
						triggered = true;
					}
				}else if( e._direction == 4 ){	//左
					if( p_x - area[j]['y'] == e_x &&
						p_y - area[j]['x'] == e_y ){	
						triggered = true;
					}
				}else if( e._direction == 6 ){	//右
					if( p_x + area[j]['y'] == e_x &&
						p_y + area[j]['x'] == e_y ){	
						triggered = true;
					}
				}else{	//上
					if( p_x - area[j]['x'] == e_x &&
						p_y - area[j]['y'] == e_y ){	
						triggered = true;
					}
				}
				if( triggered ){
					var key = [this._mapId, temp_event._eventId, temp_event._drill_EAT.self_switchs[tag] ];
					if( $gameSelfSwitches.value(key) !== true){
						$gameSelfSwitches.drill_setValueWithOutChange(key,true);
						need_reflash = true;
					}
					break;
				}else{
					if( temp_event._drill_EAT.autoOff[tag] == true ){	//自动off
						var key = [this._mapId, temp_event._eventId, temp_event._drill_EAT.self_switchs[tag] ];
						if( $gameSelfSwitches.value(key) !== false){
							$gameSelfSwitches.drill_setValueWithOutChange(key,false);
							need_reflash = true;
						}
						//break;
					}
				}
			}
		}
	}
	if(need_reflash){
		$gameMap.requestRefresh();	//变化后手动刷新
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


//=============================================================================
// ** 地图事件初始化
//=============================================================================	
var _drill_EAT_char_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function() {
	_drill_EAT_char_initMembers.call(this);
	this._drill_EAT = {};				
	this._drill_EAT.tags = {};				//条件关键字（json串）
	this._drill_EAT.autoOff = {};			//自动off关键字（json串）
	this._drill_EAT.self_switchs = {};		//开启独立开关
};

//=============================================================================
// ** 事件注释初始化
//=============================================================================
var _drill_EAT_event_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
	_drill_EAT_event_setupPage.call(this);
    this.drill_EAT_setupPage();
};
Game_Event.prototype.drill_EAT_setupPage = function() {		//这里并不需要与另一个插件同步，因为他们仅仅是相同的注释有相同的效果而已
	if (!this._erased && this.page()) {this.list().forEach(function(l) {
		if (l.code === 108) {
			var args = l.parameters[0].split(' ');
			var command = args.shift();
			if (command == "=>被触发"){	//=>被触发 : 击碎岩石 : 触发独立开关 : A
				if(args.length >= 4){
					if(args[1]){ var temp1 = String(args[1]); }
					if(args[3]){ var temp2 = String(args[3]); }
					if(args[5]){ var temp3 = String(args[5]); }
					if( temp2 == "触发独立开关" ){
						this._drill_EAT.tags[temp1] = true;
						this._drill_EAT.self_switchs[temp1] = temp3;
					}
					if( temp2 == "离开范围时自动OFF" ){
						this._drill_EAT.autoOff[temp1] = true;
					}
				}
			};
		};
	}, this);};
};


