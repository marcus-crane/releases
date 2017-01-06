const GiantBombAPI = require('giantbombapi')

let GBAPI = new GiantBombAPI(`${process.env.GIANT_BOMB_API_KEY}`)

GBAPI.searchGames('Counter Strike').then(
    function(games) {
        console.log(games)
    },
    function(err) {
        console.log(err)
    }
)

// let db_fields = {
//     field_list: 'deck,developers,expected_release_day,expected_release_month,expected_release_quarter,expected_release_year,id,image,name,original_release_date,publishers',
// }

// let search_options = {
//     field_list: 'name,id',
//     query: process.argv[2],
//     resources: 'game',
//     resource_type: 'game',
//     limit: 5
// }

// let entry = {}

// GBAPI.getSearch(search_options, (err, res) => {
//     if (err) {
//         console.log('Oh')
//     } else {
//         GBAPI.getGame(res.results[0].id, db_fields, (err, res) => {
//             if (err) {
//                 console.log('Oh')
//             } else {
//                 entry.gb_id = res.results.id
//                 entry.title = res.results.name
//                 entry.description = res.results.deck
//                 entry.boxart = `/img/boxart/${process.argv[3]}.jpg`
//                 entry.bgcover = `/img/bgcover/${process.argv[3]}.jpg`
//                 entry.developer = res.results.developers[0].name
//                 entry.publisher = res.results.publishers[0].name
//                 if (res.results.expected_release_quarter) {
//                     entry.releaseQuarter = res.results.expected_release_quarter
//                 } else {
//                     if (entry.releaseDay) { entry.releaseDay = res.results.expected_release_day }
//                     if (entry.releaseMonth) { entry.releaseMonth = res.results.expected_release_month }
//                     entry.releaseYear = res.results.expected_release_year
//                 }   
//                 console.log(entry)
//                 blurImages()
//             }
//         })
//     }
//})
