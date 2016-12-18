const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

// Express setup
const app = express()
const router = express.Router()
const jsonParser = bodyParser.json()

// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Middleware Setup
const routes = require('./routes/index')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// Route Setup
app.use('/', routes)

// Catch 404s
app.use((req, res, next) => {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
})

// Development Error Handler (gimme those stack traces!)
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500)
        res.render('error', {
            message: err.message,
            error: err
        })
    })
}

// Production Error Handler (as if this will go into production, hah!)
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {
        message: err.message,
        error: {}
    })
})

module.exports = app