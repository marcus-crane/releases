exports.moment = require('moment')

exports.slug = require('slugs')

exports.unslug = (slug) => {
  return slug.replace(/-/g, ' ')
    .split(' ')
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

exports.dump = (obj) => JSON.stringify(obj, null, 2)

exports.siteName = 'VGDates'

exports.menu = [
  {
    slug: '/games',
    title: 'Games',
    children: [{
      slug: '/games/add',
      title: 'Add a new title'
    }]
  }
]