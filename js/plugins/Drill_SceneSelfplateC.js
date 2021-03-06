//=============================================================================
// Drill_SceneSelfplateC.js
//=============================================================================

/*:
 * @plugindesc [v1.1]        主菜单 - 全自定义信息面板C
 * @author Drill_up
 *
 *
 * @help
 * =============================================================================
 * +++ Drill_SceneSelfplateC +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 可全部自定义的信息面板，包含一个选项窗口、一个文本描述窗口和一个描述图。
 * 面板C在A的基础上，新加箭头显示效果。（箭头可以点击）
 * 可以做成左右翻页效果的日记、行程日志、案件记录等。
 * 【该面板具有A的功能，并新加箭头显示】
 * 【支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----使用技巧
 * 1.如果你只要一个描述窗口，设置一个选项，然后把选项窗口设置y1000看不见即可。
 * 2.如果你要做像任务激活那种形式，设置两个选项，一个激活，一个未激活（灰色）
 * 通过插件指令开启关闭激活未激活的，使其看起来像一个选项。
 * 3.窗口的布局规划是任意的，你可以去看看"窗口与布局.docx"。
 * 4.描述图没有大小限制，你甚至可以做成一个大窗口，切换选项等同于切换窗口。
 * 5.窗口选项和描述支持所有文本的特殊内容：
 *    \c[n] 变颜色    \i[n] 显示图标    \{\} 字体变大变小
 *    \V[n] 显示变量  \N[n] 显示角色名  \G 显示货币单位
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 复合表达式
 * 描述窗口中支持一些简单的表达式，表达式可以识别内容并转换成特定形式，如下：
 * （内容中的冒号为英文冒号。冒号之间没空格。）
 * 
 * <复:B:A>
 *
 * 参数A：被复制的内容
 * 参数B：数字值
 *        填2，表示内容复制2个，填\V[12]变量，会根据游戏中的值，变化复制数量。
 *
 * <分隔:C:D>
 *
 * 参数C：颜色数字
 * 参数D：分隔线厚度
 *
 * 示例：
 * ii<复:2:aaa>ii
 * （表示iiaaaaaaii。）
 * <分隔:0:1>
 * （表示整行会变成一条厚度为1，颜色为0（白色）的分隔线。）
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 先确保项目img文件夹下是否有menus_self文件夹！（img/menus_self）
 * 如果没有文件夹，自己建立。需要配置下列资源文件：
 *
 * 资源-整体布局
 * 资源-选项窗口
 * 资源-描述窗口
 * 资源-左箭头
 * 资源-右箭头
 * 资源-上箭头
 * 资源-下箭头
 *
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 打开全自定义信息面板，使用下面的插件指令：
 * （冒号两边都有一个空格）
 *
 * 插件指令：>信息面板C : 打开面板
 *
 * 插件指令：>信息面板C : 显示选项 : 1
 * 插件指令：>信息面板C : 隐藏选项 : 1
 * 插件指令：>信息面板C : 锁定选项 : 1
 * 插件指令：>信息面板C : 解锁选项 : 1
 *
 * 插件指令：>信息面板C : 显示全部
 * 插件指令：>信息面板C : 隐藏全部
 * 插件指令：>信息面板C : 锁定全部
 * 插件指令：>信息面板C : 解锁全部
 *
 * 面板打开时，游戏是暂停的，所以你不能在面板中实时变化某些数值。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 选中页数
 * 信息面板具有当前页记忆，如果你删除了一些选项，当前选中页最好刷新一下，
 * 你可以控制当前选中第N页。（选项有3个，表示有3页）
 *
 * 插件指令：>信息面板C : 选中页 : N
 * 
 * 不存在第0页，如果选中页大于页数，将选择最末尾的页。
 *
 * -----------------------------------------------------------------------------
 * ----关键字
 * 该面板的关键字为： Selfplate_C
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 规范了插件指令格式。
 *
 * @param ----杂项----
 * @default 
 *
 * @param 资源-整体布局
 * @parent ----杂项----
 * @desc 信息面板的整体布局。
 * @default 信息面板-整体布局
 * @require 1
 * @dir img/menus_self/
 * @type file
 *
 * @param 是否添加到主菜单
 * @parent ----杂项----
 * @type boolean
 * @on 添加
 * @off 不添加
 * @desc true - 添加，false - 不添加
 * @default false
 *
 * @param 主菜单显示名
 * @parent 是否添加到主菜单
 * @desc 主菜单显示的选项名。
 * @default 信息面板C
 *
 * @param 是否在标题窗口中显示
 * @parent ----杂项----
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true-显示,false-不显示。注意数据存储的位置，如果是分档存储，标题将打开上一存档的数据。没有存档则会报错。
 * @default false
 *
 * @param 标题窗口显示名
 * @parent 是否在标题窗口中显示
 * @desc 标题窗口显示的名称。
 * @default 信息面板C
 *
 * @param 数据是否全局存储
 * @parent 是否在标题窗口中显示
 * @type boolean
 * @on 全局存储
 * @off 分档存储
 * @desc true-存储在全局游戏中,false-存在存档记录中,控制该面板的解锁隐藏的状态数据存储位置。(该设置不会立即生效,要多试)
 * @default false
 *
 * @param 用语-锁定的选项名
 * @parent ----杂项----
 * @desc 信息面板显示的被锁定选项名。
 * @default \c[7]---未知---
 *
 * @param 用语-锁定的选项内容
 * @parent ----杂项----
 * @type note
 * @desc 信息面板显示的被锁定选项内容。
 * @default "该内容的描述已被隐藏。"
 *
 * @param ----内容----
 * @default 
 *
 * @param ---内容组 1至20---
 * @parent ----内容----
 * @default 
 *
 * @param 内容-1
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-2
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-3
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-4
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-5
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-6
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-7
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-8
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-9
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-10
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-11
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-12
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-13
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-14
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-15
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-16
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-17
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-18
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-19
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-20
 * @parent ---内容组 1至20---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param ---内容组21至40---
 * @parent ----内容----
 * @default 
 *
 * @param 内容-21
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-22
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-23
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-24
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-25
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-26
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-27
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-28
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-29
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-30
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-31
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-32
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-33
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-34
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-35
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-36
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-37
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-38
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-39
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-40
 * @parent ---内容组21至40---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param ---内容组41至60---
 * @parent ----内容----
 * @default 
 *
 * @param 内容-41
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-42
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-43
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-44
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-45
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-46
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-47
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-48
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-49
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-50
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-51
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-52
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-53
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-54
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-55
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-56
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-57
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-58
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-59
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-60
 * @parent ---内容组41至60---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param ---内容组61至80---
 * @parent ----内容----
 * @default 
 *
 * @param 内容-61
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-62
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-63
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-64
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-65
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-66
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-67
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-68
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-69
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-70
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-71
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-72
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-73
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-74
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-75
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-76
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-77
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-78
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-79
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param 内容-80
 * @parent ---内容组61至80---
 * @type struct<SelfplateC>
 * @desc 添加新的内容，一个选项对应一个描述和一个描述图。
 * @default 
 *
 * @param ----按键箭头----
 * @default 
 *
 * @param 资源-左箭头
 * @parent ----按键箭头----
 * @desc 左箭头的图片资源。
 * @default 信息面板C-左箭头
 * @require 1
 * @dir img/menus_self/
 * @type file
 *
 * @param 平移-左箭头 X
 * @parent ----按键箭头----
 * @desc x轴方向平移，单位像素。0为箭头的中心贴在最左边。
 * @default 60
 *
 * @param 平移-左箭头 Y
 * @parent ----按键箭头----
 * @desc y轴方向平移，单位像素。0为箭头的中心贴在最上边。
 * @default 300
 *
 * @param 资源-右箭头
 * @parent ----按键箭头----
 * @desc 右箭头的图片资源。
 * @default 信息面板C-右箭头
 * @require 1
 * @dir img/menus_self/
 * @type file
 *
 * @param 平移-右箭头 X
 * @parent ----按键箭头----
 * @desc x轴方向平移，单位像素。0为箭头的中心贴在最左边。
 * @default 750
 *
 * @param 平移-右箭头 Y
 * @parent ----按键箭头----
 * @desc y轴方向平移，单位像素。0为箭头的中心贴在最上边。
 * @default 300
 *
 * @param 资源-上箭头
 * @parent ----按键箭头----
 * @desc 上箭头的图片资源。
 * @default 
 * @require 1
 * @dir img/menus_self/
 * @type file
 *
 * @param 平移-上箭头 X
 * @parent ----按键箭头----
 * @desc x轴方向平移，单位像素。0为箭头的中心贴在最左边。
 * @default 408
 *
 * @param 平移-上箭头 Y
 * @parent ----按键箭头----
 * @desc y轴方向平移，单位像素。0为箭头的中心贴在最上边。
 * @default 35
 *
 * @param 资源-下箭头
 * @parent ----按键箭头----
 * @desc 下箭头的图片资源。
 * @default 
 * @require 1
 * @dir img/menus_self/
 * @type file
 *
 * @param 平移-下箭头 X
 * @parent ----按键箭头----
 * @desc x轴方向平移，单位像素。0为箭头的中心贴在最左边。
 * @default 408
 *
 * @param 平移-下箭头 Y
 * @parent ----按键箭头----
 * @desc y轴方向平移，单位像素。0为箭头的中心贴在最上边。
 * @default 560
 *
 * @param 是否使用缩放效果
 * @parent ----按键箭头----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用，箭头会来回缩放。
 * @default false
 *
 * @param 是否使用闪烁效果
 * @parent ----按键箭头----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用，箭头会来回闪烁。
 * @default false
 *
 * @param 浮动偏移量
 * @parent ----按键箭头----
 * @type number
 * @min 1
 * @desc 使用左右或者上下浮动时，浮动偏移的位置量，单位像素。
 * @default 10
 *
 * @param 是否使用左右浮动
 * @parent ----按键箭头----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用，只对左右箭头有效，箭头会左右浮动。
 * @default true
 *
 * @param 是否使用上下浮动
 * @parent ----按键箭头----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用，只对上下箭头有效，箭头会上下浮动。
 * @default true
 *
 * @param ----选项窗口----
 * @default 
 * 
 * @param 平移-选项窗口 X
 * @parent ----选项窗口----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 0
 *
 * @param 平移-选项窗口 Y
 * @parent ----选项窗口----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 540
 *
 * @param 选项窗口起点 X
 * @parent ----选项窗口----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default -100
 *
 * @param 选项窗口起点 Y
 * @parent ----选项窗口----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 选项窗口移动时长
 * @parent ----选项窗口----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 30
 *
 * @param 是否使用选项窗口布局
 * @parent ----选项窗口----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 资源-选项窗口
 * @desc 选项窗口的图片资源。
 * @parent 是否使用选项窗口布局
 * @default 信息面板-选项窗口
 * @require 1
 * @dir img/menus_self/
 * @type file
 *
 * @param 平移-选项窗口布局 X
 * @parent 是否使用选项窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-选项窗口布局 Y
 * @parent 是否使用选项窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 选项窗口宽度
 * @parent ----选项窗口----
 * @type number
 * @min 50
 * @desc 窗口将一个规划的矩形区域，矩形区域内控制文本显示，这里是矩形的宽度，注意，矩形和资源图片的宽高没有任何关系！
 * @default 816
 *
 * @param 选项窗口高度
 * @parent ----选项窗口----
 * @type number
 * @min 50
 * @desc 窗口将一个规划的矩形区域，矩形区域内控制文本显示，这里是矩形的高度，注意，矩形和资源图片的宽高没有任何关系！
 * @default 80
 *
 * @param 选项窗口列数
 * @parent ----选项窗口----
 * @type number
 * @min 1
 * @desc 选项窗口的列数。
 * @default 4
 *
 * @param 选项窗口字体大小
 * @parent ----选项窗口----
 * @type number
 * @min 1
 * @desc 选项窗口的字体大小。图标无法根据字体大小变化。
 * @default 22
 *
 * @param ----描述窗口----
 * @default 
 * 
 * @param 平移-描述窗口 X
 * @parent ----描述窗口----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 285
 *
 * @param 平移-描述窗口 Y
 * @parent ----描述窗口----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 100
 *
 * @param 描述窗口起点 X
 * @parent ----描述窗口----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 100
 *
 * @param 描述窗口起点 Y
 * @parent ----描述窗口----
 * @desc 窗口初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 描述窗口移动时长
 * @parent ----描述窗口----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 30
 *
 * @param 是否使用描述窗口布局
 * @parent ----描述窗口----
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default true
 *
 * @param 资源-描述窗口
 * @desc 描述窗口的图片资源。
 * @parent 是否使用描述窗口布局
 * @default 
 * @require 1
 * @dir img/menus_self/
 * @type file
 *
 * @param 平移-描述窗口布局 X
 * @parent 是否使用描述窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-描述窗口布局 Y
 * @parent 是否使用描述窗口布局
 * @desc 修正图片的偏移用。以窗口的点为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 描述窗口宽度
 * @parent ----描述窗口----
 * @type number
 * @min 50
 * @desc 窗口将一个规划的矩形区域，矩形区域内控制文本显示，这里是矩形的宽度，注意，矩形和资源图片的宽高没有任何关系！
 * @default 510
 *
 * @param 描述窗口高度
 * @parent ----描述窗口----
 * @type number
 * @min 50
 * @desc 窗口将一个规划的矩形区域，矩形区域内控制文本显示，这里是矩形的高度，注意，矩形和资源图片的宽高没有任何关系！
 * @default 360
 *
 * @param 描述窗口字体大小
 * @parent ----描述窗口----
 * @type number
 * @min 1
 * @desc 描述窗口的字体大小。图标无法根据字体大小变化。
 * @default 22
 *
 * @param 描述窗口行间距
 * @parent ----描述窗口----
 * @type number
 * @min 1
 * @desc 描述窗口行间距，通过这个设置你的图标与文字的适应。
 * @default 10
 * 
 * @param 平移-描述图 X
 * @parent ----描述窗口----
 * @desc x轴方向平移，单位像素。0为贴在最左边。
 * @default 285
 *
 * @param 平移-描述图 Y
 * @parent ----描述窗口----
 * @desc y轴方向平移，单位像素。0为贴在最上面。
 * @default 480
 *
 * @param 描述图起点 X
 * @parent ----描述窗口----
 * @desc 描述图初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的x轴值，单位像素。（可为负数）
 * @default 0
 *
 * @param 描述图起点 Y
 * @parent ----描述窗口----
 * @desc 描述图初始会出现在偏移的位置，然后滑动到原本的位置，这里设置的是偏移的y轴值，单位像素。（可为负数）
 * @default 100
 *
 * @param 描述图移动时长
 * @parent ----描述窗口----
 * @type number
 * @min 1
 * @desc 从偏移的位置到原位置所需的时间，单位帧。（1秒60帧）
 * @default 30
 * 
 *
 */
