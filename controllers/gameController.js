const mongoose = require('mongoose')
const Game = mongoose.model('Game')

exports.getGames = async (req, res) => {
  const games = await Game.find()
  games.sort((a, b) => a.release - b.release)
  res.render('index', { title: 'Upcoming Games', games })
}

exports.renderAPI = async (req, res) => {
  let games = await Game.find()
  let render = []
  games.sort((a, b) => a.release - b.release)
  games.map(game => {
    let cleanedGame = {}
    cleanedGame.name = game.name
    cleanedGame.release = game.release
    cleanedGame.platforms = game.platforms
    render.push(cleanedGame)
  })
  res.json(render)
}

exports.addGame = (req, res) => {
  res.render('editGame', { title: 'Add Game' })
}

exports.createGame = async (req, res) => {
  const game = await (new Game(req.body)).save()
  req.flash('success', `Successfully added ${game.name}.`)
  res.redirect('/')
}
