//=============================================================================
// Drill_EventFadeOutEffect.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        地图 - 事件消失动作效果
 * @author Drill_up
 * 
 * 
 * @help  
 * =============================================================================
 * +++ Drill_EventFadeOutEffect +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 使得你可以播放事件消失不见的各种动作。
 * ★★必须放在 MOG事件动作效果 插件后面★★
 * 
 * -----------------------------------------------------------------------------
 * ----设定说明
 * 1.显现动作固定为：从 完全不透明 到 完全透明 的过程。
 *   动作结束后，透明度为0。
 * 2.落下、弹跳效果可以与其它动作效果叠加。但不包括透明过程。
 * 3.动作是并行的，你需要手动加格外的等待时间。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 你可以设置播放消失的落下和弹跳的动作效果：
 * 
 * 插件指令：>玩家消失效果 : 领队 : 标准升起 : 60 : 168
 * 插件指令：>玩家消失效果 : 领队 : 标准弹跳 : 60 : 168
 * 插件指令：>玩家消失效果 : 指定队员 : 1 : 标准升起 : 60 : 168
 * 插件指令：>玩家消失效果 : 指定队员 : 1 : 标准弹跳 : 60 : 168
 * 插件指令：>玩家消失效果 : 指定队员(变量) : 1 : 标准升起 : 60 : 168
 * 插件指令：>玩家消失效果 : 指定队员(变量) : 1 : 标准弹跳 : 60 : 168
 * 插件指令：>玩家消失效果 : 全部队员 : 标准升起 : 60 : 168
 * 插件指令：>玩家消失效果 : 全部队员 : 标准弹跳 : 60 : 168
 *
 * 插件指令：>事件消失效果 : 本事件 : 标准升起 : 60 : 168
 * 插件指令：>事件消失效果 : 本事件 : 标准弹跳 : 60 : 168
 * 插件指令：>事件消失效果 : 指定事件 : 1 : 标准升起 : 60 : 168
 * 插件指令：>事件消失效果 : 指定事件 : 1 : 标准弹跳 : 60 : 168
 * 插件指令：>事件消失效果 : 指定事件(变量) : 1 : 标准升起 : 60 : 168
 * 插件指令：>事件消失效果 : 指定事件(变量) : 1 : 标准弹跳 : 60 : 168
 *
 * 1.指定队员，0表示领队，1表示第一个跟随者，以此类推。
 * 2.落下后面的参数为 时间（单位帧）高度（像素）。实际落下有+20帧的缓冲时间。
 *   比如设置60，实际要等80帧才能结束落下动作。
 * 3.如果你不想要任何动作，只想让事件静态显现，直接设置 标准弹跳 + 高度0 即可。
 *   但是时间不能为0。
 * 
 * 插件指令：>事件显现效果 : 本事件 : 缩小消失 : 60
 *
 * 1.缩小消失后面的参数为 时间（单位帧）。
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定 - 透明度检查
 * 如果有的事件已经是透明度为255了，你不想让他再播放一次出现动画，你可以使用
 * 下面的插件指令。
 * 
 * 插件指令：>玩家显现效果 : 透明度检查开启
 * 插件指令：>玩家显现效果 : 透明度检查关闭
 * 插件指令：>事件显现效果 : 透明度检查开启
 * 插件指令：>事件显现效果 : 透明度检查关闭
 * 
 * 1.插件指令直接作用于所有玩家，或者所有事件。
 * 2.所有事件/玩家的 透明度检查 默认关闭。
 * 3.开启检查后，如果当前事件透明度为255，出现动作不会起作用。
 * 
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		EFOE（Event_Fade_Out_Effect）
//		临时全局变量	DrillUp.xxx
//		临时局部变量	无
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		这里最主要的是，改变x,y,opacity,rotation,scale_x,scale_y的值，并且毫无损失地复原。
//		另外，对齐每一个插件指令，也是比较头疼的问题。
//		结构并不复杂，只是内容划分太多。		
//		
//		队伍透明度统一存在麻烦的地方，队长的透明度每帧都会分配给跟随者。
//		目前只设置了播放动作的时候，透明度才不统一。
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_EventFadeOutEffect = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_EventFadeOutEffect');
	
	
//=============================================================================
// ** 插件指令
//=============================================================================
var _Drill_EFOE_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_Drill_EFOE_pluginCommand.call(this, command, args);
	if (command === '>玩家消失效果') { // >玩家消失效果 : 领队 : 标准升起 : 60 : 168
		if(args.length == 6 || args.length == 8){
			var temp1 = String(args[1]);
			var type = String(args[3]);
			var time = Number(args[5]);
			if(args[7]){ var height = Number(args[7]); }
			if( $gamePlayer.opacity() == 255 && $gameSystem._drill_EFOE_opacityCheck_player){
				return;
			}
			if( temp1 == "领队" ){ 
				if( type == '标准升起' ){
					$gamePlayer.drill_EFOE_playHidingSpring(time,height);
				}
				if( type == '标准弹跳' ){
					$gamePlayer.drill_EFOE_playHidingJump(time,height);
				}
				if( type == '缩小消失' ){
					$gamePlayer.drill_EFOE_playHidingShrink(time);
				}
			}
			if( temp1 == "全部队员" ){ 
				if( type == '标准升起' ){
					$gamePlayer.drill_EFOE_playHidingSpring(time,height);
					$gamePlayer.followers().forEach(function(f){ f.drill_EFOE_playHidingSpring(time,height); },this);
				}
				if( type == '标准弹跳' ){
					$gamePlayer.drill_EFOE_playHidingJump(time,height);
					$gamePlayer.followers().forEach(function(f){ f.drill_EFOE_playHidingJump(time,height); },this);
				}
				if( type == '缩小消失' ){
					$gamePlayer.drill_EFOE_playHidingShrink(time);
					$gamePlayer.followers().forEach(function(f){ f.drill_EFOE_playHidingShrink(time); },this);
				}
			}
		}
		if(args.length == 8 || args.length == 10){
			var temp1 = String(args[1]);
			var temp2 = Number(args[3]);
			var type = String(args[5]);
			var time = Number(args[7]);
			if(args[9]){ var height = Number(args[9]); }
			var _followers = $gamePlayer.followers().visibleFollowers();
			_followers.unshift($gamePlayer);
			if( temp1 == "指定队员" ){
				if( temp2 < _followers.length ){
					if( _followers[temp2].opacity() == 255 && $gameSystem._drill_EFOE_opacityCheck_player){
						return;
					}
					if( type == '标准升起' ){
						_followers[temp2].drill_EFOE_playHidingSpring(time,height);
					}
					if( type == '标准弹跳' ){
						_followers[temp2].drill_EFOE_playHidingJump(time,height);
					}
					if( type == '缩小消失' ){
						_followers[temp2].drill_EFOE_playHidingShrink(time);
					}
				}
			}
			if( temp1 == "指定队员(变量)" ){ 
				temp2 = $gameVariables.value(temp2);
				if( temp2 < _followers.length ){
					if( _followers[temp2].opacity() == 255 && $gameSystem._drill_EFOE_opacityCheck_player){
						return;
					}
					if( type == '标准升起' ){
						_followers[temp2].drill_EFOE_playHidingSpring(time,height);
					}
					if( type == '标准弹跳' ){
						_followers[temp2].drill_EFOE_playHidingJump(time,height);
					}
					if( type == '缩小消失' ){
						_followers[temp2].drill_EFOE_playHidingShrink(time);
					}
				}
			}
		}
		if(args.length == 2){
			var type = String(args[1]);
			if( type == '透明度检查开启' ){
				$gameSystem._drill_EFOE_opacityCheck_player = true;
			}
			if( type == '透明度检查关闭' ){
				$gameSystem._drill_EFOE_opacityCheck_player = false;
			}
		}
	}
	if (command === '>事件消失效果') { // >事件消失效果 : 本事件 : 标准升起 : 60 : 168
		if(args.length == 6 || args.length == 8){
			var temp1 = String(args[1]);
			var type = String(args[3]);
			var time = Number(args[5]);
			if(args[7]){ var height = Number(args[7]); }
			if( temp1 == "本事件" ){
				var e = $gameMap.event( this._eventId );
				if( e.opacity() == 255 && $gameSystem._drill_EFOE_opacityCheck_event){
					return;
				}
				if( type == '标准升起'){
					e.drill_EFOE_playHidingSpring(time,height);
				}
				if( type == '标准弹跳'  ){
					e.drill_EFOE_playHidingJump(time,height)
				}
				if( type == '缩小消失' ){
					e.drill_EFOE_playHidingShrink(time)
				}
			}
		}
		if(args.length == 8 || args.length == 10){
			var temp1 = String(args[1]);
			var temp2 = Number(args[3]);
			var type = String(args[5]);
			var time = Number(args[7]);
			if(args[9]){ var height = Number(args[9]); }
			if( temp1 == "指定事件" ){ 
				var e = $gameMap.event( temp2 );
				if( e.opacity() == 255 && $gameSystem._drill_EFOE_opacityCheck_event){
					return;
				}
				if( type == '标准升起' ){
					e.drill_EFOE_playHidingSpring(time,height);
				}
				if( type == '标准弹跳' ){
					e.drill_EFOE_playHidingJump(time,height);
				}
				if( type == '缩小消失' ){
					e.drill_EFOE_playHidingShrink(time);
				}
			}
			if( temp1 == "指定事件(变量)" ){ 
				var e = $gameMap.event( $gameVariables.value(temp2) );
				if( e.opacity() == 255 && $gameSystem._drill_EFOE_opacityCheck_event){
					return;
				}
				if( type == '标准升起' ){
					e.drill_EFOE_playHidingSpring(time,height);
				}
				if( type == '标准弹跳' ){
					e.drill_EFOE_playHidingJump(time,height);
				}
				if( type == '缩小消失' ){
					e.drill_EFOE_playHidingShrink(time);
				}
			}
		}
		if(args.length == 2){
			var type = String(args[1]);
			if( type == '透明度检查开启' ){
				$gameSystem._drill_EFOE_opacityCheck_event = true;
			}
			if( type == '透明度检查关闭' ){
				$gameSystem._drill_EFOE_opacityCheck_event = false;
			}
		}
	}
};

