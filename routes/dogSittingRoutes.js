const dogSitting = require("../model/dogSitting");
const express = require("express");
const router = express.Router();

let {
  newGame,
  instructions,
  puppyLocationRandom,
  search,
} = require("../model/newGameInstr"); //puppyLocationRandom has not been used yet.  newGame route???
let {
  foyerLookNorth,
  foyerNorthSearchStaircase,
  foyerNorthSearchLockedDoor,
  foyerNorthSearchKeyhole,
  foyerNorthStaircaseUseKey64,
  foyerNorthStaircaseUseKey835,
  foyerNorthSearchDoor,
  foyerNorthSearchPowderroom,
  foyerNorthSearchMirror,
  foyerNorthUseFlashlight,
} = require("../model/foyerNorth");
let {
  foyerLookEast,
  foyerEastDoorway,
  foyerEastEnterLibrary,
} = require("../model/foyerEast");
let {
  foyerLookSouth,
  foyerSouthSearchFrontdoor,
} = require("../model/foyerSouth");
let { foyerLookWest } = require("../model/foyerWest");
let {
  libraryEnter,
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
  libraryNorthUseKeypad457218,
  libraryNorthUseKeypad451872,
  libraryNorthUseKeypad721845,
  libraryNorthUseKeypad724518,
  libraryNorthUseKeypad184572,
  libraryNorthUseKeypad187245,
  libraryNorthEnterBookshelfRoom,
} = require("../model/library");
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
  officeSearchFile373,
  officeUseDogLifePoochFriend,
  officelookWest,
  officeSearchSwingingDoor,
  officeEnterKitchen,
  officeSearchFile,
} = require("../model/office");
let {
  enterBookshelfRoom,
  searchBookshelfRoom,
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
  atticEnterSoundStudio,
} = require("../model/attic");

router.get("/search", (req, res) => {
  let location = req.query.location;
  //search function
  let message = search(location);
  res.send(message);
});
router.get("", async (req, res) => {
  let message = newGame();
  res.send(message);
});
router.get("/startGame", async (req, res) => {
  let message = instructions();
  res.send(message);
});
router.get("/Foyer", async (req, res) => {
  let message = "";
  message += "As the Front door closes behind you, you realize you are in the Foyer.  Where would you like to look?\n";
  message += "/lookNorth, /lookEast, /lookSouth, /lookWest";
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
router.get("/Foyer/searchDoor", (req, res) => {
  let message = foyerNorthSearchDoor();
  res.send(message);
});
router.get("/Foyer/searchPowderroom", (req, res) => {
  let message = foyerNorthSearchPowderroom();
  res.send(message);
});
router.get("/Foyer/searchMirror", (req, res) => {
  let message = foyerNorthSearchMirror();
  res.send(message);
});
router.get("/Foyer/useFlashlight", (req, res) => {
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
router.get("/Library/useKeypad457218", (req, res) => {
  let message = libraryNorthUseKeypad457218();
  res.send(message);
});
router.get("/Library/useKeypad451872", (req, res) => {
  let message = libraryNorthUseKeypad451872();
  res.send(message);
});
router.get("/Library/useKeypad721845", (req, res) => {
  let message = libraryNorthUseKeypad721845();
  res.send(message);
});
router.get("/Library/useKeypad724518", (req, res) => {
  let message = libraryNorthUseKeypad724518();
  res.send(message);
});
router.get("/Library/useKeypad184572", (req, res) => {
  let message = libraryNorthUseKeypad184572();
  res.send(message);
});
router.get("/Library/useKeypad187245", (req, res) => {
  let message = libraryNorthUseKeypad187245();
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
router.get("/Office/searchBookshelf", (req, res) => {
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
router.get("/Office/searchFile373", (req, res) => {
  let message = officeSearchFile373();
  res.send(message);
});
router.get("/Office/search", (req, res) => {
  let file = req.query.file;
  let message = officeSearchFile(file);
  res.send(message);
});
router.get("/Office/searchFile373", (req, res) => {
  let message = officeSearch373();
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
  let message = searchBookshelfRoom();
  res.send(message);
});
router.get("/BookshelfRoom/lookEast", (req, res) => {
  let message = searchBookshelfRoom();
  res.send(message);
});
router.get("/BookshelfRoom/lookSouth", (req, res) => {
  let message = searchBookshelfRoom();
  res.send(message);
});
router.get("/BookshelfRoom/lookWest", (req, res) => {
  let message = searchBookshelfRoom();
  res.send(message);
});
router.get("/BookshelfRoom/searchLever", (req, res) => {
  let message = bookshelfRoomSearchLever();
  res.send(message);
});
router.get("/BookshelfRoom/searchLever", (req, res) => {
  let message = bookshelfRoomSearchSpiralStairs();
  res.send(message);
});
router.get("/attic/", (req, res) => {
  let message = attic();
  res.send(message);
});
router.get("/attic/searchNorth", (req, res) => {
  let message = atticSearchNorth();
  res.send(message);
});
router.get("/attic/searchEast", (req, res) => {
  let message = atticSearchEast();
  res.send(message);
});
router.get("/attic/searchWest", (req, res) => {
  let message = atticSearchWest();
  res.send(message);
});
router.get("/attic/searchSouth", (req, res) => {
  let message = atticSearchSouth();
  res.send(message);
});
router.get("/attic/searchGumballMachine", (req, res) => {
  let message = atticSearchGumballMachine();
  res.send(message);
});
router.get("/attic/UseCoin", (req, res) => {
  let message = atticUseCoin();
  res.send(message);
});
router.get("/attic/searchSecretDoor", (req, res) => {
  let message = atticSearchSecretDoor();
  res.send(message);
});
router.get("/attic/enterSoundStudio", (req, res) => {
  let message = atticEnterSoundStudio();
  res.send(message);
});

module.exports = router;
