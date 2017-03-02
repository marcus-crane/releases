const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const server = require('../app')

describe('index', function() {
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

    describe('GET /', () => {
        it('should GET all games in the database', (done) => {
            chai.request(server)
            .get('/')
            .end(function (err, res) {
                should.not.exist(err)
                res.status.should.equal(200)
                done()
            })
        })

        it('should 404 on any other page', (done) => {
            chai.request(server)
            .get('/notreal')
            .end(function (err, res) {
                res.status.should.equal(404)
                done()
            })
        })
    })
})
