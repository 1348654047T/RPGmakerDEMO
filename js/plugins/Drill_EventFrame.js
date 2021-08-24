//=============================================================================
// Drill_EventFrame.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        地图 - 多帧行走图
 * @author Drill_up
 * 
 *
 * @param 是否修正多帧连贯性
 * @type boolean
 * @on 修正
 * @off 不修正
 * @desc 事件停止移动时，修正会有一个恢复过程。不修正则立即切换到初始帧。
 * @default true
 *
 * @param 连贯性帧间隔
 * @type number
 * @min 1
 * @desc 恢复帧的间隔时间。
 * @default 3
 * 
 * @help  
 * =============================================================================
 * +++ Drill_EventFrame +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 使得你可以设置行走图的 帧数、初始帧、帧播放速度 。
 * 该插件只对大图 $xxxx.png 有效。
 * 
 * -----------------------------------------------------------------------------
 * ----设定说明
 * 1.镜像插件无法反射出与多帧行走图相符的镜像，你需要隐藏镜像。
 * 2.该插件的帧与朝向没有联系，如果你要设置某个朝向的帧，用纯事件。
 * 3.使用rmmv指令 修改玩家图片 时要注意，玩家注释是仍然有效的。
 *  如果你给了一张不符尺寸的大图，会得到错误的图片。
 * 4.在你设计的剧情中，尽可能隐藏玩家，用事件代替玩家本体的图片。
 * 5.该插件兼容mog角色姿势，但是这就意味着你需要配帧数全相同的
 *  跳跃、等待、奔跑图像。
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 你可以通过设置事件注释，来设置你要对应的多帧图片：
 * （注意，冒号左右都有一个空格）
 * 
 * 事件注释：=>多帧行走图 : 帧数 : 5
 * 事件注释：=>多帧行走图 : 初始帧 : 2
 * 事件注释：=>多帧行走图 : 动画帧间隔 : 9
 *
 * 玩家注释：<多帧行走图:帧数:5>
 * 玩家注释：<多帧行走图:初始帧:2>
 * 玩家注释：<多帧行走图:动画帧间隔:9>
 * 
 * 1.rmmv默认帧数为3，行走图是3x4，如果你设置了5帧，那么应该配5x4的图。
 * 2.玩家或者事件停止移动时，会恢复到初始帧的图片状态。
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定 - 循环方向
 * 你可以设置事件播放行走图的循环方式：
 *
 * 事件注释：=>多帧行走图 : 设置循环 : 从左往右循环
 * 事件注释：=>多帧行走图 : 设置循环 : 从右往左循环
 * 事件注释：=>多帧行走图 : 设置循环 : 左右往返
 *
 * 一般作用于物体事件。玩家不能设置循环方向。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 锁定帧
 * 你可以锁定指定事件的帧，用于播放你想要的某些特殊并行动画：
 * 
 * 插件指令：>多帧行走图 : 本事件 : 锁定帧 : 1
 * 插件指令：>多帧行走图 : 本事件 : 解除锁定帧
 * 插件指令：>多帧行走图 : 10 : 锁定帧 : 1
 * 插件指令：>多帧行走图 : 10 : 解除锁定帧
 *
 * 1.前面的数值为事件id，后面的为指定的帧数。
 * 2.锁定帧后，长期有效，必须手动解锁才可以恢复原样。
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定
 * rmmv中，默认的播放速度，是与NPC当前的移动速度有一定关系的，
 * 帧间隔可以设置这种关系的公式：
 * 
 * 事件注释：=>多帧行走图 : 动画帧间隔 : 5
 * 事件注释：=>多帧行走图 : 动画帧间隔 : (7-speed)*2
 * 事件注释：=>多帧行走图 : 动画帧间隔 : 6+(7-speed)*3
 * 
 * rmmv的默认公式是 6+(7-speed)*3 ，成反比形式。
 * 速度最慢的1，代入公式，帧间隔为 24 。（相当于半秒换一帧）
 * 速度最快的6，代入公式，帧间隔为 9 。
 * 也就是说，速度越快，帧间隔越短，动画播放速度也越快。
 * 
 * rmmv的速度值为 1,2,3,4,5,6 使用公式后，它们会根据计算公式，
 * 得出需要的间隔。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		临时全局变量	DrillUp.xxx
