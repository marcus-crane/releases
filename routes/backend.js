const express = require('express');
const router = express.Router();

const path = require('path');
const moment = require('moment');

const Knex = require('knex');
const knexConfig = require('../knexfile');

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);

router.get('/', (req, res, next) => {
    console.log(req)
}

module.exports = router
