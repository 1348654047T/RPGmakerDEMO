//=============================================================================
// Drill_PickThrow.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        物体 - 举起花盆能力
 * @author Drill_up
 * 
 * @param 举起音效
 * @desc 举起花盆时，播放的音效。
 * @require 1
 * @dir audio/se/
 * @type file
 * @default Jump1
 * 
 * @param 投掷音效
 * @desc 投掷花盆时，播放的音效。
 * @require 1
 * @dir audio/se/
 * @type file
 * @default Jump1
 * 
 * @param 禁止花盆区
 * @type number[]
 * @min 0
 * @max 255
 * @desc 填入区域id，会被视作禁止花盆区，玩家不能在该区域捡花盆，扔花盆，并且投掷的花盆无法翻越该区域。
 * @default 
 *
 * @param 默认运输时花盆高度
 * @type number
 * @min 0
 * @desc 以角色的点为基准，花盆在角色上的高度，单位像素。你也可以在事件注释中设置。
 * @default 22
 * 
 * @param 开关-是否正在运输
 * @type switch
 * @desc 指定的开关将被实时赋值，判断角色是否正在运输花盆。
 * @default 0
 * 
 * @param 变量-正在运输的事件id
 * @type variable
 * @desc 指定的变量将被实时赋值，赋值角色正在运输的id，如果没有则为0。
 * @default 0
 * 
 * @help  
 * =============================================================================
 * +++ Drill_PickThrow +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 使得地图玩家能够与花盆等物件互动，该能力分3个阶段：举起、运输、投掷。
 * 【支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 举起：
 *     1.玩家/花盆任一个站在花盆禁区，都无法举起花盆。
 *     2.花盆一次只能捡一个。
 *     3.花盆通过事件注释激活是否可以被举起。默认不可举起。
 *     4.添加了可举起状态的事件页会被阻止运行方法。
 * 运输：
 *     1.玩家可以携带花盆穿过花盆禁区。
 *     2.花盆不能带出地图。
 *     3.玩家举着花盆进入剧情时，玩家隐身，花盆也会隐身。（旧版不会）
 *     4.运输时，如果设置"运输时朝向一致"，可以设置抬起某些石像来达到旋转
 *     石像机关的谜题。
 * 投掷：
 *     1.玩家站在花盆禁区，无法投掷花盆，并且扔花盆无法翻越禁区。
 *     2.地图中的事件，会阻塞扔花盆。但自己的队伍的成员不会。
 *     3.跳跃过程中可以扔花盆。
 *     4.花盆通过事件注释控制是否可以被投掷。默认可以投掷。
 *     （可以设置某些黏物可以捡起但无法投掷）
 * 其它：
 *     1.花盆具有堵路功能，你需要留意是否会堵住剧情中npc的道路。
 *     （可推动箱子也有堵路功能）
 *     2.被玩家运输的花盆，不能作任何移动操作，包括指定事件位置。
 *     3.如果你举起了物体，那么你的确定键是被占用的，确定键触发的事件，必须
 *     扔掉花盆后再触发。
 *     4.不要被花盆限制想象力了,它可以是恐龙蛋（落地就碎）,夜明珠（举起就地震）,
 *     火药石（运输时持续扣HP），鸡（隔一段时间自己挣脱被举），炸弹……
 * 
 * -----------------------------------------------------------------------------
 * ----控制操作 - 键盘、手柄
 * 键盘 - "确定"键拾取、投掷
 * 手柄 - "确定"键拾取、投掷
 *
 * -----------------------------------------------------------------------------
 * ----控制操作 - 鼠标、触屏
 * 鼠标 - 无法控制，点击不能举起，也不能投掷
 * 触屏 - 无法控制，触碰不能举起，也不能投掷
 *
 * 必须要 Drill_OperateHud 鼠标辅助操作面板 才能支持。
 * 鼠标 - 点击物体举起，点击操作面板的中心按钮为投掷
 * 触屏 - 触碰物体举起，触碰操作面板的中心按钮为投掷
 *
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 该插件可以单独使用，也可以通过其他插件添加更多功能。
 * 被扩展：
 *   - Drill_OperateHud 画面 - 鼠标辅助操作面板
 *     该插件提供鼠标、触碰辅助控制举起、投掷的支持。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 举起/投掷 控制
 * 要使得花盆可以被举起，需要使用下面的注释来设置：
 * （注意，冒号左右有两个空格）
 *
 * 事件注释：=>举起花盆 : 可举起
 * 事件注释：=>举起花盆 : 不可举起
 * 事件注释：=>举起花盆 : 可投掷
 * 事件注释：=>举起花盆 : 不可投掷
 *
 * 注意：所有事件默认 举起off ，投掷on 。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 触发开关
 * 如果你需要设置花盆在指定条件时触发指定开关，使用下面事件注释：
 * （注意，冒号左右有两个空格）
 * 
 * 事件注释：=>举起花盆 : 举起触发开关 : 1
 * 事件注释：=>举起花盆 : 举起触发独立开关 : A
 * 
 * 事件注释：=>举起花盆 : 落地触发开关 : 1
 * 事件注释：=>举起花盆 : 落地触发独立开关 : A
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 其他
 * 你还可以给事件设置其它属性：
 * （注意，冒号左右有两个空格）
 *
 * 事件注释：=>举起花盆 : 投掷距离 : 1
 * 事件注释：=>举起花盆 : 运输时朝向一致
 * 事件注释：=>举起花盆 : 设置运输时高度 : 22
 *
 * 1.所有事件默认投掷距离为1。
 * 2."运输时朝向一致"对勾选了固定朝向的事件也有效。
 * 固定朝向的事件一般都为某些石像，通过该方法可以用来举起旋转石像。
 * 3.如果未设置运输高度，则使用默认运输高度，高度单位为像素，可为负数。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 能力开关
 * 你可以通过插件指令设置玩家的能力。
 *
 * 插件指令：>举起花盆 : 举起功能开启
 * 插件指令：>举起花盆 : 举起功能关闭
 * 插件指令：>举起花盆 : 投掷功能开启
 * 插件指令：>举起花盆 : 投掷功能关闭
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 强制指令操作
 * 你可以通过插件指令设置某些特殊情况。
 *
 * 插件指令：>举起花盆 : 强制举起事件 : 10
 * 插件指令：>举起花盆 : 强制举起事件 : 本事件
 * 插件指令：>举起花盆 : 强制销毁运输的事件
 * 插件指令：>举起花盆 : 强制投掷
 * 插件指令：>举起花盆 : 强制投掷 : 不能投掷时销毁
 *
 * 1.强制举起无视所有条件，而且可以举起多个事件。
 * 你在使用强制举起事件前，最好判断一下玩家是否正在运输事件。
 * 
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * 推倒了旧mog插件的结构，重新写，添加了花盆禁区功能，修复了扔天花板问题。
 * 并且你可以通过插件指令和事件注释设置控制更多参数。
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		临时全局变量	DrillUp.xxx
//		临时局部变量	无
//		存储数据变量	$gameSystem.jump_enable
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//
//		举起：事件跳向玩家位置，是事件执行方法。
//		运输：事件实时刷新至玩家头上。
//		投掷：玩家扔向前方，是玩家执行方法。
//		【三个过程都是时间段内一直触发，一定要理清 只执行一次与持续执行 的方法！】
//
//		这里超级绕：
//					玩家：					事件：
//			举起：	无						_drill_pt_is_being_pick（不干扰本体，只触发开关）
//			运输：	_drill_pt_is_lifting	_drill_pt_is_being_lift
//			投掷：	无						_drill_pt_is_being_throw（不干扰本体，只触发开关）
//			
//			事件自身，有 可被举起 可被投掷 两个属性。
//
//		【真正控制过程本体的变量为如下：】
//			this._drill_pt_pick_wait			事件被举起缓冲
//			$gamePlayer._drill_pt_pick_wait		玩家举起缓冲
//
//			this._drill_pt_throw_wait			事件被投掷缓冲
//			$gamePlayer._drill_pt_throw_wait	玩家投掷缓冲
//
//			this._drill_pt_is_being_lift		事件正在被运输
//			$gamePlayer._drill_pt_is_lifting	玩家运输中
//
//			（其它变量都是干扰项，不要看）
//
//		参数赋值：
//			玩家是否在举
//			正在举起的事件

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_PickThrow = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_PickThrow');

	DrillUp.pt_liftingHeight = Number(DrillUp.parameters['默认运输时花盆高度'] || 22);
	DrillUp.pt_pick_se = String(DrillUp.parameters['举起音效'] || "");
	DrillUp.pt_throw_se = String(DrillUp.parameters['投掷音效'] || "");
	DrillUp.pt_var_is_lifting = Number(DrillUp.parameters['开关-是否正在运输'] || 0);
	DrillUp.pt_par_lift_event = Number(DrillUp.parameters['变量-正在运输的事件id'] || 0);
	
	DrillUp.pt_forbidden_area = [];
	if( DrillUp.parameters['禁止花盆区'] != undefined  && DrillUp.parameters['禁止花盆区'] != "" ){
		DrillUp.pt_forbidden_area = JSON.parse(DrillUp.parameters['禁止花盆区']);
	}else{
		DrillUp.pt_forbidden_area = [] ;
	}
	
	/*
	DrillUp.pt_src_list_length = 60;
	DrillUp.pt_src_list = {};
	for (var i = 1; i <= DrillUp.pt_src_list_length ; i++ ) {
		DrillUp.pt_src_list[i] = DrillUp.parameters['角色-' + String(i) + "-举起姿势" ];
	};*/
	