/*~struct~SelfplateC:
 * 
 * @param 选项名
 * @desc 当前的选项名字。
 * @default 未命名选项
 *
 * @param 是否初始显示
 * @type boolean
 * @on 显示
 * @off 隐藏
 * @desc true - 显示，false - 隐藏
 * @default true
 *
 * @param 是否初始锁定
 * @type boolean
 * @on 锁定
 * @off 解锁
 * @desc true - 锁定，false - 解锁
 * @default false
 * 
 * @param 描述内容
 * @type note
 * @desc 该选项下的描述窗口显示的内容。
 * @default "没有描述"
 *
 * @param 资源-描述图片
 * @desc 该选项下的显示的描述图片。
 * @default 
 * @require 1
 * @dir img/menus_self/
 * @type file
 *
 */

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		临时全局变量	DrillUp.xxx
//		临时局部变量	this._drill_xxx
//		存储数据变量	$gameSystem._selfC_context_list
//		全局存储变量	DrillUp.global_selfC_enable
//		覆盖重写方法	无
//
//插件记录：
//		【全局和存档两种数据都有保存，开关只用于切换显示哪种数据】
//		替换以下字符变成新面板：
//		（A面板1.0版本有函数没有做区分）
//		Selfplate_C
//		SelfplateC
//		selfC
//		信息面板C
//

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_SceneSelfplateC = true;
　　var DrillUp = DrillUp || {}; 

    DrillUp.parameters = PluginManager.parameters('Drill_SceneSelfplateC');
    DrillUp.selfC_layout = String(DrillUp.parameters['资源-整体布局'] || "");
    DrillUp.selfC_selWin_layout = String(DrillUp.parameters['资源-选项窗口'] || "");
    DrillUp.selfC_descWin_layout = String(DrillUp.parameters['资源-描述窗口'] || "");
	DrillUp.selfC_arrowLeft = String(DrillUp.parameters['资源-左箭头'] || "");
	DrillUp.selfC_arrowRight = String(DrillUp.parameters['资源-右箭头'] || "");
	DrillUp.selfC_arrowUp = String(DrillUp.parameters['资源-上箭头'] || "");
	DrillUp.selfC_arrowDown = String(DrillUp.parameters['资源-下箭头'] || "");
	
	DrillUp.selfC_add_to_menu = String(DrillUp.parameters['是否添加到主菜单'] || "true") === "true";	
    DrillUp.selfC_menu_name = String(DrillUp.parameters['主菜单显示名'] || "");
	DrillUp.selfC_add_to_title = String(DrillUp.parameters['是否在标题窗口中显示'] || "false") === "true";	
    DrillUp.selfC_title_name = String(DrillUp.parameters['标题窗口显示名'] || "");
	DrillUp.selfC_title_data_global = String(DrillUp.parameters['数据是否全局存储'] || "false") === "true";	
	
	DrillUp.selfC_selWin_x = Number(DrillUp.parameters['平移-选项窗口 X'] || 30);
	DrillUp.selfC_selWin_y = Number(DrillUp.parameters['平移-选项窗口 Y'] || 120);
	DrillUp.selfC_selWin_slideX = Number(DrillUp.parameters['选项窗口起点 X'] || -100);
	DrillUp.selfC_selWin_slideY = Number(DrillUp.parameters['选项窗口起点 Y'] || 0);
	DrillUp.selfC_selWin_slideTime = Number(DrillUp.parameters['选项窗口移动时长'] || 30);
	DrillUp.selfC_selWin_Layout_visible = String(DrillUp.parameters['是否使用选项窗口布局'] || "true") === "true";	
	DrillUp.selfC_selWin_LayoutX = Number(DrillUp.parameters['平移-选项窗口布局 X'] || 0);
	DrillUp.selfC_selWin_LayoutY = Number(DrillUp.parameters['平移-选项窗口布局 Y'] || 0);
	DrillUp.selfC_selWin_width = Number(DrillUp.parameters['选项窗口宽度'] || 220);
	DrillUp.selfC_selWin_height = Number(DrillUp.parameters['选项窗口高度'] || 460);
	DrillUp.selfC_selWin_fontsize = Number(DrillUp.parameters['选项窗口字体大小'] || 22);
	DrillUp.selfC_selWin_col = Number(DrillUp.parameters['选项窗口列数'] || 1);

	DrillUp.selfC_arrowLeft_X = Number(DrillUp.parameters['平移-左箭头 X'] || 60);
	DrillUp.selfC_arrowLeft_Y = Number(DrillUp.parameters['平移-左箭头 Y'] || 300);
	DrillUp.selfC_arrowRight_X = Number(DrillUp.parameters['平移-右箭头 X'] || 750);
	DrillUp.selfC_arrowRight_Y = Number(DrillUp.parameters['平移-右箭头 Y'] || 300);
	DrillUp.selfC_arrowUp_X = Number(DrillUp.parameters['平移-上箭头 X'] || 408);
	DrillUp.selfC_arrowUp_Y = Number(DrillUp.parameters['平移-上箭头 Y'] || 35);
	DrillUp.selfC_arrowDown_X = Number(DrillUp.parameters['平移-下箭头 X'] || 408);
	DrillUp.selfC_arrowDown_Y = Number(DrillUp.parameters['平移-下箭头 Y'] || 560);
	DrillUp.selfC_arrow_zoom = String(DrillUp.parameters['是否使用缩放效果'] || "false") === "true";	
	DrillUp.selfC_arrow_flash = String(DrillUp.parameters['是否使用闪烁效果'] || "false") === "true";	
	DrillUp.selfC_arrow_float_val = Number(DrillUp.parameters['浮动偏移量'] || 10);
	DrillUp.selfC_arrow_float_lr = String(DrillUp.parameters['是否使用左右浮动'] || "true") === "true";	
	DrillUp.selfC_arrow_float_ud = String(DrillUp.parameters['是否使用上下浮动'] || "true") === "true";	
	
	DrillUp.selfC_descWin_x = Number(DrillUp.parameters['平移-描述窗口 X'] || 285);
	DrillUp.selfC_descWin_y = Number(DrillUp.parameters['平移-描述窗口 Y'] || 100);
	DrillUp.selfC_descWin_slideX = Number(DrillUp.parameters['描述窗口起点 X'] || 100);
	DrillUp.selfC_descWin_slideY = Number(DrillUp.parameters['描述窗口起点 Y'] || 0);
	DrillUp.selfC_descWin_slideTime = Number(DrillUp.parameters['描述窗口移动时长'] || 30);
	DrillUp.selfC_descWin_Layout_visible = String(DrillUp.parameters['是否使用描述窗口布局'] || "true") === "true";	
	DrillUp.selfC_descWin_LayoutX = Number(DrillUp.parameters['平移-描述窗口布局 X'] || 0);
	DrillUp.selfC_descWin_LayoutY = Number(DrillUp.parameters['平移-描述窗口布局 Y'] || 0);
	DrillUp.selfC_descWin_width = Number(DrillUp.parameters['描述窗口宽度'] || 510);
	DrillUp.selfC_descWin_height = Number(DrillUp.parameters['描述窗口高度'] || 360);
	DrillUp.selfC_descWin_fontsize = Number(DrillUp.parameters['描述窗口字体大小'] || 22);
	DrillUp.selfC_descWin_lineheight = Number(DrillUp.parameters['描述窗口行间距'] || 10);

	DrillUp.selfC_descPic_x = Number(DrillUp.parameters['平移-描述图 X'] || 285);
	DrillUp.selfC_descPic_y = Number(DrillUp.parameters['平移-描述图 Y'] || 480);
	DrillUp.selfC_descPic_slideX = Number(DrillUp.parameters['描述图起点 X'] || 0);
	DrillUp.selfC_descPic_slideY = Number(DrillUp.parameters['描述图起点 Y'] || 100);
	DrillUp.selfC_descPic_slideTime = Number(DrillUp.parameters['描述图移动时长'] || 30);
	
	DrillUp.selfC_context_list_length = 80;
	DrillUp.selfC_context_visible_list = [];	//全局用的临时控制显示变量
	DrillUp.selfC_context_list = {};
	for (var i = 1; i <= DrillUp.selfC_context_list_length ; i++ ) {
		if( DrillUp.parameters['内容-' + String(i) ] != "" ){
			DrillUp.selfC_context_list[i] = JSON.parse(DrillUp.parameters['内容-' + String(i)] );
		}else{
			DrillUp.selfC_context_list[i] = "";
		}
		DrillUp.selfC_context_list[i]['index'] = i;
			
		//描述内容处理
		var temp = String(DrillUp.selfC_context_list[i]['描述内容']);
		temp = temp.substring(1,temp.length-1);
		temp = temp.replace(/\\\\/g,"\\");
		temp = temp.split(/\\n/);
		DrillUp.selfC_context_list[i]['context'] = temp;
		//alert(temp);
		
		//选项名处理
		temp = String(DrillUp.selfC_context_list[i]['选项名']);
		temp = temp.replace(/\\\\/g,"\\");
		DrillUp.selfC_context_list[i]['name'] = temp;
		
		//显示处理
		DrillUp.selfC_context_list[i]['enabled'] = (DrillUp.selfC_context_list[i]['是否初始显示'] || "false") == "true" ;
		
		//锁定处理
		DrillUp.selfC_context_list[i]['locked'] = (DrillUp.selfC_context_list[i]['是否初始锁定'] || "false") == "true" ;
		
		//描述图片处理
		DrillUp.selfC_context_list[i]['pic'] = (DrillUp.selfC_context_list[i]['资源-描述图片'] || "");
		
	};
	
	DrillUp.selfC_locked_name = String(DrillUp.parameters['用语-锁定的选项名'] || "");
	DrillUp.selfC_locked_name = DrillUp.selfC_locked_name.replace(/\\\\/g,"\\");
	DrillUp.selfC_locked_context = String(DrillUp.parameters['用语-锁定的选项内容'] || "");
	DrillUp.selfC_locked_context = DrillUp.selfC_locked_context.substring(1,DrillUp.selfC_locked_context.length-1);
	DrillUp.selfC_locked_context = DrillUp.selfC_locked_context.replace(/\\\\/g,"\\");
	DrillUp.selfC_locked_context = DrillUp.selfC_locked_context.split(/\\n/);
	
	
