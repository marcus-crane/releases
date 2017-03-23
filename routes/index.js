const express = require('express')
const router = express.Router()
const moment = require('moment')
const r = require('../lib/rethink/utils')

router.get('/', (req, res, next) => {
  res.send('At the moment, the only endpoint is /month. You can either just visit <a href="/month">/month</a> to see the entire database or visit <a href="/month/3">/month/{monthnumber}</a> where monthnumber is between 1 (Jan) and 12 (Dec). Yeah, it\'s not zero indexed ;)')
})

router.get('/month', (req, res, next) => {
  r.get('games')
    .then((games) => {
      let releases = []

      for (let i in games) {
        let name = games[i].title
        let date = moment(`${games[i].releaseDate}`)
        let developer = games[i].developer
        let publisher = games[i].publisher
        let description = games[i].description
        let gbID = games[i].gb_id

        releases.push({ gbID, name, date, description, developer, publisher })
      }

      releases.sort((a, b) => {
        return a.date - b.date
      })

      for (let i in releases) {
        releases[i].date = moment(releases[i].date).format('dddd, MMMM Do')
      }

      res.json(releases)
    })
    .catch((err) => {
      console.error('Broke at /month', err)
      res.sendStatus(404)
      // res.send('Something broke! Let me know via <a href="mailto:marcus@thingsima.de">Email</a>!')
    })
})

router.get('/month/:month', (req, res, next) => {
  let month = parseInt(req.params.month)

  if (month > 0 && month < 13) {
    if (month < 10) { month = `0${month}` }
    console.log(month)
      r.getMonth('games', month)
      .then((games) => {
        console.log(games)
        let releases = []

        for (let i in games) {
          let name = games[i].title
          let date = moment(`${games[i].releaseDate}`)
          let developer = games[i].developer
          let publisher = games[i].publisher
          let description = games[i].description
          let gbID = games[i].gb_id

          releases.push({ gbID, name, date, description, developer, publisher })
        }

        releases.sort((a, b) => {
          return a.date - b.date
        })

        for (let i in releases) {
          releases[i].date = moment(releases[i].date).format('dddd, MMMM Do')
        }

        res.json(releases)
      })
      .catch((err) => {
        console.error(`Broke at /month/${req.params.month}`, err)
      })
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
