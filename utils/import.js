const path = require('path')
const dotenv = require('dotenv').config({ path: '../.env'})
const gb = require('giantbombing-api')

const config = {
    apiKey: process.env.GIANT_BOMB_API_KEY,
    userAgent: 'upcomingreleas.es'
};

const GBAPI = new gb(config)

let db_fields = {
    field_list: 'deck,developers,expected_release_day,expected_release_month,expected_release_quarter,expected_release_year,id,image,name,original_release_date,publishers',
}

let search_options = {
    field_list: 'name,id',
    query: process.argv[2],
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
                entry.description = res.results.deck
                entry.name = res.results.name
                entry.gb_id = res.results.id
                entry.developer = res.results.developers[0].name
                entry.publisher = res.results.publishers[0].name
                entry.releaseYear = res.results.expected_release_year
                entry.releaseMonth = res.results.expected_release_month
                entry.releaseDay = res.results.expected_release_day
                entry.releaseQuarter = res.results.expected_release_quarter
                console.log(entry)
            }
        })
    }
})