//=============================================================================
// ** 全局读取
//=============================================================================
	var _drill_global = DataManager.loadGlobalInfo();
	//alert(JSON.stringify(_drill_global));
	if( !DrillUp.global_selfC_enable ){	//游戏没关情况
		if( _drill_global && _drill_global[0] && _drill_global[0]["_global_Selfplate_C_enable"] ){		//游戏关闭后，重开读取global中的配置
			DrillUp.global_selfC_enable = _drill_global[0]["_global_Selfplate_C_enable"];
		}else{
			DrillUp.global_selfC_enable = [];
		}
	}
	if( !DrillUp.global_selfC_lock ){	
		if( _drill_global && _drill_global[0] && _drill_global[0]["_global_Selfplate_C_lock"] ){
			DrillUp.global_selfC_lock = _drill_global[0]["_global_Selfplate_C_lock"];
		}else{
			DrillUp.global_selfC_lock = [];
		}
	}
	//注意，不要马上将全局的值赋值到system函数中，需要在 "存档数据赋值" 中再做存储区分判断
	
	
//=============================================================================
// ** 全局存储
//=============================================================================
var _drill_selfC_saveGlobal = DataManager.saveGlobalInfo;
DataManager.saveGlobalInfo = function(info) {	//第0个存档为全局存档
	if(!info[0]){info[0] = []};
	DrillUp.global_selfC_enable = [null];	//i从0开始
	DrillUp.global_selfC_lock = [null];
	for (var i = 1; i <= DrillUp.selfC_context_list_length ; i++ ) {
		DrillUp.global_selfC_enable.push(DrillUp.selfC_context_list[i]['enabled']);
		DrillUp.global_selfC_lock.push(DrillUp.selfC_context_list[i]['locked']);
	}
	info[0]["_global_Selfplate_C_enable"] = DrillUp.global_selfC_enable;
	info[0]["_global_Selfplate_C_lock"] = DrillUp.global_selfC_lock;
	_drill_selfC_saveGlobal.call(this,info);
};

