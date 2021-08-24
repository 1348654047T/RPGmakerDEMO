//=============================================================================
// Drill_SecretCode.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        系统 - 秘籍输入器
 * @author Drill_up
 *
 * @help  
 * =============================================================================
 * +++ Drill_SecretCode +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 对鼠标、键盘、手柄有效。触屏不支持。
 * 你可以使得根据指定顺序，按键，并触发指定的公共事件。
 * 公共事件则为你在rmmv中内置的特殊秘籍。
 * 
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.秘籍输入只在 地图、战斗 两个场景有效。
 * 2.战斗场景中，出现选择窗口时，是不能执行公共事件的，公共事件会在选择
 *   窗口结束后执行。
 * 3.鼠标滚轮的上下滚动不计算在序列内。
 * 4.注意秘籍的键盘按键，不要出现菜单键。进入菜单后，按键会被重新统计。
 * 5.你可以设置剧情中指定的某个地点的特殊开关，必须输入秘籍才能进入。
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过插件指令手动控制秘籍的开关：
 * （冒号两边都有一个空格）
 * 
 * 插件指令：>开启秘籍 : 1
 * 插件指令：>关闭秘籍 : 1
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 *
 *
 * @param ---秘籍组 1至20---
 * @default
 *
 * @param 秘籍-1
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-2
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-3
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-4
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-5
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-6
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-7
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-8
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-9
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-10
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-11
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-12
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-13
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-14
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-15
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-16
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-17
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-18
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-19
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-20
 * @parent ---秘籍组 1至20---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param ---秘籍组21至40---
 * @default
 *
 * @param 秘籍-21
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-22
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-23
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-24
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-25
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-26
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-27
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-28
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-29
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-30
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-31
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-32
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-33
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-34
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-35
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-36
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-37
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-38
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-39
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 * @param 秘籍-40
 * @parent ---秘籍组21至40---
 * @type struct<DrillSCo>
 * @desc 秘籍绑定的配置信息。
 * @default 
 *
 */
