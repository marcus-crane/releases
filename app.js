const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const router = express.Router();
const jsonParser = bodyParser.json();

const routes = require('./routes/index');
const api = require('./routes/api')
const backend = require('./routes/backend')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.pretty = true;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/api', api)
app.use('/backend', backend)

app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    if (app.get('env') !== 'development') {
        err = ''
    }
    res.render('error', {
        message: err.message,
        error: err
    });
});

app.listen(8080, () => {
    console.log(
        ' Online and logged on at Port 8080\n',
        `NODE_ENV set to ${process.env.NODE_ENV} mode\n`
    );
})
