let {addItem, addRoom, addPocket} = require("../model/itemList");


function officeEnter() {
  let message = "You leave the Library and enter the Office";
  return message;
}
function officeLookNorth() {
  let message = "You look north in the Office and see a short bookshelf to the left with plants on top.\n";
  message += "To the right, you see part of a curving desk whith a telephone, notepad and pencils.\n";
  message += "Item list = Bookshelf, Phone, Pad, Pencils";
  addItemOffice ("Bookshelf");
  addItemOffice ("Phone");
  addItemOffice ("Pad");
  addItemOffice ("Pencils");
  return message;
}
function officeSearchBookshelf() {
  let message = "You search the small bookshelf and notice one book is more worn that the others.\n";
  message += "Item list - WornBook";
  addItemOffice ("WornBook");
  return message;
}
function officeSearchWornBook() {
  let message = "As you reach out and begin to take the book off the shelf,\n";
  message += "something drops to the floor!\n";
  message += "You bend down and pick up a key.  When you look closer, the numbers 835 are on it.\n";
  message += "You put this in your pocket.  Pocket list = Key835";
  addPocket ("Key835");
  return message;
}
function officeUseKey835() {
  let message = "There is nowhere here to use this key!";
  return message;
}
function officeUseKey64() {
  let message = "There is nowhere here to use this key!";
  return message;
}
function officeSearchPhone() {
  let message = "You take a closer look at the phone on the desk.\n";
  message += "It is one of the older rotary dial phones.\n";
  message += "You instictually pick up the receiver and put it to your ear.\n";
  message += "It surprises you that you do not hear a dial tone....\n";
  message += "You hold your breath and listen.  It almost sounds like someone else is dialing out!\n";
  message += "You listen but realize you hear the same series of beeps, over and over\n";
  message += "Three beeps, seven beeps, three beeps, pause.  then repeats.\n";
  message += "Item list = 373";
  addItemOffice ("373");
  return message;
}
function officeSearchPencil() {
  let message = "There is nothing interesting about the pencil!";
  return message;
}
function officeSearchPad() {
  let message = "It looks as though someone made a note on the previous sheet!\n";
  message += "They pressed hard enough that it left an impression on the top of the pad";
  return message;
}
function officeUsePencil() {
  let message = "You grab the pencil and begin to rub gently on the top of the pad.\n";
  message += "You begin to see the previous message is showing up a little.\n";
  message += "Once complete, you can make out most of the message but not all of it.\n";
  message += "P t  Fu  ral  S  vi e";
  return message;
}
function officeLookEast() {
  let message = "You look east in the Office and see a computer sitting on the desk.\n";
  message += "There is a large leather office chair at the desk.\n";
  message += "There is a view from the window showing part of the yard.\n";
  message += "You notice a dog house in the back corner and a garden.";
  message += "Item list = Computer";
  addItemOffice ("Computer");
  return message;
}
function officeSearchComputer() {
  let message = "You sit down in the large office chair and wiggle the mouse.\n";
  message += "The screen comes to life and you see wallpaper of puppy?\n";
  message += "It appears there is a password required.\n";
  message += "After trying 'PASSWORD, Pa$$worD, 1234, you give up.\n";
  return message;
}
function officeUse373() {
  let message = "This does not help you";
  return message;
}
function officeLookSouth() {
  let message = "You look south in the Office.\n";
  message += "you see the door to the Library.\n";
  message += "On the left of the door you see a filing cabinet.\n";
  message += "On the right of the door you see a comfortable looking couch and chair.\n";
  message += "Item list = FilingCabinet";
  addItemOffice ("FilingCabinet");
  return message;
}
function officeSearchFilingCabinet() {
  let message = "You pull on the handle of the filing cabinet and it opens.\n";
  message += "You see there are a large number of files.\n";
  message += "You are unable to determine what the files contain on your first glance,\n";
  message += "but you do notice they are very organized and set up in numerical order from 1-500.\n";
  message += "Is there a particular file you would like to search?\n";
  message += "To search a particular file go to localhost:3000/Office/search?file=# replacing # with a number";
  return message;
}
function officeSearchFile(file) {
  let message = "You pull out the file labeled 373.\n";
  message += "Inside you discover a piece of paper with one item on it.\n";
  message += "DogLifePoochFriend\n";
  message += "Item list = DogLifePoochFriend";
  if (+file === 373) {
    return message;
  } else return "You find a boring document that does not interest you";
}
//I probably do not need the file below this line, but am going to leave in anyway.
function officeSearchFile373() {
  let message = "You pull out the file labeled 373.\n";
  message += "Inside you discover a piece of paper with one item on it.\n";
  message += "DogLifePoochFriend\n";
  message += "Item list = DogLifePoochFriend";
  return message;
}

function officeUseDogLifePoochFriend() {
  let message = "You sit back down at the computer and try another password.\n";
  message += "DogLifePoochFriend\n";
  message += "YES! you have successfully found the password to the computer!\n";
  message += "Oh no!!! What comes onto the screen is what looks like a live video!\n";
  message += "you see puppy!  But where is he?  You can't see much more in the video\n";
  message += "He looks ok, but you must find him!  Where could he be?\n";
  message += "And why would there be a video camera on him and fed to this computer?";
  return message;
}
function officelookWest() {
  let message = "You look west in the office.\n";
  message += "You see a swinging door.\n";
  message += "Item list = SwingingDoor";
  addItemOffice ("SwingingDoor");
  return message;
}
function officeSearchSwingingDoor() {
  let message = "You approach the swinging door to take a closer look.\n";
  message += "There is a small circular window at the top.\n";
  message += "you look through the window and see a Kitchen!\n";
  message += "You found a new room = Kitchen";
  addRoom ("Kitchen");
  return message;
}
function officeEnterKitchen() {
  let message = "Please go to http://localhost:3000/Kitchen\n";
  return message;
}

//Anything below this line has not been exported out yet

module.exports = {
  officeEnter,
  officeLookNorth,
  officeSearchBookshelf,
  officeSearchWornBook,
  officeUseKey835,
  officeUseKey64,
  officeSearchPhone,
  officeSearchPencil,
  officeSearchPad,
  officeUsePencil,
  officeLookEast,
  officeSearchComputer,
  officeUse373,
  officeLookSouth,
  officeSearchFilingCabinet,
  officeSearchFile373,
  officeUseDogLifePoochFriend,
  officelookWest,
  officeSearchSwingingDoor,
  officeEnterKitchen,
  officeSearchFile,
};

//in here , I would like to create a formula, that if they search anything in the filing cabinet other than
// 373, it comes back with a generic message, you find a boring document.
