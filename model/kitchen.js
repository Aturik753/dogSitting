let {addItemKitchen, addItemWineRoom, addRoom, addPocket} = require("../model/itemList");


function kitchenEnter() {
    let message = "You have entered the kitchen.\n";
    message += "Wow!, what a nice kitchen.  everything is top of the line.\n";
    message += "You would love to have the opportunity to have such an incredible kitchen.";
    return message;
}
function kitchenLookNorth() {
    let message = "You look north in the kitchen and see a large window\n";
    message += "with a view of the backyard.  Again you can see the doghouse and garden.\n";
    message += "Below the window is a large farmhouse style double sink.\n";
    message += "To the left of the sink there is a fancy coffee maker.\n";
    message += "To the right of the sink, you see a few canisters labeled\n";
    message += "flour, sugar, pasta and cookies.\n";
    message += "mmmm, cookies are always good.\n";
    message += "Item list = CookieJar";
    addItemKitchen ("cookieJar");
    return message;
}
function kitchenSearchCookieJar() {
    let message = "hm, you are pretty hungry.  Maybe a cookie would be nice?\n";
    message += "You lift the lid off of the cookie jar and reach inside.\n";
    message += "You take a bite.\n";
    message += "Oh gross......that is the worst cookie ever.  Wait a minute.....\n";
    message += "You grab the cookie jar to take a closer look.\n";
    message += "Yuck, it say's Dog Cookies.  As you are putting the jar away,\n";
    message += "you notice that there was a key under the jar.  It looks like there is writing on it.\n";
    message += "Upon closer inspection, you see the number 64 on it.\n";
    message += "Item list = Key64";
    addPocket ("Key64");
    return message;
}
function kitchenSearchKey64() {
    let message = "You can clearly see that the key is labeled 64, but don't know what it is for.";
    return message;
}
function kitchenUseKey64() {
    let message = "It doesn't look like you can use this key here.";
    return message;
}
function kitchenlookEast() {
    let message = "Standing in the kitchen and looking east,\n";
    message += "you see a swinging door with a small circular window at the top.\n";
    message += "Item list = Swinging Door";
    addItemKitchen ("SwingingDoor");
    return message;
}
function KitchenSearchSwingingDoor() {
    let message = "You approach the swinging door and peek through the little window.\n";
    message += "From what you can see, it looks like an office on the other side of the door.\n";
    message += "You found a new room! = Office";
    addRoom ("Office");
    return message; 
}
function kitchenEnterOffice() {
    let message = "You step through the swinging door and are now in the office.\n";
    message += "Go to http://localhost:3000/Office";
    return message;
}
function kitchenLookSouth() {
    let message = "To the south, you see a large counter which looks like it is used for prep work.\n";
    message += "You can see a variety of cutting boards, knives and other kitchen tools.\n";
    message += "There is a can opener left on the counter.\n";
    message += "To the left of the counter and see an empty can of dog food in the garbage.\n";
    message += "You glance over to the right and see a door hidden in the cabinet.\n";
    message += "Item list = CabinetDoor";
    addItemKitchen ("CabinetDoor");
    return message;
}
function kitchenSearchCabinetDoor() {
    let message = "You move closer to the cabinet and confirm that there is in fact a door there.\n";
    message += "You start looking for a door knob and can't see one.\n";
    message += "However, you do find a keyhole!\n";
    message += "Item list = Keyhole";
    addItemKitchen ("Keyhole");
    return message;
}
function kitchenSearchKeyhole() {
    let message = "You look at the keyhole, it looks like it will take a key."
    return message;
}
function kitchenUseKey(){
    let message = "What key would you like to use?";
    return message;
}
function kitchenUseKey835() {
    let message = "You try the key labeled 835.\n";
    message += "The key turns and you hear a click.\n";
    message += "You can see that the edge of the cabinet has popped open.\n";
    message += "You grab the edge with your finger tips and pull it all the way open.\n";
    message += "You take a peek inside and see what you think may be a wine room!\n";
    message += "You found a new room = WineRoom";
    addRoom ("WineRoom");
    return message;
}
function kitchenEnterWineRoom() {
    let message = "You step inside and find that this is indeed a wine room.\n";
    message += "Go to http://localhost:3000/WineRoom.";
    return message;
}
function kitchenLookWest() {
    let message = "Looking to the west, you see both a doorway and a door.\n";
    message += "Item list = Doorway, Door";
    addItemKitchen ("Doorway");
    addItemKitchen ("Door");
    return message;
}
function kitchenSearchDoorway() {
    let message = "You look through the doorway and see the dining room.\n";
    message += "You found a new room! = DiningRoom";
    addRoom ("DiningRoom");
    return message;
}
function kitchenEnterDiningRoom() {
    let message = "You have stepped through the doorway into the Dining Room.\n"
    message += "Go to http://localhost:3000/DiningRoom";
    return message;
}
function kitchenSearchDoor() {
    let message = "You take a look out of the glass door and see that it leads to the back deck.\n";
    message += "You found a new room! = Deck";
    addRoom ("Deck");
    return message;
}
function kitchenEnterDeck() {
    let message = "You open the door and take a step out onto the deck.\n";
    message += "Go to http://localhost:3000/Deck";
    return message;
}
function deckEnter() {
    let message = "This area is under construction.  Please return to the Kitchen.";
    return message;
}
function wineRoomEnter() {
    let message = "You find yourself in the wine room.\n";
    return message;
}
function wineRoomLookNorth() {
    let message = "To the north, you see the entrance you just came through from the kitchen.";
    return message;
}
function wineRoomLookEast() {
    let message = "To the east, you see two racks of wine.\n";
    message += "This wall seems to house all of the white wine.\n";
    message += "That's strange, there is a red bottle in this rack.\n";
    message += "Item list = RedWine";
    addItemWineRoom("RedWine");
    return message;
}
function wineRoomLookSouth() {
    let message = "To the south, you see one large rack.\n";
    message += "This rack seems to hold a mix of bottles, including champagne and ice wine.\n";
    message += "There are some expensive bottles of wine here.";
    return message;
}
function wineRoomLookWest() {
    let message = "On the west side of the room, there is a large rack of red wine.\n";
    return message;
}
function wineRoomSearchRedWine() {
    let message = "You look closer at the bottle of red sitting in the white wine racks.\n";
    message += "There doesn't seem to be anything that strange about it.\n";
    message += "You think about leaving the wine room, but that red in the wrong spot is killing you.\n";
    message += "You decide to pick it up and move it to the side with the red wine.\n";
    message += "The bottle seems stuck.  You give it a good pull and you hear a loud click.\n";
    message += "Oh no, did I break the bottle?  No. oh my.  A secret door behind one of the racks.\n";
    message += "Item list = SecretWineDoor";
    addItemWineRoom("SecretWineDoor");
    return message;
}
function wineRoomSearchSecretWineDoor() {
    let message = "You take a look at the doorway, it leads somewhere dark and you can't see.\n"
    return message;
}
function wineRoomEnterSecretWineDoor() {
    let message = "You step inside.\n";
    message += "You have found a new room = BookshelfRoom.\n";
    message += "Please go to http://localhost:3000/BookshelfRoom\n";
    addRoom("BookshelfRoom")
    return message;
}




module.exports = {
kitchenEnter,
kitchenLookNorth,
kitchenSearchCookieJar,
kitchenSearchKey64,
kitchenUseKey64,
kitchenlookEast,
KitchenSearchSwingingDoor,
kitchenEnterOffice,
kitchenLookSouth,
kitchenSearchCabinetDoor,
kitchenSearchKeyhole,
kitchenUseKey,
kitchenUseKey835,
kitchenEnterWineRoom,
kitchenLookWest,
kitchenSearchDoorway,
kitchenEnterDiningRoom,
kitchenSearchDoor,
kitchenEnterDeck,
deckEnter,
wineRoomEnter,
wineRoomLookNorth,
wineRoomLookEast,
wineRoomLookSouth,
wineRoomLookWest,
wineRoomSearchRedWine,
wineRoomSearchSecretWineDoor,
wineRoomEnterSecretWineDoor
}


// I have already introduced the DiningRoom and Deck. These have also been added to puppy location random.
//Need to build Dining Room and make Den.  I made an endpoint for Deck = Under construction-go back to kitchen.  can expand later if have time.
//the Deck function for "deckEnter" is in this file
//Dont forget to add Archway to FoyerWest to have that enterance made.