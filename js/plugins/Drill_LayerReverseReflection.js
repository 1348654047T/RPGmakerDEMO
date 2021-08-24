//=============================================================================
// Drill_LayerReverseReflection.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        地图 - 图块倒影镜像
 * @author Drill_up
 * 
 *
 * @param 图块标记
 * @desc 指定标记数字的图块将会具有反射效果，可以设置多个。（1-7）
 * @type number[]
 * @min 1
 * @max 7
 * @default ["1"]
 *
 * @param 区域标记
 * @desc 指定标记的R区域将会具有反射效果，可以设置多个。（1-255）
 * @type number[]
 * @min 1
 * @max 255
 * @default []
 *
 * @param 镜像透明比例
 * @type number
 * @min 0
 * @max 100
 * @desc 镜像的透明度百分比的比例，0表示完全透明，100表示完全不透明。能与动作效果叠加。
 * @default 35
 *
 * @param 镜像长度缩放
 * @desc 镜像的拉伸长度，1.00表示原比例。能与动作效果叠加。
 * @default 1.10
 * 
 * @param ---地图镜面组 1至20---
 * @default 
 *
 * @param 地图镜面-1
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-2
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-3
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-4
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-5
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-6
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-7
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-8
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-9
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-10
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-11
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-12
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-13
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-14
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-15
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-16
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-17
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-18
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-19
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-20
 * @parent ---地图镜面组 1至20---
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param --地图镜面组21至40--
 * @default 
 *
 * @param 地图镜面-21
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-22
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-23
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-24
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-25
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-26
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-27
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-28
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-29
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-30
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-31
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-32
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-33
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-34
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-35
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-36
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-37
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-38
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-39
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-40
 * @parent --地图镜面组21至40--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param --地图镜面组41至60--
 * @default 
 *
 * @param 地图镜面-41
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-42
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-43
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-44
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-45
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-46
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-47
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-48
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-49
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-50
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-51
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-52
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-53
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-54
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-55
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-56
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-57
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-58
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-59
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @param 地图镜面-60
 * @parent --地图镜面组41至60--
 * @desc 自定义的镜像图片资源，作用于整张地图的镜面。
 * @default 
 * @require 1
 * @dir img/parallaxes/
 * @type file
 *
 * @help  
 * =============================================================================
 * +++ Drill_LayerReverseReflection +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 使得你可以让图块反射出上下镜像倒影，并且镜像支持大部分效果。
 * 更多详细内容，去看看"关于镜像与阴影.docx"。
 * ★★尽量放在所有 事件效果类 的插件后面，放后面可以支持更多叠加效果★★ 
 * 
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.注意区分 镜面 和 镜像 关系。
 * 2.倒影镜像能支持大部分动作效果，包括跳跃、透明度、多帧行走图。
 * 3.所有事件都默认开启镜像反射，并且与事件的透明度一致，通过事件复制器
 *   生成的新事件也支持镜像反射。
 * 4.反射遇到循环地图的边缘时，会出现镜像关闭的现象。
 * 5.反射不支持滤镜、粉碎效果。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 图块镜面
 * 你可以直接设置 地形标志 或者 区域标记 的图块变成镜面。
 * 没有设置的图块将不为镜面，会遮挡事件镜像。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件 - 地图镜面
 * 如果你的地图不大，可以像画阴影一样，将整个地图变成一个大镜面。
 * （注意，冒号没有空格）
 * 
 * 地图备注：=>镜面:资源文件名
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定 - 镜像反射关闭
 * 所有镜像默认开启反射，如果你想关闭某些事件的镜像，可以使用下面设置。
 * 
 * 事件备注：<不反射镜像>
 *
 * 事件注释：=>图块倒影镜像 : 不反射镜像
 * 事件注释：=>图块倒影镜像 : 开启反射镜像
 * 
 * 插件指令：>图块倒影镜像 : 玩家 : 不反射镜像
 * 插件指令：>图块倒影镜像 : 玩家 : 开启反射镜像
 * 插件指令：>图块倒影镜像 : 本事件 : 不反射镜像
 * 插件指令：>图块倒影镜像 : 本事件 : 开启反射镜像
 * 插件指令：>图块倒影镜像 : 10 : 不反射镜像
 * 插件指令：>图块倒影镜像 : 10 : 开启反射镜像
 *
 * 1.数字表示事件id。
 * 2.事件注释的 不反射镜像和开启反射镜像 可以针对不同的事件页进行设置。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 镜像透明同步
 * 你可以设置播放消失的落下和弹跳的动作效果：
 * 
 * 事件注释：=>图块倒影镜像 : 关闭镜像透明同步
 * 事件注释：=>图块倒影镜像 : 开启镜像透明同步
 * 
 * 插件指令：>图块倒影镜像 : 玩家 : 关闭镜像透明同步
 * 插件指令：>图块倒影镜像 : 玩家 : 开启镜像透明同步
 * 插件指令：>图块倒影镜像 : 本事件 : 关闭镜像透明同步
 * 插件指令：>图块倒影镜像 : 本事件 : 开启镜像透明同步
 * 插件指令：>图块倒影镜像 : 10 : 关闭镜像透明同步
 * 插件指令：>图块倒影镜像 : 10 : 开启镜像透明同步
 *
 * 1.数字表示事件id。
 * 2.镜像透明同步是指，如果事件透明，则镜像也透明。
 *   关闭后，你可以设置透明的事件，却具有不透明的反射镜像。（镜中小爱丽丝）
 * 
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		LRR（Layer_Reverse_Reflection）
//		临时全局变量	DrillUp.g_LRR_xxx
//		临时局部变量	无
//		存储数据变量	this._drill_LRR_xxx
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		反射原理并不难，每个事件都附带一个一模一样的镜像，并且取反即可。
//		
//		建立了一个层 this._drill_LRR_layer 存放所有镜像，在地形贴图的上面，角色图层的下面。
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_LayerReverseReflection = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_LayerReverseReflection');
	
	if( DrillUp.parameters['图块标记'] != "" ){
		DrillUp.g_LRR_terrainIds = (JSON.parse( DrillUp.parameters['图块标记'])).map(function(n){ return Number(n) });;
	}else{
		DrillUp.g_LRR_terrainIds = ([]).map(function(n){ return Number(n) }); ;
	}
	if( DrillUp.parameters['区域标记'] != "" ){
		DrillUp.g_LRR_areaIds = (JSON.parse( DrillUp.parameters['区域标记'])).map(function(n){ return Number(n) });;
	}else{
		DrillUp.g_LRR_areaIds = ([]).map(function(n){ return Number(n) }); ;
	}
    DrillUp.g_LRR_opacity_per = Number(DrillUp.parameters['镜像透明比例']) || 35;
    DrillUp.g_LRR_height_size = Number(DrillUp.parameters['镜像长度缩放']) || 1.0;
	DrillUp.g_LRR_reflectionMap = "";
	
