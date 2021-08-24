//=============================================================================
// Drill_EventThrough.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        物体 - 事件穿透关系
 * @author Drill_up
 * 
 * @param 玩家穿透标签
 * @type text[]
 * @desc 玩家具有的穿透标签。
 * @default ["炸弹人-角色","穿透玩家"]
 * 
 * @help  
 * =============================================================================
 * +++ Drill_EventThrough +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 使得具有相同 穿透标签 的事件之间能相互穿透。
 * ★★尽量放在 物体 插件的靠前位置★★
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.直接勾选rmmv穿透，则无视所有直接穿透，不存在任何筛选穿透关系。
 * 2.事件可以拥有多个不同的穿透标签。
 * 3.根据穿透关系，可以设置敌人不能穿过的障碍 或 玩家不能进入的NPC区域。
 * 4.穿透玩家的特点是，只穿过玩家，但是不能穿过其他事件、墙壁、道路障碍等的事件。
 * 5.如果你想做事件A能穿透B和C，但是BC之间并不能穿透的效果。
 *   那么你需要设置AB为一个标签，AC为另一个标签。
 * 6.该插件放在任意位置都不会出bug，只是如果它放在跳跃插件的后面时，跳跃插件
 *   就不知道事件之间存在的穿透关系，而识别为障碍物，所以最好尽量往前面放。
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 如果你需要设置事件的被触发条件，使用下面事件注释：
 * （注意，冒号左右有空格）
 * 
 * 事件注释：=>事件穿透关系 : 穿透标签 : 炸弹人-角色
 * 事件注释：=>事件穿透关系 : 穿透标签 : 穿透玩家
 *
 * 其中"炸弹人-角色"与"穿透玩家"是完全可以自定义的条件关键字。
 * 设置后，如果事件的关键字与其他事件或者玩家的标签对应上，将会相互穿透。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过插件指令设置这些穿透标签：
 * （注意，冒号左右有空格）
 *
 * 插件指令：>事件穿透关系 : 玩家 : 添加标签 : 炸弹人-角色
 * 插件指令：>事件穿透关系 : 玩家 : 去除标签 : 炸弹人-角色
 * 插件指令：>事件穿透关系 : 本事件 : 添加标签 : 炸弹人-角色
 * 插件指令：>事件穿透关系 : 本事件 : 去除标签 : 炸弹人-角色
 * 插件指令：>事件穿透关系 : 10 : 添加标签 : 炸弹人-角色
 * 插件指令：>事件穿透关系 : 10 : 去除标签 : 炸弹人-角色
 *
 * 1.数字表示事件的id号。
 * 2.玩家添加了炸弹人标签后，表示进入了整个"炸弹人-角色"群体，它们两两之间
 *   全都可以穿透。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		ETh （Event_Through）
//		临时全局变量	DrillUp.g_ETh_xxx
//		临时局部变量	this._drill_ETh_xxxx
//		存储数据变量	【无】
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		
//		关于同类穿透：rmmv的事件判定比较绕，因为专门区分了 事件、玩家、载具 的关系，以及地图本身的穿透性问题。
//			原理为：eventsXyNt + isNormalPriority 根据 穿透性 + 优先级 二者进行判断。
//			二者都为true，才算作这个事件阻挡了你，不可通行。
//			Game_CharacterBase.prototype.isCollidedWithCharacters
//			Game_Event.prototype.isCollidedWithCharacters
//			注意，event继承了characters的碰撞方法，并且单独添加了自己与玩家之间的碰撞条件。
//		碰撞关系：（Game_CharacterBase.prototype.canPass）
//			1.是否超出地图 
//			2.自身是否穿透 
//			3.从某方向进入图块是否可行（验证两个图块相交的两个可通行设置）
//			4.是否被事件阻止
//				4.1这个事件是否穿透
//				4.2这个事件是否为同级
//				4.3是否为玩家
//
//		注意，要去除标签，【直接delete】，如果设为false，还要处理成json传进去一大堆麻烦事。

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_EventThrough = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_EventThrough');

	if( DrillUp.parameters['玩家穿透标签'] != "" ){
		DrillUp.g_ETh_player_tags = JSON.parse(DrillUp.parameters['玩家穿透标签']);
	}else{
		DrillUp.g_ETh_player_tags = [] ;
	}
	
//=============================================================================
// * 插件指令
//=============================================================================
var _drill_ETh_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_ETh_pluginCommand.call(this, command, args);
	if (command === '>事件穿透关系') {
		if(args.length == 6){
			var temp1 = String(args[1]);
			var type = String(args[3]);
			var temp3 = String(args[5]);
			
			if( type == "添加标签" ){
				if( temp1 == "玩家"){
					$gamePlayer._drill_ETh_char[temp3] = true;
				}else if( temp1 == "本事件" ){
					var e_id = this._eventId;
					$gameMap.event(e_id)._drill_ETh_char[temp3] = true;
				}else{
					var e_id = Number(temp1);
					$gameMap.event(e_id)._drill_ETh_char[temp3] = true;
				}
			}
			if( type == "去除标签" ){
				if( temp1 == "玩家"){
					delete $gamePlayer._drill_ETh_char[temp3];
				}else if( temp1 == "本事件" ){
					var e_id = this._eventId;
					delete $gameMap.event(e_id)._drill_ETh_char[temp3];
				}else{
					var e_id = Number(temp1);
					delete $gameMap.event(e_id)._drill_ETh_char[temp3];
				}
			}
			
		}
	}
};

