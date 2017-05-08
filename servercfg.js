// Imports
require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

// Routes
const index = require('./routes/index')

// Middlewares
app.locals.pretty = true
app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Serve static files
app.use(express.static(path.join(__dirname, '/public')))

// Error handlers

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send(err.message)
})

let server = require('http').createServer(app)

exports.listen = function (port, startupMessage) {
    server.listen(port)
    if (startupMessage) {
        console.log(`VGDates is now available at http://localhost:${port}`)
        console.log(`Running in ${app.get('env').toUpperCase()} mode`)
    }
}

exports.close = function() {
    server.close()
}
