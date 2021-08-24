//=============================================================================
// Drill_BattleGIF.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        战斗 - 多层战斗GIF
 * @author Drill_up
 *
 * @help
 * =============================================================================
 * +++ Drill_BattleGIF +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 你可以在战斗中放置一个或者多个战斗GIF。
 * 要了解更详细的组合方法，去看看"多层组合背景,粒子,GIF,gif,视频.docx"。
 * 【支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----插件说明
 * 1.GIF的图片层级将与魔法圈、背景等相互控制。
 * 2.GIF的资源和播放控制需要在配置中配好预设，插件指令调用预设的id。
 * 注意区分 GIF编号、GIF预设编号、图片层级 三者关系。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 先确保项目img文件夹下是否有battlebacks1文件夹！（img/battlebacks1）
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * GIF1 资源-GIF
 * GIF2 资源-GIF
 * GIF3 资源-GIF
 * ……
 *
 * 所有素材都放在battlebacks1下，不分多余文件夹。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 你可以通过插件指令控制战斗GIF的显示情况：
 * （8个基本参数，冒号两边有一个空格。）
 * 
 * 插件指令：>清空战斗GIF
 * 插件指令：>创建战斗GIF : A : B : C : D : E : F : G : H
 *
 * 参数A：GIF编号
 *        给GIF分配的编号，如果重复编号的GIF被创建，那么会被覆盖。
 * 参数B：GIF预设编号
 *        对应gif配置中预设配置的编号。
 * 参数C：图片层级
 *        在相同菜单层级下，先后排序的位置，0表示最后面。
 * 参数D：菜单层级
 *        所属的菜单层级，填入：上层、下层。
 * 参数E：X位置
 *        按x轴方向循环移动的速度。0表示圈心贴在初始镜头的最左边。（可为负数）
 * 参数F：Y位置
 *        按y轴方向循环移动的速度。0表示圈心贴在初始镜头的最上面。（可为负数）
 * 参数G：旋转速度
 *        正数逆时针，负数顺时针，单位 弧度/帧。(1秒60帧)
 *        6.28表示一圈，设置0.01表示大概10秒转一圈，设置0则不旋转。
 * 参数H：位移比
 *        与镜头插件相关，GIF与镜头移动位移的比例。
 *        设置1.00，GIF和镜头的位移一致。设置0.00则GIF不随镜头移动。
 *
 * 示例：
 * 插件指令：>清空战斗GIF
 * 插件指令：>创建战斗GIF : 1 : 数字阵列 : 1 : 上层 : -1.0 : 1.0 : 0.60
 * 插件指令：>创建战斗GIF : 2 : F碎片 : 12 : 下层 : 0.93 : 0 : 0.00
 * （进入战斗前，最好先清空一下战斗GIF，避免干扰）
 * （清空默认会包括清空背景、魔法圈、gif、视频，只要有一个清空指令就可以了。）
 *
 * -----------------------------------------------------------------------------
 * ----高级设置
 * 随着战斗的深入，战斗GIF也可能会根据特殊情况变化：
 * 
 * 插件指令：>战斗GIF : A : 变坐标 : H : I : K1 : K2 
 * 插件指令：>战斗GIF : A : 变速度 : H : I : L1 : L2
 * 插件指令：>战斗GIF : A : 变透明 : H : I : M
 * 插件指令：>战斗GIF : A : 变转速 : H : I : N
 * 插件指令：>战斗GIF : A : 变色调 : H : I : O1 : O2 : O3 : O4
 * 插件指令：>战斗GIF : A : 变缩放 : H : I : P1 : P2
 * 插件指令：>战斗GIF : A : 变斜切 : H : I : Q1 : Q2
 * 插件指令：>战斗GIF : A : 变混合模式 : H : R
 *
 * 参数H：开始时间
 *        插件指令生效后，开始变化的延迟时间。单位帧。（1秒60帧）
 *        在战斗前设置90，表示进入战斗后，1.5秒时开始变化。
 *        在战斗时设置30，表示插件指令调用后0.5秒时开始变化。
 * 参数I：变化持续时间
 *        当前的属性，变化到设置的目标属性值的时间。
 * 参数K：xy坐标
 *        在指定时间内，移动到给定的x坐标和y坐标。
 *        （一般将没有速度的GIF匀速移动到指定的位置）
 * 参数L：xy速度
 *        在指定时间内，变化到给定的x速度和y速度。
 *        （GIF初始速度为0）
 * 参数M：透明度
 *        在指定时间内，变化到给定的透明度。范围在0-255之间。
 * 参数N：旋转速度
 *        在指定时间内，变化到给定的旋转速度。
 * 参数O：色调值
 *        分别对应颜色的 红，绿，蓝，明度。范围在0-255之间。
 *        （连续变色调不建议使用，因为消耗大，容易卡顿）
 * 参数P：xy缩放
 *        在指定时间内，变化到给定的xy缩放值，默认为 1.0。
 *        （用于GIF类3d效果）
 * 参数Q：xy斜切
 *        在指定时间内，变化到给定的xy斜切值，默认为 0.0。
 *        （用于GIF类3d效果）
 * 参数R：混合模式
 *        混合模式为瞬间切换，0-普通,1-叠加。
 *        其他更详细相关介绍，去看看"pixi的渲染混合模式"。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 *
 *
 *
 * @param ---GIF组 1至20---
 * @default
 *
 * @param GIF-1
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-2
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-3
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-4
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-5
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-6
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-7
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-8
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-9
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-10
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-11
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-12
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-13
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-14
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-15
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-16
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-17
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-18
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-19
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-20
 * @parent ---GIF组 1至20---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param ---GIF组21至40---
 * @default
 *
 * @param GIF-21
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-22
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-23
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-24
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-25
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-26
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-27
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-28
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-29
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-30
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-31
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-32
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-33
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-34
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-35
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-36
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-37
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-38
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-39
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-40
 * @parent ---GIF组21至40---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param ---GIF组41至60---
 * @default
 *
 * @param GIF-41
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-42
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-43
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-44
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-45
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-46
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-47
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-48
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-49
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-50
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-51
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-52
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-53
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-54
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-55
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-56
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-57
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-58
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-59
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-60
 * @parent ---GIF组41至60---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param ---GIF组61至80---
 * @default
 *
 * @param GIF-61
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-62
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-63
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-64
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-65
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-66
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-67
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-68
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-69
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-70
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-71
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-72
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-73
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-74
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-75
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-76
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-77
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-78
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-79
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-80
 * @parent ---GIF组61至80---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param ---GIF组81至100---
 * @default
 *
 * @param GIF-81
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-82
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-83
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-84
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-85
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-86
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-87
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-88
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-89
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-90
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-91
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-92
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-93
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-94
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-95
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-96
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-97
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-98
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-99
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-100
 * @parent ---GIF组81至100---
 * @type struct<BattleGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 */
