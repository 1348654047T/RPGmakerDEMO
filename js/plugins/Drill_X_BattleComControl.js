//=============================================================================
// Drill_X_BattleComControl.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        战斗 - 技能类型控制[扩展]
 * @author Drill_up
 *
 * @param 资源-封印攻击
 * @desc 封印攻击按钮的图片资源。
 * @default Com_节奏攻击_封印
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 资源-封印防御
 * @desc 封印防御按钮的图片资源。
 * @default Com_防御_封印
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 资源-封印道具
 * @desc 封印道具按钮的图片资源。
 * @default Com_道具_封印
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param ---自定义封印类型组---
 * @default 
 *
 * @param 封印类型-1
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-2
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-3
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-4
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-5
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-6
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-7
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-8
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-9
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-10
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-11
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-12
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-13
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-14
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-15
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-16
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-17
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-18
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-19
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @param 封印类型-20
 * @parent ---自定义封印类型组---
 * @desc 封印类型按钮的图片资源。
 * @default 
 * @require 1
 * @dir img/battlecommands/
 * @type file
 *
 * @help  
 * =============================================================================
 * +++ Drill_X_BattleComControl +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 你可以控制禁用攻击、防御、道具，以及敌人的技能类型被封印的效果。
 * ★★必须放在插件 MOG_BattleCommands技能类型面板 的后面★★
 * 
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 插件可以单独使用，控制技能的封印情况。
 * 作用于：
 *   - MOG_BattleCommands 战斗-技能类型面板 
 *     可以给目标插件设置封印技能的按钮。
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 要禁用玩家的攻击、防御、道具能力，直接添加注释即可：
 *
 * 角色注释：<禁用攻击>
 * 角色注释：<禁用防御>
 * 角色注释：<禁用道具>
 * 角色注释：<封印攻击>
 * 角色注释：<封印防御>
 * 角色注释：<封印道具>
 *
 * 你也可以将封印设置在 状态 上面：
 * 
 * 状态注释：<封印攻击>
 * 状态注释：<封印防御>
 * 状态注释：<封印道具>
 * 状态注释：<封印技能类:B>
 *
 * 参数B：技能类型
 *        对应 数据库>类型>技能类型 的编号。
 *
 * 状态的控制只对角色起作用，对敌人不起作用。
 * 注意禁用和封印的区别，封印会显示选项，但是不能按，禁用是直接隐藏选项。
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过插件指令手动控制类型情况：
 * （冒号两边都有一个空格）
 * 
 * 插件指令：>技能类型 : A : 禁用攻击
 * 插件指令：>技能类型 : A : 禁用防御
 * 插件指令：>技能类型 : A : 禁用道具
 * 插件指令：>技能类型 : A : 可用攻击
 * 插件指令：>技能类型 : A : 可用防御
 * 插件指令：>技能类型 : A : 可用道具
 * 
 * 插件指令：>技能类型 : A : 封印攻击
 * 插件指令：>技能类型 : A : 封印防御
 * 插件指令：>技能类型 : A : 封印道具
 * 插件指令：>技能类型 : A : 解封攻击
 * 插件指令：>技能类型 : A : 解封防御
 * 插件指令：>技能类型 : A : 解封道具
 * 
 * 插件指令：>技能类型 : A : 封印技能类 : B
 * 插件指令：>技能类型 : A : 解封技能类 : B
 *
 * 参数A：角色编号
 * 参数B：技能类型
 *        对应 数据库>类型>技能类型 的编号。
 *
 * 示例：
 * 插件指令：>技能类型 : 5 : 封印防御
 * 插件指令：>技能类型 : 5 : 封印技能类 : 4
 * （5号角色 的 4号技能类型 特殊技 被封印）
 *
 * 插件指令的封印的效果一直持续到战斗结束。
 * 注意禁用和封印的区别，封印会显示选项，但是不能按，禁用是直接隐藏选项。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		临时全局变量	DrillUp.xxx
