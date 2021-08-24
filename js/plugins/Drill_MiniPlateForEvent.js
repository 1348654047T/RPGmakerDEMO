//=============================================================================
// Drill_MiniPlateForEvent.js
//=============================================================================

/*:
 * @plugindesc [v1.1]        鼠标 - 事件说明窗口
 * @author Drill_up
 *
 * @param ---窗口---
 * @default 
 *
 * @param 布局模式
 * @parent ---窗口---
 * @type select
 * @option 默认窗口布局
 * @value 默认窗口布局
 * @option 黑底布局
 * @value 黑底布局
 * @option 系统窗口布局
 * @value 系统窗口布局
 * @option 图片窗口布局
 * @value 图片窗口布局
 * @desc 窗口背景布局的模式。
 * @default 黑底布局
 *
 * @param 布局透明度
 * @parent 布局模式
 * @type number
 * @min 0
 * @max 255
 * @desc 布局的透明度，0为完全透明，255为完全不透明。
 * @default 255
 *
 * @param 资源-系统窗口布局
 * @parent 布局模式
 * @desc 配置该资源，可以使得该窗口有与默认不同的系统窗口。
 * @default 
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 资源-图片窗口布局
 * @parent 布局模式
 * @desc 背景图片布局的资源。
 * @default 
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param 平移-图片窗口布局 X
 * @parent 布局模式
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-图片窗口布局 Y
 * @parent 布局模式
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 窗口行间距
 * @parent ---窗口---
 * @type number
 * @min 0
 * @desc 窗口内容之间的行间距。（rmmv默认标准：36）
 * @default 10
 *
 * @param 窗口内边距
 * @parent ---窗口---
 * @type number
 * @min 0
 * @desc 窗口内容与窗口外框的内边距。（rmmv默认标准：18）
 * @default 10
 *
 * @param 窗口字体大小
 * @parent ---窗口---
 * @type number
 * @min 1
 * @desc 窗口的字体大小。注意图标无法根据字体大小变化。（rmmv默认标准：28）
 * @default 22
 *
 * @param 窗口附加宽度
 * @parent ---窗口---
 * @desc 在当前自适应的基础上，再额外增加的宽度。可为负数。
 * @default 0
 *
 * @param 窗口附加高度
 * @parent ---窗口---
 * @desc 在当前自适应的基础上，再额外增加的高度。可为负数。
 * @default 0
 *
 *
 * @help  
 * =============================================================================
 * +++ Drill_MiniPlateForEvent +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 单独对鼠标有效。另支持触屏按住。
 * 你可以使得鼠标靠近事件时，可以显示窗口说明。
 * 关于窗口的配置介绍，去看看"窗口与布局.docx"。
 * 
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.由于该窗口的大小是变化的，所以布局可以设定四种。
 * 2.一个事件只能对应一个鼠标触发窗口方式，设置多个没有效果。
 * 3.如果说明中没有任何字符，将不显示这个状态的说明内容。
 * 4.写了一个"=>事件说明窗口"后，后面可以跟非常多的"=:"内容。
 * 5.你可以附加一定的宽度高度来适应被遮住的文字，但是不要加太多。
 * 
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 先确保项目img文件夹下是否有system文件夹！（img/system）
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * 资源-系统窗口布局
 * 资源-图片窗口布局
 *
 * 系统窗口与rmmv默认的window.png图片一样，可设置为不同的皮肤。
 * 图片布局不能根据窗口内容自适应，你需要合理控制的设置的说明文字。
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 你可以通过插件指令手动控制类型情况：
 * （第一个冒号两边都有一个空格，=:后面的文字表示一行的内容。）
 * 
 * 事件注释：=>事件说明窗口 : 鼠标接近 : 显示下列说明
 *           =:第一行内容
 *           =:第二行内容
 * 事件注释：=>事件说明窗口 : 鼠标左键按下[持续] : 显示下列说明
 * 事件注释：=>事件说明窗口 : 鼠标滚轮按下[持续] : 显示下列说明
 * 事件注释：=>事件说明窗口 : 鼠标右键按下[持续] : 显示下列说明
 * 事件注释：=>事件说明窗口 : 触屏按下[持续] : 显示下列说明
 *
 * 注意，一条注释最多能填入六行，如果你要设置更多内容，多加几个注释即可。
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过插件指令，临时显示/隐藏窗口设置。
 * （注意，冒号后面有两个空格。）
 *
 * 插件指令：>事件说明窗口 : 本事件 : 隐藏说明
 * 插件指令：>事件说明窗口 : 本事件 : 显示说明
 * 插件指令：>事件说明窗口 : 2 : 隐藏说明
 * 插件指令：>事件说明窗口 : 3 : 显示说明
 *
 * 数字对应的事件的id。
 * 隐藏是暂时性的，切换了地图或者改变了事件的图像，就会失效。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 添加了附加宽度附加高度设置。
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称：		MPFE (Mini_Plate_For_Event)
//		临时全局变量	DrillUp.g_MPFE_xxx
//		临时局部变量	this._drill_MPFE_xxx
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		该插件原理为 鼠标触发事件 和 状态和buff说明窗口 的组合效果。
//		实际上结合后，改动非常大，结构已经截然不同了。
//		地图界面最容易造成卡顿问题，稍不注意，计算量就暴涨，一定要加约束。
//		（窗口的宽高不要轻易修改，每次修改都会重画）
//		
//		貌似Scene_Map.prototype.update 是个火坑。每次地图刷新，update可能会变非常频繁，这里用updateScene。
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_MiniPlateForEvent = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_MiniPlateForEvent');
	
	DrillUp.g_MPFE_layout_type = String(DrillUp.parameters['布局模式'] || "黑底布局");
	DrillUp.g_MPFE_opacity = Number(DrillUp.parameters['布局透明度'] || 255);
	DrillUp.g_MPFE_layout_window = String(DrillUp.parameters['资源-系统窗口布局'] );
	DrillUp.g_MPFE_layout_pic = String(DrillUp.parameters['资源-图片窗口布局'] );
	DrillUp.g_MPFE_layout_pic_x = Number(DrillUp.parameters['平移-图片窗口布局 X'] );
	DrillUp.g_MPFE_layout_pic_y = Number(DrillUp.parameters['平移-图片窗口布局 Y'] );
	DrillUp.g_MPFE_lineheight = Number(DrillUp.parameters['窗口行间距'] || 10);
	DrillUp.g_MPFE_padding = Number(DrillUp.parameters['窗口内边距'] || 18);
	DrillUp.g_MPFE_fontsize = Number(DrillUp.parameters['窗口字体大小'] || 22);
	DrillUp.g_MPFE_ex_width = Number(DrillUp.parameters['窗口附加宽度'] || 0);
	DrillUp.g_MPFE_ex_height = Number(DrillUp.parameters['窗口附加高度'] || 0);
	

//=============================================================================
// ** 插件指令
//=============================================================================
var _drill_MPFE_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_MPFE_pluginCommand.call(this, command, args);
	if (command === '>事件说明窗口') { // >事件说明窗口 : A : 隐藏说明
		if(args.length == 4){
			var temp1 = String(args[1]) ;
			var type = String(args[3]);
			if( type == '隐藏说明' ){ 
				var e_id = 0;
				if( temp1 == "本事件" ){ 
					e_id = this._eventId;
				}else{
					e_id = Number(temp1);
				}
				$gameMap.drill_MPFE_setDataVisible( e_id , false );
			}
			if( type == '显示说明' ){
				var e_id = 0;
				if( temp1 == "本事件" ){ 
					e_id = this._eventId;
				}else{
					e_id = Number(temp1);
				}
				$gameMap.drill_MPFE_setDataVisible( e_id , true );
			}
		}
	}
};

//=============================================================================
// ** 事件初始化
//=============================================================================
//==============================
// * 贴图初始化
//==============================
var _drill_MPFE_setCharacter = Sprite_Character.prototype.setCharacter;
Sprite_Character.prototype.setCharacter = function(character) {		//图像改变，范围就改变
	_drill_MPFE_setCharacter.call(this,character);
    this.drill_MPFE_setupTrigger();
};
Sprite_Character.prototype.drill_MPFE_setupTrigger = function() {

	if( this._character && this._character.constructor.name === "Game_Event" ){
		var page = this._character.page();
		if ( page ) {
			var list_ = this._character.list();
			var context_ = [];
			var start_count = false;	//rmmv每行都存储在不同位置。
			var type = "";
			for(var i=0; i<list_.length; i++){
				var l = list_[i];
				if (l.code === 108 || l.code === 408) {
					var row = l.parameters[0];
					var args = l.parameters[0].split(' ');
					var command = args.shift();
					if (command == "=>事件说明窗口"){	//=>事件说明窗口 : 鼠标滚轮按下[持续] : 显示下列说明 =:xxxx =:xxx
						if(args.length >= 2){
							if(args[1]){ type = String(args[1]); }
							if(args[3]){ var temp1 = String(args[3]); }
							if( temp1 == "显示下列说明" ){
								start_count = true;
								continue;
							}
						}
					};
					if( start_count == true ){
						if(row.contains("=:")){
							context_.push(row.replace("=:",""));
						}else{
							start_count = false;
						}
					}
				};
			};
			if(context_.length != 0){		//添加多条内容
				var obj = {};
				obj._event_id = this._character._eventId;	//只能存数据，不能存对象指针
				obj._type = type;
				obj._context = context_;
				obj._enable = true;
				$gameMap.drill_MPFE_pushData(obj);
			}
		}
	}
};
//==============================
// * Game_Map初始化
//==============================
var _drill_MPFE_gmap_initialize = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function() {	
	_drill_MPFE_gmap_initialize.call(this);
	this._drill_MPFE_data = [];
};

//==============================
// * Game_Map刷地图
//==============================
var _drill_MPFE_gmap_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
	_drill_MPFE_gmap_setup.call(this,mapId);
	this._drill_MPFE_data = [];
}
//==============================
// * Game_Map加入条件
//==============================
Game_Map.prototype.drill_MPFE_pushData = function(obj) {	
	var can_push = true;
	
	for(var i=0; i<this._drill_MPFE_data.length; i++){	//重复的不插入
		var temp_obj = this._drill_MPFE_data[i];
		if( temp_obj._event_id == obj._event_id &&
			temp_obj._type == obj._type ){
				
			can_push  = false;
		}
	}
	if( can_push ){
		this._drill_MPFE_data.push(obj);
	}
};
//==============================
// * Game_Map去除条件
//==============================
Game_Map.prototype.drill_MPFE_setDataVisible = function(event_id,v) {	
	
	for(var i = this._drill_MPFE_data.length-1; i >= 0; i--){
		var temp_obj = this._drill_MPFE_data[i];
		if( temp_obj._event_id == event_id ){
			temp_obj._enable = v;
		}
	}
}
//==============================
// * 创建面板
//==============================
var _drill_MPFE_Scene_createAllWindows = Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function() {
	_drill_MPFE_Scene_createAllWindows.call(this);
	
	if( !this._drill_SenceTopArea ){		//场景前面层（最最前面的ui的层）
		this._drill_SenceTopArea = new Sprite();
		this.addChild(this._drill_SenceTopArea);
	}
	if( !this._drill_mini_event_plate ){		//只建立一个窗口
		this._drill_mini_event_plate = new Drill_MiniPlateForEvent_Window();
		this._drill_SenceTopArea.addChild(this._drill_mini_event_plate);
	}
};

//=============================================================================
// ** 地图触发
//=============================================================================
//==============================
// * Scene_Map初始化
//==============================
//var _drill_MPFE_smap_initialize = Scene_Map.prototype.initialize
//Scene_Map.prototype.initialize = function() {	
//	_drill_MPFE_smap_initialize.call(this);
//	this._drill_MPFE_updating = false;
//}
//==============================
// * Scene_Map帧刷新（直接update函数不稳定，可能刷新很多次，用updateScene）
//==============================
var _drill_MPFE_smap_update = Scene_Map.prototype.updateScene;
Scene_Map.prototype.updateScene = function() {	
	_drill_MPFE_smap_update.call(this);
	
	var char_sprites = this._spriteset._characterSprites;	//从地图贴图找起 >> 找到含event的Sprite_Character >> 刷新事件的注释
	for(var i=0; i< char_sprites.length; i++){
		var temp_sprite = char_sprites[i];
		var temp_character = temp_sprite._character;
		if( temp_character && temp_character.constructor.name === "Game_Event" ){
			
			for( var j = 0; j< $gameMap._drill_MPFE_data.length; j++ ){
				var temp_obj = $gameMap._drill_MPFE_data[j];
				if( temp_character._eventId == temp_obj._event_id ){
					
					//刷新事件注释不需要找父类，因为这个函数就在Scene_Map中
					var cw = temp_sprite.patternWidth() ;
					var ch = temp_sprite.patternHeight() ;
					var check = {
						'x': temp_sprite.x - cw*temp_sprite.anchor.x,
						'y': temp_sprite.y - ch*temp_sprite.anchor.y,
						'w': cw,
						'h': ch,
						't': temp_obj._context,	
						'id': temp_character._eventId,
						'type': temp_obj._type,
						'enable': temp_obj._enable
					}
					
					this._drill_mini_event_plate.pushChecks(check);
							
				}
			}
		}
	}
};
	
//=============================================================================
// * Drill_MiniPlateForEvent_Window 说明面板（整个场景只有一个该窗口）
//		（该面板 与 Drill_MiniPlateForState_Window 结构一模一样）
//=============================================================================
function Drill_MiniPlateForEvent_Window() {
    this.initialize.apply(this, arguments);
};

Drill_MiniPlateForEvent_Window.prototype = Object.create(Window_Base.prototype);
Drill_MiniPlateForEvent_Window.prototype.constructor = Drill_MiniPlateForEvent_Window;

//==============================
// * 初始化-框架
//==============================
Drill_MiniPlateForEvent_Window.prototype.initialize = function() {
    Window_Base.prototype.initialize.call(this, 0, 0, 0, 0);
	
	this._drill_layout_type = DrillUp.g_MPFE_layout_type;
	this._drill_opacity = DrillUp.g_MPFE_opacity;
	this._drill_win_skin = ImageManager.loadSystem(DrillUp.g_MPFE_layout_window);
	this._drill_pic = ImageManager.loadSystem(DrillUp.g_MPFE_layout_pic);
	this._drill_pic_x = DrillUp.g_MPFE_layout_pic_x;
	this._drill_pic_y = DrillUp.g_MPFE_layout_pic_y;
	
	this._drill_width = 0;
	this._drill_height = 0;
	this._drill_visible = false;
	this._drill_check_tank = [];
	
	this._cur_event_id = 0;
	
	this._windowBackSprite.zIndex = 2;
	this._windowFrameSprite.zIndex = 3;
	
	this.drill_createBackground();
	this.drill_createText();
	this.drill_sortBottomByZIndex();
};
Drill_MiniPlateForEvent_Window.prototype.standardFontSize = function() {
    return DrillUp.g_MPFE_fontsize;
};
Drill_MiniPlateForEvent_Window.prototype.standardPadding = function() {
    return DrillUp.g_MPFE_padding;
};

//==============================
// * 初始化-背景
//==============================
Drill_MiniPlateForEvent_Window.prototype.drill_createBackground = function() {
	
	this._drill_background = new Sprite();
	this._drill_background.zIndex = 1;
	this._drill_background.opacity = this._drill_opacity;
	this._windowBackSprite.opacity = 0;
	this._windowFrameSprite.opacity = 0;
	if( this._drill_layout_type == "图片窗口布局" ){
		this._drill_background.bitmap = this._drill_pic;
		this._drill_background.x = this._drill_pic_x;
		this._drill_background.y = this._drill_pic_y;
	}else if( this._drill_layout_type == "系统窗口布局" ){
		this.windowskin = this._drill_win_skin;
		this._windowBackSprite.opacity = this._drill_opacity;
		this._windowFrameSprite.opacity = this._drill_opacity;
	}else if( this._drill_layout_type == "默认窗口布局" ){
		this.opacity = this._drill_opacity;
		this._windowBackSprite.opacity = this._drill_opacity;
		this._windowFrameSprite.opacity = this._drill_opacity;
	}
	
	this._windowSpriteContainer.addChild(this._drill_background);
	//_windowSpriteContainer为窗口的最底层贴图
}
//==============================
// ** 底层层级排序
//==============================
Drill_MiniPlateForEvent_Window.prototype.drill_sortBottomByZIndex = function() {
   this._windowSpriteContainer.children.sort(function(a, b){return a.zIndex-b.zIndex});	//比较器
};

//==============================
// * 初始化-文本层
//==============================
Drill_MiniPlateForEvent_Window.prototype.drill_createText = function() {
	this.createContents();
    this.contents.clear();
}

//==============================
// * 帧刷新
//==============================
Drill_MiniPlateForEvent_Window.prototype.update = function() {
	Sprite.prototype.update.call(this);
	
	this.updateChecks();
	this.updatePosition();
}
//==============================
// * 帧刷新-刷新位置
//==============================
Drill_MiniPlateForEvent_Window.prototype.updatePosition = function() {
	var cal_x = _drill_mouse_x;
	var cal_y = _drill_mouse_y;
	if( cal_x + this._drill_width > Graphics.boxWidth ){	//横向贴边控制
		cal_x = Graphics.boxWidth - this._drill_width;
	}
	if( cal_y + this._drill_height > Graphics.boxHeight ){	//纵向贴边控制
		cal_y = Graphics.boxHeight - this._drill_height;
	}
	this.x = cal_x;
	this.y = cal_y;
}
//==============================
// * 接口-添加状态图标判断
//==============================
Drill_MiniPlateForEvent_Window.prototype.pushChecks = function(c) {
	if( this._drill_check_tank.length < 1000){	//防止卡顿造成的过度积压
		this._drill_check_tank.push(c);
	}
}
//==============================
// * 帧刷新-判断激活
//==============================
Drill_MiniPlateForEvent_Window.prototype.updateChecks = function() {
	if( !this._drill_check_tank ){ this.visible = false ; return ;}
	
	var is_visible = false;
	var check_obj = null;
	for(var i=0; i<this._drill_check_tank.length; i++){
		var temp_check = this._drill_check_tank[i];
		
		if ( this.checkCondition(temp_check) ) { 
			is_visible = true; 
			check_obj = temp_check; 
			break; 
		}
	}
	
	//这里有三道锁，看起来会比较乱
	//（check.enable显示/隐藏 锁 ，this._drill_visible 接近/离开 锁，this._cur_event_id 落在不同事件上的锁）
	if( check_obj && check_obj.enable == true ){	
		if ( this._drill_visible == true ) {
			if( is_visible == true ){
				//显示中
				if(this._cur_event_id != check_obj.id){
					this._cur_event_id = check_obj.id;
					this.reflashTextMassage(check_obj.t);
				}
				
			}else{
				//显示中断
				this._drill_visible = false;
				this._drill_width = 0;
				this._drill_height = 0;
			}
		}else{
			if( is_visible == true ){
				//激活显示
				//this.reflashTextMassage(check_obj.t);
				//this._cur_event_id = check_obj.id ;
				this._drill_visible = true;
			}else{
				//隐藏中，不操作
			}
		}
	}else{
		this._drill_visible = false;
	}
	
	//（宽高不要轻易修改）
	this.visible = this._drill_visible;
	this._drill_check_tank = [];
}
//==============================
// * 激活-显示条件
//==============================
Drill_MiniPlateForEvent_Window.prototype.checkCondition = function(check) {
	var _x = _drill_mouse_x;
	var _y = _drill_mouse_y;
	if(check.type == "触屏按下[持续]"){
		var _x = TouchInput.x;
		var _y = TouchInput.y;
	}
	if(_x > check.x + check.w){ return false;}
	if(_x < check.x + 0){ return false;}
	if(_y > check.y + check.h){ return false;}
	if(_y < check.y + 0 ){ return false;}
	if(check.type == "鼠标左键按下[持续]"){
		if( TouchInput.drill_isLeftPressed() ){ return true; }else{ return false; }
	}else if(check.type == "鼠标滚轮按下[持续]"){
		if( TouchInput.drill_isMiddlePressed() ){ return true; }else{ return false; }
	}else if(check.type == "鼠标右键按下[持续]"){
		if( TouchInput.drill_isRightPressed() ){ return true; }else{ return false; }
	}else if(check.type == "触屏按下[持续]"){
		if( TouchInput.isPressed() ){ return true; }else{ return false; }
	}

	return true;
}

//==============================
// * 激活-刷新内容
//==============================
Drill_MiniPlateForEvent_Window.prototype.reflashTextMassage = function(contexts) {
	if(contexts.length == 0){ return }
	
	//1.内容获取
	var tar_width = 0;
	
	//2.长度判定（必须在绘制前）
	for (var i=0; i< contexts.length; i++) {
		var ic = 0;		//icon字符大小
		var temp = contexts[i];	
		var temp_s = temp.concat();
		temp_s = temp_s.replace(/\\C\[\d+\]/gi,'');
		temp_s = temp_s.replace(/\\I\[\d+\]/gi,function(){
			ic+=1;
			return '';
		}.bind(this));
		var temp_w = this.textWidth(temp_s) + ic * (this.standardFontSize() + 8);
		if( temp_w > tar_width ){
			tar_width = temp_w;
		}
	}
	this._drill_width = tar_width;
	this._drill_height = contexts.length * ( this.standardFontSize() + DrillUp.g_MPFE_lineheight);
	this._drill_width += this.standardPadding() * 2;
	this._drill_height += this.standardPadding() * 2;
	this._drill_width += DrillUp.g_MPFE_ex_width;
	this._drill_height += DrillUp.g_MPFE_ex_height;
	if( contexts.length == 0){	
		this._drill_width = 0;
		this._drill_height = 0;
	}
	this.width = this._drill_width;
	this.height = this._drill_height;
	
	//3.绘制内容
	this.createContents();
    this.contents.clear();
	for (var i=0; i< contexts.length; i++) {
		var x = 0;
		var y = 0 + i*( this.standardFontSize() + DrillUp.g_MPFE_lineheight);
		
		var temp = contexts[i];	
		this.drawTextEx(temp,x,y);
	}
	//if(contexts.length >= 1){
	//	alert(contexts);
	//	alert(this._drill_width);
	//	alert(this._drill_height);
	//}
	
	if( this._drill_layout_type == "黑底布局" ){
		this._drill_background_bitmap = new Bitmap(this._drill_width, this._drill_height);
		this._drill_background_bitmap.fillRect(0, 0 , this._drill_width, this._drill_height, "#000000");//背景黑框
		this._drill_background.bitmap = this._drill_background_bitmap;
	}
	
}
	
//==============================
// ** 实时获取鼠标位置
//==============================
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