/*~struct~BattleGIF:
 *
 * @param 标签
 * @desc 只用于方便区分查看的标签，不作用在插件中。
 * @default ==新的GIF资源==
 *
 * @param 资源-GIF
 * @desc GIF的图片资源组。
 * @default ["GIF-默认"]
 * @require 1
 * @dir img/battlebacks1/
 * @type file[]
 *
 * @param 帧间隔
 * @type number
 * @min 1
 * @desc gif每帧播放间隔时间，单位帧。（1秒60帧）
 * @default 4
 *
 * @param 是否倒放
 * @type boolean
 * @on 倒放
 * @off 不倒放
 * @desc true - 倒放，false - 不倒放
 * @default false
 *
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		临时全局变量	DrillUp.xxx
//		临时局部变量	this._drill_xxx
//		存储数据变量	$gameSystem._drill_xxx
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		原理非常简单，在Spriteset_Battle上面建立 菜单前面层和菜单后面层。
//		然后通过插件指令添加Sprite就可以了。
//		变化效果，通过建立计时器，实时对 变化(json串)进行扫描，变化 结束生命周期后自动销毁。
//			

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_BattleGIF = true;
　　var DrillUp = DrillUp || {}; 
	DrillUp.parameters = PluginManager.parameters('Drill_BattleGIF');
	
	DrillUp.battle_gifs_max = 100;
	DrillUp.battle_gifs = [];
	
	for (var i = 0; i < DrillUp.battle_gifs_max; i++) {
		if( DrillUp.parameters['GIF-' + String(i+1) ] != "" ){
			DrillUp.battle_gifs[i] = JSON.parse(DrillUp.parameters['GIF-' + String(i+1) ]);
			DrillUp.battle_gifs[i]['src_img'] = JSON.parse(DrillUp.battle_gifs[i]["资源-GIF"]);
			DrillUp.battle_gifs[i]['interval'] = Number(DrillUp.battle_gifs[i]["帧间隔"] || 1);
			DrillUp.battle_gifs[i]['run_back'] = String(DrillUp.battle_gifs[i]["是否倒放"] || "true") == "true";
		}else{
			DrillUp.battle_gifs[i] = [];
		}
	}
	//alert(JSON.stringify(DrillUp.battle_gifs[0]));
	
//=============================================================================
// * 插件指令
//=============================================================================
var _drill_battle_gifs_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_battle_gifs_pluginCommand.call(this, command, args);
	
	if (command === '>创建战斗GIF') { // >创建战斗GIF : 1 : 1 : 1 : 上层 : -1.0 : 1.0 : 0.01 : 0.60
		if(args.length == 16){
			var index = Number(args[1]);
			$gameSystem._drill_battle_gifs_data[index] = {};								//GIFid
			$gameSystem._drill_battle_gifs_data[index]['src_img'] = DrillUp.battle_gifs[ Number(args[3])-1 ]['src_img'];		//GIF资源名
			$gameSystem._drill_battle_gifs_data[index]['interval'] = DrillUp.battle_gifs[ Number(args[3])-1 ]['interval'];		//GIF帧间隔
			$gameSystem._drill_battle_gifs_data[index]['run_back'] = DrillUp.battle_gifs[ Number(args[3])-1 ]['run_back'];		//GIF倒放
			$gameSystem._drill_battle_gifs_data[index]['zIndex'] = Number(args[5]);			//GIF图片层级
			$gameSystem._drill_battle_gifs_data[index]['area_index'] = String(args[7]);		//GIF菜单层级
			$gameSystem._drill_battle_gifs_data[index]['x'] = Number(args[9]);				//GIF X
			$gameSystem._drill_battle_gifs_data[index]['y'] = Number(args[11]);				//GIF Y
			$gameSystem._drill_battle_gifs_data[index]['r_speed'] = Number(args[13]);		//GIF 旋转速度
			$gameSystem._drill_battle_gifs_data[index]['rate'] = Number(args[15]);			//GIF位移比
			$gameSystem._drill_battle_gifs_data[index]['x_speed'] = 0;
			$gameSystem._drill_battle_gifs_data[index]['y_speed'] = 0;
			$gameSystem._drill_battle_gifs_data[index]['src_bitmaps'] = [];
			//alert(JSON.stringify($gameSystem._drill_battle_gifs_data[index]));
		}
	}
	if (command === '>清空战斗GIF') {
		$gameSystem._drill_battle_backgrounds_data = [];
		$gameSystem._drill_battle_backgrounds_changing = [];
		$gameSystem._drill_battle_circles_data = [];
		$gameSystem._drill_battle_circles_changing = [];
		$gameSystem._drill_battle_gifs_data = [];
		$gameSystem._drill_battle_gifs_changing = [];
		DrillUp.battle_video_cur_filepath = "";
	}
	if (command === '>战斗GIF') { // >战斗GIF : A : 变色调 : H : I : J1 : J2 : J3 : J4
		if(args.length >= 10){
			var changing = {};
			changing['destroy'] = false;
			changing['id'] = Number(args[1]);
			changing['type'] = String(args[3]);
			changing['start'] = Number(args[5]);
			changing['sustain'] = Number(args[7]);
			changing['data1'] = Number(args[9]);
			if( args[11] != undefined ){ changing['data2'] = Number(args[11]); }
			if( args[13] != undefined ){ changing['data3'] = Number(args[13]); }
			if( args[15] != undefined ){ changing['data4'] = Number(args[15]); }	
			if( SceneManager._scene.constructor.name === "Scene_Battle" ){		//区别战斗外，战斗中的开始时间
				changing['start'] = Number(args[5]) + ($gameSystem._drill_battle_gifs_timer || 0);
			}
			$gameSystem._drill_battle_gifs_changing.push(changing);
		}
	}
};
//==============================
// * 插件设置存储准备
//==============================
var _drill_battle_gif_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_drill_battle_gif_sys_initialize.call(this);
    this._drill_battle_gifs_data = [];
    this._drill_battle_gifs_changing = [];
    this._drill_battle_gifs_timer = 0;
};

//=============================================================================
// ** 从 Spriteset_Battle 中进行GIF追加
//=============================================================================

//==============================
// ** 层级排序
//==============================
Spriteset_Battle.prototype.drill_sortByZIndex = function() {
   this._drill_battleDownArea.children.sort(function(a, b){return a.zIndex-b.zIndex});	//比较器
   this._drill_battleUpArea.children.sort(function(a, b){return a.zIndex-b.zIndex});
};

//==============================
// ** 菜单后面层（在敌人、角色战斗图之前放置）
//==============================
var _drill_battle_gif_createBattleback = Spriteset_Battle.prototype.createBattleback;
Spriteset_Battle.prototype.createBattleback = function() {    
	_drill_battle_gif_createBattleback.call(this);
	
	if( !this._drill_battleDownArea ){		//菜单后面层
		this._drill_battleDownArea = new Sprite();
		this._battleField.addChild(this._drill_battleDownArea);	
	}
};

//==============================
// * 创建GIF
//==============================
var _drill_battle_gif_createLowerLayer = Spriteset_Battle.prototype.createLowerLayer;
Spriteset_Battle.prototype.createLowerLayer = function() {
    _drill_battle_gif_createLowerLayer.call(this);
	
	this._drill_sprite_gifs = [];		//数据初始化
	this._drill_sprite_gifs_data = [];
	$gameSystem._drill_battle_gifs_timer = 0;
	
	if( !this._drill_battleUpArea ){		//菜单前面层
		this._drill_battleUpArea = new Sprite();
		this._battleField.addChild(this._drill_battleUpArea);
	}
	
	for (var i = 0; i < $gameSystem._drill_battle_gifs_data.length; i++) {
		if( $gameSystem._drill_battle_gifs_data[i] != null ){
			var temp_sprite_data = JSON.parse(JSON.stringify( $gameSystem._drill_battle_gifs_data[i] ));	//拷贝object（杜绝引用造成的修改）
			
			if(temp_sprite_data['src_img'] == null){ 
				this._drill_sprite_gifs.push(null);
				this._drill_sprite_gifs_data.push(null);
				continue;
			}
			for(var j = 0; j < temp_sprite_data['src_img'].length ; j++){
				temp_sprite_data['src_bitmaps'].push(ImageManager.loadBattleback1(temp_sprite_data['src_img'][j]));
			}
			
			var temp_sprite = new Sprite();
			temp_sprite.bitmap = temp_sprite_data['src_bitmaps'][0];
			temp_sprite._move = 0;
			temp_sprite.anchor.x = 0.5;
			temp_sprite.anchor.y = 0.5;
			temp_sprite.x = temp_sprite_data['x'] || 0;
			temp_sprite.y = temp_sprite_data['y'] || 0;
			temp_sprite.opacity = temp_sprite_data['opacity'] || 255;
			temp_sprite.blendMode = temp_sprite_data['blendMode'] || 0;	//混合模式暂时不加
			temp_sprite.zIndex = temp_sprite_data['zIndex'];
			
			this._drill_sprite_gifs.push(temp_sprite);
			this._drill_sprite_gifs_data.push(temp_sprite_data);
			if( temp_sprite_data['area_index'] == '下层' ){
				this._drill_battleDownArea.addChild(temp_sprite);
			}else{
				this._drill_battleUpArea.addChild(temp_sprite);
			}
		}else{
			this._drill_sprite_gifs.push(null);
			this._drill_sprite_gifs_data.push(null);
		}
	}
	//alert( JSON.stringify( $gameSystem._drill_battle_gifs_changing) );
	this.drill_sortByZIndex();
};

//==============================
// * 刷新GIF
//==============================
var _drill_battle_gif_update = Spriteset_Battle.prototype.update;
Spriteset_Battle.prototype.update = function() {
	_drill_battle_gif_update.call(this);
	
	this.drill_updateGIFs();
};

Spriteset_Battle.prototype.drill_updateGIFs = function() {
	$gameSystem._drill_battle_gifs_timer += 1;
	for (var i = 0; i < this._drill_sprite_gifs.length; i++) {
		if( this._drill_sprite_gifs[i] != null ){
			var temp_sprite_data = this._drill_sprite_gifs_data[i];
			var temp_sprite = this._drill_sprite_gifs[i];
			var b_timer = $gameSystem._drill_battle_gifs_timer;
			//alert(JSON.stringify(temp_sprite_data));
			
			temp_sprite._move += 1;		//gif播放
			var inter = temp_sprite._move ;
			inter = inter / temp_sprite_data['interval'];
			inter = inter % temp_sprite_data['src_bitmaps'].length;
			if(temp_sprite_data['back_run']){
				inter = temp_sprite_data['src_bitmaps'].length - 1 - inter;
			}
			inter = Math.floor(inter);
			temp_sprite.bitmap = temp_sprite_data['src_bitmaps'][inter];
			
			temp_sprite.x += temp_sprite_data['x_speed'];		//gif偏移
			temp_sprite.y += temp_sprite_data['y_speed'];
			temp_sprite.rotation += temp_sprite_data['r_speed'];
			if( Imported.Drill_BattleCamera ){
				temp_sprite.x += $gameTemp._drill_cam_result_move_X * temp_sprite_data['rate'];
				temp_sprite.y += $gameTemp._drill_cam_result_move_Y * temp_sprite_data['rate'];
			}
			
			//变化-每帧开始
			for (var j = 0; j < $gameSystem._drill_battle_gifs_changing.length; j++) {
				var t = $gameSystem._drill_battle_gifs_changing[j];
				if( t['id'] == i ){
					
					if( t['type'] == '变坐标' ){
						if( b_timer > t['start'] && !t['cur_x'] ){		//1.变化 初始化
							t['cur_x'] = temp_sprite.x;
							t['cur_y'] = temp_sprite.y;
							t['c_x'] = ( t['data1'] - t['cur_x'])/ t['sustain'] ;
							t['c_y'] = ( t['data2'] - t['cur_y'])/ t['sustain'] ;
						}
						if( b_timer > t['start'] + t['sustain'] ){	//3.结束变化
							temp_sprite.x = t['data1'];
							temp_sprite.y = t['data2'];
							t['destroy'] = true;
						}else if( b_timer > t['start'] ){	//2.变化中
							var time = b_timer - t['start'];
							temp_sprite.x = t['cur_x'] + t['c_x'] *time;
							temp_sprite.y = t['cur_y'] + t['c_y'] *time;
						}
					}
					if( t['type'] == '变速度' ){
						if( b_timer > t['start'] && !t['cur_speed_x'] ){		//1.变化 初始化
							t['cur_speed_x'] = temp_sprite_data['x_speed'];
							t['cur_speed_y'] = temp_sprite_data['y_speed'];
							t['c_speed_x'] = ( t['data1'] - t['cur_speed_x'])/ t['sustain'] ;
							t['c_speed_y'] = ( t['data2'] - t['cur_speed_y'])/ t['sustain'] ;
						}
						if( b_timer > t['start'] + t['sustain'] ){	//3.结束变化
							temp_sprite_data['x_speed'] = t['data1'];
							temp_sprite_data['y_speed'] = t['data2'];
							t['destroy'] = true;
						}else if( b_timer > t['start'] ){	//2.变化中
							var time = b_timer - t['start'];
							temp_sprite_data['x_speed'] = t['cur_speed_x'] + t['c_speed_x'] *time;
							temp_sprite_data['y_speed'] = t['cur_speed_y'] + t['c_speed_y'] *time;
						}
					}
					if( t['type'] == '变透明' ){
						if( b_timer > t['start'] && !t['cur_opacity'] ){		//1.变化 初始化
							t['cur_opacity'] = temp_sprite.opacity;
							t['c_opacity'] = ( t['data1'] - t['cur_opacity'])/ t['sustain'] ;
						}
						if( b_timer > t['start'] + t['sustain'] ){	//3.结束变化
							temp_sprite.opacity = t['data1'];
							t['destroy'] = true;
						}else if( b_timer > t['start'] ){	//2.变化中
							var time = b_timer - t['start'];
							temp_sprite.opacity = Math.floor(t['cur_opacity'] + t['c_opacity'] *time);
						}
					}
					if( t['type'] == '变转速' ){
						if( b_timer > t['start'] && !t['cur_r_speed'] ){		//1.变化 初始化
							t['cur_r_speed'] = temp_sprite_data['r_speed'];
							t['c_r_speed'] = ( t['data1'] - t['cur_r_speed'])/ t['sustain'] ;
						}
						if( b_timer > t['start'] + t['sustain'] ){	//3.结束变化
							temp_sprite_data['r_speed'] = t['data1'];
							t['destroy'] = true;
						}else if( b_timer > t['start'] ){	//2.变化中
							var time = b_timer - t['start'];
							temp_sprite_data['r_speed'] = Math.floor(t['cur_r_speed'] + t['c_r_speed'] *time);
						}
					}
					if( t['type'] == '变色调' ){
						if( b_timer > t['start'] && !t['cur_tone'] ){		//1.变化 初始化
							t['cur_tone'] = temp_sprite.getColorTone();
							t['c_tone'] = [] ;
							t['c_tone'][0] = ( t['data1'] - t['cur_tone'][0])/ t['sustain'] ;
							t['c_tone'][1] = ( t['data2'] - t['cur_tone'][1])/ t['sustain'] ;
							t['c_tone'][2] = ( t['data3'] - t['cur_tone'][2])/ t['sustain'] ;
							t['c_tone'][3] = ( t['data4'] - t['cur_tone'][3])/ t['sustain'] ;
						}
						if( b_timer > t['start'] + t['sustain'] ){	//3.结束变化
							temp_sprite.setColorTone(
								[ t['data1'],t['data2'],t['data3'],t['data4'] ] );
							t['destroy'] = true;
						}else if( b_timer > t['start'] ){	//2.变化中
							var time = b_timer - t['start'];
							if(time % 8 == 0){
								temp_sprite.setColorTone(
									[ t['cur_tone'][0] + t['c_tone'][0] *time ,
									  t['cur_tone'][1] + t['c_tone'][1] *time ,
									  t['cur_tone'][2] + t['c_tone'][2] *time ,
									  t['cur_tone'][3] + t['c_tone'][3] *time ] );
							}
						}
					}
					if( t['type'] == '变缩放' ){
						if( b_timer > t['start'] && !t['cur_scale_x'] ){		//1.变化 初始化
							t['cur_scale_x'] = temp_sprite.scale.x;
							t['cur_scale_y'] = temp_sprite.scale.y;
							t['c_scale_x'] = ( t['data1'] - t['cur_scale_x'])/ t['sustain'] ;
							t['c_scale_y'] = ( t['data2'] - t['cur_scale_y'])/ t['sustain'] ;
						}
						if( b_timer > t['start'] + t['sustain'] ){	//3.结束变化
							temp_sprite.scale.x = t['data1'];
							temp_sprite.scale.y = t['data2'];
							t['destroy'] = true;
						}else if( b_timer > t['start'] ){	//2.变化中
							var time = b_timer - t['start'];
							temp_sprite.scale.x = t['cur_scale_x'] + t['c_scale_x'] *time;
							temp_sprite.scale.y = t['cur_scale_y'] + t['c_scale_y'] *time;
						}
					}
					if( t['type'] == '变斜切' ){
						if( b_timer > t['start'] && !t['cur_skew_x'] ){		//1.变化 初始化
							t['cur_skew_x'] = temp_sprite.skew.x;
							t['cur_skew_y'] = temp_sprite.skew.y;
							t['c_skew_x'] = ( t['data1'] - t['cur_skew_x'])/ t['sustain'] ;
							t['c_skew_y'] = ( t['data2'] - t['cur_skew_y'])/ t['sustain'] ;
						}
						if( b_timer > t['start'] + t['sustain'] ){	//3.结束变化
							temp_sprite.skew.x = t['data1'];
							temp_sprite.skew.y = t['data2'];
							t['destroy'] = true;
						}else if( b_timer > t['start'] ){	//2.变化中
							var time = b_timer - t['start'];
							temp_sprite.skew.x = t['cur_skew_x'] + t['c_skew_x'] *time;
							temp_sprite.skew.y = t['cur_skew_y'] + t['c_skew_y'] *time;
						}
					}
					if( t['type'] == '变混合模式' ){
						if( b_timer > t['start'] ){		//直接变化
							temp_sprite.blendMode = t['sustain'];
							t['destroy'] = true;
						}
					}
				}
			}
			//4.变化-变化结束生命周期
			for(var k = $gameSystem._drill_battle_gifs_changing.length -1 ; k >= 0 ; k--){
				var temp_changing = $gameSystem._drill_battle_gifs_changing[k];
				if( temp_changing['destroy'] ){
					$gameSystem._drill_battle_gifs_changing.splice(k, 1);
				}
			}
		}
	};
};


