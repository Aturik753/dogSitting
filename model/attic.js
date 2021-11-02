let {addItemAttic, addRoom, addPocket, addItemBookshelfRoom, addItemSoundStudio} = require("../model/itemList");

function enterBookshelfRoom() {
  let message = "You slowly move the bookshelf door farther to try and let more light in.\n";
  message += "You still can't see anything beyond the doorway.\n";
  message += "You take a deep breath and step inside.  You listen and hear nothing.\n";
  message += "As you take a step deeper, you triger a motion sensor and a mild light turns on.\n";
  message += "You are in a small room with bare stone walls in every direction.\n";
  message += "The door swings shut behind you!\n";
  return message;
}
function searchBookshelfRoomNorth() {
  let message = "To the north, you see a set of spiral stairs ascending.\n";
  message += "Item list = SpiralStairs.\n";
  addItemBookshelfRoom ("SpiralStairs");
  return message;
}
function searchBookshelfRoomEast() {
  let message = "To the east, you see a bare stone wall.\n";
  return message;
}
function searchBookshelfRoomSouth() {
  let message = "To the south, you see an outline of a door in the rocks with a lever.\n";
  message += "Item list = Lever.\n";
  addItemBookshelfRoom ("Lever");
  return message;
}
function searchBookshelfRoomWest() {
  let message = "To the west, you see an outline of a door in the rocks with no way to open it\n";
  return message;
}
function bookshelfRoomSearchLever() {
  let message = "You take a closer look at the lever on the south wall of the room.\n";
  message += "As you pull the lever down, the door swings open.\n";
  message += "This is a secret entrance to the Library.\n";
  message += "Please go to http://localhost:3000/Library to enter the Library.\n";
  return message;
}
function bookshelfRoomSearchSpiralStairs() {
  let message = "You look at the spiral stairs and decide to go up and take a look.\n";
  message += "At the top of the stairs, you find a room full of storage.\n";
  message += "You found a new room! = Attic.\n";
  message += "Please go to http://localhost:3000/Attic to continue in this room.";
  addRoom ("Attic");
  return message;
}
function attic() {
  let message = "You are now in the Attic.\n";
  return message;
}
function atticSearchNorth() {
  let message = "You look north and see at the spiral stairs decending.\n";
  return message;
}
function atticSearchEast() {
  let message = "You look east and see boxes full of old toys and clothing.\n";
  return message;
}
function atticSearchWest() {
  let message = "You look west and see boxes full of various decoration.\n";
  message += "You see items from Christmas, Halloween and even Easter.";
  return message;
}
function atticSearchSouth() {
  let message = "You look south and see a large dusty mirror and your reflection.\n";
  message += "To your left you see a large gumball machine.\n";
  message += "Item list = GumballMachine";
  addItemAttic ("GumballMachine");
  return message;
}
function atticSearchGumballMachine() {
  let message = "The gumball machine looks old but well looked after.\n";
  message += "There doesn't appear to be as much dust on it as most of the other items";
  return message;
}
function atticUseCoin() {
  let message = "You pull a few coins out of your pocket.\n";
  message += "You try everything you have.  Toonie, Loonie, quarter, dime and nickel.\n";
  message += "Nothing seem to happen, other than you have lost some money and have a few gumballs!\n";
  message += "Oh, remember the coin you found in the hole behind the loose brink in the Library?\n";
  message += "You wonder if anything would happen if you use it in the gumball machine!\n";
  message += "You drop the strange coin into the machine, turn the crank, and no gum......\n";
  message += "You hear some gears and cranks turning somewhere, and the mirror swings open!\n";
  message += "You found something new = SecretDoor!\n";
  addItemAttic ("SecretDoor");
  return message;
}
function atticSearchSecretDoor() {
  let message = "You look through the opening that was consealed by the mirror in the attic.\n";
  message += "You see a thin hallway that takes an L off to the left\n";
  message += "You found a new room = SecretRoomAttic"
  addRoom ("SecretRoomAttic");
  return message;
}
function atticEnterSecretRoomAttic() {
  let message = "Please go to http://localhost:3000/SecretRoomAttic\n";
  return message;
}
function SecretRoomAttic(){
  let message = "As you push open the secret door, you peer inside but see nothing.  You listen but it's quiet.\n";
  message += "Proceeding slowly into the room, you pause to let your eyes adjust.  you see a dim light on the wall.\n";
  message += "You reach out to touch it and realize it is a light switch as the blinding lights come on.  You freeze, but still hear nothing.\n";
  message += "There is a narrow hallway infront of you heading south which looks like it takes a sharp left turn ahead.\n";
  return message;
}
function secretRoomLookNorth() {
  let message = "You look and see the hallway leading to the Attic from which you just came.";
  return message;
} 
function secretRoomLookSouth() {
  let message = "Looking South you see a blank wall at the end of the narrow hallway.";
  return message;
}
function secretRoomLookWest() {
  let message = "To the west, you see the side of the hallway, but nothing else.";
  return message;
}
function secretRoomLookEast() {
  let message = "As you peek around the corner to the east, you see a vast array of electronic equipment and padded walls.\n";
  message += "From your limited knowledge, you think this might be a sound studio\n";
  message += "You found a new room = SoundStudio.\n";
  addRoom ("SoundStudio");
  return message;
}
function secretRoomEnterSoundStudio() {
  let message = "You have entered the SoundStudio";
  message += "Please go to http://localhost:3000/SoundStudio\n";
  return message;
}
function soundStudio() {
  let message = "You are in the SoundStudio";
  messages += "Even your footsteps are muffled in here and there is no echo at all.";
  return message;
}
function soundStudioLookNorth() {
  let message = "As you look North, you see a desk in front of you which has a microphone and \n";
  message += "a few other pieces of equipment you don't recognize.\n";
  message += "Item list = Microphone";
  addItemSoundStudio ("Microphone");
  return message;
}
function soundStudioLookEast() {
  let message = "Looking east, you see more of the padded walls and another desk.\n";
  message += "On top of the desk, you see a bunch of screens, wires and a laptop.\n";
  message += "Item list = Laptop";
  addItemSoundStudio ("Laptop");
  return message;
}
function soundStudioLookSouth() {
  let message = "To the South, you see a stand with lights hanging from it and behind that \n";
  message += "you think you see what looks like a black mirror\n";
  message += "Item list = LightStand";
  addItemSoundStudio ("LightStand");
  return message;
}
function soundStudioLookWest() {
  let message = "You look and see the hallway leading to the Attic from which you just came.";
  return message;
}
function soundStudioSearchMicrophone() {
  let message = "You approach the microphone and tap it with your finger.  you can hear it projecting somewhere.\n";
  message += "You lean closer and speak into the mic, 'Testing, Testing, 1, 2, 3.\n";
  message += "You can hear your words being distorted and projected somewhere, but you have no idea where it is going";
  return message;
}
function soundStudioUseMicrophone() {
  let message = "You lean in again to the mic and begin to sing, you can hear the song you are singing but \n";
  message += "it's like someone else is singing it as the voice is deeper and distorted.\n";
  message += "You feel silly and stop.";
  return message;
}
function soundStudioSearchLaptop() {
  let message = "You see a laptop on one of the desks.  You approach it and press Enter.\n";
  message += "A screen appears and it asks for a password.\n";
  return message;
}
function soundStudioUseLaptop(){
  let message = "You try a few random keys to see if it will let you in, but the screen says 'ACCESS DENIED'\n";
  return message;
}
function soundStudioUseDogLifePoochFriend() {
  let message = "You enter the password and the laptop comes to life.\n";
  message += "The screen is already open to a sound file.\n";
  message += "Item list = SoundFile";
  addItemSoundStudio ("SoundFile");
  return message;
}
function soundStudioSearchSoundFile(){
  let message = "You look at the sound file, but you are unable to tell what it is from just looking at it";
  return message;
}
function soundStudioUseSoundFile() {
  let message = "You click on the sound file to see what happens.\n";
  message += "You are startled by the extremely loud sound of thunder.  you can hear it playing all around you,\n";
  message += "so you click on the file again to stop it.";
  return message;
}
function soundStudioSearchLightingStand() {
  let message = "You approach the lightingStand and see a floor button which you think might be the switch for the light\n";
  message += "Item list = FloorButton";
  addItemSoundStudio("FloorButton");
  return message;
}
function soundStudioUseLightingStand() {
  let message = "You can't really use this until you find a way to turn it on.";
  return message;
}
function soundStudioSearchFloorButton() {
  let message = "You search the floor button, it appears that it is the switch for the light.";
  return message;
}
function soundStudioUseFloorButton() {
  let message = "You step on the floor button.  What you thought was a wall, you realize is a blacked out window,\n";
  message += "you see what looks like lightening flashing outside.  When you take your foot off the button, the lightening stops.\n";
  message += "You step on the button again, and the lightening starts again.  You are beginning to wonder if the storm which \n";
  message += "scared puppy in the first place, was not real and somehow came from this room!";
  return message;
}




