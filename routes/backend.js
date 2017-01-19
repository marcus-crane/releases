const express = require('express')
const router = express.Router()

const gb = require('../lib/api/giantbomb')

const moment = require('moment')

const Knex = require('knex')
const knexConfig = require('../knexfile')
const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

router.get('/', (req, res, next) => {
  res.render('import')
})

router.post('/', (req, res, next) => {
  knex('games').insert({ gb_id: req.body.gb_id, title: req.body.title, releaseDate: req.body.date, bgcover: req.body.bgcover, description: req.body.description, developer: req.body.developer, publisher: req.body.publisher })
    .then((done) => {
      console.log(`Added ${req.body.title} to the database.`)
      res.redirect('/')
    })
    .catch((err) => {
      console.log('I died!', err)
    })
})

router.post('/confirm', (req, res, next) => {
  gb.queryByName(req.body.title)
    .then((games) => {
      return gb.queryByID(games.data.results[0].id)
    })
    .then((games) => {
      let game = {}
      console.log(games.data.results.publishers)

        // No platforms yet and forcing first in the devs/publishers
      game.gb_id = games.data.results.id
      game.title = games.data.results.name
      game.developer = games.data.results.developers[0].name
      game.publisher = games.data.results.publishers[0].name
      game.date = moment(`${games.data.results.original_release_date} GMT`)
      game.description = games.data.results.deck
      game.bgcover = 'http://files.thingsima.de/img/bgcover/placeholder.jpg'

      res.render('confirm', { 'game': game })
    })
})

module.exports = router
