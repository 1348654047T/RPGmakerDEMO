//=============================================================================
// Drill_EventRangeAnimation.js
//=============================================================================

/*:
 * @plugindesc [v1.1]        物体触发 - 固定区域 & 播放并行动画
 * @author Drill_up
 * 
 * 
 * @param 播放部分类型
 * @type select
 * @option 堵路部分
 * @value 堵路部分
 * @option 不堵路部分
 * @value 不堵路部分
 * @option 都包括
 * @value 都包括
 * @desc 动画会根据地形类型，选择性播放与不播放。可以通过插件指令，后期调整。
 * @default 不堵路部分
 *
 * @param 自定义区域-1
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-2
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-3
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-4
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-5
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-6
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-7
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-8
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-9
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-10
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 * 
 *
 * @param 自定义区域-11
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-12
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-13
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-14
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-15
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-16
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-17
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-18
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-19
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-20
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-21
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-22
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-23
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-24
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-25
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-26
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-27
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-28
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-29
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-30
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-31
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-32
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-33
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-34
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-35
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-36
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-37
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-38
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-39
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 *
 * @param 自定义区域-40
 * @parent ---自定义区域---
 * @type struct<RTriAnim>
 * @desc 自定义触发事件的区域范围。
 * @default 
 * 
 * @help  
 * =============================================================================
 * +++ Drill_EventRangeAnimation +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 使得事件能够使得事件 范围内 的区域，批量播放并行动画。
 * 只播放动画。
 * 更多详细介绍，去看看"关于物体触发.docx"。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.以指定的事件为中心，范围内的图块批量播放动画。
 * 2.你可以播放无限时间的动画，但是只要离开地图或者读档，动画就消失。
 * 3.播放动画分为"堵路"、"不堵路"、"全都"三种显示方式。
 *   设置"全都"，才是触发的实际全部区域。
 *  （动画与实际触发可以不完全一致，你需要留意该设置）
 *
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 插件可以单独使用，通过与下面组合，可以有更多功能：
 * 被扩展：
 *   - Drill_EventRangeTrigger 物体触发 - 固定区域 & 条件
 *     如果使用目标插件，插件指令的"上一次触发的固定区域"可以生效。
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件 - 范围播放
 * 你可以通过插件指令设置触发的条件。
 * （注意，冒号左右有空格）
 *
 * 插件指令：>物体范围动画 : 80 : 本事件 : 菱形区域 : 2
 * 插件指令：>物体范围动画 : 80 : 本事件 : 方形区域 : 2
 * 插件指令：>物体范围动画 : 80 : 本事件 : 圆形区域 : 2
 * 插件指令：>物体范围动画 : 80 : 本事件 : 十字区域 : 2
 * 插件指令：>物体范围动画 : 80 : 指定事件 : 10 : 菱形区域 : 2
 * 插件指令：>物体范围动画 : 80 : 指定事件 : 10 : 方形区域 : 2
 * 插件指令：>物体范围动画 : 80 : 指定事件 : 10 : 圆形区域 : 2
 * 插件指令：>物体范围动画 : 80 : 指定事件 : 10 : 十字区域 : 2
 *
 * 1.第一个数字表示动画的id。
 * 2.区域后面的数字表示范围。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 自定义选项
 * 你可以通过插件指令设置主动触发的自定义区域：
 * （注意，冒号左右有空格）
 *
 * 插件指令：>物体范围动画 : 80 : 本事件 : 自定义区域 : 2
 * 插件指令：>物体范围动画 : 80 : 指定事件 : 10 : 自定义区域 : 2
 *
 * 插件指令：>物体范围动画 : 只播放堵路部分
 * 插件指令：>物体范围动画 : 只播放不堵路部分
 * 插件指令：>物体范围动画 : 堵路不堵路都播放
 *
 * 1.第一个数字表示动画的id。
 * 2.区域后面的数字表示自定义区域的id。
 * 3.自定义区域会根据事件的朝向来旋转区域。提示，最好关闭事件的固定朝向。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 上一次触发区域
 * 你可以使用上一次触发的区域，但是必须要相关的插件支持，见插件扩展介绍：
 * （注意，冒号左右有空格）
 *
 * 插件指令：>物体范围动画 : 80 : 上一次触发的固定区域
 *
 * 1.第一个数字表示动画的id。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 修改了内部结构，并添加了上一次区域的使用。
 */