//=============================================================================
// * 人物（敌人事件、玩家 的父类）
//=============================================================================
//==============================
// * 人物 - 初始化
//==============================
var _drill_ETh_c_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function() {
	_drill_ETh_c_initMembers.call(this);
	this._drill_ETh_char = {};
}
//==============================
// * 人物 - 同类穿透
//==============================
Game_CharacterBase.prototype.drill_ETh_hasThroughTag = function() {
	if( !this._drill_ETh_char ){ return false }
	for(var i in this._drill_ETh_char ){ return true; }
	return false;
}
//==============================
// * 人物 - 同类穿透判断（单标签即穿透）
//==============================
Game_CharacterBase.prototype.drill_ETh_canThroughTag = function(tag) {
	return this._drill_ETh_char[tag] === true ;
}
//==============================
// * 人物 - 同类穿透判断（含任一标签即穿透）
//==============================
Game_CharacterBase.prototype.drill_ETh_canThroughTagList = function(tag_list) {
	for(var i=0; i< tag_list.length; i++){
		if( this._drill_ETh_char[tag_list[i]] === true ){
			return true;
		}
	}
	return false;
}
//==============================
// * 人物 - 获取事件 - 不可通行 + 玩家同级 + 除同类穿透
//==============================
Game_Map.prototype.drill_ETh_eventsXyNtEx1 = function(x, y, tag) {
    return this.events().filter(function(event) {
        return event.posNt(x, y) && !event.drill_ETh_canThroughTag(tag) && event.isNormalPriority() ;
    });
};
//==============================
// * 人物 - 获取事件 - 不可通行 + 玩家同级 + 除同类穿透（列表）
//==============================
Game_Map.prototype.drill_ETh_eventsXyNtEx2 = function(x, y, tag_list) {
    return this.events().filter(function(event) {
        return event.posNt(x, y) && !event.drill_ETh_canThroughTagList(tag_list) && event.isNormalPriority() ;
    });
};
//==============================
// * 人物 - 同类穿透判定
//==============================
var _drill_ETh_isCollidedWithCharacters = Game_CharacterBase.prototype.isCollidedWithCharacters;
Game_CharacterBase.prototype.isCollidedWithCharacters = function(x, y) {
    if (this.drill_ETh_hasThroughTag() ) {
		var block_chars = $gameMap.drill_ETh_eventsXyNtEx2(x, y, Object.keys(this._drill_ETh_char) );
		return block_chars.length > 0;
    }else{
		return _drill_ETh_isCollidedWithCharacters.call(this, x, y );
	}
};

//=============================================================================
// ** 玩家
//=============================================================================
//==============================
// * 玩家 - 初始化 
//==============================
var _drill_ETh_p_initialize = Game_Player.prototype.initialize;
Game_Player.prototype.initialize = function() {
	_drill_ETh_p_initialize.call(this);
	for(var i =0; i< DrillUp.g_ETh_player_tags.length ;i++){
		this._drill_ETh_char[ DrillUp.g_ETh_player_tags[i] ] = true;
	}
	//alert(JSON.stringify(this._drill_ETh_char));
}

//==============================
// * 事件 对 玩家 同类穿透判定
//==============================
var _drill_ETh_isCollidedWithPlayerCharacters = Game_Event.prototype.isCollidedWithPlayerCharacters;
Game_Event.prototype.isCollidedWithPlayerCharacters = function(x, y) {
    if ( this.drill_ETh_hasThroughTag() ) {
		return this.isNormalPriority() && $gamePlayer.isCollided(x, y) && !this.drill_ETh_canThroughTagList( Object.keys($gamePlayer._drill_ETh_char) );
	}else{
		return _drill_ETh_isCollidedWithPlayerCharacters.call(this,x,y);
	}
};
//=============================================================================
// ** 事件
//=============================================================================
//==============================
// * 事件 - 注释设置
//==============================
var _drill_ETh_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
	_drill_ETh_setupPage.call(this);
    this.drill_ETh_setupThough();
};
Game_Event.prototype.drill_ETh_setupThough = function() {
	//this._drill_ETh_char = {};	（不刷新穿透设置）
	if (!this._erased && this.page()) {this.list().forEach(function(l) {
		if (l.code === 108) {
			var args = l.parameters[0].split(' ');
			var command = args.shift();
			if (command == "=>事件穿透关系"){	//=>事件穿透关系 : 穿透标签 : 炸弹人
				if(args.length >= 4){
					if(args[1]){ var type = String(args[1]); }
					if(args[3]){ var temp1 = String(args[3]); }
					if(args[5]){ var temp2 = String(args[5]); }
					if( type == "穿透标签" ){
						this._drill_ETh_char[temp1] = true;
					}
				}
			};
		};
	}, this);};
};
