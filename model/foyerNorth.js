function foyerLookNorth(){
let message = ("you look north in the Foyer and you see a double Staircase.\n")
 message += ("You also see a Door to the right of the stairs\n")
 message += ("Item list = Staircase, Door")
 return message
}
function foyerNorthSearchStaircase(){
let message = ("you ascend the staircase and find a LockedDoor.\n") 
 message += ("Item list = LockedDoor\n")
 return message
}
function foyerNorthSearchLockedDoor(){
let message = ("You see a keyhole\n")
 message +=("Item list = Keyhole")
 return message
}
function foyerNorthSearchKeyhole(){
    let message = ("Do you have a key?")
    return message
}
function foyerNorthStaircaseUseKey64(){
    let message = ("You have found the key to open this door.\n")
    message += ("The door is now unlocked.\n")
    message += ("Would you like to open the door and enter?\n")
    message += ("If you would like to go through the staircase door, go to http://localhost:3000/Hallway")
    return message
}
function foyerNorthSearchDoor(){
    let message = ("You have found the Powderroom\n")
    message += ("Item list = Powderroom")
    return message
}
function foyerNorthSearchPowderroom(){
    let message = ("You find nothing interesting in the Powderroom, but notice smudges on the mirror.\n")
    message += ("Item list = Mirror")
    return message
}
function foyerNorthSearchMirror(){
    let message = ("You take a closer look at the smudges on the mirror\n")
    message += ("but you are unable to make any sense of it.\n")
    message += ("You wonder if there is anything that could help you see it better")
    return message
}
function foyerNorthUseFlashlight(){
    let message = ("You take out the strange flashlight you found in the Library.\n")
    message += ("You turn it on and notice your white shoes are illuminated but not your pants!\n")
    message += ("As you point it towards the mirror, you begin to make out a message......\n")
    message += ("'TO ALL THAT ENTER, BEWARE THE BEAR!'")
    return message
}


module.exports = {
    foyerLookNorth,
    foyerNorthSearchStaircase,
    foyerNorthSearchLockedDoor,
    foyerNorthSearchKeyhole,
    foyerNorthStaircaseUseKey64,
    foyerNorthSearchDoor,
    foyerNorthSearchPowderroom,
    foyerNorthSearchMirror,
    foyerNorthUseFlashlight
}