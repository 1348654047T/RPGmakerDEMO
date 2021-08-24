//=============================================================================
// Drill_MouseTriggerEvent.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        鼠标 - 鼠标触发事件
 * @author Drill_up
 *
 * @help  
 * =============================================================================
 * +++ Drill_MouseTriggerEvent +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 单独对鼠标有效。
 * 你可以使得鼠标靠近事件、点击事件时，触发事件的独立开关。
 * 
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.鼠标触发的范围，是事件图像大小范围，不要在空行走图中加触发。
 * 2.该插件的触发跨事件页。
 * 3.如果你设置了"悬停且离开时OFF"，一定要确保事件两边都配置了行走图，
 * 不然会不停地 行走图 -> 空行走图 来回切换。
 * 4.rmmv默认右键会进入菜单，你如果需要使用右键，可以在插件"画面-鼠标辅助
 * 操作面板" 里面禁用右键菜单。
 * 5.插件经过优化算法，一个含鼠标触发的事件的工作量，只相当于两个没有鼠标
 * 触发的事件。不过还是建议不要在同一个地图加太多的鼠标触发，120个以内就好。
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 设置鼠标能触发指定的事件，使用下面事件注释：
 * （注意，冒号左右有一个空格）
 *
 * 事件注释：=>鼠标触发 : 悬停 : 触发独立开关 : A
 * 事件注释：=>鼠标触发 : 悬停且离开时OFF : 触发独立开关 : A
 *
 * 事件注释：=>鼠标触发 : 左键按下[持续] : 触发独立开关 : A
 * 事件注释：=>鼠标触发 : 左键按下[一帧] : 触发独立开关 : A
 * 事件注释：=>鼠标触发 : 左键释放[一帧] : 触发独立开关 : A
 * 事件注释：=>鼠标触发 : 左键双击[一帧] : 触发独立开关 : A
 * 
 * 事件注释：=>鼠标触发 : 右键按下[持续] : 触发独立开关 : A
 * 事件注释：=>鼠标触发 : 右键按下[一帧] : 触发独立开关 : A
 * 事件注释：=>鼠标触发 : 右键释放[一帧] : 触发独立开关 : A
 * 事件注释：=>鼠标触发 : 右键双击[一帧] : 触发独立开关 : A
 * 
 * 事件注释：=>鼠标触发 : 滚轮按下[持续] : 触发独立开关 : A
 * 事件注释：=>鼠标触发 : 滚轮按下[一帧] : 触发独立开关 : A
 * 事件注释：=>鼠标触发 : 滚轮释放[一帧] : 触发独立开关 : A
 * 事件注释：=>鼠标触发 : 滚轮双击[一帧] : 触发独立开关 : A
 *
 * 事件注释：=>鼠标触发 : 滚轮上滚 : 触发独立开关 : A
 * 事件注释：=>鼠标触发 : 滚轮下滚 : 触发独立开关 : A
 *
 * 注意，"持续"和"一帧"的区别，就是你按住小爱丽丝，前者会不停地跳，
 * 后者只跳一次。
 * "持续"实际上是在时间段内，一直保持独立开关为开启状态。
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过插件指令手动控制类型情况：
 * （冒号两边都有一个空格）
 * 
 * 插件指令：>鼠标触发 : 添加 : 本事件 : 左键按下[持续] : 触发独立开关 : A
 * 插件指令：>鼠标触发 : 添加 : 1 : 左键按下[持续] : 触发独立开关 : A
 * 
 * 插件指令：>鼠标触发 : 去除 : 本事件 : 左键按下[持续]
 * 插件指令：>鼠标触发 : 去除 : 1 : 左键按下[持续]
 *
 * 插件指令：>鼠标触发 : 去除 : 1 : 全部
 *
 * 注意，插件指令添加的触发事件都是暂时的，刷新地图后失效。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称：		MTE (Mouse_Trigger_Event)
//		临时全局变量	DrillUp.g_MTE_xxx
//		临时局部变量	this._drill_xxx
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		根据事件的贴图，进行条件插入。
//		实时判断条件，来确定独立开关是否被激活。
//
//		帧刷新时，从最高层的Scene_Map开始，遍历每个sprite，来找条件，每个sprite都是鼠标监听条件。
//		貌似Scene_Map.prototype.update 是个火坑。每次地图刷新，update可能会变非常频繁，这里用updateScene。
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_MouseTriggerEvent = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_MouseTriggerEvent');
	
	//DrillUp.g_MTE_interval = Number(DrillUp.parameters['鼠标监听间隔'] || 1 );