DataManager.forceSaveGlobalInfo = function() {
	var globalInfo = this.loadGlobalInfo() || [];
	globalInfo[0] = this.makeSavefileInfo();
	this.saveGlobalInfo(globalInfo);
};

//=============================================================================
// ** ImageManager
//=============================================================================

ImageManager.loadMenuSelfDef = function(filename) {
    return this.loadBitmap('img/menus_self/', filename, 0, true);
};

//==============================
// * 插件指令
//==============================
var _selfC_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_selfC_Game_Interpreter_pluginCommand.call(this, command, args);
	
	if (command === '>信息面板C') {
		if(args.length == 2){
			var type = String(args[1]);
			if( type == "打开面板" ){			//打开菜单
				SceneManager.push(Scene_Selfplate_C);
			}
			if( type == "显示全部" ){
				for( var i = 1; i <= DrillUp.selfC_context_list_length; i++){
					DrillUp.selfC_context_list[i]['enabled'] = true;	//全局数据
					if( !$gameSystem._selfC_context_list ){ $gameSystem.data_init_Selfplate_C(); }
					$gameSystem._selfC_context_list[i]['enabled'] = true;	//存档数据
				}
				DataManager.forceSaveGlobalInfo();
			}
			if( type == "隐藏全部" ){
				for( var i = 1; i <= DrillUp.selfC_context_list_length; i++){
					DrillUp.selfC_context_list[i]['enabled'] = false;	//全局数据
					if( !$gameSystem._selfC_context_list ){ $gameSystem.data_init_Selfplate_C(); }
					$gameSystem._selfC_context_list[i]['enabled'] = false;	//存档数据
				}
				DataManager.forceSaveGlobalInfo();
			}
			if( type == "锁定全部" ){
				for( var i = 1; i <= DrillUp.selfC_context_list_length; i++){
					DrillUp.selfC_context_list[i]['locked'] = true;	//全局数据
					if( !$gameSystem._selfC_context_list ){ $gameSystem.data_init_Selfplate_C(); }
					$gameSystem._selfC_context_list[i]['locked'] = true;	//存档数据
				}
				DataManager.forceSaveGlobalInfo();
			}
			if( type == "解锁全部" ){
				for( var i = 1; i <= DrillUp.selfC_context_list_length; i++){
					DrillUp.selfC_context_list[i]['locked'] = false;	//全局数据
					if( !$gameSystem._selfC_context_list ){ $gameSystem.data_init_Selfplate_C(); }
					$gameSystem._selfC_context_list[i]['locked'] = false;	//存档数据
				}
				DataManager.forceSaveGlobalInfo();
			}
		}
	}
	if (command === '>信息面板C') {
		if(args.length == 4){
			var type = String(args[1]);
			var temp1 = Number(args[3]);
			if( type == "显示选项" ){
				DrillUp.selfC_context_list[temp1]['enabled'] = true;	//全局数据
				DataManager.forceSaveGlobalInfo();
				if( !$gameSystem._selfC_context_list ){ $gameSystem.data_init_Selfplate_C(); }
				$gameSystem._selfC_context_list[temp1]['enabled'] = true;	//存档数据
			}
			if( type == "隐藏选项" ){
				DrillUp.selfC_context_list[temp1]['enabled'] = false;	//全局数据
				DataManager.forceSaveGlobalInfo();
				if( !$gameSystem._selfC_context_list ){ $gameSystem.data_init_Selfplate_C(); }
				$gameSystem._selfC_context_list[temp1]['enabled'] = false;	//存档数据
			}
			if( type == "锁定选项" ){
				DrillUp.selfC_context_list[temp1]['locked'] = true;	//全局数据
				DataManager.forceSaveGlobalInfo();
				if( !$gameSystem._selfC_context_list ){ $gameSystem.data_init_Selfplate_C(); }
				$gameSystem._selfC_context_list[temp1]['locked'] = true;	//存档数据
			}
			if( type == "解锁选项" ){
				DrillUp.selfC_context_list[temp1]['locked'] = false;	//全局数据
				DataManager.forceSaveGlobalInfo();
				if( !$gameSystem._selfC_context_list ){ $gameSystem.data_init_Selfplate_C(); }
				$gameSystem._selfC_context_list[temp1]['locked'] = false;	//存档数据
			}
			if( type == "选中页" ){
				var temp = temp1 -1;
				if( temp < 0 ){ temp = 0; };
				if( temp > DrillUp.selfC_context_visible_list.length -1 ){ temp = DrillUp.selfC_context_visible_list.length -1; };
				$gameSystem._selfC_context_index = temp;
			}
		}
	}
};

