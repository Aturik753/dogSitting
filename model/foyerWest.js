let {clearItemList, getItemList, addItem} = require("../model/itemList");

function foyerLookWest() {
  let message = "You look West in the Foyer and see a blank wall";
  return message;
}

module.exports = {
  foyerLookWest,
};