/*~struct~DrillSCo:
 * 
 * @param 标签
 * @desc 只用于方便区分查看的标签，不作用在插件中。
 * @default ==新的秘籍触发==
 *
 * @param 初始是否开启
 * @type boolean
 * @on 开启
 * @off 关闭
 * @desc true - 关闭，false - 关闭
 * @default true
 *
 * @param 执行的公共事件
 * @type common_event
 * @desc 下列的触发条件满足后，执行的公共事件。
 * @default 0
 *
 * @param 是否启用鼠标触发
 * @type boolean
 * @on 启用
 * @off 关闭
 * @desc true - 启用，false - 关闭
 * @default false
 *
 * @param 鼠标触发顺序
 * @parent 是否启用鼠标触发
 * @type select[]
 * @option 左键释放[一帧]
 * @value 左键释放[一帧]
 * @option 右键释放[一帧]
 * @value 右键释放[一帧]
 * @option 滚轮释放[一帧]
 * @value 滚轮释放[一帧]
 * @desc 鼠标触发的顺序设置，指定顺序流程完成，即触发公共事件。建议设置的顺序数量超过10。
 * @default []
 *
 * @param 是否启用键盘触发
 * @type boolean
 * @on 启用
 * @off 关闭
 * @desc true - 启用，false - 关闭
 * @default false
 *
 * @param 键盘触发顺序
 * @parent 是否启用键盘触发
 * @type text[]
 * @desc 键盘按键的顺序设置，填入数字、字母、"上"、"下"、"左"、"右"、"空格"等。
 * @default []
 *
 * @param 是否启用手柄触发
 * @type boolean
 * @on 启用
 * @off 关闭
 * @desc true - 启用，false - 关闭
 * @default false
 *
 * @param 手柄触发顺序
 * @parent 是否启用手柄触发
 * @type select[]
 * @option A
 * @value A
 * @option B
 * @value B
 * @option X
 * @value X
 * @option Y
 * @value Y
 * @option LB
 * @value LB
 * @option RB
 * @value RB
 * @option 上
 * @value 上
 * @option 下
 * @value 下
 * @option 左
 * @value 左
 * @option 右
 * @value 右
 * @desc 手柄触发的顺序设置，指定顺序流程完成，即触发公共事件。建议设置的顺序数量超过10。
 * @default []
 *
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称：		SCo (Secret_Code)
//		临时全局变量	DrillUp.g_SCo_xxx
//		临时局部变量	this._drill_xxx
//		存储数据变量	$gameSystem._drill_SCo_xxx
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		实时监听条件，分别绑定在 scene_battle 和 scene_map 中。
//		
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_SecretCode = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_SecretCode');
	
	DrillUp.g_SCo_code_max = 40;
	DrillUp.g_SCo_code = [];
	
	for (var i = 0; i < DrillUp.g_SCo_code_max; i++) {
		if( DrillUp.parameters['秘籍-' + String(i+1) ] != "" ){
			DrillUp.g_SCo_code[i] = JSON.parse(DrillUp.parameters['秘籍-' + String(i+1) ]);
			DrillUp.g_SCo_code[i]['enable'] = String(DrillUp.g_SCo_code[i]["初始是否开启"] || "true") == "true";
			DrillUp.g_SCo_code[i]['common_event'] = Number(DrillUp.g_SCo_code[i]["执行的公共事件"]);
			DrillUp.g_SCo_code[i]['mouse_enable'] = String(DrillUp.g_SCo_code[i]["是否启用鼠标触发"] || "true") == "true";
			if( DrillUp.g_SCo_code[i]['鼠标触发顺序'] ){
				DrillUp.g_SCo_code[i]['mouse_seq'] = JSON.parse(DrillUp.g_SCo_code[i]['鼠标触发顺序']);
			}else{
				DrillUp.g_SCo_code[i]['mouse_seq'] = [];
			}
			DrillUp.g_SCo_code[i]['key_enable'] = String(DrillUp.g_SCo_code[i]["是否启用键盘触发"] || "true") == "true";
			if( DrillUp.g_SCo_code[i]['键盘触发顺序'] ){
				DrillUp.g_SCo_code[i]['key_seq'] = JSON.parse(DrillUp.g_SCo_code[i]['键盘触发顺序']);
			}else{
				DrillUp.g_SCo_code[i]['key_seq'] = [];
			}
			DrillUp.g_SCo_code[i]['pad_enable'] = String(DrillUp.g_SCo_code[i]["是否启用手柄触发"] || "true") == "true";
			if( DrillUp.g_SCo_code[i]['手柄触发顺序'] ){
				DrillUp.g_SCo_code[i]['pad_seq'] = JSON.parse(DrillUp.g_SCo_code[i]['手柄触发顺序']);
			}else{
				DrillUp.g_SCo_code[i]['pad_seq'] = [];
			}
		}else{
			DrillUp.g_SCo_code[i] = [];
		}
	}

//=============================================================================
// ** 插件指令
//=============================================================================
var _drill_SCo_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_SCo_pluginCommand.call(this, command, args);
	
	if (command === ">开启秘籍")  {
		if( args.length == 2 ){
			var temp1 = Number(args[1]) - 1;
			$gameSystem._drill_SCo[temp1]['enable'] = true;
			
		}
	};
	if (command === ">关闭秘籍")  {
		if( args.length == 2 ){
			var temp1 = Number(args[1]) - 1;
			$gameSystem._drill_SCo[temp1]['enable'] = false;
		}
	}
};
//=============================================================================
// ** 存储初始化
//=============================================================================
var _drill_SCo_system_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    _drill_SCo_system_initialize.call(this);
	this._drill_SCo = [];
	for(var i=0; i<DrillUp.g_SCo_code.length; i++){
		var data = JSON.parse(JSON.stringify( DrillUp.g_SCo_code[i] ));
		data['mouse_cur'] = 0;
		data['key_cur'] = 0;
		data['pad_cur'] = 0;
		this._drill_SCo.push(data);
	}
};	

//=============================================================================
// ** 地图界面
//=============================================================================
//==============================
// * 帧刷新
//==============================
var _drill_SCo_m_updateScene = Scene_Map.prototype.updateScene;
Scene_Map.prototype.updateScene = function() {
	_drill_SCo_m_updateScene.call(this);
	this.drill_SCo_updateInput();
}
//==============================
// * 帧刷新 - 输入监听
//==============================
Scene_Map.prototype.drill_SCo_updateInput = function() {
	
	for(var i=0; i<$gameSystem._drill_SCo.length; i++){
		var data = $gameSystem._drill_SCo[i];
		if( data['enable'] == true ){
			if( data['mouse_enable'] == true ){
				if( data['mouse_cur'] >= data['mouse_seq'].length ){
					$gameTemp.reserveCommonEvent( data['common_event'] );
					data['mouse_cur'] = 0;
					continue;
				}
				if( this.drill_SCo_isAnyOnMouse() ){
					var seq = data['mouse_seq'][ Math.floor(data['mouse_cur']) ];
					if( this.drill_SCo_isOnMouse( seq ) ){
						data['mouse_cur'] += 1;
					}else{
						data['mouse_cur'] = 0;
					}
				}
			}
			if( data['key_enable'] == true ){
				if( data['key_cur'] >= data['key_seq'].length ){
					$gameTemp.reserveCommonEvent( data['common_event'] );
					data['key_cur'] = 0;
					continue;
				}
				if( Input.drill_isAnyKeyReleased() ){
					var seq = data['key_seq'][ Math.floor(data['key_cur']) ];
					if( Input.drill_isKeyReleased( String(seq).toLowerCase() ) ){
						data['key_cur'] += 1;
					}else{
						data['key_cur'] = 0;
					}
				}
			}
			if( data['pad_enable'] == true ){
				if( data['pad_cur'] >= data['pad_seq'].length ){
					$gameTemp.reserveCommonEvent( data['common_event'] );
					data['pad_cur'] = 0;
					continue;
				}
				if( Input.drill_isAnyPadReleased() ){
					var seq = data['pad_seq'][ Math.floor(data['pad_cur']) ];
					if( Input.drill_isPadReleased( String(seq).toUpperCase() ) ){
						data['pad_cur'] += 1;
					}else{
						data['pad_cur'] = 0;
					}
				}
			}
		}
	}
}
//==============================
// * 帧刷新 - 鼠标按下监听
//==============================
Scene_Map.prototype.drill_SCo_isAnyOnMouse = function() {
	if ( TouchInput.drill_isLeftReleased() ) {return true};
	if ( TouchInput.drill_isRightReleased() ) {return true};
	if ( TouchInput.drill_isMiddleReleased() ) {return true};
	//鼠标滚轮是持续性动作，这里不能记录，否则 上滚 + 上滚 无法识别。
	return false;	
};
//==============================
// * 帧刷新 - 鼠标按下类型监听
//==============================
Scene_Map.prototype.drill_SCo_isOnMouse = function( type ) {
	if( type == "左键释放[一帧]" ){
		if ( TouchInput.drill_isLeftReleased() ) {return true};
	}else if( type == "右键释放[一帧]" ){
		if ( TouchInput.drill_isRightReleased() ) {return true};
	}else if( type == "滚轮释放[一帧]" ){
		if ( TouchInput.drill_isMiddleReleased() ) {return true};
	}
	return false;	
};
//=============================================================================
// ** 战斗界面
//=============================================================================
//==============================
// * 帧刷新
//==============================
var _drill_SCo_b_updateScene = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
	_drill_SCo_b_updateScene.call(this);
	if( this.isActive() ){
		this.drill_SCo_updateInput();
	}
}
//==============================
// * 帧刷新 - 输入监听
//==============================
Scene_Battle.prototype.drill_SCo_updateInput = Scene_Map.prototype.drill_SCo_updateInput;
//==============================
// * 帧刷新 - 鼠标按下监听
//==============================
Scene_Battle.prototype.drill_SCo_isAnyOnMouse = Scene_Map.prototype.drill_SCo_isAnyOnMouse;
//==============================
// * 帧刷新 - 鼠标按下类型监听
//==============================
Scene_Battle.prototype.drill_SCo_isOnMouse = Scene_Map.prototype.drill_SCo_isOnMouse;


//=============================================================================
// ** 实时监听鼠标 左键、滚轮和右键 （不用rmmv自带的，有局限）
//=============================================================================
if( typeof(_drill_mouseInput_pressed) == "undefined" ){	//防止重复定义

	//==============================
	// ** 鼠标按下
	//==============================
	var _drill_mouseInput_pressed = TouchInput._onMouseDown;
	TouchInput._onMouseDown = function(event) {	
        if (event.button === 0) {
			this.drill_onLeftDown(event);
		} else if (event.button === 1) {
			this.drill_onMiddleDown(event);
		} else if (event.button === 2) {
			this.drill_onRightDown(event);
		}
		_drill_mouseInput_pressed.call(this,event);
	};
	TouchInput.drill_onLeftDown = function(event) {	//鼠标左键按下事件
		var x = Graphics.pageToCanvasX(event.pageX);
		var y = Graphics.pageToCanvasY(event.pageY);
		if (Graphics.isInsideCanvas(x, y)) {
			if( this._drill_LeftPressedTime >= 1 ){
				this._drill_LeftDoubledTime = 0;		//双击
			}
			this._drill_LeftPressed = true;
			this._drill_LeftPressedTime = 0;
		}
	}
	TouchInput.drill_onMiddleDown = function(event) {	//鼠标滚轮按下事件
		var x = Graphics.pageToCanvasX(event.pageX);
		var y = Graphics.pageToCanvasY(event.pageY);
		if (Graphics.isInsideCanvas(x, y)) {
			if( this._drill_MiddlePressedTime >= 1 ){
				this._drill_MiddleDoubledTime = 0;		//双击
			}
			this._drill_MiddlePressed = true;
			this._drill_MiddlePressedTime = 0;
		}
	}
	TouchInput.drill_onRightDown = function(event) {	//鼠标右键按下事件
		var x = Graphics.pageToCanvasX(event.pageX);
		var y = Graphics.pageToCanvasY(event.pageY);
		if (Graphics.isInsideCanvas(x, y)) {
			if( this._drill_RightPressedTime >= 1 ){
				this._drill_RightDoubledTime = 0;		//双击
			}
			this._drill_RightPressed = true;
			this._drill_RightPressedTime = 0;
		}
	}
	
	//==============================
	// ** 鼠标释放
	//==============================
	var _drill_mouseInput_released = TouchInput._onMouseUp;
	TouchInput._onMouseUp = function(event) {
        if (event.button === 0) {
			this.drill_onLeftUp(event);
		} else if (event.button === 1) {
			this.drill_onMiddleUp(event);
		} else if (event.button === 2) {
			this.drill_onRightUp(event);
		}
		_drill_mouseInput_released.call(this,event);
	};
	TouchInput.drill_onLeftUp = function(event) {		//鼠标左键释放事件
        this._drill_LeftPressed = false;
		this._drill_LeftReleasedTime = 0;
	}
	TouchInput.drill_onMiddleUp = function(event) {		//鼠标滚轮释放事件
        this._drill_MiddlePressed = false;
		this._drill_MiddleReleasedTime = 0;
	}
	TouchInput.drill_onRightUp = function(event) {	//鼠标右键释放事件
        this._drill_RightPressed = false;
		this._drill_RightReleasedTime = 0;
	}
	
	//==============================
	// ** 鼠标刷新
	//==============================
	var _drill_mouseInput_update = TouchInput.update;
	TouchInput.update = function() {
		_drill_mouseInput_update.call(this);
		
		if (this.drill_isLeftPressed()) {
			if(this._drill_LeftPressedTime != -1){ this._drill_LeftPressedTime++; }
		}else{
			if(this._drill_LeftReleasedTime != -1){ this._drill_LeftReleasedTime++; }
		}
		if(this._drill_LeftDoubledTime != -1){ this._drill_LeftDoubledTime ++; }
		
		if( this._drill_LeftReleasedTime > 15 ){	//释放时间超过一定值时，重置
			this._drill_LeftPressedTime = -1;
			this._drill_LeftReleasedTime = -1;
			this._drill_LeftDoubledTime = -1;
		}
		
		if (this.drill_isMiddlePressed()) {
			if(this._drill_MiddlePressedTime != -1){ this._drill_MiddlePressedTime++; }
		}else{
			if(this._drill_MiddleReleasedTime != -1){ this._drill_MiddleReleasedTime++; }
		}
		if(this._drill_MiddleDoubledTime != -1){ this._drill_MiddleDoubledTime ++; }
		
		if( this._drill_MiddleReleasedTime > 15 ){	//释放时间超过一定值时，重置
			this._drill_MiddlePressedTime = -1;
			this._drill_MiddleReleasedTime = -1;
			this._drill_MiddleDoubledTime = -1;
		}
		
		if (this.drill_isRightPressed()) {
			if(this._drill_RightPressedTime != -1){ this._drill_RightPressedTime++; }
		}else{
			if(this._drill_RightReleasedTime != -1){ this._drill_RightReleasedTime++; }
		}
		if(this._drill_RightDoubledTime != -1){ this._drill_RightDoubledTime ++; }
		
		if( this._drill_RightReleasedTime > 15 ){	//释放时间超过一定值时，重置
			this._drill_RightPressedTime = -1;
			this._drill_RightReleasedTime = -1;
			this._drill_RightDoubledTime = -1;
		}
	}
	
	//==============================
	// ** 可用函数集
	//==============================
	TouchInput.drill_isLeftPressed = function(){		//左键按下[持续]
		return this._drill_LeftPressed;
	}
	TouchInput.drill_isLeftTriggerd = function(){		//左键按下[一帧]
		return (this._drill_LeftPressed && this._drill_LeftPressedTime == 1);
	}
	TouchInput.drill_isLeftReleased = function(){		//左键释放[一帧]
		return (!this._drill_LeftPressed && this._drill_LeftReleasedTime == 1);
	}
	TouchInput.drill_isLeftDoubled = function(){		//左键双击[一帧]
		return this._drill_LeftDoubledTime == 1 ;
	}
	TouchInput.drill_isMiddlePressed = function(){		//滚轮按下[持续]
		return this._drill_MiddlePressed;
	}
	TouchInput.drill_isMiddleTriggerd = function(){		//滚轮按下[一帧]
		return (this._drill_MiddlePressed && this._drill_MiddlePressedTime == 1);
	}
	TouchInput.drill_isMiddleReleased = function(){		//滚轮释放[一帧]
		return (!this._drill_MiddlePressed && this._drill_MiddleReleasedTime == 1);
	}
	TouchInput.drill_isMiddleDoubled = function(){		//滚轮双击[一帧]
		return this._drill_MiddleDoubledTime == 1 ;
	}
	TouchInput.drill_isRightPressed = function(){		//右键按下[持续]
		return this._drill_RightPressed;
	}
	TouchInput.drill_isRightTriggerd = function(){		//右键按下[一帧]
		return (this._drill_RightPressed && this._drill_RightPressedTime == 1);
	}
	TouchInput.drill_isRightReleased = function(){		//右键释放[一帧]
		return (!this._drill_RightPressed && this._drill_RightReleasedTime == 1);
	}
	TouchInput.drill_isRightDoubled = function(){		//右键双击[一帧]
		return this._drill_RightDoubledTime == 1 ;
	}
}

//=============================================================================
// ** 实时监听键盘按键（不用rmmv自带的，有局限）
//=============================================================================
if( typeof(_drill_keyInput_pressed) == "undefined" ){	//防止重复定义
	
	var _drill_keys = {
		//'~':192,   '!':49,  '@':50,   '#':51,  '$':52,  '%':53,   '^':54,  '&':55,  '*':56,  '(':57,  ')':48,  '_':189,  '+':187,
		'`':192,   '1':49,  '2':50,   '3':51,  '4':52,  '5':53,   '6':54,  '7':55,  '8':56,  '9':57,  '0':48,  '-':189,  '=':187,
		//'TAB':109, 'Q':81,  'W':87,   'E':69,  'R':82,  'T':84,   'Y':89,  'U':85,  'I':73,  'O':79,  'P':80,  '{':219,  '}':221,  '|':220,
		'tab':109, 'q':81,  'w':87,   'e':69,  'r':82,  't':84,   'y':89,  'u':85,  'i':73,  'o':79,  'p':80,  '[':219,  ']':221,  '\\':220,
		//           'A':65,  'S':83,   'D':68,  'F':70,  'G':71,   'H':72,  'J':74,  'K':75,  'L':76,  ':':186,  '"':222,
		           'a':65,  's':83,   'd':68,  'f':70,  'g':71,   'h':72,  'j':74,  'k':75,  'l':76,  ';':186,  "'":222,
		//'SHIFT':16,'Z':90,  'X':88,   'C':67,  'V':86,  'B':66,   'N':78,  'M':77,  '<':188,  '>':190,  '?':191,
		'shift':16,'z':90,  'x':88,   'c':67,  'v':86,  'b':66,   'n':78,  'm':77,  ',':188,  '.':190,  '/':191,
		/*'CTRL':17, 'ALT':18,'空格':32,*/' ':32,  'alt':18,'ctrl':17,'上':38, '下':40, '左':37,  '右':39,  
	};//（全部小写，按键值和字符 一对一）
	var _drill_keys_pressed = {};
	var _drill_keys_pressedTime = {};
	var _drill_keys_releasedTime = {};
	var _drill_keys_doubleTime = {};
	for( var key in _drill_keys ){
		_drill_keys_pressed[key] = false;
		_drill_keys_pressedTime[key] = -1;
		_drill_keys_releasedTime[key] = -1;
		_drill_keys_doubleTime[key] = -1;
	}
	
	//==============================
	// ** 键盘按下
	//==============================
	var _drill_keyInput_pressed = Input._onKeyDown;
	Input._onKeyDown = function(event) {
		for( var key in _drill_keys ){
			if( _drill_keys[key] == event.keyCode ){
				if( _drill_keys_pressed[key] == true ){	//未释放的情况下，出现重复按下问题
					_drill_keys_pressedTime[key] = -1;
					_drill_keys_releasedTime[key] = -1;
					_drill_keys_doubleTime[key] = -1;
				}
				if( _drill_keys_pressedTime[key] >= 1 ){
					_drill_keys_doubleTime[key] = 0;		//双击
				}
				_drill_keys_pressed[key] = true;
				_drill_keys_pressedTime[key] = 0;
			}
		}
		_drill_keyInput_pressed.call(this,event);
	}
	//==============================
	// ** 键盘释放
	//==============================
	var _drill_keyInput_released = Input._onKeyUp;
	Input._onKeyUp = function(event) {
		for( var key in _drill_keys ){
			if( _drill_keys[key] == event.keyCode ){
				_drill_keys_pressed[key] = false;
				_drill_keys_releasedTime[key] = 0;
			}
		}
		_drill_keyInput_released.call(this,event);
	}
	
	//==============================
	// ** 键盘刷新
	//==============================
	var _drill_keyInput_update = Input.update;
	Input.update = function() {
		_drill_keyInput_update.call(this);
		
		for( var key in _drill_keys ){
			if ( this.drill_isKeyPressed(key) ) {
				if( _drill_keys_pressedTime[key] != -1){ _drill_keys_pressedTime[key] += 1; }
			}else{
				if( _drill_keys_releasedTime[key] != -1){ _drill_keys_releasedTime[key] += 1; }
			}
			if( _drill_keys_doubleTime[key] != -1){ _drill_keys_doubleTime[key] += 1; }
			
			if( _drill_keys_releasedTime[key] > 15 ){	//释放时间超过一定值时，重置
				_drill_keys_pressedTime[key] = -1;
				_drill_keys_releasedTime[key] = -1;
				_drill_keys_doubleTime[key] = -1;
			}
		}
	}
	
	//==============================
	// ** 可用函数集
	//==============================
	Input.drill_isKeyPressed = function( key ){		//键盘按下[持续]
		return _drill_keys_pressed[key] == true;
	}
	Input.drill_isKeyTriggerd = function( key ){	//键盘按下[一帧]
		return (_drill_keys_pressed[key] == true && _drill_keys_pressedTime[key] == 1 );
	}
	Input.drill_isKeyReleased = function( key ){	//键盘释放[一帧]
		return (_drill_keys_pressed[key] == false && _drill_keys_releasedTime[key] == 1 );
	}
	Input.drill_isKeyDoubled = function( key ){		//键盘双击[一帧]
		return _drill_keys_doubleTime[key] == 1  ;
	}
	Input.drill_isAnyKeyTriggerd = function(){		//任意键按下[一帧]
		var result = false;
		for( var key in _drill_keys ){
			if( _drill_keys_pressed[key] == true && _drill_keys_pressedTime[key] == 1 ){
				result = true;
			}
		}
		return result;
	}
	Input.drill_isAnyKeyReleased = function(){		//任意键释放[一帧]
		var result = false;
		for( var key in _drill_keys ){
			if( _drill_keys_pressed[key] == false && _drill_keys_releasedTime[key] == 1 ){
				result = true;
			}
		}
		return result;
	}
	
}

