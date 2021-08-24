//=============================================================================
// Drill_BattleTotal.js
//=============================================================================

/*:
 * @plugindesc [v1.1]        敌人 - 单次战斗统计信息
 * @author Drill_up
 * 
 * @param 角色对敌人总伤害
 * @type variable
 * @desc 单场战斗玩家对敌人造成的所有伤害。实时给指定变量赋值。
 * @default 0
 * 
 * @param 角色对自己总伤害
 * @type variable
 * @desc 单场战斗玩家对自己造成的所有伤害。实时给指定变量赋值。
 * @default 0
 * 
 * @param 角色受到敌人总伤害
 * @type variable
 * @desc 单场战斗敌人对玩家造成的所有伤害。实时给指定变量赋值。
 * @default 0
 * 
 * @param 恢复生命量
 * @type variable
 * @desc 单场战斗玩家对自己恢复的总量。实时给指定变量赋值。
 * @default 0
 * 
 * @param 伤害总次数
 * @type variable
 * @desc 单场战斗玩家对敌人伤害的总次数。实时给指定变量赋值。
 * @default 0
 * 
 * @param 最大连击数
 * @type variable
 * @desc 单场战斗玩家最大的连击数量。该参数需要 伤害统计浮动框 插件支持。
 * @default 0
 * 
 * @param 最大连击伤害
 * @type variable
 * @desc 单场战斗玩家最大的连击伤害，注意连击数最大不一定伤害最大。该参数需要 伤害统计浮动框 插件支持。
 * @default 0
 * 
 * @param 单次最大伤害
 * @type variable
 * @desc 单场战斗玩家对敌人造成的单次最大伤害。实时给指定变量赋值。
 * @default 0
 * 
 * @param 魔法消耗总量
 * @type variable
 * @desc 单场战斗玩家消耗的总魔法数量。实时给指定变量赋值。
 * @default 0
 * 
 * @param 怒气消耗总量
 * @type variable
 * @desc 单场战斗玩家消耗的总怒气数量。实时给指定变量赋值。
 * @default 0
 * 
 * @param 躲避攻击次数
 * @type variable
 * @desc 包含物理闪避和魔法闪避的总次数。实时给指定变量赋值。
 * @default 0
 * 
 * @param 暴击次数
 * @type variable
 * @desc 单场战斗玩家对敌人造成的暴击次数。实时给指定变量赋值。
 * @default 0
 * 
 * @param 物理反击次数
 * @type variable
 * @desc 单场战斗玩家对敌人物理反击的次数。实时给指定变量赋值。
 * @default 0
 * 
 * @param 魔法反射次数
 * @type variable
 * @desc 单场战斗玩家对敌人魔法反射的暴击次数。实时给指定变量赋值。
 * @default 0
 *
 * @help  
 * =============================================================================
 * +++ Drill_BattleTotal +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 能统计单次战斗相关信息。
 * ★★必须放在插件 MOG_ComboCounter伤害统计浮动框 的后面★★
 * ★★必须放在插件 Drill_WindowLog窗口提示消息 的后面★★
 * 
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 插件能单独使用，但是部分功能需要其它插件支持。
 * 被扩展：
 *   - MOG_ComboCounter 敌人-伤害统计浮动框
 *     通过该插件，玩家最大连击数 和 玩家最大连击伤害 能被统计到。
 * 
 * -----------------------------------------------------------------------------
 * ----统计说明
 * 1.统计需要设置到具体的变量，默认没有变量。
 * 2.统计情况是实时变化的，战斗前的统计信息会被全部清零。
 * 3.统计是整个角色团体的，单人统计太复杂，这里不涉及。
 * 4.逃跑次数、连续杀敌等与多次战斗相关的统计这里不涉及。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 与mog伤害统计浮动框 相适配。
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		临时全局变量	DrillUp.xxx
//		临时局部变量	无
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		临时全局变量和$gameVariables直接现变现用。
//
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_BattleTotal = true;
　　var DrillUp = DrillUp || {}; 

    DrillUp.parameters = PluginManager.parameters('Drill_BattleTotal');
    DrillUp.total_variable_0 = Number(DrillUp.parameters['角色对敌人总伤害'] || 0);
    DrillUp.total_variable_1 = Number(DrillUp.parameters['角色对自己总伤害'] || 0);
    DrillUp.total_variable_2 = Number(DrillUp.parameters['角色受到敌人总伤害'] || 0);
    DrillUp.total_variable_3 = Number(DrillUp.parameters['恢复生命量'] || 0);
    DrillUp.total_variable_4 = Number(DrillUp.parameters['伤害总次数'] || 0);
    DrillUp.total_variable_5 = Number(DrillUp.parameters['最大连击数'] || 0);
    DrillUp.total_variable_6 = Number(DrillUp.parameters['最大连击伤害'] || 0);
    DrillUp.total_variable_7 = Number(DrillUp.parameters['单次最大伤害'] || 0);
    DrillUp.total_variable_8 = Number(DrillUp.parameters['魔法消耗总量'] || 0);
    DrillUp.total_variable_9 = Number(DrillUp.parameters['怒气消耗总量'] || 0);
    DrillUp.total_variable_10 = Number(DrillUp.parameters['躲避攻击次数'] || 0);
    DrillUp.total_variable_11 = Number(DrillUp.parameters['暴击次数'] || 0);
    DrillUp.total_variable_12 = Number(DrillUp.parameters['物理反击次数'] || 0);
    DrillUp.total_variable_13 = Number(DrillUp.parameters['魔法反射次数'] || 0);
	DrillUp.total_data = [];

//=============================================================================
// ** 战斗变量初始化
//=============================================================================

var _drill_total_Battle_initialize = Scene_Battle.prototype.initialize;
Scene_Battle.prototype.initialize = function() {
	_drill_total_Battle_initialize.call(this);
    DrillUp.total_data = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0]; 
};

//=============================================================================
// ** hp伤害情况
//=============================================================================
var _drill_total_executeHpDamage = Game_Action.prototype.executeHpDamage;
Game_Action.prototype.executeHpDamage = function(target, value) {
	_drill_total_executeHpDamage.call(this,target, value);
	if (value > 0) {
		if (this.subject().isActor() && target.isEnemy()) {
			DrillUp.total_data[0] += value;
			$gameVariables.setValue(DrillUp.total_variable_0,DrillUp.total_data[0]);	//总伤害
			DrillUp.total_data[4] += 1;
			$gameVariables.setValue(DrillUp.total_variable_4,DrillUp.total_data[4]);	//伤害次数
			if ( DrillUp.total_data[7] < value ) {
				DrillUp.total_data[7] = value;
				$gameVariables.setValue(DrillUp.total_variable_7,DrillUp.total_data[7]);//单次最大伤害
			}
		}
		else if (this.subject().isActor() && target.isActor()) {
			DrillUp.total_data[1] += value;
			$gameVariables.setValue(DrillUp.total_variable_1,DrillUp.total_data[1]);
		}
		else if (this.subject().isEnemy() && target.isActor()) {
			DrillUp.total_data[2] += value;
			$gameVariables.setValue(DrillUp.total_variable_2,DrillUp.total_data[2]);
		};
	}
	if (value < 0) {
		if (this.subject().isActor() && target.isActor()) {
			DrillUp.total_data[3] -= value;
			$gameVariables.setValue(DrillUp.total_variable_3,DrillUp.total_data[3]);
		}
	}
	if( $gameTemp.combo_data ){
		if( Moghunter.combo_allies ){
			if ( DrillUp.total_data[5] < $gameTemp.combo_data[0][1] ) {
				DrillUp.total_data[5] = $gameTemp.combo_data[0][1];
				$gameVariables.setValue(DrillUp.total_variable_5,DrillUp.total_data[5]);
			}
			if ( DrillUp.total_data[6] < $gameTemp.combo_data[0][2] ) {
				DrillUp.total_data[6] = $gameTemp.combo_data[0][2];
				$gameVariables.setValue(DrillUp.total_variable_6,DrillUp.total_data[6]);
			}
		}else{
			if ( DrillUp.total_data[5] < $gameTemp.combo_data[1] ) {
				DrillUp.total_data[5] = $gameTemp.combo_data[1];
				$gameVariables.setValue(DrillUp.total_variable_5,DrillUp.total_data[5]);
			}
			if ( DrillUp.total_data[6] < $gameTemp.combo_data[2] ) {
				DrillUp.total_data[6] = $gameTemp.combo_data[2];
				$gameVariables.setValue(DrillUp.total_variable_6,DrillUp.total_data[6]);
			}
		}
		
	}
};	

//=============================================================================
// ** 消耗mp，tp情况(Game_Actor)
//=============================================================================
var _drill_Game_Actor_paySkillCost = Game_Actor.prototype.paySkillCost;
Game_Actor.prototype.paySkillCost = function(skill) {
	_drill_Game_Actor_paySkillCost.call(this,skill);
	DrillUp.total_data[8] += this.skillMpCost(skill);
	$gameVariables.setValue(DrillUp.total_variable_8,DrillUp.total_data[8]);
	DrillUp.total_data[9] += this.skillTpCost(skill);
	$gameVariables.setValue(DrillUp.total_variable_9,DrillUp.total_data[9]);
};

//=============================================================================
// ** 闪避情况
//=============================================================================
var _drill_BattleLog_displayEvasion = Window_BattleLog.prototype.displayEvasion;
Window_BattleLog.prototype.displayEvasion = function(target) {
	_drill_BattleLog_displayEvasion.call(this,target);
	if (target.result().physical) {
		if (target.isActor()) {
			DrillUp.total_data[10] += 1;
			$gameVariables.setValue(DrillUp.total_variable_10,DrillUp.total_data[10]);
		}
	}
}

//=============================================================================
// ** 暴击情况
//=============================================================================
var _drill_BattleLog_displayCritical = Window_BattleLog.prototype.displayCritical;
Window_BattleLog.prototype.displayCritical = function(target) {
	_drill_BattleLog_displayCritical.call(this,target);
	if (target.result().critical) {
		if (target.isActor()) {
			//敌人对角色暴击
		}else{
			DrillUp.total_data[11] += 1;
			$gameVariables.setValue(DrillUp.total_variable_11,DrillUp.total_data[11]);
		}
	}
}

//=============================================================================
// ** 物理反击、魔法反射
//=============================================================================
var _drill_BattleLog_displayCounter = Window_BattleLog.prototype.displayCounter;
Window_BattleLog.prototype.displayCounter = function(target) {
	_drill_BattleLog_displayCounter.call(this,target);
	if (target.isActor()) {
		DrillUp.total_data[12] += 1;
		$gameVariables.setValue(DrillUp.total_variable_12,DrillUp.total_data[12]);
	}
}
var _drill_BattleLog_displayReflection = Window_BattleLog.prototype.displayReflection;
Window_BattleLog.prototype.displayReflection = function(target) {
	_drill_BattleLog_displayReflection.call(this,target);
	if (target.isActor()) {
		DrillUp.total_data[13] += 1;
		$gameVariables.setValue(DrillUp.total_variable_13,DrillUp.total_data[13]);
	}
}

	