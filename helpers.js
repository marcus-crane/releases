exports.moment = require('moment')

exports.slug = require('slugs')

exports.unslug = {
  '3ds': '3DS',
  'pc': 'PC',
  'ps3': 'PS3',
  'ps4': 'PS4',
  'ps-vita': 'PS Vita',
  'switch': 'Switch',
  'xbox-360': 'Xbox 360',
  'xbox-one': 'Xbox One'
}

exports.dump = (obj) => JSON.stringify(obj, null, 2)

exports.siteName = 'VGDates Backend'

exports.menu = [
  { slug: '/', title: 'Home' },
  { slug: '/add', title: 'Add' },
  { slug: '/calendar', title: 'Calendar' }
]