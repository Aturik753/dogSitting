const dogSitting = require('../model/dogSitting')
const express = require('express')
const router = express.Router()


let {newGame, 
    instructions } = require('../model/newGameInstr')
let {foyerLookNorth,
    foyerNorthSearchStaircase,
    foyerNorthSearchLockedDoor,
    foyerNorthSearchKeyhole,
    foyerNorthStaircaseUseStaricaseKey,
    foyerNorthSearchDoor,
    foyerNorthSearchPowderroom} = require('../model/foyerNorth')
let {foyerLookEast,
    foyerEastDoorway} = require('../model/foyerEast') 
let { foyerLookSouth,
    foyerSouthSearchFrontdoor} = require('../model/foyerSouth')
let {foyerLookWest} = require('../model/foyerWest')


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

router.get('/Foyer/useStaricaseKey' , (req,res) => {
    let message = foyerNorthStaircaseUseStaricaseKey()
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


module.exports = router