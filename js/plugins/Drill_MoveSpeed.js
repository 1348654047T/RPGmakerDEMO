//=============================================================================
// Drill_MoveSpeed.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        物体 - 移动速度
 * @author Drill_up
 *
 * @param 奔跑增加的精确速度
 * @parent ----凹槽条----
 * @type number
 * @min 0
 * @desc 角色在奔跑情况下，增加的精确速度值。
 * @default 8
 *
 * @help
 * =============================================================================
 * +++ Drill_MoveSpeed +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 你可以将rmmv的移动速度细分为更精确的数值。
 * 
 * -----------------------------------------------------------------------------
 * ----速度说明
 * rmmv标准速度 与 精确速度的关系：
 * 标准速度 1 = 精确速度 1
 * 标准速度 2 = 精确速度 2
 * 标准速度 3 = 精确速度 4
 * 标准速度 4 = 精确速度 8
 * 标准速度 5 = 精确速度 16
 * 标准速度 6 = 精确速度 32
 *
 * 如果你设置精确速度为7，则获取到的标准速度值为4。
 * 如果你设置精确速度为20，则获取到的标准速度值为5。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 移动路线
 * 你可以在事件的 默认移动路线/移动路线函数 中添加修改指令：
 *
 * 移动路线脚本：>精确速度8
 * 
 * 填写的精确速度可以为小数，只是效果不明显。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 修改移动速度
 * 你可以通过插件指令手动设置精确速度。
 *
 * 插件指令：>移动速度 : 本事件 : 设置速度 : 2
 * 插件指令：>移动速度 : 1 : 设置速度 : 2
 * 插件指令：>移动速度 : 1 : 增加速度 : 2
 * 插件指令：>移动速度 : 1 : 减少速度 : 2
 * 插件指令：>移动速度 : 1 : 设置速度变量id : 32
 *
 * 插件指令：>移动速度 : 玩家 : 设置速度 : 2
 * 插件指令：>移动速度 : 玩家 : 增加速度 : 2
 * 插件指令：>移动速度 : 玩家 : 减少速度 : 2
 * 插件指令：>移动速度 : 玩家 : 设置速度变量id : 32
 *
 * 1.由于rmmv的标准速度太局限，这里的插件指令只对 精确速度 进行操作。
 * 2."设置速度变量id"表示 32号变量 的值，为指定的速度。
 * 3.设置的事件速度，离开地图后复原，设置的玩家速度永久有效。
 * 
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 *
 */

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		MS（Move_Speed）
//		临时全局变量	DrillUp.g_MS_xxx
//		临时局部变量	this._drill_MS_xxx
//		存储数据变量	$gameSystem._drill_xxx
//		全局存储变量	无
//		覆盖重写方法	Game_CharacterBase.prototype.updateMove
//
//插件记录：
//		
//

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_MoveSpeed = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_MoveSpeed');
	
    DrillUp.g_MS_dashSpeed = Number(DrillUp.parameters['奔跑增加的精确速度'] || 8);

	
//=============================================================================
// ** 插件指令
//=============================================================================
var _drill_MS_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_MS_pluginCommand.call(this, command, args);
	if (command === '>移动速度') {
		if(args.length == 6){
			var temp1 = String(args[1]);
			var type = String(args[3]);
			var temp2 = String(args[5]);
			if (type === '设置速度') {
				if( temp1 == '玩家' ){
					$gamePlayer.drill_setCMoveSpeed(Number(temp2));
				}else{
					if( temp1 == '本事件' ){
						var e_id = this._eventId;
					}else{
						var e_id = Number(temp1);
					}
					$gameMap.event(e_id).drill_setCMoveSpeed(Number(temp2));
				}
			}
		}
	}
	if (command === '>增加速度') {
		if(args.length == 6){
			var temp1 = String(args[1]);
			var type = String(args[3]);
			var temp2 = String(args[5]);
			if (type === '设置速度') {
				if( temp1 == '玩家' ){
					var temp_speed = $gamePlayer.drill_getCMoveSpeed();
					$gamePlayer.drill_setCMoveSpeed(temp_speed + Number(temp2));
				}else{
					if( temp1 == '本事件' ){
						var e_id = this._eventId;
					}else{
						var e_id = Number(temp1);
					}
					var temp_speed = $gamePlayer.drill_getCMoveSpeed();
					$gameMap.event(e_id).drill_setCMoveSpeed(temp_speed + Number(temp2));
				}
			}
		}
	}
	if (command === '>减少速度') {
		if(args.length == 6){
			var temp1 = String(args[1]);
			var type = String(args[3]);
			var temp2 = String(args[5]);
			if (type === '设置速度') {
				if( temp1 == '玩家' ){
					var temp_speed = $gamePlayer.drill_getCMoveSpeed();
					$gamePlayer.drill_setCMoveSpeed(temp_speed - Number(temp2));
				}else{
					if( temp1 == '本事件' ){
						var e_id = this._eventId;
					}else{
						var e_id = Number(temp1);
					}
					var temp_speed = $gamePlayer.drill_getCMoveSpeed();
					$gameMap.event(e_id).drill_setCMoveSpeed(temp_speed - Number(temp2));
				}
			}
		}
	}
	if (command === '>设置速度变量id') {
		if(args.length == 6){
			var temp1 = String(args[1]);
			var type = String(args[3]);
			var temp2 = String(args[5]);
			if (type === '设置速度') {
				if( temp1 == '玩家' ){
					$gamePlayer.drill_setCMoveSpeed($gameVariables.value( Number(temp2) ));
				}else{
					if( temp1 == '本事件' ){
						var e_id = this._eventId;
					}else{
						var e_id = Number(temp1);
					}
					$gameMap.event(e_id).drill_setCMoveSpeed($gameVariables.value( Number(temp2) ));
				}
			}
		}
	}
};

