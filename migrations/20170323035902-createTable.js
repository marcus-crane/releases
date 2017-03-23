'use strict'

exports.up = function (r, connection) {
    return Promise.all([
        r.tableCreate('games').run(connection)
    ])
}

exports.down = function (r, connection) {
    return Promise.all([
        r.tableDrop('games').run(connection)
    ])
}
