const express = require('express');
const router = express.Router();

const path = require('path')
const moment = require('moment')

const Knex = require('knex');
const knexConfig = require('../knexfile');

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);

router.get('/', (req, res, next) => {
    knex('games')
    .then((games) => {
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
