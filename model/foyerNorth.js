function foyerLookNorth(){
let message = ("you look north in the Foyer and you see a double Staircase./n")
 message += ("  You also see a Door to the right of the stairs\n")
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

function foyerNorthStaircaseUseStaricaseKey(){
    let message = ("What message am I putting in here, story about the hallway")
    //Need to decide on the message to place here.  
    //Maybe I number the key so you cant cheat.  each key has a code?
    return message
}

function foyerNorthSearchDoor(){
    let message = ("You have found the Powderroom\n")
    message += ("Item list = Powderroom")
    return message
}

function foyerNorthSearchPowderroom(){
    let message = ("You find nothing interesting in the Powderroom")
    return message
}



module.exports = {
    foyerLookNorth,
    foyerNorthSearchStaircase,
    foyerNorthSearchLockedDoor,
    foyerNorthSearchKeyhole,
    foyerNorthStaircaseUseStaricaseKey,
    foyerNorthSearchDoor,
    foyerNorthSearchPowderroom
}