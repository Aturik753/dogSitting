function foyerLookEast() {
  let message = "You look East in the Foyer and see a Doorway\n";
  message += "Item list = Doorway";
  return message;
}

function foyerEastDoorway() {
  let message = "you search the doorway and find it leads into the Library.\n";
  message += "Item list, you found a new room = Library";
  return message;
}
function foyerEastEnterLibrary() {
  let message = "Please go to http://localhost:3000/Library\n";
  return message;
}

module.exports = {
  foyerLookEast,
  foyerEastDoorway,
  foyerEastEnterLibrary,
};
