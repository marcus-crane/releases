const express = require('express')
const router = express.Router()
const gameController = require('../controllers/gameController')
const apiController = require('../controllers/apiController')
const staticController = require('../controllers/staticController')
const { catchErrors } = require('../handlers/errorHandlers')

router.get('/', catchErrors(gameController.getGames))
router.get('/add', gameController.addGame)
router.post('/add', catchErrors(gameController.createGame))

router.get('/edit/:game', catchErrors(gameController.editGame))
router.get('/game/:game', catchErrors(gameController.queryGame))
router.get('/platform/:platform', catchErrors(gameController.queryPlatform))
router.get('/month/:month', catchErrors(gameController.sortByMonth))

router.get('/calendar', staticController.calendar)

router.get('/api', catchErrors(apiController.renderAPI))

module.exports = router