module.exports = {
  enterBookshelfRoom,
  searchBookshelfRoomNorth,
  searchBookshelfRoomEast,
  searchBookshelfRoomSouth,
  searchBookshelfRoomWest,
  bookshelfRoomSearchLever,
  bookshelfRoomSearchSpiralStairs,
  attic,
  atticSearchNorth,
  atticSearchEast,
  atticSearchWest,
  atticSearchSouth,
  atticSearchGumballMachine,
  atticUseCoin,
  atticSearchSecretDoor,
//below here are all new, need to double check that they all are correct on routes.js.
  atticEnterSecretRoomAttic,
  SecretRoomAttic,
  secretRoomLookNorth,
  secretRoomLookSouth,
  secretRoomLookWest,
  secretRoomLookEast,
  secretRoomEnterSoundStudio,
  soundStudio,
  soundStudioLookNorth,
  soundStudioLookEast,
  soundStudioLookSouth,
  soundStudioLookWest,
  soundStudioSearchMicrophone,
  soundStudioUseMicrophone,
  soundStudioSearchLaptop,
  soundStudioUseLaptop,
  soundStudioUseDogLifePoochFriend,
  soundStudioSearchSoundFile,
  soundStudioUseSoundFile,
  soundStudioSearchLightingStand,
  soundStudioUseLightingStand,
  soundStudioSearchFloorButton,
  soundStudioUseFloorButton
};
