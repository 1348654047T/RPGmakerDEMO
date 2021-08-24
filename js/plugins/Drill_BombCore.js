//=============================================================================
// Drill_BombCore.js
//=============================================================================

/*:
 * @plugindesc [v1.1]        炸弹人 - 游戏核心
 * @author Drill_up
 * 
 * @param ----炸弹----
 * @default 
 *
 * @param 资源-炸弹图像
 * @parent ----炸弹----
 * @desc 默认炸弹图像的资源。
 * @default $炸弹
 * @require 1
 * @dir img/characters/
 * @type file
 * 
 * @param 资源-放置声音
 * @parent ----炸弹----
 * @desc 默认放置炸弹的声音资源。
 * @default Equip1
 * @require 1
 * @dir audio/se/
 * @type file
 * 
 * @param 资源-爆炸声音
 * @parent ----炸弹----
 * @desc 默认炸弹爆炸的声音资源。
 * @default Boom
 * @require 1
 * @dir audio/se/
 * @type file
 *
 * @param 计时炸弹时间
 * @parent ----炸弹----
 * @type number
 * @min 1
 * @desc 从炸弹放置到爆炸所需的时间，单位帧。（1秒60帧）
 * @default 150
 *
 * @param 爆炸动画
 * @parent ----炸弹----
 * @type animation
 * @desc 炸弹的爆炸动画。
 * @default 80
 *
 * @param 爆炸持续时间
 * @parent ----炸弹----
 * @type number
 * @min 1
 * @max 30
 * @desc 炸弹爆炸到爆炸结束的时间，单位帧。爆炸一共触发两次，第一次在动画开始的第1帧，第二次在持续时间的末尾帧。
 * @default 14
 * 
 * @param ----玩家----
 * @default 
 *
 * @param 玩家炸弹火力
 * @parent ----玩家----
 * @type number
 * @min 1
 * @desc 初始的炸弹火力，单位图块。
 * @default 1
 *
 * @param 玩家炸弹数量
 * @parent ----玩家----
 * @type number
 * @min 1
 * @desc 初始玩家的炸弹数量。
 * @default 1
 * 
 * 
 * @param ----敌人----
 * @default 
 *
 * @param 敌人默认炸弹火力
 * @parent ----敌人----
 * @type number
 * @min 1
 * @desc 初始的炸弹火力，单位图块。
 * @default 1
 *
 * @param 敌人默认炸弹数量
 * @parent ----敌人----
 * @type number
 * @min 1
 * @desc 初始敌人的炸弹数量。
 * @default 1
 * 
 * @help  
 * =============================================================================
 * +++ Drill_BombCore +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 炸弹人游戏的核心插件。
 * 定义了 玩家、敌人、炸弹、可炸物 以及AI决策树的基本设置。
 * 更多详细介绍，去看看"关于炸弹人游戏.docx"。
 * ★★必须放在"基于"的所有的插件后面★★
 *
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 该插件 不能 单独使用，必须拥有下列插件作为基础，才能运行：
 * 基于：
 *   - Drill_EventDuplicator 物体 - 事件复制器
 *   - Drill_EventThrough 物体 - 事件穿透关系
 *   - Drill_EventLaserTrigger 物体触发 - 可变激光区域&条件 ★★v1.1以上★★
 *   - Drill_EventLaserAnimation 物体触发 - 可变激光区域&播放并行动画 ★★v1.1以上★★
 *
 * 被扩展：
 *   - Drill_OperateKeys 画面 - 键盘手柄按键修改器★★v1.1以上★★
 *     通过该插件你可以设置键盘、手柄按键，放置炸弹。
 *   - Drill_OperateHud 画面 - 鼠标辅助操作面板★★v1.3以上★★
 *     通过该插件你可以设置鼠标、触屏，放置炸弹。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.只需要该核心，基本的炸弹人游戏功能就都能实现。
 *   后面会有一些其它方向扩展的插件，都基于该核心。
 * 2.该插件不要随意关闭，因为程序的移动路线指令会因为没有插件转换
 *   而不停地在后台报错。
 * 3.如果你想做爆炸能穿透，但是玩家无法通过的区域。
 *   根据 物体-事件穿透关系 插件，你可以在指定位置放事件作为透明墙。
 *  （爆炸波不能穿透地形，只能穿透事件）
 * 4.考虑到模块独立化原则，以下内容，核心【不包含】且不考虑：
 *   - 生命值   - 自定义炸弹   - 精确移动速度
 *   - 道具     - 推炸弹能力
 *
 * -----------------------------------------------------------------------------
 * ----硬性规则
 * 1.主动触发的关键字固定为："炸弹人-爆炸"。
 *   （含有该标签的事件且在范围内，都会被炸到）
 * 2.玩家与敌人穿透关系的标签固定为："炸弹人-角色"。
 *   （只有玩家与敌人相互才可以穿透。事件、炸弹、其他物体都会堵路）
 * 3.爆炸的激光穿透的标签固定为："炸弹人-角色","炸弹人-透明墙"。
 *   （爆炸波可以穿透指定标签，但是不能穿透其它物体，包括地形）
 * 4.同一个位置不能放两个炸弹。
 * 5.已爆炸的炸弹会立即引爆范围内的炸弹。
 * 6.炸弹拥有堵住爆炸波的能力。
 * 7.考虑到爆炸的持续问题，这里设置为：爆炸一共触发两次。
 *   第一次在爆炸动画开始播放的第1帧。第二次触发在14帧后。
 *  （后面的生命值系统根据这个规则，触发一次只扣一半的生命）
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 可炸物
 * 如果你定义了一个可以炸开的物体，那么需要具备以下属性：
 * 
 * 事件注释：=>炸弹人核心 : 可炸物属性 : 可炸物
 *
 * 1.AI寻找目标时会识别这个属性，靠近并放置炸弹尝试炸开该物体。
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件 - 敌人
 * 如果你定义了一个敌人，那么敌人需要具备以下属性：
 * 
 * 事件注释：=>炸弹人核心 : 敌人属性 : 对手
 * 事件注释：=>炸弹人核心 : 敌人属性 : NPC
 * 事件注释：=>炸弹人核心 : 敌人属性 : 火力 : 1
 * 事件注释：=>炸弹人核心 : 敌人属性 : 炸弹数 : 1
 * 
 * 1.敌人可以设置为 对手 或 NPC 。默认NPC，寻找目标时，不会把NPC作为目标。
 *   如果为对手，则敌人事件之间会相互作为目标攻击。
 *
 * 设置敌人属性后，通过设置敌人的移动路线指令，来控制基本的AI：
 * 
 * 移动路线指令：>躲避炸弹Lv0
 * 移动路线指令：>躲避炸弹Lv1
 * 移动路线指令：>寻找目标Lv0
 * 移动路线指令：>寻找目标Lv1
 * 移动路线指令：>强迫放置炸弹
 * 
 * 1.寻找目标动作，会去寻找可以炸的物体，物体来判断是否放置炸弹。
 *   含敌人属性"对手"也是目标物体。
 * 2.如果事件不能放炸弹，或者炸弹数量不够，即使 强迫放置炸弹，也没有效果。
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定 - 控制台操作
 * 你可以使用下面插件指令控制：
 * 
 * 插件指令：>炸弹人控制台 : 关闭放置炸弹
 * 插件指令：>炸弹人控制台 : 开启放置炸弹
 * 插件指令：>炸弹人控制台 : 创建炸弹 : 10 : 10 : 1 : 150
 * 
 * 插件指令：>炸弹人控制台 : 敌人属性 : 1 : 对手
 * 插件指令：>炸弹人控制台 : 敌人属性 : 1 : NPC
 * 插件指令：>炸弹人控制台 : 敌人属性 : 1 : 增加火力
 * 插件指令：>炸弹人控制台 : 敌人属性 : 1 : 减少火力
 * 插件指令：>炸弹人控制台 : 敌人属性 : 1 : 设置火力 : 1
 * 插件指令：>炸弹人控制台 : 敌人属性 : 1 : 设置火力(变量) : 1
 * 插件指令：>炸弹人控制台 : 敌人属性 : 1 : 增加炸弹数
 * 插件指令：>炸弹人控制台 : 敌人属性 : 1 : 减少炸弹数
 * 插件指令：>炸弹人控制台 : 敌人属性 : 1 : 设置炸弹数 : 1
 * 插件指令：>炸弹人控制台 : 敌人属性 : 1 : 设置炸弹数(变量) : 1
 * 
 * 插件指令：>炸弹人控制台 : 玩家属性 : 对手
 * 插件指令：>炸弹人控制台 : 玩家属性 : NPC
 * 插件指令：>炸弹人控制台 : 玩家属性 : 增加火力
 * 插件指令：>炸弹人控制台 : 玩家属性 : 减少火力
 * 插件指令：>炸弹人控制台 : 玩家属性 : 设置火力 : 1
 * 插件指令：>炸弹人控制台 : 玩家属性 : 设置火力(变量) : 1
 * 插件指令：>炸弹人控制台 : 玩家属性 : 增加炸弹数
 * 插件指令：>炸弹人控制台 : 玩家属性 : 减少炸弹数
 * 插件指令：>炸弹人控制台 : 玩家属性 : 设置炸弹数 : 1
 * 插件指令：>炸弹人控制台 : 玩家属性 : 设置炸弹数(变量) : 1
 *
 * 1.创建炸弹的四个参数分别为：x位置，y位置，火力，引爆时间
 * 2.无论是减少还是设置，火力值最低为1，炸弹数最低为1。
 * 
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 修正了爆炸持续的判定，优化了ai有时候自己站住不动的bug。
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		BoC （Bomb_Core）
//		临时全局变量	DrillUp.g_BoC_xxx
//		临时局部变量	this._drill_BoC_xxxx
//		存储数据变量	$gameSystem._drill_BoC_xxx
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		大体框架与功能如下：
//			控制台指令
//				->创建炸弹
//				->敌人属性
//				->玩家属性
//			AI决策树
//				->躲避炸弹Lv0
//				->躲避炸弹Lv1
//				->寻找目标Lv0
//				->寻找目标Lv1
//				->强迫放置炸弹
//			玩家
//				->按键放置炸弹
//				->炸弹火力
//				->炸弹数量
//			敌人
//				->对手属性
//				->炸弹火力
//				->炸弹数量
//			可炸物
//				->可炸物属性
//			炸弹
//				->炸弹数据+事件
//				->爆炸范围被阻挡
//				->关键属性：位置(x,y)、火力(fire)、剩余时间(time)
//				->切换了地图后，炸弹放置就爆炸问题（事件复制器的坑，复制前需要清除独立开关。）
//			其它
//				->位移判定问题（基于的插件中修改）
//
//		（通过设置玩家，控制玩家放炸弹？）
//
//		不考虑的方面：
//			1.敌人的生命值在这里完全不考虑（高级ai再考虑）
//			2.自定义炸弹的样子，形状，火力，这里完全不考虑（只设计标准炸弹即可）
//			3.道具完全不考虑
//			4.推炸弹完全不考虑
//			5.移动速度目前不计影响，但是后面高级AI需要把这个考虑进去。
//		
//		存在的问题：
//			1.小爱丽丝寻找目标时，靠近敌人时不识别堵路情况。
//			这样会出现两个对手在隔一个堵路时而相互观望的情况。

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_BombCore = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_BombCore');

	DrillUp.g_BoC_bombImg = String(DrillUp.parameters['资源-炸弹图像'] || "" );
	DrillUp.g_BoC_bombPutSound = String(DrillUp.parameters['资源-放置声音'] || "" );
	DrillUp.g_BoC_bombBoomSound = String(DrillUp.parameters['资源-爆炸声音'] || "" );
	DrillUp.g_BoC_bombTime = Number(DrillUp.parameters['计时炸弹时间'] || 150);
	DrillUp.g_BoC_bombAnim = Number(DrillUp.parameters['爆炸动画'] || 80);
	DrillUp.g_BoC_bombInterval = Number(DrillUp.parameters['爆炸持续时间'] || 18);
	
	DrillUp.g_BoC_playerFire = Number(DrillUp.parameters['玩家炸弹火力'] || 1);
	DrillUp.g_BoC_playerBombNum = Number(DrillUp.parameters['玩家炸弹数量'] || 1);
	
	DrillUp.g_BoC_enemyFire = Number(DrillUp.parameters['敌人默认炸弹火力'] || 1);
	DrillUp.g_BoC_enemyBombNum = Number(DrillUp.parameters['敌人默认炸弹数量'] || 1);
	
//=============================================================================
// * >基于插件检测
//=============================================================================
if( Imported.Drill_EventDuplicator &&
	Imported.Drill_EventThrough &&
	Imported.Drill_EventLaserTrigger &&
	Imported.Drill_EventLaserAnimation
){

//=============================================================================
// * 插件指令
//=============================================================================
var _drill_BoC_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_BoC_pluginCommand.call(this, command, args);
	if (command === '>炸弹人控制台') {
		if(args.length == 10){
			var type = String(args[1]);
			var temp1 = Number(args[3]);
			var temp2 = Number(args[5]);
			var temp3 = Number(args[7]);
			var temp4 = Number(args[9]);
			
			if( type == "创建炸弹" ){
				var input_data = {
					'x':temp1,
					'y':temp2,
					'fire':temp3,
					'time':temp4
				}
				$gameMap.drill_BoC_putBomb(input_data);
			}
		}
		if(args.length >= 6){
			var type = String(args[1]);
			var temp1 = Number(args[3]);
			var temp2 = String(args[5]);
			if(args[7]){ var temp3 = String(args[7]); }
			
			if( type == "敌人属性" ){
				if( temp2 == "对手" ){
					$gameMap.event(temp1)._drill_BoC_char['character'] = "opponent";
				}
				if( temp2 == "NPC" ){
					$gameMap.event(temp1)._drill_BoC_char['character'] = "NPC";
				}
				if( temp2 == "增加火力" ){
					$gameMap.event(temp1)._drill_BoC_char['fire'] += 1;
				}
				if( temp2 == "减少火力" ){
					var fire = $gameMap.event(temp1)._drill_BoC_char['fire']-1;
					fire = Math.max(fire,1);
					$gameMap.event(temp1)._drill_BoC_char['fire'] = fire;
				}
				if( temp2 == "设置火力" ){
					var fire = Number(temp3);
					fire = Math.max(fire,1);
					$gameMap.event(temp1)._drill_BoC_char['fire'] = fire;
				}
				if( temp2 == "设置火力(变量)" ){
					var fire = $gameVariables.value(Number(temp3));
					fire = Math.max(fire,1);
					$gameMap.event(temp1)._drill_BoC_char['fire'] = fire;
				}
				if( temp2 == "增加炸弹数" ){
					$gameMap.event(temp1)._drill_BoC_char['bombNum'] += 1;
				}
				if( temp2 == "减少炸弹数" ){
					var bombNum = $gameMap.event(temp1)._drill_BoC_char['bombNum']-1;
					bombNum = Math.max(bombNum,1);
					$gameMap.event(temp1)._drill_BoC_char['bombNum'] = bombNum;
				}
				if( temp2 == "设置炸弹数" ){
					var bombNum = Number(temp3);
					bombNum = Math.max(bombNum,1);
					$gameMap.event(temp1)._drill_BoC_char['bombNum'] = bombNum;
				}
				if( temp2 == "设置炸弹数(变量)" ){
					var bombNum = $gameVariables.value(Number(temp3));
					bombNum = Math.max(bombNum,1);
					$gameMap.event(temp1)._drill_BoC_char['bombNum'] = bombNum;
				}
			}
		}
		if(args.length >= 4){
			var type = String(args[1]);
			var temp2 = String(args[3]);
			if(args[5]){ var temp3 = String(args[5]); }
			
			if( type == "玩家属性" ){
				if( temp2 == "对手" ){
					$gamePlayer._drill_BoC_char['character'] = "opponent";
				}
				if( temp2 == "NPC" ){
					$gamePlayer._drill_BoC_char['character'] = "NPC";
				}
				if( temp2 == "增加火力" ){
					$gamePlayer._drill_BoC_char['fire'] += 1;
				}
				if( temp2 == "减少火力" ){
					var fire = $gamePlayer._drill_BoC_char['fire']-1;
					fire = Math.max(fire,1);
					$gamePlayer._drill_BoC_char['fire'] = fire;
				}
				if( temp2 == "设置火力" ){
					var fire = Number(temp3);
					fire = Math.max(fire,1);
					$gamePlayer._drill_BoC_char['fire'] = fire;
				}
				if( temp2 == "设置火力(变量)" ){
					var fire = $gameVariables.value(Number(temp3));
					fire = Math.max(fire,1);
					$gamePlayer._drill_BoC_char['fire'] = fire;
				}
				if( temp2 == "增加炸弹数" ){
					$gamePlayer._drill_BoC_char['bombNum'] += 1;
				}
				if( temp2 == "减少炸弹数" ){
					var bombNum = $gamePlayer._drill_BoC_char['bombNum']-1;
					bombNum = Math.max(bombNum,1);
					$gamePlayer._drill_BoC_char['bombNum'] = bombNum;
				}
				if( temp2 == "设置炸弹数" ){
					var bombNum = Number(temp3);
					bombNum = Math.max(bombNum,1);
					$gamePlayer._drill_BoC_char['bombNum'] = bombNum;
				}
				if( temp2 == "设置炸弹数(变量)" ){
					var bombNum = $gameVariables.value(Number(temp3));
					bombNum = Math.max(bombNum,1);
					$gamePlayer._drill_BoC_char['bombNum'] = bombNum;
				}
			}
		}
		if(args.length == 2){
			var type = String(args[1]);
			if( type == "关闭放置炸弹" ){
				$gameSystem._drill_BoC_bomb_enable = false;
			}
			if( type == "开启放置炸弹" ){
				$gameSystem._drill_BoC_bomb_enable = true;
			}
		}
	}
};
//=============================================================================
// ** 存储变量初始化
//=============================================================================
var _drill_BoC_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    _drill_BoC_sys_initialize.call(this);
	this._drill_BoC_bomb_enable = true;
}
//=============================================================================
// ** 地图
//=============================================================================
//==============================
// * 地图 - 初始化
//==============================
var _drill_BoC_gamemap_initialize = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function() {
	_drill_BoC_gamemap_initialize.call(this);
	this._drill_BoC_explodeArea = [];
	this._drill_BoC_explodeDelay = 0;
}
//==============================
// * 地图 - 帧刷新
//==============================
var _drill_BoC_gamemap_update = Game_Map.prototype.update;
Game_Map.prototype.update = function(sceneActive) {
    if (sceneActive) {
		this.drill_BoC_updateBombTime();
		this.drill_BoC_updateExplodeArea();
	}
	_drill_BoC_gamemap_update.call(this,sceneActive);
}
//=============================================================================
// ** 人物（敌人事件、玩家 的父类）
//=============================================================================
//==============================
// * 人物 - 初始化
//==============================
var _drill_BoC_c_initialize = Game_CharacterBase.prototype.initialize;
Game_CharacterBase.prototype.initialize = function() {
	_drill_BoC_c_initialize.call(this);
	this._drill_BoC_char = {};
}
//==============================
// * 人物 - 炸弹剩余数量
//==============================
Game_CharacterBase.prototype.drill_BoC_hasBomb = function() {
	if( !this._drill_BoC_char['bombTank'] ){ return false }
	var count = this._drill_BoC_char['bombTank'].filter( function(value,index,array){ return $gameMap.event(value)._erased == false; } ).length;
	return count < this._drill_BoC_char['bombNum'];
}
//==============================
// * 人物 - 放置炸弹（返回炸弹id）
//==============================
Game_CharacterBase.prototype.drill_BoC_characterPutBomb = function() {
	if( this.drill_BoC_hasBomb() ){
		var input_data = {
			'x':this._x,
			'y':this._y,
			'fire':this._drill_BoC_char['fire']
		}
		if( this.constructor.name == "Game_Player" ){		//玩家需要流畅性，事件需要时机准确性
			input_data = {
				'x':Math.floor(this._realX + 0.5),
				'y':Math.floor(this._realY + 0.5),
				'fire':this._drill_BoC_char['fire']
			}
		}
		var b_id = $gameMap.drill_BoC_putBomb(input_data);
		if( b_id != -1 ){
			this._drill_BoC_char['bombTank'].push(b_id);
		}
		return b_id;
	}else{
		return -1;
	}
}
//==============================
// * 人物 - 对手判断
//==============================
Game_CharacterBase.prototype.drill_BoC_isOpponent = function() {
	if(this._drill_BoC_char['character']){
		return this._drill_BoC_char['character'] == "opponent";
	}else{
		return false;
	}
}
//==============================
// * 人物 - 可炸物判断
//==============================
Game_CharacterBase.prototype.drill_BoC_isDestructible = function() {
	if(this._drill_BoC_char['character']){
		return this._drill_BoC_char['character'] == "destructible";
	}else{
		return false;
	}
}
//==============================
// * 人物 - NPC判断
//==============================
Game_CharacterBase.prototype.drill_BoC_isNPC = function() {
	if(this._drill_BoC_char['character']){
		return this._drill_BoC_char['character'] == "NPC";
	}else{
		return true;
	}
}
//==============================
// * 人物 - 获取对手（不包括玩家）
//==============================
Game_Map.prototype.drill_BoC_Opponents = function() {
    return this.events().filter(function(event) {
        return event.drill_BoC_isOpponent();
    });
}
//==============================
// * 人物 - 获取可炸物
//==============================
Game_Map.prototype.drill_BoC_Destructibles = function() {
    return this.events().filter(function(event) {
        return event.drill_BoC_isDestructible();
    });
}

//=============================================================================
// ** 玩家
//=============================================================================
//==============================
// * 玩家初始化
//==============================
var _drill_BoC_p_initialize = Game_Player.prototype.initialize;
Game_Player.prototype.initialize = function() {
	_drill_BoC_p_initialize.call(this);
	this._drill_BoC_char['character'] = "opponent";				//对手
	this._drill_BoC_char['fire'] = DrillUp.g_BoC_playerFire;	//火力
	this._drill_BoC_char['bombNum'] = DrillUp.g_BoC_playerBombNum;//炸弹数
	this._drill_BoC_char['bombTank'] = [];						//放置的炸弹id集合

}
//==============================
// * 放置炸弹
//==============================
var _drill_BoC_moveByInput = Game_Player.prototype.moveByInput;
Game_Player.prototype.moveByInput = function() {
	if( this.drill_isBombControl() ){			//放置炸弹按钮按下
		var b_id = this.drill_BoC_characterPutBomb();
		if( b_id == -1 ){
			SoundManager.playBuzzer();
		}
	}
	_drill_BoC_moveByInput.call(this);	
	
};
//==============================
// * 玩家输入监听（Drill_OperateKeys来覆写）
//==============================
Game_Player.prototype.drill_isBombControl = function() {
	return false;
}
//==============================
// * 玩家 - 切换地图时，刷新炸弹
//==============================
var _drill_BoC_m_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
	_drill_BoC_m_setup.call(this,mapId);
	$gamePlayer._drill_BoC_char['bombTank'] = [];
}
//=============================================================================
// ** 敌人
//=============================================================================
//==============================
// * 敌人 - 初始化 
//==============================
var _drill_BoC_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
	_drill_BoC_setupPage.call(this);
    this.drill_BoC_setupEnemy();
};
Game_Event.prototype.drill_BoC_setupEnemy = function() {
	this._drill_BoC_char = {};
	this._drill_BoC_char['character'] = "NPC";
	this._drill_BoC_char['fire'] = DrillUp.g_BoC_enemyFire;
	this._drill_BoC_char['bombNum'] = DrillUp.g_BoC_enemyBombNum;
	this._drill_BoC_char['bombTank'] = [];
	if (!this._erased && this.page()) {this.list().forEach(function(l) {
		if (l.code === 108) {
			var args = l.parameters[0].split(' ');
			var command = args.shift();
			if (command == "=>炸弹人核心"){	//=>炸弹人核心 : 敌人属性 : 火力 : 1
				if(args.length >= 4){
					if(args[1]){ var type = String(args[1]); }
					if(args[3]){ var temp1 = String(args[3]); }
					if(args[5]){ var temp2 = String(args[5]); }
					if( type == "敌人属性" ){
						if( temp1 == "对手" ){
							this._drill_BoC_char['character'] = "opponent";
						}
						if( temp1 == "NPC" ){
							this._drill_BoC_char['character'] = "NPC";
						}
						if( temp1 == "火力" ){
							this._drill_BoC_char['fire'] = Number(temp2);
						}
						if( temp1 == "炸弹数" ){
							this._drill_BoC_char['bombNum'] = Number(temp2);
						}
					}
					if( type == "可炸物属性" ){
						if( temp1 == "可炸物" ){
							this._drill_BoC_char['character'] = "destructible";
						}
					}
				}
			};
		};
	}, this);};
};

//=============================================================================
// * 	放置炸弹
//
//		功能：		通过调用主函数，快速建立一个炸弹。
//		可选项：	input_data中的数据可调，见 drill_BoC_createBombData 中的数据初始化。
//		主函数：	var b_id = $gameMap.drill_BoC_putBomb( input_data );
//=============================================================================
//==============================
// * 炸弹 - 放置总流程
//==============================
Game_Map.prototype.drill_BoC_putBomb = function( input_data ) {
	if( $gameSystem._drill_BoC_bomb_enable == false ){ return -1; }
	
	var data = $gameMap.drill_BoC_createBombData(input_data);	//获取炸弹事件数据
	
	if( this.drill_BoC_isBombCanPut( input_data['x'],input_data['y'] ) ){	//验证炸弹是否能放
		var e = $gameMap.drill_newEvent_createEvent(data);//新建事件
		if(data['putSound']){	//放置音效
			var se = {};
			se.name = data['putSound'];
			se.pitch = 100;
			se.volume = 100;
			AudioManager.playSe(se);
		}
		e._BoC_bomb = {};					//标记炸弹
		e._BoC_bomb['x'] = data['x'];		//（ai判定用数据）
		e._BoC_bomb['y'] = data['y'];
		e._BoC_bomb['fire'] = data['fire'];
		e._BoC_bomb['time'] = data['time'];
		e._BoC_bomb['triggerType'] = "变化激光区域";
		e._BoC_bomb['dirs'] = ['东','南','西','北'];
		e._BoC_bomb['options'] = {"through":["炸弹人-角色","炸弹人-透明墙"]};
		return e._eventId;
	}else{
		return -1;
	}
}
//==============================
// * 炸弹 - 获取
//==============================
Game_Map.prototype.drill_BoC_Bombs = function() {
    return this.events().filter(function(event) {
        return event._BoC_bomb && !event._erased;
    });
}
//==============================
// * 炸弹 - 帧刷新
//==============================
Game_Map.prototype.drill_BoC_updateBombTime = function() {
	var bombs = this.drill_BoC_Bombs();
	for(var i=0; i<bombs.length; i++){
		bombs[i]._BoC_bomb['time'] -= 1;
	}
}
//==============================
// * 炸弹 - 是否可放置
//==============================
Game_Map.prototype.drill_BoC_isBombCanPut = function( x, y ) {
	if( !this.isPassable(x, y, 2) && !this.isPassable(x, y, 4) && !this.isPassable(x, y, 6) && !this.isPassable(x, y, 8) ){ return false; }	//完全不可通行
	if( this.drill_ETh_eventsXyNtEx2(x, y, ['炸弹人-角色']).length > 0 ){ return false; }	//含有阻塞事件
	return true;
}
//==============================
// * 炸弹 - 生成数据
//==============================
Game_Map.prototype.drill_BoC_createBombData = function( input_data ) {
	
	//数据初始化
	var _fire = input_data['fire'] || DrillUp.g_BoC_enemyFire;
	var _anim = input_data['anim'] || DrillUp.g_BoC_bombAnim;
	var _img = input_data['img'] || DrillUp.g_BoC_bombImg;
	var _boomSound = input_data['boomSound'] || DrillUp.g_BoC_bombBoomSound;
	var _interval = input_data['interval'] || DrillUp.g_BoC_bombInterval;
	var _time = input_data['time'] || DrillUp.g_BoC_bombTime;
	var _putSound = input_data['putSound'] || DrillUp.g_BoC_bombPutSound;
	var _x = input_data['x'] || 0;
	var _y = input_data['y'] || 0;

	//新建模板（id在创建事件时才赋值）
	var event_data = {
		"name":"定时炸弹",
		"note":"",
		"meta":{},	//镜像反射的查找meta的bug修复（其实一直不知道meta的作用）
		"pages":[{
			//>>第一页
			"conditions":{
				"actorId":1,"actorValid":false,"itemId":1,"itemValid":false,"selfSwitchCh":"A","selfSwitchValid":false,"switch1Id":1,"switch1Valid":false,"switch2Id":1,"switch2Valid":false,"variableId":1,"variableValid":false,"variableValue":0
			},
			"image":{
				"tileId":0,
				"characterName": _img,
				"direction": 8 ,
				"pattern": 1 ,
				"characterIndex":0
			},
			"list":[
				{"code":108,"indent":0,"parameters":["=>被触发 : 炸弹人-爆炸 : 触发独立开关 : A"]},	//连锁爆炸条件
				{"code":230,"indent":0,"parameters":[ _time ]},		//延时条件
				{"code":123,"indent":0,"parameters":["A",0]},		//爆炸独立开关
				{"code":0,"indent":0,"parameters":[]}				//终止符
			],
			"moveFrequency":3,
			"moveRoute":{
				"list":[{"code":0,"parameters":[]}],"repeat":true,"skippable":false,"wait":false
			},
			"moveSpeed":3,
			"moveType":0,
			"directionFix":true,	//固定朝向
			"priorityType":1,		//优先级（与人物相同）
			"stepAnime":true,		//踏步动画
			"through":false,		//穿透
			"trigger":4,			//触发条件（并行处理）
			"walkAnime":false		//步行动画
		},{
			//>>第二页
			"conditions":{
				"actorId":1,"actorValid":false,"itemId":1,"itemValid":false,"selfSwitchCh":"A","selfSwitchValid":true,"switch1Id":1,"switch1Valid":false,"switch2Id":1,
				"switch2Valid":false,"variableId":1,"variableValid":false,"variableValue":0
			},
			"image":{
				"tileId":0,
				"characterName": _img,
				"direction":8,
				"pattern":1,
				"characterIndex":0
			},
			"list":[
				{"code":250,"indent":0,"parameters":[{"name": _boomSound,"volume":100,"pitch":100,"pan":0}]},
				{"code":356,"indent":0,"parameters":[">主动触发 : 设置事件穿透 : 炸弹人-角色,炸弹人-透明墙"]},
				{"code":356,"indent":0,"parameters":[">主动触发 : 本事件 : 可变激光区域 : 东,南,西,北 : " + _fire + " : 炸弹人-爆炸"]},
				{"code":356,"indent":0,"parameters":[">物体范围动画 : " +_anim+ " : 上一次触发的激光区域"]},
				{"code":356,"indent":0,"parameters":[">主动触发 : 关闭全部事件穿透"]},
				{"code":225,"indent":0,"parameters":[3,7,20,false]},	//震动屏幕
				{"code":230,"indent":0,"parameters":[ _interval ]},		//延时间隔
				{"code":356,"indent":0,"parameters":[">主动触发 : 上一次触发的激光区域 : 炸弹人-爆炸"]},
				{"code":214,"indent":0,"parameters":[]},				//消除事件
				{"code":0,"indent":0,"parameters":[]}
			],
			"moveFrequency":3,
			"moveRoute":{
				"list":[{"code":0,"parameters":[]}],"repeat":true,"skippable":false,"wait":false
			},
			"moveSpeed":3,
			"moveType":0,
			"directionFix":true,	//固定朝向
			"priorityType":0,		//优先级（在人物下方）
			"stepAnime":true,		//踏步动画
			"through":false,		//穿透
			"trigger":4,			//触发条件（并行处理）
			"walkAnime":false		//步行动画
		}],
		"x": _x,
		"y": _y,
		"fire":_fire,				//特殊 - 炸弹火力
		"time":_time + _interval,	//特殊 - 炸弹时长
		"putSound":_putSound
	};
	
	return event_data;
};


//=============================================================================
// ** AI决策树
//=============================================================================
//==============================
// * 路线 - 事件默认路线
//==============================
var _drill_BoC_setMoveRoute = Game_Character.prototype.setMoveRoute;
Game_Character.prototype.setMoveRoute = function(moveRoute) {
	var mr = moveRoute;
	mr.list = this.drill_BoC_moveRouteTransform(mr.list);
	_drill_BoC_setMoveRoute.call(this, mr);
};
//==============================
// * 路线 - 函数设置路线
//==============================
var _drill_BoC_forceMoveRoute = Game_Character.prototype.forceMoveRoute;
Game_Character.prototype.forceMoveRoute = function(moveRoute) {
	var mr = moveRoute;
	mr.list = this.drill_BoC_moveRouteTransform(mr.list);
	_drill_BoC_forceMoveRoute.call(this, mr);
};
//==============================
// * 路线 - 修改路线内容
//==============================
Game_Character.prototype.drill_BoC_moveRouteTransform = function(route_list) {
	var list = [];
	route_list.forEach(function(r){
		if (r.code === 45) {
			if (r.parameters[0].match( /(>躲避炸弹Lv0)/ )) {
				var _script = "this.drill_BoC_avoidBombAI_Lv0();";
				list.push({ "code":45,"parameters":[_script] });
			} else if (r.parameters[0].match( /(>躲避炸弹Lv1)/ )) {
				var _script = "this.drill_BoC_avoidBombAI_Lv1();";
				list.push({ "code":45,"parameters":[_script] });
			} else if (r.parameters[0].match( /(>寻找目标Lv0)/ )) {
				var _script = "this.drill_BoC_findTargetAI_Lv0();";
				list.push({ "code":45,"parameters":[_script] });
			} else if (r.parameters[0].match( /(>寻找目标Lv1)/ )) {
				var _script = "this.drill_BoC_findTargetAI_Lv1();";
				list.push({ "code":45,"parameters":[_script] });
			} else if (r.parameters[0].match( /(>强迫放置炸弹)/ )) {
				var _script = "this.drill_BoC_putBombAI();";
				list.push({ "code":45,"parameters":[_script] });
			} else {
				list.push(r);
			}
		} else {
			list.push(r);
		}
	}.bind(this));
	return list;
};
//==============================
// * AI - 放置炸弹
//==============================
Game_Character.prototype.drill_BoC_putBombAI = function() {
	this.drill_BoC_characterPutBomb();
}
//==============================
// * AI - 躲避炸弹Lv0
//		 （决策树见文档说明）
//==============================
Game_Character.prototype.drill_BoC_avoidBombAI_Lv0 = function() {
	
	// >>脚下区域判定
	if( ! this.drill_BoC_isInExplodeArea(this._x, this._y) ){
		return;		//如果脚下是安全的，完全不理会
	}
	
	// >>可移动区域判定
	var passableDir = this.drill_BoC_getPassableDirs(this._x, this._y);
	if( passableDir.length == 0 ){		//被堵死
		this._waitCount = 11;
		this.turnRandom();//随机旋转
		return;
	}
	
	// >>新的安全区域判定
	var safeDir = [];
	for( var i=0; i<passableDir.length; i++ ){
		if( !this.drill_BoC_isInExplodeAreaDir(this._x, this._y, passableDir[i]) ){
			safeDir.push(passableDir[i]);
		}
	}
	if( safeDir.length == 0 ){		//当前范围内没有安全区域
		this.moveStraight(passableDir[ Math.floor( Math.random() * passableDir.length ) ]);	//随机向可移动位置移动
		return;
	}
	
	this.moveStraight(safeDir[ Math.floor( Math.random() * safeDir.length ) ]);	//随机向安全区移动
}
//==============================
// * AI - 躲避炸弹Lv1
//		 （决策树见文档说明）
//==============================
Game_Character.prototype.drill_BoC_avoidBombAI_Lv1 = function() {
	
	// >>脚下区域判定
	if( ! this.drill_BoC_isInExplodeArea(this._x, this._y) ){
		return;		//如果脚下是安全的，完全不理会
	}
	
	// >>可移动区域判定
	var passableDir = this.drill_BoC_getPassableDirs(this._x, this._y);
	if( passableDir.length == 0 ){		//被堵死
		this._waitCount = 14;
		this.turnRandom();//随机旋转
		return;
	}
	
	// >>新的安全区域判定
	var safeDir = [];
	for( var i=0; i<passableDir.length; i++ ){
		if( !this.drill_BoC_isInExplodeAreaDir(this._x, this._y, passableDir[i]) ){
			safeDir.push(passableDir[i]);
		}
	}
	if( safeDir.length == 0 ){		//当前范围内没有安全区域
		// >>爆炸时间区域判定
		var lateFootTime = this.drill_BoC_isInExplodeAreaTime(this._x, this._y);
		var lateDirData = [];
		for( var i=0; i<passableDir.length; i++ ){
			var dir_data = {};
			dir_data.time = this.drill_BoC_isInExplodeAreaDirTime(this._x, this._y, passableDir[i] );
			dir_data.dir = passableDir[i];
			lateDirData.push( dir_data );
		}
		lateDirData.sort(function(a, b){
			if( a.time != b.time ){ return b.time - a.time; }	//数值大的优先
			return Math.floor( Math.random()*3 - 2 );	//时间相同，则随机排序
		});
		if( lateDirData.length == 0 || lateFootTime > lateDirData[0].time ){
			//原地等待
		}else{
			this.moveStraight(lateDirData[0].dir);	//向爆炸时间长的位置移动
		}
		return;
	}
	
	// >>选择安全区堵路少的方向
	var blockLessData = [];
	for( var i=0; i<safeDir.length; i++ ){
		var x2 = $gameMap.roundXWithDirection(x, safeDir[i]);
		var y2 = $gameMap.roundYWithDirection(y, safeDir[i]);
		var lessData = {};
		lessData.count = this.drill_BoC_getPassableDirs(x2, y2).length;
		lessData.dir = safeDir[i];
		blockLessData.push(lessData);
	}
	blockLessData.sort(function(a, b){
		if( a.count != b.count ){ return b.count - a.count; }	//数值大的优先
		return Math.floor( Math.random()*3 - 2 );	//时间相同，则随机排序
	});
	if( blockLessData.length > 0 ){
		this.moveStraight(blockLessData[0].dir);
	}
}
//==============================
// * AI - 寻找目标Lv0
//		 （决策树见文档说明）
//==============================
Game_Character.prototype.drill_BoC_findTargetAI_Lv0 = function() {
	
	// >>脚下区域判定
	if( this.drill_BoC_isInExplodeArea(this._x, this._y) || !this.drill_BoC_hasBomb() ){
		return;		//如果脚下不安全/没有炸弹，停止寻找目标
	}
	
	// >>可移动区域判定
	var passableDir = this.drill_BoC_getPassableDirs(this._x, this._y);
	if( passableDir.length == 0 ){		//被堵死
		this._waitCount = 14;
		this.turnRandom();//随机旋转
		return;
	}
	
	// >>可炸物搜寻
	var dests = this.drill_BoC_getAllTarget();
	dests = dests.filter( //搜寻距离<=2的可炸物
		function(value,index,array){
			return $gameMap.distance(value._x,value._y,this._x,this._y) <= 2;
		} ,this);
	if( dests.length == 0 ){
		this.moveStraight(passableDir[ Math.floor( Math.random() * passableDir.length ) ]);	//随机向可移动位置移动
		return;
	}
	
	// >>可炸物是否在5图块内
	var near_dests = dests.filter(
		function(value,index,array){
			return $gameMap.distance(value._x,value._y,this._x,this._y) <= 1;
		} ,this);
	if( near_dests.length == 0 ){
		//靠近随机可炸物
		var dest_character = dests[Math.floor( Math.random() * dests.length )];
		
		var dir = 0;
		var sx = this.deltaXFrom(dest_character.x);
		var sy = this.deltaYFrom(dest_character.y);
		if ( Math.random() > 0.5 ) {
			if( sx !== 0 ){
				dir = sx > 0 ? 4 : 6;
				if( !this.canPass( this._x, this._y, dir) ){	//如果堵路，选其他方向
					dir = Math.random()*41%20 > 10 ? 8 : 2;
				}
			}
		} else {
			if( sy !== 0 ){
				dir = sy > 0 ? 8 : 2;
				if( !this.canPass( this._x, this._y, dir) ){	//如果堵路，选其他方向
					dir = Math.random()*41%20 > 10 ? 4 : 6;
				}
			}
		}
		if( this.drill_BoC_isInExplodeAreaDir( this._x, this._y, dir) ){
			return;	//如果有爆炸，等待
		}
		this.moveStraight(dir);
		return;
	}else{
		//放置炸弹
		this.drill_BoC_putBombAI();
		
	}
}
//==============================
// * AI - 寻找目标Lv1
//		 （决策树见文档说明）
//==============================
Game_Character.prototype.drill_BoC_findTargetAI_Lv1 = function() {
	
	// >>脚下区域判定
	if( this.drill_BoC_isInExplodeArea(this._x, this._y) || !this.drill_BoC_hasBomb() ){
		return;		//如果脚下不安全/没有炸弹，停止寻找目标
	}
	
	// >>可炸物搜寻
	var dests = this.drill_BoC_getAllTarget();
	dests = dests.filter( //搜寻距离<=2的可炸物
		function(value,index,array){
			return $gameMap.distance(value._x,value._y,this._x,this._y) <= 2;
		} ,this);
	if( dests.length == 0 ){
		// >>选择安全区堵路少的方向
		var passableDir = this.drill_BoC_getPassableDirs(this._x, this._y);
		var safeDir = [];
		for( var i=0; i<passableDir.length; i++ ){
			if( !this.drill_BoC_isInExplodeAreaDir(this._x, this._y, passableDir[i]) ){
				safeDir.push(passableDir[i]);
			}
		}
		var blockLessData = [];
		for( var i=0; i<safeDir.length; i++ ){
			var x2 = $gameMap.roundXWithDirection(x, safeDir[i]);
			var y2 = $gameMap.roundYWithDirection(y, safeDir[i]);
			var lessData = {};
			lessData.count = this.drill_BoC_getPassableDirs(x2, y2).length;
			lessData.dir = safeDir[i];
			blockLessData.push(lessData);
		}
		blockLessData.sort(function(a, b){
			if( a.count != b.count ){ return b.count - a.count; }	//数值大的优先
			return Math.floor( Math.random()*3 - 2 );	//时间相同，则随机排序
		});
		if( blockLessData.length > 0 ){
			this.moveStraight(blockLessData[0].dir);
		}
		return;
	}
	
	// >>5图块内是否安全
	if (this.drill_BoC_isInExplodeArea( $gameMap.roundX(this._x + 1), this._y ) ||
		this.drill_BoC_isInExplodeArea( $gameMap.roundX(this._x - 1), this._y ) ||
		this.drill_BoC_isInExplodeArea( this._x , $gameMap.roundY(this._y + 1)) ||
		this.drill_BoC_isInExplodeArea( this._x , $gameMap.roundY(this._y - 1)) ){
			
		//发呆
		return;
	}
	
	// >>可炸物是否在5图块内
	var near_dests = dests.filter(
		function(value,index,array){
			return $gameMap.distance(value._x,value._y,this._x,this._y) <= 1;
		} ,this);
	if( near_dests.length == 0 ){
		//靠近随机可炸物
		var dest_character = dests[Math.floor( Math.random() * dests.length )];
		
		var dir = 0;
		var sx = this.deltaXFrom(dest_character.x);
		var sy = this.deltaYFrom(dest_character.y);
		if ( Math.random() > 0.5 ) {
			if( sx !== 0 ){
				dir = sx > 0 ? 4 : 6;
				if( !this.canPass( this._x, this._y, dir) ){	//如果堵路，选其他方向
					dir = Math.random()*41%20 > 10 ? 8 : 2;
				}
			}
		} else {
			if( sy !== 0 ){
				dir = sy > 0 ? 8 : 2;
				if( !this.canPass( this._x, this._y, dir) ){	//如果堵路，选其他方向
					dir = Math.random()*41%20 > 10 ? 4 : 6;
				}
			}
		}
		if( this.drill_BoC_isInExplodeAreaDir( this._x, this._y, dir) ){
			return;	//如果有爆炸，等待
		}
		this.moveStraight(dir);
		return;
	}
		
	//放置炸弹
	this.drill_BoC_putBombAI();
	
}

//==============================
// * AI - 获取指定区域的可通行区域
//==============================
Game_CharacterBase.prototype.drill_BoC_getPassableDirs = function(x, y) {
	var passableDir = [];
	if( this.canPass(x, y, 2) ){ passableDir.push(2); }	//下
	if( this.canPass(x, y, 4) ){ passableDir.push(4); }	//左
	if( this.canPass(x, y, 6) ){ passableDir.push(6); }	//右
	if( this.canPass(x, y, 8) ){ passableDir.push(8); }	//上
	return passableDir;
}
//==============================
// * AI - 获取全部目标（不区分敌人、玩家、可炸物）
//==============================
Game_CharacterBase.prototype.drill_BoC_getAllTarget = function() {
	var targets = $gameMap.drill_BoC_Destructibles();
	targets = targets.concat($gameMap.drill_BoC_Opponents());
	if( $gamePlayer.drill_BoC_isOpponent() ){ targets.push($gamePlayer); }
	targets.splice(targets.indexOf(this),1);		//排除自己
	return targets;
}
//==============================
// * AI - 是否为爆炸区域（前进一步的位置）
//==============================
Game_CharacterBase.prototype.drill_BoC_isInExplodeAreaDir = function(x, y, d) {
    var x2 = $gameMap.roundXWithDirection(x, d);
    var y2 = $gameMap.roundYWithDirection(y, d);
	return this.drill_BoC_isInExplodeArea(x2,y2);
}
//==============================
// * AI - 是否为爆炸区域（脚下）
//==============================
Game_CharacterBase.prototype.drill_BoC_isInExplodeArea = function(x, y) {
	for(var i= 0; i<$gameMap._drill_BoC_explodeArea.length ;i++){
		if( $gameMap._drill_BoC_explodeArea[i].x == x && $gameMap._drill_BoC_explodeArea[i].y == y ){
			return true;
		}
	}
	return false;
}
//==============================
// * AI - 剩余爆炸时间（前进一步的位置）
//==============================
Game_CharacterBase.prototype.drill_BoC_isInExplodeAreaDirTime = function(x, y, d) {
    var x2 = $gameMap.roundXWithDirection(x, d);
    var y2 = $gameMap.roundYWithDirection(y, d);
	return this.drill_BoC_isInExplodeAreaTime(x2,y2);
}
//==============================
// * AI - 剩余爆炸时间（脚下位置）
//==============================
Game_CharacterBase.prototype.drill_BoC_isInExplodeAreaTime = function(x, y) {
	for(var i= 0; i<$gameMap._drill_BoC_explodeArea.length ;i++){
		if( $gameMap._drill_BoC_explodeArea[i].x == x && $gameMap._drill_BoC_explodeArea[i].y == y ){
			return $gameMap._drill_BoC_explodeArea[i].time ;
		}
	}
	return -1;
}

//=============================================================================
// ** AI决策判定图
//=============================================================================
//==============================
// * 爆炸判定 - 全图判定刷新
//==============================
Game_Map.prototype.drill_BoC_updateExplodeArea = function() {
	this._drill_BoC_explodeDelay ++;
	if(this._drill_BoC_explodeDelay > 3 ){	//延迟刷新
		this._drill_BoC_explodeDelay = 0;
		
		var all_bomb = this.drill_BoC_Bombs();
		this._drill_BoC_explodeArea = this.drill_BoC_getAllExplodeArea(all_bomb);
	}
}
//==============================
// * 爆炸判定 - 获取全图的爆炸时间点（设置、炸弹爆炸时才刷新全部时间点）
//==============================
Game_Map.prototype.drill_BoC_getAllExplodeArea = function(all_bomb) {
	var all_area = [];
	
	//1.全部时间点初始分配
	for(var i=0; i<all_bomb.length; i++){
		var bomb = all_bomb[i];
		var area = this.drill_BoC_getBombArea(bomb);
		bomb._BoC_bomb['area'] = area;
		for(var j=0; j<area.length ; j++ ){
			var point = area[j];
			point['bomb_id'] = bomb._eventId;
			point['time'] = bomb._BoC_bomb['time'];
			all_area.push(point);
		}
	}
	//2.爆炸区域遇到炸弹时，炸弹的全部区域的点 以最短的时间为准
	for(var j=0; j<all_area.length ; j++ ){
		var point = all_area[j];
		for(var k=0; k<all_bomb.length; k++){
			var bomb = all_bomb[k];
			
			if( point['bomb_id'] != bomb._eventId && point['x'] == bomb._x && point['y'] == bomb._y){
				var b_area = bomb._BoC_bomb['area'];
				for(var n=0; n<b_area.length; n++){
					if( b_area[n]['time'] > point['time'] ){
						b_area[n]['time'] = point['time'];
					}
				}
			}
		}
	}
	
	//3.相同区域交叉时，留下时间短的那个（根据时间最小排序，然后倒序去掉与前一个相同的区域）
	all_area.sort(function(a, b){
		if( a.x != b.x ){ return a.x - b.x; }
		if( a.y != b.y ){ return a.y - b.y; }
		return a.time - b.time
	});
	for(var i=all_area.length-1; i>=0; i-- ){
		if( i!=0 ){
			var last = all_area[i-1];
			var cur = all_area[i];
			if( cur.x == last.x && cur.y == last.y ){
				all_area.splice(i,1);
			}
		}
	}
	//if( all_area.length > 9 ){
	//	alert(JSON.stringify(all_area));
	//}
	
	return all_area;
}
//==============================
// * 爆炸判定 - 获取单个炸弹的范围
//==============================
Game_Map.prototype.drill_BoC_getBombArea = function(bomb) {
	if( bomb._BoC_bomb['triggerType'] == "变化激光区域" ){
		var dirs = bomb._BoC_bomb['dirs'];
		var fire = bomb._BoC_bomb['fire'];
		var options = bomb._BoC_bomb['options'];
		return this.drill_getLaserArea( bomb._x, bomb._y, dirs, fire, options);
	}
	return [];
	
	/*else if( bomb._BoC_bomb['triggerType'] == "自定义区域" ){
		var self_area = DrillUp.g_ERT_area[ bomb._BoC_bomb['self_id'] ]['tiles'];
		return this.drill_getStaticArea( bomb._x, bomb._y, bomb._direction, self_area, null );
		
	}else{//固定形状区域
		var fire = bomb._BoC_bomb['fire'];
		return this.drill_getStaticFormArea( bomb._x, bomb._y, bomb._BoC_bomb['triggerType'], fire, null );
	
	}*/
}

//=============================================================================
// * >基于插件检测
//=============================================================================
}else{
		Imported.Drill_BombCore = false;
		alert("【Drill_BombCore.js 炸弹人 - 游戏核心】\n缺少基础插件，去看看下列插件是不是为添加，或者顺序不对：\n- Drill_EventDuplicator 物体-事件复制器\n- Drill_EventThrough 物体-事件穿透关系\n- Drill_EventLaserTrigger 物体触发-可变激光区域&条件\n- Drill_EventLaserAnimation 物体触发-可变激光区域&播放并行动画");
}

