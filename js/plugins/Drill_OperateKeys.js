//=============================================================================
// Drill_OperateKeys.js
//=============================================================================

/*:
 * @plugindesc [v1.2]        画面 - 键盘手柄按键修改器
 * @author Drill_up
 * 
 * @help  
 * =============================================================================
 * +++ Drill_OperateKeys +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 使得你可以修改 方向键、确定键、取消键、加速键 等。
 * ★★必须放在 "扩展于" 的所有插件的后面★★
 *
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 插件完全可以单独使用。你可以对下列插件有选择地添加，不必要配置全部。
 * 作用于：
 *   - Drill_Jump 物体-跳跃能力
 *   - Drill_RotateDirection 物体-原地转向能力
 *   - Drill_PickThrow 物体-举起花盆能力
 *   - Drill_BombCore 炸弹人-游戏核心
 * 
 * -----------------------------------------------------------------------------
 * ----配置说明
 * 1.基本键的键位必须不重复，重复会出现按键失效情况。
 * 2.你可以设置扩展键的几个键为同一个键位，节约按键，但是要注意对应键
 * 起效的时机，场景等情况。
 * 3.手柄因为键位少，所以固定了功能键的设置。
 * 键盘就可以完全灵活设置，任意一个或两个键都可以触发，并且几个键可以
 * 作用于同一个功能。
 * 4.你可以通过插件指令设置方向键翻转，做成arpg的"混乱"状态效果。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过下列插件指令随机翻转方向键：
 *
 * 插件指令： >按键修改 : 倒置效果 : 方向翻转
 * 插件指令： >按键修改 : 倒置效果 : 方向右旋置换
 * 插件指令： >按键修改 : 倒置效果 : 方向随机混乱
 * 插件指令： >按键修改 : 倒置效果 : 恢复方向
 *
 * 对键盘和手柄都有效果，并且如果键盘有多个方向键，同样也起作用。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 加入了放置炸弹按键设置。
 * [v1.2]
 * 修复了与跳跃插件相关时，长按鼠标却不自动跳跃的bug。
 * 修复了设置A + B两个键时，只按A键就起效的bug。
 *
 * @param ----手柄基本键----
 * @default 
 *
 * @param 手柄-确定键
 * @parent ----手柄基本键----
 * @type select
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
 * @desc 手柄对应的游戏中的确定键。注意，基本键的键位不可重复。
 * @default A
 *
 * @param 手柄-取消键
 * @parent ----手柄基本键----
 * @type select
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
 * @desc 手柄对应的游戏中的取消键。注意，基本键的键位不可重复。
 * @default B
 *
 * @param 手柄-加速键
 * @parent ----手柄基本键----
 * @type select
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
 * @desc 手柄对应的游戏中的加速键。注意，基本键的键位不可重复。
 * @default X
 *
 * @param 手柄-上一页
 * @parent ----手柄基本键----
 * @type select
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
 * @desc 手柄对应的游戏中的上一页键。注意，基本键的键位不可重复。
 * @default LB
 *
 * @param 手柄-下一页
 * @parent ----手柄基本键----
 * @type select
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
 * @desc 手柄对应的游戏中的下一页键。注意，基本键的键位不可重复。
 * @default RB
 *
 * @param 手柄-上
 * @parent ----手柄基本键----
 * @type select
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
 * @desc 手柄对应的游戏中的上键。注意，基本键的键位不可重复。
 * @default 上
 *
 * @param 手柄-下
 * @parent ----手柄基本键----
 * @type select
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
 * @desc 手柄对应的游戏中的下键。注意，基本键的键位不可重复。
 * @default 下
 *
 * @param 手柄-左
 * @parent ----手柄基本键----
 * @type select
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
 * @desc 手柄对应的游戏中的左键。注意，基本键的键位不可重复。
 * @default 左
 *
 * @param 手柄-右
 * @parent ----手柄基本键----
 * @type select
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
 * @desc 手柄对应的游戏中的右键。注意，基本键的键位不可重复。
 * @default 右
 *
 * @param ----手柄扩展键----
 * @default 
 *
 * @param 手柄-功能键
 * @parent ----手柄扩展键----
 * @type select
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
 * @desc 手柄的功能键，用于扩展按键。
 * @default RB
 *
 * @param 手柄-菜单键
 * @parent ----手柄扩展键----
 * @type select
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
 * @option 功能键 + A
 * @value 功能键 + A
 * @option 功能键 + B
 * @value 功能键 + B
 * @option 功能键 + X
 * @value 功能键 + X
 * @option 功能键 + Y
 * @value 功能键 + Y
 * @option 功能键 + LB
 * @value 功能键 + LB
 * @option 功能键 + RB
 * @value 功能键 + RB
 * @desc 手柄对应的游戏中的菜单键。
 * @default Y
 *
 * @param 手柄-跳跃键
 * @parent ----手柄扩展键----
 * @type select
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
 * @option 功能键 + A
 * @value 功能键 + A
 * @option 功能键 + B
 * @value 功能键 + B
 * @option 功能键 + X
 * @value 功能键 + X
 * @option 功能键 + Y
 * @value 功能键 + Y
 * @option 功能键 + LB
 * @value 功能键 + LB
 * @option 功能键 + RB
 * @value 功能键 + RB
 * @desc 手柄对应的游戏中的跳跃按键。需要"跳跃能力"插件。
 * @default LB
 *
 * @param 手柄-原地转向键
 * @parent ----手柄扩展键----
 * @type select
 * @option 十字键
 * @value 十字键
 * @option 功能键 + 十字键
 * @value 功能键 + 十字键
 * @desc 单独的十字键，表示必须要按住功能键才能走，否则只能原地转向。需要"原地转向能力"插件。
 * @default 功能键 + 十字键
 *
 * @param 手柄-举起花盆键
 * @parent ----手柄扩展键----
 * @type select
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
 * @option 功能键 + A
 * @value 功能键 + A
 * @option 功能键 + B
 * @value 功能键 + B
 * @option 功能键 + X
 * @value 功能键 + X
 * @option 功能键 + Y
 * @value 功能键 + Y
 * @option 功能键 + LB
 * @value 功能键 + LB
 * @option 功能键 + RB
 * @value 功能键 + RB
 * @desc 举起花盆对应的按键。需要"举起花盆能力"插件。
 * @default A
 *
 * @param 手柄-投掷花盆键
 * @parent ----手柄扩展键----
 * @type select
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
 * @option 功能键 + A
 * @value 功能键 + A
 * @option 功能键 + B
 * @value 功能键 + B
 * @option 功能键 + X
 * @value 功能键 + X
 * @option 功能键 + Y
 * @value 功能键 + Y
 * @option 功能键 + LB
 * @value 功能键 + LB
 * @option 功能键 + RB
 * @value 功能键 + RB
 * @desc 投掷花盆对应的按键。需要"举起花盆能力"插件。
 * @default A
 *
 * @param 手柄-放置炸弹键
 * @parent ----手柄扩展键----
 * @type select
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
 * @option 功能键 + A
 * @value 功能键 + A
 * @option 功能键 + B
 * @value 功能键 + B
 * @option 功能键 + X
 * @value 功能键 + X
 * @option 功能键 + Y
 * @value 功能键 + Y
 * @option 功能键 + LB
 * @value 功能键 + LB
 * @option 功能键 + RB
 * @value 功能键 + RB
 * @desc 放置炸弹对应的按键。需要"炸弹人-游戏核心"插件。
 * @default 功能键 + X
 *
 * @param ----键盘基本键----
 * @default 
 *
 * @param 键盘-确定键
 * @parent ----键盘基本键----
 * @type text[]
 * @desc 只能填单个字符,Alt, Shift,Tab,上,下,左,右,空格。注意，基本键的键位不可重复。
 * @default ["z","空格"]
 *
 * @param 键盘-取消键
 * @parent ----键盘基本键----
 * @type text[]
 * @desc 只能填单个字符,Alt, Shift,Tab,上,下,左,右,空格。注意，基本键的键位不可重复。
 * @default ["x"]
 *
 * @param 键盘-加速键
 * @parent ----键盘基本键----
 * @type text[]
 * @desc 只能填单个字符,Alt, Shift,Tab,上,下,左,右,空格。注意，基本键的键位不可重复。
 * @default ["Shift"]
 *
 * @param 键盘-上一页
 * @parent ----键盘基本键----
 * @type text[]
 * @desc 只能填单个字符,Alt, Shift,Tab,上,下,左,右,空格。注意，基本键的键位不可重复。
 * @default ["q"]
 *
 * @param 键盘-下一页
 * @parent ----键盘基本键----
 * @type text[]
 * @desc 只能填单个字符,Alt, Shift,Tab,上,下,左,右,空格。注意，基本键的键位不可重复。
 * @default ["w"]
 *
 * @param 键盘-上
 * @parent ----键盘基本键----
 * @type text[]
 * @desc 只能填单个字符,Alt, Shift,Tab,上,下,左,右,空格。注意，基本键的键位不可重复。
 * @default ["上"]
 *
 * @param 键盘-下
 * @parent ----键盘基本键----
 * @type text[]
 * @desc 只能填单个字符,Alt, Shift,Tab,上,下,左,右,空格。注意，基本键的键位不可重复。
 * @default ["下"]
 *
 * @param 键盘-左
 * @parent ----键盘基本键----
 * @type text[]
 * @desc 只能填单个字符,Alt, Shift,Tab,上,下,左,右,空格。注意，基本键的键位不可重复。
 * @default ["左"]
 *
 * @param 键盘-右
 * @parent ----键盘基本键----
 * @type text[]
 * @desc 只能填单个字符,Alt, Shift,Tab,上,下,左,右,空格。注意，基本键的键位不可重复。
 * @default ["右"]
 *
 * @param ----键盘扩展键----
 * @default 
 *
 * @param 键盘-菜单键
 * @parent ----键盘扩展键----
 * @type text[]
 * @desc 能填 A 或A + B两个组合键，加号两边有空格。填入字符,Alt, Shift,Tab,上,下,左,右,空格。
 * @default ["x"]
 *
 * @param 键盘-跳跃键
 * @parent ----键盘扩展键----
 * @type text[]
 * @desc 能填 A 或A + B两个组合键，加号两边有空格。填入字符,Alt, Shift,Tab,上,下,左,右,空格。
 * @default ["q"]
 *
 * @param 键盘-原地转向键
 * @parent ----键盘扩展键----
 * @type text[]
 * @desc 键盘对应的游戏中的原地转向键。只填入一个字符。按住相应字符，与上下左右配合，角色只原地转向。
 * @default ["w"]
 *
 * @param 键盘-举起花盆键
 * @parent ----键盘扩展键----
 * @type text[]
 * @desc 能填 A 或A + B两个组合键，加号两边有空格。填入字符,Alt, Shift,Tab,上,下,左,右,空格。
 * @default ["z"]
 *
 * @param 键盘-投掷花盆键
 * @parent ----键盘扩展键----
 * @type text[]
 * @desc 能填 A 或A + B两个组合键，加号两边有空格。填入字符,Alt, Shift,Tab,上,下,左,右,空格。
 * @default ["z"]
 *
 * @param 键盘-放置炸弹键
 * @parent ----键盘扩展键----
 * @type text[]
 * @desc 能填 A 或A + B两个组合键，加号两边有空格。填入字符,Alt, Shift,Tab,上,下,左,右,空格。
 * @default ["c"]
 *
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		临时全局变量	DrillUp.xxx
//		临时局部变量	无
//		存储数据变量	$gameSystem._drill_input_pad
//		全局存储变量	无
//		覆盖重写方法	Input.gamepadMapper变量
//						Input.keyMapper变量
//
//插件记录：
//	
//		局限性：yep的按键功能比较健全，但是代价是不可将两个键设置在同一键位上。比如举起花盆与确定键 可重合 也可分离，yep无法做到这一点。
//		input特殊属性：'escape'键 =  'menu'键 + 'cancel'键
//
//		这里的映射关系颇为复杂，首先不能破坏原有的键位顺序（原有的菜单键又可分离可重合）
//		整合之后，还要考虑功能键情况。（毕竟组合按键能扩展很多东西，没想到这个比鼠标面板还要复杂。）
//		【rmmv内核通过 isTriggered("jump") 关键字来映射按钮，多个按钮可以触发同一个关键字"jump"，但是反之不能。】
//		【为了使得同一个按钮可以触发不同情况，在不同功能写 isTriggered("jump")来判断就可以了。】	
//		如果键位少了，需要重新利用，添加新的字段，比如"jump"字段等。	
//
//		这里 手柄控制的原地转向 与 键盘的原地转向 设置有偏差。（手柄毕竟没有那么多键位）
//		
//		$gameSystem._drill_input_pad 存储所有【手柄的】键位内容。
//			如果临时修改了键位，执行init方法即可。
//			['aaa']：当前key的键位【值】
//			['aaa_str']：当前key的键位【名】
//			['aaa_has_fn']：当前key是否存在功能键
//			['aaa_repeat']：当前key的重合键【名】
//		多出来的键位，会被另外命名"jump"字段。
//			
//		总体来说，非常绕，如果你要添加键位或者修改键位，依葫芦画瓢吧。
//		手柄是单个的，键盘更恶心，是数组……完全多对多。
//
//		$gameSystem._drill_input_keyboard 存储所有【键盘的】键位内容。
//			['aaa']：json字段
//			['aaa']['A']：当前key的A键位【值】
//			['aaa']['B']：当前key的B键位【值】（没有则为-1）
//			['aaa']['AA']：当前key的A键位【名】
//			['aaa']['BB']：当前key的B键位【名】（没有则为""）
//		多出来的键位，会被另外命名"jump_A""jump_B"字段。
//
//		所有键盘的功能键，都按照两个键位来处理，需要考虑一个键按一次，与两个键不同时机按一次的情况。
//
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_OperateKeys = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_OperateKeys');

    DrillUp.oKeys_pad_ok = String(DrillUp.parameters['手柄-确定键'] || "A");
    DrillUp.oKeys_pad_cancel = String(DrillUp.parameters['手柄-取消键'] || "B");
    DrillUp.oKeys_pad_shift = String(DrillUp.parameters['手柄-加速键'] || "X");
    DrillUp.oKeys_pad_pageup = String(DrillUp.parameters['手柄-上一页'] || "LB");
    DrillUp.oKeys_pad_pagedown = String(DrillUp.parameters['手柄-下一页'] || "RB");
    DrillUp.oKeys_pad_up = String(DrillUp.parameters['手柄-上'] || "上");
    DrillUp.oKeys_pad_down = String(DrillUp.parameters['手柄-下'] || "下");
    DrillUp.oKeys_pad_left = String(DrillUp.parameters['手柄-左'] || "左");
    DrillUp.oKeys_pad_right = String(DrillUp.parameters['手柄-右'] || "右");
	
    DrillUp.oKeys_pad_fn = String(DrillUp.parameters['手柄-功能键'] || "RB");
    DrillUp.oKeys_pad_menu = String(DrillUp.parameters['手柄-菜单键'] || "Y");
    DrillUp.oKeys_pad_jump = String(DrillUp.parameters['手柄-跳跃键'] || "LB");
    DrillUp.oKeys_pad_rotate = String(DrillUp.parameters['手柄-原地转向键'] || "功能键 + 十字键");
    DrillUp.oKeys_pad_pick = String(DrillUp.parameters['手柄-举起花盆键'] || "A");
    DrillUp.oKeys_pad_throw = String(DrillUp.parameters['手柄-投掷花盆键'] || "A");
    DrillUp.oKeys_pad_bomb = String(DrillUp.parameters['手柄-放置炸弹键'] || "功能键 + X");

	if( DrillUp.parameters['键盘-确定键'] != "" ){ DrillUp.oKeys_keyboard_ok = JSON.parse(DrillUp.parameters['键盘-确定键']); }else{ DrillUp.oKeys_keyboard_ok = [];}
	if( DrillUp.parameters['键盘-取消键'] != "" ){ DrillUp.oKeys_keyboard_cancel = JSON.parse(DrillUp.parameters['键盘-取消键']); }else{ DrillUp.oKeys_keyboard_cancel = [];}
	if( DrillUp.parameters['键盘-加速键'] != "" ){ DrillUp.oKeys_keyboard_shift = JSON.parse(DrillUp.parameters['键盘-加速键']); }else{ DrillUp.oKeys_keyboard_shift = [];}
	if( DrillUp.parameters['键盘-上一页'] != "" ){ DrillUp.oKeys_keyboard_pageup = JSON.parse(DrillUp.parameters['键盘-上一页']); }else{ DrillUp.oKeys_keyboard_pageup = [];}
	if( DrillUp.parameters['键盘-下一页'] != "" ){ DrillUp.oKeys_keyboard_pagedown = JSON.parse(DrillUp.parameters['键盘-下一页']); }else{ DrillUp.oKeys_keyboard_pagedown = [];}
	if( DrillUp.parameters['键盘-上'] != "" ){ DrillUp.oKeys_keyboard_up = JSON.parse(DrillUp.parameters['键盘-上']); }else{ DrillUp.oKeys_keyboard_up = [];}
	if( DrillUp.parameters['键盘-下'] != "" ){ DrillUp.oKeys_keyboard_down = JSON.parse(DrillUp.parameters['键盘-下']); }else{ DrillUp.oKeys_keyboard_down = [];}
	if( DrillUp.parameters['键盘-左'] != "" ){ DrillUp.oKeys_keyboard_left = JSON.parse(DrillUp.parameters['键盘-左']); }else{ DrillUp.oKeys_keyboard_left = [];}
	if( DrillUp.parameters['键盘-右'] != "" ){ DrillUp.oKeys_keyboard_right = JSON.parse(DrillUp.parameters['键盘-右']); }else{ DrillUp.oKeys_keyboard_right = [];}
	
	if( DrillUp.parameters['键盘-菜单键'] != "" ){ DrillUp.oKeys_keyboard_menu = JSON.parse(DrillUp.parameters['键盘-菜单键']); }else{ DrillUp.oKeys_keyboard_menu = [];}
	if( DrillUp.parameters['键盘-跳跃键'] != "" ){ DrillUp.oKeys_keyboard_jump = JSON.parse(DrillUp.parameters['键盘-跳跃键']); }else{ DrillUp.oKeys_keyboard_jump = [];}
	if( DrillUp.parameters['键盘-原地转向键'] != "" ){ DrillUp.oKeys_keyboard_rotate = JSON.parse(DrillUp.parameters['键盘-原地转向键']); }else{ DrillUp.oKeys_keyboard_rotate = [];}
	if( DrillUp.parameters['键盘-举起花盆键'] != "" ){ DrillUp.oKeys_keyboard_pick = JSON.parse(DrillUp.parameters['键盘-举起花盆键']); }else{ DrillUp.oKeys_keyboard_pick = [];}
	if( DrillUp.parameters['键盘-投掷花盆键'] != "" ){ DrillUp.oKeys_keyboard_throw = JSON.parse(DrillUp.parameters['键盘-投掷花盆键']); }else{ DrillUp.oKeys_keyboard_throw = [];}
	if( DrillUp.parameters['键盘-放置炸弹键'] != "" ){ DrillUp.oKeys_keyboard_bomb = JSON.parse(DrillUp.parameters['键盘-放置炸弹键']); }else{ DrillUp.oKeys_keyboard_bomb = [];}
	
//=============================================================================
// ** 插件指令
//=============================================================================
var _drill_OperateKeys_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_OperateKeys_pluginCommand.call(this,command, args);
	if (command === ">按键修改")  { 
		if(args.length == 4){
			var type = String(args[1]);
			var temp1 = String(args[3]);
			if (type === "倒置效果"){
				$gameSystem._drill_input_is_converted = true;
				$gameSystem._drill_input_convert_type = temp1;
				if (temp1 === "恢复方向"){
					$gameSystem._drill_input_is_converted = false;
				}
				$gameSystem.drill_changeGamePadKeys();
				$gameSystem.drill_changeKeyBoardKeys();
			}
		}
	};
	return true;
};

//=============================================================================
// ** ImageManager
//=============================================================================
ImageManager.loadOperateHud = function(filename) {
    return this.loadBitmap('img/operatehud/', filename, 0, true);
};

//=============================================================================
// ** 键位配置
//=============================================================================
	DrillUp.oKeys_padMapper = {
		'A': 0,  
		'B': 1,  
		'X': 2,  
		'Y': 3,  
		'LB': 4, 
		'RB': 5, 
		'上': 12,  
		'下': 13,  
		'左': 14,   
		'右': 15,  
	};
	DrillUp.oKeys_org_padMapper = {
		0: 'ok',        // A
		1: 'cancel',    // B
		2: 'shift',     // X
		3: 'menu',      // Y
		4: 'pageup',    // LB
		5: 'pagedown',  // RB
		12: 'up',       // D-pad up
		13: 'down',     // D-pad down
		14: 'left',     // D-pad left
		15: 'right',    // D-pad right
	};
	
	DrillUp.oKeys_keyboardMapper = {
		'~':192,  '0':48,  '1':49,  '2':50,  '3':51,  '4':52,  '5':53,  '6':54,  '7':55,  '8':56,  '9':57,  '-':189,  '=':187,
		'TAB':109,  'Q':81,  'W':87,  'E':69,  'R':82,  'T':84,  'Y':89,  'U':85,  'I':73,  'O':79,  'P':80,  '[':219,  ']':221,  '\\':220,
		'A':65,  'S':83,  'D':68,  'F':70,  'G':71,  'H':72,  'J':74,  'K':75,  'L':76,  ';':186,  "'":222,
		'SHIFT':16,  'Z':90,  'X':88,  'C':67,  'V':86,  'B':66,  'N':78,  'M':77,  ',':188,  '.':190,  '/':191,
		'上':38,  '下':40,  '左':37,  '右':39,  '空格':32
	};
	DrillUp.oKeys_org_keyMapper = {
		9: 'tab',       // tab
		13: 'ok',       // enter
		16: 'shift',    // shift
		17: 'control',  // control
		18: 'control',  // alt
		27: 'escape',   // escape
		32: 'ok',       // space
		33: 'pageup',   // pageup
		34: 'pagedown', // pagedown
		37: 'left',     // left arrow
		38: 'up',       // up arrow
		39: 'right',    // right arrow
		40: 'down',     // down arrow
		45: 'escape',   // insert
		81: 'pageup',   // Q
		87: 'pagedown', // W
		88: 'escape',   // X
		90: 'ok',       // Z
		96: 'escape',   // numpad 0
		98: 'down',     // numpad 2
		100: 'left',    // numpad 4
		102: 'right',   // numpad 6
		104: 'up',      // numpad 8
		120: 'debug'    // F9
	};
	
//==============================
// * 键位初始化
//==============================
var _drill_okeys_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_drill_okeys_sys_initialize.call(this);
	this._drill_input_is_converted = false;
	this._drill_input_convert_type = "";
	//alert(this.drill_getRandomString(4,["up","down","left","right"]));
	
    this.drill_gamePadKeysInit();
    this.drill_changeGamePadKeys();
	this.drill_keyboardKeysInit();
	this.drill_changeKeyBoardKeys();
};
//==============================
// * 手柄键位初始化
//==============================
Game_System.prototype.drill_gamePadKeysInit = function() {
	
	this._drill_input_pad = {}			
	var pad = this._drill_input_pad;
	var mapper = DrillUp.oKeys_padMapper;
	
	/*----------获取基本键----------*/
	pad['ok'] = Number(mapper[DrillUp.oKeys_pad_ok]);
	pad['cancel'] = Number(mapper[DrillUp.oKeys_pad_cancel]);
	pad['shift'] = Number(mapper[DrillUp.oKeys_pad_shift]);
	pad['pageup'] = Number(mapper[DrillUp.oKeys_pad_pageup]);
	pad['pagedown'] = Number(mapper[DrillUp.oKeys_pad_pagedown]);
	pad['up'] = Number(mapper[DrillUp.oKeys_pad_up]);
	pad['down'] = Number(mapper[DrillUp.oKeys_pad_down]);
	pad['left'] = Number(mapper[DrillUp.oKeys_pad_left]);
	pad['right'] = Number(mapper[DrillUp.oKeys_pad_right]);
	
	this._drill_gamepadMapper = {};		//预置插入基本键（判断重复）
	this._drill_gamepadMapper[ pad['ok'] ] = 'ok';
	this._drill_gamepadMapper[ pad['cancel'] ] = 'cancel';
	this._drill_gamepadMapper[ pad['shift'] ] = 'shift';
	this._drill_gamepadMapper[ pad['pageup'] ] = 'pageup';
	this._drill_gamepadMapper[ pad['pagedown'] ] = 'pagedown';
	this._drill_gamepadMapper[ pad['up'] ] = 'up';
	this._drill_gamepadMapper[ pad['down'] ] = 'down';
	this._drill_gamepadMapper[ pad['left'] ] = 'left';
	this._drill_gamepadMapper[ pad['right'] ] = 'right';
	if(Object.keys(this._drill_gamepadMapper).length < 9){
		alert('画面 - 键盘手柄按键修改器：\n手柄检测到重复的基本键设置，一些按键可能会无法使用。');
	}
	
	/*----------获取扩展键----------*/
	pad['fn'] = Number(mapper[DrillUp.oKeys_pad_fn]);
	if( DrillUp.oKeys_pad_menu.indexOf('功能键') != -1 ){	//菜单键
		pad['menu_has_fn'] = true;
		pad['menu_str'] = String(DrillUp.oKeys_pad_menu.split(' + ')[1]);
		pad['menu'] = Number(mapper[pad['menu_str']]);
	}else{
		pad['menu_has_fn'] = false;
		pad['menu_str'] = DrillUp.oKeys_pad_menu;
		pad['menu'] = Number(mapper[pad['menu_str']]);
	}
	if( DrillUp.oKeys_pad_jump.indexOf('功能键') != -1 ){	//跳跃键
		pad['jump_has_fn'] = true;
		pad['jump_str'] = String(DrillUp.oKeys_pad_jump.split(' + ')[1]);
		pad['jump'] = Number(mapper[pad['jump_str']]);
	}else{
		pad['jump_has_fn'] = false;
		pad['jump_str'] = DrillUp.oKeys_pad_jump;
		pad['jump'] = Number(mapper[pad['jump_str']]);
	}
	if( DrillUp.oKeys_pad_rotate.indexOf('功能键') != -1 ){	//原地转向（比较特殊）
		pad['rotate_has_fn'] = true;
	}else{
		pad['rotate_has_fn'] = false;
	}
	if( DrillUp.oKeys_pad_pick.indexOf('功能键') != -1 ){	//举起花盆
		pad['pick_has_fn'] = true;
		pad['pick_str'] = String(DrillUp.oKeys_pad_pick.split(' + ')[1]);
		pad['pick'] = Number(mapper[pad['pick_str']]);
	}else{
		pad['pick_has_fn'] = false;
		pad['pick_str'] = DrillUp.oKeys_pad_pick;
		pad['pick'] = Number(mapper[pad['pick_str']]);
	}
	if( DrillUp.oKeys_pad_throw.indexOf('功能键') != -1 ){	//投掷花盆
		pad['throw_has_fn'] = true;
		pad['throw_str'] = String(DrillUp.oKeys_pad_throw.split(' + ')[1]);
		pad['throw'] = Number(mapper[pad['throw_str']]);
	}else{
		pad['throw_has_fn'] = false;
		pad['throw_str'] = DrillUp.oKeys_pad_throw;
		pad['throw'] = Number(mapper[pad['throw_str']]);
	}
	if( DrillUp.oKeys_pad_bomb.indexOf('功能键') != -1 ){	//放置炸弹
		pad['bomb_has_fn'] = true;
		pad['bomb_str'] = String(DrillUp.oKeys_pad_bomb.split(' + ')[1]);
		pad['bomb'] = Number(mapper[pad['bomb_str']]);
	}else{
		pad['bomb_has_fn'] = false;
		pad['bomb_str'] = DrillUp.oKeys_pad_bomb;
		pad['bomb'] = Number(mapper[pad['bomb_str']]);
	}
	
	/*----------扩展键查重复----------*/
	pad['fn_repeat'] = '';		//功能键
	var temp_str = this._drill_gamepadMapper[pad['fn']];	//从基本键中获取字段
	if( temp_str != undefined  ){
		pad['fn_repeat'] = temp_str;
	}else{
		pad['fn_repeat'] = 'fn' ;
		this._drill_gamepadMapper[ pad['fn'] ] = 'fn';	//如果没有重合，新建一个key映射
	}
	
	pad['menu_repeat'] = '';		//菜单键
	var temp_str = this._drill_gamepadMapper[pad['menu']];	//从基本键中获取字段
	if( temp_str != undefined ){
		pad['menu_repeat'] = temp_str;
	}else{
		pad['menu_repeat'] = 'menu' ;
		this._drill_gamepadMapper[ pad['menu'] ] = 'menu';	//如果没有重合，新建一个key映射
	}
	
	pad['jump_repeat'] = '';		//跳跃键
	var temp_str = this._drill_gamepadMapper[pad['jump']];	//从基本键中获取字段
	if( temp_str != undefined ){
		pad['jump_repeat'] = temp_str;
	}else{
		pad['jump_repeat'] = 'jump' ;
		this._drill_gamepadMapper[ pad['jump'] ] = 'jump';	//如果没有重合，新建一个key映射
	}
	
	pad['pick_repeat'] = '';		//举起花盆
	var temp_str = this._drill_gamepadMapper[pad['pick']];	//从基本键中获取字段
	if( temp_str != undefined ){
		pad['pick_repeat'] = temp_str;
	}else{
		pad['pick_repeat'] = 'pick' ;
		this._drill_gamepadMapper[ pad['pick'] ] = 'pick';	//如果没有重合，新建一个key映射
	}
	
	pad['throw_repeat'] = '';		//投掷花盆
	var temp_str = this._drill_gamepadMapper[pad['throw']];	//从基本键中获取字段
	if( temp_str != undefined  ){
		pad['throw_repeat'] = temp_str;
	}else{
		pad['throw_repeat'] = 'throw' ;
		this._drill_gamepadMapper[ pad['throw'] ] = 'throw';	//如果没有重合，新建一个key映射
	}
	
	pad['bomb_repeat'] = '';		//放置炸弹
	var temp_str = this._drill_gamepadMapper[pad['bomb']];	//从基本键中获取字段
	if( temp_str != undefined  ){
		pad['bomb_repeat'] = temp_str;
	}else{
		pad['bomb_repeat'] = 'bomb' ;
		this._drill_gamepadMapper[ pad['bomb'] ] = 'bomb';	//如果没有重合，新建一个key映射
	}
	
}
//==============================
// * 改变手柄键位
//==============================
Game_System.prototype.drill_changeGamePadKeys = function() {
	//alert(JSON.stringify(this._drill_gamepadMapper));
	
	var temp_mapper = JSON.parse(JSON.stringify( this._drill_gamepadMapper ));
	var result_mapper = JSON.parse(JSON.stringify( this._drill_gamepadMapper ));	//克隆新实例
	if( this._drill_input_is_converted ){
		for(var key in result_mapper){		//去除方向键
			if(result_mapper[key] == "up" ||
				result_mapper[key] == "down" ||
				result_mapper[key] == "left" ||
				result_mapper[key] == "right"){
				delete result_mapper[key];
			}
		}
		if( this._drill_input_convert_type == "方向翻转"){
			for(var key in temp_mapper){
				if(temp_mapper[key] == "up" ){ result_mapper[key] = "down";}
				if(temp_mapper[key] == "down" ){ result_mapper[key] = "up";}
				if(temp_mapper[key] == "left" ){ result_mapper[key] = "right";}
				if(temp_mapper[key] == "right" ){ result_mapper[key] = "left";}
			}
		}else if( this._drill_input_convert_type == "方向右旋置换"){
			for(var key in temp_mapper){
				if(temp_mapper[key] == "up" ){ result_mapper[key] = "left";}
				if(temp_mapper[key] == "down" ){ result_mapper[key] = "right";}
				if(temp_mapper[key] == "left" ){ result_mapper[key] = "up";}
				if(temp_mapper[key] == "right" ){ result_mapper[key] = "down";}
			}
		}else if( this._drill_input_convert_type == "方向随机混乱"){
			var r_string = this.drill_getRandomString(4,["up","down","left","right"]);
			for(var key in temp_mapper){
				if(temp_mapper[key] == "up" ){ result_mapper[key] = r_string[0];}
				if(temp_mapper[key] == "down" ){ result_mapper[key] = r_string[1];}
				if(temp_mapper[key] == "left" ){ result_mapper[key] = r_string[2];}
				if(temp_mapper[key] == "right" ){ result_mapper[key] = r_string[3];}
			}
		}
	}
	
	Input.gamepadMapper = result_mapper;

}
//==============================
// * 判断手柄控制
//==============================
Input.drill_isGamepadControling = function() {
	if (navigator.getGamepads) {
		var gamepads = navigator.getGamepads();
		if (gamepads) {
			for (var i = 0; i < gamepads.length; i++) {
				var gamepad = gamepads[i];
				if (gamepad && gamepad.connected) return true;
			}
		}
	}
	return false;
};

