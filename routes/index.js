const express = require('express');
const router = express.Router();

const path = require('path')
const dotenv = require('dotenv').config()
const gb = require('giantbombing-api')
const moment = require('moment')

const Knex = require('knex');
const knexConfig = require('../knexfile');

const knex = Knex(knexConfig['development']);

const config = {
    apiKey: process.env.GIANT_BOMB_API_KEY,
    userAgent: 'upcomingreleas.es'
};

const GBAPI = new gb(config)

router.get('/', (req, res, next) => {
    knex('games')
    .then((games) => {
        // TODO Use object instead of an array
        let releases = []
        for (i in games) {
            let name = games[i].title;
            let date = moment(`${games[i].releaseDate} GMT`);
            let bgcover = games[i].bgcover;

            releases.push({name, date, bgcover});
        }

        releases.sort((a, b) => {
            return a.date - b.date;
        })

        console.log(releases)
        res.render('index', { "games": releases })
    });
});

module.exports = router
