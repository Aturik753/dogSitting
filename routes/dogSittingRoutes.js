let {lookNorthFoyer} = require('../model/foyerNorth')
const dogSitting = require('../model/dogSitting')
let  {newGame, instructions } = require('../model/newGameInstr')

const express = require('express')
const router = express.Router()

router.get('/startGame', async (req, res) => {
    let message = newGame()
    res.send (message)
})
router.get('/instructions', (req,res) => {
    let message = instructions()
    res.send (message)
})
router.get('/foyer', (req, res) => {
    let message
    let direction = req.query.direction 
    
    if (direction==="North") {
        //this is where I put the funcion Foyer North here
        message = lookNorthFoyer()
    }
    else if (direction==="East") {

//function for East
        message = 'You search ' + spot + ' and find no-one!'
    }
    res.send(message + '\n')
})


//create more routes.  create a foyer route, then you can look in each direction


module.exports = router