//		临时局部变量	无
//		存储数据变量	$gameSystem._drill_.xxx
//		全局存储变量	无
//		覆盖重写方法	Window_ActorCommand.prototype.addSkillCommands
//
//插件记录：
//		对玩家命令窗口进行高度分配控制，禁用 = 不添加命令，封印 = 建立一个空的不可点击的命令。
//			addAttackCommand
//			addGuardCommand
//			addItemCommand
//			addSkillCommands
//
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_X_BattleComControl = true;
　　var DrillUp = DrillUp || {}; 

    DrillUp.parameters = PluginManager.parameters('Drill_X_BattleComControl');
	
	DrillUp.bComCtrl_atk = String(DrillUp.parameters['资源-封印攻击']);
	DrillUp.bComCtrl_def = String(DrillUp.parameters['资源-封印防御']);
	DrillUp.bComCtrl_item = String(DrillUp.parameters['资源-封印道具']);
	DrillUp.bComCtrl_list_length = 20;
	DrillUp.bComCtrl_list = {};
	for (DrillUp.i = 1; DrillUp.i <= DrillUp.bComCtrl_list_length ; ++DrillUp.i) {
		DrillUp.line = "String(DrillUp.parameters['封印类型-" + DrillUp.i + "'] )";
		DrillUp.bComCtrl_list[DrillUp.i] = eval(DrillUp.line);
	};

//=============================================================================
// ** 插件指令
//=============================================================================
var _drill_bComCtrl_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_bComCtrl_pluginCommand.call(this, command, args);
	if (command === '>技能类型') { // >技能类型 : A : 禁用攻击
		if(args.length == 4){
			var temp1 = Number(args[1]);
			var type = String(args[3]);
			if( type == '禁用攻击' ){ $gameSystem._drill_bComCtrl_availables[temp1][0] = true; }
			if( type == '禁用防御' ){ $gameSystem._drill_bComCtrl_availables[temp1][1] = true; }
			if( type == '禁用道具' ){ $gameSystem._drill_bComCtrl_availables[temp1][2] = true; }
			if( type == '可用攻击' ){ $gameSystem._drill_bComCtrl_availables[temp1][0] = false; }
			if( type == '可用防御' ){ $gameSystem._drill_bComCtrl_availables[temp1][1] = false; }
			if( type == '可用道具' ){ $gameSystem._drill_bComCtrl_availables[temp1][2] = false; }
			
			if( type == '封印攻击' ){ $gameSystem._drill_bComCtrl_enables[temp1][0] = true; }
			if( type == '封印防御' ){ $gameSystem._drill_bComCtrl_enables[temp1][1] = true; }
			if( type == '封印道具' ){ $gameSystem._drill_bComCtrl_enables[temp1][2] = true; }
			if( type == '解封攻击' ){ $gameSystem._drill_bComCtrl_enables[temp1][0] = false; }
			if( type == '解封防御' ){ $gameSystem._drill_bComCtrl_enables[temp1][1] = false; }
			if( type == '解封道具' ){ $gameSystem._drill_bComCtrl_enables[temp1][2] = false; }
		}
		if(args.length == 6){
			var temp1 = Number(args[1]);
			var temp2 = Number(args[5]);
			var type = String(args[3]);
			if( type == '封印技能类' ){ 
				$gameSystem._drill_bComCtrl_enables[temp1][temp2 +3 -1 ] = true; 
			}
			if( type == '解封技能类' ){ 
				$gameSystem._drill_bComCtrl_enables[temp1][temp2 +3 -1 ] = false; 
			}
		}
	}
};
	