//==============================
// * 键盘键位初始化
//==============================
Game_System.prototype.drill_keyboardKeysInit = function() {
		
	this._drill_input_keyboard = {}			
	var board = this._drill_input_keyboard;
	var mapper = DrillUp.oKeys_keyboardMapper;
	
	/*----------获取基本键----------*/
	board['ok'] = DrillUp.oKeys_keyboard_ok.map( function(value,index,array){ return Number(mapper[ String(value).toUpperCase() ]); } , this)
	board['cancel'] = DrillUp.oKeys_keyboard_cancel.map( function(value,index,array){ return Number(mapper[ String(value).toUpperCase() ]); } , this)
	board['shift'] = DrillUp.oKeys_keyboard_shift.map( function(value,index,array){ return Number(mapper[ String(value).toUpperCase() ]); } , this)
	board['pageup'] = DrillUp.oKeys_keyboard_pageup.map( function(value,index,array){ return Number(mapper[ String(value).toUpperCase() ]); } , this)
	board['pagedown'] = DrillUp.oKeys_keyboard_pagedown.map( function(value,index,array){ return Number(mapper[ String(value).toUpperCase() ]); } , this)
	board['up'] = DrillUp.oKeys_keyboard_up.map( function(value,index,array){ return Number(mapper[ String(value).toUpperCase() ]); } , this)
	board['down'] = DrillUp.oKeys_keyboard_down.map( function(value,index,array){ return Number(mapper[ String(value).toUpperCase() ]); } , this)
	board['left'] = DrillUp.oKeys_keyboard_left.map( function(value,index,array){ return Number(mapper[ String(value).toUpperCase() ]); } , this)
	board['right'] = DrillUp.oKeys_keyboard_right.map( function(value,index,array){ return Number(mapper[ String(value).toUpperCase() ]); } , this)
	
	
	this._drill_keyboardMapper = {};		//预置插入基本键（判断重复）
	board['ok'].forEach( function(value,index,array){ this._drill_keyboardMapper[ value ] = 'ok'; }, this )
	board['cancel'].forEach( function(value,index,array){ this._drill_keyboardMapper[ value ] = 'cancel'; }, this )
	board['shift'].forEach( function(value,index,array){ this._drill_keyboardMapper[ value ] = 'shift'; }, this )
	board['pageup'].forEach( function(value,index,array){ this._drill_keyboardMapper[ value ] = 'pageup'; }, this )
	board['pagedown'].forEach( function(value,index,array){ this._drill_keyboardMapper[ value ] = 'pagedown'; }, this )
	board['up'].forEach( function(value,index,array){ this._drill_keyboardMapper[ value ] = 'up'; }, this )
	board['down'].forEach( function(value,index,array){ this._drill_keyboardMapper[ value ] = 'down'; }, this )
	board['left'].forEach( function(value,index,array){ this._drill_keyboardMapper[ value ] = 'left'; }, this )
	board['right'].forEach( function(value,index,array){ this._drill_keyboardMapper[ value ] = 'right'; }, this )
	var count = 0;
	count += board['ok'].length;
	count += board['cancel'].length;
	count += board['shift'].length;
	count += board['pageup'].length;
	count += board['pagedown'].length;
	count += board['up'].length;
	count += board['down'].length;
	count += board['left'].length;
	count += board['right'].length;
	if(Object.keys(this._drill_keyboardMapper).length < count ){
		alert('画面 - 键盘手柄按键修改器：\n键盘检测到重复的基本键设置，一些按键可能会无法使用。');
	}
	
	/*----------获取扩展键----------*/
	//干脆，扩展键直接全部是两个键控制的，两个键同时按下才可以生效
	
	board['menu'] = DrillUp.oKeys_keyboard_menu.map( function(value,index,array){ 
		var _map = {};
		var keys = value.split(/ \+ /);	//分离AB键
		if(keys.length == 1){
			_map.A = Number(mapper[keys[0].toUpperCase()]);
			_map.B = -1;
		}else{
			_map.A = Number(mapper[keys[0].toUpperCase()]);
			_map.B = Number(mapper[keys[1].toUpperCase()]);
		}
		//AB键两个检测是否在映射中存在（不存在，创建映射字段）
		if( _map.A == -1 ){ 
			_map.AA = "" 
		}else{
			if( this._drill_keyboardMapper[ _map.A ] == undefined ){ 
				if( _map.B == -1 ){
					_map.AA = 'menu_SA';	//单键时
				}else{
					_map.AA = 'menu_A';		//双键时
				}
				this._drill_keyboardMapper[ _map.A ] = _map.AA; 
			}else{
				if( this._drill_keyboardMapper[ _map.A ] == "cancel" ){	//菜单键合并的特殊情况
					this._drill_keyboardMapper[ _map.A ] = "escape"; 
				}
				_map.AA = this._drill_keyboardMapper[ _map.A ];
			}
		}
		if( _map.B == -1 ){ 
			_map.BB = "" 
		}else{
			if( this._drill_keyboardMapper[ _map.B ] == undefined ){ 
				_map.BB = 'menu_B';
				this._drill_keyboardMapper[ _map.B ] = _map.BB; 
			}else{
				if( this._drill_keyboardMapper[ _map.B ] == "cancel" ){	//菜单键合并的特殊情况
					this._drill_keyboardMapper[ _map.B ] = "escape"; 
				}
				_map.BB = this._drill_keyboardMapper[ _map.B ];
			}
		}
		return _map; 
	} , this);
	
	//后面的原理一样
	board['jump'] = DrillUp.oKeys_keyboard_jump.map( function(value,index,array){ var _map = {};var keys = value.split(/ \+ /);if(keys.length == 1){ _map.A = Number(mapper[keys[0].toUpperCase()]); _map.B = -1;}else{ _map.A = Number(mapper[keys[0].toUpperCase()]); _map.B = Number(mapper[keys[1].toUpperCase()]);}if( _map.A == -1 ){ _map.AA = "" }else{if( this._drill_keyboardMapper[ _map.A ] == undefined ){if( _map.B == -1 ){_map.AA = 'jump_SA';}else{_map.AA = 'jump_A';};this._drill_keyboardMapper[ _map.A ] = _map.AA; }else{_map.AA = this._drill_keyboardMapper[ _map.A ];}}if( _map.B == -1 ){ _map.BB = "" }else{if( this._drill_keyboardMapper[ _map.B ] == undefined ){ _map.BB = 'jump_B';this._drill_keyboardMapper[ _map.B ] = _map.BB; }else{_map.BB = this._drill_keyboardMapper[ _map.B ];}}return _map; } , this);
	board['rotate'] = DrillUp.oKeys_keyboard_rotate.map( function(value,index,array){ var _map = {};var keys = value.split(/ \+ /);if(keys.length == 1){ _map.A = Number(mapper[keys[0].toUpperCase()]); _map.B = -1;}else{ _map.A = Number(mapper[keys[0].toUpperCase()]); _map.B = Number(mapper[keys[1].toUpperCase()]);}if( _map.A == -1 ){ _map.AA = "" }else{if( this._drill_keyboardMapper[ _map.A ] == undefined ){if( _map.B == -1 ){_map.AA = 'rotate_SA';}else{_map.AA = 'rotate_A';};this._drill_keyboardMapper[ _map.A ] = _map.AA; }else{_map.AA = this._drill_keyboardMapper[ _map.A ];}}if( _map.B == -1 ){ _map.BB = "" }else{if( this._drill_keyboardMapper[ _map.B ] == undefined ){ _map.BB = 'rotate_B';this._drill_keyboardMapper[ _map.B ] = _map.BB; }else{_map.BB = this._drill_keyboardMapper[ _map.B ];}}return _map; } , this);
	board['pick'] = DrillUp.oKeys_keyboard_pick.map( function(value,index,array){ var _map = {};var keys = value.split(/ \+ /);if(keys.length == 1){ _map.A = Number(mapper[keys[0].toUpperCase()]); _map.B = -1;}else{ _map.A = Number(mapper[keys[0].toUpperCase()]); _map.B = Number(mapper[keys[1].toUpperCase()]);}if( _map.A == -1 ){ _map.AA = "" }else{if( this._drill_keyboardMapper[ _map.A ] == undefined ){if( _map.B == -1 ){_map.AA = 'pick_SA';}else{_map.AA = 'pick_A';};this._drill_keyboardMapper[ _map.A ] = _map.AA; }else{_map.AA = this._drill_keyboardMapper[ _map.A ];}}if( _map.B == -1 ){ _map.BB = "" }else{if( this._drill_keyboardMapper[ _map.B ] == undefined ){ _map.BB = 'pick_B';this._drill_keyboardMapper[ _map.B ] = _map.BB; }else{_map.BB = this._drill_keyboardMapper[ _map.B ];}}return _map; } , this);
	board['throw'] = DrillUp.oKeys_keyboard_throw.map( function(value,index,array){ var _map = {};var keys = value.split(/ \+ /);if(keys.length == 1){ _map.A = Number(mapper[keys[0].toUpperCase()]); _map.B = -1;}else{ _map.A = Number(mapper[keys[0].toUpperCase()]); _map.B = Number(mapper[keys[1].toUpperCase()]);}if( _map.A == -1 ){ _map.AA = "" }else{if( this._drill_keyboardMapper[ _map.A ] == undefined ){if( _map.B == -1 ){_map.AA = 'throw_SA';}else{_map.AA = 'throw_A';};this._drill_keyboardMapper[ _map.A ] = _map.AA; }else{_map.AA = this._drill_keyboardMapper[ _map.A ];}}if( _map.B == -1 ){ _map.BB = "" }else{if( this._drill_keyboardMapper[ _map.B ] == undefined ){ _map.BB = 'throw_B';this._drill_keyboardMapper[ _map.B ] = _map.BB; }else{_map.BB = this._drill_keyboardMapper[ _map.B ];}}return _map; } , this);
	board['bomb'] = DrillUp.oKeys_keyboard_bomb.map( function(value,index,array){ var _map = {};var keys = value.split(/ \+ /);if(keys.length == 1){ _map.A = Number(mapper[keys[0].toUpperCase()]); _map.B = -1;}else{ _map.A = Number(mapper[keys[0].toUpperCase()]); _map.B = Number(mapper[keys[1].toUpperCase()]);}if( _map.A == -1 ){ _map.AA = "" }else{if( this._drill_keyboardMapper[ _map.A ] == undefined ){if( _map.B == -1 ){_map.AA = 'bomb_SA';}else{_map.AA = 'bomb_A';};this._drill_keyboardMapper[ _map.A ] = _map.AA; }else{_map.AA = this._drill_keyboardMapper[ _map.A ];}}if( _map.B == -1 ){ _map.BB = "" }else{if( this._drill_keyboardMapper[ _map.B ] == undefined ){ _map.BB = 'bomb_B';this._drill_keyboardMapper[ _map.B ] = _map.BB; }else{_map.BB = this._drill_keyboardMapper[ _map.B ];}}return _map; } , this);
	
}
//==============================
// * 改变键盘键位
//==============================
Game_System.prototype.drill_changeKeyBoardKeys = function() {
	//alert(JSON.stringify(this._drill_keyboardMapper));
	//alert(JSON.stringify(this._drill_input_keyboard));
	
	var temp_mapper = JSON.parse(JSON.stringify( this._drill_keyboardMapper ));
	var result_mapper = JSON.parse(JSON.stringify( this._drill_keyboardMapper ));	//克隆新实例
	if( this._drill_input_is_converted ){
		for(var key in result_mapper){		//去除方向键
			if(result_mapper[key] == "up" ||
				result_mapper[key] == "down" ||
				result_mapper[key] == "left" ||
				result_mapper[key] == "right"){
				delete result_mapper[key];
			}
		}
		if( this._drill_input_convert_type == "方向翻转"){
			for(var key in temp_mapper){
				if(temp_mapper[key] == "up" ){ result_mapper[key] = "down";}
				if(temp_mapper[key] == "down" ){ result_mapper[key] = "up";}
				if(temp_mapper[key] == "left" ){ result_mapper[key] = "right";}
				if(temp_mapper[key] == "right" ){ result_mapper[key] = "left";}
			}
		}else if( this._drill_input_convert_type == "方向右旋置换"){
			for(var key in temp_mapper){
				if(temp_mapper[key] == "up" ){ result_mapper[key] = "left";}
				if(temp_mapper[key] == "down" ){ result_mapper[key] = "right";}
				if(temp_mapper[key] == "left" ){ result_mapper[key] = "up";}
				if(temp_mapper[key] == "right" ){ result_mapper[key] = "down";}
			}
		}else if( this._drill_input_convert_type == "方向随机混乱"){
			var r_string = this.drill_getRandomString(4,["up","down","left","right"]);
			for(var key in temp_mapper){
				if(temp_mapper[key] == "up" ){ result_mapper[key] = r_string[0];}
				if(temp_mapper[key] == "down" ){ result_mapper[key] = r_string[1];}
				if(temp_mapper[key] == "left" ){ result_mapper[key] = r_string[2];}
				if(temp_mapper[key] == "right" ){ result_mapper[key] = r_string[3];}
			}
		}
	}
	
	Input.keyMapper = result_mapper;
}
//==============================
// * 从数组中随机抽取指定数量的值
//==============================
Game_System.prototype.drill_getRandomString = function(count,list) {
	var list_from = JSON.parse(JSON.stringify( list ));
	var list_result = [];
	for(var i=0; i < count ; i++){
		var index = Math.floor(Math.random() * list_from.length);
		list_result.push(list_from[index]);
		list_from.splice(index,1);
	}
	return list_result;
}


