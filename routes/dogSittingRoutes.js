const dogSitting = require("../model/dogSitting");
const express = require("express");
const router = express.Router();

let {getRoomList, 
    getPocketList,
    getItemListFoyer,
    getItemListLibrary,
    getItemListOffice,
    getItemListAttic,
    getItemListBookshelfRoom,
    getItemListPowderRoom,
    getItemListSoundStudio} = require("../model/itemList");
let {newGame,
    instructions, 
    startInstructions,
    search} = require("../model/newGameInstr"); 
let {foyerLookNorth,
    foyerNorthSearchStaircase,
    foyerNorthSearchLockedDoor,
    foyerNorthSearchKeyhole,
    foyerNorthStaircaseUseKey64,
    foyerNorthStaircaseUseKey835,
    foyerNorthStaircaseUseKey,
    foyerNorthSearchDoor,
    foyerNorthSearchPowderroom,
    foyerNorthSearchMirror,
    foyerNorthUseFlashlight,
    foyerLookEast,
    foyerEastDoorway,
    foyerEastEnterLibrary,
    foyerLookSouth,
    foyerSouthSearchFrontdoor,
    foyerLookWest} = require("../model/foyer");
let {libraryEnter,
  libraryLookNorth,
  libraryNorthSearchBookshelves,
  libraryNorthSearchDoor,
  libraryNorthEnterOffice,
  libraryLookEast,
  libraryEastSearchFireplace,
  libraryEastSearchBrick,
  libraryEastSearchHole,
  libraryEastSearchCoin,
  libraryEastUseCoin,
  libraryEastSearchArmchair,
  libraryEastSearchLamp,
  libraryEastSearchFlashlight,
  libraryEastUseFlashlight,
  libraryLookSouth,
  librarySouthSearchDesk,
  librarySouthSearchDrawers,
  librarySouthSearchPaper,
  libraryLookWest,
  libraryNorthSearchHarryPotter,
  libraryNorthSearchMacbeth,
  libraryNorthSearcDictionary,
  libraryNorthSearchJSForDummies,
  libraryNorthSearchKeypad,
  libraryNorthUseKeypad,
  UseKeypadCode,
  libraryNorthEnterBookshelfRoom} = require("../model/library");
let {
  officeEnter,
  officeLookNorth,
  officeSearchBookshelf,
  officeSearchWornBook,
  officeUseKey835,
  officeUseKey64,
  officeSearchPhone,
  officeSearchPencil,
  officeSearchPad,
  officeUsePencil,
  officeLookEast,
  officeSearchComputer,
  officeUse373,
  officeLookSouth,
  officeSearchFilingCabinet,
  officeUseDogLifePoochFriend,
  officelookWest,
  officeSearchSwingingDoor,
  officeEnterKitchen,
  officeSearchFile} = require("../model/office");
let {enterBookshelfRoom,
  searchBookshelfRoomNorth,
  searchBookshelfRoomEast,
  searchBookshelfRoomSouth,
  searchBookshelfRoomWest,
  bookshelfRoomSearchLever,
  bookshelfRoomSearchSpiralStairs,
  attic,
  atticSearchNorth,
  atticSearchEast,
  atticSearchWest,
  atticSearchSouth,
  atticSearchGumballMachine,
  atticUseCoin,
  atticSearchSecretDoor,
  atticEnterSecretRoomAttic,
  SecretRoomAttic,
  secretRoomLookNorth,
  secretRoomLookSouth,
  secretRoomLookWest,
  secretRoomLookEast,
  secretRoomEnterSoundStudio,
  soundStudio,
  soundStudioLookNorth,
  soundStudioLookEast,
  soundStudioLookSouth,
  soundStudioLookWest,
  soundStudioSearchMicrophone,
  soundStudioUseMicrophone,
  soundStudioSearchLaptop,
  soundStudioUseLaptop,
  soundStudioUseDogLifePoochFriend,
  soundStudioSearchSoundFile,
  soundStudioUseSoundFile,
  soundStudioSearchLightingStand,
  soundStudioUseLightingStand,
  soundStudioSearchFloorButton,
  soundStudioUseFloorButton} = require("../model/attic");

