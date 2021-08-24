//=============================================================================
// Drill_EventLaserTrigger.js
//=============================================================================

/*:
 * @plugindesc [v1.1]        物体触发 - 可变激光区域 & 条件
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
 * @param 斜向激光是否穿透两边阻碍
 * @type boolean
 * @on 穿透
 * @off 不穿透
 * @desc 假设向东南方发射激光，东南方无阻挡，但是正东和正南两处都有阻碍，设置不穿透则会被阻挡。
 * @default true
 *
 * 
 * @help  
 * =============================================================================
 * +++ Drill_EventLaserTrigger +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 使得事件能够触发 激光范围 + 条件标签 的事件的独立开关。
 * 向前发射的一条光线区域，激光范围会被阻碍物阻挡。
 * 物体触发为一系列特殊条件的触发，去看看"关于物体触发.docx"。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.当前触发分为两种：主动触发的事件 与 被触发的事件。
 * 2.以指定的事件为中心，发射激光的区域为触发区域，遇到不可穿透的事件后终止。
 *   终止点脚下也是触发区域。
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
 * 8.由于区域是变化的，第一次触发后，第二次再触发的可能是完全不同的区域。
 *   你可以对第一次触发区域进行保存，确保第二次触发的还是原来的区域。
 *
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 插件可以单独使用，通过与下面组合，可以有更多功能：
 * 被扩展：
 *   - Drill_EventThrough 物体 - 事件穿透关系
 *     如果使用了目标插件，该插件的触发效果能支持穿透设置。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 被触发
 * 如果你需要设置事件的被触发条件，使用下面事件注释：
 * （注意，冒号左右有空格）
 * 
 * 事件注释：=>被触发 : 击碎岩石 : 触发独立开关 : A
 * 事件注释：=>被触发 : 挥砍攻击 : 触发独立开关 : A
 *
 * 1.其中"击碎岩石"与"挥砍攻击"是完全可以自定义的条件关键字。
 * 2.设置后，如果主动触发的关键字与被动的对应上，将会触发开启独立开关。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 被触发
 * 你也可以通过插件指令给事件添加或去除被触发条件：
 * （注意，冒号左右有空格）
 * 
 * 插件指令：>被触发 : 设置 : 本事件 : 击碎岩石 : 触发独立开关 : A
 * 插件指令：>被触发 : 设置 : 指定事件 : 10 : 击碎岩石 : 触发独立开关 : A
 * 插件指令：>被触发 : 关闭 : 本事件 : 击碎岩石
 * 插件指令：>被触发 : 关闭 : 指定事件 : 10 : 击碎岩石
 *
 * 1.插件指令设置的被触发标签，只对当前地图有效，离开地图后消失。
 * 2.指定事件关闭了被触发条件，可以等同于他暂时免疫某种攻击。
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件 - 主动触发
 * 接下来是主动触发，只能通过插件指令来主动触发。
 * （注意，冒号左右有空格）
 *
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 东 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 南 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 西 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 北 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 东南 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 东北 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 西南 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 西北 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 前 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 后 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 左 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 右 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 左前方 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 左后方 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 右前方 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 右后方 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 指定事件 : 10 : 可变激光区域 : 东 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 指定事件 : 10 : 可变激光区域 : 南 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 指定事件(变量) : 10 : 可变激光区域 : 东 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 指定事件(变量) : 10 : 可变激光区域 : 南 : 2 : 击碎岩石
 *
 * 1.区域后面的数字表示激光的长度。
 * 2."击碎岩石"表示触发标志。在范围内的含有"击碎岩石"标志的被触发事件，
 *   会被开启相应的独立开关。
 * 3.如果你的激光方向与事件的方向有关，就用"前后左右"，如果是固定跟地图
 *   一样，就用"东南西北"。
 * 4.你设置指定 变量值 对应的事件id，来触发标签。
 *   （通过变量可以操作 事件复制器 复制的新事件）
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 主动触发
 * 你可以写这样的插件指令：
 * 
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 东,南,西,北 : 2 : 击碎岩石
 * 插件指令：>主动触发 : 本事件 : 可变激光区域 : 东南,东北 : 2 : 击碎岩石
 *
 * 1.区域后面的数字表示自定义区域的id。
 * 2.用逗号隔开，可以同时写多个方向。
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定 - 事件穿透
 * 你可以使得播放的动画能穿透某些类型的事件，但是必须要相关的插件支持，见插件扩展介绍：
 * 
 * 插件指令：>主动触发 : 设置事件穿透 : 炸弹人,炸弹人道具
 * 插件指令：>主动触发 : 关闭全部事件穿透
 *
 * 1.你可以用逗号隔开，设置多个可穿透的标签。
 * 2.指令结束后要习惯性执行关闭穿透的设置。
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定 - 记录区域
 * 如果你需要对触发的区域进行多次连续触发操作，你可以设置下面的插件指令：
 * 
 * 插件指令：>主动触发 : 上一次触发的激光区域 : 击碎岩石
 * 插件指令：>主动触发 : 上一次事件的激光区域 : 本事件 : 击碎岩石
 * 插件指令：>主动触发 : 上一次事件的激光区域 : 5 : 击碎岩石
 * 
 * 1.其中的数字表示事件的id。
 * 2.上一次触发，指 任意事件 的上一次。
 *   上一次事件，指 指定事件 的上一次。
 *
 * 插件指令：>保存激光区域 : 1 : 上一次触发的
 * 插件指令：>主动触发 : 读取激光区域 : 1 : 击碎岩石
 *
 * 1.你需要考虑短时间持续触发时，堵路的持续问题。
 *   因为第一次触发后堵路就消失了，第二次触发，激光可能越过堵路。
 * 2.留意插件指令里面语句，语句多了容易搞混淆，最好直接复制粘贴。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 添加了触发临时保存的区域的功能。
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		ELT （Event_Laser_Trigger）
//		临时全局变量	DrillUp.g_ELT_xxx
//		临时局部变量	this._drill_ELT_xxxx
//		存储数据变量	【无】
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		该插件与其它事件触发插件功能相互有交叉，但并不干扰对方，是独立的。
//
//		与激光动画共用 激光区域核。
//		另外，我已经找不到更好的处理那么多乱七八糟的插件指令的方法了。
//		范围类型、方向、事件、范围长度、触发条件、动画ID、其它可选项……参数太多
//
//		判定区域有一点不同，根据贴图的realX来判定是否在图块范围内。

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_EventLaserTrigger = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_EventLaserTrigger');

	DrillUp.g_ELT_fix = String(DrillUp.parameters['是否修正区域判定'] || "true") === "true";	
	DrillUp.g_ELT_diagonalThrough = String(DrillUp.parameters['斜向激光是否穿透两边阻碍'] || "true") === "true";	
	
	
//=============================================================================
// * 插件指令
//=============================================================================
var _drill_ELT_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_ELT_pluginCommand.call(this, command, args);
	if (command === '>主动触发') {
		/*-----------------可变激光区域------------------*/
		if(args.length == 10){
			var temp1 = String(args[1]);
			var type = String(args[3]);
			var temp3 = String(args[5]);
			var temp4 = Number(args[7]);
			var tag = String(args[9]);
			
			if( temp1 == "本事件" && type == "可变激光区域" ){	//>主动触发 : 本事件 : 可变激光区域 : 东 : 2 : 击碎岩石
				var dirs = temp3.split(/[,，]/);
				var range = temp4;
				$gameMap.drill_ELT_laserTrigger( this._eventId, dirs, range, tag );
			}
			
		}
		if(args.length == 12){
			var temp1 = String(args[1]);
			var temp2 = Number(args[3]);
			var type = String(args[5]);
			var temp4 = String(args[7]);
			var temp5 = Number(args[9]);
			var tag = String(args[11]);
			
			if( temp1 == "指定事件" && type == "可变激光区域" ){	//>主动触发 : 指定事件 : 10 : 可变激光区域 : 东 : 2 : 击碎岩石
				var dirs = temp4.split(/[,，]/);
				var range = temp5;
				$gameMap.drill_ELT_laserTrigger( temp2, dirs, range, tag );
			}
			if( temp1 == "指定事件(变量)" && type == "可变激光区域" ){
				var dirs = temp4.split(/[,，]/);
				var range = temp5;
				$gameMap.drill_ELT_laserTrigger( $gameVariables.value(temp2), dirs, range, tag );
			}
		}
		/*-----------------事件穿透------------------*/
		if(args.length == 4){
			var type = String(args[1]);
			var temp1 = String(args[3]);
			if( type == "设置事件穿透"){	
				$gameSystem._drill_ELT_eventThrough = temp1.split(/[,，]/);
			}
		}
		if(args.length == 2){
			var type = String(args[1]);
			if( type == "关闭全部事件穿透"){	
				$gameSystem._drill_ELT_eventThrough = [];
			}
		}
		/*-----------------记录区域------------------*/
		if(args.length == 4){
			var type = String(args[1]);
			var temp1 = String(args[3]);
			if( type == "上一次触发的激光区域"){	
				var area = $gameSystem.drill_ELT_getLastArea() || [];
				$gameMap.drill_ELT_triggerArea( area, temp1 );
			}
		}
		if(args.length == 6){
			var type = String(args[1]);
			var temp1 = String(args[3]);
			var temp2 = String(args[5]);
			if( type == "上一次事件的激光区域"){	
				if( temp1 == "本事件"){
					temp1 = this._eventId;
				}
				var area = $gameMap.event(Number(temp1))._ELT_area || [];
				$gameMap.drill_ELT_triggerArea( area, temp2 );
			}
			if( type == "读取激光区域"){
				var area = $gameSystem.drill_ELT_loadArea(Number(temp1)) || [];
				$gameMap.drill_ELT_triggerArea( area, temp2 );
			}
		}
	}
	if (command === '>保存激光区域') {
		if(args.length == 4){
			var temp1 = String(args[1]);
			var type = String(args[3]);
			if( type == "上一次触发的"){
				var area = $gameSystem.drill_ELT_getLastArea() || [];
				$gameSystem.drill_ELT_saveArea( Number(temp1), area );
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
						e._drill_ELT.tags[temp2] = true;
						e._drill_ELT.self_switchs[temp2] = temp4;
					}
				}
			}
			if( type == "关闭" ){
				if( temp1 == "本事件" ){
					var e_id = this._eventId;
					var e = $gameMap.event( e_id );
					e._drill_ELT.tags[temp2] = false;
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
						e._drill_ELT.tags[temp2] = true;
						e._drill_ELT.self_switchs[temp2] = temp4;
					}
				}
			}
			if( type == "关闭" ){
				if( temp1 == "指定事件" ){
					var e = $gameMap.event( e_id );
					e._drill_ELT.tags[temp2] = false;
				}
			}
		}
	}
};

