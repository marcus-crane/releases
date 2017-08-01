const express = require('express')
const router = express.Router()
const gameController = require('../controllers/gameController')
const apiController = require('../controllers/apiController')
const { catchErrors } = require('../handlers/errorHandlers')


router.get('/', catchErrors(gameController.getLatestGames))

// Games
router.get('/games', catchErrors(gameController.getAllGames))
router.get('/games/add', gameController.addGame)
router.post('/games/add', catchErrors(gameController.createGame))
router.get('/games/:game', catchErrors(gameController.queryGame))
router.get('/games/:game/edit', catchErrors(gameController.editGame))

// Platforms
router.get('/platform/:platform', catchErrors(gameController.queryPlatform))

// Months
router.get('/month/:month', catchErrors(gameController.sortByMonth))

// API
router.get('/api', catchErrors(apiController.renderAPI))

module.exports = router