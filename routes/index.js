const express = require('express')
const router = express.Router()
const moment = require('moment')
const r = require('../lib/rethink/utils')

router.get('/', (req, res, next) => {
  r.get('games')
    .then((games) => {
      let releases = []
      for (let i in games) {
        if (moment(games[i].releaseDate).isAfter(Date.now())) {
          let name = games[i].title
          let date = moment(`${games[i].releaseDate}`)
          let bgcover = games[i].bgcover

          releases.push({name, date, bgcover})
        }
      }

      releases.sort((a, b) => {
        return a.date - b.date
      })

      res.render('index', { 'games': releases, 'header': 'VGDates', 'tagline': 'Looking for a simple release calendar? I gotcha covered!' })
    })
})

module.exports = router
