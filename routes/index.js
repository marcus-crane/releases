const express = require('express')
const router = express.Router()
const gameController = require('../controllers/gameController')
const { catchErrors } = require('../handlers/errorHandlers')

router.get('/', gameController.homePage)

module.exports = router