const r = require('rethinkdbdash')({ db: 'vgdates' })

module.exports.get = function(tableName) {
    return r.table(tableName)
}

module.exports.getMonth = function(tableName, month) {
    return r.table(tableName).filter(r.row('releaseDate').match(`.*-${month}-.*`))
}

module.exports.add = function(tableName, obj) {
    return r.table(tableName).insert(obj)
}