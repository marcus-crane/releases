const mongoose = require('mongoose')

require('dotenv').config({ path: 'keys.env' })

mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise
mongoose.connection.on('error', err => {
  console.error('Uh oh', err.message)
})

require('./models/Game')

const app = require('./app')
app.set('port', process.env.PORT || 3456)
const server = app.listen(app.get('port'), () => {
  console.log(`VGDates is online on PORT ${server.address().port}`)
})