exports.moment = require('moment')

exports.slug = require('slugs')

exports.dump = (obj) => JSON.stringify(obj, null, 2)

exports.siteName = 'VGDates Backend'

exports.menu = [
  { slug: '/', title: 'Home' },
  { slug: '/add', title: 'Add' },
  { slug: '/calendar', title: 'Calendar' }
]