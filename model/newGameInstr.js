function newGame(){
    let message = ""
    message += "You have just moved to town and are dog sitting for a new client.  \n"
    message += "As you are out for a walk with puppy, \n"
    message += "there is a bright flash of lightening and a crash of thunder!  \n"
    message += "The puppy yelps and pulls the leash out of your grip.  \n"
    message += "The puppy runs into a nearby house where the front door was left open.  \n"
    message += "You run up to the home, call inside, ring the bell, but there is no answer.  \n"
    message += "You have to find puppy, so you step inside and call out.....PUPPY!!!  \n"
    message += "The Frontdoor closes behind you and locks!"
    return message
}
function instructions(){
    let message = ""
    message += "Instructions!\n"
    message += "You may look in four directions in each room you are in\n"
    message += "Simply type the following commands: lookNorth, lookSouth, lookEast, lookWest\n"
    message += "You will then get a list of what you initially see in that direction\n"
    message += "A list of items yous may interact with will appear\n"
    message += "You may search items by typing seachItem but replace Item with the actual item\n"
    message += "if you type 'searchFrontdoor' you will get more details about the Frontdoor\n"
    message += "You may use the command 'enterRoom' to move to a room listed\n"
    message += "Remember to replace the word 'room' with the actual name of the room\n"
    message += "You may type 'useItem', again replacing Item with the name of the item you have found\n"
    message += "To sum up, the main commands are look, search, enter, use\n"
    message += "Good luck!"
    return message
}


module.exports = {
    newGame,
    instructions
}
