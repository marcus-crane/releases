const express = require('express')
const bodyParser = require('body-parser')

const env = require('dotenv').config() // eslint-disable-line

const app = express()
const router = express.Router() // eslint-disable-line
const jsonParser = bodyParser.json() // eslint-disable-line
const port = 6789

const index = require('./routes/index')
const dashboard = require('./routes/dashboard')

app.locals.pretty = true

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', index)
app.use('/dashboard', dashboard)

app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err)
})

app.listen(port, () => {
  console.log(
    `Online and logged on at Port ${port}\n`,
    `NODE_ENV set to ${process.env.NODE_ENV} mode\n`
  )
})

module.exports = app
