const express = require('express');
const router = express.Router();

const Knex = require('knex');
const knexConfig = require('../knexfile');

const knex = Knex(knexConfig['development']);

router.get('/', (req, res, next) => {
    knex('games')
    .then((games) => {
        let releases = []
        for (i in games) {
            let date = '';

            let quarter = games[i].releaseQuarter;
            let day = games[i].releaseDay;
            let month = games[i].releaseMonth;
            let year = games[i].releaseYear
            let developer = games[i].developer
            let publisher = games[i].publisher

            if (quarter) {
                date = `${quarter} ${year}`;
            } else {
                date = '';
                if (day) { date += `${day} ` };
                if (month) { date += `${month} `};
                date += year
            }

            releases.push([games[i].title, date, developer, publisher])
        }
        res.render('index', { "games": releases })
    });
});

module.exports = router