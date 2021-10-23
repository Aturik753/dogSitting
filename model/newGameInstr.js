function newGame(){
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
    message += "Good luck!\n"
    message += "To continue, enter the Foyer at http://localhost:3000/Foyer"
    return message
}

module.exports = {
    newGame,
    instructions
}