//=============================================================================
// * 插件指令
//=============================================================================
var _drill_pickThrow_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_pickThrow_pluginCommand.call(this, command, args);
	if (command === '>举起花盆') {
		if(args.length >= 2){
			var type = String(args[1]);
			if(args[3]){ var temp1 = args[3]; }
			if(args[5]){ var temp2 = args[5]; }
			if( type == "举起功能开启" ){
				$gameSystem._drill_all_can_pick = true;
			}
			if( type == "举起功能关闭" ){
				$gameSystem._drill_all_can_pick = false;
			}
			if( type == "投掷功能开启" ){
				$gameSystem._drill_all_can_throw = true;
			}
			if( type == "投掷功能关闭" ){
				$gameSystem._drill_all_can_throw = false;
			}
			if( type == "强制举起事件" ){
				if( String(temp1) == "本事件" ){
					$gameMap.events().forEach(function(event) {
						if (event.eventId() === this._eventId) {
							event.drill_doPick();
						};
					}, this);	
				}else{
					$gameMap.events().forEach(function(event) {
						if (event.eventId() === Number(temp1)) {
							event.drill_doPick();
						};
					}, this);	
				}
			}
			if( type == "强制销毁运输的事件" ){
				var e = $gamePlayer.drill_getLiftingEvent();
				if( e!=null ){ e.erase(); }
				$gamePlayer.drill_clearLifting();
			}
			if( type == "强制投掷" ){
				$gamePlayer.drill_doThrow();
				if( String(temp1) == "不能投掷时销毁" ){
					var e = $gamePlayer.drill_getLiftingEvent();
					if( e!=null ){ e.erase(); }
					$gamePlayer.drill_clearLifting();
				}
			}
		}
	}
};