//=============================================================================
// ** 插件指令
//=============================================================================
var _Drill_LRR_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_Drill_LRR_pluginCommand.call(this, command, args);
	if (command === '>图块倒影镜像') { //>图块倒影镜像 : 玩家 : 不反射镜像
		if(args.length == 4){
			var temp1 = String(args[1]);
			var type = String(args[3]);
			if( temp1 == "玩家" ){ 
				if( type == '不反射镜像' ){
					$gamePlayer._drill_LRR_isReflect = false;
					$gamePlayer.followers().forEach(function(f){ f._drill_LRR_isReflect = false; },this);
				}
				if( type == '开启反射镜像' ){
					$gamePlayer._drill_LRR_isReflect = true;
					$gamePlayer.followers().forEach(function(f){ f._drill_LRR_isReflect = true; },this);
				}
			}
		}
	}
};

//=============================================================================
// ** 事件
//=============================================================================
//==============================
// * 事件 - 注释设置
//==============================
var _drill_LRR_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
	_drill_LRR_setupPage.call(this);
    this.drill_LRR_setupReflect();
};
Game_Event.prototype.drill_LRR_setupReflect = function() {
	if(this.event().meta){
		this._drill_LRR_isReflect = (this.event().meta['不反射镜像'] || false) == false;
	}
	
	if (!this._erased && this.page()) {this.list().forEach(function(l) {
		if (l.code === 108) {
			var args = l.parameters[0].split(' ');
			var command = args.shift();
			if (command == "=>图块倒影镜像"){	//=>图块倒影镜像 : 不反射镜像
				if(args.length == 2){
					if(args[1]){ var type = String(args[1]); }
					if( type == "不反射镜像" ){
						this._drill_LRR_isReflect = false;
					}
					if( type == "开启反射镜像" ){
						this._drill_LRR_isReflect = true;
					}
					if( type == "关闭镜像透明同步" ){
						this._drill_LRR_isOpacitySync = false;
					}
					if( type == "开启镜像透明同步" ){
						this._drill_LRR_isOpacitySync = true;
					}
				}
			};
		};
	}, this);};
};

