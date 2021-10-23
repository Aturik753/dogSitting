const dogSitting = require('../model/dogSitting')
const express = require('express')
const router = express.Router()


let  {newGame, 
    instructions } = require('../model/newGameInstr')
let {FoyerLookNorth,
    FoyerNorthSearchStaircase,
    FoyerNorthSearchLockedDoor,
    FoyerNorthSearchKeyhole,
    FoyerNorthStaircaseUseStaricaseKey,
    FoyerNorthSearchDoor,
    FoyerNorthSearchPowderroom} = require('../model/foyerNorth')

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
    let message = FoyerLookNorth()
    res.send (message)
}) 

router.get('/Foyer/searchStaircase' , (req,res) => {
    let message = FoyerNorthSearchStaircase()
    res.send (message)
})

router.get('/Foyer/searchLockedDoor' , (req,res) => {
    let message = FoyerNorthSearchLockedDoor()
    res.send (message)
})

router.get('/Foyer/searchKeyhole' , (req,res) => {
    let message = FoyerNorthSearchKeyhole()
    res.send (message)
})

router.get('/Foyer/useStaricaseKey' , (req,res) => {
    let message = FoyerNorthStaircaseUseStaricaseKey()
    res.send (message)
})

router.get('/Foyer/searchDoor' , (req,res) => {
    let message = FoyerNorthSearchDoor()
    res.send (message)
})

router.get('/Foyer/searchPowderroom' , (req,res) => {
    let message = FoyerNorthSearchPowderroom()
    res.send (message)
})

 
        


module.exports = router