//=============================================================================
// ** 存储变量初始化
//=============================================================================
var _drill_EFOE_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    _drill_EFOE_sys_initialize.call(this);
	this._drill_EFOE_opacityCheck_player = false;
	this._drill_EFOE_opacityCheck_event = false;
}


//=============================================================================
// ** 物体
//=============================================================================
//==============================
// * 物体初始化
//==============================
var _Drill_EFOE_c_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function() {
	_Drill_EFOE_c_initMembers.call(this);
	this._Drill_EFOE = {};
	
	this._Drill_EFOE.x = 0;			//变化值
	this._Drill_EFOE.y = 0;
	this._Drill_EFOE.rotation = 0;
	this._Drill_EFOE.scale_x = 0;
	this._Drill_EFOE.scale_y = 0;
	this._Drill_EFOE.skew_x = 0;
	this._Drill_EFOE.skew_y = 0;
	this._Drill_EFOE.opacity = 0;	//（透明度不叠加）
	this._Drill_EFOE.playing_type = "";
	
}

//==============================
// * 动作判定
//==============================
Game_CharacterBase.prototype.drill_EFOE_isPlaying = function() {
	return this._Drill_EFOE.playing_type != "";
}
//==============================
// * 初始化 - 消失 标准升起
//==============================
Game_CharacterBase.prototype.drill_EFOE_playHidingSpring = function(time,height) {
	var ef = this._Drill_EFOE;
	ef.playing_type = "hidingSpring";
	ef.fA_tdest = time;
	ef.fA_distance = -1 * height;
	ef.fA_a = 2*ef.fA_distance/ef.fA_tdest/ef.fA_tdest;	//加速度公式
	ef.fA_time = 0;
	ef.fB_tdest = 30;	//固定抛物线公式
	ef.fB_time = 0;
}
//==============================
// * 初始化 - 消失 标准弹跳
//==============================
Game_CharacterBase.prototype.drill_EFOE_playHidingJump = function(time,height) {
	var ef = this._Drill_EFOE;
	ef.playing_type = "hidingJump";
	ef.f_a = -4*height/time/time;	//抛物线公式 y = ax2 + bx +c（一样）
	ef.f_b = 4*height/time;	
	ef.f_c = 0;	
	ef.f_time = 0;
	ef.f_tdest = time;
}
//==============================
// * 初始化 - 消失 缩小消失
//==============================
Game_CharacterBase.prototype.drill_EFOE_playHidingShrink = function(time) {
	var ef = this._Drill_EFOE;
	ef.playing_type = "hidingShrink";
	
	ef.fA_sa = 2/time/time/2;	//匀加速公式 scale = 1/2 * at2
	ef.fA_sb = 0;	
	ef.fA_sc = 0;	
	ef.fA_ya = 20/time/time/2;	//抛物线公式 y = ax2 + bx +c
	ef.fA_yb = 0;	
	ef.fA_yc = 0;	
	ef.fA_time = 0;
	ef.fA_tdest = time;
	
}

