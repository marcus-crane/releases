const express = require('express');
const router = express.Router();

const path = require('path')
const dotenv = require('dotenv').config()
const gb = require('giantbombing-api')

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

router.get('/import', (req, res, next) => {
    res.render('import')
})

router.post('/confirm', (req, res, next) => {
    let db_fields = {
        field_list: 'deck,developers,expected_release_day,expected_release_month,expected_release_quarter,expected_release_year,id,image,name,original_release_date,publishers',
    }

    let search_options = {
        field_list: 'name,id',
        query: `${req.body.title}`,
        resources: 'game',
        resource_type: 'game',
        limit: 5
    }

    let entry = {}

    GBAPI.getSearch(search_options, (err, res) => {
        if (err) {
            console.log('Oh')
        } else {
            GBAPI.getGame(res.results[0].id, db_fields, (err, res) => {
                if (err) {
                    console.log('Oh')
                } else {
                    entry.gb_id = res.results.id
                    entry.title = res.results.name
                    entry.description = res.results.deck
                    entry.boxart = `/img/boxart/${process.argv[3]}.jpg`
                    entry.bgcover = `/img/bgcover/${process.argv[3]}.jpg`
                    entry.developer = res.results.developers[0].name
                    entry.publisher = res.results.publishers[0].name
                    if (res.results.expected_release_quarter) {
                        entry.releaseQuarter = res.results.expected_release_quarter
                    } else {
                        if (entry.releaseDay) { entry.releaseDay = res.results.expected_release_day }
                        if (entry.releaseMonth) { entry.releaseMonth = res.results.expected_release_month }
                        entry.releaseYear = res.results.expected_release_year
                    }
                    res.render('confirm', { "games": entry })
                }
            })
        }
    })
})

module.exports = router
