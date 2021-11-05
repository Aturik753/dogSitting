



let itemListFoyer = []

function clearItemListFoyer(){
   itemListFoyer = []
   console.log ("Clear Item list Foyer", itemListFoyer)
}
function getItemListFoyer(){
    console.log ("get item list Foyer", itemListFoyer)
    return itemListFoyer
}
function addItemFoyer(itemFoyer){
    var existingItemFoyer = itemListFoyer.find(function(checkItemFoyer){
        return checkItemFoyer == itemFoyer
    })
    console.log ("Looking for ", itemFoyer , "In " , itemListFoyer, "found in", existingItemFoyer)
    if (existingItemFoyer == null){
        itemListFoyer.push(itemFoyer)
        }
    console.log ("after push Item Foyer", itemListFoyer)
}


let itemListLibrary = []

function clearItemListLibrary(){
   itemListLibrary = []
   console.log ("Clear Item list Library", itemListLibrary)
}
function getItemListLibrary(){
    console.log ("get item list Library", itemListLibrary)
    return itemListLibrary
}
function addItemLibrary(itemLibrary){
    var existingItemLibrary = itemListLibrary.find(function(checkItemLibrary){
        return checkItemLibrary == itemLibrary
    })
    console.log ("Looking for ", itemLibrary , "In " , itemListLibrary, "found in", existingItemLibrary)
    if (existingItemLibrary == null){
        itemListLibrary.push(itemLibrary)
        }
    console.log ("after push Item Library", itemListLibrary)
}


let itemListAttic = []

function clearItemListAttic(){
   itemListAttic = []
   console.log ("Clear Item list Attic", itemListAttic)
}
function getItemListAttic(){
    console.log ("Get item list Attic", itemListAttic)
    return itemListAttic
    
}
function addItemAttic(itemAttic){
    var existingItemAttic = itemListAttic.find(function(checkItemAttic){
        return checkItemAttic == itemAttic
    })
    if (existingItemAttic == null){
        itemListAttic.push(itemAttic)
        }
        console.log ("after push Item Attic", itemListAttic)
}

let itemListOffice = []

function clearItemListOffice(){
   itemListOffice = []
   console.log ("Clear Item list Office", itemListOffice)
}
function getItemListOffice(){
    console.log ("Get item list Office", itemListOffice)
    return itemListOffice
}
function addItemOffice(itemOffice){
    var existingItemOffice = itemListOffice.find(function(checkItemOffice){
        return checkItemOffice == itemOffice  
    })
    if (existingItemOffice == null){
        itemListOffice.push(itemOffice)
        }
        console.log ("after push Item Office", itemListOffice)
}


let itemListBookshelfRoom = []

function clearItemListBookshelfRoom(){
   itemListBookshelfRoom = []
   console.log ("Clear Item list BookshelfRoom", itemListBookshelfRoom)
}
function getItemListBookshelfRoom(){
    console.log ("Get item list BookshelfRoom", itemListBookshelfRoom)
    return itemListBookshelfRoom
}
function addItemBookshelfRoom(itemBookshelfRoom){
    var existingItemBookshelfRoom = itemListBookshelfRoom.find(function(checkItemBookshelfRoom){
        return checkItemBookshelfRoom == itemBookshelfRoom
    })
    if (existingItemBookshelfRoom == null){
        itemListBookshelfRoom.push(itemBookshelfRoom)
        }
        console.log ("after push Item BookshelfRoom", itemListBookshelfRoom)
}

let itemListPowderRoom = []

function clearItemListPowderRoom(){
   itemListPowderRoom = []
   console.log ("Clear Item list PowderRoom", itemListPowderRoom)
}
function getItemListPowderRoom(){
    console.log ("Get item list PowderRoom", itemListPowderRoom)
    return itemListPowderRoom
}
function addItemPowderRoom(itemPowderRoom){
    var existingItemPowderRoom = itemListPowderRoom.find(function(checkItemPowderRoom){
        return checkItemPowderRoom == itemPowderRoom
    })
    if (existingItemPowderRoom == null){
        itemListPowderRoom.push(itemPowderRoom)
        }
        console.log ("after push Item PowderRoom", itemListPowderRoom)
}

let itemListSoundStudio = []

function clearItemListSoundStudio(){
   itemListSoundStudio = []
   console.log ("Clear Item list SoundStudio", itemListSoundStudio)
}
function getItemListSoundStudio(){
    console.log ("Get item list SoundStudio", itemListSoundStudio)
    return itemListPowderRoom
}
function addItemSoundStudio(itemSoundStudio){
    var existingItemSoundStudio = itemListSoundStudio.find(function(checkItemSoundStudio){
        return checkItemSoundStudio == itemSoundStudio
    })
    if (existingItemSoundStudio == null){
        itemListSoundStudio.push(itemSoundStudio)
        }
        console.log ("after push Item SoundStudio", itemListSoundStudio)
}

let itemListKitchen = []

