const express = require('express');
const router = express.Router();

const Knex = require('knex');
const knexConfig = require('../knexfile');

const knex = Knex(knexConfig['development']);

router.get('/', (req, res, next) => {
    knex('games')
    .then((games) => {
        // TODO Use object instead of an array
        let releases = []
        for (i in games) {
            let date = '';

            let quarter = games[i].releaseQuarter;
            let day = games[i].releaseDay;
            let month = games[i].releaseMonth;
            let year = games[i].releaseYear
            let bgcover = games[i].bgcover

            if (quarter) {
                date = `${quarter} ${year}`;
            } else {
                date = '';
                if (day) { date += `${day} ` };
                if (month) { date += `${month} `};
                date += year
            }

            releases.push([games[i].title, date, bgcover])
        }
        res.render('index', { "games": releases })
    });
});

router.get('/about', (req, res, next) => {
    res.render('about')
})

module.exports = router