//		临时局部变量	this._drill_EventFrame.xxxx（所有变量都放在这个json中控制）
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		Sprite_Character是附着在 Game_CharacterBase 上的，先有Character，后有Sprite。
//
//		_pattern与方向没有关系，该插件不需要考虑方向问题。
//
//		两个需要留意的公式：
//			(this._pattern + 1) % this.maxPattern(); 帧循环公式
//			(9 - this.realMoveSpeed()) * 3;			帧速度公式
//		展开公式后，if会变得非常多，看起来会比较杂乱。
//
//		另外，玩家和跟随者，是需要翻越崇山峻岭，找到id，最后才找到的注释。
//		（rmmv自己强行把玩家行走图这种远在天边的配置归纳到玩家设置里面也是醉了）
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_EventFrame = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_EventFrame');
	
	DrillUp.eventFrame_fix = String(DrillUp.parameters['是否修正多帧连贯性'] || "true") === "true";	
	DrillUp.eventFrame_fix_inter = Number(DrillUp.parameters['连贯性帧间隔'] || 3); 
	
//=============================================================================
// ** 初始化
//=============================================================================
//==============================
// * 物体初始化
//==============================
var _drill_EventFrame_c_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function() {
	_drill_EventFrame_c_initMembers.call(this);
	this._drill_EventFrame = {};	//这个是事件的_drill_EventFrame类
	this._drill_EventFrame.reset_count = 0;
}
//==============================
// * 事件初始化
//==============================
var _drill_EventFrame_c_setupPageSettings = Game_Event.prototype.setupPageSettings;
Game_Event.prototype.setupPageSettings = function() {
	_drill_EventFrame_c_setupPageSettings.call(this);
	
	var page = this.page();
    var image = page.image;
    if (page && image.tileId <= 0 ) {
		this.list().forEach(function(l) {	//将页面注释转成插件指令格式
			if (l.code === 108) {
				var args = l.parameters[0].split(' ');
				var command = args.shift();
				
				if (command == "=>多帧行走图" ){
					if( args.length == 4 ){
						if(args[1]){ var type = String(args[1]);}
						if(args[3]){ var temp1 = String(args[3]);}
						if ( type == "初始帧"){
							this._originalPattern = Number(temp1)-1;
						}
						if ( type == "动画帧间隔"){
							this._drill_EventFrame.inter = String(temp1);
						}
						if ( type == "设置循环"){
							this._drill_EventFrame.loop = String(temp1);
						}
					}
				};  
			};
		}, this);
    }
}
//==============================
// * 图像初始化
//==============================
var _drill_EventFrame_s_setCharacterBitmap = Sprite_Character.prototype.setCharacterBitmap;
Sprite_Character.prototype.setCharacterBitmap = function() {
	_drill_EventFrame_s_setCharacterBitmap.call(this);
	this._drill_EventFrame = {};	//这个是图片的_drill_EventFrame类
	
	if (this._isBigCharacter) {	//只对单图有效
		if( this._character && this._character.constructor.name === "Game_Event" ){
			var page = this._character.page();
			if ( page ) {
				this._character.list().forEach(function(l) {
					if (l.code === 108) {
						var args = l.parameters[0].split(' ');
						var command = args.shift();
						
						if (command == "=>多帧行走图" ){
							if( args.length >= 4 ){
								if(args[1]){ var type = String(args[1]);}
								if(args[3]){ var temp1 = String(args[3]);}
								if ( type == "帧数"){
									this._drill_EventFrame.num = Number(temp1);
									this._character._drill_EventFrame.num = Number(temp1);
								}
								//初始化图片信息相关内容，还需要同步到 this._character 中
							}
						};  
					};
				}, this);
			}
		}
		/* 玩家初始化 */
		if( this._character && (this._character.constructor.name === "Game_Player" || this._character.constructor.name === "Game_Follower" ) ){
			var actor = $gameParty.leader();
			if ( this._character.constructor.name === "Game_Follower" ){
				actor = this._character.actor();
			}
			if(!actor){return}
			var note = String($dataActors[actor.actorId()].note);
			
			var types = (note.match( /<多帧行走图:([^<>]*?)>/g )) || [];
			for(var r = 0;r< types.length; r++){
				var l = (types[r].match( /<多帧行走图:([^<>]*?)>/ )) || [];
				//alert(l);		//正则，g搜索每行符合列，然后在每个符合字符串中抽取出 数字。

				var args = String(l[1]).split(':');
				if( args.length >= 2 ){
					if(args[0]){ var type = String(args[0]);}
					if(args[1]){ var temp1 = String(args[1]);}
					if ( type == "帧数"){
						this._drill_EventFrame.num = Number(temp1);
						this._character._drill_EventFrame.num = Number(temp1);	//初始化图片信息相关内容，还需要同步到 this._character 中
					}
					if ( type == "初始帧"){
						this._character._originalPattern = Number(temp1)-1;
					}
					if ( type == "动画帧间隔"){
						this._character._drill_EventFrame.inter = String(temp1);
					}
					if ( type == "设置循环"){
						this._character._drill_EventFrame.loop = String(temp1);
					}//玩家注释的局限性，就是不能像事件一样直接修改。
				}
			}
		}
	}
}