//=============================================================================
// ** 地图备注
//=============================================================================
var _drill_LRR_map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function(mapId) {
	_drill_LRR_map_setup.call(this, mapId);
	this.drill_LRR_setupReflection();
};
Game_Map.prototype.drill_LRR_setupReflection = function() {
	DrillUp.g_LRR_reflectionMap = "" ;
	$dataMap.note.split(/[\r\n]+/).forEach(function(note) {
		var text_ = note.split(':');
		if( text_[0] === "=>镜面"){
			DrillUp.g_LRR_reflectionMap = text_[1] || "";
		}
	},this);
};

//=============================================================================
// ** 物体
//=============================================================================
//==============================
// * 物体初始化
//==============================
var _drill_LRR_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function() {
    _drill_LRR_initMembers.call(this);
	this._drill_LRR_isReflect = true;
	this._drill_LRR_isOpacitySync = true;
};
//==============================
// * 获取 - 反射
//==============================
Game_CharacterBase.prototype.drill_LRR_isReflect = function() {
	//if( this._transparent == true ){ return false; }	//似乎很多插件都影响了这个透明度设置，目前取消判定
	return this._drill_LRR_isReflect;
};
//==============================
// * 获取 - 镜像同步
//==============================
Game_CharacterBase.prototype.drill_LRR_isOpacitySync = function() {
	return this._drill_LRR_isOpacitySync;
};

//==============================
// * 固定帧初始值
//==============================
var _Drill_LRR_s_updatePosition = Sprite_Character.prototype.updatePosition;
Sprite_Character.prototype.updatePosition = function() {
	_Drill_LRR_s_updatePosition.call(this);
	this.rotation = 0;
	this.scale.x = 1;
	this.scale.y = 1;
	this.skew.x = 0;
	this.skew.y = 0;
	//从这里开始，参数都被固定值（不需要考虑多次update的叠加影响）
};

//=============================================================================
// ** 地图
//=============================================================================
//==============================
// * 地图 - 建立镜像（Tilemap层）
//==============================
var _drill_LRR_createTilemap = Spriteset_Map.prototype.createTilemap;
Spriteset_Map.prototype.createTilemap = function() {
	_drill_LRR_createTilemap.call(this);
	this.drill_createLRRReflect();
};
Spriteset_Map.prototype.drill_createLRRReflect = function() {
	//>建立贴图
	this._drill_LRR_sprites = [];
	$gameMap.events().forEach(function(event) {					//事件
		this._drill_LRR_sprites.push(new Drill_Sprite_LRR(event));
	}, this);
	$gamePlayer.followers().reverseEach(function(follower) {	//跟随队员
		this._drill_LRR_sprites.push(new Drill_Sprite_LRR(follower));
	}, this);
	this._drill_LRR_sprites.push(new Drill_Sprite_LRR($gamePlayer));	//玩家
	
	//>建立遮罩（将反射的图块全部涂白）
	this._drill_LRR_layer = new Sprite();
	this._drill_LRR_layer_mask = new Drill_Sprite_LRR_Mask();
	for (var i = 0; i < this._drill_LRR_sprites.length; i++) {
		this._drill_LRR_layer.addChild(this._drill_LRR_sprites[i]);
	}
	this._drill_LRR_layer.addChild(this._drill_LRR_layer_mask);		//遮罩原型（如果不addchild，Sprite是不会update的）
	this._drill_LRR_layer.mask = this._drill_LRR_layer_mask;		//遮罩
	
	this._drill_LRR_layer.z = 2;
	this._tilemap.addChild(this._drill_LRR_layer);
	
};
//==============================
// * 地图 - 确认物体数量
//==============================
var _drill_LRR_createCharacters = Spriteset_Map.prototype.createCharacters;
Spriteset_Map.prototype.createCharacters = function() {
	_drill_LRR_createCharacters.call(this);
	this._drill_LRR_CharSpriteLen = this._characterSprites.length;	//>记录物体数量
};
//==============================
// * 帧刷新 - 新事件的倒影
//==============================
var _drill_LRR_update = Spriteset_Map.prototype.update;
Spriteset_Map.prototype.update = function() {
	_drill_LRR_update.call(this);
	this.drill_LRR_updateNewEventReflect();
}
Spriteset_Map.prototype.drill_LRR_updateNewEventReflect = function() {
	if( this._characterSprites.length > this._drill_LRR_CharSpriteLen){
		for(var i = this._drill_LRR_CharSpriteLen; i<this._characterSprites.length; i++ ){
			var temp_sprite = new Drill_Sprite_LRR(this._characterSprites[i]._character);
			this._drill_LRR_sprites.push(temp_sprite);
			this._drill_LRR_layer.addChild(temp_sprite);
		}
		this._drill_LRR_CharSpriteLen = this._characterSprites.length;
	}
}

