let {addItemDen, addRoom, addPocket} = require("../model/itemList");

function denEnter() {
    let message = "You have entered a magnificent Den.\n";
    message += "At first glance, you are impressed by the chairs, couch and \n";
    message += "large bear skin rug in the centre of the room.\n";
    message += "Item list = BearRug";
    addItemDen("BearRug");
    return message;
}
function denSearchBearRug() {
    let message = "You take a closer look at the bear skin rug.\n";
    message += "It really is huge and beautiful.\n";
    message += "You want to touch it, so you get down on your hands and knees\n";
    message += "to crawl onto it so you don't get it dirty.\n";
    message += "Wow, it's soft.  you wonder what the claws and teeth are like.\n";
    message += "Item list = Claws, Teeth"
    addItemDen("Claws");
    addItemDen("Teeth");
    return message;
}
function denSearchClaws(){
    let message = "As you are down on the floor, you take a closer look at the claws.\n";
    message += "Wow, these are huge claws.  You try to lift them to see closer but discover\n";
    message += "that the rug is afixed to the floor.  Strange.  \n";
    return message;
}
function denSearchTeeth() {  
    let message = "As you move towards the head, you hear a thunk.\n";  
    message += "Well that's strange.  The floor beneith the rug seems hollow.\n";
    message += "You knock on the floor beside the rug - bang, bang.\n";
    message += "You knock on the rug - thunk, thunk.\n"; 
    message += "You wonder if there is something under the floor.\n";
    message += "Now that you can see the teeth, you are shocked by their size.\n";
    message += "Could you even imagine being face to face whith this bear?\n";
    message += "These teeth are so large.....wait a second.  What is that?\n";
    message += "You see something inside the bears mouth. It's a latch!\n";
    message += "It is really well hidden, but up close you can see it.\n";
    message += "Item list - Latch\n";
    addItemDen("Latch");
    return message;
}
function denSearchLatch() {
    let message = "You take a look inside the bear's mouth.\n";
    message += "There really is a latch there.\n";
    message += "but a little intimidating, as you would have to reach between the teeth\n";
    return message;
}
function denUseLatch() {
    let message = "You reach in and pull on the latch.\n";
    message += "You hear a click and the rug begins to move.\n";
    message += "You pull your hand away quickly, and a trap door opens.\n";
    message += "Item list = TrapDoor";
    addItemDen("TrapDoor");
    return message;
}
function denSearchTrapDoor() {
    let message = "Once the rug and door stop moving,\n";
    message += "you see a large opening with a ladder descending.\n";
    message += "you stick your head down into the hole a bit and see a dark room.\n";
    message += "You found a room = Cellar";
    addRoom("Cellar");
    return message;
}
function denEnterCellar() {
    let message = "You descend the stairs to the cellar.\n";
    message += "Go to http://localhost:3000/Cellar"
    return message;
}
function denLookNorth() {
    let message = "As you glance to the north, you see some oil paintings and french doors.\n";
    message += "The paintings are of men and women who all have a resemblance to one another \n";
    message += "and they are all holding a dog which looks a lot like puppy!\n";
    message += "Item list = FrenchDoors";
    addItemDen("FrenchDoors");
    return message;
}
function denSearchFrenchDoors() {
    let message = "You approach the french doors to take a closer look.\n";
    message += "They lead into the dining room.\n";
    message += "You found a room = DiningRoom\n";
    addRoom("DiningRoom") 
    return message;
}
function denEnterDiningRoom() {
    let message = "You approach the french doors to take a closer look.\n";
    message += "They lead into the dining room.\n";
    message += "You found a room = DiningRoom\n";
    addRoom("DiningRoom") 
    return message;
}
function denLookEast() {
    let message = "To the West, you see an archway.\n";
    message += "Item list = Archway";
    addItemDen("Archway");
    return message;
}
function denSearchArchway() {
    let message = "Aproaching the archway, you can see that it leads to the foyer.\n";
    message += "You found a room = Foyer";
    addRoom("Foyer");
    return message;
}
function denEnterFoyer() {
    let message = "You are now in the Foyer.\n";
    message += "Go to http://localhost:3000/Foyer";
    return message;
}
function denLookSouth() {
    let message = "When you look South, you can see the front yard and street\n";
    message += "through the large front windows";
    return message;
}
function denLookWest() {
    let message = "To the west, you see a grand fireplace with a large mantle.\n";
    message += "There is a grand painting of....puppy?  hanging over the hearth";
    return message;
}
function CellarEnter() {
    let message = "You have gotten to the bottom of the ladder from the Den.\n";
    message += "You are in the cellar.\n";
    message += "This area is under construction, please return to the Den.\n";
    return message;
}






module.exports = {
    denEnter,
    denSearchBearRug,
    denSearchClaws,
    denSearchTeeth,
    denSearchLatch,
    denUseLatch,
    denSearchTrapDoor,
    denEnterCellar,
    denLookNorth,
    denSearchFrenchDoors,
    denEnterDiningRoom,
    denLookEast,
    denSearchArchway,
    denEnterFoyer,
    denLookSouth,
    denLookWest,
    CellarEnter
}



