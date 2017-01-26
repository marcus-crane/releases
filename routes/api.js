const express = require('express')
const router = express.Router()

const moment = require('moment')

const Knex = require('knex')
const knexConfig = require('../knexfile')

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

router.get('/', (req, res, next) => {
  res.send('At the moment, the only endpoint is /month/. You can either just visit <a href="/api/month">/month/</a> to see the entire database or visit <a href="/api/month/3">/month/{monthnumber}</a> where monthnumber is between 1 (Jan) and 12 (Dec). Yeah, it\s not zero indexed ;)')
})

router.get('/month', (req, res, next) => {
  knex.select('*').from('games')
    .then((games) => {
      let releases = []

      for (let i in games) {
        let name = games[i].title
        let date = moment(`${games[i].releaseDate} GMT`)
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

      res.json({ releases })
    })
    .catch((err) => {
      res.send('Something broke! Let me know via <a href="mailtO:marcus@thingsima.de">Email</a>!')
    })
})

router.get('/month/:month', (req, res, next) => {
  let month = parseInt(req.params.month)

  if (month > 0 && month < 13 && month !== "all") {
    // Months in Moment.js are zero indexed
    let monthName = moment().month(month - 1).format('MMMM')
    knex.select('*').from('games').where('releaseDate', 'LIKE', `%${monthName}%`)
      .then((games) => {
        let releases = []

        for (let i in games) {
          let name = games[i].title
          let date = moment(`${games[i].releaseDate} GMT`)
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

        res.json({ releases })
      })
  } else {
    res.send('That isn\'t a valid month')
  }
})

router.get('/month/all', (req, res, next) => {
  knex.select('*').from('games')
    .then((games) => {
      let releases = []

      for (let i in games) {
        let name = games[i].title
        let date = moment(`${games[i].releaseDate} GMT`)
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

      res.json({ releases })
    })
    .catch((err) => {
      res.send('Something broke! Let me know via <a href="mailtO:marcus@thingsima.de">Email</a>!')
    })
})

module.exports = router
