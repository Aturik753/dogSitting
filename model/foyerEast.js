function lookEastFoyer(){
    console.log ("You look east in the Foyer and see a doorway which leads to the Library")
    console.log ("Item list = Library")
    if (searchLibrary){
        console.log ("you are not in the Library. Would you like to enter?")
    } else if (enterLibrary){
        
    }

}

    //if they enter the library, I would like this to be a separate file.  
    //then there should be call functions here to run library?


    module.exports = {
        lookEastFoyer
    }