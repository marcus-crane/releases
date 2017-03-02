const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const server = require('../app')

describe('index', () => {
    describe('GET /', () => {
        it('should GET all games in the database', (done) => {
            chai.request(server)
            .get('/')
            .end((err, res) => {
                should.not.exist(err)
                res.status.should.equal(200)
                done()
            })
        })

        it('should 404 on any other page', (done) => {
            chai.request(server)
            .get('/notreal')
            .end((err, res) => {
                res.status.should.equal(404)
                done()
            })
        })
    })
})