//=============================================================================
// ** 存储变量初始化
//=============================================================================
var _drill_pickThrow_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    _drill_pickThrow_sys_initialize.call(this);
	this._drill_all_can_pick = true;
	this._drill_all_can_throw = true;
	
	this._drill_being_lift_event = 0;		//正在被举的事件id
};	

//==============================
// * 变量赋值
//==============================
var _drill_pickThrow_map_update = Game_Map.prototype.update;
Game_Map.prototype.update = function(sceneActive) {
	_drill_pickThrow_map_update.call(this,sceneActive);
	
	//不能实时赋值，rmmv默认赋值会刷新整个地图
	$gameSwitches.drill_setValueWithOutChange( DrillUp.pt_var_is_lifting, $gamePlayer._drill_pt_is_lifting );
	$gameVariables.drill_setValueWithOutChange( DrillUp.pt_par_lift_event, $gameSystem._drill_being_lift_event );
};
//==============================
// * 优化 - 开关赋值时不刷新地图
//==============================
Game_Switches.prototype.drill_setValueWithOutChange = function(switchId, value) {
    if (switchId > 0 && switchId < $dataSystem.switches.length) {
        this._data[switchId] = value;
    }
};
//==============================
// * 优化 - 变量赋值时不刷新地图
//==============================
Game_Variables.prototype.drill_setValueWithOutChange = function(variableId, value) {
    if (variableId > 0 && variableId < $dataSystem.variables.length) {
        if (typeof value === 'number') {
            value = Math.floor(value);
        }
        this._data[variableId] = value;
    }
};