// ======================================================================
// * Scene_Menu 主菜单按钮
// ======================================================================
var _drill_selfCplate_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
	_drill_selfCplate_createCommandWindow.call(this);
    this._commandWindow.setHandler('Selfplate_C',   this.command_Selfplate_C.bind(this));
};
Scene_Menu.prototype.command_Selfplate_C = function() {
    SceneManager.push(Scene_Selfplate_C);
};

var _drill_selfCplate_addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function() {
	_drill_selfCplate_addOriginalCommands.call(this);
	if( DrillUp.selfC_add_to_menu ){
		this.addCommand(DrillUp.selfC_menu_name, 'Selfplate_C', this.areMainCommandsEnabled());
	}
};

//=============================================================================
// ** Scene Tittle 标题选项
//=============================================================================	
var _drill_selfCplate_title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function() {
    _drill_selfCplate_title_createCommandWindow.call(this);
	this._commandWindow.setHandler('Selfplate_C',  this.command_T_Selfplate_C.bind(this));
};
Scene_Title.prototype.command_T_Selfplate_C = function() {
    this._commandWindow.close();
    SceneManager.push(Scene_Selfplate_C);
};
var _drill_selfCplate_title_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
Window_TitleCommand.prototype.makeCommandList = function() {
    _drill_selfCplate_title_makeCommandList.call(this);
	if( DrillUp.selfC_add_to_title ){
		this.addCommand( DrillUp.selfC_title_name ,'Selfplate_C');
	}
};	
//=============================================================================
// ** 菜单-定义
//=============================================================================

function Scene_Selfplate_C() {
    this.initialize.apply(this, arguments);
}

Scene_Selfplate_C.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Selfplate_C.prototype.constructor = Scene_Selfplate_C;

//==============================
// * 菜单-初始化
//==============================
Scene_Selfplate_C.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
	this._cur_index = -1;
	//alert($gameSystem._selfC_context_list); //检查存档是否有记录
	if (!$gameSystem._selfC_context_list) {$gameSystem.data_init_Selfplate_C();};
};

//==============================
// * 菜单-存档数据赋值
//==============================
Game_System.prototype.data_init_Selfplate_C = function() {
	this._selfC_context_list = JSON.parse(JSON.stringify( DrillUp.selfC_context_list ));	//拷贝object（杜绝引用造成的修改）
	
	if( DrillUp.selfC_title_data_global ){
		for(var i=1 ; i< DrillUp.global_selfC_enable.length ; i++){	//全局变量赋值（存储的数量多一个，i0）
			DrillUp.selfC_context_list[i]['enabled'] = DrillUp.global_selfC_enable[i] ;	//显示处理
			DrillUp.selfC_context_list[i]['locked'] = DrillUp.global_selfC_lock[i] ;	//锁定处理
		}
	}
};

//==============================
// * 菜单-创建
//==============================
Scene_Selfplate_C.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
	this._field = new Sprite();
	this.addChild(this._field);	//布局（先画，其图层都被放在后面）
	this.createLayout();
	this.createDescPic();
	this.createSelect();
	this.createDesc();
	this.createSelectLayout();
	this.createDescLayout();
	this.createArrow();
};

//==============================
// * 菜单-每帧刷新
//==============================
Scene_Selfplate_C.prototype.update = function() { 
	Scene_MenuBase.prototype.update.call(this);	
	this.updateSlide();
	this.updateIndex();
	this.updateArrow();
    if (TouchInput.isTriggered()) {		//鼠标点击图片监听
		this.drill_checkImgTouch();
	};
}

//==============================
// * 菜单-整体布局
//==============================
Scene_Selfplate_C.prototype.createLayout = function() {
	this._layout = new Sprite(ImageManager.loadMenuSelfDef(DrillUp.selfC_layout));
	this._field.addChild(this._layout);	
};