//=============================================================================
// ** 插件指令
//=============================================================================
var _drill_MTE_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_MTE_pluginCommand.call(this, command, args);
	
	if (command === ">鼠标触发")  {
		if( args.length == 10 ){
			var temp1 = String(args[1]);
			var temp2 = String(args[3]);
			var type = String(args[5]);
			var temp3 = String(args[7]);
			var temp4 = String(args[9]);
			if(temp1 == "添加"){
				var obj = {};
				if(temp2 == "本事件"){
					obj._event_id = this._eventId;
				}else{
					obj._event_id = Number(temp2);
				}
				obj._type = type;
				obj._switch = temp4;
				$gameMap.drill_MTE_pushData(obj);
			}
		}
		if( args.length == 6 ){
			var temp1 = String(args[1]);
			var temp2 = String(args[3]);
			var type = String(args[5]);
			if(temp1 == "去除"){
				var obj = {};
				if(temp2 == "本事件"){
					obj._event_id = this._eventId;
				}else{
					obj._event_id = Number(temp2);
				}
				obj._type = type;
				$gameMap.drill_MTE_removeData(obj);
			}
		}
	};
};
//=============================================================================
// ** 事件初始化
//=============================================================================
//==============================
// * 贴图初始化
//==============================
var _drill_MTE_setCharacter = Sprite_Character.prototype.setCharacter;
Sprite_Character.prototype.setCharacter = function(character) {		//图像改变，范围就改变
	_drill_MTE_setCharacter.call(this,character);
    this.drill_MTE_setupTrigger();
};
Sprite_Character.prototype.drill_MTE_setupTrigger = function() {

	if( this._character && this._character.constructor.name === "Game_Event" ){
		var page = this._character.page();
		if ( page ) {
			this._character.list().forEach(function(l) {
				if (l.code === 108) {
					var args = l.parameters[0].split(' ');
					var command = args.shift();
					if (command == "=>鼠标触发"){	//=>鼠标触发 : 悬停 : 触发独立开关 : A
						if(args.length >= 6){
							if(args[1]){ var type = String(args[1]); }
							if(args[3]){ var temp1 = String(args[3]); }
							if(args[5]){ var temp2 = String(args[5]); }
							if( temp1 == "触发独立开关" ){
								var obj = {};
								obj._event_id = this._character._eventId;	//只能存数据，不能存对象指针
								obj._type = type;
								obj._switch = temp2;
								$gameMap.drill_MTE_pushData(obj);
							}
						}
					};
				};
			}, this);
		}
	}
};
//==============================
// * Game_Map初始化
//==============================
var _drill_MTE_gmap_initialize = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function() {	
	_drill_MTE_gmap_initialize.call(this);
	this._drill_MTE_data = [];
};
//==============================
// * Game_Map刷地图
//==============================
var _drill_MTE_gmap_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
	_drill_MTE_gmap_setup.call(this,mapId);
	this._drill_MTE_data = [];
}
//==============================
// * Game_Map触发 添加
//==============================
Game_Map.prototype.drill_MTE_pushData = function(obj) {	
	var can_push = true;
	
	for(var i=0; i<this._drill_MTE_data.length; i++){	//重复的不插入
		var temp_obj = this._drill_MTE_data[i];
		if( temp_obj._event_id == obj._event_id &&
			temp_obj._type == obj._type &&
			temp_obj._switch == obj._switch ){
				
			can_push  = false;
		}
	}
	if( can_push ){
		this._drill_MTE_data.push(obj);
	}
};
//==============================
// * Game_Map触发 去除
//==============================
Game_Map.prototype.drill_MTE_removeData = function(obj) {	

	for(var i=this._drill_MTE_data.length-1; i>0; i--){
		var temp_obj = this._drill_MTE_data[i];
		if( temp_obj._event_id == obj._event_id){
			if(obj._type == "全部"){
				this._drill_MTE_data.splice(i,1);
			}else if( temp_obj._type == obj._type ){
				this._drill_MTE_data.splice(i,1);
			}
		}
	}
};

//=============================================================================
// ** 地图触发
//=============================================================================
//==============================
// * Scene_Map帧刷新
//==============================
var _drill_MTE_smap_update = Scene_Map.prototype.updateScene;
Scene_Map.prototype.updateScene = function() {	
	_drill_MTE_smap_update.call(this);
		
	var need_reflash = false;	//延迟刷新锁
	if( !this.isBusy() ){
	var char_sprites = this._spriteset._characterSprites;	//从地图贴图找起 >> 找到含event的Sprite_Character >> 操作这个event的独立开关
	for(var i=0; i< char_sprites.length; i++){
		var temp_sprite = char_sprites[i];
		var temp_character = temp_sprite._character;
		if( temp_character && temp_character.constructor.name === "Game_Event" ){
			
			for( var j = 0; j<$gameMap._drill_MTE_data.length; j++ ){
				var temp_obj = $gameMap._drill_MTE_data[j];
				if( temp_character._eventId == temp_obj._event_id && this.drill_isOnMTEReady(temp_sprite) ){
					
					if( this.drill_isOnMTERange( temp_sprite ) ){
						if( this.drill_isOnMTEMouse( temp_obj._type ) ){
							var key = [ $gameMap._mapId, temp_obj._event_id, temp_obj._switch ];
							if( $gameSelfSwitches.value(key) !== true){
								need_reflash = true;
								$gameSelfSwitches.drill_setValueWithOutChange(key,true);
							}
						}
					}else{
						if( temp_obj._type == "悬停且离开时OFF" ){
							var key = [ $gameMap._mapId, temp_obj._event_id, temp_obj._switch ];
							if( $gameSelfSwitches.value(key) !== false){
								need_reflash = true;
								$gameSelfSwitches.drill_setValueWithOutChange(key,false);
							}
						}
					}
				}
			}
		}
	}
	}
	if( need_reflash ){
		$gameMap.requestRefresh();	//变化后手动刷新
	}
};
//==============================
// * 优化 - 独立开关赋值时不刷新地图
//==============================
Game_SelfSwitches.prototype.drill_setValueWithOutChange = function(key, value) {
    if (value) {
        this._data[key] = true;
    } else {
        delete this._data[key];
    }
};