//=============================================================================
// ** 读取注释初始化
//=============================================================================
var _drill_BattleComControl_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_drill_BattleComControl_initialize.call(this);
	this._drill_bComCtrl_availables = [];
	this._drill_bComCtrl_enables = [];
	for( var i = 0; i < $dataActors.length; i++ ){	//物品
		this._drill_bComCtrl_availables[i] = [false,false,false];
		this._drill_bComCtrl_enables[i] = [false,false,false, 
			false,false,false,false,false, false,false,false,false,false,
			false,false,false,false,false, false,false,false,false,false];
		if( $dataActors[i] == null ){
			continue;
		}
		var note = String($dataActors[i].note);
		var color = (note.match( /<禁用攻击>/ )) || [];
		if( color.length != 0 ){ this._drill_bComCtrl_availables[i][0] = true; }
		color = (note.match( /<禁用防御>/ )) || [];
		if( color.length != 0 ){ this._drill_bComCtrl_availables[i][1] = true; }
		color = (note.match( /<禁用道具>/ )) || [];
		if( color.length != 0 ){ this._drill_bComCtrl_availables[i][2] = true; }
		color = (note.match( /<封印攻击>/ )) || [];
		if( color.length != 0 ){ this._drill_bComCtrl_enables[i][0] = true; }
		color = (note.match( /<封印防御>/ )) || [];
		if( color.length != 0 ){ this._drill_bComCtrl_enables[i][1] = true; }
		color = (note.match( /<封印道具>/ )) || [];
		if( color.length != 0 ){ this._drill_bComCtrl_enables[i][2] = true; }
	}
};

//=============================================================================
// ** 禁用设置初始化
//=============================================================================

//==============================
// * 命令-攻击
//==============================
var _drill_BattleComControl_addAttackCommand = Window_ActorCommand.prototype.addAttackCommand;
Window_ActorCommand.prototype.addAttackCommand = function() {
	if( $gameSystem._drill_bComCtrl_availables[this._actor._actorId][0] ){	//插件指令检查
		return;
	}
	if( $gameSystem._drill_bComCtrl_enables[this._actor._actorId][0] ){
		this.addCommand(TextManager.attack, 'attack_lock', false);
		return;
	}
	for(var i = 0; i< this._actor._states.length ;i++){		//状态检查
		var s_id = this._actor._states[i];
		var note = String($dataStates[s_id].note);
		var color = (note.match( /<封印攻击>/ )) || [];
		if( color.length != 0 ){ this.addCommand(TextManager.attack, 'attack_lock', false); return;}
	}
	_drill_BattleComControl_addAttackCommand.call(this);
}
//==============================
// * 命令-防御
//==============================
var _drill_BattleComControl_addGuardCommand = Window_ActorCommand.prototype.addGuardCommand;
Window_ActorCommand.prototype.addGuardCommand = function() {
	if( $gameSystem._drill_bComCtrl_availables[this._actor._actorId][1] ){	//插件指令检查
		return;
	}
	if( $gameSystem._drill_bComCtrl_enables[this._actor._actorId][1] ){
		this.addCommand(TextManager.guard, 'guard_lock', false);
		return;
	}
	for(var i = 0; i< this._actor._states.length ;i++){		//状态检查
		var s_id = this._actor._states[i];
		var note = String($dataStates[s_id].note);
		var color = (note.match( /<封印防御>/ )) || [];
		if( color.length != 0 ){ this.addCommand(TextManager.guard, 'guard_lock', false); return;}
	}
	_drill_BattleComControl_addGuardCommand.call(this);
}
//==============================
// * 命令-道具
//==============================
var _drill_BattleComControl_addItemCommand = Window_ActorCommand.prototype.addItemCommand;
Window_ActorCommand.prototype.addItemCommand = function() {
	if( $gameSystem._drill_bComCtrl_availables[this._actor._actorId][2] ){	//插件指令检查
		return;
	}
	if( $gameSystem._drill_bComCtrl_enables[this._actor._actorId][2] ){
		this.addCommand(TextManager.item, 'item_lock', false);
		return;
	}
	for(var i = 0; i< this._actor._states.length ;i++){		//状态检查
		var s_id = this._actor._states[i];
		var note = String($dataStates[s_id].note);
		var color = (note.match( /<封印道具>/ )) || [];
		if( color.length != 0 ){ this.addCommand(TextManager.item, 'item_lock', false); return;}
	}
	_drill_BattleComControl_addItemCommand.call(this);
}