//=============================================================================
// ** 镜像贴图类（直接继承玩家贴图）
//=============================================================================
function Drill_Sprite_LRR() {
	this.initialize.apply(this, arguments);
}
Drill_Sprite_LRR.prototype = Object.create(Sprite_Character.prototype);
Drill_Sprite_LRR.prototype.constructor = Drill_Sprite_LRR;

//==============================
// * 初始化
//==============================
Drill_Sprite_LRR.prototype.initialize = function(character) {
	Sprite_Character.prototype.initialize.call(this,character);
	this.opacity = 0;
	this._destroyed = false;
};

//==============================
// * 帧刷新
//==============================
Drill_Sprite_LRR.prototype.update = function() {
	Sprite_Character.prototype.update.call(this);
	
	//>位移
	var real_fix_y = Math.round( (this._character.scrolledY() + 1)*$gameMap.tileHeight() - this._character.shiftY());
	this.y = real_fix_y - this.y + real_fix_y;
	//>大小
	this.scale.y = -this.scale.y * DrillUp.g_LRR_height_size;
	//>透明度
	if( this._character.drill_LRR_isOpacitySync() ){
		this.opacity = Math.min( this._character._opacity ,255) /100 * DrillUp.g_LRR_opacity_per;
	}else{
		this.opacity = 255 /100 * DrillUp.g_LRR_opacity_per;
	}
	//>可见
	this.visible = this._character.drill_LRR_isReflect() && !this._destroyed ;
};

//==============================
// * 兼容mog粒子
//==============================
if(Imported.MOG_CharParticles){
	Drill_Sprite_LRR.prototype.canUpdateParticles = function() {
		return false;
	}
}
//==============================
// * 兼容mog粉碎
//==============================
if(Imported.MOG_CharParticles){
	Drill_Sprite_LRR.prototype.createShatterSprites = function() {
		this._destroyed = true;
		return;
	}
	Drill_Sprite_LRR.prototype.updateShatterEffect = function() {
		this._destroyed = true;
		return;
	}
}

//=============================================================================
// ** 地图遮罩类
//		（由于是mask，所以只能用sprite）
//=============================================================================
function Drill_Sprite_LRR_Mask() {
	this.initialize.apply(this, arguments);
}
Drill_Sprite_LRR_Mask.prototype = Object.create(Sprite.prototype);
Drill_Sprite_LRR_Mask.prototype.constructor = Drill_Sprite_LRR_Mask;

//==============================
// * 初始化
//==============================
Drill_Sprite_LRR_Mask.prototype.initialize = function() {
	Sprite.prototype.initialize.call(this);
	
	if( DrillUp.g_LRR_reflectionMap != "" ){
		this.bitmap = ImageManager.loadParallax(DrillUp.g_LRR_reflectionMap);
	}else{
		this.bitmap = new Bitmap( $gameMap.width()*$gameMap.tileWidth() , $gameMap.height()*$gameMap.tileHeight() );
		//alert($gameMap.displayX())
		//alert($gameMap.displayY())
		//alert($gameMap.width())
		//this.bitmap.fillRect(100, 100, 500, 500, "#ffffff");
		for(var xx = 0; xx< $gameMap.width() ;xx++){
			for(var yy = 0; yy< $gameMap.height() ;yy++){
			
				var terrainTag = $gameMap.terrainTag(xx, yy);
				var regionId = $gameMap.regionId(xx, yy);
				if( DrillUp.g_LRR_terrainIds.contains(terrainTag) ||  DrillUp.g_LRR_areaIds.contains(regionId) ){
					this.bitmap.fillRect( 
						xx* $gameMap.tileWidth() , 
						yy* $gameMap.tileHeight(), 
						$gameMap.tileWidth(), 
						$gameMap.tileHeight(), 
						"#ffffff");
				}else{
					this.bitmap.fillRect( 
						xx* $gameMap.tileWidth() , 
						yy* $gameMap.tileHeight(), 
						$gameMap.tileWidth(), 
						$gameMap.tileHeight(), 
						"#000000");
				}
			}
		}
	}
}
//==============================
// * 帧刷新
//==============================
Drill_Sprite_LRR_Mask.prototype.update = function() {
	Sprite.prototype.update.call(this);
	this.x = -$gameMap.displayX()* $gameMap.tileWidth();
	this.y = -$gameMap.displayY()* $gameMap.tileHeight();
}


