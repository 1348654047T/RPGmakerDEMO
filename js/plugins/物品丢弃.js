$gameParty.gainItem($dataItems[id], num);  //丢物品
$gameParty.gainItem($dataWeapons[id], num, includeEquip);  //丢武器
$gameParty.gainItem($dataArmors[id], num, includeEquip);  //丢护甲
// id: 要处理的物品序号；
// num: 处理的物品数量，获取用正整数，丢弃用负整数；
// includeEquip: 是否处理已装备的物品，0 - 不处理，1 - 处理。