function foyerLookEast(){
    let message = ("You look East in the Foyer and see a Doorway\n")
    message += ("Item list = Doorway")
    return message 
}

function foyerEastDoorway(){
let message = ("you search the doorway and find it leads into the Library.\n")
 message += ("Would like to stay in the Foyer or enter the Library?\n")
 message += ("if you would like to continue searching the Foyer, please continue\n")
 message += ("If you would like to enter the Library, go to http://localhost:3000/Library\n")
 return message
}
   

    module.exports = {
        foyerLookEast,
        foyerEastDoorway
    }