//==============================
// * 点击范围初始设置
//==============================
Scene_Map.prototype.drill_isOnMTEReady = function( sprite ) {
	 if (sprite == null){ return false };
	 if (sprite.bitmap == null){ return false };
	 if (!sprite.bitmap.isReady() ){ return false };
	 if (sprite.visible === false) {return false};
	 if (sprite.opacity === 0) {return false};
	 if (sprite.x === 0) {return false};
	 if (sprite.y === 0) {return false};
	 return true;	
}
//==============================
// * 点击范围监听
//==============================
Scene_Map.prototype.drill_isOnMTERange = function( sprite ) {
	 var cw = sprite.patternWidth() ;
	 var ch = sprite.patternHeight() ;
	 var cx = sprite.x - $gameMap._displayX;
	 var cy = sprite.y - $gameMap._displayY;
	 if (_drill_mouse_x < cx + 0 - cw*sprite.anchor.x) {return false};
	 if (_drill_mouse_x > cx + cw - cw*sprite.anchor.x) {return false};
	 if (_drill_mouse_y < cy + 0 - ch*sprite.anchor.y) {return false};
	 if (_drill_mouse_y > cy + ch - ch*sprite.anchor.y) {return false};
	 return true;	
};
//==============================
// * 点击类型监听
//==============================
Scene_Map.prototype.drill_isOnMTEMouse = function( type ) {
	if ( type == "左键按下[持续]" ){
		if ( TouchInput.drill_isLeftPressed() ) {return true};		//需要确定是否为鼠标点击
	}else if( type == "左键按下[一帧]" ){
		if ( TouchInput.drill_isLeftTriggerd() ) {return true};
	}else if( type == "左键释放[一帧]" ){
		if ( TouchInput.drill_isLeftReleased() ) {return true};
	}else if( type == "左键双击[一帧]" ){
		if ( TouchInput.drill_isLeftDoubled() ) {return true};
		
	}else if( type == "右键按下[持续]" ){
		if ( TouchInput.drill_isRightPressed() ) {return true};
	}else if( type == "右键按下[一帧]" ){
		if ( TouchInput.drill_isRightTriggerd() ) {return true};
	}else if( type == "右键释放[一帧]" ){
		if ( TouchInput.drill_isRightReleased() ) {return true};
	}else if( type == "右键双击[一帧]" ){
		if ( TouchInput.drill_isRightDoubled() ) {return true};
		
	}else if( type == "滚轮按下[持续]" ){
		if ( TouchInput.drill_isMiddlePressed() ) {return true};
	}else if( type == "滚轮按下[一帧]" ){
		if ( TouchInput.drill_isMiddleTriggerd() ) {return true};
	}else if( type == "滚轮释放[一帧]" ){
		if ( TouchInput.drill_isMiddleReleased() ) {return true};
	}else if( type == "滚轮双击[一帧]" ){
		if ( TouchInput.drill_isMiddleDoubled() ) {return true};
		
	}else if( type == "滚轮上滚" ){
		if ( TouchInput._drill_MTE_wheel_delta > 0 ) {
			TouchInput._drill_MTE_wheel_delta = 0;
			return true;
		};	
	}else if( type == "滚轮下滚" ){
		if ( TouchInput._drill_MTE_wheel_delta < 0 ) {
			TouchInput._drill_MTE_wheel_delta = 0;
			return true;
		};	
	}else if( type == "悬停且离开时OFF" ){
		 return true;
	}else if( type == "悬停" ){
		 return true;
	}
	return false;	
};

//=============================================================================
// ** 实时获取鼠标位置
//=============================================================================
if( typeof(_drill_mouse_getCurPos) == "undefined" ){	//防止重复定义

	var _drill_mouse_getCurPos = TouchInput._onMouseMove;
	var _drill_mouse_x = 0;
	var _drill_mouse_y = 0;
	TouchInput._onMouseMove = function(event) {		//绑定在TouchInput中
		_drill_mouse_getCurPos.call(this,event);
		
        _drill_mouse_x = Graphics.pageToCanvasX(event.pageX);
        _drill_mouse_y = Graphics.pageToCanvasY(event.pageY);
	};
}
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
//==============================
// ** 滚轮监听（由于有鼠标延迟刷新，这里专门对插件处理）
//==============================
var _drill_MTE_wheelRolled = TouchInput._onWheel;
TouchInput._onWheel = function(event) {
	if( event.deltaY != 0 ){
		this._drill_MTE_wheel_delta = -1 * event.deltaY;
	}
	_drill_MTE_wheelRolled.call(this,event);
};

