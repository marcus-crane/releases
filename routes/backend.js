const express = require('express');
const router = express.Router();

const env = require('dotenv').config()
const gb = require('../utils/queryGB')

const moment = require('moment')

const Knex = require('knex');
const knexConfig = require('../knexfile');
const knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);

router.get('/', (req, res, next) => {
    res.render('import')
})


router.post('/', (req, res, next) => {
    knex('games').insert({ title: req.body.title, releaseDate: req.body.date, bgcover: req.body.bgcover })
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

        game.title = games.data.results.name
        game.date = moment(`${games.data.results.original_release_date} GMT`)
        game.bgcover = "http://scd.thingsima.de/img/bgcover/placeholder.jpg"

        res.render('confirm', { "game": game })
    })
})

module.exports = router
