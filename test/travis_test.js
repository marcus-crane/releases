const chai = require('chai')
const expect = chai.expect

describe('index', function() {
    describe('test travis', function() {
        it('should find that 1 + 1 equals 2', function(done) {
            let n = 1

            expect(n + n).to.equal(2)
            done()
        })
    })
})
