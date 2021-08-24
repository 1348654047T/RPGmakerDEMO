//=============================================================================
// Drill_EnemyTextColor.js
//=============================================================================

/*:
 * @plugindesc [v1.7]        敌人 - 敌人文本颜色
 * @author Drill_up
 * 
 * @help  
 * =============================================================================
 * +++ Drill_EnemyTextColor +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 你可以任意设置敌人的文本颜色。
 * 如果想了解高级颜色设置方法，去看看"关于文本颜色.docx"。
 * ★★必须放在插件 MOG_BattleCursor 敌人指针 的后面★★
 * ★★必须放在插件 MOG_BossHP boss生命固定框 的后面★★
 * （目前不支持敌人图鉴变色）
 *
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 插件可以单独使用，修改敌人的文本颜色。
 * 作用于：
 *   - Drill_WindowLog 窗口提示消息 
 *     结合目标插件，可以使得战斗中的消息提示敌人名字变色。
 *    （消息窗口只支持数字颜色）
 *   - MOG_BattleCursor 敌人指针
 *     可以使得目标插件的指针文本变色。
 *   - MOG_BossHP boss生命固定框
 *     可以使得目标插件的boss框的文本变色。
 *   - Drill_GaugeForBoss 多层boss生命固定框 ★★[v1.1]及以上★★
 *     可以使得目标插件的boss框的文本变色。
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件：
 * 在要修改颜色的敌人设置中，添加注释即可：
 *
 * <颜色:1>
 * <颜色:#FF4444>
 *
 * <高级颜色:1>
 *
 * 颜色后面的数字1对应你配置中的第1个颜色。你也可以直接贴颜色代码。
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定 - 敌人颜色：
 * 如果你要改变敌人颜色，那么可以使用下面插件指令：
 * （冒号两边都有一个空格）
 * 
 * 插件指令（普通）：>文本颜色 : B : 敌人普通 : A1
 * 插件指令（高级）：>文本颜色 : B : 敌人高级 : A2
 * 
 * 参数A1：颜色编号
 *         也可以直接是颜色代码#ffffff（但是消息窗口只支持数字颜色）
 * 参数A2：高级颜色编号
 *         对应配置的高级渐变色的编号。
 * 参数B： 敌人id号
 *
 * 高级颜色和普通颜色设置可以相互覆盖，修改后永久有效。
 * 
 * 示例：
 * 插件指令：>文本颜色 : 1 : 敌人普通 : 1
 * 插件指令：>文本颜色 : 1 : 敌人普通 : #FF4444
 * （修改 1号敌人 为 颜色1红色，注意消息窗口只支持数字颜色）
 * 插件指令：>文本颜色 : 1 : 敌人普通 : #FFFFFF
 * （1号敌人文本变白色）
 * 插件指令：>文本颜色 : 5 : 敌人高级 : 1
 * （修改 5号敌人 为 高级颜色1白红渐变）
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 敌人颜色变量：
 * 如果你要使得与相关的变量进行绑定，使用插件指令：
 * （冒号两边都有一个空格）
 *
 * 插件指令（普通）：>变量文本颜色 : D : 敌人普通 : C1
 * 插件指令（高级）：>变量文本颜色 : D : 敌人高级 : C2
 * 
 * 参数C1：颜色变量编号
 * 参数C2：高级颜色变量编号
 * 参数D： 物品变量id号
 *
 * 示例：
 * >变量文本颜色 : 4 : 敌人普通 : 5
 * （修改编号为 变量4值 对应的敌人id，为 变量5值 对应的颜色编号）
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定 - 对话颜色设置：
 * rmmv中有默认28种颜色设置，即 \c[0] - \c[27]。
 * 使用该插件后，你可以调整自定义颜色和高级颜色：
 *
 *   \c[101] 对应 颜色1
 *   \c[102] 对应 颜色2
 *   ……
 *   \c[201] 对应 高级颜色1
 *   \c[202] 对应 高级颜色2
 *   ……
 *
 * 如果你用了角色、物品颜色插件，请保持颜色配置和高级颜色配置一致。
 * 虽然这里不冲突，但是如果插件配置的颜色不一样，就容易搞混淆。
 *
 * -----------------------------------------------------------------------------
 * ----关于颜色：
 * 默认配置是：
 *  #FF4444 赤   <颜色:1>
 *  #FF784C 橙   <颜色:2>
 *  #FFFF40 黄   <颜色:3>
 *  #80FF80 绿   <颜色:4>
 *  #98F5FF 青   <颜色:5>
 *  #40C0F0 蓝   <颜色:6>
 *  #8080FF 紫   <颜色:7>
 *  #FF69B4 粉   <颜色:8>
 *  #8B4C39 棕   <颜色:9>
 *  #BEBEBE 亮灰 <颜色:10>
 *  #797979 暗灰 <颜色:11>
 *  #FFFFFF 白   <颜色:12>
 *  #000000 黑   <颜色:13>
 *
 * 如果你想配置更完美的颜色，推荐去这个网址找到你想要的颜色代码：
 * http://tool.oschina.net/commons?type=3
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 使得消息窗口中的颜色也会变化。
 * [v1.2]
 * 使得你可以通过插件指令来修改敌人的文本颜色。
 * [v1.3]
 * 使得你可以设置高级颜色渐变，并可以在对话窗口中使用高级颜色。
 * [v1.4]
 * 规范修改了插件指令设置。
 * [v1.5]
 * 优化了高级颜色在某些特殊情况下不起效果的问题。
 * [v1.6]
 * 添加了与高级bosshp插件相互扩展的功能。
 * [v1.7]
 * 与高级bosshp插件一同更新。
 *
 *
 *
 * @param 颜色配置
 * @type text[]
 * @desc 自定义你的配置颜色。
 * @default ["#FF4444","#FF784C","#FFFF40","#80FF80","#98F5FF","#40C0F0","#8080FF","#FF69B4","#8B4C39","#BEBEBE","#797979","#FFFFFF","#000000"]
 *
 * @param 高级颜色配置
 * @type struct<GradientColor>[]
 * @desc 自定义你想要的颜色渐变。
 * @default ["{\"标记\":\"==白红纵向渐变==\",\"渐变方向\":\"0\",\"渐变节点-1\":\"0.00\",\"渐变节点颜色-1\":\"#FFFFFF\",\"渐变节点-2\":\"1.00\",\"渐变节点颜色-2\":\"#FF3333\",\"渐变节点-3\":\"\",\"渐变节点颜色-3\":\"\",\"渐变节点-4\":\"\",\"渐变节点颜色-4\":\"\",\"渐变节点-5\":\"\",\"渐变节点颜色-5\":\"\",\"渐变节点-6\":\"\",\"渐变节点颜色-6\":\"\"}","{\"标记\":\"==白橙纵向渐变==\",\"渐变方向\":\"0\",\"渐变节点-1\":\"0.00\",\"渐变节点颜色-1\":\"#FFFFFF\",\"渐变节点-2\":\"1.00\",\"渐变节点颜色-2\":\"#FF573C\",\"渐变节点-3\":\"\",\"渐变节点颜色-3\":\"\",\"渐变节点-4\":\"\",\"渐变节点颜色-4\":\"\",\"渐变节点-5\":\"\",\"渐变节点颜色-5\":\"\",\"渐变节点-6\":\"\",\"渐变节点颜色-6\":\"\"}","{\"标记\":\"==白黄纵向渐变==\",\"渐变方向\":\"0\",\"渐变节点-1\":\"0.00\",\"渐变节点颜色-1\":\"#FFFFFF\",\"渐变节点-2\":\"1.00\",\"渐变节点颜色-2\":\"#FFFF20\",\"渐变节点-3\":\"\",\"渐变节点颜色-3\":\"\",\"渐变节点-4\":\"\",\"渐变节点颜色-4\":\"\",\"渐变节点-5\":\"\",\"渐变节点颜色-5\":\"\",\"渐变节点-6\":\"\",\"渐变节点颜色-6\":\"\"}","{\"标记\":\"==白绿纵向渐变==\",\"渐变方向\":\"0\",\"渐变节点-1\":\"0.00\",\"渐变节点颜色-1\":\"#FFFFFF\",\"渐变节点-2\":\"1.00\",\"渐变节点颜色-2\":\"#27FF27\",\"渐变节点-3\":\"\",\"渐变节点颜色-3\":\"\",\"渐变节点-4\":\"\",\"渐变节点颜色-4\":\"\",\"渐变节点-5\":\"\",\"渐变节点颜色-5\":\"\",\"渐变节点-6\":\"\",\"渐变节点颜色-6\":\"\"}","{\"标记\":\"==白青纵向渐变==\",\"渐变方向\":\"0\",\"渐变节点-1\":\"0.00\",\"渐变节点颜色-1\":\"#FFFFFF\",\"渐变节点-2\":\"1.00\",\"渐变节点颜色-2\":\"#88EDFF\",\"渐变节点-3\":\"\",\"渐变节点颜色-3\":\"\",\"渐变节点-4\":\"\",\"渐变节点颜色-4\":\"\",\"渐变节点-5\":\"\",\"渐变节点颜色-5\":\"\",\"渐变节点-6\":\"\",\"渐变节点颜色-6\":\"\"}","{\"标记\":\"==白蓝纵向渐变==\",\"渐变方向\":\"0\",\"渐变节点-1\":\"0.00\",\"渐变节点颜色-1\":\"#FFFFFF\",\"渐变节点-2\":\"1.00\",\"渐变节点颜色-2\":\"#21A9F4\",\"渐变节点-3\":\"\",\"渐变节点颜色-3\":\"\",\"渐变节点-4\":\"\",\"渐变节点颜色-4\":\"\",\"渐变节点-5\":\"\",\"渐变节点颜色-5\":\"\",\"渐变节点-6\":\"\",\"渐变节点颜色-6\":\"\"}","{\"标记\":\"==白紫纵向渐变==\",\"渐变方向\":\"0\",\"渐变节点-1\":\"0.00\",\"渐变节点颜色-1\":\"#FFFFFF\",\"渐变节点-2\":\"1.00\",\"渐变节点颜色-2\":\"#8330FF\",\"渐变节点-3\":\"\",\"渐变节点颜色-3\":\"\",\"渐变节点-4\":\"\",\"渐变节点颜色-4\":\"\",\"渐变节点-5\":\"\",\"渐变节点颜色-5\":\"\",\"渐变节点-6\":\"\",\"渐变节点颜色-6\":\"\"}","{\"标记\":\"==白粉纵向渐变==\",\"渐变方向\":\"0\",\"渐变节点-1\":\"0.00\",\"渐变节点颜色-1\":\"#FFFFFF\",\"渐变节点-2\":\"1.00\",\"渐变节点颜色-2\":\"#FF69B4\",\"渐变节点-3\":\"\",\"渐变节点颜色-3\":\"\",\"渐变节点-4\":\"\",\"渐变节点颜色-4\":\"\",\"渐变节点-5\":\"\",\"渐变节点颜色-5\":\"\",\"渐变节点-6\":\"\",\"渐变节点颜色-6\":\"\"}","{\"标记\":\"==白棕纵向渐变==\",\"渐变方向\":\"0\",\"渐变节点-1\":\"0.00\",\"渐变节点颜色-1\":\"#FFFFFF\",\"渐变节点-2\":\"1.00\",\"渐变节点颜色-2\":\"#7B3C29\",\"渐变节点-3\":\"\",\"渐变节点颜色-3\":\"\",\"渐变节点-4\":\"\",\"渐变节点颜色-4\":\"\",\"渐变节点-5\":\"\",\"渐变节点颜色-5\":\"\",\"渐变节点-6\":\"\",\"渐变节点颜色-6\":\"\"}","{\"标记\":\"==白灰纵向渐变==\",\"渐变方向\":\"0\",\"渐变节点-1\":\"0.00\",\"渐变节点颜色-1\":\"#FFFFFF\",\"渐变节点-2\":\"1.00\",\"渐变节点颜色-2\":\"#797979\",\"渐变节点-3\":\"\",\"渐变节点颜色-3\":\"\",\"渐变节点-4\":\"\",\"渐变节点颜色-4\":\"\",\"渐变节点-5\":\"\",\"渐变节点颜色-5\":\"\",\"渐变节点-6\":\"\",\"渐变节点颜色-6\":\"\"}","{\"标记\":\"--白红横向渐变--\",\"渐变方向\":\"90\",\"渐变节点-1\":\"0.00\",\"渐变节点颜色-1\":\"#FFFFFF\",\"渐变节点-2\":\"1.00\",\"渐变节点颜色-2\":\"#FF2222\",\"渐变节点-3\":\"\",\"渐变节点颜色-3\":\"\",\"渐变节点-4\":\"\",\"渐变节点颜色-4\":\"\",\"渐变节点-5\":\"\",\"渐变节点颜色-5\":\"\",\"渐变节点-6\":\"\",\"渐变节点颜色-6\":\"\"}","{\"标记\":\"--白绿横向渐变--\",\"渐变方向\":\"90\",\"渐变节点-1\":\"0.00\",\"渐变节点颜色-1\":\"#FFFFFF\",\"渐变节点-2\":\"1.00\",\"渐变节点颜色-2\":\"#40FF40\",\"渐变节点-3\":\"\",\"渐变节点颜色-3\":\"\",\"渐变节点-4\":\"\",\"渐变节点颜色-4\":\"\",\"渐变节点-5\":\"\",\"渐变节点颜色-5\":\"\",\"渐变节点-6\":\"\",\"渐变节点颜色-6\":\"\"}","{\"标记\":\"--白蓝横向渐变--\",\"渐变方向\":\"90\",\"渐变节点-1\":\"0.00\",\"渐变节点颜色-1\":\"#FFFFFF\",\"渐变节点-2\":\"1.00\",\"渐变节点颜色-2\":\"#40A0F0\",\"渐变节点-3\":\"\",\"渐变节点颜色-3\":\"\",\"渐变节点-4\":\"\",\"渐变节点颜色-4\":\"\",\"渐变节点-5\":\"\",\"渐变节点颜色-5\":\"\",\"渐变节点-6\":\"\",\"渐变节点颜色-6\":\"\"}"]
 *
 *
 * @param MOG-敌人指针是否变色
 * @type boolean
 * @on 变色
 * @off 不变色
 * @desc true - 变色，false - 不变色，敌人指针插件也会变色。
 * @default true
 *
 * @param MOG-Boss是否变色
 * @type boolean
 * @on 变色
 * @off 不变色
 * @desc true - 变色，false - 不变色，bossHP插件也会变色。
 * @default true
 *
 * @param 消息窗口是否变色
 * @type boolean
 * @on 变色
 * @off 不变色
 * @desc true - 变色，false - 不变色，注意，该设置需要 战斗-窗口提示消息 插件才能生效。
 * @default true
 *
 *
 */