//=============================================================================
// ** 插件指令
//=============================================================================
var _drill_EventFrame_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_EventFrame_pluginCommand.call(this, command, args);
	if (command === '>多帧行走图') { // >多帧行走图 : 10 : 锁定帧 : 1
		if(args.length >= 4){
			if(args[1]){ var temp1 = String(args[1]);}
			if(args[3]){ var type = String(args[3]);}
			if(args[5]){ var temp2 = Number(args[5]);}
			if( type == '锁定帧' ){
				var e_id = 0;
				if( temp1 == "本事件" ){ 
					e_id = this._eventId;
				}else{
					e_id = Number(temp1);
				}
				var e = $gameMap.event( e_id );
				e._drill_EventFrame.lockPattern = temp2;
			}
			if( type == '解除锁定帧' ){
				var e_id = 0;
				if( temp1 == "本事件" ){ 
					e_id = this._eventId;
				}else{
					e_id = Number(temp1);
				}
				var e = $gameMap.event( e_id );
				e._drill_EventFrame.lockPattern = null;
			}
		}
	}
};


//=============================================================================
// ** 动画帧
//=============================================================================
//==============================
// * 动画帧算值
//==============================
var _drill_EventFrame_c_updateAnimation = Game_CharacterBase.prototype.updateAnimation;
Game_CharacterBase.prototype.updateAnimation = function() {
    /*this.updateAnimationCount();	//根据移动情况设置帧位移点（默认，行走+1，奔跑+1.5）
    if (this._animationCount >= this.animationWait()) {	//达到帧间隔 刷新帧
        this.updatePattern();
        this._animationCount = 0;
    }*/
	_drill_EventFrame_c_updateAnimation.call(this);
	
	if (!this.hasStepAnime() && this._stopCount > 0) {		//恢复过程（与resetPattern等价，但是写在最外层）
		if(this._drill_EventFrame.num != undefined && DrillUp.eventFrame_fix ){
			this._drill_EventFrame.reset_count += 1;
			if( this._drill_EventFrame.reset_count >= DrillUp.eventFrame_fix_inter){
				this._drill_EventFrame.reset_count = 0;
				this.drill_resetPatternSlowly();
			}
		}
	}
	if( this._drill_EventFrame.lockPattern != undefined ){		//锁定帧
		this._pattern = this._drill_EventFrame.lockPattern;
	}
};
//==============================
// * 动画帧间隔
//==============================
var _drill_EventFrame_c_animationWait = Game_CharacterBase.prototype.animationWait;
Game_CharacterBase.prototype.animationWait = function() {
	if( this._drill_EventFrame.inter != undefined  ){
		var speed = this.realMoveSpeed();
		return Number(eval(this._drill_EventFrame.inter));	//帧间隔公式
	}else{
		//默认公式：(9 - this.realMoveSpeed()) * 3
		//根据当前速度公式设置帧（1速度24帧，2速度21帧，3速度18帧，6速度9帧）
		return _drill_EventFrame_c_animationWait.call(this);
	}
};