//=============================================================================
// ** 地图事件初始化
//=============================================================================	
var _drill_pickThrow_char_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function() {
	_drill_pickThrow_char_initMembers.call(this);
	this.drill_pickThrowInit();
};
Game_CharacterBase.prototype.drill_pickThrowInit = function() {
	
	this._drill_pt_pick_enabled = false;			//事件可举起
	this._drill_pt_pick_wait = 0;   				//事件被举起中（时间）
	this._drill_pt_is_being_pick = false;			//事件被投掷中
	
	this._drill_pt_is_being_lift = false;			//事件正在被运输
	//this._drill_pt_is_lifting = false;			//（玩家）正在运输
	
	this._drill_pt_throw_enabled = true;			//事件可投掷
	this._drill_pt_throw_wait = 0;					//事件被投掷中（时间）
	this._drill_pt_is_being_throw = false;			//事件被投掷中
	
	this._drill_pt_pick_through = false;			//举起前 事件的"是否穿透"（不要初始化时的属性，因为可能会变）
	this._drill_pt_pick_directionFix = false;		//举起前 事件的"固定朝向"
	this._drill_pt_attr_change_directionFix = false;//事件属性-运输时朝向一致
	this._drill_pt_throw_range = 1;					//事件属性-被投掷的距离
}

//=============================================================================
// ** 事件注释初始化
//=============================================================================
var _drill_pickThrow_event_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
	_drill_pickThrow_event_setupPage.call(this);
    this.drill_setupPickThrow();					//不要再重置页面时，初始化变量（这会改变举起的状态）
};
Game_Event.prototype.drill_setupPickThrow = function() {
	this._drill_pt_pick_enabled = false;	//新事件页没有任何注释时，默认不可举起
	
	if (!this._erased && this.page()) {this.list().forEach(function(l) {
		if (l.code === 108) {
			var args = l.parameters[0].split(' ');
			var command = args.shift();
			if (command == "=>举起花盆"){
				if(args.length >= 2){
					var type = String(args[1]);
					if(args[3]){ var temp1 = String(args[3]); }
					if( type == "可举起" ){
						this._drill_pt_pick_enabled = true;
					}
					if( type == "不可举起" ){
						this._drill_pt_pick_enabled = false;
					}
					if( type == "举起触发独立开关" ){
						this._drill_pt_pick_self_switch = temp1;
					}
					if( type == "举起触发开关" ){
						this._drill_pt_pick_var_switch = Number(temp1);
					}
					if( type == "运输时朝向一致" ){
						this._drill_pt_attr_change_directionFix = true;
					}
					if( type == "设置运输时高度" ){
						this._drill_pt_lifting_height = Number(temp1);
					}
					if( type == "可投掷" ){
						this._drill_pt_throw_enabled = true;
					}
					if( type == "不可投掷" ){
						this._drill_pt_throw_enabled = false;
					}
					if( type == "设置投掷距离" ){
						this._drill_pt_throw_range = Number(temp1);
					}
					if( type == "落地触发独立开关" ){
						this._drill_pt_throw_self_switch = temp1;
					}
					if( type == "落地触发开关" ){
						this._drill_pt_throw_var_switch = Number(temp1);
					}
				}
			};
		};
	}, this);};
};

//==============================
// * 播放音效
//==============================
SoundManager.drill_playPickThrowSE = function(fileName){
   var se = {};
   se.name = fileName;
   se.pitch = 100;
   se.volume = 100;
   AudioManager.playSe(se);
};  
//==============================
// * 播放错误提示音效（持续时的自缓冲播放，不要用在只执行一次的方法中）
//==============================
SoundManager.drill_playBuzzer_buffered = function() {
	if(this._drill_bz_soundbuffer == undefined){
		this._drill_bz_soundbuffer = 0;
	}
	if(this._drill_bz_soundbuffer == 0){
		SoundManager.playBuzzer();
		this._drill_bz_soundbuffer = 8;
	}
	this._drill_bz_soundbuffer -= 1;
}

