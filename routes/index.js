const express = require('express')
const router = express.Router()

const moment = require('moment')

const Knex = require('knex')
const knexConfig = require('../knexfile')

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

router.get('/', (req, res, next) => {
  knex('games')
    .then((games) => {
      let releases = []
      for (let i in games) {
        let name = games[i].title
        let date = moment(`${games[i].releaseDate} GMT`)
        let bgcover = games[i].bgcover

        releases.push({name, date, bgcover})
      }

      releases.sort((a, b) => {
        return a.date - b.date
      })

      res.render('index', { 'games': releases, 'header': 'Upcoming Releases', 'tagline': 'Gosh, this is much simpler than those silly Metacritic lists!' })
    })
})

module.exports = router
