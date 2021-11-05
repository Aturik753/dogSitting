let {addItemDiningRoom, addRoom, addPocket} = require("../model/itemList");

function diningRoomEnter() {
    let message = "You have entered the dining room.\n";
    return message;
}
function diningRoomLookNorth() {
    let message = "You look to the north in the dining room.\n";
    message += "There is a large picture window looking out to the back yard.\n";
    message += "Below the window, you see a buffet table with centre drawers and doors on either side.\n";
    message += "On top of the buffet, you see some decorative trinkets which are all dogs.\n";
    return message;
}
function diningRoomLookEast() {
    let message = "To the east you see a doorway.\n";
    message += "Beside the doorway, you see a bar cart with crystal glasses.\n";
    message += "Item list = Doorway\n";
    addItemDiningRoom("Doorway");
    return message;
}
function diningRoomSearchDoorway() {
    let message = "You take a closer look at the doorway.\n";
    message += "As you look through you see the kitchen'\n";
    message += "You found a new room = Kitchen";
    addRoom("Kitchen");
    return message;
}
function diningRoomEnterKitchen() {
    let message = "You go through the doorway throught to the kitchen.\n";
    message += "Go to http://localhost:3000/Kitchen";
    return message;
}
function diningRoomLookSouth() {
    let message = "To the south you see a set of french doors.\n";
    message += "Item list = FrenchDoors";
    addItemDiningRoom("FrenchDoors");
    return message;
}
function diningRoomSearchFrenchDoors() {
    let message = "You see that the french doors lead to the Den.\n";
    message += "You found a new room = Den";
    addRoom("Den");
    return message;
}
function diningRoomEnterDen() {
    let message = "You go through the french doors and are now in the Den.\n";
    message += "Go to http://localhost:3000/Den";
    return message;
}function diningRoomLookWest() {
    let message = "Looking west in the dining room, you can see a large hutch.\n";
    message += "There seem to be a large amount of old dishes and crystal stemwear\n";
    message += "behind the glass doors.  The hutch itself looks like an antique as well.";
    return message;
}

//So far, there is nothing interesting in the dining room.  may want to add anyting to search.  
//right now, there is just looking and door to kitchen and french doors to den.

module.exports = {
    diningRoomEnter,
    diningRoomLookNorth,
    diningRoomLookEast,
    diningRoomSearchDoorway,
    diningRoomEnterKitchen,
    diningRoomLookSouth,
    diningRoomSearchFrenchDoors,
    diningRoomEnterDen,
    diningRoomLookWest
    
}