//=============================================================================
// ** 移动路线设置
//=============================================================================
//==============================
// * 路线 - 根据指令执行设置
//==============================
var _drill_MS_processMoveCommand = Game_Character.prototype.processMoveCommand;
Game_Character.prototype.processMoveCommand = function(command) {
	if ( command.code === 45 && command.parameters[0].match(/^>精确速度(\d+)/) ) {
		this.drill_setCMoveSpeed( String(RegExp.$1) );
	}else{
		_drill_MS_processMoveCommand.call(this, command);
	}
}
	
//=============================================================================
// ** 物体属性
//=============================================================================
//==============================
// * 物体 - 初始化
//==============================
var _drill_MS_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function() {
    _drill_MS_initMembers.call(this);
	this._drill_MS_speed = -1;
	this._drill_MS_speed_dash = DrillUp.g_MS_dashSpeed;
	this._drill_MS_fix_x = 0;
	this._drill_MS_fix_y = 0;
};
//==============================
// * 物体 - 精确速度
//==============================
Game_CharacterBase.prototype.drill_getCMoveSpeed = function() {
    return this._drill_MS_speed;
};
Game_CharacterBase.prototype.drill_setCMoveSpeed = function(speed) {
	if( Number(speed) == 0 ){ return; }
	this._drill_MS_speed = Number(speed);
	if( this._drill_MS_speed == 1 ){  this._moveSpeed = 1; }
	if( this._drill_MS_speed == 2 ){  this._moveSpeed = 2; }
	if( this._drill_MS_speed >= 3 && this._drill_MS_speed <= 5 ){ this._moveSpeed = 3; }
	if( this._drill_MS_speed >= 6 && this._drill_MS_speed <= 10 ){ this._moveSpeed = 4; }
	if( this._drill_MS_speed >= 11 && this._drill_MS_speed <= 24 ){ this._moveSpeed = 5; }
	if( this._drill_MS_speed >= 25 ){ this._moveSpeed = 6; }
};
//==============================
// * 物体 - 设置标准速度
//==============================
var _drill_MS_setMoveSpeed = Game_CharacterBase.prototype.setMoveSpeed;
Game_CharacterBase.prototype.setMoveSpeed = function(moveSpeed) {
	this._drill_MS_speed = -1;
    _drill_MS_setMoveSpeed.call(this,moveSpeed);
};
//==============================
// * 物体 - 跟随者的速度与玩家相同
//==============================
//var _drill_MS_f_setMoveSpeed = Game_Follower.prototype.setMoveSpeed;
//Game_Follower.prototype.setMoveSpeed = function(moveSpeed) {
//	_drill_MS_f_setMoveSpeed.call(this,moveSpeed);
//}
//==============================
// * 物体 - 移动速度
//==============================
var _drill_MS_distancePerFrame = Game_CharacterBase.prototype.distancePerFrame;
Game_CharacterBase.prototype.distancePerFrame = function() {
	if( this._drill_MS_speed != -1 ){
		if( this.isDashing() ){
			return (this._drill_MS_speed + 8 ) /128;	//奔跑只加固定速度
		}else{
			return this._drill_MS_speed /128;
		}
	}else{
		return _drill_MS_distancePerFrame.call(this);
	}
};

//==============================
// * 物体 - 移动速度细节修正（this._realX与this._x碰撞时，存储误差，加到下次移动中）
//==============================
Game_CharacterBase.prototype.updateMove = function() {
    if (this._x < this._realX) {
		var temp_x = this._realX - this.distancePerFrame();
		if( this._drill_MS_fix_x != 0 ){
			temp_x -= this._drill_MS_fix_x;
			this._drill_MS_fix_x = 0;
		}
		if( temp_x < this._x ){
			this._drill_MS_fix_x = this._x - temp_x;
			temp_x = this._x;
		}
        this._realX = temp_x;
    }
    if (this._x > this._realX) {
		var temp_x = this._realX + this.distancePerFrame();
		if( this._drill_MS_fix_x != 0 ){
			temp_x += this._drill_MS_fix_x;
			this._drill_MS_fix_x = 0;
		}
		if( temp_x > this._x ){
			this._drill_MS_fix_x = temp_x - this._x ;
			temp_x = this._x;
		}
        this._realX = temp_x;
    }
    if (this._y < this._realY) {
		var temp_y = this._realY - this.distancePerFrame();
		if( this._drill_MS_fix_y != 0 ){
			temp_y -= this._drill_MS_fix_y;
			this._drill_MS_fix_y = 0;
		}
		if( temp_y < this._y ){
			this._drill_MS_fix_y = this._y - temp_y ;
			temp_y = this._y;
		}
        this._realY = temp_y;
    }
    if (this._y > this._realY) {
		var temp_y = this._realY + this.distancePerFrame();
		if( this._drill_MS_fix_y != 0 ){
			temp_y += this._drill_MS_fix_y;
			this._drill_MS_fix_y = 0;
		}
		if( temp_y > this._y ){
			this._drill_MS_fix_y = temp_y - this._y ;
			temp_y = this._y;
		}
        this._realY = temp_y;
    }
    if (!this.isMoving()) {
        this.refreshBushDepth();
    }
};