//==============================
// * 帧刷新
//==============================
var _Drill_EFOE_c_update = Game_CharacterBase.prototype.update;
Game_CharacterBase.prototype.update = function() {
	_Drill_EFOE_c_update.call(this);
	
	this.drill_EFOE_updateHidingSpring();
	this.drill_EFOE_updateHidingJump();
	this.drill_EFOE_updateHidingShrink();
}
//==============================
// * 帧刷新 - 消失 标准跳起
//==============================
Game_CharacterBase.prototype.drill_EFOE_updateHidingSpring = function() {
	var ef = this._Drill_EFOE;
	if( ef.playing_type == "hidingSpring" ){
		if( ef.fB_time <= ef.fB_tdest ){
			ef.fB_time ++;
			var t = ef.fB_time;
			ef.scale_x = 0.02666666 * t - 0.00088888 *t*t;	//30帧
			ef.scale_y = -ef.scale_x;
			ef.y = 0;
			ef.opacity = 255;
			this.setOpacity(ef.opacity);
		}else if( ef.fA_time < ef.fA_tdest ){
			ef.fA_time ++;
			var t = ef.fA_time;
			ef.y = ef.fA_a*t*t/2;	//加速上升
			ef.opacity = 255 * (ef.fA_tdest - ef.fA_time) /ef.fA_tdest * 2 ;
			this.setOpacity(ef.opacity);
		}else if( ef.fA_time == ef.fA_tdest ){
			ef.fA_time ++;
			ef.opacity = 0;
			this.setOpacity(ef.opacity);//锁定透明度
		}else{
			ef.playing_type = "";
		}
	}
}
//==============================
// * 帧刷新 - 消失 标准弹跳
//==============================
Game_CharacterBase.prototype.drill_EFOE_updateHidingJump = function() {
	var ef = this._Drill_EFOE;
	if( ef.playing_type == "hidingJump" ){
		if( ef.f_time < ef.f_tdest/2 ){		//通用一个公式，只是根据顶点值分成了两份
			ef.f_time ++;
			var t = ef.f_time;
			ef.y = -1*(ef.f_a*t*t + ef.f_b*t);
			ef.opacity = 255 ;
			this.setOpacity(ef.opacity);
		}else if( ef.f_time < ef.f_tdest ){
			ef.f_time ++;
			var t = ef.f_time;
			ef.y = -1*(ef.f_a*t*t + ef.f_b*t);
			if(ef.y >0){ ef.y = 0; }
			ef.opacity = 255 - 255 * (ef.f_time - ef.f_tdest/2 ) /ef.f_tdest*2 ;
			this.setOpacity(ef.opacity);
		}else if( ef.f_time == ef.f_tdest ){
			ef.f_time ++;
			ef.opacity = 0;
			this.setOpacity(ef.opacity);	//锁定透明度
		}else{
			ef.playing_type = "";
		}
	}
}
//==============================
// * 帧刷新 - 消失 缩小消失
//==============================
Game_CharacterBase.prototype.drill_EFOE_updateHidingShrink = function() {
	var ef = this._Drill_EFOE;
	if( ef.playing_type == "hidingShrink" ){
		if( ef.fA_time < ef.fA_tdest ){
			ef.fA_time ++;
			var t = ef.fA_time;
			
			ef.y = 20 -1*(ef.fA_ya*t*t + ef.fA_yb*t);	//抛物线
			ef.scale_x = - ef.fA_sa*t*t - ef.fA_sb*t;	//匀加速放大
			ef.scale_y = ef.scale_x;

			if(ef.y >0){ ef.y = 0;}
			ef.opacity = 255 - 255 * ef.fA_time /ef.fA_tdest ;
			this.setOpacity(ef.opacity);
		}else if(ef.fA_time == ef.fA_tdest){
			ef.fA_time ++;
			ef.opacity = 0;
			this.setOpacity(ef.opacity);		//锁定透明度
		}else{
			ef.playing_type = "";
		}
	}
}