function clearItemListKitchen(){
   itemListKitchen = []
   console.log ("Clear Item list Kitchen", itemListKitchen)
}
function getItemListKitchen(){
    console.log ("Get item list Kitchen", itemListKitchen)
    return itemListKitchen
}
function addItemKitchen(itemKitchen){
    var existingItemKitchen = itemListKitchen.find(function(checkItemKitchen){
        return checkItemKitchen == itemKitchen
    })
    if (existingItemKitchen == null){
        itemListKitchen.push(itemKitchen)
        }
        console.log ("after push Item Kitchen", itemListKitchen)
}

let itemListDeck = []

function clearItemListDeck(){
   itemListDeck = []
   console.log ("Clear Item list Deck", itemListDeck)
}
function getItemListDeck(){
    console.log ("Get item list Deck", itemListDeck)
    return itemListDeck
}
function addItemDeck(itemDeck){
    var existingItemDeck = itemListDeck.find(function(checkItemDeck){
        return checkItemDeck == itemDeck
    })
    if (existingItemDeck == null){
        itemListDeck.push(itemDeck)
        }
        console.log ("after push Item Deck", itemListDeck)
}


let itemListWineRoom = []

function clearItemListWineRoom(){
   itemListWineRoom = []
   console.log ("Clear Item list WineRoom", itemListWineRoom)
}
function getItemListWineRoom(){
    console.log ("Get item list WineRoom", WineRoom)
    return itemListWineRoom
}
function addItemWineRoom(itemWineRoom){
    var existingItemWineRoom = itemListWineRoom.find(function(checkItemWineRoom){
        return checkItemWineRoom == itemWineRoom
    })
    if (existingItemWineRoom == null){
        itemListWineRoom.push(itemWineRoom)
        }
        console.log ("after push Item WineRoom", itemListWineRoom)
}


let itemListDiningRoom = []

function clearItemListDiningRoom(){
   itemListDiningRoom = []
   console.log ("Clear Item list DiningRoom", itemListDiningRoom)
}
function getItemListDiningRoom(){
    console.log ("Get item list DiningRoom", DiningRoom)
    return itemListDiningRoom
}
function addItemDiningRoom(itemDiningRoom){
    var existingItemDiningRoom = itemListDiningRoom.find(function(checkItemDiningRoom){
        return checkItemDiningRoom == itemDiningRoom
    })
    if (existingItemDiningRoom == null){
        itemListDiningRoom.push(itemDiningRoom)
        }
        console.log ("after push Item DiningRoom", itemListDiningRoom)
}


let itemListDen = []

function clearItemListDen(){
   itemListDen = []
   console.log ("Clear Item list Den", itemListDen)
}
function getItemListDen(){
    console.log ("Get item list Den", Den)
    return itemListDen
}
function addItemDen(itemDen){
    var existingItemDen = itemListDen.find(function(checkItemDen){
        return checkItemDen == itemDen
    })
    if (existingItemDen == null){
        itemListDen.push(itemDen)
        }
        console.log ("after push Item Den", itemListDen)
}



let roomList = []

function clearRoomList(){
   roomList = []
   console.log ("Clear Room list", roomList)
}
function getRoomList(){
    console.log ("get room list", roomList)
    return roomList
}
function addRoom(room){
    var existingRoom = roomList.find(function(checkRoom){
        return checkRoom == room
    })
    if (existingRoom == null) {
        roomList.push(room)
        }
    console.log ("after room push", roomList)
}

let pocketList = []

function clearPocketList(){
   pocketList = []
   console.log ("Clear pocket list", pocketList)
}
function getPocketList(){
    console.log ("get room list", pocketList)
    return pocketList
}
function addPocket(pocket){
    var existingPocket = pocketList.find(function(checkpocket){
        return checkpocket == pocket
    })
    if (existingPocket == null) {
        pocketList.push(pocket)
        }
    console.log ("after pocket push", pocketList)
}

module.exports = {
    clearRoomList, 
    getRoomList, 
    addRoom, 
    clearPocketList, 
    getPocketList, 
    addPocket,
    clearItemListFoyer, 
    getItemListFoyer, 
    addItemFoyer,
    clearItemListLibrary, 
    getItemListLibrary, 
    addItemLibrary,
    clearItemListOffice, 
    getItemListOffice, 
    addItemOffice,
    clearItemListAttic, 
    getItemListAttic, 
    addItemAttic,
    clearItemListBookshelfRoom, 
    getItemListBookshelfRoom, 
    addItemBookshelfRoom,
    clearItemListPowderRoom, 
    getItemListPowderRoom, 
    addItemPowderRoom,
    clearItemListKitchen, 
    getItemListKitchen, 
    addItemKitchen,
    clearItemListSoundStudio, 
    getItemListSoundStudio, 
    addItemSoundStudio,
    clearItemListDeck, 
    getItemListDeck, 
    addItemDeck,
    clearItemListWineRoom, 
    getItemListWineRoom, 
    addItemWineRoom,
    clearItemListDiningRoom, 
    getItemListDiningRoom, 
    addItemDiningRoom,
    clearItemListDen, 
    getItemListDen, 
    addItemDen
}
