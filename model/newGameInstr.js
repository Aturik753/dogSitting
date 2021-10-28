let puppyLocation

const puppyLocationRooms = ["Office", "BookshelfRoom", "Attic"]
//, "SoundStudio", "Kitchen", "WineRoom" - These are the next rooms to add once they are in the game.
function puppyLocationRandom() {
    puppyLocation= puppyLocationRooms[Math.floor(Math.random() * puppyLocationRooms.length)] 
}
function search (location) {
    if (location === puppyLocation){
        return "puppy found"
    }else {
        return "No Puppy"
    }
}


function newGame(){
    puppyLocationRandom()
    let message = ""
    message += "                 \n"
    message += "You have just moved to town and are dog sitting for a new client.  \n"
    message += "As you are out for a walk with puppy, \n"
    message += "there is a bright flash of lightening and a crash of thunder!  \n"
    message += "The puppy yelps and pulls the leash out of your grip.  \n"
    message += "The puppy runs into a nearby house where the front door was left open.  \n"
    message += "You run up to the home.  You call inside.  Ring the bell.  There is no answer.  \n"
    message += "You have to find puppy, so you step inside and call out.....PUPPY!!!  \n"
    message += "The frontdoor closes behind you and locks!!!\n"
    message += "If you would like to play, please start the game by going to http://localhost:3000/startGame"
    return message
}


function instructions(){
    let message = ""
    message += "INSTRUCTIONS!\n"
    message += "          \n"
    message += "Using the url http://localhost:3000/ you will add to the end in the following manner\n"
    message += "You may look in four directions in each room that you are in\n"
    message += "Simply type: /lookNorth, /lookSouth, /lookEast, /lookWest in the url after the room\n"
    message += "You will then get a list of what you initially see in that direction,\n"
    message += "and a list of items you may interact with will appear\n"
    message += "You may search items by typing /seachItem but replace Item with the actual item\n"
    message += "after the /room\n"
    message += "if you type '/searchFrontdoor' you will get more details about the Frontdoor\n"
    message += "You may use the command '/enterRoom' to move to a room listed\n"
    message += "Remember to replace the word 'Room' with the actual name of the Room\n"
    message += "You may type '/useItem', again replacing Item with the name of the item you have found\n"
    message += "To sum up, the main commands are look, search, enter, use\n"
    message += "To call for puppy to see if he is in the room you are in\n,"
    message += "go to localhost:3000/search?location=# replacing # with the room you are in like Foyer.\n"
    message += "Good luck!\n"
    message += "To continue, enter the Foyer at http://localhost:3000/Foyer\n"
    return message
}

module.exports = {
    newGame,
    instructions,
    puppyLocationRandom,
    search,
}