//==============================
// * 事件帧刷新
//==============================
var _drill_pickThrow_char_update = Game_CharacterBase.prototype.update;
Game_CharacterBase.prototype.update = function() {
	if (this._drill_pt_throw_wait > 0) {	//等待投掷
		this._drill_pt_throw_wait -= 1;
	    if (this.isJumping()) {this.updateJump()};		//跳跃时 等待投掷
		return;
	};
	if (this._drill_pt_pick_wait > 0) {	//等待举起
		this._drill_pt_pick_wait -= 1;
	    if (this.isJumping()) {this.updateJump()};		//跳跃时 等待投掷
		return;
	};
	if (this._drill_pt_is_being_lift ) {	//运输中帧刷新
		this.drill_updateLifting();
		this.updateAnimation();
		return;	//阻止自动寻路控制
	};
	
	
	/*
	if ( !this.isJumping() && this._drill_pt_is_being_pick == true ){	//举起触发开关
		this._drill_pt_is_being_pick = false;
		if( this._drill_pt_pick_self_switch != undefined ){
			var key = [this._mapId, this._eventId, this._drill_pt_pick_self_switch ];
			$gameSelfSwitches.setValue(key,true);
		}
		if( this._drill_pt_pick_var_switch != undefined ){
			$gameSwitches.setValue( Number(this._drill_pt_pick_var_switch),true );
		}
	}*/
	
	if ( !this.isJumping() && this._drill_pt_is_being_throw == true ){	//落地触发开关
		this._drill_pt_is_being_throw = false;
		if( this._drill_pt_throw_self_switch != undefined ){
			var key = [this._mapId, this._eventId, this._drill_pt_throw_self_switch ];
			$gameSelfSwitches.setValue(key,true);
		}
		if( this._drill_pt_throw_var_switch != undefined ){
			$gameSwitches.setValue( Number(this._drill_pt_throw_var_switch),true );
		}
	}
    _drill_pickThrow_char_update.call(this);
};

//=============================================================================
// ** 举起
//=============================================================================
//==============================
// * 举起 - 开始举起
//==============================
var _drill_pickThrow_event_start = Game_Event.prototype.start;
Game_Event.prototype.start = function() {
	if ( this.drill_canPick_Normal() ) {			//基本举起条件
		if ( $gamePlayer.drill_isPickControl()){	//举起按键【如果没有这个，扔出去之后，又会被捡回来……】
			if( this.drill_canPick_Conditional() ){		//限制举起条件
				this.drill_doPick();
			}else{
				SoundManager.playBuzzer();
			}
		}
		return;	//与事件交互时，直接捡起，并阻止后面事件内容。
	}else{
		_drill_pickThrow_event_start.call(this);
	}
};
//==============================
// * 按键控制条件
//==============================
Game_Player.prototype.drill_isPickControl = function() {
	//确定键
	return Input.isPressed('ok');
}

//==============================
// * 举起 - 举起条件
//==============================
Game_Event.prototype.drill_canPick_Normal = function() {
	//不能举起，是因为程序执行的静态属性，不播放错误音
	if ($gamePlayer._drill_pt_pick_wait > 0) {return false};//玩家正在举起
	if (this._drill_pt_pick_wait > 0) {return false};		//事件被举起中（时间）
	
	if ($gamePlayer._drill_pt_is_lifting ) {return false};	//玩家正在运输
	if (this._drill_pt_is_being_lift) {return false};		//事件被运输中
	
	if ($gamePlayer._drill_pt_throw_wait > 0) {return false};//玩家正在投掷
	if (this._drill_pt_throw_wait > 0) {return false};		//事件被投掷中（时间）
	
	if ( !this._drill_pt_pick_enabled) {return false};		//物体不能被举起
    return true;
}
Game_Event.prototype.drill_canPick_Conditional = function() {
	//不能举起，是因为特殊的限制条件，播放错误音
	if (!$gameSystem._drill_all_can_pick) {return false};	//举起能力被关闭
	
	if (this.drill_isInThrowForbiddenArea(this._x,this._y)) {return false};	//在花盆禁区中
	if (this.drill_isInThrowForbiddenArea($gamePlayer._x,$gamePlayer._y)) {return false};
	
    return true;
};

