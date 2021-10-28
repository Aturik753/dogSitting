function foyerLookSouth() {
  let message = "You look South in the Foyer and see the Frontdoor\n";
  message += "Item list = Frontdoor";
  return message;
}
function foyerSouthSearchFrontdoor() {
  let message = "The Frontdoor is locked!";
  return message;
}

module.exports = {
  foyerLookSouth,
  foyerSouthSearchFrontdoor,
};
