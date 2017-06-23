const mongoose = require('mongoose')
const Game = mongoose.model('Game')

exports.getGames = async (req, res) => {
  const games = await Game.find()
  res.render('index', { title: 'Upcoming Games', games })
}

exports.renderAPI = async (req, res) => {
  const games = await Game.find()
  for (game of games) {
    delete game.slug
    console.log(game)
  }
  console.log(games)
  res.json(games)
}

exports.addGame = (req, res) => {
  res.render('editGame', { title: 'Add Game' })
}

exports.createGame = async (req, res) => {
  const game = await (new Game(req.body)).save()
  req.flash('success', `Successfully added ${game.name}.`)
  res.redirect('/')
}