//==============================
// * 举起 - 执行举起
//==============================
Game_Event.prototype.drill_doPick = function() {

	this._drill_pt_is_being_pick = true;
	if( this._drill_pt_pick_self_switch != undefined ){	//举起前开启独立开关
		var key = [this._mapId, this._eventId, this._drill_pt_pick_self_switch ];
		$gameSelfSwitches.setValue(key,true);
	}
	if( this._drill_pt_pick_var_switch != undefined ){
		$gameSwitches.setValue( Number(this._drill_pt_pick_var_switch),true );
	}
	
	this._drill_pt_pick_wait = 15;
	this._drill_pt_is_being_lift = true;
	$gamePlayer._drill_pt_pick_wait = 15;
	$gamePlayer._drill_pt_is_lifting = true;
	$gameSystem._drill_being_lift_event = this._eventId;
	
	this._transparent = $gamePlayer._transparent;			//"透明"与玩家一样
	this._drill_pt_pick_through = this._through;			//"是否穿透"
	this._drill_pt_pick_directionFix = this._directionFix;	//"固定朝向"
	this._through = true;
	if( this._drill_pt_attr_change_directionFix ){
		this._directionFix = false ;
	}
	
	var x = $gamePlayer._x - this._x;
	var y = $gamePlayer._y - this._y;
	this.jump(x,y);
	SoundManager.drill_playPickThrowSE(String( DrillUp.pt_pick_se ));
};

//=============================================================================
// ** 运输
//=============================================================================
//==============================
// * 运输 - 离开地图清除玩家状态
//==============================
var _drill_pickThrow_player_clearTransferInfo = Game_Player.prototype.clearTransferInfo;
Game_Player.prototype.clearTransferInfo = function() {
    _drill_pickThrow_player_clearTransferInfo.call(this);
    this.drill_clearLifting();
};

//==============================
// * 运输 - 清除状态
//==============================
Game_Player.prototype.drill_clearLifting = function() {
	this._drill_pt_is_lifting = false;
	this._drill_pt_pick_wait = 0;
	this._drill_pt_throw_wait = 0;
};
//==============================
// * 运输 - 获取正在运输的事件
//==============================
Game_Player.prototype.drill_getLiftingEvent = function() {
	var events = $gameMap.events();
	for (var i = 0; i < events.length; i++) {  
		var temp_event = events[i];
		if ( temp_event._drill_pt_is_being_lift != undefined && temp_event._drill_pt_is_being_lift == true ) {
			return temp_event;
		};
    } 
	return null;
};
//==============================
// * 运输 - 运输状态检查（不是实时的，用于插件指令造成的特殊情况）
//==============================
Game_CharacterBase.prototype.drill_checkLifting = function() {
	//地图中存在被运输的事件，玩家状态被开启
	if( $gamePlayer.drill_getLiftingEvent() != null ){
		$gamePlayer._drill_pt_is_lifting = true;
	}
};

//==============================
// * 运输 - 玩家改变透明情况
//==============================
var _drill_pt_player_setTransparent = Game_Player.prototype.setTransparent
Game_Player.prototype.setTransparent = function(transparent) {
	_drill_pt_player_setTransparent.call(this,transparent);
	if($gamePlayer){
		var e = $gamePlayer.drill_getLiftingEvent();
		if( e != null ){
			e._transparent = transparent;
		}
	}
};

//==============================
// * 运输 - 帧刷新
//==============================
Game_CharacterBase.prototype.drill_updateLifting = function() {
    this._x = $gamePlayer._x;
	this._y = $gamePlayer._y;
    this._realX = $gamePlayer._realX;
    this._realY = $gamePlayer._realY;	
	if( this._drill_pt_attr_change_directionFix ){
		this._direction = $gamePlayer._direction;	
	}
};

