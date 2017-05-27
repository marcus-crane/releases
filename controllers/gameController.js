const mongoose = require('mongoose')
// const Store = mongoose.model('Game')

exports.homePage = (req, res) => {
  res.render('index')
}