const axios = require('axios')
const env = require('dotenv').config({ path: '../.env' })

const queryByName = (title) => {
    return axios.get(`http://www.giantbomb.com/api/search?api_key=${process.env.GIANT_BOMB_API_KEY}&format=json&query=${title}&resources=game`)
}

const queryByID = (game_id) => {
    return axios.get(`http://www.giantbomb.com/api/game/3030-${game_id}/?api_key=${process.env.GIANT_BOMB_API_KEY}&format=json&field_list=date_last_updated,deck,developers,expected_release_day,expected_release_month,expected_release_quarter,expected_release_year,id,images,name,platforms,publishers,releases`)
}

const queryRelease = (game_id) => {
    return axios.get(`http://www.giantbomb.com/api/release/3050-${game_id}/?api_key=${process.env.GIANT_BOMB_API_KEY}&format=json&field_list=date_last_updated,name,platform,region,developers,publishers,expected_release_day,expected_release_month,expected_release_quarter,expected_release_year`)
}

module.exports = {
    queryByName,
    queryByID,
    queryRelease,
}
