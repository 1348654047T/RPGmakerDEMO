//=============================================================================
// Drill_LayerUpperBlock.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        物体 - 上层图块四通行阻碍
 * @author Drill_up
 * 
 *
 * 
 * @help  
 * =============================================================================
 * +++ Drill_LayerUpperBlock +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 使得在角色上方的图块（*图块）的四通行设置起效，能阻挡角色穿过。
 * 原rmmv设置*图块后，四通行无法阻挡角色。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		LUB （Layer_Upper_Block）
//		临时全局变量	DrillUp.xxx
//		临时局部变量	无
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	Game_Map.prototype.checkPassage
//
//插件记录：
//		将判定换一下顺序就可以了。
//			

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_LayerUpperBlock = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_LayerUpperBlock');


//==============================
// * 通行检查
//==============================
Game_Map.prototype.checkPassage = function(x, y, bit) {
    var flags = this.tilesetFlags();
    var tiles = this.allTiles(x, y);
    for (var i = 0; i < tiles.length; i++) {
        var flag = flags[tiles[i]];
        if ((flag & bit) === bit) // [x] Impassable
            return false;
        if ((flag & 0x10) !== 0)  // [*] No effect on passage
            continue;
        if ((flag & bit) === 0)   // [o] Passable
            return true;
    }
    return false;
};