//=============================================================================
// ** 跟随者特殊设置
//=============================================================================
//==============================
// * 透明度同步
//==============================
var _drill_EFOE_setOpacity = Game_Follower.prototype.setOpacity;
Game_Follower.prototype.setOpacity = function(opacity) {
	if( $gamePlayer.drill_EFOE_isPlaying() ){ return; }
	if( this.drill_EFOE_isPlaying() ){ return; }
	_drill_EFOE_setOpacity.call(this,opacity);
};
//=============================================================================
// ** 事件贴图
//=============================================================================
//==============================
// * 初始化
//==============================
var _Drill_EFOE_s_setCharacter = Sprite_Character.prototype.setCharacter;
Sprite_Character.prototype.setCharacter = function(character) {
	_Drill_EFOE_s_setCharacter.call(this,character);
	if (character) { this._Drill_EFOE = character._Drill_EFOE; };
};

//==============================
// * 固定帧初始值
//==============================
var _Drill_EFOE_s_updatePosition = Sprite_Character.prototype.updatePosition;
Sprite_Character.prototype.updatePosition = function() {
	_Drill_EFOE_s_updatePosition.call(this);
	this.rotation = 0;
	this.scale.x = 1;
	this.scale.y = 1;
	this.skew.x = 0;
	this.skew.y = 0;
	//从这里开始，参数都被固定值（不需要考虑多次update的叠加影响）
};

//==============================
// * 帧刷新
//==============================
var _Drill_EFOE_s_update = Sprite_Character.prototype.update;
Sprite_Character.prototype.update = function() {
	_Drill_EFOE_s_update.call(this);
	if (this._character) {this.update_EFOE_effect()};
};
Sprite_Character.prototype.update_EFOE_effect = function() {
	
	if( this._character.drill_EFOE_isPlaying() ){
		//this.x += this._Drill_EFOE.x ;
		this.y += this._Drill_EFOE.y ;
		//this.rotation += this._Drill_EFOE.rotation;
		this.scale.x += this._Drill_EFOE.scale_x;
		this.scale.y += this._Drill_EFOE.scale_y;
		//this.skew.x += this._Drill_EFOE.skew_x;
		//this.skew.y += this._Drill_EFOE.skew_y;
		
		this.opacity = this._Drill_EFOE.opacity;

	}
}

