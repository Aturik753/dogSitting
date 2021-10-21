function lookNorthFoyer(){
let message = ("you look north in the Foyer and you see a double Staircase.  You also see a Door to the right of the stairs\n")
 message += ("Item list = Staircase, Door")
 return message
// if (searchStaircase) {
//     console.log ("you ascend the staircase and find a LockedDoor") 
//     console.log ("Item list = LockedDoor")
//     if (searchLockedDoor){
//         console.log ("You see a keyhole")
//         console.log ("Item list = Keyhole")
//         //I do not yet have the key, so do not want to build in a key yet.  
//         //eventually useStaircaseKey will open this door
//         //how do i fix it so people can't try to enter door.  can I set up a response, can't do that?
//         if (searchKeyhole){
//             console.log ("You do not have a key")
//         }            }
// else if (searchDoor){
//     console.log ("You have found the Powderroom")
//     console.log ("Item list = Powderroom")
//     if(searchPowderroom){
//         console.log ("You find nothing interesting in the Powderroom")
//     }
// }
//}
}

module.exports = {
    lookNorthFoyer
}