//==============================
// * 运输 - 被举起物z轴控制（与玩家贴图的先后顺序）
//==============================
var _drill_pickThrow_pSprite_updatePosition = Sprite_Character.prototype.updatePosition;
Sprite_Character.prototype.updatePosition = function() {
	if(this._character != $gamePlayer){
		if ( this._character._drill_pt_is_being_lift && this._character._drill_pt_pick_wait == 0 ) {
			this.drill_updateLiftingObjSprite();
			return;
		};
		_drill_pickThrow_pSprite_updatePosition.call(this);
		if (this._character._drill_pt_pick_wait > 0 ) {this.z = $gamePlayer.screenZ() + 1};
		if (this._character._drill_pt_throw_wait > 0 ){this.z = $gamePlayer.screenZ() + 1};
	}else{
		_drill_pickThrow_pSprite_updatePosition.call(this);
	}
};
//==============================
// * 运输 - 刷新被举起物位置帧
//==============================
Sprite_Character.prototype.drill_updateLiftingObjSprite = function() {
	if(this._character != $gamePlayer){
		this.x = $gamePlayer.screenX();
		this.y = $gamePlayer.screenY() - DrillUp.pt_liftingHeight;
		this.z = $gamePlayer.screenZ() + 1;	
		
		if( this._character._drill_pt_lifting_height != undefined){
			this.y = $gamePlayer.screenY() - this._character._drill_pt_lifting_height;
		}
	}
};

//=============================================================================
// ** 投掷
//=============================================================================	
//==============================
// * 投掷 - 开始投掷
//==============================

var _drill_pickThrow_moveByInput = Game_Player.prototype.moveByInput;
Game_Player.prototype.moveByInput = function() {
	
	if ( this.drill_canThrow_Normal() ) {		//投掷基本条件
	    if (this.drill_isThrowControl()) {		//投掷按键
			if(this.drill_canThrow_Conditional()){	//投掷限制条件
				this.drill_doThrow();
				return ;
			}else{
				SoundManager.drill_playBuzzer_buffered();
			}
		};
    };
	_drill_pickThrow_moveByInput.call(this);	
};
//==============================
// * 按键控制条件
//==============================
Game_Player.prototype.drill_isThrowControl = function() {
	//确定键
	return Input.isPressed('ok');
}
//==============================
// * 投掷 - 投掷条件
//==============================
Game_Player.prototype.drill_canThrow_Normal = function() {
	//不能举起，是因为程序执行的静态属性，不播放错误音
	if ( this._drill_pt_pick_wait > 0 ) {return false};		//玩家正在举起（时间）
	if ( !this._drill_pt_is_lifting ) {return false};		//玩家未举物体
	if ( this._drill_pt_throw_wait > 0 ) {return false};	//玩家正在投掷（时间）
	
	if ( !this.canMove() ) {return false};					//玩家不能移动
    return true;
}
Game_Player.prototype.drill_canThrow_Conditional = function() {
	//不能举起，是因为特殊的限制条件，播放错误音
	if (!$gameSystem._drill_all_can_throw) {return false};	//投掷能力被关闭
	var e = $gamePlayer.drill_getLiftingEvent();
	if( e!=null ){
		if( e._drill_pt_throw_enabled == false){
			return false;
		}
	}
	
	if ( this.drill_isInThrowForbiddenArea(this._x,this._y) ) {return false};	//花盆禁区禁止投掷
	
    return true;
};

//==============================
// * 投掷 - 占用确定键
//==============================
var _drill_player_triggerAction = Game_Player.prototype.triggerAction;
Game_Player.prototype.triggerAction = function() {
	if (this._drill_pt_pick_wait > 0) {return false};
	if (this._drill_pt_throw_wait > 0) {return false};	
    if (this._drill_pt_is_lifting) {return false};
	_drill_player_triggerAction.call(this);
	return false;
};

