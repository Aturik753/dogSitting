const dogSitting = require('../model/dogSitting')
const express = require('express')
const router = express.Router()


let {newGame, 
    instructions } = require('../model/newGameInstr')
let {foyerLookNorth,
    foyerNorthSearchStaircase,
    foyerNorthSearchLockedDoor,
    foyerNorthSearchKeyhole,
    foyerNorthStaircaseUseKey64,
    foyerNorthSearchDoor,
    foyerNorthSearchPowderroom,
    foyerNorthSearchMirror,
    foyerNorthUseFlashlight} = require('../model/foyerNorth')
let {foyerLookEast,
    foyerEastDoorway,
    foyerEastEnterLibrary} = require('../model/foyerEast') 
let {foyerLookSouth,
    foyerSouthSearchFrontdoor} = require('../model/foyerSouth')
let {foyerLookWest} = require('../model/foyerWest')
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
    libraryNorthUseKeypad457218,
    libraryNorthUseKeypad451872,
    libraryNorthUseKeypad721845,
    libraryNorthUseKeypad724518,
    libraryNorthUseKeypad184572,
    libraryNorthUseKeypad187245,
    libraryNorthEnterBookshelfRoom} = require('../model/library')



router.get('/startGame', async (req, res) => {
    let message = newGame()
    message += "              \n"
    message += instructions()
    res.send (message)
})
router.get('/Foyer', async (req,res) => {
    let message = ""
    message += "As the Front door closes behind you, you realize you are in the Foyer.  Where would you like to look?\n"
    message += "/lookNorth, /lookEast, /lookSouth, /lookWest"
    res.send (message)
})    
router.get('/Foyer/lookNorth' , (req,res) => {
    let message = foyerLookNorth()
    res.send (message)
}) 
router.get('/Foyer/searchStaircase' , (req,res) => {
    let message = foyerNorthSearchStaircase()
    res.send (message)
})
router.get('/Foyer/searchLockedDoor' , (req,res) => {
    let message = foyerNorthSearchLockedDoor()
    res.send (message)
})
router.get('/Foyer/searchKeyhole' , (req,res) => {
    let message = foyerNorthSearchKeyhole()
    res.send (message)
})
router.get('/Foyer/useKey64' , (req,res) => {
    let message = foyerNorthStaircaseUseKey64()
    res.send (message)
})
router.get('/Foyer/searchDoor' , (req,res) => {
    let message = foyerNorthSearchDoor()
    res.send (message)
})
router.get('/Foyer/searchPowderroom' , (req,res) => {
    let message = foyerNorthSearchPowderroom()
    res.send (message)
})
router.get('/Foyer/searchMirror' , (req,res) => {
    let message = foyerNorthSearchMirror()
    res.send (message)
})
router.get('/Foyer/useFlashlight' , (req,res) => {
    let message = foyerNorthUseFlashlight()
    res.send (message)
})
router.get('/Foyer/lookEast' , (req,res) => {
    let message = foyerLookEast()
    res.send (message)
}) 
router.get('/Foyer/searchDoorway' , (req,res) => {
    let message = foyerEastDoorway()
    res.send (message)
})
router.get('/Foyer/lookSouth' , (req,res) => {
    let message = foyerLookSouth()
    res.send (message)
})
router.get('/Foyer/searchFrontdoor' , (req,res) => {
    let message = foyerSouthSearchFrontdoor()
    res.send (message)
})
router.get('/Foyer/lookWest' , (req,res) => {
    let message = foyerLookWest()
    res.send (message)
}) 
router.get('/Foyer/enterLibrary' , (req,res) => {
    let message = foyerEastEnterLibrary()
    res.send (message)
}) 
router.get('/library' , (req,res) => {
    let message = libraryEnter()
    res.send (message)
})
router.get('/Library/lookNorth' , (req,res) => {
    let message = libraryLookNorth()
    res.send (message)
})
router.get('/Library/searchBookshelves' , (req,res) => {
    let message = libraryNorthSearchBookshelves()
    res.send (message)
})
router.get('/Library/searchDoor' , (req,res) => {
    let message = libraryNorthSearchDoor()
    res.send (message)
})
router.get('/Library/enterOffice' , (req,res) => {
    let message = libraryNorthEnterOffice()
    res.send (message)
})
router.get('/Library/lookEast' , (req,res) => {
    let message = libraryLookEast()
    res.send (message)
})
router.get('/Library/searchFireplace' , (req,res) => {
    let message = libraryEastSearchFireplace()
    res.send (message)
})
router.get('/Library/searchBrick' , (req,res) => {
    let message = libraryEastSearchBrick()
    res.send (message)
})
router.get('/Library/searchHole' , (req,res) => {
    let message = libraryEastSearchHole()
    res.send (message)
})
router.get('/Library/searchCoin' , (req,res) => {
    let message = libraryEastSearchCoin()
    res.send (message)
})
router.get('/Library/useCoin' , (req,res) => {
    let message = libraryEastUseCoin()
    res.send (message)
})
router.get('/Library/searchArmchair' , (req,res) => {
    let message = libraryEastSearchArmchair()
    res.send (message)
})
router.get('/Library/searchLamp' , (req,res) => {
    let message = libraryEastSearchLamp()
    res.send (message)
})
router.get('/Library/searchFlashlight' , (req,res) => {
    let message = libraryEastSearchFlashlight()
    res.send (message)
})
router.get('/Library/useFlashlight' , (req,res) => {
    let message = libraryEastUseFlashlight()
    res.send (message)
})
router.get('/Library/lookSouth' , (req,res) => {
    let message = libraryLookSouth()
    res.send (message)
})
router.get('/Library/searchDesk' , (req,res) => {
    let message = librarySouthSearchDesk()
    res.send (message)
})
router.get('/Library/searchDrawers' , (req,res) => {
    let message = librarySouthSearchDrawers()
    res.send (message)
})
router.get('/Library/searchPaper' , (req,res) => {
    let message = librarySouthSearchPaper()
    res.send (message)
})
router.get('/Library/lookWest' , (req,res) => {
    let message = libraryLookWest()
    res.send (message)
})
router.get('/Library/searchHarryPotter' , (req,res) => {
    let message = libraryNorthSearchHarryPotter()
    res.send (message)
})
router.get('/Library/searchMacbeth' , (req,res) => {
    let message = libraryNorthSearchMacbeth()
    res.send (message)
})
router.get('/Library/searchDictionary' , (req,res) => {
    let message = libraryNorthSearcDictionary()
    res.send (message)
})
router.get('/Library/searchJSForDummies' , (req,res) => {
    let message = libraryNorthSearchJSForDummies()
    res.send (message)
})
router.get('/Library/searchKeypad' , (req,res) => {
    let message = libraryNorthSearchKeypad()
    res.send (message)
})
router.get('/Library/useKeypad' , (req,res) => {
    let message = libraryNorthUseKeypad    ()
    res.send (message)
})
router.get('/Library/useKeypad457218' , (req,res) => {
    let message = libraryNorthUseKeypad457218()
    res.send (message)
})
router.get('/Library/useKeypad451872' , (req,res) => {
    let message = libraryNorthUseKeypad451872()
    res.send (message)
})
router.get('/Library/useKeypad721845' , (req,res) => {
    let message = libraryNorthUseKeypad721845()
    res.send (message)
})
router.get('/Library/useKeypad724518' , (req,res) => {
    let message = libraryNorthUseKeypad724518()
    res.send (message)
})
router.get('/Library/useKeypad184572' , (req,res) => {
    let message = libraryNorthUseKeypad184572()
    res.send (message)
})
router.get('/Library/useKeypad187245' , (req,res) => {
    let message = libraryNorthUseKeypad187245()
    res.send (message)
})
router.get('/Library/enterBookshelfRoom' , (req,res) => {
    let message = libraryNorthEnterBookshelfRoom()
    res.send (message)
})





module.exports = router