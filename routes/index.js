const express = require('express')
const router = express.Router()
const gameController = require('../controllers/gameController')
const { catchErrors } = require('../handlers/errorHandlers')

router.get('/', catchErrors(gameController.getGames))
router.get('/add', gameController.addGame)
router.post('/add', catchErrors(gameController.createGame))
router.get('/api', catchErrors(gameController.renderAPI))

module.exports = router