const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const server = require('../app')

describe('api', function() {
    const Knex = require('knex')
    const knexConfig = require('../knexfile')
    const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])
    
    beforeEach(function() {
        return knex.migrate.rollback()
        .then(function() {
            return knex.migrate.latest()
        })
        .then(function() {
            return knex.seed.run()
        })
    })

    afterEach(function(done) {
        knex.migrate.rollback()
        .then(function() {
            done()
        })
    })

    describe('GET /api/month', () => {
        it('should GET all games in the database as JSON', function(done) {
            chai.request(server)
            .get('/api/month')
            .end(function(err, res) {
                should.not.exist(err)
                res.status.should.equal(200)
                res.should.be.json
                res.body.should.be.a('array')
                done()
            })
        })

        it('should GET games for each month', function(done) {
            chai.request(server)
            .get('/api/month/1')
            .end(function(err, res) {
                should.not.exist(err)
                res.status.should.equal(200)
                res.should.be.json
                res.body.should.be.a('array')
                done()
            })
        })

        it('should FAIL on non-existant months', function(done) {
            chai.request(server)
            .get('/api/month/1234')
            .end(function (err, res) {
                should.exist(err)
                res.status.should.equal(404)
                done()
            })
        })
    })
})