//==============================
// * 投掷 - 执行投掷
//==============================
Game_Player.prototype.drill_doThrow = function() {
	$gameMap.events().forEach(function(event) {
		if (event._drill_pt_is_being_lift) {		//找到被举起标记的对象，执行投掷
			this.drill_eventBeingThrow(event);	
		};
    }, this);
	
};
//==============================
// * 投掷 - 执行投掷（事件被投掷）
//==============================
Game_Player.prototype.drill_eventBeingThrow = function(event) {
	
	var distance = event._drill_pt_throw_range;
	var tar_x = 0;	
	var tar_y = 0;	
	
	if (this._direction === 2) {		//下
		tar_x = this._x;
		tar_y = this._y;
		for (var i = 1; i <= distance; i++) {		//向前一步步推进判断，函数是直接执行到底的
			var next_x = this._x;						//	原理与跳跃一样，只是忽视了悬崖高度
			var next_y = this._y + i;		
			if (this.drill_canPassThrow(next_x,next_y)) {
				tar_x = next_x;
				tar_y = next_y;
			};
			if( this.drill_isInThrowForbiddenArea(next_x,next_y) ){
				break;
			}
		};	
	} else if (this._direction === 4) {	//左
		tar_x = this._x;
		tar_y = this._y;
		for (var i = 1; i <= distance; i++) {	
			var next_x = this._x - i;
			var next_y = this._y;
			if (this.drill_canPassThrow(next_x,next_y)) {
				tar_x = next_x;
				tar_y = next_y;
			};
			if( this.drill_isInThrowForbiddenArea(next_x,next_y) ){
				break;
			}
		};	
	} else if (this._direction === 6) {	//右
		tar_x = this._x;
		tar_y = this._y;
		for (var i = 1; i <= distance; i++) {	
			var next_x = this._x + i;
			var next_y = this._y;
			if (this.drill_canPassThrow(next_x,next_y)) {
				tar_x = next_x;
				tar_y = next_y;
			};
			if( this.drill_isInThrowForbiddenArea(next_x,next_y) ){
				break;
			}
		};	
	} else if (this._direction === 8) {	//上
		tar_x = this._x;
		tar_y = this._y;
		for (var i = 1; i <= distance; i++) {	
			var next_x = this._x;
			var next_y = this._y - i;
			if (this.drill_canPassThrow(next_x,next_y)) {
				tar_x = next_x;
				tar_y = next_y;
			};
			if( this.drill_isInThrowForbiddenArea(next_x,next_y) ){
				break;
			}
		};	
	};
	if( tar_x == this._x && tar_y == this._y ){		//被挡住了，无法投掷
		SoundManager.playBuzzer();	//这部分也属于投掷限制条件（只是转移函数会非常麻烦）
		this.drill_checkLifting();
		return;
	}
	
	event._transparent = false;		//关闭透明
	event.jump( tar_x-this._x , tar_y-this._y );
	event._drill_pt_is_being_throw = true;
	
	$gamePlayer._drill_pt_is_lifting = false;
	$gamePlayer._drill_pt_throw_wait = 15;
	event._drill_pt_is_being_lift = false;
    event._drill_pt_throw_wait = 15;
	
	event._through = this._drill_pt_pick_through;			//还原举起前的属性状态
	if( this._drill_pt_attr_change_directionFix ){
		event._directionFix = this._drill_pt_pick_directionFix;	
	}
	$gameSystem._drill_being_lift_event = 0;
	
	SoundManager.drill_playPickThrowSE(String( DrillUp.pt_throw_se ));
};

//==============================
// * 投掷 - 判断投掷目的地
//==============================
Game_CharacterBase.prototype.drill_canPassThrow = function(x, y ) {
	
    if (!$gameMap.isValid(x, y)) {					//地图范围内
        return false;
    }
    if (this.isThrough() || this.isDebugThrough()) { //玩家穿透开启情况
        return true;
    }
    if ( this.drill_isInThrowForbiddenArea(x, y) ) {//是否为投掷禁区
        return false;
    };
    if (!$gameMap.drill_isAnyPassable(x, y)) {		//图块可通行状况
        return false;
    };
    if (this.isCollidedWithCharacters(x, y)) {		//事件碰撞（与玩家相同层的碰撞）
        return false;
    }
    return true;
}
//==============================
// * 投掷 - 判断投掷禁区
//==============================
Game_CharacterBase.prototype.drill_isInThrowForbiddenArea = function(x, y) {
	var r_id = $gameMap.regionId(x,y);
	for(var i = 0; i < DrillUp.pt_forbidden_area.length ;i++){	//禁止跳跃区域
		if( r_id == DrillUp.pt_forbidden_area[i] ){
			return true;
		}
	}
	return false;
}
