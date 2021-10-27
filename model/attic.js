function enterBookshelfRoom(){
    let message = ("You slowly move the bookshelf door farther to try and let more light in.\n")
    message += ("You still can't see anything beyond the doorway.\n")
    message += ("You take a deep breath and step inside.  You listen and hear nothing.\n")
    message += ("The door swings shut behind you!")
    return message
}
function searchBookshelfRoom(){
    let message = ("As you take a step deeper, you triger a motion sensor and a mild light turns on.\n")
    message += ("You are in a small room with bare stone walls in every direction.\n")
    message += ("To the south, you see an outline of a door in the rocks with a lever.\n")
    message += ("To the west, you see an outline of a door in the rocks with no way to open it\n")
    message += ("To the north, you see a set of spiral stairs ascending.\n")
    Message += ("Item list = Lever, SpiralStairs")
    return message
}
function bookshelfRoomSearchLever(){
    let message = ("You take a closer look at the lever on the south wall of the room.\n")
    message += ("As you pull the lever down, the door swings open.\n")
    message += ("This is a secret entrance to the Library.\n")
    message += ("Please go to http://localhost:3000/Library\n")
    return message
}
function bookshelfRoomSearchSpiralStairs(){
    let message = ("You look at the spiral stairs and decide to go up and take a look.\n")
    message += ("At the top of the stairs, you find a room full of storage.\n")
    message += ("You found a new room! = Attic.\n")
    message += ("Please go to http://localhost:3000/Attic to continue in this room.")
    return message
}

//above this line have already been added to routes.  need to add below this point
function attic(){
    let message = ("You are now in the Attic.\n")
    return message
}
function atticSearchNorth(){
    let message = ("You look north and see at the spiral stairs decending.\n")
    return message
}
function atticSearchEast(){
    let message = ("You look east and see boxes full of old toys and clothing.\n")
    return message
}
function atticSearchWest(){
    let message = ("You look west and see boxes full of various decoration.\n")
    message += ("You see items from Christmas, Halloween and even Easter.")
    return message
}
function atticSearchSouth(){
    let message = ("You look south and see a large dusty mirror and your reflection.\n")
    message += ("To your left you see a large gumball machine.\n")
    message += ("Item list = GumballMachine")
    return message
}
function atticSearchGumballMachine(){
    let message = ("The gumball machine looks old but well looked after.\n")
    message += ("There doesn't appear to be as much dust on it as most of the other items")
    return message
}
function atticUseCoin(){
    let message = ("You pull a few coins out of your pocket.\n")
    message += ("You try everything you have.  Toonie, Loonie, quarter, dime and nickel.\n")
    message += ("Nothing seem to happen, other than you have lost some money and have a few gumballs!\n")
    message += ("Oh, remember the coin you found in the hole behind the loose brink in the Library?\n")
    message += ("You wonder if anything would happen if you use it in the gumball machine!\n")
    message += ("You drop the strange coin into the machine, turn the crank, and no gum......\n")
    message += ("You hear some gears and cranks turning somewhere, and the mirror swings open!\n")
    message += ("You found something new = SecretDoor!\n")
    return message
}
function atticSearchSecretDoor (){
    let message = ("You look through the opening that was consealed by the mirror in the attic.\n")
    message += ("You see a thin hallway that takes an L off to the left\n")
    message += ("You go down the hall and look to the left, and see what looks like sound equipment!\n")
    message += ("You have found a new room = SoundStudio")
    return message
}
function atticEnterSoundStudio(){
    let message = ("Please go to http://localhost:3000/SoundStudio\n")
    return message
    }
//next need to use coin to swing open the mirror to make an opening into the sound studio

module.exports ={
    enterBookshelfRoom,
    searchBookshelfRoom,
    bookshelfRoomSearchLever,
    bookshelfRoomSearchSpiralStairs,//entered router on first 4 up to here.
    attic,
    atticSearchNorth,
    atticSearchEast,
    atticSearchWest,
    atticSearchSouth,
    atticSearchGumballMachine,
    atticUseCoin,
    atticSearchSecretDoor,
    atticEnterSoundStudio
}