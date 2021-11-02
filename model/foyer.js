
let {addItemFoyer, addRoom, addItemPowderRoom, addPocket} = require("../model/itemList");


function foyerLookNorth() {
    let message = "you look north in the Foyer and you see a double Staircase.\n";
    message += "You also see a Door to the right of the stairs\n";
    message += "Item list = Staircase, Door\n";
    addItemFoyer ("Staircase");
    addItemFoyer ("Door");
    addRoom ("Foyer");
    return message;
  }
  function foyerNorthSearchStaircase() {
    let message = "you ascend the staircase and find a LockedDoor.\n";
    message += "Item list = LockedDoor\n";
    addItemFoyer ("LockedDoor");
    return message;
  }
  function foyerNorthSearchLockedDoor() {
    let message = "You see a keyhole\n";
    message += "Item list = Keyhole";
    addItemFoyer ("Keyhole");
    return message;
  }
  function foyerNorthSearchKeyhole() {
    let message = "Do you have a key?";
    return message;
  }
  function foyerNorthStaircaseUseKey(){
    let message = "What key are you trying to use?  could you be more specific?\n";
    message += "Only one particular key will open this door.";
    return message;
  }
  function foyerNorthStaircaseUseKey64() {
    let message = "You have found the key to open this door.\n";
    message += "The door is now unlocked.\n";
    message += "Would you like to open the door and enter?\n";
    message += "If you would like to go through the staircase door, go to http://localhost:3000/Hallway\n";
    message += "You found a new room = Hallway";
    addRoom ("Hallway")
    return message;
  }

  //Why is my message gray in this function rather than blue like every other one.
  function foyerNorthStaircaseUseKey835() {
    let message = "You try the key but the door remains locked.";
    return message;
  }
  function foyerNorthSearchDoor() {
    let message = "You have found the Powderroom\n";
    message += "You found a new room = Powderroom";
    addRoom ("PowderRoom");
    return message;
  }
  function foyerNorthSearchPowderroom() {
    let message = 
      "You find nothing interesting in the Powderroom, but notice smudges on the mirror.\n";
    message += "Item list = Mirror";
    addItemPowderRoom ("Mirror");
    return message;
  }
  function foyerNorthSearchMirror() {
    let message = "You take a closer look at the smudges on the mirror\n";
    message += "but you are unable to make any sense of it.\n";
    message += "You wonder if there is anything that could help you see it better";
    return message;
  }
  function foyerNorthUseFlashlight() {
    let message = "You take out the strange flashlight you found in the Library.\n";
    message += "You turn it on and notice your white shoes are illuminated but not your pants!\n";
    message += "As you point it towards the mirror, you begin to make out a message......\n";
    message += "'TO ALL THAT ENTER, BEWARE THE BEAR!'";
    return message;
  }
  

  function foyerLookEast() {
    let message = "You look East in the Foyer and see a Doorway\n";
    message += "Item list = Doorway";
    addItemFoyer ("Doorway");
    return message;
  }
  
  function foyerEastDoorway() {
    let message = "you search the doorway and find it leads into the Library.\n";
    message += "You found a new room = Library";
    addRoom ("Library");
    return message;
  }
  function foyerEastEnterLibrary() {
    let message = "Please go to http://localhost:3000/Library\n";
    return message;
  }
  
  function foyerLookSouth() {
    let message = "You look South in the Foyer and see the Frontdoor\n";
    message += "Item list = Frontdoor";
    addItemFoyer ("FrontDoor");
    return message;
  }
  function foyerSouthSearchFrontdoor() {
    let message = "The Frontdoor is locked!";
    return message;
  }
  
  function foyerLookWest() {
    let message = "You look West in the Foyer and see a blank wall";
    return message;
  }
  
 
  
  module.exports = {
    foyerLookNorth,
    foyerNorthSearchStaircase,
    foyerNorthSearchLockedDoor,
    foyerNorthSearchKeyhole,
    foyerNorthStaircaseUseKey64,
    foyerNorthStaircaseUseKey835,
    foyerNorthStaircaseUseKey,
    foyerNorthSearchDoor,
    foyerNorthSearchPowderroom,
    foyerNorthSearchMirror,
    foyerNorthUseFlashlight,
    foyerLookEast,
    foyerEastDoorway,
    foyerEastEnterLibrary,
    foyerLookSouth,
    foyerSouthSearchFrontdoor,
    foyerLookWest
  };