//==============================
// * 进入菜单按键条件
//==============================
Scene_Map.prototype.isMenuCalled = function() {
	
	if(Input.drill_isGamepadControling()){	//手柄
		if( $gameSystem._drill_input_pad['menu_has_fn'] ){
			return ( Input.isTriggered($gameSystem._drill_input_pad['menu_repeat']) 
			&& Input.isPressed($gameSystem._drill_input_pad['fn_repeat']) );
		}
		return Input.isTriggered($gameSystem._drill_input_pad['menu_repeat']);
	}else{
		if( TouchInput.isCancelled() ){return true;}	//鼠标按下
		
		//键盘
		if( $gameSystem._drill_input_keyboard['menu'].map( function(value,index,array){ 
				//alert(JSON.stringify(value));
				var b = false;
				if( value.BB == "" ){
					if(Input.isTriggered( value.AA )){
						b = true;
					}
				}else{
					if( (Input.isTriggered( value.AA ) && Input.isPressed( value.BB ) ) ||
						(Input.isPressed( value.AA ) && Input.isTriggered( value.BB ) )
						){		//按住A，然后按一下B  ||  按住B，然后按一下A
						b = true;
					}
				}
				return b; 
				
			}, this).indexOf(true) != -1
		){
			return true
		}
		return false;
	}
};

