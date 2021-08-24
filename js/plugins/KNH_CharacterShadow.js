//=============================================================================
// KNH_CharacterShadow.js
//=============================================================================

/*:
 * @plugindesc 人物角色影子
 * @author こんにちは
 *
 * @version 1.0.0 2017/10/28 公開
 * 1.0.1 2017/10/29 パーティが0人の時などにエラーが発生する不具合を修正
 *
 * @param 影画像
 * @desc 影画像を指定。img/systemに保存する。
 * @default 
 * @type file
 * @require 1
 * @dir img/system
 *
 * @help キャラクターの下に影をつけます。
 * 影画像が必要です。img/system に保存し、プラグインパラメータで指定してください。
 *
 * ●如何给队员和编队成员加阴影
 *
 * 数据库→在角色的“备注”中输入以下内容之一。
 * 【】请填写。 您可以使用“ \ v [1]”等。
 *
 * 【<KNHShadow>】            在角色身上显示阴影
 * 【<KNHShadow:5,-10,150>】  将阴影的X坐标偏移5，将Y坐标偏移-10。
 *                            显示尺寸的1.5倍
 * 
 * ●如何在事件上留下阴影
 *
 * 在事件“备忘录”中或在事件命令“评论”中，方法与上述相同
 * 填写。 如果是备注字段，则为所有页面，如果是备注，则为所有页面
 * 仅适用于该事件页面。
 *
 * ※注意
 * 字符透明打开时不显示。
 * 如果更改角色的不透明度，则阴影将具有相同的不透明度。
 * 即使未设置字符图像，也只能显示阴影。
 *
 * ●切换阴影显示并更改位置和大小
 *
 * 在要更改的事件（或播放器）的“移动路线设置”的“脚本”中
 * 填写时，切记要加上【】
 *
 * 【this.setShadow(true)】           显示阴影
 * 【this.setShadow(false)】          不显示阴影
 * 【this.setShadowPosition(-5, 8)】  将阴影显示位置的X坐标移动-5，将Y坐标移动8。
 * 【this.setShadowPosition(0, 0)】   消除阴影显示位置的偏差
 * 【this.setShadowScale(80)】        增加阴影大小0.8倍
 * 【this.setShadowScale(100)】       将阴影大小恢复为正常
 *
 * ●プラグインコマンド    なし
 *
 * ●利用規約
 *   特に無いです。
 */

