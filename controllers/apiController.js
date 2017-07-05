const mongoose = require('mongoose')
const Game = mongoose.model('Game')

exports.renderAPI = async (req, res) => {
  let games = await Game.find()
  let render = []
  games.sort((a, b) => a.release - b.release)
  games.map(game => {
    render.push({
      name: game.name,
      release: game.release,
      platforms: game.platforms
    })
  })
  res.json(render)
}