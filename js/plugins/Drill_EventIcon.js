//=============================================================================
// Drill_EventIcon.js
//=============================================================================

/*:
 * @plugindesc [v1.0]        地图 - 图标行走图
 * @author Drill_up
 * 
 * 
 * @help  
 * =============================================================================
 * +++ Drill_EventIcon +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 能根据指定图标，快速生成图标的行走图。
 * 行走图在游戏中即时生成，作用于事件。
 * 
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 插件能单独使用，并且可以作用于其他插件。
 * 作用于：
 *   - Drill_EventItemGenerator 物体 - 可拾取物生成器
 *     如果使用了该插件，目标插件生成的所有道具会自动换成图标行走图。
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 你可以通过设置事件注释，将目标注释变成图标：
 * （注意，冒号左右都有一个空格）
 * 
 * 事件注释：=>图标行走图 : 设置图标 : 1
 *
 *
 * 你也可以设置与你在数据库中配置的图标一样：
 * （注意，冒号左右都有一个空格）
 *
 * 事件注释：=>图标行走图 : 设置物品图标 : 1
 * 事件注释：=>图标行走图 : 设置武器图标 : 1
 * 事件注释：=>图标行走图 : 设置防具图标 : 1
 * 事件注释：=>图标行走图 : 设置技能图标 : 1
 *
 * 事件注释：=>图标行走图 : 设置物品图标 : 南瓜
 * 事件注释：=>图标行走图 : 设置武器图标 : 方片晶块
 * 事件注释：=>图标行走图 : 设置防具图标 : 抗火戒
 * 事件注释：=>图标行走图 : 设置技能图标 : 重击
 *
 * 参数为数字，表示匹配物品的id，参数为名字，则表示匹配物品的名字。
 * （如果有重名的物品，则按照id小的物品来）
 * （如果物品名有空格，则事件注释没有效果）
 * 
 * -----------------------------------------------------------------------------
 * ----插件说明
 * 1.插件的使用面比较窄，只能画固定图标的行走图。
 * 2.插件的行走图大小固定为 144x192 。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		临时全局变量	DrillUp.xxx
//		临时局部变量	无
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		本来打算覆写Sprite_Character.prototype.setCharacterBitmap。
//		但是这样做存在一个问题，就是图片没有进入缓冲池，所以还是得修改ImageManager底层。
//
//		有一个比较不明用途的函数：ImageManager.requestCharacter
//
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_EventIcon = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_EventIcon');
	
//=============================================================================
// ** 事件注释设置
//=============================================================================
var _drill_iconChar_setupPageSettings = Game_Event.prototype.setupPageSettings;
Game_Event.prototype.setupPageSettings = function() {
	_drill_iconChar_setupPageSettings.call(this);
    var page = this.page();
    var image = page.image;
    if (page && image.tileId <= 0 ) {
		
		this.list().forEach(function(l) {	//将页面注释转成插件指令格式
			if (l.code === 108) {
				var args = l.parameters[0].split(' ');
				var command = args.shift();
				
				if (command == "=>图标行走图" ){
					if( args.length == 4 ){
						var type = String(args[1]);
						var temp1 = String(args[3]);
						if ( type == "设置图标"){
							var temp_name = "$DrillIconSet_" + temp1;
							this.setImage(temp_name, image.characterIndex);
						}
						if ( type == "设置物品图标"){
							var icon_i = "";
							var re = /^\d+$/;
							if( re.test(temp1) ){	//数字
								var item_id = Number(temp1) ;
								if( $dataItems[item_id] != null ){
									//alert(JSON.stringify($dataItems[item_id]));
									icon_i = String( $dataItems[item_id].iconIndex );
								}
							}else{		//物品名称
								for( var i = 0; i < $dataItems.length; i++ ){
									if( $dataItems[i] == null ){continue;}
									if( $dataItems[i].name == temp1 ){			//根据物品名搜索
										icon_i = String( $dataItems[i].iconIndex );
										break;
									}
								}
							}
							if( icon_i != "" ){
								var temp_name = "$DrillIconSet_" + icon_i;
								this.setImage(temp_name, image.characterIndex);
							}
						}
						if ( type == "设置武器图标"){
							var icon_i = "";
							var re = /^\d+$/;
							if( re.test(temp1) ){	//数字
								var item_id = Number(temp1) ;
								if( $dataWeapons[item_id] != null ){
									icon_i = String( $dataWeapons[item_id].iconIndex );
								}
							}else{		//武器名称
								for( var i = 0; i < $dataWeapons.length; i++ ){
									if( $dataWeapons[i] == null ){continue;}
									if( $dataWeapons[i].name == temp1 ){			//根据物品名搜索
										icon_i = String( $dataWeapons[i].iconIndex );
										break;
									}
								}
							}
							if( icon_i != "" ){
								var temp_name = "$DrillIconSet_" + icon_i;
								this.setImage(temp_name, image.characterIndex);
							}
						}
						if ( type == "设置防具图标"){
							var icon_i = "";
							var re = /^\d+$/;
							if( re.test(temp1) ){	//数字
								var item_id = Number(temp1) ;
								if( $dataArmors[item_id] != null ){
									icon_i = String( $dataArmors[item_id].iconIndex );
								}
							}else{		//防具名称
								for( var i = 0; i < $dataArmors.length; i++ ){
									if( $dataArmors[i] == null ){continue;}
									if( $dataArmors[i].name == temp1 ){			//根据物品名搜索
										icon_i = String( $dataArmors[i].iconIndex );
										break;
									}
								}
							}
							if( icon_i != "" ){
								var temp_name = "$DrillIconSet_" + icon_i;
								this.setImage(temp_name, image.characterIndex);
							}
						}
						if ( type == "设置技能图标"){
							var icon_i = "";
							var re = /^\d+$/;
							if( re.test(temp1) ){	//数字
								var item_id = Number(temp1) ;
								if( $dataSkills[item_id] != null ){
									icon_i = String( $dataSkills[item_id].iconIndex );
								}
							}else{		//技能名称
								for( var i = 0; i < $dataSkills.length; i++ ){
									if( $dataSkills[i] == null ){continue;}
									if( $dataSkills[i].name == temp1 ){			//根据物品名搜索
										icon_i = String( $dataSkills[i].iconIndex );
										break;
									}
								}
							}
							if( icon_i != "" ){
								var temp_name = "$DrillIconSet_" + icon_i;
								this.setImage(temp_name, image.characterIndex);
							}
						}
					}
				};  
			};
		}, this);
    }
}

//=============================================================================
// ** 拦截读取图片
//=============================================================================
var _drill_iconChar_loadBitmap = ImageManager.loadBitmap;
ImageManager.loadBitmap = function(folder, filename, hue, smooth) {
	var temp = String(filename).split("_");
	if( temp[0] == "$DrillIconSet" ){		//拦截所有图片名为 $DrillIconSet 的图片
        var path = folder + encodeURIComponent(filename) + '.png';
        var bitmap = this.drill_loadNormalBitmap(path, hue || 0 , Number(temp[1]) );
        bitmap.smooth = smooth;
        return bitmap;
    } else {
        return _drill_iconChar_loadBitmap.call(this, folder, filename, hue, smooth);
    }
};
//=============================================================================
// ** 图片缓冲池（复制新写）
//=============================================================================
ImageManager.drill_loadNormalBitmap = function(path, hue, icon_index) {
    var key = this._generateCacheKey(path, hue);
    var bitmap = this._imageCache.get(key);
    if (!bitmap) {
        bitmap = ImageManager.drill_drawIconBitmap(icon_index);
        bitmap.addLoadListener(function() {
            bitmap.rotateHue(hue);
        });
        this._imageCache.add(key, bitmap);
    }else if(!bitmap.isReady()){
        bitmap.decode();
    }

    return bitmap;
};
//=============================================================================
// ** 绘制新bitmap
//=============================================================================
ImageManager.drill_drawIconBitmap = function(icon_index) {
	var cur_bitmap = new Bitmap( 144 , 192 );
	var pbitmap = ImageManager.loadSystem('IconSet');
	var pw = Window_Base._iconWidth ;
	var ph = Window_Base._iconHeight ;
	var px = icon_index % 16 * pw ;
	var py = Math.floor(icon_index / 16) * ph;
	var icon_size = 1;
	cur_bitmap._context.imageSmoothingEnabled = false;
	var icon_x = 8;
	var icon_y = 8;
	cur_bitmap.blt( pbitmap,  px, py, pw, ph,  icon_x,icon_y - 2, pw*icon_size, ph*icon_size);
	 icon_x += 48;
	cur_bitmap.blt( pbitmap,  px, py, pw, ph,  icon_x,icon_y, pw*icon_size, ph*icon_size);
	 icon_x += 48;
	cur_bitmap.blt( pbitmap,  px, py, pw, ph,  icon_x,icon_y + 2, pw*icon_size, ph*icon_size);
	
	 icon_x -= 48*2;
	 icon_y += 48;
	cur_bitmap.blt( pbitmap,  px, py, pw, ph,  icon_x,icon_y - 2, pw*icon_size, ph*icon_size);
	 icon_x += 48;
	cur_bitmap.blt( pbitmap,  px, py, pw, ph,  icon_x,icon_y, pw*icon_size, ph*icon_size);
	 icon_x += 48;
	cur_bitmap.blt( pbitmap,  px, py, pw, ph,  icon_x,icon_y + 2, pw*icon_size, ph*icon_size);
	
	 icon_x -= 48*2;
	 icon_y += 48;
	cur_bitmap.blt( pbitmap,  px, py, pw, ph,  icon_x,icon_y - 2, pw*icon_size, ph*icon_size);
	 icon_x += 48;
	cur_bitmap.blt( pbitmap,  px, py, pw, ph,  icon_x,icon_y, pw*icon_size, ph*icon_size);
	 icon_x += 48;
	cur_bitmap.blt( pbitmap,  px, py, pw, ph,  icon_x,icon_y + 2, pw*icon_size, ph*icon_size);
	
	 icon_x -= 48*2;
	 icon_y += 48;
	cur_bitmap.blt( pbitmap,  px, py, pw, ph,  icon_x,icon_y - 2, pw*icon_size, ph*icon_size);
	 icon_x += 48;
	cur_bitmap.blt( pbitmap,  px, py, pw, ph,  icon_x,icon_y, pw*icon_size, ph*icon_size);
	 icon_x += 48;
	cur_bitmap.blt( pbitmap,  px, py, pw, ph,  icon_x,icon_y + 2, pw*icon_size, ph*icon_size);
	cur_bitmap._context.imageSmoothingEnabled = true;
	
    return cur_bitmap;
};