//==============================
// * 命令-技能类型
//==============================
Window_ActorCommand.prototype.addSkillCommands = function() {
    var skillTypes = this._actor.addedSkillTypes();
    skillTypes.sort(function(a, b) {
        return a - b;
    });
	for( var j = 0; j <skillTypes.length; j++ ){
		var stypeId = skillTypes[j];
        var name = $dataSystem.skillTypes[stypeId];
		
		if( $gameSystem._drill_bComCtrl_enables[this._actor._actorId][ stypeId + 3 -1 ] ){
			this.addCommand(name, 'skill_lock', false, stypeId);
			continue;
		}
		var is_locked = false;
		for(var i = 0; i< this._actor._states.length; i++){		//状态检查
			var s_id = this._actor._states[i];
			var note = String($dataStates[s_id].note);
			var types = (note.match( /<封印技能类:([^<>:]*?)>/g )) || [];
			
			for(var r = 0;r< types.length; r++){
				var type_ = (types[r].match( /<封印技能类:([^<>:]*?)>/ )) || [];
				
				//alert(type_);		//正则，g搜索每行符合列，然后在每个符合字符串中抽取出 数字。
				if( String(type_[1]) == String(stypeId) ){ 
					this.addCommand(name, 'skill_lock', false, stypeId);
					is_locked = true;
					break;
				}
			}
		}
		if(is_locked){continue;}
		
		this.addCommand(name, 'skill', true, stypeId);
    };
};


if(Imported.MOG_BattleCommands ){
	
	//==============================
	// * Load Com Images
	//==============================
	Window_ActorCommand.prototype.load_com_images = function() {
		this._com_images = [];
		for (var i = 0; i < this._list.length; i++) {
			 if (this._max_com < this._list.length) {this._max_com = this._list.length}
			 for (var r = 0; r < this._list.length; r++) {
				 if( this._list[r]['symbol'] == 'attack' ){
					this._com_images.push(ImageManager.loadBcom(Moghunter.src_com_atk));		//攻击
				 }
				 if( this._list[r]['symbol'] == 'attack_lock' ){
					this._com_images.push(ImageManager.loadBcom(DrillUp.bComCtrl_atk));		//封印攻击
				 }
				 if( this._list[r]['symbol'] == 'skill' ){
					this._com_images.push(ImageManager.loadBcom(Moghunter.com_list[this._list[r]['ext']]));		//自定义技能类型
				 }
				 if( this._list[r]['symbol'] == 'skill_lock' ){
					this._com_images.push(ImageManager.loadBcom(DrillUp.bComCtrl_list[this._list[r]['ext']]));		//封印自定义技能类型
				 }
				 if( this._list[r]['symbol'] == 'guard' ){
					this._com_images.push(ImageManager.loadBcom(Moghunter.src_com_def));		//防御
				 }
				 if( this._list[r]['symbol'] == 'guard_lock' ){
					this._com_images.push(ImageManager.loadBcom(DrillUp.bComCtrl_def));		//封印防御
				 }
				 if( this._list[r]['symbol'] == 'item' ){
					this._com_images.push(ImageManager.loadBcom(Moghunter.src_com_item));	//道具
				 }
				 if( this._list[r]['symbol'] == 'item_lock' ){
					this._com_images.push(ImageManager.loadBcom(DrillUp.bComCtrl_item));	//封印道具
				 }
				 //注意，顺序是固定的
			 };
		};
		this._layout_img = ImageManager.loadBcom(Moghunter.src_type_Layout);
		this._cursor_b_img = ImageManager.loadBcom(Moghunter.src_type_Cursor);
		if (String(Moghunter.bcom_arrow) === "true") {this._arrow_img = ImageManager.loadBcom(Moghunter.src_type_arrow)};
	};
	//==============================
	// * Create Commands
	//==============================
	var _drill_BattleComControl_create_commands = Window_ActorCommand.prototype.create_commands;
	Window_ActorCommand.prototype.create_commands = function() {	
		_drill_BattleComControl_create_commands.call(this);
		for (var i = 0; i < this._max_com; i++) {
			 this._com_sprites[i].enabled = true;		//消除按钮透明设置
		};
	};

}

/*
Window_ActorCommand.prototype.makeCommandList = function() {
    if (this._actor) {
		this.addAttackCommand();
        this.addSkillCommands();
        this.addGuardCommand();
        this.addItemCommand();
    }
};
*/

	