//==============================
// * 菜单-选项窗口
//==============================
Scene_Selfplate_C.prototype.createSelect = function() {
	var x = DrillUp.selfC_selWin_x + DrillUp.selfC_selWin_slideX;
	var y = DrillUp.selfC_selWin_y + DrillUp.selfC_selWin_slideY;
	var width = DrillUp.selfC_selWin_width;
	var height = DrillUp.selfC_selWin_height;
	this._window_select = new Window_SelfplateC_Select(x, y, width, height);
	this._window_select.contentsOpacity = 0;
	if( DrillUp.selfC_selWin_Layout_visible ){
		this._window_select.opacity = 0;
	}
	this._window_select._moving = 0;
	this._window_select.setHandler('cancel',   this.popScene.bind(this));//绑定退出界面事件
	this.addChild(this._window_select);
};

//==============================
// * 菜单-选项窗口布局
//==============================
Scene_Selfplate_C.prototype.createSelectLayout = function() {
	this._window_select_layout = new Sprite(ImageManager.loadMenuSelfDef(DrillUp.selfC_selWin_layout));
	if(!DrillUp.selfC_selWin_Layout_visible){
		this._window_select_layout = new Sprite("");
	};
	this._window_select_layout.x = this._window_select.x + DrillUp.selfC_selWin_LayoutX;
	this._window_select_layout.y = this._window_select.y + DrillUp.selfC_selWin_LayoutY;
	this._window_select_layout.opacity = 0;
	this._field.addChild(this._window_select_layout);	
};

//==============================
// * 菜单-描述窗口
//==============================
Scene_Selfplate_C.prototype.createDesc = function() {
	var x = DrillUp.selfC_descWin_x + DrillUp.selfC_descWin_slideX;
	var y = DrillUp.selfC_descWin_y + DrillUp.selfC_descWin_slideY;
	var width = DrillUp.selfC_descWin_width;
	var height = DrillUp.selfC_descWin_height;
	this._window_desc = new Window_SelfplateC_Desc(x, y, width, height);
	this._window_desc.contentsOpacity = 0;
	if( DrillUp.selfC_descWin_Layout_visible ){
		this._window_desc.opacity = 0;
	}
	this._window_desc._moving = 0;
	this.addChild(this._window_desc);
};

//==============================
// * 菜单-描述窗口布局
//==============================
Scene_Selfplate_C.prototype.createDescLayout = function() {
	this._window_desc_layout = new Sprite(ImageManager.loadMenuSelfDef(DrillUp.selfC_descWin_layout));
	if(!DrillUp.selfC_descWin_Layout_visible){
		this._window_desc_layout = new Sprite("");
	};
	this._window_desc_layout.x = this._window_desc.x + DrillUp.selfC_descWin_LayoutX;
	this._window_desc_layout.y = this._window_desc.y + DrillUp.selfC_descWin_LayoutY;
	this._window_desc_layout.opacity = 0;
	this._field.addChild(this._window_desc_layout);	
};

//==============================
// * 菜单-描述图片
//==============================
Scene_Selfplate_C.prototype.createDescPic = function() {
	this._window_desc_pic = new Sprite();
	this._window_desc_pic.x = DrillUp.selfC_descPic_x + DrillUp.selfC_descPic_slideX;
	this._window_desc_pic.y = DrillUp.selfC_descPic_y + DrillUp.selfC_descPic_slideY;
	this._field.addChild(this._window_desc_pic);	
};


//==============================
// * 菜单-重设窗口起点
//==============================
Scene_Selfplate_C.prototype.resetPosition = function() {
	//描述窗口每切换选项时刷新起点
	this._window_desc._moving = 0;
	this._window_desc.x = DrillUp.selfC_descWin_x + DrillUp.selfC_descWin_slideX;
	this._window_desc.y = DrillUp.selfC_descWin_y + DrillUp.selfC_descWin_slideY;
	this._window_desc.contentsOpacity = 0;
	this._window_desc.opacity = 0;
	this._window_desc_layout.opacity = 0;
	
	this._window_desc_pic._moving = 0;
	this._window_desc_pic.x = DrillUp.selfC_descPic_x + DrillUp.selfC_descPic_slideX;
	this._window_desc_pic.y = DrillUp.selfC_descPic_y + DrillUp.selfC_descPic_slideY;
	this._window_desc_pic.opacity = 0;
};

//==============================
// * 菜单-窗口平移
//==============================
Scene_Selfplate_C.prototype.updateSlide = function() {
	this._window_select._moving += 1;
    if (this._window_select._moving <= DrillUp.selfC_selWin_slideTime) {
		//this._window_select.x -= DrillUp.selfC_selWin_slideX/DrillUp.selfC_selWin_slideTime;
		//this._window_select.y -= DrillUp.selfC_selWin_slideY/DrillUp.selfC_selWin_slideTime;
		//this._window_select.contentsOpacity += 256/DrillUp.selfC_selWin_slideTime;
		this._window_select_layout.x = this._window_select.x + DrillUp.selfC_selWin_LayoutX;
		this._window_select_layout.y = this._window_select.y + DrillUp.selfC_selWin_LayoutY;
		this._window_select_layout.opacity += 256/DrillUp.selfC_selWin_slideTime;
		//if( !DrillUp.selfC_selWin_Layout_visible ){
		//	this._window_select.opacity += 256/DrillUp.selfC_selWin_slideTime;
		//}
	};
	this._window_desc._moving += 1;
    if (this._window_desc._moving <= DrillUp.selfC_descWin_slideTime) {
		//this._window_desc.x -= DrillUp.selfC_descWin_slideX/DrillUp.selfC_descWin_slideTime;
		//this._window_desc.y -= DrillUp.selfC_descWin_slideY/DrillUp.selfC_descWin_slideTime;
		//this._window_desc.contentsOpacity += 256/DrillUp.selfC_descWin_slideTime;
		this._window_desc_layout.x = this._window_desc.x + DrillUp.selfC_descWin_LayoutX;
		this._window_desc_layout.y = this._window_desc.y + DrillUp.selfC_descWin_LayoutY;
		this._window_desc_layout.opacity += 256/DrillUp.selfC_descWin_slideTime;
		//if( !DrillUp.selfC_descWin_Layout_visible ){
		//	this._window_desc.opacity += 256/DrillUp.selfC_descWin_slideTime;
		//}
	};
	this._window_desc_pic._moving += 1;
    if (this._window_desc_pic._moving <= DrillUp.selfC_descPic_slideTime) {
		this._window_desc_pic.x -= DrillUp.selfC_descPic_slideX/DrillUp.selfC_descPic_slideTime;
		this._window_desc_pic.y -= DrillUp.selfC_descPic_slideY/DrillUp.selfC_descPic_slideTime;
		this._window_desc_pic.opacity += 256/DrillUp.selfC_descPic_slideTime;
	};
};

//==============================
// * 菜单-窗口描述图刷新
//==============================
Scene_Selfplate_C.prototype.refreshDescPic = function(index) {
	var context_index = DrillUp.selfC_context_visible_list[index]['index'];
	this._window_desc_pic.bitmap = ImageManager.loadMenuSelfDef(DrillUp.selfC_context_list[context_index]["pic"]);
}

