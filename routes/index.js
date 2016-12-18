const express = require('express')
const router = express.Router()

const utils = require('../db/utils')

router.get('/', (req, res, next) => {
    res.render('index')
})

router.get('/movies', (req, res, next) => {
    res.render('movies')
})

router.get('games', (req, res, next) => {
    res.render('games')
})