(function() {
    'use strict';
    var pluginName = 'KNH_CharacterShadow';
    
    var getNumber = function(text, max, min) {
        text = applyCharacters(text);
        if (isNaN(text)) return NaN;
        return Math.max(Math.min(Number(text), max || Infinity), min || -Infinity);
    };
    
    var getArrayString = function(text) {
        var values = applyCharacters(text).split(',');
        for (var i = 0; i < values.length; i++) {
            values[i] = values[i].trim();
            if (!isNaN(values[i])) values[i] = Number(values[i]);
        }
        return values;
    };
    
    var applyCharacters = function(text) {
        if (text === null) text = '';
        text = '' + text;
        text = text.replace(/\\/g, '\x1b');
        text = text.replace(/\x1b\x1b/g, '\\');
        text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
            return $gameVariables.value(parseInt(arguments[1], 10));
        }.bind(this));
        text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
            return $gameVariables.value(parseInt(arguments[1], 10));
        }.bind(this));
        text = text.replace(/\x1bN\[(\d+)\]/gi, function() {
            var actor = parseInt(arguments[1], 10) >= 1 ? $gameActors.actor(parseInt(arguments[1], 10)) : null;
            return actor ? actor.name() : '';
        }.bind(this));
        text = text.replace(/\x1bP\[(\d+)\]/gi, function() {
            var actor = parseInt(arguments[1], 10) >= 1 ? $gameParty.members()[parseInt(arguments[1], 10) - 1] : null;
            return actor ? actor.name() : '';
        }.bind(this));
        if ($dataSystem) text = text.replace(/\x1bG/gi, TextManager.currencyUnit);
        return text;
    };
    
    var getMeta = function(text, str) {
        var re = /<([^<>:]+)(:?)([^>]*)>/g;
        var meta = {};
        for (;;) {
            var match = re.exec(text);
            if (match) {
                if (match[2] === ':') {
                    meta[match[1]] = match[3];
                } else {
                    meta[match[1]] = true;
                }
            } else {
                break;
            }
        }
        return meta['' + str];
    }
    
     var getShadowInfo = function(text) {
        if (text.contains('<KNHShadow>')) {
            return [true];
        } else if (getMeta(text, 'KNHShadow')) {
            return [true].concat(getArrayString(getMeta(text, 'KNHShadow')));
        } else {
            return false;
        }
    };
    
    //-----------------------------------------------------------------------------
    // プラグインパラメータの取得
    //-----------------------------------------------------------------------------
    
    var KNH_shadowImage = PluginManager.parameters(pluginName)['影画像'];
    
    //-----------------------------------------------------------------------------
    //  Game_CharacterBase
    //-----------------------------------------------------------------------------
    
    var _Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers;
    Game_CharacterBase.prototype.initMembers = function() {
        _Game_CharacterBase_initMembers.apply(this, arguments);
        this._shadow = false;
        this._shadowAddX = 0;
        this._shadowAddY = 0;
        this._shadowScale = 100;
    };
    
    Game_CharacterBase.prototype.setShadow = function(shadow) {
        this._shadow = !!shadow;
    };
    
    Game_CharacterBase.prototype.setShadowPosition = function(addX, addY) {
        this._shadowAddX = addX || 0;
        this._shadowAddY = addY || 0;
    };
    
    Game_CharacterBase.prototype.setShadowScale = function(scale) {
        this._shadowScale = scale || 100;
    };
    
    Game_CharacterBase.prototype.setShadowInfo = function(info) {
        if (!info) info = [false];
        this.setShadow(!!info[0] || false);
        this.setShadowPosition(info[1] || 0, info[2] || 0);
        this.setShadowScale(info[3] || 100);
    };

    //-----------------------------------------------------------------------------
    // Game_Event
    //-----------------------------------------------------------------------------

    var _Game_Event_setupPageSettings = Game_Event.prototype.setupPageSettings;
    Game_Event.prototype.setupPageSettings = function() {
        _Game_Event_setupPageSettings.call(this);
        this.setupShadow();
    };

    Game_Event.prototype.setupShadow = function() {
        var info = [false], page = this.page(), shadow = false;
        if (page) {
            for (var i = 0; i < page.list.length; i++) {
                if (page.list[i].code == 108 && getShadowInfo(page.list[i].parameters[0])) {
                    info = getShadowInfo(page.list[i].parameters[0]);
                    shadow = true;
                }
            }
        }
        if (!shadow) info = getShadowInfo(this.event().note);
        this.setShadowInfo(info);
    };
    
    //-----------------------------------------------------------------------------
    // Game_Player
    //-----------------------------------------------------------------------------
    
    var _Game_Player_refresh = Game_Player.prototype.refresh;
    Game_Player.prototype.refresh = function() {
        _Game_Player_refresh.apply(this, arguments);
        if ($gameParty.leader()) this.setShadowInfo(getShadowInfo($gameParty.leader().actor().note));
    };
    
    //-----------------------------------------------------------------------------
    // Game_Follower
    //-----------------------------------------------------------------------------
    
    var _Game_Follower_refresh = Game_Follower.prototype.refresh;
    Game_Follower.prototype.refresh = function() {
        _Game_Follower_refresh.apply(this, arguments);
        if (this.actor()) this.setShadowInfo(getShadowInfo(this.actor().actor().note));
    };
    
    //-----------------------------------------------------------------------------
    // Sprite_Character
    //-----------------------------------------------------------------------------
    
    var _Sprite_Character_update = Sprite_Character.prototype.update;
    Sprite_Character.prototype.update = function() {
        _Sprite_Character_update.call(this);
        this.updateShadow();
    };
    
    Sprite_Character.prototype.updateShadow = function() {
        if (this._character._shadow) {
            if (!this._shadowSprite) {
                this._shadowSprite = new Sprite_CharacterShadow(this._character);
                this.parent.addChild(this._shadowSprite);
            }
        } else if (this._shadowSprite) {
            this.parent.removeChild(this._shadowSprite);
            this._shadowSprite = null;
        }
    };

    //-----------------------------------------------------------------------------
    // Sprite_CharacterShadow
    //-----------------------------------------------------------------------------
    
    function Sprite_CharacterShadow() {
        this.initialize.apply(this, arguments);
    }

    Sprite_CharacterShadow.prototype = Object.create(Sprite_Base.prototype);
    Sprite_CharacterShadow.prototype.constructor = Sprite_CharacterShadow;

    Sprite_CharacterShadow.prototype.initialize = function(character) {
        Sprite_Base.prototype.initialize.call(this);
        this._character = character;
        this.bitmap = ImageManager.loadSystem(KNH_shadowImage);
        this.anchor.x = this.anchor.y = 0.5;
    };
    
    Sprite_CharacterShadow.prototype.update = function() {
        var ch = this._character;
        this.x = ch.screenX() + ch._shadowAddX;
        this.y = ch.screenY() + ch.jumpHeight() - 2 + ch._shadowAddY;
        this.z = ch.screenZ() - 1;
        this.scale.x = this.scale.y = ch._shadowScale / 100;
        this.opacity = (ch._transparent || ch._opacity === 0) ? 0 : ch._opacity;
    };
    
})();