//==============================
// * 菜单-窗口选项刷新
//==============================
Scene_Selfplate_C.prototype.updateIndex = function() {
	if( $gameSystem._selfC_context_index != undefined || $gameSystem._selfC_context_index != null ){
		this._window_select.select( $gameSystem._selfC_context_index );
		$gameSystem._selfC_context_index = null;		//设置选中页
	}
	if( this._window_select._index == null || 
		this._window_select._index > DrillUp.selfC_context_visible_list.length -1 ||
		this._window_select._index < 0){ this._window_select.select(0);}
	if( DrillUp.selfC_context_visible_list.length == 0 ){return};	//如果选项全部为空，强制选择第一个
	
	if( this._cur_index != this._window_select._index ){
		this._cur_index = this._window_select._index;
		this.resetPosition();
		this._window_desc.refreshDesc(this._cur_index);
		this.refreshDescPic(this._cur_index);
		this.refreshArrow(this._cur_index);
	}
}
//==============================
// * 菜单-窗口点击事件
//==============================
Scene_Selfplate_C.prototype.drill_checkImgTouch = function() {
	
	//图片 - 箭头
	if (this.drill_isOnSprite( this._arrow_left) ) { this._window_select.cursorLeft(); SoundManager.playCursor();}
	if (this.drill_isOnSprite( this._arrow_right) ) { this._window_select.cursorRight(); SoundManager.playCursor();}
	if (this.drill_isOnSprite( this._arrow_up) ) { this._window_select.cursorUp();SoundManager.playCursor(); }
	if (this.drill_isOnSprite( this._arrow_down) ) { this._window_select.cursorDown();SoundManager.playCursor(); }
}
//==============================
// * 菜单-鼠标点击图片范围判断
//==============================
Scene_Selfplate_C.prototype.drill_isOnSprite = function(sprite) {
	 var cw = sprite.bitmap.width / 2;
	 var ch = sprite.bitmap.height / 2;
	 if (sprite.visible === false) {return false};
	 if (sprite.opacity === 0) {return false};
	 if (TouchInput.x < sprite.x - cw) {return false};
	 if (TouchInput.x > sprite.x + cw) {return false};
	 if (TouchInput.y < sprite.y - ch) {return false};
	 if (TouchInput.y > sprite.y + ch) {return false};
	 return true;	
};

//==========================================================================================
// * 选择箭头
//==========================================================================================

Scene_Selfplate_C.prototype.createArrow = function() {
	this._arrow_linear = 0;
	this._arrow_dir = 1 / 12 ;
	this._arrow_left = new Sprite(ImageManager.loadMenuSelfDef(DrillUp.selfC_arrowLeft));
	this._arrow_right = new Sprite(ImageManager.loadMenuSelfDef(DrillUp.selfC_arrowRight));
	this._arrow_up = new Sprite(ImageManager.loadMenuSelfDef(DrillUp.selfC_arrowUp));
	this._arrow_down = new Sprite(ImageManager.loadMenuSelfDef(DrillUp.selfC_arrowDown));
	this._arrow_left._org_x = DrillUp.selfC_arrowLeft_X ; 
	this._arrow_left._org_y = DrillUp.selfC_arrowLeft_Y ;
	this._arrow_right._org_x = DrillUp.selfC_arrowRight_X ;
	this._arrow_right._org_y = DrillUp.selfC_arrowRight_Y ;
	this._arrow_up._org_x = DrillUp.selfC_arrowUp_X ; 
	this._arrow_up._org_y = DrillUp.selfC_arrowUp_Y ; 
	this._arrow_down._org_x = DrillUp.selfC_arrowDown_X ;
	this._arrow_down._org_y = DrillUp.selfC_arrowDown_Y ;
	this._arrow_left.anchor.x = 0.5;
	this._arrow_left.anchor.y = 0.5;
	this._arrow_right.anchor.x = 0.5;
	this._arrow_right.anchor.y = 0.5;
	this._arrow_up.anchor.x = 0.5;
	this._arrow_up.anchor.y = 0.5;
	this._arrow_down.anchor.x = 0.5;
	this._arrow_down.anchor.y = 0.5;
	this._field.addChild(this._arrow_left);	
	this._field.addChild(this._arrow_right);	
	this._field.addChild(this._arrow_up);	
	this._field.addChild(this._arrow_down);	
};
Scene_Selfplate_C.prototype.updateArrow = function() {
	//线性变化量
	this._arrow_linear += this._arrow_dir;
	if( this._arrow_linear > 1 ){
		this._arrow_dir = -1 / 12 ;
	}else if( this._arrow_linear < -1 ){
		this._arrow_dir = 1 / 12 ;
	}
	//左右浮动
	if( DrillUp.selfC_arrow_float_lr ){
		this._arrow_left.x = this._arrow_left._org_x + this._arrow_linear* DrillUp.selfC_arrow_float_val ; 	
		this._arrow_left.y = this._arrow_left._org_y ; 
		this._arrow_right.x = this._arrow_right._org_x - this._arrow_linear* DrillUp.selfC_arrow_float_val ; 
		this._arrow_right.y = this._arrow_right._org_y ;
	}
	//上下浮动
	if( DrillUp.selfC_arrow_float_ud ){
		this._arrow_up.x = this._arrow_up._org_x;
		this._arrow_up.y = this._arrow_up._org_y + this._arrow_linear* DrillUp.selfC_arrow_float_val ; 	
		this._arrow_down.x = this._arrow_down._org_x;
		this._arrow_down.y = this._arrow_down._org_y - this._arrow_linear* DrillUp.selfC_arrow_float_val ; 	
	}
	//缩放
	if( DrillUp.selfC_arrow_zoom ){
		this._arrow_left.scale.x = 1 + this._arrow_linear * 0.3 ;
		this._arrow_left.scale.y = 1 + this._arrow_linear * 0.3 ;
		this._arrow_right.scale.x= 1 + this._arrow_linear * 0.3 ;
		this._arrow_right.scale.y= 1 + this._arrow_linear * 0.3 ;
		this._arrow_up.scale.x =   1 + this._arrow_linear * 0.3 ;
		this._arrow_up.scale.y =   1 + this._arrow_linear * 0.3 ;
		this._arrow_down.scale.x = 1 + this._arrow_linear * 0.3 ;
		this._arrow_down.scale.y = 1 + this._arrow_linear * 0.3 ;
	}
	//闪烁
	if( DrillUp.selfC_arrow_flash ){
		this._arrow_left.opacity = 56+ this._arrow_linear * 200 ;
		this._arrow_right.opacity= 56+ this._arrow_linear * 200 ;
		this._arrow_up.opacity =   56+ this._arrow_linear * 200 ;
		this._arrow_down.opacity = 56+ this._arrow_linear * 200 ;
	}
}
Scene_Selfplate_C.prototype.refreshArrow = function(index) {
	//箭头显示
	var l_visible = true;
	var r_visible = true;
	var u_visible = true;
	var d_visible = true;
	if( index % DrillUp.selfC_selWin_col == 0 ){
		l_visible = false;
	}
	if( index % DrillUp.selfC_selWin_col == DrillUp.selfC_selWin_col-1 ||
		index == DrillUp.selfC_context_visible_list.length -1 ){
		r_visible = false;
	}
	if( index <= DrillUp.selfC_selWin_col-1 ){
		u_visible = false;
	}
	if( index > DrillUp.selfC_context_visible_list.length -1 - DrillUp.selfC_selWin_col ){
		d_visible = false;
	}
	this._arrow_left.visible = l_visible;
	this._arrow_right.visible = r_visible;
	this._arrow_up.visible = u_visible;
	this._arrow_down.visible = d_visible;
}

