let  {lookNorthFoyer} = require ('./foyerNorth')
let  {lookEastFoyer} = require ('./foyerEast')
let  {lookSouthFoyer} = require ('./foyerSouth')
let  {lookWestFoyer} = require ('./foyerWest')


//I dont think this is set up correct.  I have left the entire FoyerNorth code in here

//Change other files to start with look....and change inport/exort
// I need to call new game and instruction functions

 



function foyer(lookNorth, lookEast, lookSouth, lookWest){
    let message  = ("Where would you like to look?")
    return message
    if (lookNorth){
        (lookNorthFoyer).foyerNorth
        }   
    else if (lookEast){
        foyer(lookEast).foyerEast
        }       
    else if (lookSouth){
        foyer(lookSouth).foyerSouth
        }
    else {
        foyer(lookWest).foyerWest
    }
} 

    
   
