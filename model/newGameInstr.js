let {clearRoomList, 
  clearPocketList, 
  clearItemListFoyer, 
  clearItemListLibrary, 
  clearItemListOffice, 
  clearItemListAttic, 
  clearItemListBookshelfRoom,
  clearItemListPowderRoom} = require("../model/itemList");

function puppyFound(){
  let message = "You call out for puppy.  You hear a restle and a whimper and you see puppy running towards you.\n";
  message += "You stretch out your arms and puppy jumps right into them.\n";
  message += "You hear a loud, deep voice, which sounds like it is coming from everywhere!\n";
  message += "'Take your dog and Go!  Next time you will not be so lucky.  If you enter my home again, I will keep more than just the dog!'\n";
  message += "Trembling, you hold on to puppy as tight as you can and begin to run.\n";
  message += "As you enter the Foyer, you look up and see that the front door is open./n";
  message += "You move as fast as you can and fly through the open door.\n";
  message += "You make it to the street but don't slow down and continue to run until you are home safe and sound.\n";
  message += "   \n";
  message += "THE END\,";
  message += " \n";
  message += "Thank you for playing, I hope you enjoyed the game.  If you would like to play again, go to /startGame."
  return message;
}

let puppyLocation;


const puppyLocationRooms = ["Office", "BookshelfRoom", "Attic", "SecretRoomAttic", "SoundStudio"];
//, "Kitchen", "WineRoom" - These are the next rooms to add once they are in the game.
function puppyLocationRandom() {
  puppyLocation =
    puppyLocationRooms[Math.floor(Math.random() * puppyLocationRooms.length)];
}
function search(location) {
  if (location === puppyLocation) {
    return puppyFound();
  } else {
    return "You call out for puppy.  You wait and listen, but there is no sign of puppy.";
  }
}

function newGame() {
  clearRoomList();
  clearPocketList();
  clearItemListFoyer(); 
  clearItemListLibrary(); 
  clearItemListOffice();
  clearItemListAttic();
  clearItemListBookshelfRoom();
  clearItemListPowderRoom();
  let message = "";
  message += "                 \n";
  message +=
    "You have just moved to town and are dog sitting for a new client.  \n";
  message += "As you are out for a walk with puppy, \n";
  message +=
    "there is a bright flash of lightening and a crash of thunder!  \n";
  message += "The puppy yelps and pulls the leash out of your grip.  \n";
  message +=
    "The puppy runs into a nearby house where the front door was left open.  \n";
  message +=
    "You run up to the home.  You call inside.  Ring the bell.  There is no answer.  \n";
  message +=
    "You have to find puppy, so you step inside and call out.....PUPPY!!!  \n";
  message += "The frontdoor closes behind you and locks!!!\n";
  message +=
    "If you would like to play, please start the game by going to http://localhost:3000/startGame";
  return message;
}







function startInstructions() {
  puppyLocationRandom();
  clearRoomList();
  clearPocketList();
  clearItemListFoyer(); 
  clearItemListLibrary(); 
  clearItemListOffice();
  clearItemListAttic();
  clearItemListBookshelfRoom();
  clearItemListPowderRoom();
  let message = "";
  message += "                 \n";
  message += "Instructions.  \n";
  message += " \n";
  message += "Using the url http://localhost:3000/ you will add to the end in the following manner.  \n";
  message += "You will add the room you are in first......for example     :3000/Foyer  \n";
  message += "You may look North, South, East or West in each room that you are in.....for example    :3000/Foyer/lookNorth.  \n";
  message += "A description will come up, and if there are items you may interact with they will be given in a list at the end.  \n";
  message += "you may type the commands.....look, search, enter or use.  for example..... :3000/Foyer/searchDoor  \n";
  message += "Always start with the room you are in, followed by / then your command and what you want to do....:3000/Foyer/enterLibrary  \n";
  message += "You can check what rooms you have found so far at :3000/RoomList.\n";
  message += "If you need to check what you have found in that room so far, use roomList.....for example   :3000/Foyer/roomList\n";
  message += "If you have picked anything up and put it in your pocket, you can check your pocket at :3000/pocketList\n";
  message += "If you have need a reminder of these instructions, go to ...... :3000/instructions\n";
  message += "Call out for puppy in each room to see if he is there!......for example :3000/PUPPY?location=Foyer....replacing Foyer with the room you are in\n";
  message += "Good Luck!\n";
  message += "To continue, enter the Foyer at http://localhost:3000/Foyer\n";
  return message;
}

function instructions() {
  let message = "";
  message += "                 \n";
  message += "Instructions.  \n";
  message += " \n";
  message += "Using the url http://localhost:3000/ you will add to the end in the following manner.  \n";
  message += "Call out for puppy in each room to see if he is there!\n";
  message += "Replace Foyer with the room you are in example          :3000/PUPPY?location=Foyer\n";
  message += "Always start with the room you are in, followed by / then your command and what you want to do.  \n";
  message += "You will add the room you are in first. For example     :3000/Foyer  \n";
  message += "You may look North, South, East or West in each room    :3000/Foyer/lookNorth.  \n";
  message += "you may type commands look, search, enter or use        :3000/Foyer/searchDoor  \n";
  message += "You can check what rooms you have found so far at       :3000/RoomList.\n";
  message += "To check what you have found in that room so far        :3000/Foyer/roomList\n";
  message += "If you have put anyting in your pocket, check at        :3000/PocketList\n";
  message += "Good Luck!\n";
  return message;
}
module.exports = {
  newGame,
  instructions,
  puppyLocationRandom,
  search,
  startInstructions
};