/*~struct~RTriAnim:
 * 
 * @param 标签
 * @desc 只用于方便区分查看的标签，不作用在插件中。
 * @default ==新的自定义区域==
 * 
 * @param 区域图块
 * @type text[]
 * @desc 格式为"x,y",指定图块触发的区域。
 * @default ["0,0"]
 *
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		ERA （Event_Range_Animation）
//		临时全局变量	DrillUp.g_ERA_xxx
//		临时局部变量	this._drill_ERA_xxxx
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		触发可以是从一个点展开一个区域，但是，没有方向。
//		如果已事件为基准的话，事件有方向，就可以规划了。（变量还是不要开太多，开太多会增加复杂度）
//		（计算图块的坐标就非常绕，要注意）
//
//		要播放动画，必须先放置Sprite_Base，用于动画绑定。
//

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_EventRangeAnimation = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_EventRangeAnimation');

	DrillUp.g_ERA_blockType = String(DrillUp.parameters['播放部分类型'] || "不堵路部分") ;
	
	DrillUp.g_ERA_area_max = 40;
	DrillUp.g_ERA_area = [];
	
	for (var i = 0; i < DrillUp.g_ERA_area_max; i++) {
		if( DrillUp.parameters['自定义区域-' + String(i+1) ] != "" ){
			DrillUp.g_ERA_area[i] = JSON.parse(DrillUp.parameters['自定义区域-' + String(i+1) ]);
			var area = JSON.parse( DrillUp.g_ERA_area[i]['区域图块'] );
			DrillUp.g_ERA_area[i]['tiles'] = [];
			for (var j = 0; j < area.length ; j++) {
				var x = Number(area[j].split(',')[0]);
				var y = Number(area[j].split(',')[1]);
				DrillUp.g_ERA_area[i]['tiles'].push({ 'x':x,'y':y });
			}
			//alert(JSON.stringify(DrillUp.g_ERA_area[i]));
		}else{
			DrillUp.g_ERA_area[i] = [];
		}
	}
	
//=============================================================================
// * 插件指令
//=============================================================================
var _drill_ERA_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_ERA_pluginCommand.call(this, command, args);
	if (command === '>物体范围动画') {
		if(args.length == 8){
			var a_id = Number(args[1]);
			var temp2 = String(args[3]);
			var type = String(args[5]);
			var temp4 = Number(args[7]);
			
			if( temp2 == "本事件" ){	//>物体范围动画 : 80 : 本事件 : 圆形区域 : 2
				if( type == "自定义区域"){
					var e_id = this._eventId;
					var self_id = temp4 -1;
					$gameMap.drill_ERA_triggerSelfArea( e_id, self_id, a_id );
				}else{
					var e_id = this._eventId;
					var range = temp4 ;
					$gameMap.drill_ERA_triggerTypeArea( e_id,type,range,a_id );
				}
			}
			
		}
		if(args.length == 10){
			var a_id = Number(args[1]);
			var temp2 = String(args[3]);
			var temp3 = Number(args[5]);
			var type = String(args[7]);
			var temp4 = Number(args[9]);
			
			if( temp2 == "指定事件" ){	//>物体范围动画 : 80 : 指定事件 : 10 : 方形区域 : 2
				if( type == "自定义区域"){	
					var e_id = temp3 ;
					var self_id = temp4 -1;
					$gameMap.drill_ERA_triggerSelfArea( e_id, self_id, a_id);
				}else{
					var e_id = temp3 ;
					var range = temp4 ;
					$gameMap.drill_ERA_triggerTypeArea(e_id,type,range,a_id);
				}
			}
		}
		if(args.length == 4 ){
			var a_id = Number(args[1]);
			var type = String(args[3]);
			if( type == "上一次触发的固定区域" && Imported.Drill_EventRangeTrigger){	
				var last_area = $gameSystem.drill_ERT_getLastArea() || [];
				$gameMap.drill_ERA_triggerArea( last_area, a_id );
			}
		}
		if(args.length == 2){
			var type = String(args[1]);
			if( type == "只播放堵路部分"){	
				$gameSystem._drill_ERA_blockType = "堵路部分";
			}
			if( type == "只播放不堵路部分"){	
				$gameSystem._drill_ERA_blockType = "不堵路部分";
			}
			if( type == "堵路不堵路都播放"){	
				$gameSystem._drill_ERA_blockType = "都包括";
			}
		}
	}
};

//=============================================================================
// ** 存储数据初始化
//=============================================================================
var _drill_ERA_system_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    _drill_ERA_system_initialize.call(this);
	this._drill_ERA_blockType = DrillUp.g_ERA_blockType;
};	

//=============================================================================
// * 范围动画
//=============================================================================
//==============================
// * 范围动画 - 固定区域（事件id、区域类型、区域范围、条件）
//==============================
Game_Map.prototype.drill_ERA_triggerTypeArea = function( e_id, type, range, a_id ) {
	var e = this.event( e_id );
	var cal_area = this.drill_getStaticFormArea(e._x, e._y, type, range, null);
	
	this.drill_ERA_triggerArea( cal_area, a_id );
}
//==============================
// * 范围动画 - 自定义区域（事件id，中心区域，条件）
//==============================
Game_Map.prototype.drill_ERA_triggerSelfArea = function( e_id, self_id, a_id ) {
	var e = this.event( e_id );
	var self_area = DrillUp.g_ERA_area[self_id]['tiles'];
	var cal_area = this.drill_getStaticArea(e._x, e._y, e._direction, self_area, null);
	
	this.drill_ERA_triggerArea( cal_area, a_id );
}
//==============================
// * 范围动画 - 触发区域（实际区域[{x:21,y:31,block:true},{x:22,y:32,block:true}]，动画id，播放范围）
//==============================
Game_Map.prototype.drill_ERA_triggerArea = function( area, a_id ) {
	
	for (var j = 0; j < area.length ; j++) {    	//事件朝向与范围有关系
		var temp_point = area[j];
		
		if($gameSystem._drill_ERA_blockType == "堵路部分"){
			if(temp_point.block == true){
				this.drill_ERA_playAnimInPos(a_id, temp_point.x, temp_point.y);
			}
		}else if($gameSystem._drill_ERA_blockType == "不堵路部分"){
			if(temp_point.block == false){
				this.drill_ERA_playAnimInPos(a_id, temp_point.x, temp_point.y);
			}
		}else{
			this.drill_ERA_playAnimInPos(a_id, temp_point.x, temp_point.y);
		}
	}
}
//==============================
// * 通用 - 判断图块可通行情况
//==============================
Game_Map.prototype.drill_isAnyPassable = function( x, y ) {
	return this.isPassable(x, y, 2)||this.isPassable(x, y, 4)||this.isPassable(x, y, 6)||this.isPassable(x, y, 8);
}


//=============================================================================
// * 	固定区域核心
//		
//		功能：		通过调用主函数，返回设置后的区域集合。
//		可选项：	options暂无设置（固定穿透所有事件） 
//		主函数：	var area = this.drill_getStaticFormArea( c_x, c_y, type, range, options );
//					var area = this.drill_getStaticArea(c_x, c_y, direction, c_area, options );
//=============================================================================
if( typeof(Game_Map.prototype.drill_getStaticArea) == "undefined" ){	//防止重复定义
	
	//==============================
	// * 区域 - 固定形状区域（中心点x，中心点y，区域类型，区域范围，特殊选项）
	//==============================
	Game_Map.prototype.drill_getStaticFormArea = function(c_x, c_y, type, range, options ) {
		var c_area = [];
		
		for (var i = -range; i <= range; i++) {
			for (var j = -range; j <= range; j++) {
				if( type == "方形区域" ){		//deltaX()函数考虑了循环地图的情况（公式：dx <= r，dy <= r）
					if( Math.abs(i) <= range && Math.abs(j) <= range){	
						c_area.push({'x':i,'y':j});
					}
				}
				if( type == "菱形区域" ){		//（公式：dx + dy <= r）
					if( Math.abs(i) + Math.abs(j) <= range ){
						c_area.push({'x':i,'y':j});
					}
				}
				if( type == "圆形区域" ){		//（公式：dx^2 + dy^2 <= r^2）
					if( Math.pow( i ,2) + Math.pow( j ,2) <= Math.pow(range,2) ){	
						c_area.push({'x':i,'y':j});
					}
				}
				if( type == "十字区域" ){		//（公式：dx + dy <= r 且 (dx==0 或 dy==0) ）
					if( Math.abs(i) <= range && Math.abs(j) <= range &&
						( i == 0 || j == 0 ) ){	
						c_area.push({'x':i,'y':j});
					}
				}
			}
		}
		return this.drill_getStaticArea(c_x, c_y, 2, c_area, options );
	}
	
	//==============================
	// * 区域 - 固定方向中心区域（中心点x，中心点y，朝向(默认2/4/6/8)，固定中心区域[{x:0,y:-1},…]，特殊选项）
	//==============================
	Game_Map.prototype.drill_getStaticArea = function(c_x, c_y, direction, c_area, options ) {
		var cal_area = [];	//根据方向变化后的区域
		for (var i = 0; i < c_area.length ; i++) {
			var temp_point = c_area[i];
			if( direction == 2 ){
				var x = this.roundX(c_x + temp_point['x']);	//下
				var y = this.roundY(c_y + temp_point['y']);
			}else if( direction == 4 ){
				var x = this.roundX(c_x - temp_point['y']);	//左
				var y = this.roundY(c_y - temp_point['x']);
			}else if( direction == 6 ){
				var x = this.roundX(c_x + temp_point['y']);	//右
				var y = this.roundY(c_y + temp_point['x']);
			}else{
				var x = this.roundX(c_x - temp_point['x']);	//上
				var y = this.roundY(c_y - temp_point['y']);
			}
			cal_area.push({'x':x,'y':y,'block': !$gameMap.drill_isAnyPassable(x,y) });
		}
		return cal_area;
	}
	//==============================
	// * 通用 - 判断图块可通行情况
	//==============================
	Game_Map.prototype.drill_isAnyPassable = function( x, y ) {
		return this.isPassable(x, y, 2)||this.isPassable(x, y, 4)||this.isPassable(x, y, 6)||this.isPassable(x, y, 8);
	}
}

//=============================================================================
// ** 地图界面
//=============================================================================
//==============================
// * 物体 - 初始化
//==============================
var _drill_ERA_m_initialize = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function() {
	_drill_ERA_m_initialize.call(this);
	this._drill_ERA_datas = [];
}
//==============================
// * 物体 - 播放动画
//==============================
Game_Map.prototype.drill_ERA_playAnimInPos = function( a_id, x, y ) {
	this._drill_ERA_datas.push( {"a_id":a_id, "x":x, "y":y } );
}
//==============================
// * 场景 - 初始化
//==============================
var _drill_ERA_s_initialize = Scene_Map.prototype.initialize;
Scene_Map.prototype.initialize = function() {
	_drill_ERA_s_initialize.call(this);
	this._drill_ERA_animTank = [];
}

//==============================
// * 场景 - 地图ui层
//==============================
var _drill_ERA_s_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_drill_ERA_s_createSpriteset.call(this);	
	if (!this._drill_map_ui_board) {
		this._drill_map_ui_board = new Sprite();
		this.addChild(this._drill_map_ui_board);
	};
};
//==============================
// * 帧刷新
//==============================
var _drill_ERA_s_updateScene = Scene_Map.prototype.updateScene;
Scene_Map.prototype.updateScene = function() {
	_drill_ERA_s_updateScene.call(this);
	this.drill_ERA_updateAnimAdd();
	this.drill_ERA_updateAnimUpdate();
	this.drill_ERA_updateAnimRemove();
}
//==============================
// * 帧刷新 - 添加动画
//==============================
Scene_Map.prototype.drill_ERA_updateAnimAdd = function() {
	
	for(var i=$gameMap._drill_ERA_datas.length-1; i>= 0; i--){
		var data = $gameMap._drill_ERA_datas[i];
		var sprite = new Sprite_Base();
		sprite.origin_x = data.x;
		sprite.origin_y = data.y;
		this._drill_ERA_animTank.push(sprite);
		this._drill_map_ui_board.addChild(sprite);
		
		var animation = $dataAnimations[data.a_id];
		sprite.startAnimation(animation, false, 0);
	
		$gameMap._drill_ERA_datas.splice(i,1);
	}	
}
//==============================
// * 帧刷新 - 刷新动画位置
//==============================
Scene_Map.prototype.drill_ERA_updateAnimUpdate = function() {
	
	for(var i=0; i<this._drill_ERA_animTank.length; i++){
		var sprite = this._drill_ERA_animTank[i];
		sprite.x = $gameMap.tileWidth() * $gameMap.adjustX(sprite.origin_x) + $gameMap.tileWidth()/2 ;
		sprite.y = $gameMap.tileHeight() * $gameMap.adjustY(sprite.origin_y) + $gameMap.tileHeight()/2 ;
	}
	
}
//==============================
// * 帧刷新 - 去除动画
//==============================
Scene_Map.prototype.drill_ERA_updateAnimRemove = function() {
	for(var i=this._drill_ERA_animTank.length-1; i>=0; i--){
		var sprite = this._drill_ERA_animTank[i];
		if( !sprite.isAnimationPlaying() ){
			this._drill_map_ui_board.removeChild(sprite);
			this._drill_ERA_animTank.splice(i,1);
		}
	}
}



