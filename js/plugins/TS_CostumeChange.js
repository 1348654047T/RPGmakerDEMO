//=========================================================
// TS_CostumeChange
//=========================================================

/*:ja
 * @plugindesc
 * 着替え時の処理
 */


/*:
*/

var TS_CostumeChange = TS_CostumeChange || {};

// 選択中の服
TS_CostumeChange.SelectCostumeValId = 23;
TS_CostumeChange.SelectMaxNumValId = 24;

TS_CostumeChange.SelectPictId = 24;


// 画像ID
// 01～10：UI
// 11～20：マウスエフェクト
// 21～40：ハートUI
// 41～50：吹き出し文字

TS_CostumeChange.BasePictId = 2;
TS_CostumeChange.BodyPictId = 3;
TS_CostumeChange.FacePictId = 4;





TS_CostumeChange.PictPos = [
	{x:645,y:130},
	{x:795,y:130},
	{x:945,y:130},
	
	{x:645,y:340},
	{x:795,y:340},
	{x:945,y:340},
	
	{x:720,y:520},
	{x:870,y:520}
];

TS_CostumeChange.PictName = {
	'ナナミ' : 'nan',
	'マリナ' : 'mri',
};

TS_CostumeChange.CosViewList = null;


// 初期化
TS_CostumeChange.init = function() {
	
	// 選択中のID（一時的）
	this._selectId = 0;
	
	// 服装はスクリプトで表示する
	var actor = $gameParty.members()[0];
	var actor_name = actor._name;
	var cos_name = $advSystem.getBodyCos(actor_name,false);
	var base_name = actor_name + '_' + $advSystem.DEFAULT_NAME.BASE;
	var body_name = actor_name + '_' + cos_name;
	var face_name = actor_name + '@' + '笑み';
	
	var pos_x = -400;
	var pos_y = -100;
	$gameScreen.showPicture(this.BasePictId, base_name, 0, pos_x, pos_y, 100, 100, 255, 0);
	$gameScreen.showPicture(this.BodyPictId, body_name, 0, pos_x, pos_y, 100, 100, 255, 0);
	$gameScreen.showPicture(this.FacePictId, face_name, 0, pos_x, pos_y, 100, 100, 255, 0);
	
	
	// 服装リスト
	
	var f_name = 'CC_';
	var c_name = this.PictName[actor_name];
	var hash = this.getCosData();
	var pos_data = this.PictPos;
	for(key in hash){
		var data = hash[key];
		var pict_id = data.pict_id;
		var db_id = data.db_id;
		var b_name = key;
		if( $gameParty.hasItem($dataArmors[db_id], true) ){
			// アイテムを所持している
			// ここでは装備できない
			if( this.CosViewList && this.CosViewList.indexOf(data.name) == -1 ){
				b_name += '_non';
			}else{
				// ボタン機能追加
				$gameScreen.setPictureCallCommon(pict_id, data.swi_id * -1, 1);
			}
		}else{
			// 未所持
			b_name += '_non';
		}
		// ピクチャ表示（中心座標）
		var pos = pos_data[key];
		$gameScreen.showPicture(pict_id, (f_name + c_name + b_name), 1, pos.x, pos.y, 100, 100, 255, 0);
		
	}
	
	// 選択出来る数を決める
	TS_Function.setVal(this.SelectMaxNumValId, hash.length);
	
	
	// 選択画像
	var pos = pos_data[0];
	$gameScreen.showPicture(this.SelectPictId, 'CC_select', 1, pos.x, pos.y, 100, 100, 255, 0);
	
};

// 選択
TS_CostumeChange.selectClick = function() {
	// 選択中の服装ID
	var id = $gameVariables.value(this.SelectCostumeValId);
	var cos_data = this.getCosData()[id];
	var check = false;
	
	if( $gameParty.hasItem($dataArmors[cos_data.db_id], true) ){
		// ここでは装備できない
		if( !(this.CosViewList && this.CosViewList.indexOf(cos_name) == -1) ){
			check = true;
		}
	}
	
	if(check){
		$gameSwitches.setValue(cos_data.swi_id, true);
		
		// 選択肢を持ってくる
		var pos = this.PictPos[id];
		$gameScreen.picture(this.SelectPictId).setPos(pos.x,pos.y,5);
	}
}

// 選択画像移動
TS_CostumeChange.selectMove = function() {
	var num = TS_Function.getVal(this.SelectCostumeValId);
	var pos = this.PictPos[num];
	$gameScreen.picture(this.SelectPictId).setPos(pos.x,pos.y,5);
	this._selectId = num;
}

// 終了
TS_CostumeChange.end = function() {
	// ピクチャ削除
	for(var i=0; i<25;i++){
		$gameScreen.erasePicture(i+1);
	}
}

// 更新内容
TS_CostumeChange.update = function() {
	// 新しくチェック
	var list = this.getCosData();
	for(var i=0; i<list.length; i++){
		var pict_id = list[i].pict_id;
		if( $gameScreen.isPointerInnerPicture(pict_id) ){
			if(this._selectId != i){
				var pos = this.PictPos[i];
				$gameScreen.picture(this.SelectPictId).setPos(pos.x,pos.y,5);
				this._selectId = i;
			}
			break;
		}
	}
}

TS_CostumeChange.getCosData = function() {
	var actor = $gameParty.members()[0];
	var actor_name = actor._name;
	return TS_GameConfig.CosPictData[actor_name];
};


// 立ち絵の服装を今の装備に合わせる
TS_CostumeChange.cosCheck = function() {
	var actor = $gameParty.members()[0];
	var actor_name = actor._name;
	var cos_name = $advSystem.getBodyCos(actor_name,false);
	var body_name = actor_name + '_' + cos_name;
	$gameScreen.picture(this.BodyPictId).setName(body_name);
	
};




// 今から装着出来るリスト
TS_CostumeChange.setCos = function(list) {
	
	if(list == 'ALL'){
		this.CosViewList = null;
	}else{
		this.CosViewList = list.split('_');
	}
};

// ○プラグインコマンド拡張
var _TS_CostumeChange_Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
	_TS_CostumeChange_Game_Interpreter_pluginCommand.call(this, command, args);
	if (command === 'COS_CHANGE') {
		TS_CostumeChange.setCos(args[0]);
	}
};
