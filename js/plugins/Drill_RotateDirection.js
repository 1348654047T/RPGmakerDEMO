//=============================================================================
// Drill_RotateDirection.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        物体 - 原地转向能力
 * @author Drill_up
 * 
 * 
 * @help  
 * =============================================================================
 * +++ Drill_RotateDirection +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 使得地图的角色具有原地转向能力。
 * 更多详细的介绍，去看看"关于原地转向能力.docx"。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.原地转向在光滑的图块上不能转向。
 * 2.原地转向能力非常基础，单独扩展比较有限，一般需要与其它能力组合用。
 * （虽然基础，但是可以做跳舞毯。）
 * 
 * -----------------------------------------------------------------------------
 * ----控制操作 - 键盘、手柄
 * 键盘 - "W"键 + 方向键 转向
 * 手柄 - "RB"键 + 方向键 转向
 *
 * -----------------------------------------------------------------------------
 * ----控制操作 - 鼠标、触屏
 * 鼠标 - 无法控制
 * 触屏 - 无法控制
 * 
 * 必须要 Drill_OperateHud 鼠标辅助操作面板 才能支持。
 * 鼠标 - 点击操作面板的环方向按钮 转向
 * 触屏 - 触碰操作面板的环方向按钮 转向
 *
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 该插件可以单独使用，也可以通过其他插件添加更多功能。
 * 被扩展：
 *   - Drill_OperateHud 画面 - 鼠标辅助操作面板
 *     该插件提供鼠标、触碰辅助控制原地转向的支持。
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过插件指令设置角色原地转向能力。
 *
 * 插件指令：>角色原地转向开启
 * 插件指令：>角色原地转向关闭
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 *
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		临时全局变量	DrillUp.xxx
//		临时局部变量	无
//		存储数据变量	$gameSystem._drill_xxxx
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//
//	转向可以朝向8个方向，这里还是只考虑4个方向，太复杂。
//
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_RotateDirection = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_RotateDirection');


//=============================================================================
// ** 插件指令
//=============================================================================
var _drill_rotate_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_rotate_pluginCommand.call(this,command, args);
	if (command === ">角色原地转向开启")  { $gameSystem._drill_rotate_enable = true;};
	if (command === ">角色原地转向关闭")  { $gameSystem._drill_rotate_enable = false;};
	return true;
};

//=============================================================================
// ** Game_Player角色转向设置
//=============================================================================
//==============================
// * 转向初始化
// *（Game_Player初始化时，$gameSystem已载入存储数据。）
//==============================
var _drill_rotate_initialize = Game_Player.prototype.initialize;
Game_Player.prototype.initialize = function() {
	_drill_rotate_initialize.call(this);
	if( $gameSystem._drill_rotate_enable === undefined ){ $gameSystem._drill_rotate_enable = true;}
};

//==============================
// * 开始转向
//==============================
var _drill_rotate_moveByInput = Game_Player.prototype.moveByInput;
Game_Player.prototype.moveByInput = function() {
	
    if ( this.drill_canRotate_Normal() ) { 			//基本转向条件
		if( this.drill_isRotateControl() ){			//转向按钮按下
			if( this.drill_canRotate_Conditional() ){//限制转向条件
				this.drill_setDirection();
				return;
			}else{
				SoundManager.playBuzzer();
			}	
		}
	}
	_drill_rotate_moveByInput.call(this);	
	
};
//==============================
// * 转向按钮按下控制条件
//==============================
Game_Player.prototype.drill_isRotateControl = function() {
	//W键 + 方向键
	return Input.isPressed('pagedown') && 
		( this.getInputDirection() == 2 ||
		 this.getInputDirection() == 4 ||
		 this.getInputDirection() == 6 ||
		 this.getInputDirection() == 8 
		);
}
//==============================
// * 转向条件
//==============================
Game_Player.prototype.drill_canRotate_Normal = function() {
	//不能转向，是因为程序执行的静态属性，不播放错误音
	if( this.isJumping() ){return false};	
	if( !this.canMove() ){return false};		
	return true;
}
Game_Player.prototype.drill_canRotate_Conditional = function() {
	//不能转向，是因为特殊的限制条件，播放错误音
	if( this.drill_isInSlipperyArea() ){return false};		//光滑图块上禁止转向
	if( !$gameSystem._drill_rotate_enable ){return false};	//关闭转向能力，禁止转向
	return true;
}
//==============================
// * 判断光滑图块
//==============================
Game_Player.prototype.drill_isInSlipperyArea = function() {
	if( Imported.YEP_SlipperyTiles ){
		return this.onSlipperyFloor();
	}
	return false;
}

//==============================
// * 转向按钮按下控制条件
//==============================
Game_Player.prototype.drill_setDirection = function() {
	
	this.setDirection(this.getInputDirection());
	
	/*
	if (Input.isPressed('down')) {this.setDirection(2);
	} else if (Input.isPressed('left')) {this.setDirection(4);
	} else if (Input.isPressed('right')) {this.setDirection(6);
	} else if (Input.isPressed('up')) {this.setDirection(8);
	};*/
};


