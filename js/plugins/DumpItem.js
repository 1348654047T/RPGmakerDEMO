//=============================================================================
// MV loadsystem.js
//=============================================================================
/*:zh
 * @plugindesc 可以在物品栏中丢弃物品
 * @author 铅笔描绘的思念
 *
 * @param Dump
 * @desc
 * @default 丢弃
 *
 * @param Use
 * @desc
 * @default 使用
 *
 * @param CommandX
 * @desc
 * @default 350
 *
 * @param CommandY
 * @desc
 * @default 300
 *
 * @param NumberX
 * @desc
 * @default 180
 *
 * @param NumberY
 * @desc
 * @default 80
 *
 * @help This plugin does not provide plugin commands.
 *
 */
(function () {
    var parameters = PluginManager.parameters('DumpItem');
    var dump = parameters['Dump'];
    var use = parameters['Use'];

    var commandX = parseInt(parameters['CommandX']);
    var commandY = parseInt(parameters['CommandY']);

    var numberX = parseInt(parameters['NumberX']);
    var numberY = parseInt(parameters['NumberY']);

    //Window_ItemNumber
    function Window_ItemNumber() {
        this.initialize.apply(this, arguments);
    }

    Window_ItemNumber.prototype = Object.create(Window_ShopNumber.prototype);
    Window_ItemNumber.prototype.constructor = Window_ItemNumber;

    Window_ItemNumber.prototype.initialize = function() {
        var height = 230;
        var x = numberX;
        var y = numberY;
        Window_ShopNumber.prototype.initialize.call(this, x, y, height);
        this.showButtons();
    };
    Window_ItemNumber.prototype.buttonY = function() {
        return Math.round( this.lineHeight() * 3.5);
    };
    Window_ItemNumber.prototype.refresh = function() {
        Window_ShopNumber.prototype.refresh.call(this);
        this.contents.clear();
        this.drawItemName(this._item, 4, this.fittingHeight(0));
        this.drawNumber();
    };
    Window_ItemNumber.prototype.itemY = function() {
        return this.fittingHeight(0);
    };
    //
    function Window_ItemCommand() {
        this.initialize.apply(this, arguments);
    }
    Window_ItemCommand.prototype = Object.create(Window_Command.prototype);
    Window_ItemCommand.prototype.constructor = Window_ItemCommand;

    Window_ItemCommand.prototype.initialize = function() {
        var x = commandX;
        var y = commandY;
        Window_Command.prototype.initialize.call(this, x, y);
    };
    Window_ItemCommand.prototype.makeCommandList = function() {
        this.addCommand(use, 'use');
        this.addCommand(dump, 'dump');
    };
    //
    Window_ItemList.prototype.isCurrentItemEnabled = function() {
        return true;
    };
    Window_ItemList.prototype.isEnabled = function(item) {
        return item;
    };
    //Scene_Item
    var _load_itemBase = Scene_Item.prototype.create;
    Scene_Item.prototype.create = function() {
        _load_itemBase.call(this);
        this.createItemCommandWindow();
        this.createItemNumberWindow();
        this.createActorWindow();
    };
    var _load_item = Scene_Item.prototype.createItemWindow;
    Scene_Item.prototype.createItemWindow = function() {
        _load_item.call(this);
        this._itemWindow.setHandler('ok',     this.onItemCommand.bind(this));
    };
    Scene_Item.prototype.onItemCommand = function() {
        this._itemCommandWindow.show();
        this._itemCommandWindow.activate();
    };
    Scene_Item.prototype.onItemOk = function() {
        if($gameParty.canUse(this.item())) {
            $gameParty.setLastItem(this.item());
            this.determineItem();
        }else{
            SoundManager.playBuzzer();
            this._itemCommandWindow.activate();
        }
    };
    Scene_ItemBase.prototype.determineItem = function() {
        var action = new Game_Action(this.user());
        var item = this.item();
        action.setItemObject(item);
        if (action.isForFriend()) {
            this.showSubWindow(this._actorWindow);
            this._actorWindow.selectForItem(this.item());
        } else {
            this.useItem();
            this._itemCommandWindow.activate();
        }
    };
    Scene_Item.prototype.createItemCommandWindow = function() {
        this._itemCommandWindow = new Window_ItemCommand();
        this._itemCommandWindow.hide();
        this._itemCommandWindow.setHandler('use',     this.onItemOk.bind(this));
        this._itemCommandWindow.setHandler('dump',     this.onItemDump.bind(this));
        this._itemCommandWindow.setHandler('cancel', this.onCommandCancel.bind(this));
        this.addWindow(this._itemCommandWindow);
    };

    Scene_Item.prototype.hideSubWindow = function(window) {
        window.hide();
        window.deactivate();
        this._itemCommandWindow.activate();
    };
    Scene_Item.prototype.onCommandCancel = function() {
        this._itemCommandWindow.hide();
        this._itemWindow.activate();
        this._itemWindow.refresh();
    };
    Scene_Item.prototype.createItemNumberWindow = function() {
        this._itemNumberWindow = new Window_ItemNumber();
        this._itemNumberWindow.hide();
        this._itemNumberWindow.setHandler('ok',     this.onNumberOk.bind(this));
        this._itemNumberWindow.setHandler('cancel', this.onNumberCancel.bind(this));
        this.addWindow(this._itemNumberWindow);
    };
    Scene_Item.prototype.onNumberOk = function() {
        var number = this._itemNumberWindow.number();
        SoundManager.playShop();
        this.doItemDump(number);
        this._itemCommandWindow.hide();
        this._itemNumberWindow.hide();
        this._itemWindow.activate();
        this._itemWindow.refresh();
    };
    Scene_Item.prototype.onNumberCancel = function() {
        SoundManager.playCancel();
        this._itemNumberWindow.hide();
        this._itemCommandWindow.activate();
    };
    Scene_Item.prototype.onItemDump = function() {
        var item = this._itemWindow.item();
        if(this.canDump()){
            SoundManager.playOk();
            this._itemNumberWindow.setup(item, $gameParty.numItems(item),item.price);
            this._itemNumberWindow.show();
            this._itemNumberWindow.activate();
            this._itemCommandWindow.deactivate();
        }else{
            SoundManager.playBuzzer();
            this._itemCommandWindow.activate();
        }
    };

    Scene_Item.prototype.doItemDump　= function(number) {
        $gameParty.loseItem(this._itemWindow.item(), number)

    };
    Scene_Item.prototype.canDump = function() {
        return this._categoryWindow.currentSymbol() != 'keyItem';
    }
})();