//==============================
// * 举起投掷按键条件
//==============================
if(Imported.Drill_PickThrow){
	//举起默认与确定键绑定，如果举起与确定键分离，则换为手动与举起的花盆互动。
	var _drill_okeys_pick_triggerButtonAction = Game_Player.prototype.triggerButtonAction;
	Game_Player.prototype.triggerButtonAction = function() {
		var r = _drill_okeys_pick_triggerButtonAction.call(this);
		if(r == false){
			if(Input.drill_isGamepadControling()){	//手柄
				if ( Input.isTriggered($gameSystem._drill_input_pad['pick_repeat']) ) {
					this.checkEventTriggerHere([0]);
					if ($gameMap.setupStartingEvent()) {
						return true;
					}
					this.checkEventTriggerThere([0,1,2]);
					if ($gameMap.setupStartingEvent()) {
						return true;
					}
				}
			}else{	//键盘
				if( $gameSystem._drill_input_keyboard['pick'].map( function(value,index,array){ 
						var b = false;
						if( value.BB == "" ){
							if(Input.isTriggered( value.AA )){
								b = true;
							}
						}else{
							if( (Input.isTriggered( value.AA ) && Input.isPressed( value.BB ) ) ||
								(Input.isPressed( value.AA ) && Input.isTriggered( value.BB ) )
								){		//按住A，然后按一下B  ||  按住B，然后按一下A
								b = true;
							}
						}
						return b; 
					}, this).indexOf(true) != -1
				){
					return true
				}
				return false;
			}
		}
		return r;
	};
	
	Game_Player.prototype.drill_isPickControl = function() {
		if( TouchInput.isPressed() || Input.isPressed('ok') ){return true;}	//鼠标
		if(Input.drill_isGamepadControling()){	//手柄
			if( $gameSystem._drill_input_pad['pick_has_fn'] ){
				return ( Input.isPressed($gameSystem._drill_input_pad['pick_repeat']) 
				&& Input.isPressed($gameSystem._drill_input_pad['fn_repeat']) );
			}
			return Input.isPressed($gameSystem._drill_input_pad['pick_repeat']);
		}else{	//键盘
			if( $gameSystem._drill_input_keyboard['pick'].map( function(value,index,array){ 
					var b = true;
					if( value.AA != "" && !Input.isPressed( value.AA ) ){
						b = false;
					}
					if( value.BB != "" && !Input.isPressed( value.BB ) ){
						b = false;
					}
					return b; 
					
				}, this).indexOf(true) != -1
			){
				return true
			}
			return false;
		}
	}
	Game_Player.prototype.drill_isThrowControl = function() {
		if(Input.drill_isGamepadControling()){	//手柄
			if( $gameSystem._drill_input_pad['throw_has_fn'] ){
				return ( Input.isPressed($gameSystem._drill_input_pad['throw_repeat']) 
				&& Input.isPressed($gameSystem._drill_input_pad['fn_repeat']) );
			}
			return Input.isPressed($gameSystem._drill_input_pad['throw_repeat']);
		}else{	//键盘
			if( $gameSystem._drill_input_keyboard['throw'].map( function(value,index,array){ 
					var b = true;
					if( value.AA != "" && !Input.isPressed( value.AA ) ){
						b = false;
					}
					if( value.BB != "" && !Input.isPressed( value.BB ) ){
						b = false;
					}
					return b; 
					
				}, this).indexOf(true) != -1
			){
				return true
			}
			return false;
		}
	}
}