//=============================================================================
// ** 存储数据初始化
//=============================================================================
var _drill_ELT_system_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    _drill_ELT_system_initialize.call(this);
	this._drill_ELT_eventThrough = [];
};	

//=============================================================================
// ** 事件触发
//=============================================================================
//==============================
// * 事件触发 - 总流程（ 事件id， 方向集， 范围， 条件 ）
//==============================
Game_Map.prototype.drill_ELT_laserTrigger = function(e_id, dirs, range, tag ) {
	var e = this.event(e_id);
	var options = {};
	options["is_two_block"] = !DrillUp.g_ELT_diagonalThrough;	//斜角穿透
	options["through"] = $gameSystem._drill_ELT_eventThrough;	//事件穿透关系
	var area = this.drill_getLaserAreaWithADir(e._x, e._y, e._direction , dirs, range, options);
	//alert(JSON.stringify(area));
	e._ELT_area = area;
	$gameSystem.drill_ELT_setLastPoint({'x':e._x,'y':e._y});
	$gameSystem.drill_ELT_setLastArea(area);
	this.drill_ELT_triggerArea(area, tag );
}

//==============================
// * 事件触发 - 触发区域（实际区域[{x:21,y:31,block:true},{x:22,y:32,block:true}]，条件）
//==============================
Game_Map.prototype.drill_ELT_triggerArea = function( area, tag ) {
	
	var events = this.events();
	var need_reflash = false;
	for (var i = 0; i < events.length; i++) {  
		var temp_event = events[i];
		for (var j = 0; j < area.length ; j++) {    	//事件朝向与范围有关系
			var temp_point = area[j];
		
			if( DrillUp.g_ELT_fix ){	//修正
				if( temp_event.drill_isInPosEntirely(  temp_point['x'], temp_point['y'] ) &&
					temp_event._drill_ELT.tags[tag] == true ){	
					
					var key = [this._mapId, temp_event._eventId, temp_event._drill_ELT.self_switchs[tag] ];
					$gameSelfSwitches.drill_setValueWithOutChange(key,true);
					need_reflash = true;
					break;
				}
			}else{	//不修正
				if( temp_event.pos(  temp_point['x'], temp_point['y'] ) &&
					temp_event._drill_ELT.tags[tag] == true ){	
					
					var key = [this._mapId, temp_event._eventId, temp_event._drill_ELT.self_switchs[tag] ];
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
// * 	激光区域核心
//		
//		功能：		通过调用主函数，返回发射激光后的区域集合。
//		可选项：	options中有多个可选设置：
//					"is_two_block":true（斜角穿透判定） "through":[]（穿透标签） 
//		主函数：	var area = this.drill_getLaserAreaWithADir( c_x, c_y, a_dir, dirs, range, options  );
//					var area = this.drill_getLaserArea(c_x, c_y, new_dirs, range, options );
//=============================================================================
if( typeof(Game_Map.prototype.drill_getLaserArea) == "undefined" ){	//防止重复定义

	//==============================
	// * 区域 - 活动角色激光区域（ 位置x，位置y， 朝向(2/4/6/8)，激光方向集(东西南北+前后左右 方向)，范围，特殊选项）
	//==============================
	Game_Map.prototype.drill_getLaserAreaWithADir = function(c_x, c_y, a_dir, dirs, range, options ) {
		var new_dirs = [];
		if( dirs.contains("东") ){ new_dirs.push("东");}
		if( dirs.contains("南") ){ new_dirs.push("南");}
		if( dirs.contains("西") ){ new_dirs.push("西");}
		if( dirs.contains("北") ){ new_dirs.push("北");}
		if( dirs.contains("东南") ){ new_dirs.push("东南");}
		if( dirs.contains("东北") ){ new_dirs.push("东北");}
		if( dirs.contains("西南") ){ new_dirs.push("西南");}
		if( dirs.contains("西北") ){ new_dirs.push("西北");}
		
		if( a_dir == 2 ){//下
			if( dirs.contains("前") ){ new_dirs.push("南");}
			if( dirs.contains("后") ){ new_dirs.push("北");}
			if( dirs.contains("左") ){ new_dirs.push("东");}
			if( dirs.contains("右") ){ new_dirs.push("西");}
			if( dirs.contains("左前方") ){ new_dirs.push("东南");}
			if( dirs.contains("右前方") ){ new_dirs.push("西南");}
			if( dirs.contains("左后方") ){ new_dirs.push("东北");}
			if( dirs.contains("右后方") ){ new_dirs.push("西北");}
		}
		if( a_dir == 4 ){//左
			if( dirs.contains("前") ){ new_dirs.push("西");}
			if( dirs.contains("后") ){ new_dirs.push("东");}
			if( dirs.contains("左") ){ new_dirs.push("南");}
			if( dirs.contains("右") ){ new_dirs.push("北");}
			if( dirs.contains("左前方") ){ new_dirs.push("西南");}
			if( dirs.contains("右前方") ){ new_dirs.push("西北");}
			if( dirs.contains("左后方") ){ new_dirs.push("东南");}
			if( dirs.contains("右后方") ){ new_dirs.push("东北");}
		}
		if( a_dir == 6 ){//右
			if( dirs.contains("前") ){ new_dirs.push("东");}
			if( dirs.contains("后") ){ new_dirs.push("西");}
			if( dirs.contains("左") ){ new_dirs.push("北");}
			if( dirs.contains("右") ){ new_dirs.push("南");}
			if( dirs.contains("左前方") ){ new_dirs.push("东北");}
			if( dirs.contains("右前方") ){ new_dirs.push("东南");}
			if( dirs.contains("左后方") ){ new_dirs.push("西北");}
			if( dirs.contains("右后方") ){ new_dirs.push("西南");}
		}
		if( a_dir == 8 ){//上
			if( dirs.contains("前") ){ new_dirs.push("北");}
			if( dirs.contains("后") ){ new_dirs.push("南");}
			if( dirs.contains("左") ){ new_dirs.push("西");}
			if( dirs.contains("右") ){ new_dirs.push("东");}
			if( dirs.contains("左前方") ){ new_dirs.push("西北");}
			if( dirs.contains("右前方") ){ new_dirs.push("东北");}
			if( dirs.contains("左后方") ){ new_dirs.push("西南");}
			if( dirs.contains("右后方") ){ new_dirs.push("东南");}
		}
		return this.drill_getLaserArea(c_x, c_y, new_dirs, range, options );
	}
	//==============================
	// * 区域 - 固定方向激光区域（中心点x，中心点y，激光方向集(东西南北方向)，范围， 特殊选项）
	//==============================
	Game_Map.prototype.drill_getLaserArea = function( c_x, c_y, dirs, range, options ) {
		var cal_area = [];
		cal_area.push({'x':c_x,'y':c_y,'block': false });
		
		if( dirs.contains("东南") ){
			var area = this.drill_getSingleDiagonallyLaserArea( c_x, c_y, 6, 2, 135, range, options );
			cal_area = cal_area.concat(area);
		}
		if( dirs.contains("东北") ){
			var area = this.drill_getSingleDiagonallyLaserArea( c_x, c_y, 6, 8, 45, range, options );
			cal_area = cal_area.concat(area);
		}
		if( dirs.contains("西北") ){
			var area = this.drill_getSingleDiagonallyLaserArea( c_x, c_y, 4, 8, 315, range, options );
			cal_area = cal_area.concat(area);
		}
		if( dirs.contains("西南") ){
			var area = this.drill_getSingleDiagonallyLaserArea( c_x, c_y, 4, 2, 225, range, options );
			cal_area = cal_area.concat(area);
		}
		if( dirs.contains("东") ){
			var area = this.drill_getSingleLineLaserArea( c_x, c_y, 6, 90, range, options );
			cal_area = cal_area.concat(area);
		}
		if( dirs.contains("南") ){
			var area = this.drill_getSingleLineLaserArea( c_x, c_y, 2, 180, range, options );
			cal_area = cal_area.concat(area);
		}
		if( dirs.contains("西") ){
			var area = this.drill_getSingleLineLaserArea( c_x, c_y, 4, 270, range, options );
			cal_area = cal_area.concat(area);
		}
		if( dirs.contains("北") ){
			var area = this.drill_getSingleLineLaserArea( c_x, c_y, 8, 360, range, options );
			cal_area = cal_area.concat(area);
		}
		
		return cal_area;
	}
	//==============================
	// * 区域 - 单方向斜向激光区域（中心点x，中心点y，水平方向(4/6)，垂直方向(2/8)，自适应角度，范围，特殊选项）
	//==============================
	Game_Map.prototype.drill_getSingleDiagonallyLaserArea = function( c_x, c_y, dir_h, dir_v, angle, range, options ) {
		var cal_area = [];
		var laser = new Game_CharacterBase();
		laser._x = c_x;
		laser._y = c_y;
		if( options.through && options.through.length != 0 ){	//设置穿透
			laser._drill_ETh_char = {};
			for(var k=0; k<options.through.length; k++){ laser._drill_ETh_char[ String(options.through[k]) ] = true;  }
		}
		
		for (var i = 0; i < range ; i++) {
			var x = this.roundXWithDirection( laser._x, dir_h );
			var y = this.roundYWithDirection( laser._y, dir_v );
			if( laser.drill_canPassDiagonally(laser._x, laser._y, dir_h, dir_v, options.is_two_block) ){
				laser._x = x;
				laser._y = y;
				cal_area.push({'x':x ,'y':y ,'block': false, 'angle':angle });
			}else{
				cal_area.push({'x':x ,'y':y ,'block': true, 'angle':angle });
				return cal_area;
			}
		}
		return cal_area;
	}
	//==============================
	// * 区域 - 单方向直线激光区域（中心点x，中心点y，方向(2/4/6/8)，自适应角度，范围，特殊选项）
	//==============================
	Game_Map.prototype.drill_getSingleLineLaserArea = function( c_x, c_y, dir, angle, range, options ) {
		var cal_area = [];
		var laser = new Game_CharacterBase();
		laser._x = c_x;
		laser._y = c_y;
		if( options.through && options.through.length != 0 ){	//设置穿透
			laser._drill_ETh_char = {};
			for(var k=0; k<options.through.length; k++){ laser._drill_ETh_char[ String(options.through[k]) ] = true;  }
		}
		
		for (var i = 0; i < range ; i++) {
			var x = this.roundXWithDirection( laser._x, dir );
			var y = this.roundYWithDirection( laser._y, dir );
			if( laser.canPass(laser._x, laser._y, dir) ){
				laser._x = x;
				laser._y = y;
				cal_area.push({'x':x ,'y':y ,'block': false, 'angle':angle });
			}else{
				cal_area.push({'x':x ,'y':y ,'block': true, 'angle':angle });
				return cal_area;
			}
		}
		return cal_area;
	}
	//==============================
	// * 通行 - 穿透判断斜向可通行区域
	//==============================
	Game_CharacterBase.prototype.drill_canPassDiagonally = function(x, y, horz, vert, is_two_block ) {
		if( is_two_block == true ){
			return this.canPassDiagonally(x, y, horz, vert);
		}else{
			var x2 = $gameMap.roundXWithDirection(x, horz);
			var y2 = $gameMap.roundYWithDirection(y, vert);
			if (!$gameMap.isValid(x2, y2)) {
				return false;
			}
			if (!$gameMap.drill_isAnyPassable( x2, y2 )) {
				return false;
			}
			if (this.isCollidedWithCharacters(x2, y2)) {
				return false;
			}
			return true;
		}
	};
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
var _drill_ELT_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_drill_ELT_System_initialize.call(this);
	this._drill_ELT_last_areas = [];			//存储的区域
	this._drill_ELT_last_area = [];				//触发区域
	this._drill_ELT_last_point = {'x':0,'y':0};	//触发中心点
}
// * 设置 - 上一个触发区域 [{'x':21,'y':31,'block':true}……]
Game_System.prototype.drill_ELT_setLastArea = function(area) {
	this._drill_ELT_last_area = area;
}
// * 设置 - 上一个触发中心点 {'x':1,'y':1}
Game_System.prototype.drill_ELT_setLastPoint = function(p) {
	this._drill_ELT_last_point = p;
}
// * 获取 - 上一个触发区域
Game_System.prototype.drill_ELT_getLastArea = function() {
	return this._drill_ELT_last_area;
}
// * 获取 - 上一个触发中心点
Game_System.prototype.drill_ELT_getLastPoint = function() {
	return this._drill_ELT_last_point;
}
// * 设置 - 存储区域
Game_System.prototype.drill_ELT_saveArea = function( area_id, area ) {
	this._drill_ELT_last_areas[area_id] = area;
}
// * 设置 - 读取区域
Game_System.prototype.drill_ELT_loadArea = function( area_id) {
	return this._drill_ELT_last_areas[area_id];
}
	
//=============================================================================
// ** 地图事件初始化
//=============================================================================	
var _drill_ELT_char_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function() {
	_drill_ELT_char_initMembers.call(this);
	this._drill_ELT = {};				
	this._drill_ELT.tags = {};				//条件关键字（json串）
	this._drill_ELT.self_switchs = {};		//开启独立开关
};

//=============================================================================
// ** 事件注释初始化
//=============================================================================
var _drill_ELT_event_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
	_drill_ELT_event_setupPage.call(this);
    this.drill_ELT_setupPage();
};
Game_Event.prototype.drill_ELT_setupPage = function() {
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
						this._drill_ELT.tags[temp1] = true;
						this._drill_ELT.self_switchs[temp1] = temp3;
					}
				}
			};
		};
	}, this);};
};


