let {addItem, addRoom, addPocket} = require("../model/itemList");

function libraryEnter() {
  let message = "you enter the Library and call for the puppy but hear nothing.\n";
  return message;
}
function libraryLookNorth() {
  let message = "You look North in the Library.\n";
  message += "you see three sets of Bookshelves and a Door\n";
  message += "Item list = Bookshelves, Door";
  addItemLibrary ("Bookshelves");
  addItemLibrary ("Door");
  return message;
}
function libraryNorthSearchBookshelves() {
  let message = "You take a closer look at the bookshelves on the North wall of the Library\n";
  message += "There are a mix of old and new books with a vast array of topics!\n";
  message += "Is there a particular book you would like to search closer?";
  return message;
}
function libraryNorthSearchDoor() {
  let message = "You search the Door on the North side of the Library and discover it's unlocked\n";
  message += "You open the door and see that it leads to an office\n";
  message += "You found a new room = Office";
  addRoom ("Office");
  return message;
}
function libraryNorthEnterOffice() {
  let message = "Please go to http://localhost:3000/Office\n";
  return message;
}
function libraryLookEast() {
  let message = "You look East in the Library\n";
  message += "You see a large Fireplace.  On either side,\n";
  message += " there is an armchair, sidetable and lamp.\n";
  message += "Item list = Fireplace, Armchair, Lamp";
  addItemLibrary ("Fireplace");
  addItemLibrary ("Armchair");
  addItemLibrary ("Lamp");
  return message;
}
function libraryEastSearchFireplace() {
  let message = "You search the Fireplace on the East side of the Library.\n";
  message += "You see a picture frame containing a photo of a dog that looks similar to puppy!\n";
  message += "You take the picture frame down for a closer look and \n";
  message += "there appears to be a loose brick behind it.\n";
  message += "Item list = Brick";
  addItemLibrary ("Brick");
  return message;
}
function libraryEastSearchBrick() {
  let message = "You reach up to touch the brick and see that it is a little loose.\n";
  message += "You wiggle and pull the brick until it comes loose.\n";
  message += "Once you get the brick out, you see a hole behind it.\n";
  message += "Item list = Hole";
  addList ("Hole");
  return message;
}
function libraryEastSearchHole() {
  let message = "You look into the hole but you can't see anything.\n";
  message += "Against your better judgement, you reach your hand into the hole \n";
  message += "and you feel something cold.  You pull back, take a breath and try again.\n";
  message += "You reach in again and you wrap your hands around whatever it is and pull it out!\n";
  message += "In your hand you see a strange coin.  You have no idea where it is from or what it's for.";
  message += "You put this in your pocket  .Pocket list = Coin";
  addPocket ("Coin");
  return message;
}
function libraryEastSearchCoin() {
  let message = "In your hand you see a strange coin.  You have no idea where it is from or what it's for.";
  return message;
}
function libraryEastUseCoin() {
  let message = "You do not see anywhere to use the coin at the moment.";
  return message;
}
function libraryEastSearchArmchair() {
  let message = "You search the armchairs by the fireplace on the east side of the Library.\n";
  message += "You find nothing out of the ordinary";
  return message;
}
function libraryEastSearchLamp() {
  let message = "You search the lamps on the east side of the Library.\n";
  message += "As you reach up to turn one of the lamps on, you feel something there!\n";
  message += "You grab hold of it and pull it out.\n";
  message += "You have found a tiny flashlight!\n";
  message += "You put this in your pocket.  Pocket list = Flashlight";
  addPocket ("Flashlight")
  return message;
}
function libraryEastSearchFlashlight() {
  let message = "You search the flashlight, and notice it in not a normal flashlight.\n";
  message += "This flashlight appears to produce black light";
  return message;
}
function libraryEastUseFlashlight() {
  let message = "You do not see a place to use the flashlight in here!";
  return message;
}
function libraryLookSouth() {
  let message = "You look south in the Library and see a desk by the window\n";
  message += "Item list = Desk";
  addItemLibrary ("Desk");
  return message;
}
function librarySouthSearchDesk() {
  let message = "You search the desk.  You see some loose papers, a lamp \n";
  message +=    "and a few pens.  There are several drawers on either side of the desk./n";
  message += "Item list = Drawers";
  addItemLibrary ("Drawers");
  return message;
}
function librarySouthSearchDrawers() {
  let message = "Most of the drawers are empty, but you find a piece of paper with writing on it.\n";
  message += "Item list = Paper";
  addItemLibrary ("Paper");
  return message;
}
function librarySouthSearchPaper() {
  let message = "You take a closer look at the paper and see a list of books.\n";
  message += "Macbeth, Harry Potter, Dictionary and JS for Dummies\n";
  message += "Item list = Macbeth, HarryPotter, Dictionary, JSforDummies";
  addItemLibrary ("Macbeth");
  addItemLibrary ("HarryPotter");
  addItemLibrary ("Dictionary");
  addItemLibrary ("JSforDummies");
  return message;
}
function libraryNorthSearchHarryPotter() {
  let message = "You move back over to the north side of the Library and search the bookshelves.\n";
  message += "You find the book Harry Potter and notice the dust pattern around it has been disturbed.\n";
  message += "You pull Harry Potter from the shelf.  Nothing about the book seems out of place.\n";
  message += "You begin to flip through the pages and you notice a piece of paper has fallen out.\n";
  message += "You bend over to pick up the piece of paper and notice the number 45 on it.\n";
  message += "Item list = Piece of paper with the number '45' on it";
  addItemLibrary ("Piece of paper with the number '45' on it");
  return message;
}
function libraryNorthSearchMacbeth() {
  let message = "You search the bookshelves on the north side of the Library and find Macbeth.\n";
  message += "You open Macbeth to find an inscription on the inside of the front cover.\n";
  message += "To my dearest, may Shakespeare always remain in your heart!.  Love always, 18 to forever.\n";
  message += "Item list = 18 to forever";
  addItemLibrary ("18 to forever");
  return message;
}
function libraryNorthSearcDictionary() {
  let message = "You find the Dictionary on the middle bookshelf on the bottom right side.\n";
  message += "You pick up the Dictionary and don't notice much about it.\n";
  message += "As you begin to flip through the pages, you notice that one of the pages is dog-eared.\n";
  message += "You take a closer look at that page.  There are no words on this page 72 that seem strange.\n";
  message += "Item list = Page 72 dog-eared";
  addItemLibrary ("Page 72 dog-eared");
  return message;
}
function libraryNorthSearchJSForDummies() {
  let message = "You find the book JS for Dummies on the far left of the bookshelves.\n";
  message += "It appears this book has been used alot.  You open it up and begin to read about Java Script.\n";
  message += "You are facinated as you have always wanted to learn more about JS and programming in general.\n";
  message += "After some time, you realize that you are here to find puppy, not lean about JS!.\n";
  message += "As you reach up the put the book back, you notice a keypad at the back of the shelf\n";
  message += "behind the JS for Dummies book.\n";
  message += "Item list = Keypad";
  addItemLibrary ("Keypad");
  return message;
}
function libraryNorthSearchKeypad() {
  let message = "The keypad has digits 1 through 9 and a screen above it./n";
  message += "What on earth could this be for?\n";
  message += "What could I use here?";
  return message;
}
function libraryNorthUseKeypad() {
  let message = "Hint-to use keypad, enter a numerical code after the word keypad";
  return message;
}

