const fs = require('fs')
const gm = require('gm')

gm('../public/img/bgcover/image')
.blur(10, 5)
.write('../public/img/bgcover/image', (err) => {
    if (!err) {
        console.log('Blurred!')
    }
})
