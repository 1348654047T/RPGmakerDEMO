//=============================================================================
// Drill_EventLaserAnimation.js
//=============================================================================

/*:
 * @plugindesc [v1.1]        物体触发 - 可变激光区域 & 播放并行动画
 * @author Drill_up
 * 
 *
 * @param 斜向激光是否穿透两边阻碍
 * @type boolean
 * @on 穿透
 * @off 不穿透
 * @desc 假设向东南方发射激光，东南方无阻挡，但是正东和正南两处都有阻碍，设置不穿透则会被阻挡。
 * @default true
 *
 * @param 动画自适应旋转
 * @type boolean
 * @on 开启
 * @off 关闭
 * @desc 以向东方向为基准，向东南、向南、向西南的八个方向会根据方向而旋转动画。用于直线激光。
 * @default true
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
 * @help  
 * =============================================================================
 * +++ Drill_EventLaserAnimation +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 使得事件能够在 激光范围内 的区域，批量播放并行动画。
 * 向前发射的一条光线区域，激光范围会被阻碍物阻挡。
 * 只播放动画。
 * 更多详细介绍，去看看"关于物体触发.docx"。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.以指定的事件为中心，以发射激光的区域批量播放动画。
 * 2.你可以播放无限时间的动画，但是只要离开地图或者读档，动画就消失。
 * 3.播放动画分为"堵路"、"不堵路"、"全都"三种显示方式。
 *   设置"全都"，才是触发的实际全部区域。
 *  （动画与实际触发可以不完全一致，你需要留意该设置）
 * 4.注意，设置播放动画 与 触发区域 完全独立。
 *   可能会出现第一次触发区域，与延时后执行的播放动画的区域不一致的情况。
 *   你可以通过使用上一次的触发区域来避免。
 * 
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 插件可以单独使用，通过与下面组合，可以有更多功能：
 * 被扩展：
 *   - Drill_EventLaserTrigger 物体触发 - 可变激光区域 & 条件
 *     如果使用了目标插件，插件指令的"上一次触发的激光区域"可以生效。
 *   - Drill_EventThrough 物体 - 事件穿透关系
 *     如果使用了目标插件，该插件的动画就能支持穿透设置了。
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件 - 范围播放
 * 你可以通过插件指令设置播放动画的条件。
 * （注意，冒号左右有空格）
 *
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 东 : 2
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 南 : 2
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 西 : 2
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 北 : 2
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 东南 : 2
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 东北 : 2
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 西南 : 2
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 西北 : 2
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 前 : 2
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 后 : 2
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 左 : 2
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 右 : 2
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 左前方 : 2
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 左后方 : 2
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 右前方 : 2
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 右后方 : 2
 * 插件指令：>物体范围动画 : 81 : 指定事件 : 10 : 可变激光区域 : 东 : 2
 * 插件指令：>物体范围动画 : 81 : 指定事件 : 10 : 可变激光区域 : 南 : 2
 * 插件指令：>物体范围动画 : 81 : 指定事件(变量) : 10 : 可变激光区域 : 东 : 2
 * 插件指令：>物体范围动画 : 81 : 指定事件(变量) : 10 : 可变激光区域 : 南 : 2
 *
 * 1.第一个数字表示动画的id。
 * 2.区域后面的数字表示激光长度。
 * 3.如果你的激光方向与事件的方向有关，就用"前后左右"，如果是固定跟地图
 *   一样，就用"东南西北"。
 * 4.你设置指定 变量值 对应的事件id，来播放动画。
 *   （通过变量可以操作 事件复制器 复制的新事件）
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 动画设置
 * 你可以写这样的插件指令：
 * 
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 东,南,西,北 : 2
 * 插件指令：>物体范围动画 : 81 : 本事件 : 可变激光区域 : 东南,东北 : 2
 * 
 * 插件指令：>物体范围动画 : 开启动画自适应旋转
 * 插件指令：>物体范围动画 : 关闭动画自适应旋转
 *
 * 插件指令：>物体范围动画 : 只播放堵路部分
 * 插件指令：>物体范围动画 : 只播放不堵路部分
 * 插件指令：>物体范围动画 : 堵路不堵路都播放
 *
 * 1.方向用逗号隔开，可以表示多个方向。
 * 2.堵路设置和自适应设置变化后永久有效，要记得变化后归位。
 * 3.动画自适应旋转会根据你插件指令的方向而调整角度。
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定 - 事件穿透
 * 你可以使得播放的动画能穿透某些类型的事件，但是必须要相关的插件支持，见插件扩展介绍：
 * 
 * 插件指令：>物体范围动画 : 设置事件穿透 : 炸弹人,炸弹人道具
 * 插件指令：>物体范围动画 : 关闭全部事件穿透
 *
 * 1.你可以用逗号隔开，设置多个可穿透的标签。
 * 2.指令结束后要习惯性执行关闭穿透的设置。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 上一次触发区域
 * 你可以使用上一次触发的区域，但是必须要相关的插件支持，见插件扩展介绍：
 * （注意，冒号左右有空格）
 *
 * 插件指令：>物体范围动画 : 81 : 上一次触发的激光区域
 * 插件指令：>物体范围动画 : 81 : 上一次事件的激光区域 : 本事件
 * 插件指令：>物体范围动画 : 81 : 上一次事件的激光区域 : 10
 * 插件指令：>物体范围动画 : 81 : 读取激光区域 : 10
 *
 * 1.第一个数字表示动画的id，第三条末尾的数字表示事件id。
 * 2.上一次触发，指 任意事件 的上一次。
 *   上一次事件，指 指定事件 的上一次。
 * 3.留意插件指令里面语句，语句多了容易搞混淆，最好直接复制粘贴。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 添加了读取上一次事件，读取保存的区域的功能。
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		ELA （Event_Laser_Animation）
//		临时全局变量	DrillUp.g_ELA_xxx
//		临时局部变量	this._drill_ELA_xxxx
//		存储数据变量	$gameSystem._drill_ELA_autoRotate
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		激光部分完全与固定区域不同，相当于重新写了一大堆核心函数。
//		另外，东南西北八个方向超级难对应……
//		地区转换是一个封装相对比较全的核，用于后期ai判定调用。
//		（一个核心超级难提炼出来，太多东西藕断丝连。）
//
//		要播放动画，必须先放置Sprite_Base，用于动画绑定。
//		Sprite_Base旋转并不能影响动画，需要setup之后，把动画Sprite_Animation取出来后再旋转。

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_EventLaserAnimation = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_EventLaserAnimation');

	DrillUp.g_ELA_diagonalThrough = String(DrillUp.parameters['斜向激光是否穿透两边阻碍'] || "true") === "true";
	DrillUp.g_ELA_autoRotate = String(DrillUp.parameters['动画自适应旋转'] || "true") === "true";
	DrillUp.g_ELA_blockType = String(DrillUp.parameters['播放部分类型'] || "不堵路部分") ;
	
//=============================================================================
// * 插件指令
//=============================================================================
var _drill_ELA_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_ELA_pluginCommand.call(this, command, args);
	if (command === '>物体范围动画') {
		if(args.length == 10){
			var a_id = Number(args[1]);
			var temp2 = String(args[3]);
			var type = String(args[5]);
			var temp3 = String(args[7]);
			var temp4 = Number(args[9]);
			
			if( temp2 == "本事件" && type == "可变激光区域" ){	//>物体范围动画 : 80 : 本事件 : 可变激光区域 : 东 : 2
				var dirs = temp3.split(/[,，]/);
				var range = temp4;
				$gameMap.drill_ELA_laserTrigger( this._eventId, dirs, range, a_id );
			}
			
		}
		if(args.length == 12){
			var a_id = Number(args[1]);
			var temp1 = String(args[3]);
			var e_id = Number(args[5]);
			var type = String(args[7]);
			var temp3 = String(args[9]);
			var temp4 = Number(args[11]);
			
			if( temp1 == "指定事件" && type == "可变激光区域"  ){	//>物体范围动画 : 80 : 指定事件 : 10 : 可变激光区域 : 东 : 2
				var dirs = temp3.split(/[,，]/);
				var range = temp4;
				$gameMap.drill_ELA_laserTrigger( e_id, dirs, range, a_id );
			}
			if( temp1 == "指定事件(变量)" && type == "可变激光区域"  ){
				var dirs = temp3.split(/[,，]/);
				var range = temp4;
				$gameMap.drill_ELA_laserTrigger( $gameVariables.value(e_id), dirs, range, a_id );
			}
		}
		
		if(args.length == 4 ){
			var a_id = Number(args[1]);
			var type = String(args[3]);
			if( type == "上一次触发的激光区域" && Imported.Drill_EventLaserTrigger){	
				var last_area = $gameSystem.drill_ELT_getLastArea() || [];
				$gameMap.drill_ELA_triggerArea( last_area, a_id );
			}
		}
		if(args.length == 6 ){
			var a_id = Number(args[1]);
			var type = String(args[3]);
			var temp1 = String(args[5]);
			if( type == "上一次事件的激光区域" && Imported.Drill_EventLaserTrigger){	
				if( temp1 == "本事件"){
					temp1 = this._eventId;
				}
				var area = $gameMap.event(Number(temp1))._ELT_area || [];
				$gameMap.drill_ELA_triggerArea( area, a_id );
			}
			if( type == "读取激光区域" && Imported.Drill_EventLaserTrigger){	
				var area = $gameSystem.drill_ELT_loadArea(Number(temp1)) || [];
				$gameMap.drill_ELA_triggerArea( area, a_id );
			}
		}
		
		if(args.length == 2){
			var type = String(args[1]);
			if( type == "开启动画自适应旋转"){	
				$gameSystem._drill_ELA_autoRotate = true;
			}
			if( type == "关闭动画自适应旋转"){	
				$gameSystem._drill_ELA_autoRotate = false;
			}
			if( type == "只播放堵路部分"){	
				$gameSystem._drill_ELA_blockType = "堵路部分";
			}
			if( type == "只播放不堵路部分"){	
				$gameSystem._drill_ELA_blockType = "不堵路部分";
			}
			if( type == "堵路不堵路都播放"){	
				$gameSystem._drill_ELA_blockType = "都包括";
			}
			if( type == "关闭全部事件穿透"){	
				$gameSystem._drill_ELA_eventThrough = [];
			}
		}
		if(args.length == 4){
			var type = String(args[1]);
			var temp1 = String(args[3]);
			if( type == "设置事件穿透"){	
				$gameSystem._drill_ELA_eventThrough = temp1.split(/[,，]/);
			}
		}
	}
};

//=============================================================================
// ** 存储数据初始化
//=============================================================================
var _drill_ELA_system_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    _drill_ELA_system_initialize.call(this);
	this._drill_ELA_autoRotate = DrillUp.g_ELA_autoRotate;
	this._drill_ELA_blockType = DrillUp.g_ELA_blockType;
	this._drill_ELA_eventThrough = [];
};	

//=============================================================================
// ** 事件触发
//=============================================================================
//==============================
// * 事件触发 - 总流程（ 事件id， 方向集， 范围， 动画id ）
//==============================
Game_Map.prototype.drill_ELA_laserTrigger = function(e_id, dirs, range, a_id ) {
	var e = this.event(e_id);
	var options = {};
	options["is_two_block"] = !DrillUp.g_ELA_diagonalThrough;	//斜角穿透
	options["through"] = $gameSystem._drill_ELA_eventThrough;	//事件穿透关系
	var area = this.drill_getLaserAreaWithADir(e._x, e._y, e._direction , dirs, range, options);
	this.drill_ELA_triggerArea(area, a_id );
}

//==============================
// * 事件触发 - 触发区域（实际区域[{x:21,y:31,block:true,angle:90},……]，动画id，播放范围）
//==============================
Game_Map.prototype.drill_ELA_triggerArea = function( area, a_id ) {
	//alert(JSON.stringify(area));
	
	for (var j = 0; j < area.length ; j++) {    	//事件朝向与范围有关系
		var temp = area[j];
		
		if($gameSystem._drill_ELA_blockType == "堵路部分"){
			if(temp.block == true){
				this.drill_ELA_playAnimInPos(a_id, temp.x, temp.y, temp.angle);
			}
		}else if($gameSystem._drill_ELA_blockType == "不堵路部分"){
			if(temp.block == false){
				this.drill_ELA_playAnimInPos(a_id, temp.x, temp.y, temp.angle);
			}
		}else{
			this.drill_ELA_playAnimInPos(a_id, temp.x, temp.y, temp.angle);
		}
	}
}


//=============================================================================
// * 	激光区域核心
//		
//		功能：		通过调用主函数，返回发射激光后的区域集合。
//		可选项：	options中有多个可选设置：
//					"is_two_block":true（斜角穿透判定） "through":[]（穿透标签） 
//		主函数：	var area = this.drill_getLaserAreaWithADir( c_x, c_y, a_dir, dirs, range, options  );
//					var area = this.drill_getLaserArea(c_x, c_y, new_dirs, range, options );
//=============================================================================
if( typeof(Game_Map.prototype.drill_getLaserArea) == "undefined" ){	//防止重复定义

	//==============================
	// * 区域 - 活动角色激光区域（ 位置x，位置y， 朝向(2/4/6/8)，激光方向集(东西南北+前后左右 方向)，范围，特殊选项）
	//==============================
	Game_Map.prototype.drill_getLaserAreaWithADir = function(c_x, c_y, a_dir, dirs, range, options ) {
		var new_dirs = [];
		if( dirs.contains("东") ){ new_dirs.push("东");}
		if( dirs.contains("南") ){ new_dirs.push("南");}
		if( dirs.contains("西") ){ new_dirs.push("西");}
		if( dirs.contains("北") ){ new_dirs.push("北");}
		if( dirs.contains("东南") ){ new_dirs.push("东南");}
		if( dirs.contains("东北") ){ new_dirs.push("东北");}
		if( dirs.contains("西南") ){ new_dirs.push("西南");}
		if( dirs.contains("西北") ){ new_dirs.push("西北");}
		
		if( a_dir == 2 ){//下
			if( dirs.contains("前") ){ new_dirs.push("南");}
			if( dirs.contains("后") ){ new_dirs.push("北");}
			if( dirs.contains("左") ){ new_dirs.push("东");}
			if( dirs.contains("右") ){ new_dirs.push("西");}
			if( dirs.contains("左前方") ){ new_dirs.push("东南");}
			if( dirs.contains("右前方") ){ new_dirs.push("西南");}
			if( dirs.contains("左后方") ){ new_dirs.push("东北");}
			if( dirs.contains("右后方") ){ new_dirs.push("西北");}
		}
		if( a_dir == 4 ){//左
			if( dirs.contains("前") ){ new_dirs.push("西");}
			if( dirs.contains("后") ){ new_dirs.push("东");}
			if( dirs.contains("左") ){ new_dirs.push("南");}
			if( dirs.contains("右") ){ new_dirs.push("北");}
			if( dirs.contains("左前方") ){ new_dirs.push("西南");}
			if( dirs.contains("右前方") ){ new_dirs.push("西北");}
			if( dirs.contains("左后方") ){ new_dirs.push("东南");}
			if( dirs.contains("右后方") ){ new_dirs.push("东北");}
		}
		if( a_dir == 6 ){//右
			if( dirs.contains("前") ){ new_dirs.push("东");}
			if( dirs.contains("后") ){ new_dirs.push("西");}
			if( dirs.contains("左") ){ new_dirs.push("北");}
			if( dirs.contains("右") ){ new_dirs.push("南");}
			if( dirs.contains("左前方") ){ new_dirs.push("东北");}
			if( dirs.contains("右前方") ){ new_dirs.push("东南");}
			if( dirs.contains("左后方") ){ new_dirs.push("西北");}
			if( dirs.contains("右后方") ){ new_dirs.push("西南");}
		}
		if( a_dir == 8 ){//上
			if( dirs.contains("前") ){ new_dirs.push("北");}
			if( dirs.contains("后") ){ new_dirs.push("南");}
			if( dirs.contains("左") ){ new_dirs.push("西");}
			if( dirs.contains("右") ){ new_dirs.push("东");}
			if( dirs.contains("左前方") ){ new_dirs.push("西北");}
			if( dirs.contains("右前方") ){ new_dirs.push("东北");}
			if( dirs.contains("左后方") ){ new_dirs.push("西南");}
			if( dirs.contains("右后方") ){ new_dirs.push("东南");}
		}
		return this.drill_getLaserArea(c_x, c_y, new_dirs, range, options );
	}
	//==============================
	// * 区域 - 固定方向激光区域（中心点x，中心点y，激光方向集(东西南北方向)，范围， 特殊选项）
	//==============================
	Game_Map.prototype.drill_getLaserArea = function( c_x, c_y, dirs, range, options ) {
		var cal_area = [];
		cal_area.push({'x':c_x,'y':c_y,'block': false });
		
		if( dirs.contains("东南") ){
			var area = this.drill_getSingleDiagonallyLaserArea( c_x, c_y, 6, 2, 135, range, options );
			cal_area = cal_area.concat(area);
		}
		if( dirs.contains("东北") ){
			var area = this.drill_getSingleDiagonallyLaserArea( c_x, c_y, 6, 8, 45, range, options );
			cal_area = cal_area.concat(area);
		}
		if( dirs.contains("西北") ){
			var area = this.drill_getSingleDiagonallyLaserArea( c_x, c_y, 4, 8, 315, range, options );
			cal_area = cal_area.concat(area);
		}
		if( dirs.contains("西南") ){
			var area = this.drill_getSingleDiagonallyLaserArea( c_x, c_y, 4, 2, 225, range, options );
			cal_area = cal_area.concat(area);
		}
		if( dirs.contains("东") ){
			var area = this.drill_getSingleLineLaserArea( c_x, c_y, 6, 90, range, options );
			cal_area = cal_area.concat(area);
		}
		if( dirs.contains("南") ){
			var area = this.drill_getSingleLineLaserArea( c_x, c_y, 2, 180, range, options );
			cal_area = cal_area.concat(area);
		}
		if( dirs.contains("西") ){
			var area = this.drill_getSingleLineLaserArea( c_x, c_y, 4, 270, range, options );
			cal_area = cal_area.concat(area);
		}
		if( dirs.contains("北") ){
			var area = this.drill_getSingleLineLaserArea( c_x, c_y, 8, 360, range, options );
			cal_area = cal_area.concat(area);
		}
		
		return cal_area;
	}
	//==============================
	// * 区域 - 单方向斜向激光区域（中心点x，中心点y，水平方向(4/6)，垂直方向(2/8)，自适应角度，范围，特殊选项）
	//==============================
	Game_Map.prototype.drill_getSingleDiagonallyLaserArea = function( c_x, c_y, dir_h, dir_v, angle, range, options ) {
		var cal_area = [];
		var laser = new Game_CharacterBase();
		laser._x = c_x;
		laser._y = c_y;
		if( options.through && options.through.length != 0 ){	//设置穿透
			laser._drill_ETh_char = {};
			for(var k=0; k<options.through.length; k++){ laser._drill_ETh_char[ String(options.through[k]) ] = true;  }
		}
		
		for (var i = 0; i < range ; i++) {
			var x = this.roundXWithDirection( laser._x, dir_h );
			var y = this.roundYWithDirection( laser._y, dir_v );
			if( laser.drill_canPassDiagonally(laser._x, laser._y, dir_h, dir_v, options.is_two_block) ){
				laser._x = x;
				laser._y = y;
				cal_area.push({'x':x ,'y':y ,'block': false, 'angle':angle });
			}else{
				cal_area.push({'x':x ,'y':y ,'block': true, 'angle':angle });
				return cal_area;
			}
		}
		return cal_area;
	}
	//==============================
	// * 区域 - 单方向直线激光区域（中心点x，中心点y，方向(2/4/6/8)，自适应角度，范围，特殊选项）
	//==============================
	Game_Map.prototype.drill_getSingleLineLaserArea = function( c_x, c_y, dir, angle, range, options ) {
		var cal_area = [];
		var laser = new Game_CharacterBase();
		laser._x = c_x;
		laser._y = c_y;
		if( options.through && options.through.length != 0 ){	//设置穿透
			laser._drill_ETh_char = {};
			for(var k=0; k<options.through.length; k++){ laser._drill_ETh_char[ String(options.through[k]) ] = true;  }
		}
		
		for (var i = 0; i < range ; i++) {
			var x = this.roundXWithDirection( laser._x, dir );
			var y = this.roundYWithDirection( laser._y, dir );
			if( laser.canPass(laser._x, laser._y, dir) ){
				laser._x = x;
				laser._y = y;
				cal_area.push({'x':x ,'y':y ,'block': false, 'angle':angle });
			}else{
				cal_area.push({'x':x ,'y':y ,'block': true, 'angle':angle });
				return cal_area;
			}
		}
		return cal_area;
	}
	//==============================
	// * 通行 - 穿透判断斜向可通行区域
	//==============================
	Game_CharacterBase.prototype.drill_canPassDiagonally = function(x, y, horz, vert, is_two_block ) {
		if( is_two_block == true ){
			return this.canPassDiagonally(x, y, horz, vert);
		}else{
			var x2 = $gameMap.roundXWithDirection(x, horz);
			var y2 = $gameMap.roundYWithDirection(y, vert);
			if (!$gameMap.isValid(x2, y2)) {
				return false;
			}
			if (!$gameMap.drill_isAnyPassable( x2, y2 )) {
				return false;
			}
			if (this.isCollidedWithCharacters(x2, y2)) {
				return false;
			}
			return true;
		}
	};
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
var _drill_ELA_m_initialize = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function() {
	_drill_ELA_m_initialize.call(this);
	this._drill_ELA_datas = [];
}
//==============================
// * 物体 - 播放动画
//==============================
Game_Map.prototype.drill_ELA_playAnimInPos = function( a_id, x, y, angle ) {
	this._drill_ELA_datas.push( {"a_id":a_id, "x":x, "y":y,"angle":angle } );
}

//==============================
// * 场景 - 初始化
//==============================
var _drill_ELA_s_initialize = Scene_Map.prototype.initialize;
Scene_Map.prototype.initialize = function() {
	_drill_ELA_s_initialize.call(this);
	this._drill_ELA_animTank = [];
}
//==============================
// * 场景 - 地图ui层
//==============================
var _drill_ELA_s_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_drill_ELA_s_createSpriteset.call(this);	
	if (!this._drill_map_ui_board) {
		this._drill_map_ui_board = new Sprite();
		this.addChild(this._drill_map_ui_board);
	};
};
//==============================
// * 帧刷新
//==============================
var _drill_ELA_s_updateScene = Scene_Map.prototype.updateScene;
Scene_Map.prototype.updateScene = function() {
	_drill_ELA_s_updateScene.call(this);
	this.drill_ELA_updateAnimAdd();
	this.drill_ELA_updateAnimUpdate();
	this.drill_ELA_updateAnimRemove();
}
//==============================
// * 帧刷新 - 添加动画
//==============================
Scene_Map.prototype.drill_ELA_updateAnimAdd = function() {
	
	for(var i=$gameMap._drill_ELA_datas.length-1; i>= 0; i--){
		var data = $gameMap._drill_ELA_datas[i];
		var sprite = new Sprite_Base();
		sprite.origin_x = data.x;
		sprite.origin_y = data.y;
		sprite.anchor.x = 0.5;
		sprite.anchor.y = 0.5;
		this._drill_ELA_animTank.push(sprite);
		this._drill_map_ui_board.addChild(sprite);
		
		var animation = $dataAnimations[data.a_id];
		sprite.startAnimation(animation, false, 0);
		var last_a_sprite = sprite._animationSprites[sprite._animationSprites.length-1];
		if(data.angle && $gameSystem._drill_ELA_autoRotate == true){
			last_a_sprite.rotation = (data.angle-90) / 180 * Math.PI;
		}
	
		$gameMap._drill_ELA_datas.splice(i,1);
	}	
}
//==============================
// * 帧刷新 - 刷新动画位置
//==============================
Scene_Map.prototype.drill_ELA_updateAnimUpdate = function() {
	
	for(var i=0; i<this._drill_ELA_animTank.length; i++){
		var sprite = this._drill_ELA_animTank[i];
		sprite.x = $gameMap.tileWidth() * $gameMap.adjustX(sprite.origin_x) + $gameMap.tileWidth()/2 ;
		sprite.y = $gameMap.tileHeight() * $gameMap.adjustY(sprite.origin_y) + $gameMap.tileHeight()/2 ;
	}
	
}
//==============================
// * 帧刷新 - 去除动画
//==============================
Scene_Map.prototype.drill_ELA_updateAnimRemove = function() {
	for(var i=this._drill_ELA_animTank.length-1; i>=0; i--){
		var sprite = this._drill_ELA_animTank[i];
		if( !sprite.isAnimationPlaying() ){
			this._drill_map_ui_board.removeChild(sprite);
			this._drill_ELA_animTank.splice(i,1);
		}
	}
}