//I would like to change this into an if ele statement so that if they enter any other code it comes back with ...you entered teh wrong code.  access denied
// in the file office, there is one that works use that as a guide
function libraryNorthUseKeypad457218() {
  let message = "The screen lights up green 'GRANTED'\n";
  message += "There is a loud click and the bookshelf shifts slightly.\n";
  message += "You reach out and give the bookshelf a little push and feel it move further.\n";
  message += "You begin to push with more force and the entire bookshelf swings away from you\n";
  message += "revealing a hidden room behind it.\n";
  message += "You found a new room!'BookshelfRoom'.\n";
  addRoom ("BookshelfRoom");
  return message;


}
function libraryNorthUseKeypad451872() {
  let message = "The screen lights up red 'DENIED'";
  return message;
}
function libraryNorthUseKeypad721845() {
  let message = "The screen lights up red 'DENIED'";
  return message;
}
function libraryNorthUseKeypad724518() {
  let message = "The screen lights up red 'DENIED'";
  return message;
}
function libraryNorthUseKeypad184572() {
  let message = "The screen lights up red 'DENIED'";
  return message;
}
function libraryNorthUseKeypad187245() {
  let message = "The screen lights up red 'DENIED'";
  return message;
}
function libraryNorthEnterBookshelfRoom() {
  let message = "You enter the hidden room behind the bookshelf.\n";
  message += "Please go to http://localhost:3000/BookshelfRoom\n";
  return message;
}
function libraryLookWest() {
  let message = "You look west in the Library and see the doorway to the Foyer";
  return message;
}

module.exports = {
  libraryEnter,
  libraryLookNorth,
  libraryNorthSearchBookshelves,
  libraryNorthSearchDoor,
  libraryNorthEnterOffice,
  libraryLookEast,
  libraryEastSearchFireplace,
  libraryEastSearchBrick,
  libraryEastSearchHole,
  libraryEastSearchCoin,
  libraryEastUseCoin,
  libraryEastSearchArmchair,
  libraryEastSearchLamp,
  libraryEastSearchFlashlight,
  libraryEastUseFlashlight,
  libraryLookSouth,
  librarySouthSearchDesk,
  librarySouthSearchDrawers,
  librarySouthSearchPaper,
  libraryLookWest,
  libraryNorthSearchHarryPotter,
  libraryNorthSearchMacbeth,
  libraryNorthSearcDictionary,
  libraryNorthSearchJSForDummies,
  libraryNorthSearchKeypad,
  libraryNorthUseKeypad,
  libraryNorthUseKeypad457218,
  libraryNorthUseKeypad451872,
  libraryNorthUseKeypad721845,
  libraryNorthUseKeypad724518,
  libraryNorthUseKeypad184572,
  libraryNorthUseKeypad187245,
  libraryNorthEnterBookshelfRoom,
};