//==============================
// * 跳跃按键条件
//==============================
if(Imported.Drill_Jump){
	Game_Player.prototype.drill_isJumpControl = function() {
		if(DrillUp.jump_mouse){ return true; }
		if(Input.drill_isGamepadControling()){	//手柄
			if( $gameSystem._drill_input_pad['jump_has_fn'] ){
				return ( Input.isPressed($gameSystem._drill_input_pad['jump_repeat']) 
				&& Input.isPressed($gameSystem._drill_input_pad['fn_repeat']) );
			}
			return Input.isPressed($gameSystem._drill_input_pad['jump_repeat']);
		}else{
			//键盘监听
			if( $gameSystem._drill_input_keyboard['jump'].map( function(value,index,array){ 
					var b = false;
					if( value.BB == "" ){
						if(Input.isTriggered( value.AA )){
							b = true;
						}
					}else{
						if( (Input.isTriggered( value.AA ) && Input.isPressed( value.BB ) ) ||
							(Input.isPressed( value.AA ) && Input.isTriggered( value.BB ) )
							){		//按住A，然后按一下B  ||  按住B，然后按一下A
							b = true;
						}
					}
					return b; 
				}, this).indexOf(true) != -1
			){
				return true
			}
			return false;
		}
	}
}

//==============================
// * 原地转向按键条件
//==============================
if(Imported.Drill_RotateDirection){
	Game_Player.prototype.drill_isRotateControl = function() {
		if(Input.drill_isGamepadControling()){	//手柄
			if( $gameSystem._drill_input_pad['rotate_has_fn'] ){
				return Input.isPressed( $gameSystem._drill_input_pad['fn_repeat'] ) && 
					( this.getInputDirection() == 2 ||
					 this.getInputDirection() == 4 ||
					 this.getInputDirection() == 6 ||
					 this.getInputDirection() == 8 
					);
			}else{
				return  !Input.isPressed( $gameSystem._drill_input_pad['fn_repeat'] ) && 
					( this.getInputDirection() == 2 ||
					 this.getInputDirection() == 4 ||
					 this.getInputDirection() == 6 ||
					 this.getInputDirection() == 8 
					);
			}
		}else{	//键盘
			if( $gameSystem._drill_input_keyboard['rotate'].map( function(value,index,array){ 
					return Input.isPressed( value.AA ) ;
				}, this).indexOf(true) != -1
			){
				return true && ( this.getInputDirection() == 2 ||
					 this.getInputDirection() == 4 ||
					 this.getInputDirection() == 6 ||
					 this.getInputDirection() == 8 
					);
			}
			return false;
		}
	}
}

//==============================
// * 放置炸弹按键条件
//==============================
if(Imported.Drill_BombCore){
	Game_Player.prototype.drill_isBombControl = function() {
		if(Input.drill_isGamepadControling()){	//手柄
			if( $gameSystem._drill_input_pad['bomb_has_fn'] ){
				return ( Input.isPressed($gameSystem._drill_input_pad['bomb_repeat']) 
				&& Input.isPressed($gameSystem._drill_input_pad['fn_repeat']) );
			}
			return Input.isPressed($gameSystem._drill_input_pad['bomb_repeat']);
		}else{
			//键盘监听
			return $gameSystem._drill_input_keyboard['bomb'].some( function(value,index,array){ 
				if( value.BB == "" ){
					if(Input.isTriggered( value.AA )){
						return true;
					}
					return false;
				}else{
					if( (Input.isTriggered( value.AA ) && Input.isPressed( value.BB ) ) ||
						(Input.isPressed( value.AA ) && Input.isTriggered( value.BB ) )
						){		//按住A，然后按一下B  ||  按住B，然后按一下A
						return true;
					}
					return false;
				}
			},this);
		}
	}
}