//==========================================================================================
// * 选项窗口
//==========================================================================================

function Window_SelfplateC_Select() {
	this.initialize.apply(this, arguments);
}

Window_SelfplateC_Select.prototype = Object.create(Window_Selectable.prototype);
Window_SelfplateC_Select.prototype.constructor = Window_SelfplateC_Select;

Window_SelfplateC_Select.lastTopRow = 0;
Window_SelfplateC_Select.lastIndex  = 0;

Window_SelfplateC_Select.prototype.initialize = function(x, y, width, height) {
	Window_Selectable.prototype.initialize.call(this, x, y, width, height);
	this.refresh();
	if( Window_SelfplateC_Select.lastIndex >= this._list.length ){
		Window_SelfplateC_Select.lastIndex = this._list.length-1;
	}
	this.setTopRow(Window_SelfplateC_Select.lastTopRow);
	this.select(Window_SelfplateC_Select.lastIndex);
	this.activate();
};

Window_SelfplateC_Select.prototype.maxCols = function() {
	return DrillUp.selfC_selWin_col;
};

Window_SelfplateC_Select.prototype.maxItems = function() {
	return this._list ? this._list.length : 0;
};

Window_SelfplateC_Select.prototype.standardFontSize = function() {
    return DrillUp.selfC_selWin_fontsize;
};

Window_SelfplateC_Select.prototype.update = function() {
	Window_Selectable.prototype.update.call(this);
    if (this._moving <= DrillUp.selfC_selWin_slideTime) {
		this.x -= DrillUp.selfC_selWin_slideX/DrillUp.selfC_selWin_slideTime;
		this.y -= DrillUp.selfC_selWin_slideY/DrillUp.selfC_selWin_slideTime;
		this.contentsOpacity += 256/DrillUp.selfC_selWin_slideTime;
	}
	if( DrillUp.selfC_selWin_Layout_visible ){
		this.opacity = 0;
	}else{
		this.opacity += 256/DrillUp.selfC_selWin_slideTime;
	}
};

Window_SelfplateC_Select.prototype.refresh = function() {
	DrillUp.selfC_context_visible_list = [];
	for(var i=1; i<= DrillUp.selfC_context_list_length ;i++){
		
		if( DrillUp.selfC_title_data_global ){
			var temp = DrillUp.selfC_context_list[i];	//全局数据
		}else{
			var temp = $gameSystem._selfC_context_list[i];	//存档数据
		}
		
		if( temp != "" && temp['enabled'] == true ){
			DrillUp.selfC_context_visible_list.push( temp );
		}
	}
	this._list = [];
	for(var j=0; j< DrillUp.selfC_context_visible_list.length ;j++){
		if( DrillUp.selfC_context_visible_list[j]['locked'] == false ){
			this._list.push( DrillUp.selfC_context_visible_list[j]['name'] );
		}else{
			this._list.push( DrillUp.selfC_locked_name );
		}
	}
	this.createContents();
	this.drawAllItems();	//绘制选项内容
};

Window_SelfplateC_Select.prototype.drawItem = function(index) {
    var str = this._list[index];
	var rect = this.itemRectForText(index);
	this.drawTextEx(str, rect.x, rect.y);
};

Window_SelfplateC_Select.prototype.processCancel = function() {
	Window_Selectable.prototype.processCancel.call(this);
	Window_SelfplateC_Select.lastTopRow = this.topRow();
	Window_SelfplateC_Select.lastIndex = this.index();
};

//==========================================================================================
// * 显示窗口
//==========================================================================================
function Window_SelfplateC_Desc() {
    this.initialize.apply(this, arguments);
}

Window_SelfplateC_Desc.prototype = Object.create(Window_Base.prototype);
Window_SelfplateC_Desc.prototype.constructor = Window_SelfplateC_Desc;

Window_SelfplateC_Desc.prototype.initialize = function(x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x,y,width,height);
};

Window_SelfplateC_Desc.prototype.standardFontSize = function() {
    return DrillUp.selfC_descWin_fontsize;
};

Window_SelfplateC_Desc.prototype.update = function() {
	Window_Base.prototype.update.call(this);
    if (this._moving <= DrillUp.selfC_descWin_slideTime) {
		this.x -= DrillUp.selfC_descWin_slideX/DrillUp.selfC_descWin_slideTime;
		this.y -= DrillUp.selfC_descWin_slideY/DrillUp.selfC_descWin_slideTime;
		this.contentsOpacity += 256/DrillUp.selfC_descWin_slideTime;
	}
	if( DrillUp.selfC_descWin_Layout_visible ){
		this.opacity = 0;
	}else{
		this.opacity += 256/DrillUp.selfC_descWin_slideTime;
	}
};
	
Window_SelfplateC_Desc.prototype.refreshDesc = function(index) {
    this.createContents();
    this.contents.clear();
	//获取当前选项的描述内容
	var cur_index = index;
	this._data = DrillUp.selfC_context_visible_list[ cur_index ]['context'];
	if( DrillUp.selfC_context_visible_list[ cur_index ]['locked'] ){
		this._data = DrillUp.selfC_locked_context;
	}
	
	//绘制内容
	for (var i=0; i<this._data.length; i++) {
		var x = 0;
		var y = 0 + i*(this.standardFontSize() +DrillUp.selfC_descWin_lineheight);
		var temp = this._data[i];
		//复合表达式处理
		
		var re_A = /<复:.*?>/g;
		var re_ma_A = temp.match(re_A);
		if( re_ma_A != null ){
			
			var str = String(re_ma_A);
			var result = "";
			var s = str.slice(3,str.length-1).split(":");
			var copy = 0;
			var ss = s[0];
			if( ss.slice(0,2) == "\\v" || ss.slice(0,2) == "\\V" ){
				copy = Number(ss.slice(3,ss.length-1));
				copy = $gameVariables.value(copy);
			}else{
				copy = Number(s[0]);
			}
			for(var j =0;j< copy; j++){
				result += s[1];
			}
			
			temp = temp.replace(str,result);
		}
		
		var re_B = /<分隔:.*?>/;		// 分隔:颜色:厚度
		var re_ma_B = temp.match(re_B);
		if( re_ma_B != null ){
			var str = String(re_ma_B)
			var s = str.slice(4,str.length-1).split(":");
			if(s.length == 2){
				this.contents.fillRect(4, y + this.standardFontSize()/2 - Number(s[1])/2 , this.width - 8, Number(s[1]), this.textColor(s[0]));
				continue ;
			}
		}
		
		this.drawTextEx(temp,x,y);
	}
}

