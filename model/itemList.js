



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
}
function getItemListAttic(){
    return itemListAttic
}
function addItemAttic(itemAttic){
    var existingItemAttic = itemListAttic.find(function(checkItemAttic){
        return checkItemAttic == itemAttic
    })
    if (existingItemAttic == null){
        itemListAttic.push(itemAttic)
        }
}

let itemListOffice = []

function clearItemListOffice(){
   itemListOffice = []
}
function getItemListOffice(){
    return itemListOffice
}
function addItemOffice(itemOffice){
    var existingItemOffice = itemListOffice.find(function(checkItemOffice){
        return checkItemOffice == itemOffice
    })
    if (existingItemOffice == null){
        itemListOffice.push(itemOffice)
        }
}


let itemListBookshelfRoom = []

function clearItemListBookshelfRoom(){
   itemListBookshelfRoom = []
}
function getItemListBookshelfRoom(){
    return itemListBookshelfRoom
}
function addItemBookshelfRoom(itemBookshelfRoom){
    var existingItemBookshelfRoom = itemListBookshelfRoom.find(function(checkItemBookshelfRoom){
        return checkItemBookshelfRoom == itemBookshelfRoom
    })
    if (existingItemBookshelfRoom == null){
        itemListBookshelfRoom.push(itemBookshelfRoom)
        }
}

let itemListPowderRoom = []

function clearItemListPowderRoom(){
   itemListPowderRoom = []
}
function getItemListPowderRoom(){
    return itemListPowderRoom
}
function addItemPowderRoom(itemPowderRoom){
    var existingItemPowderRoom = itemListPowderRoom.find(function(checkItemPowderRoom){
        return checkItemPowderRoom == itemPowderRoom
    })
    if (existingItemPowderRoom == null){
        itemListPowderRoom.push(itemPowderRoom)
        }
}

let itemListSoundStudio = []

function clearItemListSoundStudio(){
   itemListSoundStudio = []
}
function getItemListSoundStudio(){
    return itemListPowderRoom
}
function addItemSoundStudio(itemSoundStudio){
    var existingItemSoundStudio = itemListSoundStudio.find(function(checkItemSoundStudio){
        return checkItemSoundStudio == itemSoundStudio
    })
    if (existingItemSoundStudio == null){
        itemListSoundStudio.push(itemSoundStudio)
        }
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
    pocketList.push(pocket)
    console.log ("after room push", pocketList)
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
    clearItemListSoundStudio, 
    getItemListSoundStudio, 
    addItemSoundStudio,
}