router.get("/PUPPY", (req, res) => {
  let location = req.query.location;
  //search function
  let message = search(location);
  res.send(message);
});
router.get("/Foyer/itemList" , (req,res) => {
    let message = getItemListFoyer()
    res.send(message)
});
router.get("/Library/itemList" , (req,res) => {
  let message = getItemListLibrary()
  res.send(message)
});
router.get("/Office/itemList" , (req,res) => {
  let message = getItemListOffice()
  res.send(message)
});
router.get("/Attic/itemList" , (req,res) => {
  let message = getItemListAttic()
  res.send(message)
});
router.get("/BookshelfRoom/itemList" , (req,res) => {
  let message = getItemListBookshelfRoom()
  res.send(message)
});
router.get("/Powderroom/itemList" , (req,res) => {
  let message = getItemListPowderRoom()
  res.send(message)
});
router.get("/SoundStudio/itemList" , (req,res) => {
  let message = getItemListSoundStudio()
  res.send(message)
});




router.get("/roomList" , (req,res) => {
    let message = getRoomList()
    res.send(message)
});
router.get("/pocketList" , (req,res) => {
  let message = getPocketList()
  res.send(message)
});
router.get("", async (req, res) => {
  let message = newGame();
  res.send(message);
});
router.get("/startGame" , async (req, res) => {
  let message = startInstructions();
  res.send(message);
});
router.get("/instructions" , async (req, res) => {
  let message = instructions();
  res.send(message);
});
router.get("/Foyer", (req, res) => {
  let message = "";
  message += "As the Front door closes behind you, you realize you are in the Foyer.  Where would you like to look?\n";
  message += "/Foyer/lookNorth, /Foyer/lookEast, Foyer/lookSouth, Foyer/lookWest\n";
  message += "After http://localhost:3000 /'Room'/'your command or what you want to do'";
  res.send(message);
});
router.get("/Foyer/lookNorth", (req, res) => {
  let message = foyerLookNorth();
  res.send(message);
});
router.get("/Foyer/searchStaircase", (req, res) => {
  let message = foyerNorthSearchStaircase();
  res.send(message);
});
router.get("/Foyer/searchLockedDoor", (req, res) => {
  let message = foyerNorthSearchLockedDoor();
  res.send(message);
});
router.get("/Foyer/searchKeyhole", (req, res) => {
  let message = foyerNorthSearchKeyhole();
  res.send(message);
});
router.get("/Foyer/useKey835", (req, res) => {
  let message = foyerNorthStaircaseUseKey835();
  res.send(message);
});
router.get("/Foyer/useKey64", (req, res) => {
  let message = foyerNorthStaircaseUseKey64();
  res.send(message);
});
router.get("/Foyer/useKey", (req, res) => {
  let message = foyerNorthStaircaseUseKey();
  res.send(message);
});
router.get("/Foyer/searchDoor", (req, res) => {
  let message = foyerNorthSearchDoor();
  res.send(message);
});
router.get("/Foyer/enterPowderroom", (req, res) => {
  let message = "You are in the Powderroom.  Go to :3000/Powderroom";
  res.send(message);
});
router.get("/Powderroom/lookNorth", (req, res) => {
  let message = foyerNorthSearchPowderroom();
  res.send(message);
});
router.get("/Powderroom/lookSouth", (req, res) => {
  let message = foyerNorthSearchPowderroom();
  res.send(message);
});
router.get("/Powderroom/lookEast", (req, res) => {
  let message = foyerNorthSearchPowderroom();
  res.send(message);
});
router.get("/Powderroom/lookWest", (req, res) => {
  let message = foyerNorthSearchPowderroom();
  res.send(message);
});
router.get("/Powderroom/searchMirror", (req, res) => {
  let message = foyerNorthSearchMirror();
  res.send(message);
});
router.get("/Powderroom/useFlashlight", (req, res) => {
  let message = foyerNorthUseFlashlight();
  res.send(message);
});
router.get("/Foyer/lookEast", (req, res) => {
  let message = foyerLookEast();
  res.send(message);
});
router.get("/Foyer/searchDoorway", (req, res) => {
  let message = foyerEastDoorway();
  res.send(message);
});
router.get("/Foyer/lookSouth", (req, res) => {
  let message = foyerLookSouth();
  res.send(message);
});
router.get("/Foyer/searchFrontdoor", (req, res) => {
  let message = foyerSouthSearchFrontdoor();
  res.send(message);
});
router.get("/Foyer/lookWest", (req, res) => {
  let message = foyerLookWest();
  res.send(message);
});
router.get("/Foyer/enterLibrary", (req, res) => {
  let message = foyerEastEnterLibrary();
  res.send(message);
});
router.get("/library", (req, res) => {
  let message = libraryEnter();
  res.send(message);
});
router.get("/Library/lookNorth", (req, res) => {
  let message = libraryLookNorth();
  res.send(message);
});
router.get("/Library/searchBookshelves", (req, res) => {
  let message = libraryNorthSearchBookshelves();
  res.send(message);
});
router.get("/Library/searchDoor", (req, res) => {
  let message = libraryNorthSearchDoor();
  res.send(message);
});
router.get("/Library/enterOffice", (req, res) => {
  let message = libraryNorthEnterOffice();
  res.send(message);
});
router.get("/Library/lookEast", (req, res) => {
  let message = libraryLookEast();
  res.send(message);
});
router.get("/Library/searchFireplace", (req, res) => {
  let message = libraryEastSearchFireplace();
  res.send(message);
});
router.get("/Library/searchBrick", (req, res) => {
  let message = libraryEastSearchBrick();
  res.send(message);
});
router.get("/Library/searchHole", (req, res) => {
  let message = libraryEastSearchHole();
  res.send(message);
});
router.get("/Library/searchCoin", (req, res) => {
  let message = libraryEastSearchCoin();
  res.send(message);
});
router.get("/Library/useCoin", (req, res) => {
  let message = libraryEastUseCoin();
  res.send(message);
});
router.get("/Library/searchArmchair", (req, res) => {
  let message = libraryEastSearchArmchair();
  res.send(message);
});
router.get("/Library/searchLamp", (req, res) => {
  let message = libraryEastSearchLamp();
  res.send(message);
});
router.get("/Library/searchFlashlight", (req, res) => {
  let message = libraryEastSearchFlashlight();
  res.send(message);
});
router.get("/Library/useFlashlight", (req, res) => {
  let message = libraryEastUseFlashlight();
  res.send(message);
});
router.get("/Library/lookSouth", (req, res) => {
  let message = libraryLookSouth();
  res.send(message);
});
router.get("/Library/searchDesk", (req, res) => {
  let message = librarySouthSearchDesk();
  res.send(message);
});
router.get("/Library/searchDrawers", (req, res) => {
  let message = librarySouthSearchDrawers();
  res.send(message);
});
router.get("/Library/searchPaper", (req, res) => {
  let message = librarySouthSearchPaper();
  res.send(message);
});
router.get("/Library/lookWest", (req, res) => {
  let message = libraryLookWest();
  res.send(message);
});
router.get("/Library/searchHarryPotter", (req, res) => {
  let message = libraryNorthSearchHarryPotter();
  res.send(message);
});
router.get("/Library/searchMacbeth", (req, res) => {
  let message = libraryNorthSearchMacbeth();
  res.send(message);
});
router.get("/Library/searchDictionary", (req, res) => {
  let message = libraryNorthSearcDictionary();
  res.send(message);
});
router.get("/Library/searchJSForDummies", (req, res) => {
  let message = libraryNorthSearchJSForDummies();
  res.send(message);
});
router.get("/Library/searchKeypad", (req, res) => {
  let message = libraryNorthSearchKeypad();
  res.send(message);
});
router.get("/Library/useKeypad", (req, res) => {
  let message = libraryNorthUseKeypad();
  res.send(message);
});
router.get("/Library/useKeypadCode", (req, res) => {
  let file = req.query.file;
  let message = UseKeypadCode(file);
  res.send(message);
});
router.get("/Library/enterBookshelfRoom", (req, res) => {
  let message = libraryNorthEnterBookshelfRoom();
  res.send(message);
});
router.get("/Office", (req, res) => {
  let message = officeEnter();
  res.send(message);
});
router.get("/Office/lookNorth", (req, res) => {
  let message = officeLookNorth();
  res.send(message);
});
router.get("/Office/searchBookshelf", (req, res) => {
  let message = officeSearchBookshelf();
  res.send(message);
});
router.get("/Office/searchWornBook", (req, res) => {
  let message = officeSearchWornBook();
  res.send(message);
});
router.get("/Office/useKey835", (req, res) => {
  let message = officeUseKey835();
  res.send(message);
});
router.get("/Office/useKey64", (req, res) => {
  let message = officeUseKey64();
  res.send(message);
});
router.get("/Office/searchPhone", (req, res) => {
  let message = officeSearchPhone();
  res.send(message);
});
router.get("/Office/searchPencil", (req, res) => {
  let message = officeSearchPencil();
  res.send(message);
});
router.get("/Office/searchPad", (req, res) => {
  let message = officeSearchPad();
  res.send(message);
});
router.get("/Office/usePencil", (req, res) => {
  let message = officeUsePencil();
  res.send(message);
});
router.get("/Office/lookEast", (req, res) => {
  let message = officeLookEast();
  res.send(message);
});
router.get("/Office/searchComputer", (req, res) => {
  let message = officeSearchComputer();
  res.send(message);
});
router.get("/Office/use373", (req, res) => {
  let message = officeUse373();
  res.send(message);
});
router.get("/Office/lookSouth", (req, res) => {
  let message = officeLookSouth();
  res.send(message);
});
router.get("/Office/searchFilingCabinet", (req, res) => {
  let message = officeSearchFilingCabinet();
  res.send(message);
});
router.get("/Office/searchFile", (req, res) => {
  let file = req.query.file;
  let message = officeSearchFile(file);
  res.send(message);
});
router.get("/Office/useDogLifePoochFriend", (req, res) => {
  let message = officeUseDogLifePoochFriend();
  res.send(message);
});
router.get("/Office/lookWest", (req, res) => {
  let message = officelookWest();
  res.send(message);
});
router.get("/Office/searchSwingingDoor", (req, res) => {
  let message = officeSearchSwingingDoor();
  res.send(message);
});
router.get("/Office/enterKitchen", (req, res) => {
  let message = officeEnterKitchen();
  res.send(message);
});
router.get("/BookshelfRoom", (req, res) => {
  let message = enterBookshelfRoom();
  res.send(message);
});
router.get("/BookshelfRoom/lookNorth", (req, res) => {
  let message = searchBookshelfRoomNorth();
  res.send(message);
});
router.get("/BookshelfRoom/lookEast", (req, res) => {
  let message = searchBookshelfRoomEast();
  res.send(message);
});
router.get("/BookshelfRoom/lookSouth", (req, res) => {
  let message = searchBookshelfRoomSouth();
  res.send(message);
});
router.get("/BookshelfRoom/lookWest", (req, res) => {
  let message = searchBookshelfRoomWest();
  res.send(message);
});
router.get("/BookshelfRoom/searchLever", (req, res) => {
  let message = bookshelfRoomSearchLever();
  res.send(message);
});
router.get("/BookshelfRoom/searchSpiralStairs", (req, res) => {
  let message = bookshelfRoomSearchSpiralStairs();
  res.send(message);
});
router.get("/Attic/", (req, res) => {
  let message = attic();
  res.send(message);
});
router.get("/Attic/searchNorth", (req, res) => {
  let message = atticSearchNorth();
  res.send(message);
});
router.get("/Attic/searchEast", (req, res) => {
  let message = atticSearchEast();
  res.send(message);
});
router.get("/Attic/searchWest", (req, res) => {
  let message = atticSearchWest();
  res.send(message);
});
router.get("/Attic/searchSouth", (req, res) => {
  let message = atticSearchSouth();
  res.send(message);
});
router.get("/Attic/searchGumballMachine", (req, res) => {
  let message = atticSearchGumballMachine();
  res.send(message);
});
router.get("/Attic/UseCoin", (req, res) => {
  let message = atticUseCoin();
  res.send(message);
});
router.get("/Attic/searchSecretDoor", (req, res) => {
  let message = atticSearchSecretDoor();
  res.send(message);
});
router.get("/Attic/enterSecretRoomAttic", (req, res) => {
  let message = atticEnterSecretRoomAttic();
  res.send(message);
});
router.get("/SecretRoomAttic", (req, res) => {
  let message = SecretRoomAttic();
  res.send(message);
});
router.get("/SecretRoomAttic/lookNorth", (req, res) => {
  let message = secretRoomLookNorth();
  res.send(message);
});
router.get("/SecretRoomAttic/lookSouth", (req, res) => {
  let message = secretRoomLookSouth();
  res.send(message);
});
router.get("/SecretRoomAttic/lookWest", (req, res) => {
  let message = secretRoomLookWest();
  res.send(message);
});
router.get("/SecretRoomAttic/lookEast", (req, res) => {
  let message = secretRoomLookEast();
  res.send(message);
});
router.get("/SecretRoomAttic/enterSoundStudio", (req, res) => {
  let message = secretRoomEnterSoundStudio();
  res.send(message);
});
router.get("/SoundStudio", (req, res) => {
  let message = soundStudio();
  res.send(message);
});
router.get("/SoundStudio/lookNorth", (req, res) => {
  let message = soundStudioLookNorth();
  res.send(message);
});
router.get("/SoundStudio/lookEast", (req, res) => {
  let message = soundStudioLookEast();
  res.send(message);
});
router.get("/SoundStudio/lookSouth", (req, res) => {
  let message = soundStudioLookSouth();
  res.send(message);
});
router.get("/SoundStudio/lookWest", (req, res) => {
  let message = soundStudioLookWest();
  res.send(message);
});
router.get("/SoundStudio/searchMicrophone", (req, res) => {
  let message = soundStudioSearchMicrophone();
  res.send(message);
});
router.get("/SoundStudio/useMicrophone", (req, res) => {
  let message = soundStudioUseMicrophone();
  res.send(message);
});
router.get("/SoundStudio/searchLaptop", (req, res) => {
  let message = soundStudioSearchLaptop();
  res.send(message);
});
router.get("/SoundStudio/useLaptop", (req, res) => {
  let message = soundStudioUseLaptop();
  res.send(message);
});
router.get("/SoundStudio/useDogLifePoochFriend", (req, res) => {
  let message = soundStudioUseDogLifePoochFriend();
  res.send(message);
});
router.get("/SoundStudio/searchSoundFile", (req, res) => {
  let message = soundStudioSearchSoundFile();
  res.send(message);
});
router.get("/SoundStudio/useSoundFile", (req, res) => {
  let message = soundStudioUseSoundFile();
  res.send(message);
});
router.get("/SoundStudio/searchLightingStand", (req, res) => {
  let message = soundStudioSearchLightingStand();
  res.send(message);
});
router.get("/SoundStudio/useLightingStand", (req, res) => {
  let message = soundStudioUseLightingStand();
  res.send(message);
});
router.get("/SoundStudio/searchFloorButton", (req, res) => {
  let message = soundStudioSearchFloorButton ();
  res.send(message);
});
router.get("/SoundStudio/useFloorButton", (req, res) => {
  let message = soundStudioUseFloorButton ();
  res.send(message);
});

module.exports = router;


