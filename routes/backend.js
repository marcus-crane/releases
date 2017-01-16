const express = require('express');
const router = express.Router();

const env = require('dotenv').config()
const gb = require('../utils/gb')

const moment = require('moment')

// const Knex = require('knex');
// const knexConfig = require('../knexfile');

// const knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);

router.get('/', (req, res, next) => {
    res.render('import')
})


router.post('/', (req, res, next) => {
    console.log(req)
    res.redirect('/backend')
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
        game.bgcover = "http://scd.thingsima.de/img/bgcover/yakuza_0.jpg"

        res.render('confirm', { "game": game })
    })
})

module.exports = router