//==============================
// * 帧循环
//==============================
var _drill_EventFrame_c_updatePattern = Game_CharacterBase.prototype.updatePattern;
Game_CharacterBase.prototype.updatePattern = function() {
    /*if (!this.hasStepAnime() && this._stopCount > 0) {
        this.resetPattern();
    } else {
        this._pattern = (this._pattern + 1) % this.maxPattern();
    }*/
	if( this._drill_EventFrame.loop != undefined ){
		if (!this.hasStepAnime() && this._stopCount > 0) {
			this.resetPattern();	//恢复初始帧
		} else {
			if(this._drill_EventFrame.loop == "从右往左循环"){
				var temp_pattern = this._pattern - 1 ;
				if( temp_pattern < 0 ){ temp_pattern = this.maxPattern()-1 };
				this._pattern = temp_pattern;
				
			}else if(this._drill_EventFrame.loop == "左右往返"){
				//pattern_dir记录当前循环方向
				if(this._drill_EventFrame.pattern_dir == -1){
					var temp_pattern = this._pattern - 1 ;
					if( temp_pattern < 0 ){
						temp_pattern = this.maxPattern()-1;
						this._drill_EventFrame.pattern_dir = 1;
					};
					this._pattern = temp_pattern;
				}else{
					if(this._pattern + 1 >= this.maxPattern()){
						this._drill_EventFrame.pattern_dir = -1;
					}
					this._pattern = (this._pattern + 1) % this.maxPattern();
				}
				
			}else{
				this._pattern = (this._pattern + 1) % this.maxPattern();
			}
		}
	}else{
		_drill_EventFrame_c_updatePattern.call(this);
	}
};

//==============================
// * 最大帧数
//==============================
var _drill_EventFrame_c_maxPattern = Game_CharacterBase.prototype.maxPattern;
Game_CharacterBase.prototype.maxPattern = function() {
	if( this._drill_EventFrame.num != undefined ){
		return this._drill_EventFrame.num;	//最大帧
	}else{
		return _drill_EventFrame_c_maxPattern.call(this);
	}
};

var _drill_EventFrame_c_pattern = Game_CharacterBase.prototype.pattern;
Game_CharacterBase.prototype.pattern = function() {
	if(this._drill_EventFrame.num != undefined){
		//未设置时，默认为初始帧
		return this._pattern < this._drill_EventFrame.num ? this._pattern : this._originalPattern;
	}else{
		return _drill_EventFrame_c_pattern.call(this);
	}
};

//==============================
// * 回到初始帧（可能需要设置多帧的连贯性）
//==============================
/*	该函数写在 最外层updateAnimation中。
var _drill_EventFrame_c_resetPattern = Game_Event.prototype.resetPattern;
Game_Event.prototype.resetPattern = function() {
	_drill_EventFrame_c_resetPattern.call(this);
};*/
Game_CharacterBase.prototype.drill_resetPatternSlowly = function() {
	if(this._pattern > this._originalPattern){
		this._pattern = this._pattern -1;
	}
	if(this._pattern < this._originalPattern){
		this._pattern = this._pattern +1;
	}
}

//==============================
// * 图片切割帧 - 宽度
//==============================
var _drill_EventFrame_s_patternWidth = Sprite_Character.prototype.patternWidth;
Sprite_Character.prototype.patternWidth = function() {
    if (this._isBigCharacter && this._drill_EventFrame.num != undefined) {
        return this.bitmap.width / this._drill_EventFrame.num;
    } else {
        return _drill_EventFrame_s_patternWidth.call(this);
    }
};

/*
//==============================
// * 图片切割帧 - 高度
//==============================
var _drill_EventFrame_s_patternHeight = Sprite_Character.prototype.patternHeight;
Sprite_Character.prototype.patternHeight = function() {
    if (this._isBigCharacter && this._drill_EventFrame.num != undefined) {
        return this.bitmap.height / this._drill_EventFrame.num;
    } else {
        return _drill_EventFrame_s_patternHeight.call(this);
    }
};*/