//=============================================================================
// ** 实时监听手柄按键（可能会出现多个手柄连接情况，这里只考虑一个手柄情况）
//=============================================================================
if( typeof(_drill_padInput_updateGamepadState) == "undefined" ){	//防止重复定义

	var _drill_pads = {
		'A': 0,  'B': 1,  'X': 2,  'Y': 3,  'LB':4,  'RB':5,
		'上':12, '下':13, '左':14, '右':15,
	};	
	var _drill_pads_pressed = {};
	var _drill_pads_pressedTime = {};
	var _drill_pads_releasedTime = {};
	var _drill_pads_doubleTime = {};
	for( var pad in _drill_pads ){
		_drill_pads_pressed[pad] = false;
		_drill_pads_pressedTime[pad] = -1;
		_drill_pads_releasedTime[pad] = -1;
		_drill_pads_doubleTime[pad] = -1;
	}

	var _drill_padInput_updateGamepadState = Input._updateGamepadState;
	Input._updateGamepadState = function(gamepad) {
		//在core修改newstate前，遍历刷新按下和释放动作
		var lastStates = JSON.parse(JSON.stringify( this._gamepadStates[gamepad.index] || [] ));
		_drill_padInput_updateGamepadState.call( this,gamepad );
		var newStates = this._gamepadStates[gamepad.index] || [];
		for(var j=0; j<lastStates.length; j++){
			if (newStates[j] !== lastStates[j]) {
				for( var pad in _drill_pads ){
					if( _drill_pads[pad] == j ){
						
						if( newStates[j] == true ){	//手柄按下
							if( _drill_pads_pressed[pad] == true ){	//未释放的情况下，出现重复按下问题
								_drill_pads_pressedTime[pad] = -1;
								_drill_pads_releasedTime[pad] = -1;
								_drill_pads_doubleTime[pad] = -1;
							}
							if( _drill_pads_pressedTime[pad] >= 1 ){
								_drill_pads_doubleTime[pad] = 0;		//双击
							}
							_drill_pads_pressed[pad] = true;
							_drill_pads_pressedTime[pad] = 0;
							
						}else{	//手柄释放
							_drill_pads_pressed[pad] = false;
							_drill_pads_releasedTime[pad] = 0;
						
						}
					}
				}
			}
		}
	}
	
	//==============================
	// ** 手柄刷新
	//==============================
	var _drill_padInput_update = Input.update;
	Input.update = function() {
		_drill_padInput_update.call(this);
		
		for( var pad in _drill_pads ){
			if ( this.drill_isPadPressed(pad) ) {
				if( _drill_pads_pressedTime[pad] != -1){ _drill_pads_pressedTime[pad] += 1; }
			}else{
				if( _drill_pads_releasedTime[pad] != -1){ _drill_pads_releasedTime[pad] += 1; }
			}
			if( _drill_pads_doubleTime[pad] != -1){ _drill_pads_doubleTime[pad] += 1; }
			
			if( _drill_pads_releasedTime[pad] > 15 ){	//释放时间超过一定值时，重置
				_drill_pads_pressedTime[pad] = -1;
				_drill_pads_releasedTime[pad] = -1;
				_drill_pads_doubleTime[pad] = -1;
			}
		}
	}
	
	//==============================
	// ** 可用函数集
	//==============================
	Input.drill_isPadPressed = function( pad ){		//手柄按下[持续]
		return _drill_pads_pressed[pad] == true;
	}
	Input.drill_isPadTriggerd = function( pad ){	//手柄按下[一帧]
		return (_drill_pads_pressed[pad] == true && _drill_pads_pressedTime[pad] == 1 );
	}
	Input.drill_isPadReleased = function( pad ){	//手柄释放[一帧]
		return (_drill_pads_pressed[pad] == false && _drill_pads_releasedTime[pad] == 1 );
	}
	Input.drill_isPadDoubled = function( pad ){		//手柄双击[一帧]
		return _drill_pads_doubleTime[pad] == 1  ;
	}
	Input.drill_isAnyPadTriggerd = function(){		//任意键按下[一帧]
		var result = false;
		for( var pad in _drill_pads ){
			if( _drill_pads_pressed[pad] == true && _drill_pads_pressedTime[pad] == 1 ){
				result = true;
			}
		}
		return result;
	}
	Input.drill_isAnyPadReleased = function(){		//任意键释放[一帧]
		var result = false;
		for( var pad in _drill_pads ){
			if( _drill_pads_pressed[pad] == false && _drill_pads_releasedTime[pad] == 1 ){
				result = true;
			}
		}
		return result;
	}
	
};
