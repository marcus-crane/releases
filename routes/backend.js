const express = require('express')
const router = express.Router()

const gb = require('../lib/api/giantbomb')

const moment = require('moment')

const Knex = require('knex')
const knexConfig = require('../knexfile')
const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

router.get('/', (req, res, next) => {
  res.render('import', { 'header': 'Search for a title', 'tagline': 'What games are we missing from the database?' })
})

router.post('/', (req, res, next) => {
  knex('games').insert({ gb_id: req.body.gb_id, title: req.body.title, releaseDate: req.body.date, bgcover: req.body.bgcover, description: req.body.description, developer: req.body.developer, publisher: req.body.publisher })
    .then((done) => {
      console.log(`Added ${req.body.title} to the database.`)
      res.redirect('/')
    })
    .catch((err) => {
      console.log(`Failed to insert ${req.body.title} into database`, err)
    })
})

router.post('/results', (req, res, next) => {
  gb.queryMultiple(req.body.title)
    .then((games) => {
      let results = []

      for (let i in games.data.results) {
        let name = games.data.results[i].name
        let gbid = games.data.results[i].id
        let date = moment(`${games.data.results[i].original_release_date} GMT`)
        let bgcover = games.data.results[i].image.medium_url
        let description = games.data.results[i].deck
        results.push({ name, gbid, date, bgcover, description })
      }

      results.sort((a, b) => {
        return b.date - a.date
      })

      res.render('search', { 'games': results, 'header': 'Search Results', 'tagline': 'One of these lucky titles might make it into the database!' })
    })
    .catch((err) => {
      console.log('Failed to fetch search results', err)
      res.send('Weird, we didn\'t get any search results! Have a look at the terminal.')
    })
})

router.get('/add/:id', (req, res, next) => {
  gb.queryByID(req.params.id)
    .then((game) => {
      let entry = {}

      entry.name = game.data.results.name
      entry.gb_id = game.data.results.id
      entry.developer = game.data.results.developers[0].name
      entry.publisher = game.data.results.publishers[0].name
      entry.date = moment(`${game.data.results.original_release_date} GMT`)
      entry.bgcover = game.data.results.image.medium_url
      entry.description = game.data.results.deck

      res.render('confirm', { 'game': entry, 'header': 'Confirm details', 'tagline': `Here's what we could find about ${entry.name}` })
    })
    .catch((err) => {
      console.log(`Failed to fetch ${req.params.title}`, err)
      res.send(`Oops, couldn\'t fetch ${req.params.title}! Check the terminal.`)
    })
})

module.exports = router
