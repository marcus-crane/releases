const mongoose = require('mongoose')
const moment = require('moment')
const h = require('../helpers')
const Game = mongoose.model('Game')

exports.getGames = async (req, res) => {
  let games = await Game.find()
  games = games.filter(game => moment(game.release).isAfter())
  games.sort((a, b) => a.release - b.release)
  res.render('index', { title: 'Upcoming Games', games })
}

exports.editGame = async(req, res) => {
  let game = await Game.findOne({ slug: req.params.game })
  res.render('editGame', { title: `Edit ${game.name}`, game })
}

exports.queryGame = async(req, res) => {
  let game = await Game.findOne({ slug: req.params.game })
  res.render('gameDetail', { title: game.name, game})
}

exports.queryPlatform = async(req, res) => {
  const platform = h.unslug[req.params.platform]
  let games = await Game.find({ platforms: { $in: [platform] }})
  games = games.filter(game => moment(game.release).isAfter())
  games.sort((a, b) => a.release - b.release)
  res.render('index', { title: `Upcoming ${platform} releases`, games })
}

exports.addGame = (req, res) => {
  res.render('editGame', { title: 'Add Game' })
}

exports.createGame = async (req, res) => {
  const game = await (new Game(req.body)).save()
  req.flash('success', `Successfully added ${game.name}.`)
  res.redirect('/')
}

exports.sortByMonth = async(req, res) => {
  let games = await Game.find()
  const month = req.params.month.slice(0,1).toUpperCase() + req.params.month.slice(1)

  games = games.filter(game => (moment(game.release).format('MMMM').toLowerCase() === req.params.month))
  games.sort((a, b) => a.release - b.release)

  res.render('index', { title: `Releases for ${month}`, games})
}