/*~struct~GradientColor:
 * 
 * @param 标记
 * @desc 用于区分你设置的颜色的说明注释，脚本中不起作用。
 * @default ==白红纵向渐变==
 * 
 * @param 渐变方向
 * @type number
 * @min 0
 * @max 180
 * @desc 渐变的方向角度，单位度。0度为从下往上，90度为从左往右。
 * @default 0
 *
 * @param 渐变节点-1
 * @desc 渐变的节点值，范围在 0.00 - 1.00 之间。
 * @default 0.00
 * 
 * @param 渐变节点颜色-1
 * @desc 节点位置的颜色。
 * @default #FFFFFF
 *
 * @param 渐变节点-2
 * @desc 渐变的节点值，范围在 0.00 - 1.00 之间。
 * @default 1.00
 * 
 * @param 渐变节点颜色-2
 * @desc 节点位置的颜色。
 * @default #FF4444
 *
 * @param 渐变节点-3
 * @desc 渐变的节点值，范围在 0.00 - 1.00 之间。
 * @default 
 * 
 * @param 渐变节点颜色-3
 * @desc 节点位置的颜色。
 * @default 
 *
 * @param 渐变节点-4
 * @desc 渐变的节点值，范围在 0.00 - 1.00 之间。
 * @default 
 * 
 * @param 渐变节点颜色-4
 * @desc 节点位置的颜色。
 * @default 
 *
 * @param 渐变节点-5
 * @desc 渐变的节点值，范围在 0.00 - 1.00 之间。
 * @default 
 * 
 * @param 渐变节点颜色-5
 * @desc 节点位置的颜色。
 * @default 
 *
 * @param 渐变节点-6
 * @desc 渐变的节点值，范围在 0.00 - 1.00 之间。
 * @default 
 * 
 * @param 渐变节点颜色-6
 * @desc 节点位置的颜色。
 * @default 
 *
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称：		ETC (Enemy_Text_Color)
//		临时全局变量	DrillUp.g_ETC_xxx
//						DrillUp.xxx（相互扩展的变量，无法变动）
//		临时局部变量	无
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	Window_BattleEnemy.prototype.drawItem
//
//插件记录：
//		敌人文本颜色中关联了 mog指针、bosshp，敌人选择窗口 。
//		（这里包含了 \c[200]的颜色操作 和 渐变颜色识别函数 ）
//
//		Bitmap.drill_elements_drawText用于控制颜色渐变的位置修正。（目前不理解为啥bitmap绘制渐变时会产生brush偏移的情况。）
//
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_EnemyTextColor = true;
　　var DrillUp = DrillUp || {}; 

    DrillUp.parameters = PluginManager.parameters('Drill_EnemyTextColor');
    DrillUp.g_ETC_mogCursor = String(DrillUp.parameters['MOG-敌人指针是否变色'] || "true") === "true";
    DrillUp.g_ETC_mogBoss = String(DrillUp.parameters['MOG-Boss是否变色'] || "true") === "true";
    DrillUp.enemy_color_massage = String(DrillUp.parameters['消息窗口是否变色'] || "true") === "true";
    //DrillUp.g_ETC_ebook = String(DrillUp.parameters['敌人图鉴是否变色'] || "true") === "true";
	if(DrillUp.parameters['颜色配置'] != "" ){
		DrillUp.color_conf_e = JSON.parse(DrillUp.parameters['颜色配置']);
	}else{
		DrillUp.color_conf_e = ["#FF4444","#FF784C","#FFFF40","#80FF80","#98F5FF","#40C0F0","#8080FF","#FF69B4","#8B4C39","#BEBEBE","#797979","#FFFFFF","#000000"];
	}
	if(DrillUp.parameters['高级颜色配置'] != "" ){
		DrillUp.colorG_conf_e_temp = JSON.parse(DrillUp.parameters['高级颜色配置']);
		
		//将配置颜色转成逗号分隔的字符串形式 （方向,点1,点1颜色,点2,……）
		DrillUp.colorG_conf_e = []
		for(var i = 0; i < DrillUp.colorG_conf_e_temp.length ; i++){
			var temp_colorG = JSON.parse( DrillUp.colorG_conf_e_temp[i] );
			var temp_colorText = "";
			temp_colorText += String(temp_colorG["渐变方向"]);
			
			for(var j = 0 ; j < 6 ; j++ ){
				if( temp_colorG["渐变节点颜色-"+String(j+1) ] != "" ){
					temp_colorText += "," + String(temp_colorG["渐变节点-"+String(j+1)] );
					temp_colorText += "," + String(temp_colorG["渐变节点颜色-"+String(j+1)] );
				}
			}
			DrillUp.colorG_conf_e.push( temp_colorText );
		}
	}else{
		DrillUp.colorG_conf_e = [];
	}

	
//=============================================================================
// ** 插件指令
//=============================================================================
var _drill_ETC_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_ETC_pluginCommand.call(this, command, args);
	if (command === '>文本颜色') {	// >文本颜色 : B : 敌人普通 : A1
		if(args.length == 6){
			var temp1 = Number(args[1]);
			var temp2 = String(args[5]);
			var type = String(args[3]);
			if( type == '敌人普通' ){
				if( temp2.slice(0,1) === "#" ){
					$gameSystem._drill_color_enemy[temp1] = temp2;
					$gameSystem._drill_color_num_enemy[temp1] = -1;
				}else{
					$gameSystem._drill_color_enemy[temp1] = String(DrillUp.color_conf_e[ Number(temp2) -1 ]) ;
					$gameSystem._drill_color_num_enemy[temp1] = Number(temp2) ;
				}
			}
			if( type == '敌人高级' ){
				$gameSystem._drill_color_enemy[temp1] = String(DrillUp.colorG_conf_e[ Number(temp2) -1 ]) ;
				$gameSystem._drill_color_num_enemy[temp1] = Number(temp2) + 100 ;
			}
		}
	}
	if (command === '>变量文本颜色') {
		if(args.length == 6){
			var temp1 = $gameVariables.value( Number(args[1]) ) ;
			var temp2 = $gameVariables.value( Number(args[5]) ) ;
			var type = String(args[3]);
			if( type == '敌人普通' ){
				$gameSystem._drill_color_enemy[temp1] = String(DrillUp.color_conf_e[ temp2-1 ]) ;
				$gameSystem._drill_color_num_enemy[temp1] = Number(temp2) -1;
			}
			if( type == '敌人高级' ){
				$gameSystem._drill_color_enemy[temp1] = String(DrillUp.colorG_conf_e[ temp2-1 ]) ;
				$gameSystem._drill_color_num_enemy[temp1] = Number(temp2) + 100 ;
			}
		}
	}
};
//=============================================================================
// ** 读取注释初始化
//=============================================================================
var _drill_ETC_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_drill_ETC_initialize.call(this);
	this._drill_color_enemy = [];
	this._drill_color_num_enemy = [];
	for( var i = 0; i < $dataEnemies.length; i++ ){
		if( $dataEnemies[i] == null ){
			this._drill_color_enemy[i] = "";
			this._drill_color_num_enemy[i] = -1;
			continue;
		}
		var note = String($dataEnemies[i].note);
		var re_color = /<颜色:([^<>]*?)>/; 				//正则获取（返回数组，第二个为匹配内容）
		var color = (note.match(re_color)) || [];
		var re_colorG = /<高级颜色:([^<>]*?)>/; 	
		var colorG = (note.match(re_colorG)) || [];
		if(color != "" && color != [] ){
			if( color[1].slice(0,1) === "#" ){
				this._drill_color_enemy[i] = color;
				this._drill_color_num_enemy[i] = -1;
			}else{
				this._drill_color_enemy[i] = String(DrillUp.color_conf_e[ Number(color[1]) -1 ]) ;
				this._drill_color_num_enemy[i] = Number(color[1]) ;	//(101开始)
			}
		}else if( colorG != "" && colorG != [] && DrillUp.colorG_conf_e != [] ){	//高级颜色编号
			this._drill_color_enemy[i] = DrillUp.colorG_conf_e[ Number(colorG[1]) -1 ];
			this._drill_color_num_enemy[i] = Number(colorG[1]) + 100 ; //(201开始)
		}else{
			this._drill_color_enemy[i] = "";
			this._drill_color_num_enemy[i] = -1;
		}
	}
	//alert(JSON.stringify(this._drill_color_enemy));
};

//=============================================================================
// ** 覆写函数 （敌人选择窗口绘制）
//=============================================================================
Window_BattleEnemy.prototype.drawItem = function(index) {
	var color = $gameSystem._drill_color_enemy[index];
	if(color != ""){
		this.changeTextColor(color);
	}
    var name = this._enemies[index].name();
    var rect = this.itemRectForText(index);
    this.drawText(name, rect.x, rect.y, rect.width);
	this.resetTextColor();
};



//=============================================================================
// ** 与mog指针相适应
//=============================================================================
var _drill_ETC_mogCursor_refresh = BattleCursor.prototype.refresh_arrow_name;
BattleCursor.prototype.refresh_arrow_name = function(battler,sprite) {
	if(Imported.MOG_BattleCursor && DrillUp.g_ETC_mogCursor){
		//for(var a in battler){
		//	textb ="key:"+a+" value:"+ battler[a]+"\n";
		//	alert(textb);
		//}
		//battler._enemyId
		if( battler._enemyId ){
			var color = $gameSystem._drill_color_enemy[battler._enemyId];
			if(color != ""){
				sprite.bitmap.textColor = color;
			}
		}
		_drill_ETC_mogCursor_refresh.call(this,battler,sprite);
		sprite.bitmap.textColor = "#ffffff";
	}else{
		_drill_ETC_mogCursor_refresh.call(this,battler,sprite);
	}
};

//=============================================================================
// ** 与mog bosshp相适应
//=============================================================================
if( Imported.MOG_BossHP ){
	var _drill_ETC_mogBossHP_refresh = Sprite_BossHP.prototype.refresh_name;
	Sprite_BossHP.prototype.refresh_name = function() {
		
		if( DrillUp.g_ETC_mogBoss){
			if( this._battler ){
				var color = $gameSystem._drill_color_enemy[this._battler._enemyId];
				if(color != ""){
					this._name.bitmap.textColor = color;
				}
			}
			_drill_ETC_mogBossHP_refresh.call(this);
			this._name.bitmap.textColor = "#ffffff";
		}else{
			_drill_ETC_mogBossHP_refresh.call(this);
		}
	};
}
//=============================================================================
// ** 与 Drill_GaugeForBoss 相适应
//=============================================================================
if( Imported.Drill_GaugeForBoss ){
	var _drill_ETC_GFB_drawName = Drill_GFB_StyleSprite.prototype.drill_drawName;
	Drill_GFB_StyleSprite.prototype.drill_drawName = function() {
		
		if( DrillUp.g_ETC_mogBoss){
			var color = $gameSystem._drill_color_enemy[this._drill_enemy._enemyId];
			if(color != ""){
				this._drill_name_sprite.bitmap.textColor = color;
			}
			_drill_ETC_GFB_drawName.call(this);
			this._drill_name_sprite.bitmap.textColor = "#ffffff";
		}else{
			_drill_ETC_GFB_drawName.call(this);
		}
	};
}

//=============================================================================
// ** \c[100]与\c[200]识别
//=============================================================================
if( typeof(_drill_textColor) == "undefined" ){	//防止重复定义

	var _drill_textColor = Window_Base.prototype.textColor;
	Window_Base.prototype.textColor = function(n) {
		if( n > 200 ){	//渐变颜色
			if( Imported.Drill_EnemyTextColor && DrillUp.colorG_conf_e ){ return DrillUp.colorG_conf_e[n-201]; }
			if( Imported.Drill_ActorTextColor && DrillUp.colorG_conf_a ){ return DrillUp.colorG_conf_a[n-201]; }
			if( Imported.Drill_ItemTextColor && DrillUp.colorG_conf_i ){ return DrillUp.colorG_conf_i[n-201]; }
			n = n-100;
		}
		if(n > 100){	//颜色
			if( Imported.Drill_EnemyTextColor ){ return DrillUp.color_conf_e[n-101]; }
			if( Imported.Drill_ActorTextColor ){ return DrillUp.color_conf_a[n-101]; }
			if( Imported.Drill_ItemTextColor ){ return DrillUp.color_conf_i[n-101]; }
			
		}else{
			return _drill_textColor.call(this,n);
		}
	};
}

//=============================================================================
// ** 渐变读取+绘制
//=============================================================================
if( typeof(_drill_bitmap_drawTextBody) == "undefined" ){	//防止重复定义（该函数只是改进，未用到当前脚本中的参数）
	
	var _drill_bitmap_drawTextBody = Bitmap.prototype._drawTextBody;
	Bitmap.prototype._drawTextBody = function(text, tx, ty, maxWidth) {
		if( typeof(this.textColor) == "string" && this.textColor != "" && this.textColor.indexOf(",") != -1 ){
			var colors = this.textColor.split(',');
			var context = this._context;
			var grad;
			
			//长方形与渐变斜线 求相交的两个点
			var t = Number(colors[0]) / 180 * Math.PI ;
			var tt = ( 180 - Number(colors[0]) ) / 180 * Math.PI ;
			var ww = text.length * this.fontSize;
			var wh = this.fontSize;
			var p1x = tx ;
			var p1y = ty ;
			var p2x = tx ;
			var p2y = ty + wh/2;
			if( this.drill_elements_drawText != null ){
				p1x = 0 ;
				p1y = 0 ;
				p2x = 0 ;
				p2y = 0 + wh/2;
			}
			if( Number(colors[0]) == 90 ){	//tan90情况
				p1x = p1x + ww;
				p1y = p1y ;
				p2x = p2x ;
				p2y = p2y ;
			}/*else if( wh/2*Math.tan(t) >= ww/2 ){		//tan高 大于 宽情况（实际好像不需要这部分情况计算）
				p1x = p1x + ww;
				p1y = p1y + wh/2 + ww/2*Math.tan(t);
				p2x = p2x ;
				p2y = p2y - ww/2*Math.tan(t);
			}*/else{
				p1x = p1x + ww/2 + wh/2*Math.tan(t);
				p1y = p1y - wh;
				p2x = p2x + ww/2 - wh/2*Math.tan(t);
				p2y = p2y ;
			}
			if (context.textAlign === 'center') {	//文本对齐方式修正
				p1x -= maxWidth / 4;
				p2x -= maxWidth / 4;
			}
			if (context.textAlign === 'right') {
				p1x -= maxWidth / 2;
				p2x -= maxWidth / 2;
			}
			if(p1x >= maxWidth){
				p1x = maxWidth-1;
			}
			if(p2x >= maxWidth){
				p2x = maxWidth-1;
			}
			
			grad = context.createLinearGradient(p1x, p1y, p2x, p2y);
			var i = 1;
			while(true){
				if( i >= colors.length || colors[i] == "" ){break;}
				grad.addColorStop( Number(colors[i]), colors[i+1] );
				i += 2;
			}
			context.save();
			context.fillStyle = grad;
			context.fillText(text, tx, ty, maxWidth);
			context.restore();
			this._setDirty();
			
		}else{	//不为高级渐变颜色，使用简单色
			_drill_bitmap_drawTextBody.call(this,text, tx, ty, maxWidth);
		}
	};
}

