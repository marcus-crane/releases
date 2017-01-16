// Base requirements
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Express setup
const app = express();
const router = express.Router();
const jsonParser = bodyParser.json();

// Route setup
const routes = require('./routes/index');
const api = require('./routes/api')
const backend = require('./routes/backend')

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.pretty = true;

// Middleware Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Plug the routes into the middleware
app.use('/', routes);
app.use('/api', api)
app.use('/backend', backend)

// Catch 404s
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Development Error Handler (gimme those stack traces!)
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// Production Error Handler (as if this will go into production, hah!)
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(8080, () => {
    console.log(
        ' Online and logged on at Port 8080\n',
        `NODE_ENV set to ${process.env.NODE_ENV} mode\n`
    );
})
